import React from 'react';

const WhatIDo: React.FC = () => {
  const areas = ["Content", "Leads", "Decisions", "Operations"];

  return (
    <section id="services" className="py-40 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-block border-4 border-[#00FF41]/30 px-10 py-4 rounded-2xl mb-12">
            <span className="text-[#008F24] font-black uppercase tracking-[0.3em] text-lg">FRICTION REMOVAL</span>
          </div>
          <h2 className="text-7xl md:text-[110px] font-black text-slate-900 mb-16 tracking-tighter leading-none">
            We remove friction from:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-32">
          {areas.map((area, i) => (
            <div 
              key={i} 
              className="bg-[#F8FAFF] border-2 border-slate-100 py-24 px-16 rounded-[120px] text-center shadow-sm hover:shadow-xl transition-all flex items-center justify-center group"
            >
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 transition-colors">
                {area}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-40">
          <p className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-tight">
            So your effort <br className="md:hidden" />
            <span className="inline-block bg-[#00FF41] px-8 py-3 rounded-[32px] mt-4 md:mt-0">compounds.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;