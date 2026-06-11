import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { X, ExternalLink, Calendar, Code, ArrowUpRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-sky-500 uppercase font-bold">
              02 / MAJOR PROJECTS
            </span>
            <h2 className="text-3xl font-display font-medium text-slate-900 tracking-tight mt-1">
              主要プロジェクト ＆ 実績
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400">
            Architectural and Technology Projects
          </p>
        </div>

        {/* Projects Cards Layout with Arrow Controls */}
        <div className="relative group/projects">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/86 hover:bg-white backdrop-blur-md border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-md transition-all active:scale-95 md:hidden"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/86 hover:bg-white backdrop-blur-md border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-md transition-all active:scale-95 md:hidden"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
          >
            {PROJECTS.map((proj) => (
              <motion.div
                layoutId={`proj-card-${proj.id}`}
                onClick={() => setSelectedProject(proj)}
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-sky-400/50 transition-all group cursor-pointer flex flex-col h-full w-[88vw] sm:w-[380px] shrink-0 snap-start md:w-auto md:shrink"
              >
              <div className="relative overflow-hidden aspect-4/3 bg-slate-100">
                {/* Product/Design Preview Image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Glassy Tag for Tech */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1">
                  <span className="text-[9px] font-mono font-bold tracking-wide uppercase px-2.5 py-1 bg-white/95 backdrop-blur-xs text-slate-800 rounded shadow-xs border border-slate-100">
                    {proj.technologies[0]}
                  </span>
                </div>

                {/* Right Corner Arrow */}
                <div className="absolute bottom-4 right-4 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm border border-slate-105">
                  <ArrowUpRight className="w-4 h-4 text-sky-500" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-1.5">
                  <p className="text-[10px] font-mono font-bold text-sky-500 uppercase tracking-widest leading-none">
                    {proj.role}
                  </p>
                  <h3 className="text-lg font-display font-bold text-slate-900 leading-tight group-hover:text-sky-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>

                {/* Categorized Pills */}
                <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-slate-150">
                  {proj.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[9px] font-mono px-2 py-0.5 bg-slate-50 text-slate-400 rounded-sm border border-slate-100">
                      #{tech}
                    </span>
                  ))}
                  {proj.technologies.length > 3 && (
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-sky-50 text-sky-600 rounded-sm font-bold">
                      +{proj.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Rich Modal Backdrop */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm"
              />

              {/* Modal Body Card */}
              <motion.div
                layoutId={`proj-card-${selectedProject.id}`}
                className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 border border-slate-200"
              >
                {/* Hero Banner Section */}
                <div className="relative aspect-16/9 overflow-hidden bg-slate-50">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                  
                  {/* Close trigger */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/40 hover:bg-slate-900/60 text-white flex items-center justify-center transition-all focus:outline-none cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[10px] font-mono tracking-widest font-bold uppercase text-sky-400 mb-1.5">
                      {selectedProject.role}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono mt-1 font-bold">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Specific details container */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column Content */}
                  <div className="md:col-span-8 flex flex-col gap-6">
                    <div>
                      <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">
                        プロジェクト詳細
                      </h4>
                      <p className="text-sm text-slate-650 leading-relaxed whitespace-pre-line">
                        {selectedProject.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-3">
                        主な学び・インサイト (Key Insights)
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {selectedProject.insights.map((ins, index) => (
                          <div key={index} className="flex gap-2.5 items-start">
                            <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                            <p className="text-xs text-slate-650 leading-relaxed font-display font-semibold">
                              {ins}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column Specification */}
                  <div className="md:col-span-4 flex flex-col gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <div>
                      <h5 className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold mb-1">
                        プロジェクト期間
                      </h5>
                      <div className="flex items-center gap-2 text-xs text-slate-700 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{selectedProject.duration}</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold mb-1">
                        活動・担当ロール
                      </h5>
                      <p className="text-xs text-slate-800 font-display font-bold">
                        {selectedProject.role}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[10px] font-mono tracking-widest text-slate-405 uppercase font-bold mb-2">
                        使用ソフトウェア・言語
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full mt-2 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors uppercase font-mono cursor-pointer"
                    >
                      Close Specs
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
