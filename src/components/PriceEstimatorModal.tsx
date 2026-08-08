import React, { useState } from 'react';
import { X, Calculator, Clock, CheckCircle, ArrowRight, DollarSign, Sparkles } from 'lucide-react';

interface PriceEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceWithEstimate: (service: string, estimateDetails: string) => void;
}

export const PriceEstimatorModal: React.FC<PriceEstimatorModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceWithEstimate,
}) => {
  const [videoType, setVideoType] = useState<string>('Short Form');
  const [duration, setDuration] = useState<string>('Under 1 min');
  const [turnaround, setTurnaround] = useState<string>('Standard (2-3 Days)');
  const [motionFx, setMotionFx] = useState<boolean>(true);

  if (!isOpen) return null;

  // Calculate dynamic price estimate
  let basePrice = 80;
  if (videoType === 'YouTube') basePrice = 150;
  if (videoType === 'Promotional') basePrice = 200;
  if (videoType === 'Color Grading') basePrice = 120;

  if (duration === '1-5 mins') basePrice += 40;
  if (duration === '5-15 mins') basePrice += 90;
  if (duration === '15+ mins') basePrice += 160;

  if (turnaround.includes('Rush')) basePrice += 60;
  if (motionFx) basePrice += 40;

  const handleBook = () => {
    const details = `Estimated package: $${basePrice} for ${videoType} (${duration}, ${turnaround}, ${motionFx ? 'With Advanced Motion FX' : 'Standard Motion'})`;
    onSelectServiceWithEstimate(videoType, details);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#1A1A1A] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B4A] text-white flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Project Cost Calculator</h3>
              <p className="text-xs text-neutral-400">Get an instant turnaround and budget estimate</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
            id="btn-close-estimator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options Selection */}
        <div className="py-6 space-y-6">
          
          {/* Video Type */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              1. Video Type:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Short Form', 'YouTube', 'Promotional', 'Color Grading'].map((type) => (
                <button
                  key={type}
                  onClick={() => setVideoType(type)}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    videoType === type
                      ? 'bg-[#FF6B4A] text-white border-[#FF6B4A] shadow-md'
                      : 'bg-neutral-900 text-neutral-300 border-white/10 hover:border-white/30'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Video Duration */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              2. Raw Footage / Target Duration:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Under 1 min', '1-5 mins', '5-15 mins', '15+ mins'].map((dur) => (
                <button
                  key={dur}
                  onClick={() => setDuration(dur)}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    duration === dur
                      ? 'bg-[#FF6B4A] text-white border-[#FF6B4A] shadow-md'
                      : 'bg-neutral-900 text-neutral-300 border-white/10 hover:border-white/30'
                  }`}
                >
                  {dur}
                </button>
              ))}
            </div>
          </div>

          {/* Turnaround Speed */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              3. Turnaround Speed:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Standard (2-3 Days)', 'Rush (24-48 Hours)'].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setTurnaround(speed)}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    turnaround === speed
                      ? 'bg-[#FF6B4A] text-white border-[#FF6B4A] shadow-md'
                      : 'bg-neutral-900 text-neutral-300 border-white/10 hover:border-white/30'
                  }`}
                >
                  {speed}
                </button>
              ))}
            </div>
          </div>

          {/* Advanced FX Toggle */}
          <button
            onClick={() => setMotionFx(!motionFx)}
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-neutral-900 border border-white/10 text-xs font-semibold text-white hover:border-white/20 transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
              <span>Include Advanced Motion Graphics & Dynamic Captions</span>
            </span>
            <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${motionFx ? 'bg-[#FF6B4A] border-[#FF6B4A] text-white' : 'border-white/20'}`}>
              {motionFx && <CheckCircle className="w-3.5 h-3.5" />}
            </div>
          </button>

        </div>

        {/* Calculated Result Display */}
        <div className="p-4 rounded-2xl bg-neutral-900 border border-[#FF6B4A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-neutral-400">Estimated Budget Range</div>
            <div className="text-3xl font-extrabold text-[#FF6B4A]">${basePrice} – ${basePrice + 50} USD</div>
            <div className="text-[11px] text-neutral-400">Includes 2 rounds of free revisions</div>
          </div>

          <button
            onClick={handleBook}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FF6B4A] hover:bg-[#ff5733] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FF6B4A]/30"
            id="btn-book-estimate"
          >
            <span>Lock In This Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
