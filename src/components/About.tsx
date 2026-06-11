import { useRef, useState } from 'react';
import { TIMELINE, SKILLS, PERSONAL_INFO } from '../data';
import {
  Layers,
  Image,
  Palette,
  Cpu,
  Sparkles,
  Compass,
  Building,
  Tablet,
  Edit3,
  Brush,
  Brain,
  Code2,
  Terminal,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function About() {
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  // Map icon names from string metadata to real Lucide components
  const iconMap: Record<string, any> = {
    Layers: Layers,
    Image: Image,
    Palette: Palette,
    Cpu: Cpu
  };

  const skillIcons: Record<string, any> = {
    "Archicad": Layers,
    "Revit": Building,
    "AutoCAD": Compass,
    "Shapr3D": Tablet,
    "Twinmotion": Sparkles,
    "Morpholio Trace": Edit3,
    "Illustrator": Palette,
    "Affinity Suite": Compass,
    "Procreate & Concepts": Brush,
    "Gemini / Claude API": Brain,
    "JavaScript (GAS)": Code2,
    "Python": Terminal
  };

  return (
    <section id="about" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-sky-500 uppercase font-bold">
              01 / PROFILE
            </span>
            <h2 className="text-3xl font-display font-medium text-slate-900 tracking-tight mt-1">
              プロフィール
            </h2>
          </div>
        </div>

        {/* Bio & Chronology Two-Column Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left bio column */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
            
            {/* Elegant Profile Photo Placeholder Space */}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-3xs">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-sm shrink-0 flex items-center justify-center relative group select-none">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name.ja}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <span className="inline-block text-[9px] font-mono tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full font-bold uppercase">
                  ARCHITECT &amp; SYSTEM ENGINEER
                </span>
                <h4 className="text-lg font-display font-bold text-slate-900 mt-2">
                  {PERSONAL_INFO.name?.ja}
                </h4>
                <p className="text-xs text-slate-450 font-mono mt-0.5">
                  {PERSONAL_INFO.name?.en}
                </p>
                <p className="text-[11px] text-slate-550 mt-2 leading-relaxed">
                  {PERSONAL_INFO.university}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative">
                <span className="absolute -top-3 -left-3 text-7xl font-display font-bold text-slate-100 select-none z-0">
                  &ldquo;
                </span>
                <p className="text-lg text-slate-800 leading-relaxed font-display font-medium relative z-1 pl-4 border-l-2 border-sky-500 font-bold">
                  「空間設計」と「DX推進」
                </p>
              </div>
              <p className="text-sm text-slate-650 leading-relaxed pl-4">
                {PERSONAL_INFO.bio}
              </p>
            </div>
          </div>

          {/* Right Chronology Timeline column */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-8">
            <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
              キャリア
            </h3>

            <div className="relative border-l border-slate-200 pl-6 ml-2 flex flex-col gap-8">
              {TIMELINE.map((evt, idx) => {
                const isLatest = idx === TIMELINE.length - 1;
                return (
                  <div
                    key={idx}
                    className={`relative group transition-all duration-350 ${
                      !isTimelineExpanded && !isLatest ? 'hidden sm:block animate-fade-out' : 'block animate-fade-in'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-white bg-sky-500 shadow-sm transition-transform group-hover:scale-125" />

                    <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px]">
                      <span className="font-bold text-sky-600">{evt.year}年{evt.month}</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-slate-400">{evt.organization}</span>
                    </div>

                    <h3 className="text-base font-display font-bold text-slate-850 tracking-tight">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Collapse toggle button for mobile */}
            <div className="sm:hidden -mt-2">
              <button
                onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-[11px] font-mono font-bold tracking-wider text-slate-600 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer select-none"
              >
                {isTimelineExpanded ? (
                  <>
                    <span>経歴を折りたたむ</span>
                    <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                  </>
                ) : (
                  <>
                    <span>すべての経歴を表示 ({TIMELINE.length})</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Skill Analyzer section */}
        <div className="mt-24 border-t border-slate-200 pt-16">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest text-sky-500 uppercase font-bold">
              02 / TOOLS &amp; STACK
            </span>
            <h3 className="text-2xl font-display font-medium text-slate-900 tracking-tight mt-1">
              使用ツール ＆ スキル
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 max-w-2xl">
              建築モデリングからレンダリング、プログラミング、AIの統合まで、目的と課題にあわせて柔軟に変革するツールスタック。
            </p>
          </div>

          <div className="relative group/skills">
            <button
              onClick={() => scroll('left')}
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/86 hover:bg-white backdrop-blur-md border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-md transition-all active:scale-95 lg:hidden"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/86 hover:bg-white backdrop-blur-md border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-md transition-all active:scale-95 lg:hidden"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-8 pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide"
            >
              {SKILLS.map((cat, catIdx) => {
                const CategoryIcon = iconMap[cat.icon] || Layers;

                return (
                  <div
                    key={cat.title}
                    className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-sm hover:border-slate-300 transition-all duration-300 w-[88vw] sm:w-[450px] shrink-0 snap-start lg:w-auto lg:shrink"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between border-b border-slate-250 pb-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-slate-900 text-white shadow-2xs">
                            <CategoryIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                              PART 0{catIdx + 1}
                            </span>
                            <h4 className="text-base font-display font-bold text-slate-900 leading-tight">
                              {cat.title}
                            </h4>
                          </div>
                        </div>
                      </div>

                      {/* Content Section: Split into list and image */}
                      <div className="flex flex-col sm:flex-row gap-6 items-stretch">
                        {/* Product items (flexible/expanded column) */}
                        <div className="flex-1 flex flex-col gap-4">
                          {cat.skills.map((skill) => {
                            const SkillIcon = skillIcons[skill.name] || Sparkles;
                            return (
                              <div key={skill.name} className="flex gap-3">
                                <div className="p-1.5 h-7 w-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-3xs overflow-hidden">
                                  {skill.iconImage ? (
                                    <img
                                      src={skill.iconImage}
                                      alt={skill.name}
                                      className="w-full h-full object-contain"
                                    />
                                  ) : (
                                    <SkillIcon className="w-4 h-4 text-slate-600" />
                                  )}
                                </div>
                                <div>
                                  <h5 className="text-xs font-bold text-slate-900 font-mono tracking-wide">
                                    {skill.name}
                                  </h5>
                                  <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 font-medium">
                                    {skill.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Reference Image Column */}
                        <div className="w-full sm:w-36 shrink-0 aspect-[4/3] sm:aspect-square md:aspect-[3/4] xl:aspect-[4/5] rounded-2xl overflow-hidden relative border border-slate-250/60 shadow-inner">
                          <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
