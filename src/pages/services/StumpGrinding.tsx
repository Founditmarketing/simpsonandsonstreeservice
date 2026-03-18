import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { cn } from '@/src/lib/utils';

export default function StumpGrinding() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-balance">
            {/* Service Hero */}
            <section className="relative py-42 bg-forest overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/images/shutterstock_1402669742_1613591638_e1d2c8fac752d1c8ea1e90ff50996cc3d8.jpg"
                        alt="Stump Grinding"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />

                    <TextureOverlay opacity={0.05} />

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-4xl">

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-10 tracking-tight leading-[0.85]"
                        >
                            Stump <br />
                            <span className="relative inline-block translate-x-12 translate-y-4">
                                {/* Silver Grinder Teeth - Curved around G (Responsive em units) */}
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-8/15 animate-grinding w-[0.4em] h-[1em] pointer-events-none">
                                    {[...Array(5)].map((_, i) => {
                                        const angle = ((i - 2) * 8) * (Math.PI / 180);
                                        const radius = 0.5; // in em
                                        const tx = (-Math.cos(angle) * radius + radius - 0.16) + 'em';
                                        const ty = (Math.sin(angle) * (radius * 1.3)) + 'em';
                                        return (
                                            <span
                                                key={i}
                                                className="absolute w-[0.1em] h-[0.08em] bg-neutral-400 border border-white/20 shadow-[inset_-1px_0_2px_rgba(0,0,0,0.5)]"
                                                style={{
                                                    left: tx,
                                                    top: `calc(50% + ${ty})`,
                                                    transform: `translate(-50%, -50%) rotate(${-angle * (180 / Math.PI)}deg)`,
                                                    clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)'
                                                }}
                                            />
                                        );
                                    })}
                                </span>

                                <span className="text-amber-500 font-black block animate-grinding">Grinding</span>

                                <span
                                    className="absolute inset-0 pointer-events-none select-none animate-grinding"
                                    style={{
                                        background: 'linear-gradient(to right, #797b7eff 0%, #d1d5db 8%, transparent 15%)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        zIndex: 10
                                    }}
                                    aria-hidden="true"
                                >
                                    G
                                </span>

                                {/* Grinding Glow - Sync with 4s loop (1.2s - 2.4s) */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0, 0.5, 0.25, 0.65, 0.4, 0.55, 0.25, 0]
                                    }}
                                    transition={{
                                        duration: 1.3,
                                        delay: 1.2,
                                        times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
                                        repeat: Infinity,
                                        repeatDelay: 2.7,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-16 h-48 pointer-events-none"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(139, 69, 19, 0.6) 0%, transparent 70%)',
                                        filter: 'blur(10px)',
                                        x: -40
                                    }}
                                />

                                {/* Flying Wood Chips - Sync with 4s grinding loop (shaking phase 1.2s - 2.4s) */}
                                {[...Array(24)].map((_, i) => (
                                    <motion.div
                                        key={`chip-${i}`}
                                        initial={{ opacity: 0, x: -40, y: 30 - (Math.random() * 60), rotate: 0 }}
                                        animate={{
                                            opacity: [0, 1, 1, 0],
                                            x: 40 + Math.random() * 140, // Fly to the right, starting from the rammed left position
                                            y: (Math.random() - 0.5) * 180,
                                            rotate: Math.random() * 180,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 1.2 + (i * 0.04), // Starts at 1.2 (30%), ends around 2.1s (52%)
                                            times: [0, 0.4, 0.6, 1], // Instant in, stay visible, then fast fade
                                            repeat: Infinity,
                                            repeatDelay: 3.55, // 0.45 + 3.55 = 4.0
                                            ease: "linear"
                                        }}
                                        style={{
                                            clipPath: i % 3 === 0 ? 'polygon(0 0, 100% 50%, 0 100%)' : i % 3 === 1 ? 'polygon(50% 0, 0 100%, 100% 100%)' : 'polygon(20% 0, 100% 20%, 70% 100%, 0 80%)',
                                            left: '0px',
                                            top: '40%'
                                        }}
                                        className={`absolute -ml-5 w-3 h-2 ${i % 2 === 0 ? 'bg-[#C8A472]' : 'bg-[#A0522D]'}`}
                                    />
                                ))}
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
