import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { DrawCTA } from '../components/DrawCTA';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

const REVIEWS = [
  { name: "Pete Swanson", quote: "I gotta tell Y'all and every person I know out there to have Simpson & Sons do the work You want done! Amazing hard working Guys!" },
  { name: "Mike Kittridge", quote: "On time for bid and carried thru with job flawlessly and I was impressed with the quality of work." },
  { name: "Jim Stenglein", quote: "Had them remove lots of risky tall trees. This crew was extremely efficient, polite and friendly. Their clean up was phenomenal! I will use them again and recommend them to all. Not to mention they were the best price I found." },
  { name: "Michael Keglergray", quote: "Did a very fine job, cleaned up 100%. Can only recommend their service." },
  { name: "Brad LaRoque", quote: "Simpson & sons tree service did a great job removing a 60' ash tree from a very difficult spot lakeside on my property. Working off the ice because of no other access. I would highly recommend them. Also reasonably priced." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Simpson & Sons Tree Service",
  "telephone": "+17634826247",
  "url": "https://www.simpsonandsonstreeservice.com/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Big Lake",
    "addressRegion": "MN",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 45.3336, "longitude": -93.7253 },
  "areaServed": [
    { "@type": "City", "name": "Big Lake" },
    { "@type": "City", "name": "Monticello" },
    { "@type": "City", "name": "Elk River" },
    { "@type": "City", "name": "Becker" },
    { "@type": "City", "name": "Buffalo" },
    { "@type": "City", "name": "St. Michael" },
    { "@type": "City", "name": "Otsego" },
    { "@type": "City", "name": "Rogers" },
    { "@type": "City", "name": "Zimmerman" },
    { "@type": "City", "name": "Princeton" },
    { "@type": "City", "name": "Anoka" },
    { "@type": "City", "name": "St. Cloud" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": REVIEWS.length
  },
  "review": REVIEWS.map((r) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "reviewBody": r.quote
  }))
};

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Simpson & Sons Tree Service | Tree Removal, Pruning & Stump Grinding — Big Lake, MN</title>
                <meta name="description" content="Professional tree removal, pruning, stump grinding, and emergency storm response in Big Lake, Monticello, and within 50 miles. Serving residential and commercial properties. Call (763) 482-6247." />
                <link rel="canonical" href="https://www.simpsonandsonstreeservice.com/" />
                <meta property="og:title" content="Simpson & Sons Tree Service | Big Lake & Monticello, MN" />
                <meta property="og:description" content="Tree removal, pruning, stump grinding, and emergency service in Big Lake & Monticello, MN." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.simpsonandsonstreeservice.com/" />
                <meta property="og:image" content="https://www.simpsonandsonstreeservice.com/images/dl.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <Hero />
            <Services />
            <DrawCTA />
            <Gallery />
            <Testimonials />
            <Contact />
        </>
    );
}
