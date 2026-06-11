import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INTERESTS } from '../data';
import { Camera, Award, Compass, ChefHat, Sparkles, Heart, Sliders, Eye } from 'lucide-react';

export default function Interests() {
  const [activeTab, setActiveTab] = useState<string>("camera");
  const [activeFilter, setActiveFilter] = useState<'none' | 'sepia' | 'grayscale' | 'cool' | 'vivid'>('none');

  const selectedHobby = INTERESTS.find(h => h.id === activeTab) || INTERESTS[0];

  const iconMap: Record<string, any> = {
    Camera: Camera,
    Award: Award,
    Compass: Compass,
    ChefHat: ChefHat,
    Sparkles: Sparkles
  };

  // Filter CSS class definitions
  const filterClasses = {
    none: 'brightness-100 contrast-100 filter-none',
    sepia: 'sepia contrast-110 saturate-120 brightness-95',
    grayscale: 'grayscale contrast-125 brightness-90',
    cool: 'hue-rotate-15 saturate-110 brightness-100 contrast-105',
    vivid: 'saturate-150 contrast-115 brightness-100'
  };

  return (
    <section id="interests" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-2xs font-bold font-mono mb-2">
              03 / HOBBY &amp; LIFE
            </div>
            <h2 className="text-3xl font-display font-medium text-slate-900 tracking-tight mt-1">
              趣味・ライフスタイル
            </h2>
          </div>
        </div>

        {/* Bento Photo Gallery and Viewer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Navigation / Feed of Snapshots (Left 5 Cols) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono mb-1 flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-slate-500" />
              SNAPSHOT GALLERY
            </h3>
            
            <div className="flex flex-row justify-center sm:grid sm:grid-cols-2 xl:grid-cols-1 gap-3 mb-4 sm:mb-0">
              {INTERESTS.map((interest) => {
                const Icon = iconMap[interest.icon] || Heart;
                const isActive = activeTab === interest.id;
                return (
                  <button
                    key={interest.id}
                    id={`interest-btn-${interest.id}`}
                    onClick={() => {
                      setActiveTab(interest.id);
                      // Reset filter occasionally or keep it
                    }}
                    className={`group relative text-left transition-all duration-300 cursor-pointer 
                      w-14 h-14 sm:w-auto sm:h-auto rounded-full sm:rounded-2xl overflow-hidden border
                      flex items-center justify-center sm:block shrink-0
                      ${
                        isActive
                          ? 'border-slate-900 ring-2 ring-slate-900 ring-offset-2 bg-slate-900/5 sm:bg-transparent'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                  >
                    {/* On Desktop: Full Detail Layout */}
                    <div className="hidden sm:flex items-center gap-4 p-4 h-full relative z-10">
                      {/* Thumbnail Picture preview */}
                      <div className="w-16 h-16 rounded-lg relative overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-sm flex items-center justify-center">
                        {interest.image ? (
                          <img
                            src={interest.image}
                            alt={interest.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <span className="text-[8px] font-mono font-bold text-slate-400">NO IMAGE</span>
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                      </div>

                      {/* Title & Short Tagline */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`p-1.5 rounded-lg shrink-0 ${
                            isActive ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            <Icon className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            {interest.id.toUpperCase()}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mt-1.5 truncate">
                          {interest.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {interest.description}
                        </p>
                      </div>

                      {/* Small Indicator */}
                      <div className={`w-2 h-2 rounded-full absolute top-4 right-4 transition-colors ${
                        isActive ? 'bg-sky-500' : 'bg-transparent'
                      }`} />
                    </div>

                    {/* On Mobile: Only the Icon */}
                    <div className="sm:hidden flex items-center justify-center w-full h-full">
                      <span className={`p-2.5 rounded-full shrink-0 transition-colors ${
                        isActive ? 'text-slate-900 scale-110' : 'text-slate-440'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Shutter Frame Viewfinder Workspace (Right 7 Cols) */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 md:p-8 flex flex-col justify-between shadow-sm relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHobby.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6 h-full"
              >
                {/* Viewfinder Header info / Camera Meta */}
                <div className="flex items-center justify-between border-b border-slate-150 pb-4">
                  <div>
                    <h4 className="text-lg font-display font-medium text-slate-900 mt-2">
                      {selectedHobby.title}
                    </h4>
                  </div>
                </div>

                {/* Primary Interactive Photo view with Shutter Overlay */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 group/frame">
                  
                  {/* Photo itself with dynamic filter applied */}
                  {selectedHobby.image ? (
                    <img
                      src={selectedHobby.image}
                      alt={selectedHobby.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${filterClasses[activeFilter]}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xs font-mono font-bold text-white/50 tracking-widest">NO IMAGE</span>
                    </div>
                  )}

                  {/* Grid overlay for third-rule design guidelines */}
                  <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 opacity-25">
                    <div className="border-r border-b border-dashed border-white/60" />
                    <div className="border-r border-b border-dashed border-white/60" />
                    <div className="border-b border-dashed border-white/60" />
                    <div className="border-r border-b border-dashed border-white/60" />
                    <div className="border-r border-b border-dashed border-white/60" />
                    <div className="border-b border-dashed border-white/60" />
                    <div className="border-r border-white/60 opacity-0" />
                    <div className="border-r border-white/60 opacity-0" />
                    <div className="opacity-0" />
                  </div>

                  {/* Corner Viewfinder [ ] indicators */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/80" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/80" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/80" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/80" />

                  {/* Viewfinder Center Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative w-6 h-6">
                      <div className="absolute top-1/2 left-0 w-6 h-[1px] bg-white/75 -translate-y-1/2" />
                      <div className="absolute left-1/2 top-0 h-6 w-[1px] bg-white/75 -translate-x-1/2" />
                      <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 border border-white/75 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Watermark detail */}
                  <div className="absolute bottom-4 left-4 text-[9px] font-mono text-white/50 bg-black/30 backdrop-blur-xs px-2 py-1 rounded">
                    50mm Lens • Standard Focus
                  </div>
                </div>


                {/* Narrative Detail of the Selected Hobby */}
                <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-150 mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                    <p className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                      SNAPSHOT REVELATION / バックストーリー
                    </p>
                  </div>
                  <p className="text-sm font-bold text-slate-900">
                    {selectedHobby.description}
                  </p>
                  <p className="text-xs text-slate-650 leading-relaxed font-sans font-medium whitespace-pre-wrap pt-1">
                    {selectedHobby.detail}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
