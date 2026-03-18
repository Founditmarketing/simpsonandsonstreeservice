import React from 'react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, ArrowLeft } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';

export default function YardCleanup() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-balance">
            {/* Service Hero */}
            <section className="relative py-32 bg-forest overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/images/2025/02/468244132_532895169626663_2868159616543966316_n.jpg"
                        alt="Yard Cleanups"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />

                    <TextureOverlay opacity={0.05} />

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-bold uppercase tracking-[0.2em]">Back to Home</span>
                            </Link>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-10 tracking-tight leading-[0.85]"
                        >
                            Yard <br />
                            <span className="relative inline-block translate-x-12 translate-y-4">
                                <span className="text-slate-300 font-black block">Cleanups</span>
                            </span>
                        </motion.h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:mt-24 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <p className="text-xl md:text-2xl text-neutral-200 font-medium leading-relaxed mb-4">
                                    Remove Yard Clutter
                                </p>
                                <p className="text-lg text-neutral-400 font-medium tracking-wide">
                                    Get a yard cleanup in Big Lake & Monticello, MN
                                </p>
                            </motion.div>

                            {[
                                { text: "A messy yard can ruin your curb appeal. Whether you're worried about the neighbors judging you or customers avoiding your business, you can eliminate the issue with routine yard cleanups. Simpson & Sons Tree Service will handle the job in Big Lake & Monticello, MN or the surrounding area. We're thorough and attentive, leaving your landscape looking pristine." },
                                { text: "Find out more about our yard cleanup process now by contacting us. We're always happy to answer questions." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 + 0.1 }}
                                    className={cn("relative", i >= 1 && "md:col-span-2")}
                                >
                                    <div className="absolute top-0 bottom-0 w-1 bg-safety/40 rounded-full" />
                                    <div className="flex ml-10 flex-col gap-4">
                                        <p className="flex-auto text-lg text-neutral-300 leading-relaxed font-medium">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section 1 - High Contrast */}
            <section className="py-24 bg-neutral-900 text-white overflow-hidden relative border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-8">
                                Adapt to the changing seasons
                            </h2>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                Your yard's needs change with the seasons. That's normal. Luckily, Simpson & Sons Tree Service offers seasonal yard maintenance in Big Lake, MN. We know what your landscape needs.
                            </p>
                            <div className="space-y-4 mb-8">
                                <h3 className="text-xl font-bold text-slate-400">You can count on us to:</h3>
                                {[
                                    'Remove lawn clippings in the summer',
                                    'Pick up fallen leaves and debris in the fall',
                                    'Blow away built-up snow in the winter',
                                ].map((point, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-safety shrink-0 mt-1" />
                                        <p className="text-neutral-300 font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                Schedule seasonal yard maintenance today. We'll meet your specific needs and provide a free estimate before getting started.
                            </p>
                            <motion.a
                                href="tel:763-482-6247"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 bg-safety text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-xl hover:bg-safety-hover transition-all"
                            >
                                <Phone className="w-6 h-6" />
                                Call (763) 482-6247
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] z-10"
                        >
                            <img
                                src="/images/shutterstock_40808218_1613591212_e1f3efc109cdd5f47e9238110897e051f6.jpg"
                                alt="Yard Cleanups"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-1/2 -left-24 w-96 h-96 bg-slate-500/10 blur-[120px] rounded-full" />

                {/* Depth Gradients */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </section>

            <Contact />
        </div>
    );
}
