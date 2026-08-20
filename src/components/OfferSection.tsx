import React from 'react';
import { Flame, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="relative py-10 sm:py-14 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Flame className="w-3.5 h-3.5 fill-[#ff5500]" />
          <span>OPORTUNIDAD ÚNICA DE ACCESO</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase font-heading tracking-tight mb-2">
          OFERTA ESPECIAL
        </h2>

        {/* Offer Description Text */}
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto mb-4 sm:mb-5">
          Obtén la colección completa de + 1.000 ejercicios de baloncesto + todos los bonos especiales por solamente:
        </p>

        {/* Clean Pricing Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl max-w-md mx-auto">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            ACCESO COMPLETO E INMEDIATO
          </div>

          {/* Bundle Showcase Image */}
          <div className="relative my-2.5 rounded-xl overflow-hidden bg-zinc-950/70 border border-zinc-800/90 p-2 shadow-inner">
            <picture>
              <source
                type="image/webp"
                srcSet="/images/hero-sm.webp 420w, /images/hero.webp 640w"
                sizes="(max-width: 640px) 360px, 420px"
              />
              <source
                type="image/jpeg"
                srcSet="/images/hero-sm.jpg 420w, /images/hero.jpg 640w"
                sizes="(max-width: 640px) 360px, 420px"
              />
              <img
                src="/images/hero-sm.jpg"
                alt="Colección +1.000 Ejercicios de Baloncesto"
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[220px] sm:max-h-[260px] object-contain mx-auto filter contrast-[1.03] brightness-[1.02]"
              />
            </picture>
          </div>

          {/* Price Anchoring */}
          <div className="flex items-center justify-center gap-2 mt-3 mb-0.5 text-sm sm:text-base font-semibold">
            <span className="text-zinc-400 font-medium">De</span>
            <span className="text-red-500 line-through font-bold text-lg sm:text-xl md:text-2xl decoration-red-500/90">
              US$249,90
            </span>
            <span className="text-zinc-400 font-medium">por solo</span>
          </div>

          <div className="text-6xl sm:text-8xl md:text-[96px] lg:text-[112px] font-black text-white font-heading tracking-tight leading-none my-1 sm:my-2 drop-shadow-lg select-none whitespace-nowrap">
            {PRICE_TEXT}
          </div>
          <div className="text-xs text-zinc-400 font-normal mt-1.5 mb-4">
            Pago único • Sin mensualidades • Acceso de por vida
          </div>

          {/* CTA Button directly below price */}
          <a
            href={CHECKOUT_URL}
            id="offer-special-cta-btn"
            className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base sm:text-lg font-extrabold uppercase font-heading tracking-wide text-black bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all shadow-lg shadow-emerald-950/50"
          >
            <span>QUIERO ACCEDER AHORA 🏀</span>
            <Zap className="w-5 h-5 fill-black group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
