import React from 'react';
import { Settings, Shield, Users } from 'lucide-react';

const Mission: React.FC = () => {
  const cards = [
    {
      title: "Deep Alignment",
      desc: "We understand the nuances of embodiment work. We speak your language—from \"containers\" to \"integration\".",
      icon: <Settings size={22} />,
      color: "text-brand-green",
      bg: "bg-emerald-50"
    },
    {
      title: "Ethical AI",
      desc: "Tools built with integrity and privacy in mind. We prioritize data sovereignty for you and your clients.",
      icon: <Shield size={22} />,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Community First",
      desc: "Systems designed to foster real human connection, automating admin so you can facilitate more.",
      icon: <Users size={22} />,
      color: "text-brand-yellow",
      bg: "bg-yellow-50"
    }
  ];

  return (
    <section id="mission" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <span className="text-brand-green font-extrabold uppercase tracking-widest text-xs mb-4 block">Our Mission</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Bridging Technology & Soul</h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium">
          We believe technology should serve connection, not replace it. We handle the digital heavy lifting so you can focus on the human container.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="p-12 rounded-[48px] border border-slate-100 bg-white soft-shadow hover:translate-y-[-6px] transition-all duration-500 group">
            <div className={`w-14 h-14 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-sm`}>
              {card.icon}
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{card.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;