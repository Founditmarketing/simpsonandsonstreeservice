import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, Users } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Founded', value: '1995', icon: Award },
    { label: 'Happy Clients', value: '5k+', icon: Users },
    { label: 'Safety Rating', value: '100%', icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/family-owned/800/800"
                alt="Family Owned Tree Service"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-safety/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-forest/20 blur-[80px] rounded-full" />
            
            <div className="absolute -bottom-8 -left-8 bg-forest text-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">29</p>
              <p className="text-sm font-medium text-neutral-300 uppercase tracking-widest">Years of Service</p>
            </div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-safety font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-forest mb-6"
            >
              A Legacy of <span className="text-safety">Excellence</span> in Tree Care
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-600 text-lg mb-8 leading-relaxed"
            >
              Founded in 1995, Simpson & Sons Tree Service has grown from a small family operation 
              into one of Central Minnesota's most trusted tree care providers. Our mission has 
              remained the same: to provide safe, professional, and reliable tree services 
              while maintaining the highest ISA Certified Arborist standards.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                'ISA Certified Arborists',
                'Fully Licensed & Insured',
                'Family Owned & Operated',
                'State-of-the-Art Equipment',
                '24/7 Emergency Response',
                'Free Detailed Estimates',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-safety" />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-100">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="text-3xl font-bold text-forest mb-1">{stat.value}</p>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
