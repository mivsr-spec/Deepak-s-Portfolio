import React from 'react';
import { Instagram, ArrowUpRight, Play } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const handleOpenInstagram = (project: Project, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const url = project.instagramUrl || 'https://www.instagram.com';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#FAFAFA] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight font-serif mb-4">
            My Works
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-[500px] mx-auto font-normal">
            Showcasing a selection of projects that demonstrate my expertise in video editing and visual storytelling.
          </p>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((project) => {
            return (
              <div
                key={project.id}
                onClick={(e) => handleOpenInstagram(project, e)}
                className="group relative aspect-[3/4] h-[460px] sm:h-[490px] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-neutral-200/60"
                id={`project-card-${project.id}`}
              >
                {/* Full Bleed Background Image */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/25 group-hover:from-black/95 group-hover:via-black/55 transition-colors duration-300"></div>

                {/* Card Content Container */}
                <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between text-white">
                  
                  {/* Top Content: Title */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug group-hover:text-amber-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>


                  {/* Bottom Content: Replaced Tags Section with Direct Instagram Link Button */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={(e) => handleOpenInstagram(project, e)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:via-pink-500 hover:to-amber-400 text-white font-semibold text-xs sm:text-sm flex items-center justify-between gap-2 shadow-lg transition-all duration-300 hover:scale-[1.02] border border-white/20 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Instagram className="w-4 h-4 text-white" />
                        <span>Watch on Instagram</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
