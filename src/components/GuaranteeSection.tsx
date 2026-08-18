import React from 'react';
import { Award, CheckCircle, Lock, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="relative py-10 sm:py-14 bg-[#0c0c10] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 shadow-xl">
          
          {/* Sello Visual: 7 DÍAS DE GARANTÍA */}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#ff5500]" />
            </div>
          </div>

          {/* Sello Title Badge */}
          <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1.5">
            GARANTÍA INCONDICIONAL
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase font-heading tracking-tight mb-2.5">
            7 DÍAS DE GARANTÍA
          </h2>

          {/* Guarantee Description */}
          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto mb-2.5">
            Tienes 7 días de garantía para conocer el material. Si consideras que no es adecuado para ti, podrás solicitar un reembolso dentro del período de garantía, de acuerdo con las condiciones de compra.
          </p>

          <p className="text-xs sm:text-sm font-medium text-zinc-300 mb-4 sm:mb-5">
            Tu satisfacción y tranquilidad son lo primero.
          </p>

          {/* Quick Confidence Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-md mx-auto mb-5 text-xs font-medium text-zinc-300">
            <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Riesgo cero</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Plataforma segura</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Acceso inmediato</span>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href={CHECKOUT_URL}
              id="guarantee-cta-btn"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 rounded-xl text-base font-extrabold uppercase font-heading tracking-wide text-black bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all shadow-lg shadow-emerald-950/50"
            >
              <span>QUIERO PROBARLO 🏀</span>
              <Zap className="w-4 h-4 fill-black" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
