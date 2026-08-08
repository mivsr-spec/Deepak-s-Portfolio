import React from 'react';
import { ArrowRight, Sparkles, Send } from 'lucide-react';

interface CTAProps {
  onStartProject: () => void;
  onOpenEstimator: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onStartProject, onOpenEstimator }) => {
  return (
    <section className="py-24 bg-[#07040a] text-white relative overflow-hidden border-t border-purple-900/30">
      {/* Background Ambient Dark Purple Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-purple-950/50 rounded-full blur-[140px] opacity-90" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Icon */}
        <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
          <Sparkles className="w-8 h-8" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Let's Create Something Amazing
        </h2>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Have a project in mind? Let's bring your ideas to life with creative, high-quality video editing that captivates your audience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-500 hover:from-purple-500 hover:to-fuchsia-500 text-white font-extrabold text-base transition-all shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 flex items-center justify-center gap-2 cursor-pointer border border-purple-400/30"
            id="btn-cta-start"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
