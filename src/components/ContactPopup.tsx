import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageSquare, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function ContactPopup() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const location = useLocation();

  // Hide on contact page
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    // Initial appearance delay
    const timer = setTimeout(() => {
      setHasAppeared(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isContactPage || !hasAppeared) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <AnimatePresence mode="wait">
        {isMinimized ? (
          <motion.button
            key="minimized"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsMinimized(false)}
            className="group flex items-center gap-2 sm:gap-3 bg-forest hover:bg-neutral-800 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 border border-white/10"
            aria-label="Expand contact options"
          >
            <span className="max-w-0 overflow-hidden sm:group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-semibold text-sm sm:text-base">
              Get a Free Quote
            </span>
            <div className="relative">
              <Phone size={20} className="sm:size-6 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-safety rounded-full border-2 border-forest animate-pulse" />
            </div>
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[calc(100vw-2rem)] sm:max-w-sm"
          >
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-neutral-200 overflow-hidden relative group">
              {/* Minimize Button */}
              <button
                onClick={() => setIsMinimized(true)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 transition-colors z-10"
                aria-label="Minimize popup"
              >
                <X size={14} className="sm:size-4" />
              </button>

              <div className="flex flex-col">
                {/* Header Image/Gradient */}
                <div className="h-16 sm:h-24 bg-gradient-to-br from-forest to-neutral-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 100 L50 0 L100 100 Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="relative bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-lg sm:rounded-xl border border-white/20">
                    <Phone className="text-white w-5 h-5 sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-forest mb-1 sm:mb-2">
                    Need Expert Tree Care?
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    Contact Simpson & Sons today for a <span className="text-forest font-semibold">free estimate</span> on tree removal or storm cleanup.
                  </p>

                  <div className="flex flex-col gap-2 sm:gap-3">
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 bg-safety hover:bg-safety-hover text-white font-bold py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-xl transition-all duration-300 shadow-lg shadow-safety/20 hover:shadow-safety/40 active:scale-[0.98] text-sm sm:text-base"
                    >
                      <MessageSquare size={16} className="sm:size-[18px]" />
                      Get My Free Estimate
                    </Link>

                    <a
                      href="tel:763-482-6247"
                      className="flex items-center justify-center gap-2 text-forest font-bold py-1 sm:py-2 hover:text-safety transition-colors group/tel text-sm sm:text-base"
                    >
                      <Phone size={14} className="sm:size-4 group-hover/tel:animate-bounce" />
                      (763) 482-6247
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
