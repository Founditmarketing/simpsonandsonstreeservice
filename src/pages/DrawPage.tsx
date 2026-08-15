import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Trophy, User, Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, TreeDeciduous, Info, Loader2, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { cn } from '../lib/utils';

type DrawFormData = {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    phone: string;
    service: string;
    captcha: string;
};

export default function DrawPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<DrawFormData>();

    const onSubmit = async (data: DrawFormData) => {
        if (data.captcha !== '12') {
            setSubmitError('Incorrect security check. Please try again.');
            return;
        }

        setSubmitError('');

        try {
            const response = await fetch('https://www.founditos.com/api/contact-form/be7583ec-b0fc-4c83-8ba5-6a4c9f947488', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${data.firstName} ${data.lastName}`.trim(),
                    email: data.email,
                    phone: data.phone,
                    message: `Drawing Entry\nAddress: ${data.street}, ${data.city}, ${data.state} ${data.zip}\nService: ${data.service}`,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                reset();
            } else {
                const result = await response.json();
                setSubmitError(result.error || 'Something went wrong. Please try again later.');
            }
        } catch (err) {
            setSubmitError('Failed to submit entry. Please check your connection.');
        }
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
        <div className="min-h-screen bg-[#0d0d0d] pt-28 pb-20 overflow-hidden relative">
            <Helmet>
                <title>Bi-Monthly Drawing | Simpson & Sons Tree Service</title>
                <meta name="description" content="Enter our bi-monthly drawing for a chance to win tree service discounts and prizes. Free to enter for Big Lake & Monticello residents." />
                <meta name="robots" content="noindex, nofollow" />
                <meta property="og:title" content="Bi-Monthly Drawing | Simpson & Sons Tree Service" />
                <meta property="og:description" content="Enter our bi-monthly drawing for a chance to win tree service discounts and prizes. Free to enter for Big Lake & Monticello residents." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.simpsonandsonstreeservice.com/draw" />
                <meta property="og:image" content="https://www.simpsonandsonstreeservice.com/images/dl.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* Premium Wood-Grain/Tree-Ring Background Texture */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                    <defs>
                        <filter id="woodGrain" x="0" y="0" width="100%" height="100%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.15" numOctaves="3" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                        <filter id="fineGrain">
                            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.4 0" />
                        </filter>
                        <pattern id="woodPattern" x="0" y="0" width="1200" height="1200" patternUnits="userSpaceOnUse">
                            {/* Dark Gray Base Color */}
                            <rect width="1200" height="1200" fill="#121212" />

                            {/* Organic Wavy Rings with Displacement - Light/White for high visibility */}
                            <g filter="url(#woodGrain)" stroke="#e0e0e0" fill="none" opacity="0.25" strokeWidth="1.2">
                                {Array.from({ length: 60 }).map((_, i) => {
                                    const r = i * 15;
                                    return (
                                        <circle
                                            key={i}
                                            cx="600"
                                            cy="600"
                                            r={r}
                                        />
                                    );
                                })}

                                {/* Knots/Imperfections */}
                                <g opacity="0.4">
                                    <circle cx="200" cy="300" r="50" strokeWidth="4" />
                                    <circle cx="900" cy="800" r="70" strokeWidth="5" />
                                    <circle cx="400" cy="900" r="30" strokeWidth="3" />
                                </g>
                            </g>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#woodPattern)" />

                    {/* Subtle light grain overlay */}
                    <rect width="100%" height="100%" filter="url(#fineGrain)" opacity="0.1" />

                    {/* Deep Gray Gradient for mood */}
                    <rect width="100%" height="100%" fill="url(#woodGradient)" opacity="0.6" />
                    <radialGradient id="woodGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="60%" stopColor="#141414" />
                        <stop offset="100%" stopColor="#0d0d0d" />
                    </radialGradient>
                </svg>
            </div>

            {/* Subtle Gradient Overlays for lighting depth - Switching to neutral/dark forest */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-forest/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-safety/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

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
                                <span className="text-white font-bold uppercase tracking-widest text-xs">Community Giveback</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                Enter Our <span className="text-safety">Bi-Monthly</span> Drawing
                            </h1>

                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                We love giving back to the Big Lake and Monticello communities. Every two months, we pick a lucky winner for tree service vouchers and local prizes!
                            </p>

                            <div className="space-y-6 mb-8">
                                {[
                                    { icon: ShieldCheck, title: "No Purchase Necessary", desc: "Completely free to enter for local residents." },
                                    { icon: TreeDeciduous, title: "Tree Service Credits", desc: "Win up to $1500 in service vouchers." },
                                    { icon: Info, title: "Winner Announcement", desc: "Winners are selected and notified bi-monthly." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-white flex-shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">{item.title}</h3>
                                            <p className="text-sm text-neutral-400">{item.desc}</p>
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
                        className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative group overflow-hidden"
                    >
                        {/* Subtle gloss effect */}
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-forest to-safety" />

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-8 w-1 bg-safety rounded-full" />
                                <h2 className="text-2xl font-bold text-white">Entry Form</h2>
                            </div>

                            {/* Name Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">First Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-white transition-colors" />
                                        <input
                                            {...register('firstName', { required: 'First name is required' })}
                                            type="text"
                                            className={cn(
                                                "w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-white placeholder:text-neutral-600",
                                                errors.firstName ? "border-red-500" : "border-white/10"
                                            )}
                                            placeholder="Jane"
                                        />
                                    </div>
                                    {errors.firstName && <p className="text-red-500 text-[10px] font-bold px-1">{errors.firstName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">Last Name</label>
                                    <input
                                        {...register('lastName', { required: 'Last name is required' })}
                                        type="text"
                                        className={cn(
                                            "w-full px-4 py-3.5 bg-white/5 border rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-white placeholder:text-neutral-600",
                                            errors.lastName ? "border-red-500" : "border-white/10"
                                        )}
                                        placeholder="Smith"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-[10px] font-bold px-1">{errors.lastName.message}</p>}
                                </div>
                            </div>

                            {/* Address Details */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">Street Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                        <input
                                            {...register('street', { required: 'Street address is required' })}
                                            type="text"
                                            className={cn(
                                                "w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-white placeholder:text-neutral-600",
                                                errors.street ? "border-red-500" : "border-white/10"
                                            )}
                                            placeholder="123 Maple St"
                                        />
                                    </div>
                                    {errors.street && <p className="text-red-500 text-[10px] font-bold px-1">{errors.street.message}</p>}
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">City</label>
                                        <input
                                            {...register('city', { required: 'City is required' })}
                                            type="text"
                                            className={cn(
                                                "w-full px-4 py-3.5 bg-white/5 border rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-white placeholder:text-neutral-600",
                                                errors.city ? "border-red-500" : "border-white/10"
                                            )}
                                            placeholder="Big Lake"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">State</label>
                                        <input
                                            {...register('state', { required: 'State is required' })}
                                            type="text"
                                            className={cn(
                                                "w-full px-4 py-3.5 bg-white/5 border rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-white placeholder:text-neutral-600",
                                                errors.state ? "border-red-500" : "border-white/10"
                                            )}
                                            placeholder="MN"
                                        />
                                    </div>
                                    <div className="space-y-2 col-span-2 md:col-span-1">
                                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">ZIP Code</label>
                                        <input
                                            {...register('zip', { required: 'ZIP is required' })}
                                            type="text"
                                            className={cn(
                                                "w-full px-4 py-3.5 bg-white/5 border rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-white placeholder:text-neutral-600",
                                                errors.zip ? "border-red-500" : "border-white/10"
                                            )}
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
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email"
                                                }
                                            })}
                                            type="email"
                                            className={cn(
                                                "w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-white placeholder:text-neutral-600",
                                                errors.email ? "border-red-500" : "border-white/10"
                                            )}
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-[10px] font-bold px-1">{errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">Phone</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                        <input
                                            {...register('phone', { required: 'Phone is required' })}
                                            type="tel"
                                            className={cn(
                                                "w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-white placeholder:text-neutral-600",
                                                errors.phone ? "border-red-500" : "border-white/10"
                                            )}
                                            placeholder="(763) 123-4567"
                                        />
                                    </div>
                                    {errors.phone && <p className="text-red-500 text-[10px] font-bold px-1">{errors.phone.message}</p>}
                                </div>
                            </div>

                            {/* Interests */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-1">Services You're Interested In</label>
                                <select
                                    {...register('service', { required: 'Please select a service' })}
                                    className={cn(
                                        "w-full px-4 py-3.5 bg-[#121212] border rounded-xl focus:ring-2 focus:ring-forest/10 focus:border-forest outline-none transition-all text-white appearance-none cursor-pointer",
                                        errors.service ? "border-red-500" : "border-white/10"
                                    )}
                                >
                                    <option value="">Select a service</option>
                                    <option value="Total Tree Removal">Total Tree Removal</option>
                                    <option value="Stump Grinding">Stump Grinding</option>
                                    <option value="Tree & Shrub Trimming">Tree & Shrub Trimming</option>
                                    <option value="Yard Cleanups">Yard Cleanups</option>
                                </select>
                                {errors.service && <p className="text-red-500 text-[10px] font-bold px-1">{errors.service.message}</p>}
                            </div>

                            {/* Security Check */}
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Security Check</p>
                                    <p className="text-white font-bold">What is 4 + 8?</p>
                                </div>
                                <div className="space-y-1">
                                    <input
                                        {...register('captcha', { required: true })}
                                        type="text"
                                        className={cn(
                                            "w-20 text-center py-2 bg-[#121212] border rounded-lg focus:ring-2 focus:ring-forest/10 outline-none font-bold text-white",
                                            errors.captcha ? "border-red-500" : "border-white/10"
                                        )}
                                        placeholder="?"
                                    />
                                </div>
                            </div>

                            {submitError && (
                                <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2 text-red-600 text-xs font-bold">
                                    <AlertCircle className="w-4 h-4" />
                                    {submitError}
                                </div>
                            )}

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full group bg-forest text-white py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-forest/90 transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        Submitting...
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Submit Entry
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
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
