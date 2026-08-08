import React from 'react';
import { Play, Smartphone, Megaphone, Palette, Sparkles, Volume2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Play':
        return <Play className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Volume2':
        return <Volume2 className="w-6 h-6 text-[#FF6B4A]" />;
      default:
        return <Play className="w-6 h-6 text-[#FF6B4A]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white text-[#333333] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B4A] bg-[#FF6B4A]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            What I Do
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Tailored video editing solutions designed to maximize viewer watch time, brand impact, and conversion rates.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectService(service.title)}
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#FF6B4A]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FF6B4A] group-hover:text-white transition-all duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF6B4A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
