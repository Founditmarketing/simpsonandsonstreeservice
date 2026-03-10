import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200 py-3' : 'bg-transparent py-5'
      )}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-safety origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo-resized.png"
            alt="Simpson & Sons Tree Service"
            className={cn(
              "h-12 w-auto object-contain group-hover:scale-105 transition-transform",
              !isScrolled
            )}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold transition-all",
                isScrolled
                  ? "text-neutral-600 hover:text-forest"
                  : "text-white hover:text-safety drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:763-482-6247"
            className="flex items-center gap-2 bg-forest text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-forest/90 transition-all hover:shadow-lg active:scale-95"
          >
            <Phone className="w-4 h-4" />
            Free Estimate
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-forest" : "text-white drop-shadow-md"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 p-6 md:hidden shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-neutral-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:763-482-6247"
              className="flex items-center justify-center gap-2 bg-safety text-white px-5 py-3 rounded-xl text-base font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
