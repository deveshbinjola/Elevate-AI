import React from 'react';
import { Scale, Wind, Users, Activity, GraduationCap, Mic2, Check } from 'lucide-react';

const ToolsGrid: React.FC = () => {
  const tools = [
    {
      title: "Polarity Post Generator",
      desc: "Create magnetic social media copy that balances masculine and feminine energies.",
      img: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=2070&auto=format&fit=crop",
      icon: <Scale size={18} />,
      benefits: ["Increases engagement by 40%", "Tone-calibrated for authenticity"]
    },
    {
      title: "Breathwork Sequence Architect",
      desc: "AI-assisted design of 60-minute breathwork journeys based on desired emotional outcomes.",
      img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2050&auto=format&fit=crop",
      icon: <Wind size={18} />,
      benefits: ["Syncs with Spotify playlists", "Scientific physiological mapping"]
    },
    {
      title: "Men's Circle Facilitator Bot",
      desc: "Generate prompts, container-setting scripts, and integration exercises for powerful weekly circles.",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      icon: <Users size={18} />,
      benefits: ["Over 500+ archetype themes", "Trauma-informed suggestions"]
    },
    {
      title: "Somatic Client Tracker",
      desc: "Track client progress not just by metrics, but by feeling. Log somatic markers instantly.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      icon: <Activity size={18} />,
      benefits: ["Pattern recognition", "Automated check-ins"]
    },
    {
      title: "Course Curriculum Designer",
      desc: "Turn your scattered notes into a structured 8-week online course with optimal flow.",
      img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      icon: <GraduationCap size={18} />,
      benefits: ["Includes worksheet templates", "Video script generation"]
    },
    {
      title: "Guided Meditation Voice",
      desc: "Generate soothing meditations in your own voice clone or select from our library.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      icon: <Mic2 size={18} />,
      benefits: ["Ultra-realistic voice cloning", "Background music mixing"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-50/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map((tool, i) => (
          <div key={i} className="bg-white rounded-[40px] overflow-hidden soft-shadow hover:shadow-2xl transition-all duration-700 border border-slate-100 flex flex-col group">
            <div className="h-60 relative overflow-hidden">
              <img src={tool.img} alt={tool.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-900 shadow-xl">
                {tool.icon}
              </div>
            </div>
            <div className="p-10 flex-grow">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{tool.title}</h3>
              <p className="text-slate-500 font-medium mb-10 text-sm leading-relaxed">{tool.desc}</p>
              <div className="space-y-4">
                {tool.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-center gap-3 text-xs font-extrabold text-slate-800">
                    <Check size={18} className="text-brand-green" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsGrid;