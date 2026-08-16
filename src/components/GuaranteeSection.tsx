import React from 'react';
import { Award, CheckCircle, Lock, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="relative py-20 bg-[#0c0c10] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-8 sm:p-12 shadow-xl">
          
          {/* Sello Visual: 7 DÍAS DE GARANTÍA */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-[#ff5500]" />
            </div>
          </div>

          {/* Sello Title Badge */}
          <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            GARANTÍA INCONDICIONAL
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase font-heading tracking-tight mb-4">
            7 DÍAS DE GARANTÍA
          </h2>

          {/* Guarantee Description */}
          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto mb-4">
            Tienes 7 días de garantía para conocer el material. Si consideras que no es adecuado para ti, podrás solicitar un reembolso dentro del período de garantía, de acuerdo con las condiciones de compra.
          </p>

          <p className="text-xs sm:text-sm font-medium text-zinc-300 mb-8">
            Tu satisfacción y tranquilidad son lo primero.
          </p>

          {/* Quick Confidence Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto mb-8 text-xs font-medium text-zinc-300">
            <div className="p-2.5 rounded-lg bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Riesgo cero</span>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Plataforma segura</span>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Acceso inmediato</span>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href={CHECKOUT_URL}
              id="guarantee-cta-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-extrabold uppercase font-heading tracking-wide text-black bg-[#ff5500] hover:bg-[#ff661a] active:scale-[0.98] transition-all shadow-md"
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
