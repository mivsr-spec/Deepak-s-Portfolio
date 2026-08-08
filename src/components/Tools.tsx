import React, { useState } from 'react';
import { TOOLS_DATA } from '../data/portfolioData';
import { ToolItem } from '../types';
import { Cpu, CheckCircle2 } from 'lucide-react';

export const Tools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TOOLS_DATA[0]);

  return (
    <section id="tools" className="py-24 bg-[#FAFAFA] text-[#333333] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B4A] bg-[#FF6B4A]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Tools
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Tools I Use
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Industry-standard software stack for editing, motion design, color grading, and audio mastering.
          </p>
        </div>

        {/* Tools Marquee Row */}
        <div className="mb-12 overflow-hidden py-4 bg-white rounded-2xl border border-neutral-200 shadow-sm">
          <div className="flex items-center justify-around gap-6 flex-wrap px-6">
            {TOOLS_DATA.map((tool) => (
              <button
                key={tool.name}
                onClick={() => setSelectedTool(tool)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all cursor-pointer ${
                  selectedTool.name === tool.name
                    ? 'bg-[#1A1A1A] text-white shadow-xl scale-105'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                }`}
                id={`btn-tool-${tool.shortCode.toLowerCase()}`}
              >
                {/* 64x64 styled Software Logo */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg border ${tool.iconBg} ${tool.textColor} shadow-inner shrink-0`}
                >
                  {tool.shortCode}
                </div>
                <div className="text-left pr-2">
                  <div className="font-bold text-xs sm:text-sm">{tool.name}</div>
                  <div className="text-[10px] opacity-75 font-mono">{tool.category}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Tool Detailed Highlight Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-lg max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl border ${selectedTool.iconBg} ${selectedTool.textColor} shadow-xl shrink-0`}>
            {selectedTool.shortCode}
          </div>

          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">{selectedTool.name}</h3>
              <span className="text-xs font-bold px-3 py-1 bg-[#FF6B4A]/10 text-[#FF6B4A] rounded-full uppercase tracking-wider w-fit mx-auto sm:mx-0">
                {selectedTool.category}
              </span>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {selectedTool.description}
            </p>

            {/* Proficiency Bar */}
            <div className="pt-2">
              <div className="flex justify-between text-xs font-bold text-neutral-500 mb-1">
                <span>Proficiency Level</span>
                <span className="text-[#FF6B4A]">{selectedTool.proficiency}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF6B4A] to-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${selectedTool.proficiency}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
