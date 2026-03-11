import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TreePine, Scissors, Zap, Trash2, Shovel, Construction } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const services = [
  {
    title: "Total Tree Removal",
    description: "Some of your trees are becoming safety hazards - we'll remove them.",
    link: "/services/total-tree-removal",
    icon: TreePine,
    color: "text-red-900",
    glow: "hover:shadow-[0_0_50px_-12px_rgba(127,29,29,0.4)]",
  },
  {
    title: "Stump Grinding",
    description: "Old stumps can cause problems in your yard. it's best to eliminate them.",
    link: "/services/stump-grinding",
    icon: Shovel,
    color: "text-amber-500",
    glow: "hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.4)]",
  },
  {
    title: "Tree & Shrub Trimming",
    description: "Growing shrubs and trees need routine trimming to thrive.",
    link: "/services/tree-and-shrub-trimming",
    icon: Scissors,
    color: "text-emerald-500",
    glow: "hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)]",
  },
  {
    title: "Yard Cleanups",
    description: "Maintain your yard's beauty through the changing seasons with cleanup services.",
    link: "/services/yard-cleanup",
    icon: Trash2,
    color: "text-slate-400",
    glow: "hover:shadow-[0_0_50px_-12px_rgba(148,163,184,0.4)]",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-safety font-extrabold tracking-[0.2em] uppercase text-xs mb-6 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-forest mb-8 tracking-tight"
          >
            What does your yard need to thrive?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-500 leading-relaxed max-w-3xl mx-auto"
          >
            Our team goes beyond expectations to ensure your satisfaction. That's why we offer several helpful services, all performed with meticulous care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="relative rounded-[3rem]"
            >
              <Link
                to={service.link}
                className={cn(
                  "group block relative p-10 lg:p-14 rounded-[3rem] bg-neutral-900 border border-white/5 h-full",
                  "hover:bg-neutral-800 hover:border-white/10 hover:-translate-y-4 hover:scale-[1.02]",
                  "transition-all duration-500",
                  "shadow-[0_20px_50px_rgba(0,0,0,0.2)]",
                  service.glow
                )}
              >
                <div className={cn(
                  "w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-10",
                  "bg-white/5 group-hover:bg-white/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm",
                  service.color
                )}>
                  <service.icon className="w-10 h-10" />
                </div>

                <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-safety transition-colors tracking-tight">
                  {service.title}
                </h3>

                <p className="text-neutral-400 text-xl leading-relaxed mb-12 font-medium">
                  {service.description}
                </p>

                <div className="flex items-center gap-4 text-sm font-black text-safety group-hover:text-white transition-all group-hover:gap-6">
                  <span className="uppercase tracking-[0.2em]">Service Details</span>
                  <div className="h-[2px] bg-current transition-all w-12 group-hover:w-20" />
                </div>

                {/* Decorative Accent */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[2.5rem] bg-forest text-white relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">Need Emergency Assistance?</h3>
              <p className="text-neutral-300 text-lg">
                Our emergency response team is available 24/7 for storm damage and
                hazardous tree situations in Big Lake and Monticello.
              </p>
            </div>
            <a
              href="tel:763-482-6247"
              className="bg-safety text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-safety-hover transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              Call (763) 482-6247
            </a>
          </div>

          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-safety/20 blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
