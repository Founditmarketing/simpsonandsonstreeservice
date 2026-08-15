import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, AlertTriangle, Clock } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Emergency Tree Removal",
  "name": "24/7 Emergency Tree Removal — Big Lake, MN",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Simpson & Sons Tree Service",
    "telephone": "+17634826247",
    "address": { "@type": "PostalAddress", "addressLocality": "Big Lake", "addressRegion": "MN" }
  },
  "description": "24-hour emergency tree removal for storm damage, fallen trees, and hazardous tree situations in Big Lake, Monticello, and within 50 miles of Big Lake, MN.",
  "url": "https://www.simpsonandsonstreeservice.com/services/emergency-tree-removal-big-lake-mn",
  "availableChannel": {
    "@type": "ServiceChannel",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 45.3336, "longitude": -93.7253 },
    "geoRadius": "80000"
  }
};

const faqs = [
  { q: "Does homeowner's insurance cover emergency tree removal?", a: "Often yes — if the tree damaged a structure like your home, fence, or detached garage. Document everything with photos before cleanup begins and contact your insurance company first. We work with homeowners regularly on insurance situations." },
  { q: "Is it safe to go outside after a tree has fallen?", a: "Never walk under a hanging limb or near a tree that's partially fallen. Wait for our crew. Hanging branches (called widow-makers) can drop without warning." },
  { q: "What if the fallen tree is on the property line with my neighbor?", a: "We handle these situations regularly. Generally, each property owner is responsible for the portion on their side. Call us — we'll assess and advise." },
  { q: "How fast can you respond?", a: "We dispatch within hours for active hazards — trees on structures, blocking roads, or near power lines. Call us directly at (763) 482-6247 and describe the situation." },
  { q: "What if the tree is near or on a power line?", a: "Do not approach. Call your utility company first to shut off power to the line, then call us. We will not work on live lines." },
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
    { "@type": "ListItem", "position": 2, "name": "Emergency Tree Removal", "item": "https://www.simpsonandsonstreeservice.com/services/emergency-tree-removal-big-lake-mn" }
  ]
};

export default function EmergencyTreeRemoval() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Helmet>
        <title>24/7 Emergency Tree Removal — Big Lake, MN | Simpson & Sons</title>
        <meta name="description" content="Storm damage? Tree on your roof or blocking your driveway? Simpson & Sons provides 24/7 emergency tree removal in Big Lake, Monticello, and within 50 miles. Call now: (763) 482-6247." />
        <link rel="canonical" href="https://www.simpsonandsonstreeservice.com/services/emergency-tree-removal-big-lake-mn" />
        <meta property="og:title" content="24/7 Emergency Tree Removal — Big Lake, MN | Simpson & Sons" />
        <meta property="og:description" content="Storm damage? Tree on your roof or blocking your driveway? Simpson & Sons provides 24/7 emergency tree removal in Big Lake, Monticello, and within 50 miles. Call now: (763) 482-6247." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.simpsonandsonstreeservice.com/services/emergency-tree-removal-big-lake-mn" />
        <meta property="og:image" content="https://www.simpsonandsonstreeservice.com/images/2025/02/463868846_511436665105847_1626324754473645511_n.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero — urgent, high-contrast */}
      <section className="relative py-40 bg-forest overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/images/2025/02/463868846_511436665105847_1626324754473645511_n.jpg"
            alt="Emergency tree removal crane truck Big Lake MN"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/65 to-forest" />
          <TextureOverlay opacity={0.05} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safety/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            {/* 24/7 Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety text-white font-black text-sm uppercase tracking-widest mb-6 shadow-lg"
            >
              <Clock className="w-4 h-4" />
              Available 24/7 — We Answer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9]"
            >
              Emergency Tree<br />
              <span className="text-safety">Removal — Big Lake, MN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10"
            >
              Storm damage, fallen trees, hanging limbs over your home — we respond to active hazards in Big Lake, Monticello, and within 50 miles. Day or night.
            </motion.p>

            <motion.a
              href="tel:763-482-6247"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-safety text-white px-10 py-5 rounded-2xl text-2xl font-black hover:bg-safety-hover transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <Phone className="w-7 h-7" />
              Call (763) 482-6247 Now
            </motion.a>
          </div>
        </div>
      </section>

      {/* What Counts as an Emergency */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-forest mb-6">
                What counts as a tree emergency?
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Minnesota's weather is hard on trees. Severe thunderstorms, ice storms, and straight-line winds cause sudden failures — even in trees that looked healthy. If any of the following apply, call us immediately:
              </p>
              <div className="space-y-4">
                {[
                  "A tree or large branch has fallen on your home, garage, or vehicle",
                  "A hanging limb is suspended over your roof, driveway, or walkway",
                  "A storm has left a tree leaning or partially uprooted",
                  "A tree is blocking a road or driveway",
                  "A damaged tree is near — but not touching — a power line",
                  "You're not sure if a tree is stable after a storm",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <AlertTriangle className="w-5 h-5 text-safety shrink-0 mt-1" />
                    <p className="text-neutral-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-8 rounded-3xl bg-safety/5 border border-safety/20">
                <h3 className="text-xl font-bold text-forest mb-4">What to do right now</h3>
                <div className="space-y-3">
                  {[
                    "Stay away from the fallen tree or hanging limb",
                    "Do not approach if there are downed power lines nearby",
                    "Move vehicles and people clear of the hazard zone",
                    "Take photos of the damage before you call",
                    "Call us: (763) 482-6247 — we answer 24/7",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-safety text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                      <p className="text-neutral-700 font-medium text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-forest text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-safety" />
                  <h3 className="text-xl font-bold">24/7 Response</h3>
                </div>
                <p className="text-neutral-300 mb-6">We dispatch within hours for active hazards. Describe the situation when you call and we'll prioritize accordingly.</p>
                <a
                  href="tel:763-482-6247"
                  className="flex items-center justify-center gap-2 bg-safety text-white px-6 py-3 rounded-xl font-bold hover:bg-safety-hover transition-all"
                >
                  <Phone className="w-5 h-5" />
                  (763) 482-6247
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Minnesota Storm Context */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-safety/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Minnesota storms don't give you a warning
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                Wright County and Sherburne County see severe thunderstorms, straight-line wind events, and ice storms that can topple trees in minutes. Many tree failures happen in trees that appeared structurally sound.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed">
                We've served the Big Lake and Monticello area for over four years. When storms hit, we're already fielding calls from neighbors — and we scale up our response to meet the demand.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img
                src="/images/ss_emergency.jpg"
                alt="Large tree uprooted and fallen in residential yard after storm in Minnesota"
                className="w-full h-full object-cover"
              />
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
            <h2 className="font-display text-4xl font-bold text-forest mb-4">Emergency tree removal — common questions</h2>
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
