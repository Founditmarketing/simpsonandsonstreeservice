import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ChevronDown, TreePine, Shovel, Scissors, Trash2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  const services = [
    {
      title: "Total Tree Removal",
      href: "/services/total-tree-removal",
      icon: TreePine,
      color: "text-red-900"
    },
    {
      title: "Stump Grinding",
      href: "/services/stump-grinding",
      icon: Shovel,
      color: "text-amber-500"
    },
    {
      title: "Tree & Shrub Trimming",
      href: "/services/tree-and-shrub-trimming",
      icon: Scissors,
      color: "text-emerald-500"
    },
    {
      title: "Yard Cleanups",
      href: "/services/yard-cleanup",
      icon: Trash2,
      color: "text-slate-400"
    },
  ];

  const navLinks = [
    { name: 'Services', href: isHome ? '#services' : '/#services', hasDropdown: true },
    { name: 'Gallery', href: isHome ? '#gallery' : '/#gallery' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: isHome ? '#reviews' : '/#reviews' },
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
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsServicesHovered(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesHovered(false)}
            >
              <Link
                to={link.href}
                className={cn(
                  "flex items-center gap-1 text-sm font-bold transition-all py-2",
                  isScrolled
                    ? "text-neutral-600 hover:text-forest"
                    : "text-white hover:text-safety drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                )}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isServicesHovered ? "rotate-180" : ""
                  )} />
                )}
              </Link>

              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                    >
                      <div className="bg-neutral-900 border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            to={service.href}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                            onClick={() => setIsServicesHovered(false)}
                          >
                            <div className={cn(
                              "w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-transform group-hover/item:scale-110",
                              service.color
                            )}>
                              <service.icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-white group-hover/item:text-safety transition-colors">
                              {service.title}
                            </span>
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-white/5">
                          <Link
                            to={link.href}
                            className="block text-center text-xs font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors py-2"
                            onClick={() => setIsServicesHovered(false)}
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <a
            href="tel:763-482-6247"
            className="flex items-center gap-2 bg-safety text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-safety-hover transition-all hover:shadow-lg active:scale-95"
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
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between py-2">
                  <Link
                    to={link.href}
                    className="text-lg font-bold text-neutral-800 flex-grow"
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <button
                      onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                      className="p-2 text-neutral-500"
                    >
                      <ChevronDown className={cn(
                        "w-5 h-5 transition-transform duration-300",
                        isServicesMobileOpen ? "rotate-180" : ""
                      )} />
                    </button>
                  )}
                </div>

                {link.hasDropdown && (
                  <motion.div
                    initial={false}
                    animate={{ height: isServicesMobileOpen ? "auto" : 0, opacity: isServicesMobileOpen ? 1 : 0 }}
                    className="overflow-hidden flex flex-col gap-2 pl-4"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="py-3 flex items-center gap-4 text-neutral-600 font-bold active:text-safety group"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsServicesMobileOpen(false);
                        }}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center transition-colors group-active:bg-safety/10",
                          service.color
                        )}>
                          <service.icon className="w-5 h-5" />
                        </div>
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
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
