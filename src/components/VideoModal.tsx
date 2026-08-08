import React, { useState } from 'react';
import { X, Play, Clock, Eye, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectService: (service: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose, onSelectService }) => {
  const [gradingSlider, setGradingSlider] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'video' | 'grading'>('video');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#1A1A1A] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-neutral-900/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FF6B4A]/20 text-[#FF6B4A] text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono">Format: {project.format}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
            id="btn-close-video-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Tab Selector if Grading comparison is available */}
          {project.beforeGradingImage && project.afterGradingImage && (
            <div className="flex items-center gap-2 bg-neutral-900 p-1 rounded-xl border border-white/10 w-fit">
              <button
                onClick={() => setActiveTab('video')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'video' ? 'bg-[#FF6B4A] text-white shadow' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Video Player
              </button>
              <button
                onClick={() => setActiveTab('grading')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'grading' ? 'bg-[#FF6B4A] text-white shadow' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Color Grading Comparison
              </button>
            </div>
          )}

          {/* Main Video Screen */}
          {activeTab === 'video' ? (
            <div className={`relative bg-black rounded-2xl overflow-hidden border border-white/10 ${project.format === '9:16' ? 'max-w-sm mx-auto aspect-[9/16] h-[450px]' : 'aspect-video w-full'}`}>
              <video
                src={project.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
                poster={project.thumbnail}
              />
            </div>
          ) : (
            /* Color Grading Before / After Interactive Slider */
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 select-none">
              {/* Before Image */}
              <img
                src={project.beforeGradingImage}
                alt="Before Color Grading"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* After Image with Clip Path */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${gradingSlider}%` }}
              >
                <img
                  src={project.afterGradingImage}
                  alt="After Color Grading"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              {/* Divider Line & Slider Controls */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#FF6B4A] cursor-ew-resize z-20"
                style={{ left: `${gradingSlider}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FF6B4A] text-white flex items-center justify-center shadow-lg font-bold text-xs">
                  ↔
                </div>
              </div>

              {/* Range Input Overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={gradingSlider}
                onChange={(e) => setGradingSlider(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />

              {/* Labels */}
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-neutral-300">
                RAW / BEFORE
              </div>
              <div className="absolute top-3 right-3 bg-[#FF6B4A]/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white">
                COLOR GRADED / AFTER
              </div>
            </div>
          )}

          {/* Project Details */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
              <span className="text-sm font-semibold text-[#FF6B4A]">Client: {project.client}</span>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-neutral-900 border border-white/10 mb-6">
              <div>
                <span className="text-[10px] text-neutral-500 uppercase font-bold block">Category</span>
                <span className="text-xs font-semibold text-white">{project.category}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase font-bold block">Turnaround</span>
                <span className="text-xs font-semibold text-white">{project.turnaroundTime}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase font-bold block">Format</span>
                <span className="text-xs font-semibold text-white">{project.format}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase font-bold block">Views Reached</span>
                <span className="text-xs font-semibold text-[#FF6B4A]">{project.views || 'N/A'}</span>
              </div>
            </div>

            {/* Software Badges */}
            <div className="mb-6">
              <span className="text-xs font-bold text-neutral-400 block mb-2">Software Stack Used:</span>
              <div className="flex flex-wrap gap-2">
                {project.softwareUsed.map((sw, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-white/10 text-xs font-medium text-white border border-white/10">
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-400">Like this video style for your brand?</span>
          <button
            onClick={() => {
              onClose();
              onSelectService(project.category);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#FF6B4A] hover:bg-[#ff5733] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FF6B4A]/20"
            id="btn-request-similar-edit"
          >
            <span>Request Similar Edit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
