import React from 'react';
import { Award, CheckCircle2, Lock, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 pb-16 lg:py-20 subtle-court-bg">
      {/* Background Court Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1920&q=80"
          alt="Baloncesto entrenamiento en cancha"
          className="w-full h-full object-cover object-center opacity-10 filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/95 to-[#09090b]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="font-heading uppercase tracking-wider text-orange-400 font-bold">
              COLECCIÓN COMPLETA DE ENTRENAMIENTO
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase font-heading tracking-tight leading-[1.05] text-balance max-w-4xl mx-auto mb-4">
          +1.000 EJERCICIOS DE <span className="text-[#ff5500]">BALONCESTO</span> PARA MEJORAR TUS ENTRENAMIENTOS.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto mb-6">
          Descubre nuevas formas de entrenar, practicar y desarrollar tus habilidades dentro de la cancha con una colección completa de + 1.000 ejercicios de baloncesto.
        </p>

        {/* Main Showcase Image directly below the subtitle text */}
        <div className="relative my-6 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto group">
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff5500]/25 via-orange-500/10 to-transparent blur-2xl rounded-3xl opacity-60 group-hover:opacity-90 transition-opacity" />

          {/* Image Container Card */}
          <div className="relative rounded-2xl overflow-hidden bg-zinc-900/90 border border-zinc-800 shadow-2xl shadow-black/80 transition-transform duration-300 group-hover:scale-[1.01]">
            <img
              src="https://i.ibb.co/FSktNLw/Gemini-Generated-Image-ffq83tffq83tffq8.jpg"
              alt="Colección +1.000 Ejercicios de Baloncesto"
              className="w-full h-auto max-h-[360px] sm:max-h-[440px] md:max-h-[500px] lg:max-h-[560px] object-contain mx-auto filter contrast-[1.03] brightness-[1.02]"
              referrerPolicy="no-referrer"
            />

            {/* Floating Badges on image */}
            <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-zinc-800 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
              <Award className="w-3.5 h-3.5 text-[#ff5500]" />
              <span className="text-[11px] font-semibold text-zinc-200">Garantía 7 Días</span>
            </div>

            <div className="absolute bottom-3 right-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-xl">
              <span className="w-6 h-6 rounded-md bg-[#ff5500] text-black font-black text-xs flex items-center justify-center font-heading">
                +7
              </span>
              <div className="text-left">
                <div className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-orange-400" />
                  Bonos Gratis
                </div>
                <div className="text-[9px] text-zinc-400 font-medium">Incluidos hoy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 my-6">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-300">
            <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
            + 1.000 Ejercicios Prácticos
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-300">
            <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
            +7 Bonos Exclusivos
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-300">
            <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
            Para Jugadores & Entrenadores
          </div>
        </div>

        {/* Price Callout Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/85 border border-zinc-800 max-w-xl mx-auto mb-6">
          <div className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
            <div className="text-left">
              <span className="text-[11px] sm:text-xs text-zinc-400 font-semibold uppercase tracking-wider block">
                Precio Especial de Lanzamiento
              </span>
              <div className="flex items-baseline gap-2.5 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                  {PRICE_TEXT}
                </span>
                <span className="text-sm sm:text-base text-zinc-500 line-through font-medium">
                  US$47
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                  83% DCTO
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[11px] sm:text-xs text-zinc-400 uppercase font-medium block">Pago Único</span>
              <span className="text-xs sm:text-sm font-bold text-orange-400">Acceso De Por Vida</span>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="space-y-3 max-w-xl mx-auto">
          <a
            href={CHECKOUT_URL}
            id="hero-main-cta-btn"
            className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 sm:py-5 rounded-xl text-base sm:text-lg md:text-xl font-extrabold uppercase font-heading tracking-wide text-black bg-[#ff5500] hover:bg-[#ff661a] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-orange-500/25"
          >
            <span>QUIERO MEJORAR MI JUEGO 🏀</span>
            <Zap className="w-5 h-5 fill-black group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-zinc-400 font-medium pt-1">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-zinc-300" />
              Acceso inmediato
            </span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-zinc-300" />
              Compra segura
            </span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
              Garantía de 7 días
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
