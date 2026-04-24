import React, { Suspense, lazy, useRef } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';
import { TextureOverlay } from '../components/TextureOverlay';
import { Contact } from '../components/Contact';
import type { ServiceTown } from '../components/ServiceAreaMap';

const ServiceAreaMap = lazy(() => import('../components/ServiceAreaMap'));

const SERVICE_TOWNS: ServiceTown[] = [
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

export default function ContactPage() {
    const flyToRef = useRef<((coords: [number, number], zoom?: number) => void) | null>(null);
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-balance">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-forest overflow-hidden min-h-[50vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/2025/02/468244132_532895169626663_2868159616543966316_n.jpg"
                        alt="Contact Simpson & Sons"
                        className="w-full h-full object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/70 to-forest" />
                    <TextureOverlay opacity={0.05} />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-safety/20 border border-safety/30 text-safety font-bold text-sm uppercase tracking-widest mb-6"
                        >
                            Connect With Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9]"
                        >
                            Get Professional <br />
                            <span className="text-safety">Tree Care Solutions</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-neutral-200 font-medium leading-relaxed"
                        >
                            Serving home and business owners in Big Lake, Monticello, & within 50 miles. 
                            Ready for your free estimate or emergency help.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Emergency Banner */}
            <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-safety text-white p-6 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
                >
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="p-3 bg-white/20 rounded-2xl">
                            <Clock className="w-8 h-8 animate-pulse" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">24/7 Emergency Services Available</h3>
                            <p className="text-white/80 font-medium">We respond quickly to storm damage and hazardous trees.</p>
                        </div>
                    </div>
                    <a
                        href="tel:763-482-6247"
                        className="bg-white text-safety px-8 py-4 rounded-2xl text-xl font-black shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95 whitespace-nowrap relative z-10"
                    >
                        CALL (763) 482-6247
                    </a>
                    <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
                </motion.div>
            </div>

            {/* Contact Component */}
            <Contact />

            {/* Service Area Map */}
            <section className="bg-neutral-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-safety font-bold tracking-widest uppercase text-sm mb-4 block">
                            Where We Work
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
                            Our Service Area
                        </h2>
                        <p className="text-neutral-500 text-lg max-w-xl mx-auto">
                            Serving home and business owners in Big Lake, Monticello, &amp; within 50 miles.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-200"
                    >
                        <Suspense fallback={
                            <div className="w-full h-[480px] flex items-center justify-center bg-neutral-100 rounded-[2rem]">
                                <span className="text-neutral-400 text-sm">Loading map…</span>
                            </div>
                        }>
                            <ServiceAreaMap flyToRef={flyToRef} />
                        </Suspense>
                    </motion.div>

                    {/* Clickable town pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="flex flex-wrap justify-center gap-3 mt-8"
                    >
                        {SERVICE_TOWNS.map(({ name, coords, primary }) => (
                            <button
                                key={name}
                                onClick={() => flyToRef.current?.(coords, 12)}
                                className={`group flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
                                    primary
                                        ? 'bg-red-50 border-red-200 text-red-700 hover:bg-red-600 hover:border-red-600 hover:text-white'
                                        : 'bg-forest/5 border-forest/15 text-forest hover:bg-forest hover:text-white hover:border-forest'
                                }`}
                            >
                                <MapPin className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                                {name}
                                {primary && <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">★</span>}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
