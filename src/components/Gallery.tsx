import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const galleryImages = [
    { src: '/gallery10.jpg', },   // Crane lifting log — dramatic blue sky
    { src: '/galery7.jpg', },     // Crane + branded boom lift on lush green lawn
    { src: '/gallery6.jpg', },    // Branded boom lift on green lawn — great branding
    { src: '/gallery 2.jpg', },   // Lakeside job — beautiful scenic landscape + flags
    { src: '/gallery11.jpg', },   // Boom lift at golden-hour sunset by pond — atmospheric
    { src: '/gallery8.jpg', },    // Crane truck + boom lift side by side — impressive fleet
    { src: '/gallery9.jpg', },    // Brush clearing — bright green lawn, equipment in action
    { src: '/gallery5.jpg', },    // Snow scene — boom lift by frozen lake and home
    { src: '/gallery3.jpg', },    // Aerial/high view from boom lift — dramatic perspective
    { src: '/gallery4.jpg', },    // Bird's eye view of crew + equipment in wooded lot
    { src: '/gallery1.jpg', },    // Felled tree on cleared lot — sunny blue sky
    { src: '/gallery12.jpg', },   // Close-up of massive hollow stump — shows scale of work
];

const IMAGES_PER_PAGE = 6;

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
    }),
    center: {
        zindex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zindex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
    }),
};

export function Gallery() {
    const [[page, direction], setPage] = useState([0, 0]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
    };

    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    const nextImage = useCallback(() => {
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
    }, []);

    const prevImage = useCallback(() => {
        setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedIndex, closeLightbox, nextImage, prevImage]);

    const paginate = (newDirection: number) => {
        const nextPath = (page + newDirection + totalPages) % totalPages;
        setPage([nextPath, newDirection]);
    };

    const goToPage = (index: number) => {
        const newDirection = index > page ? 1 : -1;
        if (index !== page) {
            setPage([index, newDirection]);
        }
    };

    const currentSettings = galleryImages.slice(
        page * IMAGES_PER_PAGE,
        (page + 1) * IMAGES_PER_PAGE
    );

    return (
        <section id="gallery" className="py-24 bg-neutral-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-safety font-bold tracking-widest uppercase text-sm mb-4 block"
                        >
                            Our Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-4xl md:text-5xl font-bold text-forest"
                        >
                            The "Work" Gallery
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-600 text-lg max-w-md"
                    >
                        A visual record of our commitment to safety, precision,
                        and excellence in tree care across Central Minnesota.
                    </motion.p>
                </div>

                <div className="flex items-center gap-4 lg:gap-8">
                    {/* Left Arrow */}
                    <motion.button
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => paginate(-1)}
                        className="hidden sm:flex p-4 rounded-full bg-white shadow-lg text-safety hover:bg-forest hover:text-white transition-all z-10 shrink-0"
                        aria-label="Previous images"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </motion.button>

                    <div className="flex-1 min-h-[600px] relative">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {currentSettings.map((image, index) => {
                                    const globalIndex = page * IMAGES_PER_PAGE + index;
                                    return (
                                        <motion.div
                                            key={image.src}
                                            whileHover={{ scale: 1.05 }}
                                            onClick={() => openLightbox(globalIndex)}
                                            className="cursor-pointer"
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="relative group overflow-hidden rounded-3xl aspect-square bg-neutral-200 shadow-md"
                                            >
                                                <img
                                                    src={image.src}
                                                    className="w-full h-full object-cover"
                                                    referrerPolicy="no-referrer"
                                                    alt={`Gallery image ${globalIndex + 1}`}
                                                />
                                                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300 flex items-center justify-center" />
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => paginate(1)}
                        className="hidden sm:flex p-4 rounded-full bg-white shadow-lg text-safety hover:bg-forest hover:text-white transition-all z-10 shrink-0"
                        aria-label="Next images"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </motion.button>
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="flex sm:hidden justify-center gap-6 mt-8">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => paginate(-1)}
                        className="p-4 rounded-full bg-white shadow-lg text-safety active:bg-forest active:text-white transition-all"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => paginate(1)}
                        className="p-4 rounded-full bg-white shadow-lg text-safety active:bg-forest active:text-white transition-all"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </motion.button>
                </div>

                {/* Page Indicator */}
                <div className="flex justify-center gap-2 mt-12">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToPage(i)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                page === i ? "bg-safety w-6" : "bg-neutral-300 shadow-sm"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeLightbox();
                            }}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        {/* Navigation Arrows (Large Screens) */}
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden md:flex absolute left-8 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden md:flex absolute right-8 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                        >
                            <ChevronRight className="w-10 h-10" />
                        </motion.button>

                        {/* Image Container */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative max-w-full max-h-full flex flex-col items-center justify-center pt-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={galleryImages[selectedIndex].src}
                                alt={`Focused image ${selectedIndex + 1}`}
                                className="max-w-full max-h-[70vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
                            />
                            
                            {/* Navigation Arrows (Small Screens) */}
                            <div className="flex md:hidden items-center justify-center gap-12 mt-8">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 rounded-full bg-white/10 text-white"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </motion.button>
                                
                                <span className="text-white/70 font-display text-sm">
                                    {selectedIndex + 1} / {galleryImages.length}
                                </span>

                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 rounded-full bg-white/10 text-white"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </motion.button>
                            </div>

                            {/* Caption/Counter (Large Screens) */}
                            <div className="hidden md:block absolute -bottom-12 left-0 right-0 text-center text-white/70 font-display">
                                Image {selectedIndex + 1} of {galleryImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
