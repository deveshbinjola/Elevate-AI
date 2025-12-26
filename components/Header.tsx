import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface HeaderProps {
  onOpenForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center gap-2 group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-[#00FF41] rounded-xl flex items-center justify-center shadow-lg shadow-[#00FF41]/20">
              <Leaf size={22} className="text-slate-900" fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">Elevate AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-base font-extrabold text-[#334155] hover:text-[#00FF41] transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onOpenForm}
              className="bg-[#00FF41] text-slate-900 px-8 py-3 rounded-2xl text-base font-black hover:brightness-105 transition-all shadow-xl shadow-[#00FF41]/30 active:scale-95 border-b-4 border-emerald-600/20"
            >
              Book a Call
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 hover:bg-slate-50 rounded-xl transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-6 space-y-6 shadow-2xl animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-xl font-black text-slate-700 hover:text-[#00FF41]"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button
            className="w-full text-center py-5 bg-[#00FF41] text-slate-900 rounded-2xl font-black text-xl shadow-lg shadow-[#00FF41]/20"
            onClick={() => {
              onOpenForm();
              setIsOpen(false);
            }}
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;