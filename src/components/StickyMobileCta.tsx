import React, { useState, useEffect } from 'react';
import { Flame, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past hero (approx 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Acceso rápido de compra" className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-3.5 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 shadow-2xl">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Info: Product & Price */}
        <div className="hidden sm:block">
          <div className="text-xs font-bold uppercase text-white font-heading tracking-wide flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 fill-[#ff5500] text-[#ff5500]" />
            + 1.000 Ejercicios + 7 Bonos
          </div>
          <div className="text-[11px] text-zinc-400 font-normal">
            Acceso instantáneo • Garantía de 7 días
          </div>
        </div>

        {/* Right CTA button with Price */}
        <a
          href={CHECKOUT_URL}
          id="sticky-bar-checkout-btn"
          className="w-full sm:w-auto flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black font-heading font-extrabold uppercase text-sm tracking-wider shadow-lg shadow-emerald-950/40 transition-all"
        >
          <span>ACCEDER POR {PRICE_TEXT} 🏀</span>
          <Zap className="w-4 h-4 fill-black" />
        </a>

      </div>
    </aside>
  );
};
