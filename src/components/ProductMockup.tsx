import React from 'react';
import { Award, BookOpen, Check, Flame, Layers, Shield, Sparkles, Target, Zap } from 'lucide-react';

interface ProductMockupProps {
  className?: string;
  size?: 'normal' | 'large' | 'compact';
}

export const ProductMockup: React.FC<ProductMockupProps> = ({ className = '', size = 'normal' }) => {
  const isLarge = size === 'large';
  const isCompact = size === 'compact';

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Subtle backlight */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff5500]/20 via-orange-500/10 to-transparent blur-2xl rounded-3xl opacity-75" />

      {/* Main Digital Guide Presentation */}
      <div className={`relative z-10 w-full ${isLarge ? 'max-w-[480px]' : isCompact ? 'max-w-[340px]' : 'max-w-[420px]'}`}>
        
        {/* Device & Cover Stack */}
        <div className="relative group transition-all duration-300 hover:scale-[1.01]">
          
          {/* Main Book / Digital Master Collection Mockup */}
          <div className="relative bg-[#111116] rounded-2xl p-4 sm:p-5 border border-zinc-800 shadow-2xl shadow-black/90 overflow-hidden">
            
            {/* Inner Cover Art */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#181820] to-[#121217] border border-zinc-700/80 p-4 sm:p-5 text-left">
              
              {/* Cover Top Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#ff5500] text-black">
                  <Flame className="w-3 h-3 fill-black" />
                  COLECCIÓN COMPLETA
                </span>
                <span className="text-[10px] font-semibold text-zinc-300 tracking-wider uppercase border border-zinc-700 bg-zinc-900/80 px-2 py-0.5 rounded">
                  EDICIÓN 2026
                </span>
              </div>

              {/* Vector Tactical Court Centerpiece */}
              <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden my-3 border border-orange-500/30 bg-[#09090d] p-3 flex flex-col justify-between">
                {/* Tactical Court Diagram Grid */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 300 150" fill="none" stroke="#ff5500" strokeWidth="1.5">
                    {/* Court outer */}
                    <rect x="5" y="5" width="290" height="140" rx="4" />
                    {/* Center court line */}
                    <line x1="150" y1="5" x2="150" y2="145" />
                    <circle cx="150" cy="75" r="28" />
                    {/* 3-Point Arc Left */}
                    <path d="M 5 25 L 45 25 A 65 65 0 0 1 45 125 L 5 125" />
                    {/* Key Left */}
                    <rect x="5" y="45" width="55" height="60" />
                    <circle cx="60" cy="75" r="18" strokeDasharray="3 3" />
                    <circle cx="20" cy="75" r="5" />
                    {/* 3-Point Arc Right */}
                    <path d="M 295 25 L 255 25 A 65 65 0 0 0 255 125 L 295 125" />
                    {/* Key Right */}
                    <rect x="240" y="45" width="55" height="60" />
                    <circle cx="240" cy="75" r="18" strokeDasharray="3 3" />
                    <circle cx="280" cy="75" r="5" />
                    {/* Tactical Play Lines */}
                    <path d="M 75 40 Q 120 75 140 50" stroke="#34d399" strokeWidth="2" strokeDasharray="4 2" />
                    <circle cx="75" cy="40" r="3" fill="#34d399" />
                    <polygon points="140,50 132,45 135,53" fill="#34d399" />
                    <path d="M 210 110 Q 180 80 160 100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                    <circle cx="210" cy="110" r="3" fill="#f59e0b" />
                    <polygon points="160,100 168,105 165,97" fill="#f59e0b" />
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-700 text-[10px] font-semibold text-orange-400">
                    <Target className="w-3 h-3 text-orange-400" />
                    <span>PIZARRA TÁCTICA DIGITAL</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700 text-[10px] font-bold text-emerald-400">
                    <Check className="w-3 h-3" />
                    <span>PDF + VIDEOS</span>
                  </div>
                </div>

                {/* Big + 1.000 Badge Overlay */}
                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <span className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight drop-shadow-md">
                      + 1.000
                    </span>
                    <p className="text-[11px] font-extrabold text-[#ff5500] uppercase tracking-wider font-heading">
                      EJERCICIOS PRÁCTICOS
                    </p>
                  </div>
                  <div className="bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] text-zinc-300 font-bold border border-zinc-700">
                    ACCESO TOTAL
                  </div>
                </div>
              </div>

              {/* Cover Title and Details */}
              <div className="mt-3">
                <h3 className="text-base sm:text-lg font-bold text-white uppercase font-heading leading-tight tracking-wide">
                  + 1.000 EJERCICIOS DE BALONCESTO
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-normal leading-relaxed">
                  Para mejorar tu juego, técnica, tiro, pase, dribbling y preparación de sesiones.
                </p>
              </div>

              {/* Cover Features Mini Grid */}
              <div className="grid grid-cols-3 gap-2 mt-3.5 pt-3 border-t border-zinc-800 text-center">
                <div className="bg-zinc-900/80 rounded-lg p-2 border border-zinc-800">
                  <div className="text-sm font-bold text-orange-400 font-heading">+ 1.000</div>
                  <div className="text-[9px] text-zinc-400 uppercase font-medium">Ejercicios</div>
                </div>
                <div className="bg-zinc-900/80 rounded-lg p-2 border border-zinc-800">
                  <div className="text-sm font-bold text-emerald-400 font-heading">7 BONOS</div>
                  <div className="text-[9px] text-zinc-400 uppercase font-medium">Gratis</div>
                </div>
                <div className="bg-zinc-900/80 rounded-lg p-2 border border-zinc-800">
                  <div className="text-sm font-bold text-orange-400 font-heading">DIGITAL</div>
                  <div className="text-[9px] text-zinc-400 uppercase font-medium">Inmediato</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Secondary Mini Guide / Bonus Preview Badge */}
          <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-zinc-900/95 border border-zinc-700 rounded-xl p-2.5 shadow-xl backdrop-blur-md flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#ff5500] flex items-center justify-center text-black font-black font-heading text-sm">
              +7
            </div>
            <div className="text-left pr-1">
              <div className="text-[10px] font-bold uppercase text-white tracking-wider flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-orange-400" />
                BONOS GRATIS
              </div>
              <div className="text-[9px] text-zinc-400 font-medium">
                Incluidos hoy
              </div>
            </div>
          </div>

          {/* Floating Guarantee Badge */}
          <div className="absolute -top-2.5 -left-2 sm:-left-3 bg-zinc-900/95 border border-zinc-800 rounded-lg px-2.5 py-1 shadow-md flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#ff5500]" />
            <span className="text-[10px] font-medium text-zinc-300">Garantía 7 Días</span>
          </div>

        </div>
      </div>
    </div>
  );
};

