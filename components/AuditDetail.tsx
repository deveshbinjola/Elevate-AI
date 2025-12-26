import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AuditDetailProps {
  onOpenForm: () => void;
}

const AuditDetail: React.FC<AuditDetailProps> = ({ onOpenForm }) => {
  return (
    <section id="audit" className="py-32 px-6">
      <div className="max-w-7xl mx-auto bg-slate-950 rounded-[64px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        <div className="p-12 md:p-24 lg:w-3/5 text-white">
          <span className="text-[#00FF41] font-black uppercase tracking-[0.2em] text-xs mb-8 block">Step One</span>
          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-none">The Systems Audit</h2>
          
          <p className="text-xl text-slate-400 mb-16 leading-relaxed font-bold">
            Before we build, we observe. We map every touchpoint in your business to find the high-leverage points for AI integration.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-10 mb-16">
            <ul className="space-y-6">
              <li className="flex items-center gap-4 font-black tracking-tight">
                <CheckCircle2 size={24} className="text-[#00FF41]" />
                Workflow Mapping
              </li>
              <li className="flex items-center gap-4 font-black tracking-tight">
                <CheckCircle2 size={24} className="text-[#00FF41]" />
                Toolstack Review
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 font-black tracking-tight">
                <CheckCircle2 size={24} className="text-[#00FF41]" />
                Bottleneck ID
              </li>
              <li className="flex items-center gap-4 font-black tracking-tight">
                <CheckCircle2 size={24} className="text-[#00FF41]" />
                AI Roadmap
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:w-2/5 bg-white p-12 md:p-24 flex flex-col justify-center">
          <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">Get Clarity.</h3>
          <p className="text-slate-500 mb-12 font-bold leading-relaxed text-lg">
            A comprehensive diagnostic of your current operations and a blueprint for your future infrastructure.
          </p>
          <button 
            onClick={onOpenForm}
            className="inline-flex items-center justify-center gap-3 px-10 py-6 bg-[#00FF41] text-slate-900 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-[#00FF41]/20 active:scale-95"
          >
            Book Your Audit
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuditDetail;