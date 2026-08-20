import React from 'react';
import { Award, CheckCircle2, Flame, Layers, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { ProductMockup } from './ProductMockup';
import { CHECKOUT_URL } from '../data/salesData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-6 sm:pt-8 pb-10 sm:pb-14 bg-[#09090b]">
      {/* Background Court Geometry & Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial Ambient Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#ff5500]/15 to-transparent blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-orange-600/10 blur-[100px] rounded-full" />
        
        {/* Stylized Court Grid & Free Throw Key Vector Outline */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-court-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ff5500" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-court-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-orange-500/30 text-xs font-semibold text-zinc-300 shadow-lg shadow-orange-950/20">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="font-heading uppercase tracking-wider text-orange-400 font-bold">
              COLECCIÓN COMPLETA DE ENTRENAMIENTO
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase font-heading tracking-tight leading-[1.05] text-balance max-w-4xl mx-auto mb-3">
          +1.000 EJERCICIOS DE <span className="text-[#ff5500]">BALONCESTO</span> PARA MEJORAR TUS ENTRENAMIENTOS.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto mb-6">
          Descubre nuevas formas de entrenar, practicar y desarrollar tus habilidades dentro de la cancha con una colección completa de + 1.000 ejercicios de baloncesto.
        </p>

        {/* Main Vector Product Mockup Card */}
        <div className="my-4 sm:my-6 max-w-lg sm:max-w-xl mx-auto">
          <ProductMockup size="normal" />
        </div>

        {/* Quick Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 my-4">
          <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-zinc-900/95 border border-zinc-800 text-xs sm:text-sm md:text-base font-semibold text-zinc-100 shadow-md">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
            <span>+ 1.000 Ejercicios Prácticos</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-zinc-900/95 border border-zinc-800 text-xs sm:text-sm md:text-base font-semibold text-zinc-100 shadow-md">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
            <span>+7 Bonos Exclusivos</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-zinc-900/95 border border-zinc-800 text-xs sm:text-sm md:text-base font-semibold text-zinc-100 shadow-md">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
            <span>Para Jugadores & Entrenadores</span>
          </div>
        </div>

      </div>
    </section>
  );
};

