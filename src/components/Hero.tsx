import React from 'react';
import { ArrowUpRight, Play, Sparkles, Video, Film, Disc } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onViewProjects: () => void;
  onGetInTouch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onGetInTouch }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-10 sm:pt-12 pb-10 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#07040a] text-white selection:bg-[#a855f7] selection:text-white"
    >
      {/* --- Full-bleed Ambient Background Design --- */}
      {/* 1. Deep ambient dark purple radial glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[650px] bg-gradient-to-r from-purple-900/30 via-fuchsia-900/20 to-purple-950/40 rounded-full blur-[140px] opacity-80" />
        <div className="absolute -top-20 left-1/3 w-[500px] h-[350px] bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 right-1/4 w-[600px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[130px]" />
      </div>

      {/* 2. Soft Ambient Vertical Lighting Columns */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-25 flex justify-between px-4 sm:px-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="relative w-12 sm:w-20 md:w-28 h-full flex flex-col justify-between py-6">
            <div className="w-full h-full bg-gradient-to-b from-purple-900/10 via-purple-600/5 to-purple-900/10" />
          </div>
        ))}
      </div>

      {/* 3. Reference-Matched Glowing Line overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-90"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroGlowingLineGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff7b42" />
            <stop offset="35%" stopColor="#ff5252" />
            <stop offset="65%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <filter id="heroNeonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur1" />
            <feGaussianBlur stdDeviation="12" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Outer Glowing Stroke */}
        <line
          x1="850"
          y1="0"
          x2="380"
          y2="500"
          stroke="url(#heroGlowingLineGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#heroNeonGlow)"
          opacity="0.9"
        />

        {/* Crisp Inner High-Glow Core Line */}
        <line
          x1="850"
          y1="0"
          x2="380"
          y2="500"
          stroke="#ffe4e6"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-95"
        />
      </svg>

      {/* --- Foreground Hero Content --- */}
      {/* Top Header Row with HOME & Nav */}
      <div className="relative z-10 w-full mb-8 sm:mb-12">
        <div className="flex items-start justify-between w-full mb-6 sm:mb-8">
          {/* Top Left: Small Minimal Label */}
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_#a855f7]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300/80 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('home')}>
              HOME
            </span>
          </div>

          {/* Right Side Navigation (Vertical Stacked Links) */}
          <nav className="flex flex-col items-end space-y-1.5 text-sm sm:text-base font-medium text-neutral-300">
            <button
              onClick={() => scrollToSection('work')}
              className="hover:text-purple-300 transition-colors text-right cursor-pointer hover:translate-x-[-2px] transition-transform"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-purple-300 transition-colors text-right cursor-pointer hover:translate-x-[-2px] transition-transform"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-purple-300 transition-colors text-right cursor-pointer hover:translate-x-[-2px] transition-transform"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-purple-300 transition-colors text-right cursor-pointer hover:translate-x-[-2px] transition-transform"
            >
              Contacts
            </button>
          </nav>
        </div>

        {/* Headline Placed Directly Below HOME */}
        <div className="max-w-4xl space-y-2 mt-2 sm:mt-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-extrabold tracking-tight text-white leading-[0.95] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            Video editor
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-purple-200/90 tracking-tight leading-[1.05] italic font-serif">
            & Visual storyteller
          </h2>
        </div>
      </div>

      {/* Action Buttons & Right Side Tagline Grid */}
      <div className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2">
        {/* Left Side: Buttons */}
        <div className="lg:col-span-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onViewProjects}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-500 hover:from-purple-500 hover:to-fuchsia-500 text-white text-sm font-bold tracking-wide transition-all shadow-[0_0_25px_rgba(168,85,247,0.5)] flex items-center gap-2 cursor-pointer group border border-purple-400/30"
          >
            <span>View Selected Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={onGetInTouch}
            className="px-7 py-3.5 rounded-full border border-purple-400/30 hover:border-purple-300 text-white text-sm font-medium transition-all cursor-pointer bg-purple-950/40 hover:bg-purple-900/40 backdrop-blur-md"
          >
            Get in Touch
          </button>
        </div>

        {/* Right Side: Tagline & Proof Statement */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right space-y-4">
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-sm italic">
            trusted by creators and brands, <br className="hidden sm:inline" />
            <span className="text-purple-200 font-medium not-italic">"transforming raw footage into compelling stories"</span>
          </p>
        </div>
      </div>
    </section>
  );
};


