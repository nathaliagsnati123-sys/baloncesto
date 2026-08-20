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
        <div className="space-y-4">
          
          {/* Top Row: 2 Feature Banners */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {BENEFITS_DATA.slice(0, 2).map((item, idx) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex flex-col sm:flex-row h-full min-h-[200px]"
              >
                {/* Photo half */}
                <div className="sm:w-1/2 relative overflow-hidden h-36 sm:h-auto">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`${item.image.replace('.webp', '-sm.webp')} 360w, ${item.image} 600w`}
                      sizes="(max-width: 640px) 360px, 400px"
                    />
                    <source
                      type="image/jpeg"
                      srcSet={`${item.image.replace('.webp', '-sm.jpg')} 360w, ${item.image.replace('.webp', '.jpg')} 600w`}
                      sizes="(max-width: 640px) 360px, 400px"
                    />
                    <img
                      src={item.image.replace('.webp', '-sm.jpg')}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-zinc-900" />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-bold text-orange-400 uppercase font-heading border border-zinc-800">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content half */}
                <div className="sm:w-1/2 p-5 flex flex-col justify-center space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    {ICONS_MAP[item.iconName] || <Zap className="w-4 h-4 text-[#ff5500]" />}
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase font-heading tracking-wide group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BENEFITS_DATA.slice(2, 5).map((item, idx) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden mb-3 border border-zinc-800">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`${item.image.replace('.webp', '-sm.webp')} 360w, ${item.image} 600w`}
                      sizes="(max-width: 640px) 360px, 300px"
                    />
                    <source
                      type="image/jpeg"
                      srcSet={`${item.image.replace('.webp', '-sm.jpg')} 360w, ${item.image.replace('.webp', '.jpg')} 600w`}
                      sizes="(max-width: 640px) 360px, 300px"
                    />
                    <img
                      src={item.image.replace('.webp', '-sm.jpg')}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-bold text-orange-400 uppercase font-heading border border-zinc-800">
                    0{idx + 3}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-lg bg-zinc-900/90 border border-zinc-700 flex items-center justify-center">
                    {ICONS_MAP[item.iconName]}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1 flex-1">
                  <h3 className="text-base font-bold text-white uppercase font-heading tracking-wide group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs font-medium text-orange-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Incluido en la colección</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
