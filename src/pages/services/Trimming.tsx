import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';

const Leaf = ({ className, style }: { className?: string, style?: React.CSSProperties, key?: React.Key }) => (
    <div
        className={`absolute w-8 h-4 bg-emerald-400 rounded-[100%_0_100%_0] opacity-100 pointer-events-none z-10 ${className}`}
        style={{
            filter: 'brightness(1.1) saturate(1.3) drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
            ...style
        }}
    />
);

export default function Trimming() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-balance">
            {/* Service Hero */}
            <section className="relative py-42 bg-forest overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/images/shutterstock_111443762_1613591556_e12bc26a5845a7959735cc7d785d00d400.jpg"
                        alt="Tree & Shrub Trimming"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />

                    <TextureOverlay opacity={0.05} />

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-4xl">

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-10 tracking-tight leading-[0.85]"
                        >
                            Trimming & <br />
                            <div className="relative inline-flex translate-x-12 translate-y-4 items-center">
                                {/* Slashing Line */}
                                <motion.div
                                    className="absolute left-0 right-0 h-[2px] bg-white z-50 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                    initial={{ scaleX: 0, originX: 0, opacity: 0 }}
                                    animate={{
                                        scaleX: [0, 1, 1],
                                        opacity: [0, 1, 0, 0],
                                        left: ["-10%", "0%", "110%"]
                                    }}
                                    transition={{
                                        duration: 0.75,
                                        repeat: Infinity,
                                        repeatDelay: 4.25,
                                        times: [0, 0.2, 0.5, 0.7, 1],
                                        ease: "easeInOut"
                                    }}
                                />

                                {"Pruning".split("").map((char, index) => {
                                    const seed = (index * 7919) % 1000;

                                    return (
                                        <div key={index} className="relative inline-flex justify-center items-center px-[0.02em]">
                                            {/* Hidden Placeholder for Layout */}
                                            <span className="text-emerald-500 font-black opacity-0 select-none">
                                                {char}
                                            </span>

                                            {/* Revealed Thin Font (Underneath) */}
                                            <motion.span
                                                className="absolute inset-0 text-emerald-500 font-extralight flex justify-center items-center"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                                {char}
                                            </motion.span>

                                            {/* Top Half (Falling Away) */}
                                            <motion.span
                                                className="absolute inset-0 text-emerald-500 font-black flex justify-center items-center"
                                                style={{ clipPath: "inset(0 0 50% 0)" }}
                                                animate={{
                                                    y: [0, 0, -40, -40, 0, 0, 0],
                                                    x: [0, 0, 10, 10, 0, 0, 0],
                                                    rotate: [0, 0, -15, -15, 0, 0, 0],
                                                    opacity: [1, 1, 1, 0, 0, 0, 1]
                                                }}
                                                transition={{
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    times: [0, 0.15, 0.35, 0.55, 0.65, 0.8, 1],
                                                    delay: index * 0.05,
                                                    ease: "easeOut"
                                                }}
                                            >
                                                {char}
                                                {/* Multiple Top Leaves */}
                                                {[0, 1].map((n) => (
                                                    <Leaf
                                                        key={n}
                                                        className={n === 0 ? "top-0 left-0 -translate-x-1/2" : "top-1/4 right-0 translate-x-1/3"}
                                                        style={{
                                                            transform: `rotate(${(seed * (n + 1) % 60) - 30}deg) scale(${0.5 + (seed % 5) / 10})`,
                                                            background: (n % 2 === 0) ? '#10b981' : '#34d399'
                                                        }}
                                                    />
                                                ))}
                                            </motion.span>

                                            {/* Bottom Half (Falling Down) */}
                                            <motion.span
                                                className="absolute inset-0 text-emerald-500 font-black flex justify-center items-center"
                                                style={{ clipPath: "inset(50% 0 -50% 0)" }}
                                                animate={{
                                                    y: [0, 0, 60, 60, 0, 0, 0],
                                                    x: [0, 0, -5, -5, 0, 0, 0],
                                                    rotate: [0, 0, 10, 10, 0, 0, 0],
                                                    opacity: [1, 1, 1, 0, 0, 0, 1]
                                                }}
                                                transition={{
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    times: [0, 0.15, 0.35, 0.55, 0.65, 0.8, 1],
                                                    delay: index * 0.05,
                                                    ease: "easeOut"
                                                }}
                                            >
                                                {char}
                                                {/* Multiple Bottom Leaves */}
                                                {[0, 1].map((n) => (
                                                    <Leaf
                                                        key={n}
                                                        className={n === 0 ? "bottom-0 right-0 translate-x-1/2" : "bottom-1/4 left-0 -translate-x-1/3"}
                                                        style={{
                                                            transform: `rotate(${(seed * (n + 2) % 120) - 45}deg) scale(${0.6 + (seed % 4) / 10})`,
                                                            background: (n % 2 === 0) ? '#059669' : '#047857'
                                                        }}
                                                    />
                                                ))}
                                            </motion.span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:mt-24 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <p className="text-xl md:text-2xl text-neutral-200 font-medium leading-relaxed mb-4">
                                    Maintain Healthy Trees Through Routine Care
                                </p>
                                <p className="text-lg text-neutral-400 font-medium tracking-wide">
                                    Look into tree pruning services around Big Lake & Monticello, MN
                                </p>
                            </motion.div>

                            {[
                                {
                                    text: "Overgrowth on trees might not seem like a problem - until you notice loose limbs and tilting trunks, that is. Fortunately, routine tree pruning can keep your trees healthy. If you want to care for your yard, you'll need help from Simpson & Sons Tree Service. We take care of trees on commercial and residential properties in and near Big Lake & Monticello, MN.",
                                },
                                {
                                    text: "Routine tree pruning can help trees thrive by eliminating dead and dying branches. That way, your trees can use nutrients more effectively. Plus, it eliminates the danger caused by these old branches falling on your building, vehicle or guests.",
                                },
                                {
                                    text: "Learn more about our tree pruning process now by speaking with us.",
                                }
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

            {/* Content Section 1 */}
            <section className="py-24 bg-neutral-900 text-white overflow-hidden relative border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-safety mb-8">
                                Start caring for your shrubs
                            </h2>

                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                It's not just your trees that need some TLC. That's why Simpson & Sons Tree Service also offers shrub trimming services in Big Lake, MN. We can clean up your shrubs to create a neat and tidy look. This service also helps shrubs to continue growing healthy and strong. Book a shrub trimming service today.
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
                                src="/images/shutterstock_111443762_1613591556_e12bc26a5845a7959735cc7d785d00d400.jpg"
                                alt="Tree & Shrub Trimming"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-1/2 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />

                {/* Depth Gradients */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </section>

            <Contact />
        </div>
    );
}
