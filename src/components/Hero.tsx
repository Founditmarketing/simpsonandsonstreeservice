import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-forest selection:bg-safety/40">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >


          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-balance">
            Tree Removal Isn't Risky With the <span className="text-safety">Right Team</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
            Trust a renowned tree company in Big Lake & Monticello, MN
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-safety text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-safety-hover transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-95"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              Our Services
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-safety" />
              <span className="text-sm font-medium text-neutral-300">Fully Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-safety" />
              <span className="text-sm font-medium text-neutral-300">ISA Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-safety" />
              <span className="text-sm font-medium text-neutral-300">24/7 Response</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative md:mt-0"
          style={{ y: y1 }}
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] md:aspect-auto">
            <img
              src="/images/dl.png"
              alt="Professional Tree Service"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-safety/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-forest/40 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-safety to-transparent" />
      </motion.div>
    </section>
  );
}
