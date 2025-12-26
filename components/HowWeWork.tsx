import React from 'react';

interface HowWeWorkProps {
  onOpenForm: () => void;
}

const HowWeWork: React.FC<HowWeWorkProps> = ({ onOpenForm }) => {
  const steps = [
    {
      title: "Audit",
      desc: "We dive into your workflows, tools, and creative rhythm to find the exact points of friction."
    },
    {
      title: "Design",
      desc: "We architect custom AI agents and automated pipelines that act as your virtual infrastructure."
    },
    {
      title: "Integrate",
      desc: "We install the systems and train you to use them, ensuring they feel like a natural extension of you."
    }
  ];

  return (
    <section id="process" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-24">
        <span className="text-[#008F24] font-black uppercase tracking-[0.2em] text-sm mb-6 block">The Flow</span>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">How We Work</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 mb-24">
        {steps.map((step, i) => (
          <div key={i} className="p-12 rounded-[48px] border-2 border-slate-100 bg-white hover:border-[#00FF41] transition-colors flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-900 text-[#00FF41] rounded-full flex items-center justify-center font-black mb-8">
              {i + 1}
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{step.title}</h3>
            <p className="text-slate-500 font-bold mb-8 text-xl leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button 
          onClick={onOpenForm}
          className="bg-slate-950 text-white px-16 py-8 rounded-[32px] font-black text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95"
        >
          Book a Discovery Call
        </button>
      </div>
    </section>
  );
};

export default HowWeWork;