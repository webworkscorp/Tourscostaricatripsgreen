import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import { TRANSLATIONS, CONTACT_DATA } from './constants.tsx';
import { 
  Users, PlaneLanding,
  TreePalm, MapPin, ShieldCheck, Heart, Sparkles, Languages,
  Send, Compass, Instagram, Facebook, Mail, Phone,
  CheckCircle2, XCircle, Star, Coins, Waves, Gem,
  User, MessageSquare
} from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [bookingData, setBookingData] = useState({
    nombre: '',
    descripcion: ''
  });

  const t = TRANSLATIONS[lang];

  // Mapeo de imágenes para cada sección de tours
  const categoryImages: Record<string, string> = {
    "🌴 Naturaleza y Vida Silvestre": "https://i.imgur.com/u21wjKV.jpeg",
    "🌴 Nature & Wildlife": "https://i.imgur.com/u21wjKV.jpeg",
    "🐎 Cultura y Tradición": "https://i.imgur.com/RmKagdC.jpeg",
    "🐎 Culture & Tradition": "https://i.imgur.com/RmKagdC.jpeg",
    "🌋 Aventura": "https://i.imgur.com/GJgSLlH.jpeg",
    "🌋 Adventure": "https://i.imgur.com/GJgSLlH.jpeg",
    "🌊 Actividades Acuáticas": "https://i.imgur.com/mKRUjI0.jpeg",
    "🌊 Water Activities": "https://i.imgur.com/mKRUjI0.jpeg",
    "🐢 Experiencias Especiales": "https://i.imgur.com/KkCejyV.jpeg",
    "🐢 Special Experiences": "https://i.imgur.com/KkCejyV.jpeg"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const toggleCategory = (idx: number) => {
    setExpandedCategory(expandedCategory === idx ? null : idx);
  };

  const handleWhatsAppConsult = (e: React.FormEvent) => {
    e.preventDefault();
    const prefix = lang === 'es' ? 'Hola, mi nombre es' : 'Hi, my name is';
    const mid = lang === 'es' ? 'Me gustaría consultar sobre:' : 'I would like to inquire about:';
    const message = encodeURIComponent(`${prefix} ${bookingData.nombre}. ${mid} ${bookingData.descripcion}`);
    window.open(`https://wa.me/${CONTACT_DATA.whatsapp}?text=${message}`, '_blank');
  };

  const tripAdvisorUrl = "https://www.tripadvisor.com.mx/Attraction_Review-g309284-d14003730-Reviews-Corcovado_Guia_CR-Puerto_Jimenez_Osa_Peninsula_Province_of_Puntarenas.html";

  return (
    <div className="relative w-full overflow-hidden bg-[#fcfaf7]">
      
      {/* --- BOTÓN FLOTANTE DE IDIOMA (TRADUCTOR) --- */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3 group">
        <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100 mb-2">
          <div className="bg-[#031510]/90 backdrop-blur-xl border border-white/10 p-2 flex flex-col gap-1 shadow-2xl">
            <button 
              onClick={() => setLang('es')}
              className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-colors ${lang === 'es' ? 'bg-emerald-600 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              Español
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-colors ${lang === 'en' ? 'bg-emerald-600 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              English
            </button>
          </div>
        </div>
        <button 
          title={lang === 'es' ? 'Traducir página' : 'Translate page'}
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(5,150,105,0.3)] transition-all hover:scale-110 active:scale-95 border border-emerald-400/20"
        >
          <Languages size={24} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[8px] items-center justify-center font-bold">{lang.toUpperCase()}</span>
          </span>
        </button>
      </div>

      {/* --- INTRO CINEMÁTICA PREMIUM --- */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#031510] flex flex-col items-center justify-center transition-transform duration-[1500ms] cubic-bezier(0.76, 0, 0.24, 1) ${!loading ? '-translate-y-full pointer-events-none' : 'translate-y-0'}`}
      >
        <div className="relative flex flex-col items-center">
          <div className="relative h-96 w-96 md:h-[750px] md:w-[750px] mb-8">
            <img 
              src="https://i.imgur.com/FeYxMOj.png" 
              alt="Trips Green Logo" 
              className={`h-full w-full object-contain transition-all duration-[2000ms] ${loading ? 'scale-110 opacity-100' : 'scale-90 opacity-0'}`} 
            />
          </div>
          <h1 className={`text-white text-3xl font-black uppercase tracking-[0.5em] transition-all duration-[1000ms] delay-300 ${loading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Trips Green
          </h1>
          <div className={`mt-4 h-[1px] bg-emerald-500 transition-all duration-[1500ms] delay-500 ${loading ? 'w-24' : 'w-0'}`}></div>
          <span className={`text-emerald-500 mono text-xs mt-4 font-bold uppercase tracking-[0.4em] transition-all duration-[1000ms] delay-700 ${loading ? 'opacity-100' : 'opacity-0'}`}>
            Costa Rica
          </span>
        </div>
      </div>

      <Navbar lang={lang} />

      <div className="bg-[#031510] relative">
        <section id="inicio" className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.imgur.com/GfncniS.jpeg" 
              alt="Costa Rica" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#031510] via-transparent to-transparent z-20 h-full"></div>
          </div>

          <div className="container mx-auto px-6 relative z-30 text-white">
            <div className={`max-w-3xl transition-all duration-1000 delay-1000 ${!loading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6 uppercase select-none">
                Costa Rica <br/> 
                <span className="serif italic font-normal text-emerald-300 normal-case block mt-1 text-3xl md:text-5xl">{t.hero.puraVida}</span>
              </h1>

              <div className="max-w-md">
                <div className="flex items-stretch gap-4">
                  <div className="w-[1.5px] bg-emerald-500/60 rounded-full"></div>
                  <div className="flex flex-col py-0.5">
                    <span className="mono text-[9px] uppercase tracking-[0.2em] text-emerald-400 font-bold mb-2 block">{t.hero.subtitle}</span>
                    <p className="text-xs md:text-sm text-white/70 font-medium leading-relaxed tracking-tight">
                      {t.hero.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-nosotros" className="relative overflow-hidden text-white pt-10 pb-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.imgur.com/lWXGgYK.jpeg" 
              alt="Background" 
              className="w-full h-full object-cover opacity-45 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#031510] via-emerald-950/75 to-[#031510]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative max-w-sm mx-auto lg:ml-0">
                <div className="aspect-[4/5] bg-white/5 backdrop-blur-sm relative z-10 overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://i.imgur.com/XQmOA4y.jpeg" 
                    alt="Ulises Guide"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 z-20">
                  <div className="relative p-6 bg-[#031510]/95 backdrop-blur-3xl border border-white/10">
                    <div className="relative z-10 text-center lg:text-left">
                      <span className="serif text-5xl block italic mb-1 text-emerald-400 font-bold leading-none">10+</span>
                      <div className="flex items-center gap-3 justify-center lg:justify-start">
                        <div className="w-6 h-[1px] bg-emerald-500"></div>
                        <span className="mono text-[9px] font-black uppercase tracking-[0.3em] text-white/90 leading-tight">
                          {t.about.years.split(' ').join(' \n')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="max-w-lg mt-12 lg:mt-0">
                <span className="mono text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em] mb-4 block">{t.about.tag}</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-white">
                  {t.about.title} <br/><span className="serif italic font-normal normal-case text-emerald-300">Trips Green.</span>
                </h2>
                <div className="space-y-6 text-base text-white/70 leading-relaxed font-medium">
                  <p className="text-xl md:text-2xl text-white font-semibold leading-snug">
                    {t.about.p1}
                  </p>
                  <p className="text-white/60">
                    {t.about.p2}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-white/5">
                  <div className="flex gap-3 items-center">
                    <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="font-black text-white text-[10px] uppercase tracking-widest leading-none">{t.about.security}</h4>
                      <p className="text-[9px] text-white/40 mt-1 uppercase font-bold tracking-tighter">{t.about.securityTag}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Languages size={20} className="text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="font-black text-white text-[10px] uppercase tracking-widest leading-none">{t.about.attention}</h4>
                      <p className="text-[9px] text-white/40 mt-1 uppercase font-bold tracking-tighter">{t.about.attentionTag}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 pt-20 border-t border-white/5">
              <div className="max-w-4xl mx-auto text-center">
                <span className="mono text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em] mb-4 block">{t.mission.tag}</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-[0.9] text-white">
                  {t.mission.title} <br/><span className="serif italic font-normal normal-case text-emerald-300">Trips Green.</span>
                </h2>
                <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                  <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                    {t.mission.content}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-16">
              <div className="max-w-4xl mx-auto text-center">
                <span className="mono text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em] mb-4 block">{t.vision.tag}</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-[0.9] text-white">
                  {t.vision.title} <br/><span className="serif italic font-normal normal-case text-emerald-300">Trips Green.</span>
                </h2>
                <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500"></div>
                  <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                    {t.vision.content}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="py-24 bg-[#031510] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="mono text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em] mb-4 block">{t.values.tag}</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-[0.9] text-white">
                {t.values.title} <br/><span className="serif italic font-normal normal-case text-emerald-300">Trips Green.</span>
              </h2>
              <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 text-left">
                  {[t.values.v1, t.values.v2, t.values.v3, t.values.v4, t.values.v5, t.values.v6].map((val, idx) => (
                    <p key={idx} className="text-lg md:text-xl text-white/90 font-medium leading-relaxed border-l-2 border-emerald-500/20 pl-6">
                      {val}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#031510] text-white relative border-t border-white/5">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="mono text-[9px] text-emerald-400 font-bold uppercase tracking-[0.4em] mb-3 block">{t.trust.tag}</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 text-white/90">{t.trust.title} <span className="serif italic font-normal text-emerald-400 normal-case">{t.trust.official}</span></h2>
            <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
              <a href={tripAdvisorUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 backdrop-blur-xl border border-white/5 transition-lux hover:scale-105 hover:border-emerald-500/50 block">
                <img src="https://i.imgur.com/IGgziMu.png" alt="ICT" className="h-32" />
              </a>
              <a href={tripAdvisorUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 backdrop-blur-xl border border-white/10 transition-lux hover:scale-105 hover:border-emerald-500/50 block">
                <img src="https://i.imgur.com/IxRHxGQ.jpeg" alt="TripAdvisor" className="h-32" />
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#031510] to-[#022c22] pt-20 pb-16">
          <div className="absolute inset-0 z-0">
            <img src="https://i.imgur.com/BvLb1Oc.jpeg" alt="Background" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#031510] via-transparent to-[#022c22]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="mono text-[10px] text-emerald-400 font-black uppercase tracking-[0.5em] mb-6 block">{t.audience.tag}</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white">{t.audience.title} <br/><span className="serif italic font-normal text-emerald-300 normal-case">{t.audience.visitor}</span></h2>
              <p className="text-emerald-100/60 text-base font-medium leading-relaxed max-w-xl mx-auto mb-10">
                {t.audience.description}
              </p>
              <div className="w-20 h-[1.5px] bg-emerald-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-24">
              {Object.entries(t.audience.items).map(([key, item], idx) => {
                const imgMapping: Record<string, {main: string, hover: string}> = {
                  ninos: { main: "https://i.imgur.com/INaH7FK.jpeg", hover: "https://i.imgur.com/5zFzSca.jpeg" },
                  familias: { main: "https://i.imgur.com/tW1IUl7.jpeg", hover: "https://i.imgur.com/tW1IUl7.jpeg" },
                  jovenes: { main: "https://i.imgur.com/9nDGkbT.jpeg", hover: "https://i.imgur.com/1QN82Aq.jpeg" },
                  adultosMayores: { main: "https://i.imgur.com/9F3HpYG.jpeg", hover: "https://i.imgur.com/SlCeYPq.jpeg" },
                  parejas: { main: "https://i.imgur.com/mfqTzNH.jpeg", hover: "https://i.imgur.com/A74xsVp.jpeg" },
                  instituciones: { main: "https://i.imgur.com/vscYHtd.jpeg", hover: "https://i.imgur.com/HqQNL34.jpeg" },
                  grupos: { main: "https://i.imgur.com/2g3sBOj.jpeg", hover: "https://i.imgur.com/WUhM31z.jpeg" },
                  internacionales: { main: "https://i.imgur.com/OYUbW0i.jpeg", hover: "https://i.imgur.com/OYUbW0i.jpeg" }
                };

                const images = imgMapping[key];
                const caption = t.audience.captions[key as keyof typeof t.audience.captions] || t.audience.captions.default;

                return (
                  <div key={idx} className={`group relative ${images ? 'p-0 overflow-hidden min-h-[350px]' : 'p-10'} bg-[#022c22]/10 backdrop-blur-sm transition-colors hover:bg-emerald-600/10 flex flex-col`}>
                    {images && (
                      <div className="absolute inset-0 z-0 overflow-hidden group-hover:scale-105 transition-transform duration-1000">
                         <img src={images.main} alt={item} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100 group-hover:opacity-0" />
                         <img src={images.hover} alt={item} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0 group-hover:opacity-100" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                      </div>
                    )}
                    
                    <div className={`flex flex-col h-full justify-between relative z-20 ${images ? 'p-10' : ''}`}>
                      <div className={`mb-8 ${images ? 'opacity-100 drop-shadow-lg' : 'opacity-30'} group-hover:opacity-100 transition-lux text-emerald-400`}>
                        {idx % 3 === 0 ? <Heart size={28} /> : idx % 2 === 0 ? <Users size={28} /> : <Sparkles size={28} />}
                      </div>
                      <div className={images ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : ''}>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{item}</h3>
                        <p className={`text-[9px] uppercase font-bold tracking-[0.15em] ${images ? 'text-emerald-300' : 'text-emerald-50/30'}`}>
                          {caption}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-30"></div>
                  </div>
                );
              })}
            </div>

            <div className="relative flex flex-col lg:flex-row items-end pb-0 mt-12">
              <div className="w-full lg:w-1/2 relative z-20 group -mb-4">
                 <div className="relative transform lg:-ml-12 lg:-mt-48">
                    <img src="https://i.imgur.com/5Lq996X.png" alt="Biodiversity" className="w-full h-auto object-contain max-h-[850px]" style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.8))' }} />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#022c22] via-[#022c22]/40 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-[#022c22]"></div>
                 </div>
              </div>

              <div className="w-full lg:w-1/2 lg:-ml-20 pb-16 lg:pb-32 relative z-30">
                 <div className="relative p-8 lg:p-14 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl">
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="w-8 h-[1.5px] bg-emerald-500"></div>
                         <span className="mono text-[10px] font-black uppercase tracking-[0.5em] text-emerald-400">{t.biodiversity.tag}</span>
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.8] text-white">
                        {t.biodiversity.title} <br/><span className="serif italic font-normal text-emerald-300 normal-case">{t.biodiversity.life}</span>
                      </h3>
                      <div className="space-y-6 text-emerald-50/80 text-lg font-medium leading-relaxed">
                        <p className="border-l-3 border-emerald-500/60 pl-6 italic serif text-xl text-emerald-50">
                          {t.biodiversity.quote}
                        </p>
                        <div className="grid gap-4 mt-6">
                          {[t.biodiversity.fact1, t.biodiversity.fact2, t.biodiversity.fact3, t.biodiversity.fact4].map((fact, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                              <p className="text-sm font-bold uppercase tracking-[0.1em] text-emerald-200/70">{fact}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-24 bg-[#031510] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/uCj4TS2.jpeg" alt="Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031510] via-transparent to-[#031510]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="mono text-[10px] text-emerald-400 font-black uppercase tracking-[0.5em] mb-8 block">{t.services.tag}</span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 text-white leading-none">{t.services.title} <br/><span className="serif italic font-normal text-emerald-300 normal-case">{t.services.offer}</span></h3>
              <div className="space-y-6">
                {t.services.items.map((service, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-lg font-black text-white uppercase tracking-tight">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl p-10 border border-white/10 group hover:bg-emerald-600/10 transition-colors duration-500">
                <PlaneLanding size={32} className="text-emerald-400 mb-8" />
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">{t.services.arrival}</h4>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">{t.services.arrivalDesc}</p>
              </div>
              <div className="bg-emerald-950/40 backdrop-blur-xl p-10 border border-emerald-500/20 group hover:bg-emerald-600/20 transition-colors duration-500">
                <MapPin size={32} className="text-emerald-300 mb-8" />
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">{t.services.mobility}</h4>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">{t.services.mobilityDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expediciones" className="py-32 relative overflow-hidden bg-[#031510]">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://i.imgur.com/IbUKzTv.jpeg" alt="Nature" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="mono text-[11px] text-emerald-400 font-black uppercase tracking-[0.6em] mb-6 block">{t.tours.tag}</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">{t.tours.title} <br/><span className="serif italic font-normal text-emerald-300 normal-case text-4xl md:text-7xl">{t.tours.paradise}</span></h2>
          </div>
          
          <div className="space-y-24 max-w-6xl mx-auto">
            {t.tours.categories.map((cat, idx) => {
              const isOpen = expandedCategory === idx;
              const mainImg = categoryImages[cat.category];
              
              return (
                <div key={idx} className={`relative group overflow-hidden border border-white/5 bg-white/[0.02] transition-all duration-1000 ${isOpen ? 'ring-1 ring-emerald-500/30 shadow-[0_50px_100px_rgba(0,0,0,0.8)]' : 'hover:border-white/10'}`}>
                  <div onClick={() => toggleCategory(idx)} className={`relative w-full cursor-pointer overflow-hidden transition-all duration-1000 ${isOpen ? 'h-[60vh]' : 'h-[40vh] hover:h-[45vh]'}`}>
                    <img src={mainImg} alt={cat.category} className={`w-full h-full object-cover transition-all duration-[8s] ${isOpen ? 'scale-110 blur-[2px] opacity-40' : 'scale-100 group-hover:scale-105 opacity-60'}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031510] via-transparent to-[#031510]/60 opacity-90 transition-opacity"></div>
                    <div className="absolute inset-0 bg-emerald-950/10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                      <h3 className={`text-4xl md:text-7xl font-black uppercase tracking-tighter text-white transition-all duration-1000 ${isOpen ? '-translate-y-8 scale-90' : 'translate-y-0 scale-100'}`}>
                        {cat.category.split(' ').slice(1).join(' ')}
                      </h3>
                      {!isOpen && (
                        <div className="mt-8 flex flex-col items-center gap-4 transition-all opacity-0 group-hover:opacity-100">
                          <span className="mono text-[9px] font-bold uppercase tracking-[0.4em] text-white/40">{t.tours.explore}</span>
                          <div className="w-10 h-[1px] bg-emerald-500/50 animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] overflow-hidden ${isOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-10 md:p-20 bg-[#031510]/40 backdrop-blur-xl">
                      <div className="grid md:grid-cols-12 gap-16 items-center">
                        <div className="md:col-span-12">
                          <ul className="space-y-8">
                            {cat.items.map((item, i) => (
                              <li key={i} className="flex gap-6 items-center group/item transition-all">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                <span className="text-white/80 text-base md:text-xl font-bold uppercase tracking-tight group-hover/item:text-white transition-colors">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: PLANES DE VIAJE --- */}
      <section className="py-24 bg-[#031510] text-white relative border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="mono text-[10px] text-emerald-400 font-black uppercase tracking-[0.5em] mb-6 block">{t.plans.tag}</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white">
              {t.plans.title} <br/><span className="serif italic font-normal text-emerald-300 normal-case">{t.plans.cr}</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto italic">
              "{t.plans.subtitle}"
            </p>
            <div className="w-24 h-[1px] bg-emerald-500/30 mx-auto mt-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Plan Económico */}
            <div className="bg-white/5 border border-white/10 p-8 flex flex-col h-full group hover:bg-emerald-950/20 transition-all duration-500 relative overflow-hidden">
               <div className="mb-8 flex justify-between items-start">
                 <Coins className="text-emerald-400" size={32} />
               </div>
               <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{t.plans.economic.name}</h3>
               <div className="mb-8 flex flex-col">
                  <span className="mono text-[10px] font-bold uppercase text-white/30 tracking-widest">{t.plans.labels.from}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-emerald-400">${t.plans.economic.price}</span>
                    <span className="mono text-[10px] font-black uppercase text-emerald-300/90 tracking-widest drop-shadow-[0_0_8px_rgba(110,231,183,0.3)]">USD {t.plans.labels.perPerson}</span>
                  </div>
               </div>
               <p className="text-white/50 text-xs mb-8 leading-relaxed font-bold uppercase tracking-tight">{t.plans.economic.desc}</p>
               <div className="space-y-4 mb-8 flex-grow">
                 {t.plans.economic.includes.map((item, idx) => (
                   <div key={idx} className="flex gap-3 items-start">
                     <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                     <span className="text-[11px] text-white/70 font-bold uppercase leading-tight tracking-tight">{item}</span>
                   </div>
                 ))}
                 <div className="flex gap-3 items-start">
                   <XCircle size={14} className="text-red-500/50 shrink-0 mt-0.5" />
                   <span className="text-[11px] text-white/30 font-bold uppercase leading-tight tracking-tight italic">{t.plans.economic.notIncludes}</span>
                 </div>
               </div>
               <p className="text-[9px] text-emerald-400/60 font-black uppercase tracking-widest border-t border-white/5 pt-4">
                 {t.plans.economic.optionalTours}
               </p>
            </div>

            {/* Plan Regular */}
            <div className="bg-emerald-950/20 border border-emerald-500/20 p-8 flex flex-col h-full relative group hover:bg-emerald-900/30 transition-all duration-500 overflow-hidden">
               <div className="absolute top-0 right-0 p-3">
                 <Star className="text-emerald-400 fill-emerald-400" size={12} />
               </div>
               <div className="mb-8 flex justify-between items-start">
                 <Waves className="text-emerald-400" size={32} />
               </div>
               <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{t.plans.regular.name}</h3>
               <div className="mb-8 flex flex-col">
                  <span className="mono text-[10px] font-bold uppercase text-white/30 tracking-widest">{t.plans.labels.from}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-emerald-400">${t.plans.regular.price}</span>
                    <span className="mono text-[10px] font-black uppercase text-emerald-300/90 tracking-widest drop-shadow-[0_0_8px_rgba(110,231,183,0.3)]">USD {t.plans.labels.perPerson}</span>
                  </div>
               </div>
               <p className="text-white/50 text-xs mb-8 leading-relaxed font-bold uppercase tracking-tight">{t.plans.regular.desc}</p>
               <div className="space-y-4 mb-8 flex-grow">
                 {t.plans.regular.includes.map((item, idx) => (
                   <div key={idx} className="flex gap-3 items-start">
                     <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                     <span className="text-[11px] text-white/70 font-bold uppercase leading-tight tracking-tight">{item}</span>
                   </div>
                 ))}
                 <div className="flex gap-3 items-start">
                   <XCircle size={14} className="text-red-500/50 shrink-0 mt-0.5" />
                   <span className="text-[11px] text-white/30 font-bold uppercase leading-tight tracking-tight italic">{t.plans.regular.notIncludes}</span>
                 </div>
               </div>
               <p className="text-[9px] text-emerald-400/60 font-black uppercase tracking-widest border-t border-white/5 pt-4">
                 {t.plans.regular.optionalTours}
               </p>
            </div>

            {/* Plan Premium */}
            <div className="bg-white/10 border border-white/30 p-8 flex flex-col h-full relative group hover:bg-white/15 transition-all duration-500 overflow-hidden">
               <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-emerald-600 px-4 py-1 text-[8px] font-black uppercase tracking-[0.3em] shadow-lg">Premium</div>
               <div className="mb-8 flex justify-between items-start mt-2">
                 <Gem className="text-emerald-400" size={32} />
               </div>
               <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{t.plans.premium.name}</h3>
               <div className="mb-8 flex flex-col">
                  <span className="mono text-[10px] font-bold uppercase text-white/30 tracking-widest">{t.plans.labels.from}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-emerald-400">${t.plans.premium.price}</span>
                    <span className="mono text-[10px] font-black uppercase text-emerald-300/90 tracking-widest drop-shadow-[0_0_8px_rgba(110,231,183,0.3)]">USD {t.plans.labels.perPerson}</span>
                  </div>
               </div>
               <p className="text-white/60 text-xs mb-8 leading-relaxed font-bold uppercase tracking-tight">{t.plans.premium.desc}</p>
               <div className="space-y-4 mb-8 flex-grow">
                 {t.plans.premium.includes.map((item, idx) => (
                   <div key={idx} className="flex gap-3 items-start">
                     <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                     <span className="text-[11px] text-white/90 font-black uppercase leading-tight tracking-tight">{item}</span>
                   </div>
                 ))}
               </div>
               <div className="h-px w-full bg-emerald-500/20"></div>
            </div>

            {/* Plan Familiar */}
            <div className="bg-white/5 border border-white/10 p-8 flex flex-col h-full group hover:bg-emerald-950/20 transition-all duration-500 relative overflow-hidden">
               <div className="mb-8 flex justify-between items-start">
                 <Users className="text-emerald-400" size={32} />
               </div>
               <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{t.plans.family.name}</h3>
               <div className="mb-8 flex flex-col">
                  <span className="mono text-[10px] font-bold uppercase text-white/50 tracking-widest">{t.plans.labels.inquiry}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-emerald-400">{t.plans.family.price}</span>
                  </div>
               </div>
               <p className="text-white/50 text-xs mb-8 leading-relaxed font-bold uppercase tracking-tight">{t.plans.family.desc}</p>
               <div className="space-y-6 mb-8 flex-grow">
                 {t.plans.family.options.map((item, idx) => (
                   <div key={idx} className="flex gap-3 items-center border-b border-white/5 pb-4 last:border-0">
                     <span className="text-xs text-white/80 font-bold uppercase tracking-tight leading-tight">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-10 bg-emerald-950/20 border-l-4 border-emerald-500 text-center">
             <p className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4">{t.plans.yourWay}</p>
             <p className="text-white/60 text-sm font-bold uppercase tracking-widest">{t.plans.closing}</p>
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#031510]">
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/YybB6XY.jpeg" alt="Cover" className="w-full h-full object-cover opacity-70 animate-pulse-slow scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031510] via-transparent to-[#031510] z-10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
           <div className="max-w-4xl stagger-in">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-[2px] bg-emerald-500"></div>
                 <span className="mono text-[12px] text-emerald-400 font-black uppercase tracking-[0.8em]">{t.final.tag}</span>
              </div>
              <h2 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter text-white mb-10 leading-[0.8]">
                {t.final.title} <br/><span className="serif italic font-normal text-emerald-300 normal-case">{t.final.happiness}</span>
              </h2>
              <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed mb-16 border-l-4 border-emerald-500/50 pl-8 italic serif">
                {t.final.quote}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                 <div className="group cursor-default">
                    <Compass className="text-emerald-400 mb-4 transition-transform group-hover:rotate-45 duration-500" size={32} />
                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-2">{t.final.exploration}</h4>
                    <p className="text-white/40 text-[9px] font-bold uppercase tracking-tighter">{t.final.explorationTag}</p>
                 </div>
                 <div className="group cursor-default">
                    <TreePalm className="text-emerald-400 mb-4 transition-transform group-hover:scale-110 duration-500" size={32} />
                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-2">{t.final.nature}</h4>
                    <p className="text-white/40 text-[9px] font-bold uppercase tracking-tighter">{t.final.natureTag}</p>
                 </div>
                 <div className="group cursor-default">
                    <ShieldCheck className="text-emerald-400 mb-4 transition-transform group-hover:scale-110 duration-500" size={32} />
                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-2">{t.final.excellence}</h4>
                    <p className="text-white/40 text-[9px] font-bold uppercase tracking-tighter">{t.final.excellenceTag}</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section id="agendar" className="py-24 bg-[#031510] relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="mono text-[10px] text-emerald-400 font-bold uppercase tracking-[0.4em] mb-4 block">{t.agenda.tag}</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              {t.agenda.title} <span className="serif italic font-normal text-emerald-300 normal-case">{t.agenda.consult}</span>
            </h2>
          </div>

          <div className="max-w-xl mx-auto">
            <form onSubmit={handleWhatsAppConsult} className="space-y-10 bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm shadow-2xl relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              
              {/* CAMPO NOMBRE MEJORADO */}
              <div className="relative group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2 group-focus-within:text-white transition-colors duration-300">{t.agenda.name}</label>
                <div className="relative">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500/50 group-focus-within:text-emerald-400 transition-colors duration-300">
                    <User size={24} />
                  </div>
                  <input 
                    required 
                    type="text" 
                    placeholder={t.agenda.namePlaceholder}
                    className="w-full bg-white/[0.03] border border-white/10 pl-20 pr-6 py-6 text-2xl text-white placeholder:text-emerald-200/50 placeholder:italic focus:outline-none focus:bg-white/[0.08] focus:border-emerald-400 transition-all duration-300 rounded-none shadow-inner"
                    value={bookingData.nombre} 
                    onChange={(e) => setBookingData({...bookingData, nombre: e.target.value})}
                  />
                </div>
              </div>

              {/* CAMPO DESCRIPCIÓN MEJORADO */}
              <div className="relative group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2 group-focus-within:text-white transition-colors duration-300">{t.agenda.desc}</label>
                <div className="relative">
                  <div className="absolute left-6 top-6 text-emerald-500/50 group-focus-within:text-emerald-400 transition-colors duration-300">
                    <MessageSquare size={24} />
                  </div>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder={t.agenda.descPlaceholder}
                    className="w-full bg-white/[0.03] border border-white/10 pl-20 pr-6 py-6 text-2xl text-white placeholder:text-emerald-200/50 placeholder:italic focus:outline-none focus:bg-white/[0.08] focus:border-emerald-400 transition-all duration-300 rounded-none shadow-inner resize-none"
                    value={bookingData.descripcion} 
                    onChange={(e) => setBookingData({...bookingData, descripcion: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-8 pt-6">
                <button type="submit" className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-4 group/btn shadow-[0_10px_30px_rgba(5,150,105,0.2)] hover:shadow-[0_10px_40px_rgba(5,150,105,0.4)] hover:-translate-y-1">
                  {t.agenda.submit} <Send size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <div className="text-center pt-2">
                  <span className="mono text-[9px] text-white/30 uppercase tracking-widest block mb-3">{t.agenda.orWrite}</span>
                  <a href={`mailto:${CONTACT_DATA.email}`} className="text-emerald-400 font-black text-base hover:text-white transition-colors tracking-tight border-b border-emerald-500/30 hover:border-emerald-400 pb-1">
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#031510] pt-24 pb-12 relative z-10 overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-8 mb-16">
            <img src="https://i.imgur.com/lOLoFsO.png" alt="Logo" className="h-16 w-auto brightness-110" />
            <div className="max-w-3xl">
              <p className="text-white/80 text-2xl md:text-3xl leading-relaxed font-medium mb-12 italic serif drop-shadow-md">
                {t.footer.quote}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a href={`https://wa.me/50684039580`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-emerald-400 transition-all p-2 shadow-lg" title="WhatsApp">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="https://www.instagram.com/corcovadoguiacr?igsh=MWFibGwxZDdxZXJ5OQ==" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-emerald-400 transition-all shadow-lg" title="Instagram"><Instagram size={24} /></a>
                <a href="https://www.facebook.com/share/1GD2yP1HUC/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-emerald-400 transition-all shadow-lg" title="Facebook"><Facebook size={24} /></a>
                <a href="https://www.tiktok.com/@corcovadoguiacr?_r=1&_t=ZM-92pIwn7Fgw0" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-emerald-400 transition-all shadow-lg group/tiktok" title="TikTok">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-colors group-hover/tiktok:scale-110"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" /></svg>
                </a>
              </div>
              
              <div className="mt-16 flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
                <a href={`mailto:${CONTACT_DATA.email}`} className="flex items-center gap-3 text-white/40 hover:text-emerald-400 transition-all duration-500 group">
                  <Mail size={16} className="group-hover:scale-110 transition-transform text-emerald-500/50" />
                  <span className="mono text-[11px] font-black uppercase tracking-[0.2em]">{CONTACT_DATA.email}</span>
                </a>
                <a href={`tel:${CONTACT_DATA.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-white/40 hover:text-emerald-400 transition-all duration-500 group">
                  <Phone size={16} className="group-hover:scale-110 transition-transform text-emerald-500/50" />
                  <span className="mono text-[11px] font-black uppercase tracking-[0.2em]">{CONTACT_DATA.phone}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="serif italic text-white/20 text-xl tracking-wide">Pura Vida.</span>
            <span className="mono text-[8px] font-bold uppercase tracking-[0.2em] text-white/10">{t.footer.rights}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;