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

const BONUS_IMAGES: Record<number, string> = {
  1: 'https://i.ibb.co/WpckMqCV/Chat-GPT-Image-20-de-ago-de-2026-11-47-13.png',
  2: 'https://i.ibb.co/wrJyQxvs/Chat-GPT-Image-20-de-ago-de-2026-12-39-03.png',
  3: 'https://i.ibb.co/nN4sbbWq/Chat-GPT-Image-20-de-ago-de-2026-12-40-31.png',
  4: 'https://i.ibb.co/JR2h4Hc0/Chat-GPT-Image-20-de-ago-de-2026-12-44-16.png',
  5: 'https://i.ibb.co/Tx3SRcXm/Chat-GPT-Image-20-de-ago-de-2026-12-45-44.png',
  6: 'https://i.ibb.co/WNJY1wSj/Chat-GPT-Image-20-de-ago-de-2026-12-51-12.png',
  7: 'https://i.ibb.co/QLNB1zb/Chat-GPT-Image-20-de-ago-de-2026-13-01-39.png',
};

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

        {/* 7 Bonuses Cards Grid with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className={`group rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between p-4 sm:p-5 ${bonus.number === 7 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div>
                {/* Top Row: Bonus Badge & Free Pill */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold uppercase font-heading tracking-wider bg-[#ff5500] text-black">
                    <Gift className="w-3.5 h-3.5 fill-black" />
                    BONO {bonus.number}
                  </span>

                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2.5 py-0.5 rounded-md uppercase font-heading tracking-wide">
                    GRATIS HOY
                  </span>
                </div>

                {/* Bonus Visual Display: Custom Image for Bonuses with cover or Icon Box for others */}
                {BONUS_IMAGES[bonus.number] ? (
                  <div className="space-y-3 mb-3.5">
                    <div className="relative rounded-xl overflow-hidden border border-orange-500/30 bg-zinc-950/90 shadow-lg group-hover:border-orange-500/60 transition-all duration-300">
                      <img
                        src={BONUS_IMAGES[bonus.number]}
                        alt={bonus.title}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300 filter contrast-[1.02] brightness-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/85 backdrop-blur-sm text-[10px] font-bold text-orange-400 uppercase tracking-wider border border-zinc-800">
                        {bonus.tag}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 group-hover:scale-105 transition-all">
                      {BONUS_ICONS[bonus.number] || <Sparkles className="w-6 h-6 text-[#ff5500]" />}
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-semibold text-orange-400 uppercase tracking-wider mb-0.5">
                        {bonus.tag}
                      </span>
                      <div className="text-[11px] text-zinc-400 font-medium">
                        Material Complementario
                      </div>
                    </div>
                  </div>
                )}

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
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
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
          ))}
        </div>

      </div>
    </section>
  );
};
