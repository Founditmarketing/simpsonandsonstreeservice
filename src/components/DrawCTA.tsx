import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowRight, Sparkles } from 'lucide-react';

export function DrawCTA() {
    return (
        <section className="py-8 relative overflow-hidden bg-[#0d0d0d]">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-safety/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 group overflow-hidden relative"
                >
                    {/* Shine on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Left — label + text */}
                    <div className="flex items-center gap-4 text-center sm:text-left">
                        <div className="hidden sm:flex w-12 h-12 rounded-xl bg-safety/20 items-center justify-center flex-shrink-0">
                            <Trophy className="w-6 h-6 text-safety" />
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-1.5 text-safety font-bold text-xs uppercase tracking-widest mb-1">
                                <Sparkles className="w-3 h-3" />
                                Community Giveaway
                            </div>
                            <p className="text-white font-bold text-lg leading-tight">
                                Win up to <span className="text-safety">$1,500</span> in Tree Services —{' '}
                                <span className="text-neutral-400 font-normal text-base">bi-monthly drawing for local neighbors &amp; veterans.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right — CTA */}
                    <Link
                        to="/draw"
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-safety hover:bg-safety-hover text-white px-7 py-3.5 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg text-base group/btn"
                    >
                        Enter the Drawing
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
