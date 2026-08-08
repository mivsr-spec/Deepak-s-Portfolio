import React from 'react';
import { STATS_DATA } from '../data/portfolioData';

export const Numbers: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0512] text-white relative overflow-hidden border-y border-purple-900/30">
      {/* Deep dark purple ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-purple-900/40 via-fuchsia-900/25 to-purple-950/40 rounded-full blur-[130px] opacity-90" />
      </div>
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {STATS_DATA.slice(0, 3).map((stat, idx) => (
            <div key={stat.id} className={`text-center p-4 ${idx !== 0 ? 'pt-8 lg:pt-4' : ''}`}>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-2 drop-shadow-md">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-base sm:text-lg font-bold text-white tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-white/80 font-medium mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
