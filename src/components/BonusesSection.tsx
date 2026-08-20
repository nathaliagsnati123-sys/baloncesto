import React from 'react';
import { 
  Award, 
  BookOpen, 
  Check, 
  Crosshair, 
  Flame, 
  Gift, 
  Layers, 
  PlayCircle, 
  ShieldAlert, 
  Sparkles, 
  Swords, 
  Tv, 
  UserCheck, 
  Video, 
  Zap 
} from 'lucide-react';
import { BONUSES_DATA } from '../data/salesData';

const BONUS_ICONS: Record<number, { icon: React.ReactNode; bg: string; border: string; color: string }> = {
  1: {
    icon: <Swords className="w-6 h-6 text-orange-400" />,
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    color: 'text-orange-400',
  },
  2: {
    icon: <Crosshair className="w-6 h-6 text-amber-400" />,
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    color: 'text-amber-400',
  },
  3: {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    color: 'text-yellow-400',
  },
  4: {
    icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    color: 'text-emerald-400',
  },
  5: {
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    color: 'text-cyan-400',
  },
  6: {
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    color: 'text-blue-400',
  },
  7: {
    icon: <Video className="w-6 h-6 text-purple-400" />,
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    color: 'text-purple-400',
  },
};

export const BonusesSection: React.FC = () => {
  return (
    <section id="bonos" className="relative py-10 sm:py-14 bg-[#0c0c10] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            REGALOS EXCLUSIVOS POR ACCEDER HOY
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase font-heading tracking-tight leading-tight">
            Y RECIBES TODOS ESTOS BONOS GRATIS
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl mx-auto">
            Además de los + 1.000 ejercicios de baloncesto, recibirás estos 7 materiales adicionales sin costo extra.
          </p>

          {/* Value Anchoring Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900/90 border border-emerald-800/40 text-xs sm:text-sm font-medium mt-1">
            <span className="text-zinc-400">Valor total por separado:</span>
            <span className="line-through text-red-500 font-bold decoration-red-500/90">US$155,00</span>
            <span className="text-zinc-400">→</span>
            <span className="text-emerald-400 font-extrabold uppercase font-heading tracking-wide">
              HOY: 100% GRATIS
            </span>
          </div>
        </div>

        {/* 7 Bonuses Cards Grid with Vector Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {BONUSES_DATA.map((bonus) => {
            const iconConfig = BONUS_ICONS[bonus.number] || {
              icon: <Sparkles className="w-6 h-6 text-orange-400" />,
              bg: 'bg-orange-500/10',
              border: 'border-orange-500/30',
              color: 'text-orange-400',
            };

            return (
              <div
                key={bonus.id}
                className={`group rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between p-5 sm:p-6 ${
                  bonus.number === 7 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Row: Bonus Badge & Free Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold uppercase font-heading tracking-wider bg-[#ff5500] text-black">
                      <Gift className="w-3.5 h-3.5 fill-black" />
                      BONO {bonus.number}
                    </span>

                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2.5 py-0.5 rounded-md uppercase font-heading tracking-wide">
                      GRATIS HOY
                    </span>
                  </div>

                  {/* Icon & Tag Box */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className={`w-12 h-12 rounded-xl ${iconConfig.bg} border ${iconConfig.border} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      {iconConfig.icon}
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded bg-zinc-800 text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-0.5 border border-zinc-700 font-heading">
                        {bonus.tag}
                      </span>
                      <div className="text-[11px] text-zinc-400 font-medium">
                        Material Digital Exclusivo
                      </div>
                    </div>
                  </div>

                  {/* Bonus Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white uppercase font-heading tracking-wide group-hover:text-orange-400 transition-colors leading-snug">
                      {bonus.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>

                {/* Footer Note in card */}
                <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-zinc-400 font-medium">
                    <span>Valor:</span>
                    <span className="line-through text-red-500 font-bold decoration-red-500/80">{bonus.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-emerald-400 font-heading">
                    <Check className="w-3.5 h-3.5" />
                    <span>INCLUIDO GRATIS</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

