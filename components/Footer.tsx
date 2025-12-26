import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-slate-500 text-xs font-black tracking-[0.2em] uppercase">
          &copy; {currentYear} ELEVATE AI AGENCY.
        </div>
        
        <div className="flex gap-12 text-xs font-black text-slate-400 tracking-[0.2em] uppercase">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;