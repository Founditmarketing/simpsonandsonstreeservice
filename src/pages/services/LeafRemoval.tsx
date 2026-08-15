import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Leaf Removal",
  "name": "Leaf Removal & Debris Cleanup — Big Lake, MN",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Simpson & Sons Tree Service",
    "telephone": "+17634826247",
    "address": { "@type": "PostalAddress", "addressLocality": "Big Lake", "addressRegion": "MN" }
  },
  "description": "Fall leaf removal and seasonal debris cleanup for homes and businesses in Big Lake, Monticello, and surrounding Minnesota communities.",
  "url": "https://www.simpsonandsonstreeservice.com/services/leaf-removal-big-lake-mn"
};

const faqs = [
  { q: "Do I really need leaf removal if I mulch with my mower?", a: "Mulching is great for light coverage — it returns nutrients to the soil. But when leaves accumulate in thick layers, mulching isn't enough. Matted leaves suffocate grass, trap moisture, and promote fungal disease over winter." },
  { q: "Can you do spring cleanup too?", a: "Yes. Spring cleanup removes matted leaves and debris that survived winter. It's a great time to clear tree beds and prep the yard for the growing season." },
  { q: "Do you pick up and haul the bags?", a: "Yes — full haul-away is included. We don't leave bags on the curb for you to deal with." },
  { q: "When should I schedule fall leaf cleanup in Big Lake?", a: "Peak demand is October and November. We recommend scheduling in advance — especially after a windy October week can dump the entire canopy at once." },
  { q: "Do you clean leaves from garden beds and tree rings too?", a: "Yes. We clear leaves from around landscaping, shrub beds, and tree bases where buildup is most problematic." },
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
    { "@type": "ListItem", "position": 2, "name": "Leaf Removal", "item": "https://www.simpsonandsonstreeservice.com/services/leaf-removal-big-lake-mn" }
  ]
};

export default function LeafRemoval() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Helmet>
        <title>Leaf Removal & Debris Cleanup — Big Lake, MN | Simpson & Sons</title>
        <meta name="description" content="Fall leaf cleanup, debris removal, and seasonal yard maintenance in Big Lake, Monticello, and surrounding areas. Simpson & Sons Tree Service — call (763) 482-6247 for a free estimate." />
        <link rel="canonical" href="https://www.simpsonandsonstreeservice.com/services/leaf-removal-big-lake-mn" />
        <meta property="og:title" content="Leaf Removal & Debris Cleanup — Big Lake, MN | Simpson & Sons" />
        <meta property="og:description" content="Fall leaf cleanup, debris removal, and seasonal yard maintenance in Big Lake, Monticello, and surrounding areas. Simpson & Sons Tree Service — call (763) 482-6247 for a free estimate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.simpsonandsonstreeservice.com/services/leaf-removal-big-lake-mn" />
        <meta property="og:image" content="https://www.simpsonandsonstreeservice.com/images/ss_leaf.jpg" />
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
            src="/images/ss_leaf.jpg"
            alt="Leaf removal service in Big Lake MN"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />
          <TextureOverlay opacity={0.05} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-amber-600/20 border border-amber-500/30 text-amber-400 font-bold text-sm uppercase tracking-widest mb-6"
            >
              Fall Cleanup — Big Lake, MN
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9]"
            >
              Leaf Removal &<br />
              <span className="text-amber-400">Debris Cleanup — Big Lake, MN</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8"
            >
              Leaves left over winter suffocate grass, grow mold, and harbor pests. We blow, rake, bag, and haul — leaving your property clean before the ground freezes.
            </motion.p>
            <motion.a
              href="tel:763-482-6247"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-safety text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-safety-hover transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <Phone className="w-6 h-6" />
              Call (763) 482-6247 — Free Estimate
            </motion.a>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-forest mb-6">Why leaf removal matters in Minnesota</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Wright County and Sherburne County properties with mature trees accumulate large volumes of leaves each fall. Leaving them isn't just an aesthetic issue — it's a lawn health issue:
              </p>
              <div className="space-y-4">
                {[
                  "Thick leaf cover suffocates grass going into winter dormancy",
                  "Trapped moisture under leaves promotes snow mold and fungal disease",
                  "Matted leaves become habitat for voles and other lawn pests",
                  "Leaves piled against foundations retain moisture that accelerates rot",
                  "Heavy accumulations in tree beds compete with root systems",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                    <p className="text-neutral-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src="/images/ss_leaf.jpg" alt="Fall leaf removal in Minnesota" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <h3 className="font-bold text-forest mb-2">Schedule before it's too late</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">Peak demand in the Big Lake area is October–November. A single windy week can put all your leaves on the ground at once. Book in advance to guarantee your spot.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-white mb-4">Leaf removal — common questions</h2>
          </motion.div>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-7 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="font-bold text-white text-lg mb-3">{faq.q}</h3>
                <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
