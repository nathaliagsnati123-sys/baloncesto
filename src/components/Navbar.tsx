import React from 'react';
import { Flame, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]/90 backdrop-blur-md border-b border-orange-500/20">
      {/* Top micro bar for urgency */}
      <div className="bg-gradient-to-r from-[#ff5500] via-[#ff7700] to-[#ff3700] text-black text-[11px] sm:text-xs font-black uppercase py-1 px-4 text-center tracking-wider flex items-center justify-center gap-2">
        <Flame className="w-3.5 h-3.5 fill-black" />
        <span>OFERTA ESPECIAL POR TIEMPO LIMITADO — + 1.000 EJERCICIOS + 7 BONOS POR SOLO {PRICE_TEXT}</span>
        <Flame className="w-3.5 h-3.5 fill-black hidden sm:inline-block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Title / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff5500] to-[#d93800] flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
            <span className="text-xl select-none">🏀</span>
          </div>
          <div>
            <div className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-wide leading-none group-hover:text-orange-400 transition-colors">
              + 1.000 EJERCICIOS
            </div>
            <div className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase">
              Baloncesto Profesional
            </div>
          </div>
        </a>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-zinc-300 font-medium mr-2">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span>Garantía 7 Días</span>
          </div>

          <a
            href={CHECKOUT_URL}
            id="nav-checkout-btn"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-black bg-[#ff5500] hover:bg-[#ff6a1a] active:scale-95 transition-all shadow-lg shadow-orange-500/25 tracking-wide uppercase font-heading hover:shadow-orange-500/40"
          >
            <Zap className="w-4 h-4 fill-black" />
            <span>ACCEDER POR {PRICE_TEXT}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
