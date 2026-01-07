import React, { useState } from 'react';
import { getTourRecommendation } from '../services/geminiService';
import { Send, Zap, Sparkles, Map } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface AIAssistantProps {
  lang: 'es' | 'en';
}

const AIAssistant: React.FC<AIAssistantProps> = ({ lang }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const result = await getTourRecommendation(input, lang);
    setResponse(result || null);
    setLoading(false);
  };

  const labels = {
    es: {
      query: "Consulta",
      help: "Ayuda al Viajero",
      online: "En línea",
      label: "¿Qué tipo de recorrido busca?",
      placeholder: "Ej: Caminatas o volcanes...",
      ask: "Consultar",
      suggestion: "Sugerencia de Ulises",
      localResponse: "Respuesta Local",
      whatsapp: "Hola Ulises, me interesa: "
    },
    en: {
      query: "Inquiry",
      help: "Traveler Help",
      online: "Online",
      label: "What kind of tour are you looking for?",
      placeholder: "Ex: Hiking or volcanoes...",
      ask: "Inquire",
      suggestion: "Ulises' Suggestion",
      localResponse: "Local Response",
      whatsapp: "Hi Ulises, I'm interested in: "
    }
  }[lang];

  return (
    <div className="bg-white/5 border border-white/10 p-8 md:p-12 shadow-xl relative overflow-hidden group w-full bg-[#031510]">
      <div className="relative z-10 text-white">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center rounded-sm">
              <Sparkles size={14} className="text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">{labels.query}</span>
              <span className="mono text-[8px] font-bold text-white/20 uppercase tracking-widest">{labels.help}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="mono text-[8px] font-bold uppercase tracking-widest text-white/30">{labels.online}</span>
          </div>
        </div>
        
        <form onSubmit={handleAsk} className="space-y-10">
          <div className="relative">
            <label className="block mono text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 mb-4">{labels.label}</label>
            <div className="relative group">
              <textarea 
                rows={2}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={labels.placeholder}
                className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:outline-none focus:border-emerald-400 text-lg font-medium placeholder:text-white/5 transition-all resize-none text-white"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-0 bottom-3 text-emerald-400 hover:text-white transition-all disabled:opacity-20 flex items-center gap-2"
              >
                <span className="mono text-[8px] font-bold uppercase tracking-widest hidden md:inline">{labels.ask}</span>
                {loading ? <Zap className="animate-pulse" size={20} /> : <Send size={20} />}
              </button>
            </div>
          </div>
        </form>

        {response && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="p-8 bg-black/40 border border-white/5 relative">
              <div className="absolute -top-3 -left-3 bg-emerald-600 text-white mono text-[9px] px-3 py-1 uppercase font-bold tracking-[0.15em]">{labels.suggestion}</div>
              <p className="serif text-lg leading-relaxed text-emerald-50/90 italic">
                "{response}"
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                 <div className="flex items-center gap-2">
                   <Map size={12} className="text-emerald-400" />
                   <span className="mono text-[8px] font-bold uppercase text-white/20 tracking-widest">{labels.localResponse}</span>
                 </div>
                 <a 
                   href={`https://wa.me/50684039580?text=${encodeURIComponent(labels.whatsapp + input)}`} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-[9px] font-black uppercase text-emerald-400 hover:text-white tracking-widest transition-colors flex items-center gap-2 group-link"
                 >
                   WhatsApp <Send size={10} className="group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-16 pt-6 border-t border-white/5 flex justify-between items-center opacity-10 mono text-[8px] font-bold uppercase tracking-[0.15em] text-white">
          <span>Costa Rica Trips Green</span>
          <span>{lang === 'es' ? 'Guía Local Certificado' : 'Certified Local Guide'}</span>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;