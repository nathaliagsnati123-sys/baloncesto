import React from 'react';
import { Award, Flame, PlayCircle, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets/images';

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
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff5500]/15 via-transparent to-transparent blur-xl rounded-2xl opacity-60" />

      {/* Main Digital Guide Presentation */}
      <div className={`relative z-10 w-full ${isLarge ? 'max-w-[440px]' : isCompact ? 'max-w-[320px]' : 'max-w-[380px]'}`}>
        
        {/* Device & Cover Stack */}
        <div className="relative group transition-all duration-300 hover:scale-[1.01]">
          
          {/* Main Book / Digital Master Collection Mockup */}
          <div className="relative bg-[#111116] rounded-2xl p-4 sm:p-5 border border-zinc-800 shadow-2xl shadow-black/80 overflow-hidden">
            
            {/* Inner Cover Art */}
            <div className="relative rounded-xl overflow-hidden bg-[#16161d] border border-zinc-800 p-4 sm:p-5 text-left">
              
              {/* Cover Top Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#ff5500] text-black">
                  <Flame className="w-3 h-3 fill-black" />
                  COLECCIÓN COMPLETA
                </span>
                <span className="text-[10px] font-semibold text-zinc-400 tracking-wider uppercase border border-zinc-700 px-2 py-0.5 rounded">
                  EDICIÓN 2026
                </span>
              </div>

              {/* Cover Central Hero Photo with Court Overlay */}
              <div className="relative h-40 sm:h-48 rounded-lg overflow-hidden my-3 border border-zinc-800">
                <img
                  src={IMAGES.benefits[1].jpg}
                  alt="Jugador de baloncesto entrenando"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/30 to-transparent" />

                {/* Big + 1.000 Badge Overlay */}
                <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                      + 1.000
                    </span>
                    <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                      EJERCICIOS PRÁCTICOS
                    </p>
                  </div>
                  <div className="bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-zinc-300 font-medium border border-zinc-800">
                    TODO EN 1
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
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-zinc-800 text-center">
                <div className="bg-zinc-900/60 rounded p-1.5 border border-zinc-800/60">
                  <div className="text-xs font-bold text-orange-400 font-heading">+ 1.000</div>
                  <div className="text-[9px] text-zinc-400 uppercase">Ejercicios</div>
                </div>
                <div className="bg-zinc-900/60 rounded p-1.5 border border-zinc-800/60">
                  <div className="text-xs font-bold text-orange-400 font-heading">7 BONOS</div>
                  <div className="text-[9px] text-zinc-400 uppercase">Incluidos</div>
                </div>
                <div className="bg-zinc-900/60 rounded p-1.5 border border-zinc-800/60">
                  <div className="text-xs font-bold text-orange-400 font-heading">ACCESO</div>
                  <div className="text-[9px] text-zinc-400 uppercase">Inmediato</div>
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
          <div className="absolute -top-2.5 -left-2 sm:-left-3 bg-zinc-900/95 border border-zinc-800 rounded-lg px-2 py-1 shadow-md flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#ff5500]" />
            <span className="text-[10px] font-medium text-zinc-300">Garantía 7 Días</span>
          </div>

        </div>
      </div>
    </div>
  );
};
