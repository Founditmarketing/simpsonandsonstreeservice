import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Yard Cleanup",
  "name": "Yard Cleanup Services in Big Lake & Monticello, MN",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Simpson & Sons Tree Service",
    "telephone": "+17634826247",
    "address": { "@type": "PostalAddress", "addressLocality": "Big Lake", "addressRegion": "MN" }
  },
  "description": "Professional yard cleanup including branch removal, debris hauling, and post-storm cleanup for residential and commercial properties in Big Lake, Monticello, and surrounding areas.",
  "url": "https://simpsonandsonstreeservice.com/services/yard-cleanup-big-lake-mn"
};

const faqs = [
  { q: "What kinds of debris do you haul?", a: "Fallen branches, brush piles, wood debris from past tree removal or storm damage, and general organic yard waste. We focus on tree-related cleanup." },
  { q: "Can you clean a property before a real estate closing?", a: "Yes — quick turnaround is available for sale-ready properties. Call us with your timeline and we'll work around it." },
  { q: "Do you do ongoing yard maintenance?", a: "Our focus is tree-related debris and cleanup. For routine lawn care and mowing, we recommend connecting with a local lawn service." },
  { q: "How do I get a quote?", a: "Call (763) 482-6247 or use our contact form. We'll visit your property and provide a free estimate before any work begins." },
];

export default function YardCleanup() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Helmet>
        <title>Yard Cleanup Services in Big Lake & Monticello, MN | Simpson & Sons</title>
        <meta name="description" content="Professional yard cleanup services from Simpson & Sons — serving Big Lake, Monticello, and surrounding Minnesota communities. Branches, debris, post-storm cleanup. Call (763) 482-6247." />
        <link rel="canonical" href="https://simpsonandsonstreeservice.com/services/yard-cleanup-big-lake-mn" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-40 bg-forest overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/images/ss_yard.jpg"
            alt="Yard cleanup service in Big Lake MN"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />
          <TextureOverlay opacity={0.05} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-slate-500/20 border border-slate-400/30 text-slate-300 font-bold text-sm uppercase tracking-widest mb-6"
            >
              Property Cleanup — Big Lake, MN
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9]"
            >
              Yard Cleanup Services in<br />
              <span className="text-slate-300">Big Lake & Monticello, MN</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8"
            >
              Brush piles, fallen branches, post-storm debris — we clean it up and haul it away. Residential and commercial properties throughout the Big Lake area.
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

      {/* Who Calls Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-forest mb-6">What yard cleanup covers</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                We focus on tree-related debris on residential and commercial properties. Here's what we commonly handle:
              </p>
              <div className="space-y-4">
                {[
                  "Fallen branch and brush removal",
                  "Wood debris haul-out after a tree removal",
                  "Post-storm property cleanup",
                  "Brush pile elimination",
                  "General debris cleanup before landscaping projects",
                  "Sale-ready property cleanup on a tight schedule",
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
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img src="/images/ss_yard.jpg" alt="Yard cleanup crew at work in Minnesota" className="w-full h-full object-cover" />
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
            <h2 className="font-display text-4xl font-bold text-white mb-4">Yard cleanup questions</h2>
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
