import React from 'react';
import { Heart, Wind, Zap, ShieldCheck } from 'lucide-react';

const Philosophy: React.FC = () => {
  const points = [
    { icon: <Heart size={20} className="text-brand-green" />, title: "NERVOUS SYSTEM", desc: "Building only what honors your body’s signals." },
    { icon: <Wind size={20} className="text-brand-green" />, title: "THINKING PATTERNS", desc: "Systems that respect your natural information flow." },
    { icon: <Zap size={20} className="text-brand-green" />, title: "CREATIVE RHYTHM", desc: "Supporting cycles of deep output and regen." },
    { icon: <ShieldCheck size={20} className="text-brand-green" />, title: "YOUR TRUTH", desc: "No generic templates. Just your unique frequency." },
  ];

  return (
    <section id="about" className="py-32 bg-slate-950 text-white overflow-hidden relative scroll-mt-20">
      {/* Dynamic atmospheric glow - Amber to Green transition */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brand-green/10 blur-[120px] rounded-full -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="order-2 lg:order-1 relative animate-fade-up">
          {/* Portrait Container Optimized for the standing meditation photo */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[80px] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl group">
            <img 
              // Using a high-quality meditative portrait placeholder that mirrors the provided image's vibe
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2062&auto=format&fit=crop" 
              alt="Embodiment First Practice" 
              className="w-full h-full object-cover brightness-110 saturate-[1.2] sepia-[0.15] transition-transform duration-700 group-hover:scale-105"
            />
            {/* Vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            
            {/* Floating Context Label */}
            <div className="absolute top-12 left-12 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-amber-400">Sacred Systems</span>
            </div>
          </div>

          {/* Quote Badge - repositioned to avoid central subject */}
          <div className="absolute -bottom-10 -right-4 md:-right-10 bg-brand-green p-12 rounded-[56px] hidden md:block max-w-sm shadow-[0_30px_60px_-15px_rgba(0,255,65,0.3)]">
            <p className="text-2xl font-black text-slate-950 leading-tight tracking-tighter">
              AI should reduce cognitive load, not make you feel like a machine.
            </p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
             <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
             <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Philosophy</span>
          </div>

          <h2 className="text-6xl md:text-[100px] font-black mb-12 leading-[0.85] tracking-tighter">
            Embodiment-<br />first, <br />
            <span className="text-brand-green italic">AI-second.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-bold tracking-tight max-w-xl">
            We don’t start with tools. We don’t start with automation. <br className="hidden md:block"/>We start with the <span className="text-white border-b-4 border-amber-500/50">human frequency</span> of your business.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-12">
            {points.map((p, i) => (
              <div key={i} className="group border-l-2 border-white/5 pl-8 py-2 hover:border-brand-green transition-all duration-300">
                <div className="mb-6 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-green/20 group-hover:text-brand-green transition-colors">
                  {p.icon}
                </div>
                <h4 className="text-xs font-black mb-3 text-white uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">{p.title}</h4>
                <p className="text-slate-500 font-bold leading-relaxed group-hover:text-slate-300 transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-12 rounded-[56px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl group-hover:bg-brand-green/10 transition-colors"></div>
            <p className="text-xl md:text-3xl text-slate-200 font-black italic leading-tight text-center relative z-10">
              "Because a system that doesn’t respect the human running it <span className="text-brand-green">will eventually collapse.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;