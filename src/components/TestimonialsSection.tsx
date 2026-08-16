import React from 'react';
import { MessageSquare, Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/salesData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="relative py-20 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            OPINIONES & EXPERIENCIAS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase font-heading tracking-tight leading-tight">
            MIRA LO QUE DICEN QUIENES LO HAN UTILIZADO
          </h2>

          <p className="text-base text-zinc-400 font-normal">
            Comentarios y valoraciones de jugadores y entrenadores que ya integraron los ejercicios.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 p-6 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-zinc-600 group-hover:text-orange-400 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-zinc-300 text-sm sm:text-base italic leading-relaxed font-normal mb-5">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-heading font-bold text-white text-base tracking-wide group-hover:text-orange-400 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-orange-400 font-normal">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
