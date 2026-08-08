import React, { useState } from 'react';
import { Sliders, Volume2, Sparkles, Wand2, Film, Check, Play, RefreshCw } from 'lucide-react';

export const InteractiveStudio: React.FC = () => {
  const [selectedLUT, setSelectedLUT] = useState<'teal' | 'cyber' | 'moody' | 'natural'>('teal');
  const [enableSoundFX, setEnableSoundFX] = useState<boolean>(true);
  const [enableCaptions, setEnableCaptions] = useState<boolean>(true);
  const [enableMotionFX, setEnableMotionFX] = useState<boolean>(true);
  const [sliderPos, setSliderPos] = useState<number>(50);

  const lutFilterStyle = {
    teal: 'contrast(125%) saturate(140%) hue-rotate(-15deg) brightness(95%)',
    cyber: 'contrast(140%) saturate(180%) hue-rotate(180deg) brightness(105%)',
    moody: 'contrast(130%) saturate(80%) sepia(20%) brightness(90%)',
    natural: 'contrast(105%) saturate(110%) brightness(100%)',
  }[selectedLUT];

  return (
    <section id="studio" className="py-24 bg-[#121212] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B4A] bg-[#FF6B4A]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#FF6B4A]/20">
            Editing Suite Playground
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Interactive Editing Studio
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3">
            Experience how professional color grading, motion graphics, and sound design transform raw footage in real-time.
          </p>
        </div>

        {/* Playground Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-900/90 border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl">
          
          {/* Left Column: Interactive Video Preview Frame */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl select-none group">
              {/* Raw Video Base */}
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
                alt="Unedited Footage"
                className="absolute inset-0 w-full h-full object-cover filter saturate-50 contrast-90"
              />

              {/* Graded & FX Overlay Layer */}
              <div
                className="absolute inset-0 overflow-hidden transition-all duration-300"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="relative w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
                    alt="Edited Footage"
                    className="absolute inset-0 w-full h-full object-cover max-w-none transition-all duration-500"
                    style={{
                      filter: lutFilterStyle,
                      width: '100%',
                      height: '100%'
                    }}
                  />

                  {/* Motion Captions Overlay */}
                  {enableCaptions && (
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-[#FF6B4A]/40 text-white font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-xl uppercase tracking-wider text-center shadow-2xl animate-bounce">
                      ⚡ <span className="text-[#FF6B4A]">STOP THE SCROLL</span> IN 3 SECONDS
                    </div>
                  )}

                  {/* Motion Graphics Callout Overlay */}
                  {enableMotionFX && (
                    <div className="absolute top-8 right-8 bg-[#FF6B4A] text-white text-[10px] font-bold px-3 py-1 rounded-md shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Color Node: Rec.709
                    </div>
                  )}
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#FF6B4A] cursor-ew-resize z-20 shadow-[0_0_15px_#FF6B4A]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FF6B4A] text-white flex items-center justify-center shadow-2xl text-xs font-bold">
                  ↔
                </div>
              </div>

              {/* Range Input Control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />

              {/* Split Overlay Labels */}
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-neutral-400 border border-white/10">
                RAW UNEDITED
              </div>
              <div className="absolute top-3 right-3 bg-[#FF6B4A] backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-white shadow-md">
                GRADED + FX ({selectedLUT.toUpperCase()})
              </div>
            </div>

            {/* Audio & Status Indicator Row */}
            <div className="flex items-center justify-between text-xs text-neutral-400 bg-black/40 p-3 rounded-xl border border-white/5">
              <span className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#FF6B4A]" />
                <span>Audio Layering: {enableSoundFX ? 'Cinematic SFX + Bass Drops Active' : 'Muted'}</span>
              </span>
              <span className="font-mono text-[#FF6B4A] font-semibold">4K 60FPS Render</span>
            </div>
          </div>

          {/* Right Column: Controls */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#FF6B4A]" />
              <span>Color Grading & FX Controls</span>
            </h3>

            {/* LUT Presets */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Select Color LUT Preset:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'teal', label: 'Teal & Orange', desc: 'Cinematic Blockbuster' },
                  { id: 'cyber', label: 'Cyberpunk Neon', desc: 'High Contrast Vibrant' },
                  { id: 'moody', label: 'Moody Vintage', desc: 'Film Grain Sepia' },
                  { id: 'natural', label: 'Crisp Natural', desc: 'Balanced Rec.709' },
                ].map((lut) => (
                  <button
                    key={lut.id}
                    onClick={() => setSelectedLUT(lut.id as any)}
                    className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                      selectedLUT === lut.id
                        ? 'bg-[#FF6B4A] text-white border-[#FF6B4A] shadow-lg'
                        : 'bg-black/40 text-neutral-300 border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div className="font-bold">{lut.label}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">{lut.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Editing Layer Toggles */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Additional Editing Layers:
              </label>

              <button
                onClick={() => setEnableCaptions(!enableCaptions)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-white font-medium hover:border-white/20 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
                  <span>Dynamic Kinetic Captions</span>
                </span>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${enableCaptions ? 'bg-[#FF6B4A] border-[#FF6B4A] text-white' : 'border-white/20'}`}>
                  {enableCaptions && <Check className="w-3.5 h-3.5" />}
                </div>
              </button>

              <button
                onClick={() => setEnableSoundFX(!enableSoundFX)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-white font-medium hover:border-white/20 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-[#FF6B4A]" />
                  <span>Sound FX & Rhythmic Cuts</span>
                </span>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${enableSoundFX ? 'bg-[#FF6B4A] border-[#FF6B4A] text-white' : 'border-white/20'}`}>
                  {enableSoundFX && <Check className="w-3.5 h-3.5" />}
                </div>
              </button>

              <button
                onClick={() => setEnableMotionFX(!enableMotionFX)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-white font-medium hover:border-white/20 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-[#FF6B4A]" />
                  <span>Motion Callouts & Lower Thirds</span>
                </span>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${enableMotionFX ? 'bg-[#FF6B4A] border-[#FF6B4A] text-white' : 'border-white/20'}`}>
                  {enableMotionFX && <Check className="w-3.5 h-3.5" />}
                </div>
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 leading-relaxed italic">
              * Every project includes custom color grading matched to your brand identity, dialogue audio enhancement, and retention-optimized pacing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
