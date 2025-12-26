import React from 'react';
import { Sparkles, MessageSquare, Zap, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenForm: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenForm }) => {
  const services = [
    {
      title: "Content Alchemy",
      desc: "Turn one 60-minute workshop recording into a month of social posts, newsletters, and clips automatically.",
      icon: <Sparkles size={24} />,
      points: ["Video clipping & captions", "Blog post generation"],
      color: "border-brand-green",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "Guardian Bots",
      desc: "24/7 empathetic support for your community. Our bots are trained on your voice to guide students while you rest.",
      icon: <MessageSquare size={24} />,
      points: ["Course navigation help", "Crisis resource direction"],
      color: "border-blue-400",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Flow Automation",
      desc: "Seamless onboarding for retreats and courses. Handle payments, waivers, and intake forms effortlessly.",
      icon: <Zap size={24} />,
      points: ["Automated email sequences", "CRM integration"],
      color: "border-brand-yellow",
      iconBg: "bg-yellow-50",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Services Tailored for Your Flow</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-semibold">
          Designed for men's coaches, breathwork facilitators, and somatic healers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div key={i} className={`p-14 rounded-[56px] border-2 ${service.color} bg-white soft-shadow flex flex-col h-full hover:scale-[1.02] transition-all duration-500 group cursor-pointer`} onClick={onOpenForm}>
            <div className={`w-16 h-16 ${service.iconBg} ${service.iconColor} rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">{service.title}</h3>
            <p className="text-slate-500 font-medium mb-12 leading-relaxed text-lg">{service.desc}</p>
            <div className="mt-auto space-y-5 mb-10">
              {service.points.map((p, j) => (
                <div key={j} className="flex items-center gap-4 text-sm font-black text-slate-800 uppercase tracking-tight">
                  <Check size={20} className="text-brand-green" />
                  {p}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-slate-950 font-black text-xs uppercase tracking-widest mt-4">
              Explore Solution <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;