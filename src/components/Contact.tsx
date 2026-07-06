import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { TextureOverlay } from './TextureOverlay';

type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
};

export function Contact() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [captchaInput, setCaptchaInput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormData>();

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        setNum1(Math.floor(Math.random() * 9) + 1);
        setNum2(Math.floor(Math.random() * 9) + 1);
        setCaptchaInput('');
    };

    const onSubmit = async (data: ContactFormData) => {
        if (parseInt(captchaInput) !== (num1 + num2)) {
            setSubmitError('Incorrect security check. Please try again.');
            generateCaptcha();
            return;
        }

        setSubmitError('');

        try {
            await fetch('https://www.founditos.com/api/contact-form/be7583ec-b0fc-4c83-8ba5-6a4c9f947488', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'manual',
                body: JSON.stringify({
                    name: `${data.firstName} ${data.lastName}`.trim(),
                    email: data.email,
                    phone: data.phone,
                    message: `Service: ${data.service}\n\n${data.message}`,
                }),
            });
        } catch {
            // CRM saves the lead then 307-redirects without CORS headers
        }

        setIsSubmitted(true);
        reset();
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

                    {/* Left Side: Contact Info */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-6">
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
                                className="text-neutral-600 text-lg leading-relaxed font-medium max-w-lg"
                            >
                                Thank you for visiting the website of Simpson & Sons Tree Service. We offer extensive tree services to home and business owners in Zimmerman, MN and the surrounding areas within a 50-mile radius.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-neutral-600 text-lg leading-relaxed font-medium max-w-lg"
                            >
                                Please use the form on this page to contact us. You can also call us at 763-482-6247. We look forward to serving you.
                            </motion.p>


                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group text-forest">
                                <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all duration-300">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500 font-bold uppercase tracking-[0.2em] mb-1">Direct Line</p>
                                    <a href="tel:763-482-6247" className="text-2xl font-bold hover:text-safety transition-colors tracking-tight">(763) 482-6247</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group text-forest">
                                <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all duration-300">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500 font-bold uppercase tracking-[0.2em] mb-1">Location</p>
                                    <p className="text-2xl font-bold tracking-tight">Zimmerman, MN</p>
                                    <p className="text-neutral-500 font-medium tracking-wide">Serving Big Lake, Monticello, & Beyond</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group text-forest">
                                <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all duration-300">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500 font-bold uppercase tracking-[0.2em] mb-1">Service Area</p>
                                    <p className="text-2xl font-bold tracking-tight">50-Mile Radius</p>
                                    <p className="text-neutral-500 font-medium tracking-wide">24/7 Emergency Support Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-forest p-6 md:p-10 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.3)] relative overflow-hidden"
                            style={{
                                backgroundImage: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)'
                            }}
                        >
                            <TextureOverlay opacity={0.1} />
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        <form className="space-y-6 pb-2 relative z-20" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-neutral-200 ml-1">First Name <span className="text-safety">*</span></label>
                                                    <input
                                                        {...register('firstName', { required: 'First name is required' })}
                                                        type="text"
                                                        placeholder="First"
                                                        className={cn(
                                                            "w-full bg-white/95 border rounded-2xl px-4 py-4 text-forest focus:outline-none focus:ring-2 focus:ring-safety/50 focus:border-safety transition-all shadow-sm font-medium",
                                                            errors.firstName ? "border-red-500" : "border-white/10"
                                                        )}
                                                    />
                                                    {errors.firstName && <p className="text-red-400 text-xs font-bold ml-1">{errors.firstName.message}</p>}
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-neutral-200 ml-1">Last Name <span className="text-safety">*</span></label>
                                                    <input
                                                        {...register('lastName', { required: 'Last name is required' })}
                                                        type="text"
                                                        placeholder="Last"
                                                        className={cn(
                                                            "w-full bg-white/95 border rounded-2xl px-4 py-4 text-forest focus:outline-none focus:ring-2 focus:ring-safety/50 focus:border-safety transition-all shadow-sm font-medium",
                                                            errors.lastName ? "border-red-500" : "border-white/10"
                                                        )}
                                                    />
                                                    {errors.lastName && <p className="text-red-400 text-xs font-bold ml-1">{errors.lastName.message}</p>}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-neutral-200 ml-1">Email <span className="text-safety">*</span></label>
                                                    <input
                                                        {...register('email', {
                                                            required: 'Email is required',
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                message: "Invalid email address"
                                                            }
                                                        })}
                                                        type="email"
                                                        placeholder="email@example.com"
                                                        className={cn(
                                                            "w-full bg-white/95 border rounded-2xl px-4 py-4 text-forest focus:outline-none focus:ring-2 focus:ring-safety/50 focus:border-safety transition-all shadow-sm font-medium",
                                                            errors.email ? "border-red-500" : "border-white/10"
                                                        )}
                                                    />
                                                    {errors.email && <p className="text-red-400 text-xs font-bold ml-1">{errors.email.message}</p>}
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-neutral-200 ml-1">Phone Number <span className="text-safety">*</span></label>
                                                    <input
                                                        {...register('phone', { required: 'Phone number is required' })}
                                                        type="tel"
                                                        placeholder="(763) 000-0000"
                                                        className={cn(
                                                            "w-full bg-white/95 border rounded-2xl px-4 py-4 text-forest focus:outline-none focus:ring-2 focus:ring-safety/50 focus:border-safety transition-all shadow-sm font-medium",
                                                            errors.phone ? "border-red-500" : "border-white/10"
                                                        )}
                                                    />
                                                    {errors.phone && <p className="text-red-400 text-xs font-bold ml-1">{errors.phone.message}</p>}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-neutral-200 ml-1">Service Needed <span className="text-safety">*</span></label>
                                                <div className="relative">
                                                    <select
                                                        {...register('service', { required: 'Please select a service' })}
                                                        className={cn(
                                                            "w-full bg-white/95 border rounded-2xl px-4 py-4 text-forest focus:outline-none focus:ring-2 focus:ring-safety/50 focus:border-safety transition-all appearance-none cursor-pointer shadow-sm font-medium",
                                                            errors.service ? "border-red-500" : "border-white/10"
                                                        )}
                                                    >
                                                        <option value="">Select a service...</option>
                                                        <option>Total Tree Removal</option>
                                                        <option>Stump Grinding</option>
                                                        <option>Tree & Shrub Trimming</option>
                                                        <option>Yard Cleanups</option>
                                                        <option>Emergency Services</option>
                                                        <option>General Inquiry</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                                    </div>
                                                </div>
                                                {errors.service && <p className="text-red-400 text-xs font-bold ml-1">{errors.service.message}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-neutral-200 ml-1">Message <span className="text-safety">*</span></label>
                                                <textarea
                                                    {...register('message', { required: 'Message is required' })}
                                                    rows={4}
                                                    placeholder="How can we help you?"
                                                    className={cn(
                                                        "w-full bg-white/95 border rounded-2xl px-4 py-4 text-forest focus:outline-none focus:ring-2 focus:ring-safety/50 focus:border-safety transition-all resize-none shadow-sm font-medium",
                                                        errors.message ? "border-red-500" : "border-white/10"
                                                    )}
                                                />
                                                {errors.message && <p className="text-red-400 text-xs font-bold ml-1">{errors.message.message}</p>}
                                            </div>

                                            <div className="space-y-4 pt-4 border-t border-white/10">
                                                <label className="text-sm font-bold text-neutral-200 ml-1 decoration-safety decoration-2">Security Check <span className="text-safety">*</span></label>
                                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                    <div className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-lg select-none shadow-md border border-white/10">
                                                        {num1} + {num2} = ?
                                                    </div>
                                                    <input
                                                        required
                                                        type="number"
                                                        value={captchaInput}
                                                        onChange={(e) => setCaptchaInput(e.target.value)}
                                                        className="flex-1 w-full bg-white/95 border border-white/10 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-safety/50 focus:border-safety transition-all shadow-inner font-medium"
                                                    />
                                                </div>
                                                {submitError && (
                                                    <motion.p
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="text-red-400 text-sm font-bold flex items-center gap-2"
                                                    >
                                                        <AlertCircle className="w-4 h-4" />
                                                        {submitError}
                                                    </motion.p>
                                                )}
                                            </div>

                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full group flex items-center justify-center gap-3 bg-safety text-white px-8 py-5 rounded-3xl text-xl font-black shadow-lg shadow-safety/20 hover:bg-safety-hover transition-all hover:shadow-2xl active:scale-95 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        SENDING...
                                                        <Loader2 className="w-6 h-6 animate-spin" />
                                                    </>
                                                ) : (
                                                    <>
                                                        SEND MESSAGE
                                                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                                        <p className="text-neutral-200 text-lg mb-8">
                                            Thank you for reaching out. We've received your inquiry and will be in touch shortly to assist you.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-white font-bold underline decoration-safety decoration-2 underline-offset-4 hover:text-safety transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-safety/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
