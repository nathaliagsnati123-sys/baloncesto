import React from 'react';
import { Flame, Lock, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Flame Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-[#ff5500]" />
            TU PRÓXIMO NIVEL COMIENZA AQUÍ
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase font-heading tracking-tight leading-tight mb-4">
          ¿LISTO PARA ENTRENAR CON MÁS VARIEDAD?
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto mb-6">
          Obtén la colección completa de + 1.000 ejercicios de baloncesto y todos los bonos especiales por solo <span className="text-white font-bold">{PRICE_TEXT}</span>.
        </p>

        {/* Price Callout Card */}
        <div className="mb-8 inline-block">
          <div className="px-8 py-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl">
            <div className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1">
              ACCESO COMPLETO INMEDIATO
            </div>
            <div className="text-5xl sm:text-6xl font-extrabold text-white font-heading tracking-tight leading-none">
              {PRICE_TEXT}
            </div>
            <div className="text-xs text-zinc-400 font-normal mt-2">
              Pago único • Sin suscripción
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-4 max-w-md mx-auto">
          <a
            href={CHECKOUT_URL}
            id="final-cta-btn"
            className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base sm:text-lg font-extrabold uppercase font-heading tracking-wide text-black bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all shadow-lg shadow-emerald-950/50"
          >
            <span>QUIERO LOS + 1.000 EJERCICIOS 🏀</span>
            <Zap className="w-5 h-5 fill-black group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 font-medium pt-1">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-zinc-300" />
              Acceso Inmediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
              Garantía de 7 Días
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-zinc-300" />
              Pago 100% Seguro
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
