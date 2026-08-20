import React from 'react';
import { Clock, CheckCircle2, Flame, Layers, Smartphone, Users, Zap } from 'lucide-react';
import { BENEFITS_DATA } from '../data/salesData';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-[#ff5500]" />,
  Clock: <Clock className="w-6 h-6 text-[#ff5500]" />,
  Layers: <Layers className="w-6 h-6 text-[#ff5500]" />,
  Users: <Users className="w-6 h-6 text-[#ff5500]" />,
  Smartphone: <Smartphone className="w-6 h-6 text-[#ff5500]" />,
};

export const BenefitsSection: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-14 bg-[#09090b] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            VENTAJAS CLAVE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase font-heading tracking-tight leading-tight">
            ¿POR QUÉ TENER ESTA COLECCIÓN?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl mx-auto">
            Descubre las principales razones por las que esta colección de + 1.000 ejercicios de baloncesto transformará tus entrenamientos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS_DATA.map((item, idx) => {
            return (
              <div
                key={item.id}
                className={`group rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between ${
                  idx === 0 || idx === 1 ? 'md:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-[#ff5500]/20 group-hover:scale-105 transition-all">
                      {ICONS_MAP[item.iconName] || <Zap className="w-6 h-6 text-[#ff5500]" />}
                    </div>
                    <span className="text-xs font-extrabold font-heading text-orange-400 bg-black/80 px-2.5 py-1 rounded-md border border-zinc-800">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white uppercase font-heading tracking-wide group-hover:text-orange-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs font-medium text-orange-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-zinc-300">Incluido en la colección</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

