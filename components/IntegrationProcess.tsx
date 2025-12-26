import React from 'react';
import { Keyboard, Cpu, Download } from 'lucide-react';

const IntegrationProcess: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: "Discovery & Resonance",
      desc: "We meet to understand your unique frequency and operational bottlenecks."
    },
    {
      num: 2,
      title: "Custom Architecture",
      desc: "We build your bespoke AI agents and workflows in a private sandbox."
    },
    {
      num: 3,
      title: "Embodiment & Handover",
      desc: "Training for you and your team to use these tools with confidence and ease."
    }
  ];

  return (
    <section id="process" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 leading-tight">The Integration Process</h2>
          <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed">
            We don't just hand you a tool. We treat AI adoption as a <span className="text-brand-green font-bold">relational practice</span>, ensuring it fits your nervous system and business model perfectly.
          </p>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-8 items-start relative">
                {step.num !== 3 && <div className="absolute left-[15px] top-[40px] bottom-[-48px] w-[2px] bg-slate-100"></div>}
                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-slate-900 font-bold shrink-0 z-10 text-[10px]">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50/50 p-16 rounded-[64px] relative overflow-hidden flex justify-center items-center border border-yellow-100">
          <div className="bg-white rounded-[40px] p-10 soft-shadow w-full max-w-md relative z-10 border border-slate-50">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 ring-4 ring-brand-green/10">
                <img src="https://i.pravatar.cc/100?u=embodiment" alt="Facilitator" />
              </div>
              <div className="space-y-3">
                <div className="w-28 h-2.5 bg-slate-100 rounded-full"></div>
                <div className="w-20 h-2 bg-slate-50 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4 mb-10">
              <div className="w-full h-2 bg-slate-50 rounded-full"></div>
              <div className="w-full h-2 bg-slate-50 rounded-full"></div>
              <div className="w-4/5 h-2 bg-slate-50 rounded-full"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-12 h-4 bg-slate-50 rounded-full"></div>
              <div className="px-6 py-3 bg-brand-green/20 text-emerald-800 rounded-2xl text-[10px] font-extrabold tracking-widest uppercase">
                Optimized
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green/10 blur-[100px]"></div>
        </div>
      </div>

      <div className="text-center">
        <span className="text-brand-green font-extrabold uppercase tracking-widest text-xs mb-4 block">Process</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-20 leading-tight">From Intention to Implementation</h2>
        <div className="grid md:grid-cols-3 gap-20">
          {[
            { icon: <Keyboard size={32} />, t: "1. Input Your Intent", d: "Describe your goal, the feeling you want to evoke, or the specific problem your client is facing." },
            { icon: <Cpu size={32} />, t: "2. AI Generation", d: "Our models, trained on thousands of hours of embodiment work, craft a tailored solution instantly." },
            { icon: <Download size={32} />, t: "3. Receive & Refine", d: "Get a draft that is 90% there. Add your personal human touch and deploy it to your community." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
               <div className="w-24 h-24 rounded-[32px] border border-slate-100 bg-white soft-shadow flex items-center justify-center text-brand-green mb-10 transition-transform hover:rotate-3">
                 {item.icon}
               </div>
               <h4 className="text-2xl font-extrabold mb-5 text-slate-900">{item.t}</h4>
               <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationProcess;