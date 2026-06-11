import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 antialiased font-sans transition-colors selection:bg-sky-500 selection:text-white">
      {/* Absolute Sticky Header */}
      <Header />

      {/* Main Single Column Storytelling Stream */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Block */}
        <Hero />

        {/* 2. Biography, Career Path & Technical Specs */}
        <About />

        {/* 3. Portfolios of Work & Physical Shelter Case Studies */}
        <Projects />

        {/* 4. Lifestyle & Aesthetic Sensibilities Bento */}
        <Interests />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
