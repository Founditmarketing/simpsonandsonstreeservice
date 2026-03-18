import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, User, Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, TreeDeciduous, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function DrawPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6 pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-forest/10"
                >
                    <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6 text-forest">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-forest mb-4">Entry Received!</h2>
                    <p className="text-neutral-600 mb-8 text-lg">
                        Thank you for entering our bi-monthly drawing. We'll contact the winner via phone or email!
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="w-full bg-forest text-white py-4 rounded-xl font-bold hover:bg-forest/90 transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                        Enter Another Draw
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-50 pt-28 pb-20 overflow-hidden relative">
            <Helmet>
                <title>Bi-Monthly Drawing | Simpson & Sons Tree Service</title>
                <meta name="description" content="Enter our bi-monthly drawing for a chance to win tree service discounts and prizes. Free to enter for Big Lake & Monticello residents." />
            </Helmet>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-safety/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-6 bg-forest/5 self-start px-4 py-2 rounded-full border border-forest/10 w-fit">
                                <Trophy className="w-5 h-5 text-safety" />
                                <span className="text-forest font-bold uppercase tracking-widest text-xs">Community Giveback</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-display font-bold text-forest mb-6 leading-tight">
                                Enter Our <span className="text-safety">Bi-Monthly</span> Drawing
                            </h1>

                            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                                As a family-owned business, we love giving back to the Big Lake and Monticello communities. Every two months, we pick a lucky winner for tree service vouchers and local prizes!
                            </p>

                            <div className="space-y-6 mb-8">
                                {[
                                    { icon: ShieldCheck, title: "No Purchase Necessary", desc: "Completely free to enter for local residents." },
                                    { icon: TreeDeciduous, title: "Tree Service Credits", desc: "Win up to $500 in service vouchers." },
                                    { icon: Info, title: "Winner Announcement", desc: "Winners notified on the 1st of every other month." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-forest flex-shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-forest">{item.title}</h3>
                                            <p className="text-sm text-neutral-500">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-neutral-100 relative group overflow-hidden"
                    >
                        {/* Subtle gloss effect */}
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-forest to-safety" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-8 w-1 bg-safety rounded-full" />
                                <h2 className="text-2xl font-bold text-forest">Entry Form</h2>
                            </div>

                            {/* Name Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">First Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-forest transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-forest"
                                            placeholder="Jane"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">Last Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-forest"
                                        placeholder="Smith"
                                    />
                                </div>
                            </div>

                            {/* Address Details */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">Street Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                        <input
                                            required
                                            type="text"
                                            className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-forest"
                                            placeholder="123 Maple St"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">City</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-forest"
                                            placeholder="Big Lake"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">State</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-forest"
                                            placeholder="MN"
                                        />
                                    </div>
                                    <div className="space-y-2 col-span-2 md:col-span-1">
                                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">ZIP Code</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-forest"
                                            placeholder="55309"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                        <input
                                            required
                                            type="email"
                                            className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-forest"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">Phone</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                        <input
                                            required
                                            type="tel"
                                            className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-forest"
                                            placeholder="(763) 123-4567"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Interests */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">Services You're Interested In</label>
                                <select
                                    required
                                    className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-forest appearance-none cursor-pointer"
                                >
                                    <option value="">Select a service</option>
                                    <option value="Total Tree Removal">Total Tree Removal</option>
                                    <option value="Stump Grinding">Stump Grinding</option>
                                    <option value="Tree & Shrub Trimming">Tree & Shrub Trimming</option>
                                    <option value="Yard Cleanups">Yard Cleanups</option>
                                </select>
                            </div>

                            {/* Security Check */}
                            <div className="p-4 bg-safety/5 border border-safety/10 rounded-2xl flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Security Check</p>
                                    <p className="text-forest font-bold">What is 4 + 8?</p>
                                </div>
                                <input
                                    required
                                    type="text"
                                    className="w-20 text-center py-2 bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-forest/10 outline-none font-bold text-forest"
                                    placeholder="?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full group bg-forest text-white py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-forest/90 transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg"
                            >
                                Submit Entry
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            <p className="text-[10px] text-center text-neutral-400 uppercase tracking-widest font-medium">
                                Official Rules Apply • Must be 18+ to enter
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
