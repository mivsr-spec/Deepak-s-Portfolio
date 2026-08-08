import React from 'react';
import { Video, ArrowUp, Instagram, Youtube, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101010] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B4A] text-white flex items-center justify-center font-bold shadow-lg">
                <Video className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Deepak Rawat</span>
            </div>

            <p className="text-xs uppercase tracking-widest text-[#FF6B4A] font-bold">
              Video Editor • Visual Storyteller
            </p>

            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              Creating videos that inspire, engage, and leave an impact. Helping creators and brands scale through retention-focused video editing.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Navigation</h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li><a href="#about" className="hover:text-[#FF6B4A] transition-colors">About Deepak</a></li>
              <li><a href="#services" className="hover:text-[#FF6B4A] transition-colors">Services Offered</a></li>
              <li><a href="#work" className="hover:text-[#FF6B4A] transition-colors">Featured Projects</a></li>
              <li><a href="#contact" className="hover:text-[#FF6B4A] transition-colors">Get In Touch</a></li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Connect With Me</h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-[#FF6B4A] hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-[#FF6B4A] hover:scale-110 transition-all"
                aria-label="Behance"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[11px] text-neutral-500 pt-2">
              Available for full-time freelance contracts and long-term YouTube editing retainers.
            </p>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>© 2026 Deepak Rawat. All Rights Reserved.</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-[#FF6B4A] transition-colors focus:outline-none cursor-pointer"
            id="btn-back-to-top"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
