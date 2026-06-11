import { PERSONAL_INFO } from '../data';
import { ArrowUp, Mail, Landmark, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-slate-900 pb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-white text-gray-950 font-mono text-xs font-bold flex items-center justify-center">
                YK
              </span>
              <div>
                <p className="text-sm font-display font-bold leading-none">
                  {PERSONAL_INFO.name.ja}
                </p>
                <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-widest leading-none">
                  {PERSONAL_INFO.name.en} PORTFOLIO
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3 max-w-sm leading-relaxed">
              建築の「空間価値」と情報工学の「デジタルの推進力」を等しく磨き、実社会のプロセス向上と次世代の設計体験を模索しています。
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Quick Contact buttons */}
            <a
              href="mailto:yuta.basketball.1412@gmail.com"
              className="group flex items-center gap-2.5 py-3 px-5 text-xs font-mono font-medium rounded-xl border border-slate-800 hover:border-white transition-all bg-slate-950 text-white"
            >
              <Mail className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              <span>Contact Mail</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-850 hover:border-white text-white flex items-center justify-center transition-all cursor-pointer"
              title="Page Top"
            >
              <ArrowUp className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] font-mono text-gray-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-gray-500" />
              <span>和歌山大学大学院 システム工学研究科 デザイン科学専攻 皆藤研究ユニット</span>
            </div>
          </div>
          <div>
            <p>
              &copy; {new Date().getFullYear()} Yuta Kaito. Generated for Competition Board &amp; Graduate Thesis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
