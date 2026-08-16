import React, { useEffect, useState } from 'react';
import { Clock, Flame, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const TopUrgencyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 14 * 60 + 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <div
      id="top-urgency-banner"
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white shadow-lg shadow-red-950/40 border-b border-red-500/60 py-2.5 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-left">
        {/* Urgency & Offer Message */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black/25 text-white animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-white text-white" />
          </span>
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-heading drop-shadow-sm">
            OFERTA POR TIEMPO LIMITADO
          </span>
          <span className="hidden md:inline-block text-xs text-red-100 font-medium">
            — +1.000 ejercicios + 7 bonos por solo <strong className="text-white font-bold bg-black/30 px-1.5 py-0.5 rounded ml-1">{PRICE_TEXT}</strong>
          </span>
        </div>

        {/* Live Countdown & Direct Action Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Timer Display */}
          <div className="flex items-center gap-1.5 bg-black/40 border border-white/20 rounded-lg px-2.5 py-1 text-white shadow-inner">
            <Clock className="w-3.5 h-3.5 text-red-200" />
            <span className="text-[10px] text-red-200 font-bold uppercase tracking-wider hidden xs:inline">
              Expira en:
            </span>
            <div className="flex items-center gap-1 font-mono font-black text-xs text-white">
              <span className="bg-black/60 px-1.5 py-0.5 rounded text-white border border-white/10">
                {formattedHours}
              </span>
              <span className="text-red-200 animate-pulse">:</span>
              <span className="bg-black/60 px-1.5 py-0.5 rounded text-white border border-white/10">
                {formattedMinutes}
              </span>
              <span className="text-red-200 animate-pulse">:</span>
              <span className="bg-black/60 px-1.5 py-0.5 rounded text-white border border-white/10">
                {formattedSeconds}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <a
            href={CHECKOUT_URL}
            id="banner-checkout-cta"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-black uppercase font-heading text-red-700 bg-white hover:bg-zinc-100 active:scale-95 transition-all shadow-md hover:shadow-lg"
          >
            <Zap className="w-3.5 h-3.5 fill-red-700" />
            <span>ACCEDER {PRICE_TEXT}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
