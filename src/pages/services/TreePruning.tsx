import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Tree Pruning",
  "name": "Tree Pruning Services in Big Lake & Monticello, MN",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Simpson & Sons Tree Service",
    "telephone": "+17634826247",
    "address": { "@type": "PostalAddress", "addressLocality": "Big Lake", "addressRegion": "MN" }
  },
  "description": "Professional tree pruning and crown cleaning for healthy, safe, and structurally sound trees in Big Lake, Monticello, and surrounding Minnesota communities.",
  "url": "https://www.simpsonandsonstreeservice.com/services/tree-pruning-big-lake-mn"
};

const pruningTypes = [
  { name: "Crown Cleaning", desc: "Removing dead, diseased, or crossing branches to improve overall tree health and reduce fall risk." },
  { name: "Crown Raising", desc: "Removing lower branches to create clearance for structures, vehicles, pedestrians, or lawn equipment." },
  { name: "Crown Thinning", desc: "Selectively removing branches to improve light penetration and airflow through the canopy." },
  { name: "Hazard Pruning", desc: "Removing specific branches that pose an immediate danger to structures, vehicles, or people below." },
];

const faqs = [
  { q: "How often should trees be pruned?", a: "Most healthy trees benefit from pruning every 3–5 years. Trees with hazard branches, disease, or structural concerns should be evaluated annually." },
  { q: "Will pruning hurt my tree?", a: "Proper pruning helps trees. What damages trees is topping — the indiscriminate removal of large branches that leaves wounds the tree can't close. We never top trees." },
  { q: "My tree has dead branches at the top — is that normal?", a: "Dieback at the crown is an early warning sign. It can indicate root stress, drought, disease, or insect damage. It's worth an evaluation before it progresses." },
  { q: "When is the best time to prune trees in Minnesota?", a: "Late fall through early spring — when trees are dormant — is ideal for most species. Oak trees should NOT be pruned between April and July to prevent oak wilt, which is a serious concern in the Big Lake area." },
  { q: "Can you prune trees that are close to power lines?", a: "For branches within 10 feet of power lines, we coordinate with the utility company. We do not work on energized lines." },
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
    { "@type": "ListItem", "position": 2, "name": "Tree Pruning", "item": "https://www.simpsonandsonstreeservice.com/services/tree-pruning-big-lake-mn" }
  ]
};

export default function TreePruning() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Helmet>
        <title>Tree Pruning Services in Big Lake & Monticello, MN | Simpson & Sons</title>
        <meta name="description" content="Routine tree pruning keeps your trees healthy, safe, and beautiful. Simpson & Sons serves Big Lake, Monticello, and surrounding areas in Minnesota. Call (763) 482-6247 for a free estimate." />
        <link rel="canonical" href="https://www.simpsonandsonstreeservice.com/services/tree-pruning-big-lake-mn" />
        <meta property="og:title" content="Tree Pruning Services in Big Lake & Monticello, MN | Simpson & Sons" />
        <meta property="og:description" content="Routine tree pruning keeps your trees healthy, safe, and beautiful. Simpson & Sons serves Big Lake, Monticello, and surrounding areas in Minnesota. Call (763) 482-6247 for a free estimate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.simpsonandsonstreeservice.com/services/tree-pruning-big-lake-mn" />
        <meta property="og:image" content="https://www.simpsonandsonstreeservice.com/images/ss_pruning.jpg" />
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
            src="/images/ss_pruning.jpg"
            alt="Tree pruning service in Big Lake MN"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />
          <TextureOverlay opacity={0.05} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-sm uppercase tracking-widest mb-6"
            >
              Tree Health — Big Lake, MN
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9]"
            >
              Tree Pruning Services in<br />
              <span className="text-emerald-400">Big Lake & Monticello, MN</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8"
            >
              Proper pruning keeps trees structurally sound, reduces fall risk, and helps them live longer. We prune for health — not just appearance.
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

      {/* Types of Pruning */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-forest mb-4">Types of tree pruning we perform</h2>
            <p className="text-neutral-500 text-lg">Not all pruning is the same. Different goals require different approaches.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pruningTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-3">{type.name}</h3>
                <p className="text-neutral-600 leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minnesota Specifics */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-white mb-6">Pruning for Minnesota conditions</h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                Timing matters in Minnesota. We prune most species during the dormant season — late fall through early spring — to minimize stress and reduce the risk of disease transmission.
              </p>
              <div className="p-6 rounded-2xl bg-safety/10 border border-safety/20 mb-6">
                <h3 className="text-safety font-bold mb-2">Oak Wilt Warning</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Oak trees should never be pruned between April and July in Minnesota. Fresh pruning wounds attract sap beetles that carry oak wilt fungus, a disease that kills infected oaks quickly. If your oak has dead branches, call us — we'll advise on timing.
                </p>
              </div>
              <p className="text-neutral-400 text-lg leading-relaxed">
                We've been working with trees in the Big Lake and Monticello area for over four years and understand the regional species, disease pressures, and seasonal requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img src="/images/ss_pruning.jpg" alt="Tree pruning work in Minnesota" className="w-full h-full object-cover" />
            </motion.div>
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
            <h2 className="font-display text-4xl font-bold text-forest mb-4">Tree pruning questions, answered honestly</h2>
          </motion.div>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200"
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
