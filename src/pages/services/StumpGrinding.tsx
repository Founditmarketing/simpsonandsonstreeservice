import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, ArrowLeft } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { cn } from '@/src/lib/utils';

export default function StumpGrinding() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-balance">
            {/* Service Hero */}
            <section className="relative py-32 bg-forest overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/images/2021/02/81199332_124652252346978_2918249124501389312_o.jpg"
                        alt="Stump Grinding"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />

                    <TextureOverlay opacity={0.05} />

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
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
                            Stump <br />
                            <span className="relative inline-block translate-x-12 translate-y-4">
                                <span className="text-amber-500 font-black block">Grinding</span>

                                <span
                                    className="absolute inset-0 pointer-events-none select-none"
                                    style={{
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        zIndex: 10
                                    }}
                                    aria-hidden="true"
                                >
                                    Grinding
                                </span>
                            </span>
                        </motion.h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:mt-24 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <p className="text-xl md:text-2xl text-neutral-200 font-medium leading-relaxed mb-4">
                                    Send Stumps Packing
                                </p>
                                <p className="text-lg text-neutral-400 font-medium tracking-wide">
                                    Remove them through stump grinding in Big Lake & Monticello, MN
                                </p>
                            </motion.div>

                            {[
                                {
                                    text: "If tripping over stumps is part of your normal yardwork routine, it's time to make a change. Simpson & Sons Tree Service offers stump grinding in Big Lake & Monticello, MN and surrounding areas. We can eliminate unsightly stumps for a more appealing and uniform landscape. Plus, with your stumps gone, you won't have to worry about tree regrowth or nesting pests making their homes in your stumps. Plan your stump removal with us now."
                                },
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
                            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-8">
                                Stop worrying about stumps
                            </h2>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                Has stump removal been on your to-do list for a while now? The process is so easy with us, you'll wonder why you didn't schedule it sooner. You'll call us to explain your issue, then we'll visit your home or business with equipment in tow. After you've approved our free estimate, we'll get to work. Every troublesome stump will be ground down. We'll even remove the resulting debris, leaving no trace behind.
                            </p>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                Make an appointment for stump grinding services in the Big Lake, MN area today.
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
                                src="/images/shutterstock_1402669742_1613591638_e1d2c8fac752d1c8ea1e90ff50996cc3d8.jpg"
                                alt="Stump Grinding"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-1/2 -left-24 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />

                {/* Depth Gradients */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </section>

            <Contact />
        </div>
    );
}
