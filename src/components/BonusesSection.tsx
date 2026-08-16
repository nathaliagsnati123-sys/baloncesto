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
import { BONUSES_DATA, CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

const BONUS_ICONS: Record<number, React.ReactNode> = {
  1: <Swords className="w-8 h-8 text-[#ff5500]" />,
  2: <Crosshair className="w-8 h-8 text-[#ff5500]" />,
  3: <Zap className="w-8 h-8 text-[#ff5500]" />,
  4: <UserCheck className="w-8 h-8 text-[#ff5500]" />,
  5: <Layers className="w-8 h-8 text-[#ff5500]" />,
  6: <BookOpen className="w-8 h-8 text-[#ff5500]" />,
  7: <Video className="w-8 h-8 text-[#ff5500]" />,
};

export const BonusesSection: React.FC = () => {
  return (
    <section id="bonos" className="relative py-20 bg-[#0c0c10] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            REGALOS EXCLUSIVOS POR ACCEDER HOY
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase font-heading tracking-tight leading-tight">
            Y RECIBES TODOS ESTOS BONOS GRATIS
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal max-w-2xl mx-auto">
            Además de los + 1.000 ejercicios de baloncesto, recibirás estos 7 materiales adicionales sin costo extra.
          </p>
        </div>

        {/* 7 Bonuses Cards Grid with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className={`group rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between p-6 ${bonus.number === 7 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div>
                {/* Top Row: Bonus Badge & Free Pill */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold uppercase font-heading tracking-wider bg-[#ff5500] text-black">
                    <Gift className="w-3.5 h-3.5 fill-black" />
                    BONO {bonus.number}
                  </span>

                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded-md">
                    GRATIS HOY
                  </span>
                </div>

                {/* Prominent Bonus Icon Box */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 group-hover:scale-105 transition-all">
                    {BONUS_ICONS[bonus.number] || <Sparkles className="w-7 h-7 text-[#ff5500]" />}
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-semibold text-orange-400 uppercase tracking-wider mb-1">
                      {bonus.tag}
                    </span>
                    <div className="text-[11px] text-zinc-400 font-medium">
                      Material Complementario
                    </div>
                  </div>
                </div>

                {/* Bonus Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white uppercase font-heading tracking-wide group-hover:text-orange-400 transition-colors leading-snug">
                    {bonus.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>

              {/* Footer Note in card */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-medium">Incluido en la oferta</span>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>100% Desbloqueado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Highlight & CTA */}
        <div className="mt-12 text-center space-y-5 max-w-xl mx-auto">
          <div className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <p className="text-lg sm:text-xl font-extrabold text-white uppercase font-heading tracking-wide">
              TODO ESTO INCLUIDO POR SOLO <span className="text-[#ff5500]">{PRICE_TEXT}</span>
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal">
              1.000 ejercicios de baloncesto + los 7 bonos especiales en un solo pago.
            </p>
          </div>

          <div>
            <a
              href={CHECKOUT_URL}
              id="bonuses-cta-btn"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold uppercase font-heading tracking-wide text-black bg-[#ff5500] hover:bg-[#ff661a] active:scale-[0.98] transition-all shadow-md"
            >
              <span>QUIERO TODO POR {PRICE_TEXT} 🏀</span>
              <Zap className="w-5 h-5 fill-black" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
