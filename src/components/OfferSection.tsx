import React, { useEffect, useState } from 'react';
import { Clock, Flame, Lock, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const OfferSection: React.FC = () => {
  // 15:00 countdown timer in seconds (900 seconds)
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <section id="oferta" className="relative py-20 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Flame className="w-3.5 h-3.5 fill-[#ff5500]" />
          <span>OPORTUNIDAD ÚNICA DE ACCESO</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase font-heading tracking-tight mb-4">
          OFERTA ESPECIAL
        </h2>

        {/* Offer Description Text */}
        <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto mb-8">
          Obtén la colección completa de + 1.000 ejercicios de baloncesto + todos los bonos especiales por solamente:
        </p>

        {/* Clean Pricing Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl max-w-md mx-auto mb-8">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            ACCESO COMPLETO E INMEDIATO
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white font-heading tracking-tight leading-none">
            {PRICE_TEXT}
          </div>
          <div className="text-xs text-zinc-400 font-normal mt-2.5">
            Pago único • Sin mensualidades • Acceso de por vida
          </div>

          {/* Integrated Countdown Timer */}
          <div className="mt-6 pt-5 border-t border-zinc-800">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>EL TIEMPO SE AGOTA:</span>
            </div>

            {/* Timer Digits Display */}
            <div className="flex items-center justify-center gap-2">
              <div className="bg-zinc-800 px-3 py-1.5 rounded-lg min-w-[60px]">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {formattedMinutes}
                </span>
                <span className="block text-[9px] text-zinc-400 uppercase">Min</span>
              </div>

              <span className="text-xl font-bold text-zinc-500 font-heading">:</span>

              <div className="bg-zinc-800 px-3 py-1.5 rounded-lg min-w-[60px]">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {formattedSeconds}
                </span>
                <span className="block text-[9px] text-zinc-400 uppercase">Seg</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-4 max-w-md mx-auto">
          <a
            href={CHECKOUT_URL}
            id="offer-special-cta-btn"
            className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base sm:text-lg font-extrabold uppercase font-heading tracking-wide text-black bg-[#ff5500] hover:bg-[#ff661a] active:scale-[0.98] transition-all shadow-md"
          >
            <span>QUIERO ACCEDER AHORA 🏀</span>
            <Zap className="w-5 h-5 fill-black group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Guarantee and Security Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 font-medium pt-1">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
              <span>Garantía de 7 días</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-zinc-300" />
              <span>Compra segura</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-zinc-300" />
              <span>Acceso inmediato</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
