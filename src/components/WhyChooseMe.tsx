import React from 'react';
import { Wand2, Zap, Star, MessageSquare, Search, Heart, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_DATA } from '../data/portfolioData';

export const WhyChooseMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wand2':
        return <Wand2 className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Star':
        return <Star className="w-6 h-6 text-[#FF6B4A]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Search':
        return <Search className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#FF6B4A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#FF6B4A]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#07040a] text-white relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-purple-900/30 via-fuchsia-900/20 to-purple-950/40 rounded-full blur-[140px] opacity-80" />
        <div className="absolute -top-20 right-10 w-[400px] h-[300px] bg-purple-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B4A] bg-[#FF6B4A]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#FF6B4A]/20">
            Why Choose Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Work With Me?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3">
            Combining creative vision with technical precision to deliver high-impact video edits every time.
          </p>
        </div>

        {/* 3 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-[#FF6B4A]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B4A]/10 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF6B4A]/10 border border-[#FF6B4A]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#FF6B4A] transition-all">
                <div className="group-hover:text-white transition-colors">
                  {getIcon(item.iconName)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B4A] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
