import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Crosshair, 
  Eye, 
  Layers, 
  PlayCircle, 
  Sparkles, 
  Target, 
  Users, 
  Zap 
} from 'lucide-react';
import { PREVIEW_CAROUSEL_SLIDES } from '../data/salesData';

const DRILL_SCHEMES: Record<number, { duration: string; players: string; level: string; focus: string }> = {
  1: { duration: '15-20 Min', players: '5 vs 5 / Equipo', level: 'Intermedio - Avanzado', focus: 'Transición & Toma de Decisiones' },
  2: { duration: '12-15 Min', players: 'Individual / Parejas', level: 'Todos los niveles', focus: 'Mecánica de Tiro & Salida' },
  3: { duration: '10-15 Min', players: 'Individual', level: 'Básico - Avanzado', focus: 'Control Ambidiestro & Cambio de Ritmo' },
  4: { duration: '20 Min', players: '3 vs 3 / 4 vs 4', level: 'Intermedio', focus: 'Pick & Roll y Espaciado Ofensivo' },
  5: { duration: '15 Min', players: '1 vs 1 / Todo el equipo', level: 'Todos los niveles', focus: 'Desplazamiento Lateral & Ayudas' },
};

export const MaterialPreviewSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = PREVIEW_CAROUSEL_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const activeSlide = PREVIEW_CAROUSEL_SLIDES[currentIndex];
  const drillMeta = DRILL_SCHEMES[activeSlide.id] || { duration: '15 Min', players: 'Equipo', level: 'Intermedio', focus: 'Táctica' };

  return (
    <section id="muestra" className="relative py-10 sm:py-14 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5" />
            VISTA PREVIA DEL CONTENIDO
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase font-heading tracking-tight">
            MIRA LO QUE TE ESPERA
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            Descubre la estructura, esquemas tácticos y formato de los ejercicios que encontrarás al acceder.
          </p>
        </div>

        {/* Interactive Playbook Drill Display */}
        <div className="relative rounded-2xl overflow-hidden bg-[#111116] border border-zinc-800 shadow-2xl">
          
          {/* Main Tactical Card Area */}
          <div className="p-6 sm:p-8 relative">
            
            {/* Header of Exercise Sheet */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-[#ff5500] text-black text-xs font-black uppercase font-heading tracking-wider">
                  EJERCICIO #{activeSlide.id}0{activeSlide.id * 7}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-orange-400 text-xs font-bold uppercase font-heading">
                  {activeSlide.category}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-orange-400" />
                  {drillMeta.duration}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  {drillMeta.players}
                </span>
              </div>
            </div>

            {/* Drill Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
              
              {/* Tactical Diagram Vector representation */}
              <div className="lg:col-span-6 bg-[#08080c] rounded-xl p-4 border border-zinc-800 relative overflow-hidden h-52 sm:h-60 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-25 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 300 160" fill="none" stroke="#ff5500" strokeWidth="1.5">
                    <rect x="10" y="10" width="280" height="140" rx="4" />
                    <line x1="150" y1="10" x2="150" y2="150" />
                    <circle cx="150" cy="80" r="28" />
                    <path d="M 10 30 L 50 30 A 65 65 0 0 1 50 130 L 10 130" />
                    <rect x="10" y="50" width="60" height="60" />
                    <circle cx="20" cy="80" r="5" />
                    
                    {/* Tactical Routes for this specific slide */}
                    {activeSlide.id % 2 === 0 ? (
                      <>
                        <path d="M 180 50 Q 240 80 270 50" stroke="#34d399" strokeWidth="2.5" strokeDasharray="5 3" />
                        <circle cx="180" cy="50" r="4" fill="#34d399" />
                        <polygon points="270,50 260,45 264,55" fill="#34d399" />
                        <circle cx="240" cy="110" r="5" stroke="#ef4444" strokeWidth="2" />
                      </>
                    ) : (
                      <>
                        <path d="M 60 120 Q 120 80 150 110" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="5 3" />
                        <circle cx="60" cy="120" r="4" fill="#38bdf8" />
                        <polygon points="150,110 142,103 140,113" fill="#38bdf8" />
                        <line x1="90" y1="50" x2="130" y2="50" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                      </>
                    )}
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-800">
                    Esquema Táctico Vectorial
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    Nivel: {drillMeta.level}
                  </span>
                </div>

                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-bold text-orange-400 uppercase font-heading tracking-wide">
                      Objetivo Principal:
                    </span>
                    <p className="text-xs text-zinc-300 font-medium">{drillMeta.focus}</p>
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono">
                    MOD-{activeSlide.id} • FICHA TÉCNICA
                  </div>
                </div>
              </div>

              {/* Drill Details & Instructions */}
              <div className="lg:col-span-6 space-y-3 text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase font-heading tracking-wide leading-tight">
                  {activeSlide.title}
                </h3>
                <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                  {activeSlide.description}
                </p>
                
                <div className="space-y-2 pt-2 border-t border-zinc-800/80 text-xs">
                  <div className="flex items-start gap-2 text-zinc-300">
                    <span className="w-4 h-4 rounded-full bg-[#ff5500]/20 text-orange-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                    <span>Organización en cancha con posiciones y rotaciones definidas.</span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-300">
                    <span className="w-4 h-4 rounded-full bg-[#ff5500]/20 text-orange-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                    <span>Variantes de dificultad y progresiones técnicas aplicadas.</span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-300">
                    <span className="w-4 h-4 rounded-full bg-[#ff5500]/20 text-orange-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                    <span>Feedback y puntos clave de corrección para el entrenador/jugador.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Carousel Controls Bottom Bar */}
          <div className="bg-zinc-950 p-4 border-t border-zinc-800 flex items-center justify-between gap-4 flex-wrap">
            
            {/* Slide Indicator */}
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Ejercicio <span className="text-orange-400 font-bold">{currentIndex + 1}</span> de {totalSlides}
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-1.5">
              {PREVIEW_CAROUSEL_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ver ejercicio ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-[#ff5500]'
                      : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Anterior
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-orange-400 transition-colors flex items-center gap-1"
              >
                Siguiente <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

