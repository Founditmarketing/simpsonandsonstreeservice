import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-forest selection:bg-safety/40">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Free HD slow motion stock video - Sunlight in the trees [EH4VTCkO4yk].webm" type="video/webm" />
        </video>
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-forest/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white relative z-10"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-balance">
            Tree Removal Isn't Risky With the <motion.span
              animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ backgroundImage: 'linear-gradient(110deg, #DC2626 45%, #ffffff 50%, #DC2626 55%)', backgroundSize: '200% 100%' }}
              className="bg-clip-text text-transparent"
            >
              Right Team
            </motion.span>
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
        </motion.div>

        <div className="relative lg:h-[600px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[500px] mt-4 mb-24 mx-6 lg:mt-0 lg:mb-0 lg:mx-0 group"
          >
            {/* 24/7 Response Badge */}
            <div className="absolute top-6 left-6 z-30 flex items-center gap-2 bg-safety/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-white/20">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span className="text-xs font-black text-white uppercase tracking-widest">24/7 Response</span>
            </div>


            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white/10 aspect-[4/5] md:aspect-auto">
              <img
                src="/images/dl.png"
                alt="Professional Tree Service"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />
            </div>

            {/* Breathing Background Glows */}

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-12 w-80 h-80 bg-forest blur-[100px] rounded-full pointer-events-none z-0"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <motion.div
          animate={{ height: [12, 24, 12], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-safety to-transparent"
        />
      </motion.div>
    </section>
  );
}
