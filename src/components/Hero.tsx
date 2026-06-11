import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-slate-50 pt-24 overflow-hidden"
    >
      {/* Background Hero Image with Subtle Tint & Digital Grid */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/tookyujo.png"
          alt="Architecture and DX promotion concept background"
          className="w-full h-full object-cover object-center opacity-[0.25] select-none"
          referrerPolicy="no-referrer"
        />
        {/* Visual Gradients matching Sleek Interface */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/40 via-white/15 to-slate-50/40" />

        {/* Blueprint Grid Lines Overlay with sky-500 color */}
        <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-15" />
        
        {/* Glowing blur orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full py-12 flex flex-col gap-10">
        {/* Main Copies */}
        <div className="max-w-4xl flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-slate-900 tracking-tight leading-[1.1]"
          >
            Architecture <span className="font-light text-slate-400">×</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-slate-800 font-bold italic">
              DX promotion
            </span>
          </motion.h1>


        </div>
      </div>

      {/* Hero Bottom Geometric Ornament */}
      <div className="absolute bottom-0 left-0 w-full flex justify-end px-12 pb-4 select-none pointer-events-none">
        <div className="flex gap-4 font-mono text-[9px] text-slate-300 font-semibold">
          <div>GL +0.00m</div>
          <div>FL +1.20m</div>
          <div>TO +4.50m (ROOF)</div>
        </div>
      </div>
    </section>
  );
}
