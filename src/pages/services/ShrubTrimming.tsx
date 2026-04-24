import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Shrub Trimming",
  "name": "Shrub Trimming & Shrub Removal — Big Lake, MN",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Simpson & Sons Tree Service",
    "telephone": "+17634826247",
    "address": { "@type": "PostalAddress", "addressLocality": "Big Lake", "addressRegion": "MN" }
  },
  "description": "Shrub trimming, hedge shaping, and shrub removal for residential and commercial properties in Big Lake and Monticello, MN.",
  "url": "https://simpsonandsonstreeservice.com/services/shrub-trimming-big-lake-mn"
};

const faqs = [
  { q: "When should I trim spring-flowering shrubs like lilacs?", a: "Immediately after they bloom — usually May or early June in the Big Lake area. Trimming too early removes the flower buds." },
  { q: "My shrubs are severely overgrown after years of neglect. Can they be saved?", a: "Often yes — many shrubs respond well to rejuvenation pruning. We assess first and advise whether to prune hard or replace." },
  { q: "Do you haul away trimmings?", a: "Yes. Full cleanup and debris removal is included with all shrub trimming services." },
  { q: "Can you shape shrubs into specific forms?", a: "Yes — formal hedges, rounded forms, or natural shapes. We'll discuss what you want before we start." },
  { q: "Do you also remove shrubs completely?", a: "Yes. We remove the shrub and root ball, leaving the area ready for replanting or lawn restoration." },
];

const timingGuide = [
  { type: "Spring-flowering shrubs", examples: "Lilac, Forsythia, Viburnum", timing: "Trim immediately after bloom (May–June)" },
  { type: "Summer-flowering shrubs", examples: "Spirea, Potentilla, Rose of Sharon", timing: "Trim in early spring before new growth" },
  { type: "Evergreen shrubs", examples: "Juniper, Arborvitae, Boxwood", timing: "Trim in late spring after new growth hardens" },
  { type: "Hedge shrubs", examples: "Burning Bush, Privet", timing: "Early spring and again in mid-summer" },
];

export default function ShrubTrimming() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Helmet>
        <title>Shrub Trimming & Shrub Removal — Big Lake, MN | Simpson & Sons</title>
        <meta name="description" content="Keep your hedges, bushes, and shrubs neat and healthy with professional shrub trimming by Simpson & Sons. Serving Big Lake & Monticello, MN. Call for a free estimate: (763) 482-6247." />
        <link rel="canonical" href="https://simpsonandsonstreeservice.com/services/shrub-trimming-big-lake-mn" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-40 bg-forest overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/images/ss_shrub.jpg"
            alt="Shrub trimming service in Big Lake MN"
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
              Shrub & Hedge Service — Big Lake, MN
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9]"
            >
              Shrub Trimming &<br />
              <span className="text-emerald-400">Shrub Removal — Big Lake, MN</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8"
            >
              Overgrown hedges, neglected bushes, and sprawling shrubs — we shape, maintain, and remove landscape shrubs on residential and commercial properties in the Big Lake area.
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

      {/* Timing Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-forest mb-4">When to trim shrubs in Minnesota</h2>
            <p className="text-neutral-500 text-lg">Timing is the most important factor in shrub health. Wrong timing means losing a season of blooms — or damaging the plant.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {timingGuide.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200"
              >
                <h3 className="text-lg font-bold text-forest mb-1">{item.type}</h3>
                <p className="text-sm text-neutral-500 mb-3 italic">{item.examples}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <p className="text-neutral-700 font-medium text-sm">{item.timing}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Trim */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-white mb-6">What we trim & remove</h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                We work with all common Minnesota landscape shrubs on residential and commercial properties throughout the Big Lake, Monticello, and surrounding area.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Boxwood","Arborvitae","Lilac","Spirea","Burning Bush","Juniper","Forsythia","Rose of Sharon","Viburnum","Potentilla","Privet Hedge","Custom Topiaries"].map((shrub, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-neutral-300 text-sm font-medium">{shrub}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img src="/images/ss_shrub.jpg" alt="Professionally trimmed shrubs at a Minnesota home" className="w-full h-full object-cover object-top" />
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
            <h2 className="font-display text-4xl font-bold text-forest mb-4">Shrub trimming — common questions</h2>
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
