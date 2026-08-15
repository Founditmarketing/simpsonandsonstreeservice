import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Stump Grinding",
  "name": "Stump Grinding in Big Lake & Monticello, MN",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Simpson & Sons Tree Service",
    "telephone": "+17634826247",
    "address": { "@type": "PostalAddress", "addressLocality": "Big Lake", "addressRegion": "MN" }
  },
  "description": "Professional stump grinding that eliminates tree stumps below grade, prevents regrowth, and removes tripping hazards on residential and commercial properties in Big Lake and Monticello, MN.",
  "url": "https://www.simpsonandsonstreeservice.com/services/stump-grinding-big-lake-mn",
  "areaServed": [{ "@type": "City", "name": "Big Lake" }, { "@type": "City", "name": "Monticello" }]
};

const faqs = [
  { q: "How deep do you grind a stump?", a: "Typically 6–12 inches below grade — enough to replant grass, lay sod, or put in new landscaping over the area." },
  { q: "What happens to the wood chips?", a: "We can leave them as mulch to fill the hole (they'll decompose naturally), or haul them away — your choice." },
  { q: "Will the roots die after grinding?", a: "Yes. Grinding severs the stump from the root system and prevents the tree from resprouting. Roots left in the ground will decompose on their own over time." },
  { q: "Can you grind multiple stumps in one visit?", a: "Absolutely — and it's more cost-effective to schedule all stumps at once. We'll give you a combined estimate." },
  { q: "Is stump grinding the same as stump removal?", a: "No. Grinding chips the stump below grade. Full removal extracts the entire root ball, which is more invasive and usually unnecessary for most properties." },
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
    { "@type": "ListItem", "position": 2, "name": "Stump Grinding", "item": "https://www.simpsonandsonstreeservice.com/services/stump-grinding-big-lake-mn" }
  ]
};

export default function StumpGrinding() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Helmet>
        <title>Stump Grinding in Big Lake & Monticello, MN | Simpson & Sons Tree Service</title>
        <meta name="description" content="Remove unsightly tree stumps with professional stump grinding by Simpson & Sons. Serving Big Lake, Monticello, and within 50 miles. Prevents regrowth and pests. Call (763) 482-6247." />
        <link rel="canonical" href="https://www.simpsonandsonstreeservice.com/services/stump-grinding-big-lake-mn" />
        <meta property="og:title" content="Stump Grinding in Big Lake & Monticello, MN | Simpson & Sons Tree Service" />
        <meta property="og:description" content="Remove unsightly tree stumps with professional stump grinding by Simpson & Sons. Serving Big Lake, Monticello, and within 50 miles. Prevents regrowth and pests. Call (763) 482-6247." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.simpsonandsonstreeservice.com/services/stump-grinding-big-lake-mn" />
        <meta property="og:image" content="https://www.simpsonandsonstreeservice.com/images/ss_stump.jpg" />
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
            src="/images/ss_stump.jpg"
            alt="Stump grinding service in Big Lake MN"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />
          <TextureOverlay opacity={0.05} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-sm uppercase tracking-widest mb-6"
            >
              Stump Removal — Big Lake, MN
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9]"
            >
              Stump Grinding in<br />
              <span className="text-amber-400">Big Lake & Monticello, MN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8"
            >
              Old stumps attract pests, cause regrowth, and create tripping hazards. We grind them down below grade and haul away the debris — leaving your yard clean and ready.
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

      {/* Why Stumps Are a Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-forest mb-6">
                Why stumps are more than just an eyesore
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                A leftover stump isn't just ugly — it's an active problem for your yard. Here's what homeowners in Big Lake and Monticello deal with when stumps go unaddressed:
              </p>
              <div className="space-y-4">
                {[
                  "Stumps invite carpenter ants, termites, and wood-boring beetles",
                  "Root systems continue to sprout new growth long after the tree is gone",
                  "Stumps are a tripping hazard for children and lawn equipment",
                  "They can harbor fungal disease that spreads to neighboring trees",
                  "Mowing around stumps is time-consuming and damages equipment",
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
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img
                src="/images/ss_stump.jpg"
                alt="Tree stump after grinding in Big Lake MN"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-white mb-4">How stump grinding works</h2>
            <p className="text-neutral-400 text-lg">The whole process is faster and cleaner than most homeowners expect.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free Estimate", desc: "We assess all stumps on your property and provide a clear, upfront quote." },
              { step: "02", title: "Grinding", desc: "Our machine chips the stump 6–12 inches below grade — no excavation needed." },
              { step: "03", title: "Debris Removal", desc: "Wood chip debris is hauled away or left as mulch — your preference." },
              { step: "04", title: "Ready to Replant", desc: "The area is ready for grass seed, sod, or new landscaping immediately." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl font-black text-amber-500/40 mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
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
            <h2 className="font-display text-4xl font-bold text-forest mb-4">Common questions about stump grinding</h2>
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
