import React, { useState, useEffect } from 'react';
import { Video, Menu, X, ArrowUpRight, Calculator } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenContact: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'why-us', 'work', 'studio', 'workflow', 'tools', 'testimonials', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Studio', href: '#studio' },
    { name: 'Process', href: '#workflow' },
    { name: 'Tools', href: '#tools' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6B4A] to-[#FF8F73] flex items-center justify-center text-white font-bold shadow-lg shadow-[#FF6B4A]/25 group-hover:scale-105 transition-transform">
              <Video className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-tight leading-none group-hover:text-[#FF6B4A] transition-colors">
                Deepak Rawat
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
                Video Editor
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#FF6B4A] text-white shadow-md shadow-[#FF6B4A]/30'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                  id={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEstimator}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-neutral-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer"
              title="Estimate Video Editing Cost"
              id="btn-nav-estimator"
            >
              <Calculator className="w-3.5 h-3.5 text-[#FF6B4A]" />
              <span>Cost Calculator</span>
            </button>

            <button
              onClick={() => onOpenContact()}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#FF6B4A] hover:bg-[#ff5733] transition-all shadow-lg shadow-[#FF6B4A]/20 flex items-center gap-1.5 focus:outline-none cursor-pointer hover:scale-105"
              id="btn-nav-hire"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-neutral-200 bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#FF6B4A]" />
              <span>Project Cost Calculator</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-[#FF6B4A] hover:bg-[#ff5733] shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
