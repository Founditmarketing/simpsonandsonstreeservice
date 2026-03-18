import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone } from 'lucide-react';
import { Contact } from '../../components/Contact';
import { TextureOverlay } from '../../components/TextureOverlay';
import { cn } from '@/src/lib/utils';

export default function TreeRemoval() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-balance">
            {/* Service Hero */}
            <section className="relative py-42 bg-forest overflow-hidden min-h-[70vh] flex items-center">
                {/* Background Image with Parallax-like feel */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/images/2021/02/148184907_267360828076119_433527724562065567_o.jpg"
                        alt="Total Tree Removal"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />

                    {/* Visual Texture */}
                    <TextureOverlay opacity={0.05} />

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safety/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-6xl">

                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-10 tracking-tight leading-[0.85]"
                        >
                            Total Tree <br />
                            <span className="relative inline-block translate-x-12 translate-y-4">
                                {/* REMOVAL — falls like a tree, pivoting far off the left edge */}
                                <motion.span
                                    initial={{ rotate: -90, opacity: 1 }}
                                    animate={{ rotate: [null, -90, 0] }}
                                    transition={{
                                        duration: 1.4,
                                        times: [0, 0, 1],
                                        ease: [0.9, 0, 1, 1],
                                        delay: 0.8
                                    }}
                                    style={{ transformOrigin: "-60% center", display: "block" }}
                                    className="text-safety font-black relative group"
                                >
                                    Removal

                                    {/* Bark Texture Overlay */}
                                    <span
                                        className="absolute inset-0 pointer-events-none select-none opacity-95"
                                        style={{
                                            background: `
                                                linear-gradient(90deg, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.5) 100%),
                                                url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
                                                repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0, 0, 0, 0.1) 50px, rgba(0, 0, 0, 0.1) 100px),
                                                linear-gradient(to right, #4b3621, #63472b, #3e2b1a, #5a3d24)
                                            `,
                                            backgroundBlendMode: 'overlay',
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            WebkitMaskImage: 'linear-gradient(to top, black 0%, black 25%, transparent 90%)',
                                            maskImage: 'linear-gradient(to top, black 0%, black 25%, transparent 90%)'
                                        }}
                                        aria-hidden="true"
                                    >
                                        Removal
                                    </span>
                                </motion.span>

                                {/* Chainsaw cutting chips — burst from the left BEFORE the word falls */}
                                {[
                                    { sx: -180, sy: -10, ex: 40, ey: -50, r: 220, delay: 0.00 },
                                    { sx: -200, sy: 5, ex: 80, ey: -30, r: -160, delay: 0.05 },
                                    { sx: -160, sy: -20, ex: 20, ey: 15, r: 300, delay: 0.03 },
                                    { sx: -210, sy: 15, ex: 60, ey: -60, r: -250, delay: 0.08 },
                                    { sx: -175, sy: -5, ex: 30, ey: 30, r: 180, delay: 0.10 },
                                    { sx: -190, sy: 10, ex: 90, ey: -20, r: -130, delay: 0.13 },
                                    { sx: -150, sy: -15, ex: 50, ey: 45, r: 270, delay: 0.15 },
                                    { sx: -220, sy: 0, ex: 110, ey: -40, r: -200, delay: 0.18 },
                                    { sx: -165, sy: 20, ex: 15, ey: -70, r: 140, delay: 0.20 },
                                    { sx: -195, sy: -25, ex: 70, ey: 20, r: -310, delay: 0.22 },
                                    { sx: -180, sy: 30, ex: 100, ey: -10, r: 240, delay: 0.25 },
                                    { sx: -155, sy: -8, ex: 35, ey: 55, r: -170, delay: 0.28 },
                                    { sx: -185, sy: -12, ex: 55, ey: -45, r: 190, delay: 0.31 },
                                    { sx: -205, sy: 8, ex: 75, ey: 35, r: -220, delay: 0.34 },
                                    { sx: -170, sy: -18, ex: 25, ey: -65, r: 310, delay: 0.37 },
                                    { sx: -215, sy: 12, ex: 95, ey: -25, r: -140, delay: 0.40 },
                                    { sx: -178, sy: -3, ex: 45, ey: 50, r: 260, delay: 0.43 },
                                    { sx: -192, sy: 22, ex: 85, ey: -35, r: -190, delay: 0.46 },
                                    { sx: -158, sy: -22, ex: 15, ey: 40, r: 150, delay: 0.50 },
                                    { sx: -222, sy: -2, ex: 105, ey: -55, r: -280, delay: 0.54 },
                                    { sx: -168, sy: 18, ex: 65, ey: 25, r: 230, delay: 0.58 },
                                    { sx: -198, sy: -28, ex: 45, ey: -40, r: -100, delay: 0.62 },
                                    { sx: -183, sy: 28, ex: 90, ey: 60, r: 320, delay: 0.66 },
                                    { sx: -152, sy: -6, ex: 30, ey: -75, r: -240, delay: 0.70 },
                                ].map((chip, i) => (
                                    <motion.div
                                        key={`cut-${i}`}
                                        initial={{ opacity: 0, x: chip.sx, y: chip.sy, rotate: 0 }}
                                        animate={{
                                            opacity: [0, 1, 1, 0],
                                            x: chip.ex,
                                            y: chip.ey,
                                            rotate: chip.r
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            delay: chip.delay,
                                            ease: "easeOut"
                                        }}
                                        style={{
                                            clipPath: i % 3 === 0 ? 'polygon(0 0, 100% 50%, 0 100%)' : i % 3 === 1 ? 'polygon(50% 0, 0 100%, 100% 100%)' : 'polygon(20% 0, 100% 20%, 70% 100%, 0 80%)'
                                        }}
                                        className={`absolute top-1/2 left-0 ${i % 3 === 0 ? 'w-1.5 h-1' : i % 3 === 1 ? 'w-1 h-1.5' : 'w-2 h-1'} ${i % 2 === 0 ? 'bg-[#C8A472]' : 'bg-[#A0522D]'}`}
                                    />
                                ))}

                                {/* Impact shockwave — bursts outward from the base */}
                                <motion.div
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: [0, 2, 0], opacity: [0, 0.8, 0] }}
                                    transition={{ duration: 0.4, delay: 2.0, ease: "easeOut" }}
                                    className="absolute bottom-0 left-0 w-full h-2 bg-safety/50 blur-lg rounded-full"
                                />

                                {/* Wood chips — evenly spaced along the full bottom of the word */}
                                {[
                                    { ox: '0%', x: -50, y: 80, r: 200, c: 'bg-[#8B4513]', w: 'w-3', h: 'h-2' },
                                    { ox: '9%', x: -25, y: 100, r: -150, c: 'bg-[#5C3317]', w: 'w-2', h: 'h-3' },
                                    { ox: '18%', x: -60, y: 65, r: 280, c: 'bg-[#A0522D]', w: 'w-4', h: 'h-2' },
                                    { ox: '27%', x: 5, y: 110, r: -230, c: 'bg-[#6B3A2A]', w: 'w-2', h: 'h-2' },
                                    { ox: '36%', x: -30, y: 75, r: 170, c: 'bg-[#8B4513]', w: 'w-3', h: 'h-3' },
                                    { ox: '45%', x: 20, y: 95, r: -300, c: 'bg-[#A0522D]', w: 'w-2', h: 'h-2' },
                                    { ox: '55%', x: -15, y: 115, r: 130, c: 'bg-[#5C3317]', w: 'w-3', h: 'h-2' },
                                    { ox: '64%', x: 40, y: 85, r: -180, c: 'bg-[#8B4513]', w: 'w-2', h: 'h-3' },
                                    { ox: '73%', x: 10, y: 100, r: 250, c: 'bg-[#A0522D]', w: 'w-4', h: 'h-2' },
                                    { ox: '82%', x: 55, y: 70, r: -90, c: 'bg-[#6B3A2A]', w: 'w-2', h: 'h-2' },
                                    { ox: '91%', x: 35, y: 110, r: 320, c: 'bg-[#8B4513]', w: 'w-3', h: 'h-2' },
                                    { ox: '100%', x: 70, y: 80, r: -210, c: 'bg-[#5C3317]', w: 'w-2', h: 'h-3' },
                                ].map((chip, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                                        animate={{
                                            opacity: [0, 1, 1, 0],
                                            x: chip.x,
                                            y: chip.y,
                                            rotate: chip.r,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 2.0 + i * 0.015,
                                            ease: "easeOut"
                                        }}
                                        style={{
                                            left: chip.ox,
                                            clipPath: i % 3 === 0 ? 'polygon(50% 0, 0 100%, 100% 100%)' : i % 3 === 1 ? 'polygon(0 15%, 100% 0, 85% 100%, 15% 90%)' : 'polygon(0 0, 100% 40%, 40% 100%)'
                                        }}
                                        className={`absolute bottom-0 ${chip.w} ${chip.h} ${chip.c}`}
                                    />
                                ))}

                                {/* Settler chips — land close and stay, debris that didn't blow away */}
                                {[
                                    { ox: '5%', x: -8, y: 12, r: 25, c: 'bg-[#8B4513]', w: 'w-3', h: 'h-2' },
                                    { ox: '20%', x: 6, y: 8, r: -18, c: 'bg-[#A0522D]', w: 'w-2', h: 'h-2' },
                                    { ox: '33%', x: -12, y: 15, r: 40, c: 'bg-[#5C3317]', w: 'w-4', h: 'h-2' },
                                    { ox: '48%', x: 4, y: 10, r: -30, c: 'bg-[#6B3A2A]', w: 'w-2', h: 'h-3' },
                                    { ox: '62%', x: -6, y: 14, r: 55, c: 'bg-[#8B4513]', w: 'w-3', h: 'h-2' },
                                    { ox: '77%', x: 10, y: 9, r: -45, c: 'bg-[#A0522D]', w: 'w-2', h: 'h-2' },
                                    { ox: '90%', x: -9, y: 12, r: 20, c: 'bg-[#5C3317]', w: 'w-3', h: 'h-2' },
                                ].map((chip, i) => (
                                    <motion.div
                                        key={`settle-${i}`}
                                        initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                                        animate={{
                                            opacity: [0, 1, 0.7],
                                            x: chip.x,
                                            y: chip.y,
                                            rotate: chip.r,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 2.05 + i * 0.03,
                                            ease: "easeOut"
                                        }}
                                        style={{
                                            left: chip.ox,
                                            clipPath: i % 2 === 0 ? 'polygon(0 0, 100% 30%, 50% 100%)' : 'polygon(30% 0, 100% 100%, 0 70%)'
                                        }}
                                        className={`absolute bottom-0 ${chip.w} ${chip.h} ${chip.c}`}
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
                                    Removing Unwanted Trees Is a Breeze...
                                </p>
                                <p className="text-lg text-neutral-400 font-medium tracking-wide">
                                    When you turn to us for tree removals in Big Lake & Monticello, MN
                                </p>
                            </motion.div>

                            {[
                                { text: "Healthy trees can make a yard look amazing. Dead, dying or inconveniently located trees, however, only lead to problems. You can count on the tree removal pros at Simpson & Sons Tree Service. We work with residential and commercial properties throughout Big Lake & Monticello, MN and the surrounding areas." },
                                { text: "Large and small trees are no problem for our experienced crew. You can simply tell us about your needs, and we'll get to work. Tell us about your tree removal plan now by calling 763-482-6247." },
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
                            <h2 className="text-3xl md:text-4xl font-bold text-safety mb-8">
                                Don't wait for your trees to fall
                            </h2>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                Removing trees isn't always about aesthetics. You may need an emergency tree removal to make your yard safer.
                            </p>
                            <div className="space-y-4 mb-8">
                                <h3 className="text-xl font-bold text-emerald-400">This Is Necessary When:</h3>
                                {[
                                    'Trees are growing too close to your power lines',
                                    'Damaged trees are leaning towards your building',
                                    'Storms have split or otherwise damaged your trees',
                                ].map((point, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-safety shrink-0 mt-1" />
                                        <p className="text-neutral-300 font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                Hire us for your emergency tree removal in or around Big Lake, MN today. We'll handle the problem safely and efficiently.
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
                                src="/images/2021/02/148184907_267360828076119_433527724562065567_o.jpg"
                                alt="Total Tree Removal"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-1/2 -left-24 w-96 h-96 bg-safety/10 blur-[120px] rounded-full" />

                {/* Depth Gradients */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </section>

            <Contact />
        </div>
    );
}
