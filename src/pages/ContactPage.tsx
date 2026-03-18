import React from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { TextureOverlay } from '../components/TextureOverlay';
import { Contact } from '../components/Contact';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-balance">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-forest overflow-hidden min-h-[50vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/2025/02/468244132_532895169626663_2868159616543966316_n.jpg"
                        alt="Contact Simpson & Sons"
                        className="w-full h-full object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/70 to-forest" />
                    <TextureOverlay opacity={0.05} />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-safety/20 border border-safety/30 text-safety font-bold text-sm uppercase tracking-widest mb-6"
                        >
                            Connect With Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9]"
                        >
                            Get Professional <br />
                            <span className="text-safety">Tree Care Solutions</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-neutral-200 font-medium leading-relaxed"
                        >
                            Serving home and business owners in Big Lake, Monticello, & within 50 miles. 
                            Ready for your free estimate or emergency help.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Emergency Banner */}
            <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-safety text-white p-6 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
                >
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="p-3 bg-white/20 rounded-2xl">
                            <Clock className="w-8 h-8 animate-pulse" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">24/7 Emergency Services Available</h3>
                            <p className="text-white/80 font-medium">We respond quickly to storm damage and hazardous trees.</p>
                        </div>
                    </div>
                    <a
                        href="tel:763-482-6247"
                        className="bg-white text-safety px-8 py-4 rounded-2xl text-xl font-black shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95 whitespace-nowrap relative z-10"
                    >
                        CALL (763) 482-6247
                    </a>
                    <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
                </motion.div>
            </div>

            {/* Contact Component */}
            <Contact />
        </div>
    );
}
