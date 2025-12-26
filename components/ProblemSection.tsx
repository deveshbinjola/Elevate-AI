import React from 'react';
import { AlertCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const points = [
    "You have a deep vision, but the technical execution feels heavy.",
    "Your current systems require too much manual oversight.",
    "You know AI could help, but generic tools feel soul-less.",
    "You're hitting a scaling ceiling due to operational friction."
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <AlertCircle className="text-[#008F24]" size={32} />
          <span className="text-[#008F24] font-black uppercase tracking-[0.2em] text-sm">The Friction</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-16 tracking-tighter leading-tight">
          Growth is stalled by <br />
          <span className="text-slate-400">administrative clutter.</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {points.map((point, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 soft-shadow">
              <p className="text-xl font-bold text-slate-700 leading-relaxed tracking-tight">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;