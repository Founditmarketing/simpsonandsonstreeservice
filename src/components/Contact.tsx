import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-safety font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-forest mb-6"
            >
              Ready for Your <span className="text-safety">Free Estimate?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-600 text-lg mb-12 max-w-lg"
            >
              Fill out the form below or call us directly. Our team will assess 
              your needs and provide a professional, no-obligation quote.
            </motion.p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:763-263-0000" className="text-xl font-bold text-forest hover:text-safety transition-colors">(763) 263-0000</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:info@simpsontree.com" className="text-xl font-bold text-forest hover:text-safety transition-colors">info@simpsontree.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest mb-1">Service Area</p>
                  <p className="text-xl font-bold text-forest">Big Lake, Monticello & Surrounding MN</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 shadow-2xl relative"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-forest px-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-forest px-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(763) 000-0000"
                    className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-forest px-1">Service Needed</label>
                <select className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all appearance-none">
                  <option>Tree Removal</option>
                  <option>Pruning & Trimming</option>
                  <option>Stump Grinding</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-forest px-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 bg-forest text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-forest/90 transition-all hover:shadow-xl active:scale-95 mt-4"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-safety/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
