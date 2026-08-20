import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-4 sm:pt-6 pb-8 sm:pb-10 subtle-court-bg">
      {/* Background Court Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/benefit-1-sm.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-10 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/95 to-[#09090b]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
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
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto mb-4">
          Descubre nuevas formas de entrenar, practicar y desarrollar tus habilidades dentro de la cancha con una colección completa de + 1.000 ejercicios de baloncesto.
        </p>

        {/* Main Showcase Image directly below the subtitle text */}
        <div className="relative my-3 sm:my-4 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto group">
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff5500]/25 via-orange-500/10 to-transparent blur-2xl rounded-3xl opacity-60 group-hover:opacity-90 transition-opacity" />

          {/* Image Container Card */}
          <div className="relative rounded-2xl overflow-hidden bg-zinc-900/90 border border-zinc-800 shadow-2xl shadow-black/80 transition-transform duration-300 group-hover:scale-[1.01]">
            <img
              src="/images/hero-sm.webp"
              srcSet="/images/hero-sm.webp 420w, /images/hero.webp 640w"
              sizes="(max-width: 640px) 420px, 640px"
              alt="Colección +1.000 Ejercicios de Baloncesto"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto max-h-[340px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[520px] object-contain mx-auto filter contrast-[1.03] brightness-[1.02]"
            />
          </div>
        </div>

        {/* Quick Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 my-3 sm:my-4">
          <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-zinc-900/95 border border-zinc-800 text-xs sm:text-sm md:text-base font-semibold text-zinc-100 shadow-md">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
            <span>+ 1.000 Ejercicios Prácticos</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-zinc-900/95 border border-zinc-800 text-xs sm:text-sm md:text-base font-semibold text-zinc-100 shadow-md">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
            <span>+7 Bonos Exclusivos</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-zinc-900/95 border border-zinc-800 text-xs sm:text-sm md:text-base font-semibold text-zinc-100 shadow-md">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
            <span>Para Jugadores & Entrenadores</span>
          </div>
        </div>

      </div>
    </section>
  );
};
