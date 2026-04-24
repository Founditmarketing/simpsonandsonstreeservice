import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const CENTER: [number, number] = [45.3336, -93.7253];
const RADIUS_MILES = 50;
const MILES_TO_METERS = 1609.34;

export interface ServiceTown {
  name: string;
  coords: [number, number];
  primary?: boolean;
}

export const SERVICE_TOWNS: ServiceTown[] = [
  { name: 'Big Lake',    coords: [45.3336, -93.7253], primary: true },
  { name: 'Monticello',  coords: [45.3058, -93.7939], primary: true },
  { name: 'Elk River',   coords: [45.3022, -93.5686] },
  { name: 'Becker',      coords: [45.3944, -93.8722] },
  { name: 'Buffalo',     coords: [45.1719, -93.8744] },
  { name: 'St. Michael', coords: [45.2083, -93.6647] },
  { name: 'Otsego',      coords: [45.2775, -93.5914] },
  { name: 'Rogers',      coords: [45.1869, -93.5531] },
  { name: 'Zimmerman',   coords: [45.4433, -93.5942] },
  { name: 'Princeton',   coords: [45.5680, -93.5822] },
  { name: 'Anoka',       coords: [45.1977, -93.3875] },
  { name: 'St. Cloud',   coords: [45.5579, -94.1632] },
];

interface Props {
  flyToRef: React.MutableRefObject<((coords: [number, number], zoom?: number) => void) | null>;
}

export default function ServiceAreaMap({ flyToRef }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || mapInstance.current) return;

    import('leaflet').then((L) => {
      // Fix bundler icon paths
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(containerRef.current!, {
        center: CENTER,
        zoom: 9,
        scrollWheelZoom: true,
        zoomControl: true,
        attributionControl: true,
      });

      mapInstance.current = map;

      // Expose flyTo for parent
      flyToRef.current = (coords, zoom = 12) => {
        map.flyTo(coords, zoom, { duration: 1.2 });
      };

      // Light clean tile layer — easy to read
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/">OSM</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // 50-mile radius circle
      L.circle(CENTER, {
        radius: RADIUS_MILES * MILES_TO_METERS,
        color: '#DC2626',
        fillColor: '#DC2626',
        fillOpacity: 0.07,
        weight: 2.5,
        dashArray: '10 8',
      })
        .addTo(map)
        .bindTooltip('50-Mile Service Area', {
          permanent: false,
          className: 'leaflet-service-tooltip',
          direction: 'top',
        });

      // Marker factories
      const primaryIcon = L.divIcon({
        className: '',
        html: `<div style="
          position:relative;width:22px;height:22px;
        ">
          <div style="
            position:absolute;inset:0;background:#DC2626;border-radius:50%;
            border:3px solid #fff;box-shadow:0 2px 8px rgba(220,38,38,0.6);
          "></div>
        </div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
        popupAnchor: [0, -14],
      });

      const secondaryIcon = L.divIcon({
        className: '',
        html: `<div style="
          width:13px;height:13px;background:#f97316;border-radius:50%;
          border:2px solid #fff;box-shadow:0 1px 5px rgba(249,115,22,0.5);
        "></div>`,
        iconSize: [13, 13],
        iconAnchor: [6, 6],
        popupAnchor: [0, -10],
      });

      SERVICE_TOWNS.forEach(({ name, coords, primary }) => {
        const marker = L.marker(coords, { icon: primary ? primaryIcon : secondaryIcon }).addTo(map);

        // Permanent label for primary towns
        if (primary) {
          marker.bindTooltip(name, {
            permanent: true,
            direction: 'top',
            offset: [0, -14],
            className: 'leaflet-primary-label',
          });
        }

        marker.bindPopup(
          `<div style="font-family:system-ui,sans-serif;min-width:130px">
            <div style="font-size:14px;font-weight:700;color:#0A0A0A;margin-bottom:2px">${name}</div>
            <div style="font-size:11px;color:${primary ? '#DC2626' : '#f97316'};font-weight:600;text-transform:uppercase;letter-spacing:.05em">
              ${primary ? '★ Primary Area' : 'Service Area'}
            </div>
          </div>`,
          { maxWidth: 200 }
        );
      });
    });

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
      flyToRef.current = null;
    };
  }, [flyToRef]);

  return (
    <>
      {/* Custom tooltip / label CSS */}
      <style>{`
        .leaflet-primary-label {
          background: #0A0A0A;
          border: none;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 999px;
          letter-spacing: .04em;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,.35);
        }
        .leaflet-primary-label::before { display: none; }
        .leaflet-service-tooltip {
          background: #DC2626;
          border: none;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(220,38,38,.4);
        }
        .leaflet-service-tooltip::before { display: none; }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,.15);
        }
        .leaflet-popup-tip { display: none; }
      `}</style>

      <div
        ref={containerRef}
        style={{ width: '100%', height: '480px' }}
      />
    </>
  );
}
