import { motion } from 'motion/react';
import { TreePine, Scissors, Zap, Trash2, Shovel, Construction } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const services = [
  {
    title: 'Tree Removal',
    description: 'Safe and efficient removal of trees of any size, including hazardous or hard-to-reach locations.',
    icon: TreePine,
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    title: 'Stump Grinding',
    description: 'Complete removal of unsightly stumps to clear your landscape for new growth or construction.',
    icon: Shovel,
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    title: 'Pruning & Trimming',
    description: 'Expert pruning to maintain tree health, improve aesthetics, and ensure safety from falling limbs.',
    icon: Scissors,
    color: 'bg-sky-500/10 text-sky-600',
  },
  {
    title: '24/7 Storm Response',
    description: 'Emergency tree services when you need them most. Rapid response to storm damage and hazards.',
    icon: Zap,
    color: 'bg-rose-500/10 text-rose-600',
  },
  {
    title: 'Lot Clearing',
    description: 'Professional clearing of trees and brush for new residential or commercial developments.',
    icon: Construction,
    color: 'bg-indigo-500/10 text-indigo-600',
  },
  {
    title: 'Debris Removal',
    description: 'Thorough cleanup and hauling of all wood, branches, and debris from your property.',
    icon: Trash2,
    color: 'bg-neutral-500/10 text-neutral-600',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-safety font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-forest mb-6"
          >
            Comprehensive Tree Care Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-600 leading-relaxed"
          >
            From routine maintenance to complex removals, our team of ISA certified
            professionals delivers precision and safety on every project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-forest/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500",
                service.color
              )}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-3 group-hover:text-safety transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-forest group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
                Learn More
                <div className="w-4 h-px bg-forest" />
              </div>
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
