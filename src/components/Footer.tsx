import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
        <div className="flex flex-col gap-6">
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/images/logo-resized.png"
              alt="Simpson & Sons Tree Service"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>
          <p className="text-neutral-400 leading-relaxed text-sm">
            <h4 className="font-bold text-lg mb-1 text-white">
              Reliable work by a local team
            </h4>
            Our tree company has been serving clients within a 50-mile radius of Big Lake, MN for over four years. Home and business owners alike turn to us for our top-quality work. When you hire us, you'll get great results and better customer care. Meet with a tree pro today to get started on your tree care project.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/people/Simpson-Sons-Tree-Service/100087185520117/?rdid=3W214dFvX2tJsji7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15hYPBHcWR%2F" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            {/*
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            */}
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
                <a href="tel:763-482-6247" className="text-white font-bold hover:text-safety transition-colors">(763) 482-6247</a>
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

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between items-start gap-6 text-neutral-500 text-xs font-medium relative z-10">
        <p>
          Copyright © {currentYear} Simpson &amp; Sons Tree Service, all rights reserved.
        </p>
        <p>
          <span>
            <span>
              Big Lake
            </span>
            ,&nbsp;
            <span>
              MN
            </span>
            &nbsp;
            <span>
              55309
            </span>
            &nbsp;&nbsp;
          </span>
          <span>
            (763) 482-6247
          </span>
        </p>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-forest/20 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
