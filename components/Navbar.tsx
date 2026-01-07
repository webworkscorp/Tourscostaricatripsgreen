import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants.tsx';

interface NavbarProps {
  lang: 'es' | 'en';
}

const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (id === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset para el header fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#031510]/95 backdrop-blur-md py-3 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#inicio"
          onClick={(e) => scrollToSection(e, 'inicio')}
          className="relative z-50 flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative h-10 w-10 flex items-center justify-center">
            <img 
              src="https://i.imgur.com/lOLoFsO.png" 
              alt="Logo" 
              className={`h-full w-auto object-contain transition-all duration-700 ${scrolled ? 'scale-100' : 'scale-110'}`}
            />
          </div>
          
          <div className="flex flex-col">
            <span className={`text-sm md:text-base font-black tracking-widest uppercase transition-all text-white`}>COSTA RICA TRIPS GREEN</span>
            <span className={`mono text-[8px] uppercase font-bold tracking-tighter transition-all ${scrolled ? 'text-emerald-400' : 'text-emerald-400 opacity-70'}`}>{lang === 'es' ? 'Guía certificado por el ICT' : 'ICT Certified Guide'}</span>
          </div>
        </a>
        
        {/* Menú Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: t.nav.home, id: 'inicio' },
            { name: t.nav.about, id: 'sobre-nosotros' },
            { name: t.nav.expeditions, id: 'expediciones' }
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-all relative group/link ${scrolled ? 'text-white/70 hover:text-emerald-400' : 'text-white/70 hover:text-white'}`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover/link:w-full"></span>
            </a>
          ))}

          <a 
            href={`https://wa.me/50684039580`}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 text-[9px] font-black uppercase tracking-widest transition-all border ${scrolled ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-500 shadow-md hover:scale-105' : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-emerald-950'}`}
          >
            {t.nav.consult}
          </a>
        </div>

        {/* Botón Menú Móvil */}
        <div className="lg:hidden flex items-center gap-4">
          <div 
            className="flex flex-col gap-1.5 cursor-pointer relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-white ml-auto transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </div>

        {/* Overlay Menú Móvil */}
        <div className={`fixed inset-0 bg-[#031510] z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
           <div className="absolute inset-0 bg-[url('https://i.imgur.com/GfncniS.jpeg')] opacity-10 bg-cover bg-center pointer-events-none"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-[#031510] via-transparent to-[#031510] pointer-events-none"></div>
           
           <div className="flex flex-col gap-8 relative z-10 text-center">
              {[
                { name: t.nav.home, id: 'inicio' },
                { name: t.nav.about, id: 'sobre-nosotros' },
                { name: t.nav.expeditions, id: 'expediciones' }
              ].map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-2xl font-black uppercase tracking-widest text-white hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href={`https://wa.me/50684039580`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-4 bg-emerald-600 text-white font-black uppercase tracking-widest text-xs border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-500 transition-all"
              >
                {t.nav.consultWhatsapp}
              </a>
           </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;