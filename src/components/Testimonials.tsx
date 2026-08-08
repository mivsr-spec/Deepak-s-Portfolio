import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-white text-[#333333] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B4A] bg-[#FF6B4A]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            What Clients Say
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Feedback from content creators, brand marketers, and agency owners.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                idx === currentIndex ? 'border-[#FF6B4A] ring-2 ring-[#FF6B4A]/20' : 'border-neutral-200'
              }`}
            >
              <div>
                {/* Quote Icon & Star Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6B4A]/10 text-[#FF6B4A] flex items-center justify-center">
                    <Quote className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-neutral-700 italic text-base leading-relaxed mb-6 font-medium">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-6 border-t border-neutral-100 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B4A]"
                />
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm flex items-center gap-1.5">
                    <span>{t.clientName}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#FF6B4A] fill-current text-white" />
                  </h4>
                  <p className="text-xs text-neutral-500 font-medium">{t.clientRole}</p>
                  <p className="text-[11px] text-[#FF6B4A] font-semibold">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-neutral-100 text-[#1A1A1A] hover:bg-[#FF6B4A] hover:text-white transition-colors focus:outline-none cursor-pointer shadow-md"
            aria-label="Previous testimonial"
            id="btn-prev-testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-xs font-bold text-neutral-500">
            {currentIndex + 1} / {TESTIMONIALS_DATA.length}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-neutral-100 text-[#1A1A1A] hover:bg-[#FF6B4A] hover:text-white transition-colors focus:outline-none cursor-pointer shadow-md"
            aria-label="Next testimonial"
            id="btn-next-testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
