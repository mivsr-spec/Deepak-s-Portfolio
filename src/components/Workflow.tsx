import React, { useState } from 'react';
import { WORKFLOW_DATA } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const Workflow: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<string | null>('01');

  return (
    <section id="workflow" className="py-24 bg-white text-[#333333] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B4A] bg-[#FF6B4A]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            My Process
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Simple, transparent, and efficient from start to finish.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-neutral-200 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {WORKFLOW_DATA.map((step) => {
              const isExpanded = expandedStep === step.number;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Number Circle Badge */}
                    <div
                      onClick={() => setExpandedStep(isExpanded ? null : step.number)}
                      className="w-14 h-14 rounded-full bg-[#FF6B4A] text-white font-extrabold text-xl flex items-center justify-center mb-6 shadow-lg shadow-[#FF6B4A]/30 group-hover:scale-110 transition-transform cursor-pointer"
                    >
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#FF6B4A] transition-colors">
                      {step.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                      "{step.description}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-bold text-[#FF6B4A]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Step Completed
                    </span>
                    <span>Stage {step.number}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-sm font-semibold text-neutral-500 mt-12">
          Simple, transparent, and efficient from start to finish.
        </p>

      </div>
    </section>
  );
};
