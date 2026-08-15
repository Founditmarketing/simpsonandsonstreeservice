import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, AlertTriangle } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Tree Removal",
  "name": "Tree Removal in Big Lake & Monticello, MN",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Simpson & Sons Tree Service",
    "telephone": "+17634826247",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Big Lake",
      "addressRegion": "MN",
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 45.3336, "longitude": -93.7253 }
  },
  "description": "Professional tree removal for dead, diseased, hazardous, or unwanted trees on residential and commercial properties throughout Big Lake, Monticello, and surrounding Minnesota communities.",
  "url": "https://www.simpsonandsonstreeservice.com/services/tree-removal-big-lake-mn",
  "areaServed": [
    { "@type": "City", "name": "Big Lake" },
    { "@type": "City", "name": "Monticello" },
    { "@type": "City", "name": "Elk River" },
    { "@type": "City", "name": "Becker" }
  ]
};

const faqs = [
  { q: "Will you remove the stump too?", a: "Stump grinding is a separate service — we recommend scheduling it at the same time for the best value. We'll give you a combined estimate." },
  { q: "How long does a removal take?", a: "Most residential trees take 2–6 hours depending on size, location, and access. We'll give you a time estimate when we assess the tree." },
  { q: "Do I need a permit to remove a tree in Wright or Sherburne County?", a: "Permit requirements vary by municipality. We help our clients understand local ordinances before work begins — just ask when you call." },
  { q: "Can you remove large trees close to my house?", a: "Yes. We regularly remove trees in tight spaces near structures. Our crew is experienced in sectional removal to protect your property." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.simpsonandsonstreeservice.com/" },
    { "@type": "ListItem", "position": 2, "name": "Tree Removal", "item": "https://www.simpsonandsonstreeservice.com/services/tree-removal-big-lake-mn" }
  ]
};

export default function TreeRemoval() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Helmet>
        <title>Tree Removal in Big Lake & Monticello, MN | Simpson & Sons Tree Service</title>
        <meta name="description" content="Simpson & Sons Tree Service removes hazardous, dead, or unwanted trees on residential and commercial properties throughout Big Lake, Monticello, and within 50 miles. Free estimates. Call (763) 482-6247." />
        <link rel="canonical" href="https://www.simpsonandsonstreeservice.com/services/tree-removal-big-lake-mn" />
        <meta property="og:title" content="Tree Removal in Big Lake & Monticello, MN | Simpson & Sons Tree Service" />
        <meta property="og:description" content="Simpson & Sons Tree Service removes hazardous, dead, or unwanted trees on residential and commercial properties throughout Big Lake, Monticello, and within 50 miles. Free estimates. Call (763) 482-6247." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.simpsonandsonstreeservice.com/services/tree-removal-big-lake-mn" />
        <meta property="og:image" content="https://www.simpsonandsonstreeservice.com/images/ss_removal.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-40 bg-forest overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/images/ss_removal.jpg"
            alt="Tree removal service in Big Lake MN"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />
          <TextureOverlay opacity={0.05} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safety/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-safety/20 border border-safety/30 text-safety font-bold text-sm uppercase tracking-widest mb-6"
            >
              Professional Tree Service — Big Lake, MN
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9]"
            >
              Tree Removal in<br />
              <span className="text-safety">Big Lake & Monticello, MN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8"
            >
              Dead, diseased, storm-damaged, or simply in the wrong spot — we remove trees safely and cleanly on residential and commercial properties throughout Big Lake, Monticello, and within 50 miles.
            </motion.p>

            <motion.a
              href="tel:763-482-6247"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-safety text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-safety-hover transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <Phone className="w-6 h-6" />
              Call (763) 482-6247 — Free Estimate
            </motion.a>
          </div>
        </div>
      </section>

      {/* When You Need Removal */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-forest mb-6">
                When is tree removal necessary?
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Removing a tree isn't always about aesthetics. There are situations where a tree has to come down — for safety, property protection, or because the tree simply cannot be saved. Here's what we see most often in Big Lake and Monticello:
              </p>
              <div className="space-y-4">
                {[
                  "Dead or diseased trees that pose a fall risk",
                  "Trees leaning toward your home, garage, or fence",
                  "Storm damage that split or destabilized the trunk",
                  "Trees growing too close to power lines",
                  "Root damage that has made the tree structurally unsound",
                  "Clearing space for construction or landscaping",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-safety shrink-0 mt-1" />
                    <p className="text-neutral-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img
                src="/images/ss_removal.jpg"
                alt="Tree removal in Big Lake MN"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What the Process Looks Like */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-safety/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-white mb-4">What to expect when you call us</h2>
            <p className="text-neutral-400 text-lg">No surprises. Here's how a typical tree removal works with Simpson & Sons.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Free Estimate", desc: "We visit your property, assess the tree, and give you a clear, upfront price. No obligation." },
              { step: "02", title: "Safe Removal", desc: "Our crew uses proper rigging and sectional cutting to bring the tree down safely — protecting your property throughout." },
              { step: "03", title: "Full Cleanup", desc: "We haul away all debris. Your yard is left clean. If you want the stump gone too, we can grind it the same day." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                <div className="text-4xl font-black text-safety/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-forest mb-4">Questions homeowners ask us</h2>
            <p className="text-neutral-500 text-lg">Real answers — not marketing copy.</p>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200"
              >
                <h3 className="font-bold text-forest text-lg mb-3">{faq.q}</h3>
                <p className="text-neutral-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
