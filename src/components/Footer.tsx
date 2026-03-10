import { TreePine, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
        <div className="flex flex-col gap-6">
          <a href="/" className="flex items-center gap-2 group">
            <div className="bg-forest p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight leading-none text-white">SIMPSON & SONS</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-safety">Tree Service</span>
            </div>
          </a>
          <p className="text-neutral-400 leading-relaxed text-sm">
            Expert tree care in Big Lake, Monticello, and surrounding MN regions. 
            Family-owned since 1995, committed to safety and excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-neutral-400 text-sm">
            <li><a href="#services" className="hover:text-safety transition-colors">Our Services</a></li>
            <li><a href="#gallery" className="hover:text-safety transition-colors">Work Gallery</a></li>
            <li><a href="#about" className="hover:text-safety transition-colors">About Us</a></li>
            <li><a href="#reviews" className="hover:text-safety transition-colors">Customer Reviews</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Service Areas</h4>
          <ul className="flex flex-col gap-4 text-neutral-400 text-sm">
            <li>Big Lake, MN</li>
            <li>Monticello, MN</li>
            <li>Becker, MN</li>
            <li>Elk River, MN</li>
            <li>Buffalo, MN</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-safety transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                <a href="tel:763-263-0000" className="text-white font-bold hover:text-safety transition-colors">(763) 263-0000</a>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-safety transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Email Us</p>
                <a href="mailto:info@simpsontree.com" className="text-white font-bold hover:text-safety transition-colors">info@simpsontree.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-500 text-xs font-medium relative z-10">
        <p>© {currentYear} Simpson & Sons Tree Service. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-forest/20 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
