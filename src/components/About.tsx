import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFA] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Label */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                About Me
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.1]">
              About <span className="text-neutral-900 font-black">Me</span>
            </h2>

            {/* Description Paragraphs (New user provided text) */}
            <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-[1.7] font-normal max-w-2xl">
              <p className="font-medium text-neutral-900 text-lg sm:text-xl leading-relaxed">
                Hi, I’m <span className="font-bold text-neutral-900">Deepak Rawat</span>, a passionate video editor who turns raw footage into engaging, high quality videos.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                I specialize in cinematic edits, smooth transitions, color grading, and short-form content. My goal is to create visually appealing videos that tell stories and leave a lasting impact.
              </p>
            </div>

            {/* Stats Boxes (2 Cards - Reference Layout Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {/* Box 1 */}
              <div className="relative p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow">
                <span className="absolute top-5 right-5 text-xs font-mono text-neutral-400">
                  01
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight mb-2">
                  50+
                </div>
                <div className="text-sm font-semibold text-neutral-600">
                  Projects Completed
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  Across Instagram & Social Media
                </div>
              </div>

              {/* Box 2 */}
              <div className="relative p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow">
                <span className="absolute top-5 right-5 text-xs font-mono text-neutral-400">
                  02
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight mb-2">
                  50+
                </div>
                <div className="text-sm font-semibold text-neutral-600">
                  Happy Clients
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  Creators, Startups & Influencers
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200/80 bg-neutral-100 group">
              <img
                src={ABOUT_DATA.headshotUrl}
                alt="Deepak Rawat - Video Editor"
                className="w-full h-[480px] sm:h-[540px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              
              {/* Subtle bottom gradient frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white">
                <div className="text-base font-bold text-white">Deepak Rawat</div>
                <div className="text-xs text-neutral-300 font-mono mt-0.5">Video Editor & Visual Storyteller</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

