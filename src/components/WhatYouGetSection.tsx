import React from 'react';
import { Flame, Layers, Sparkles, Target, Zap } from 'lucide-react';
import { CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

interface VisualItem {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  span?: string;
}

const VISUAL_GALLERY: VisualItem[] = [
  {
    title: 'Entrenamientos en Grupo & Táctica',
    subtitle: 'Dinámicas colectivas y sistemas de juego',
    image: 'https://i.ibb.co/wNWMZPKg/Untitled-design-5.png',
    badge: 'Trabajo en Equipo',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    title: 'Dribbling & Manejo de Balón',
    subtitle: 'Control explosivo con ambas manos',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    badge: 'Manejo',
    span: 'col-span-1',
  },
  {
    title: 'Mecánica de Tiro a Canasta',
    subtitle: 'Tiros en suspensión, catch & shoot y tiro libre',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80',
    badge: 'Tiro',
    span: 'col-span-1',
  },
  {
    title: 'Entrenadores Dirigiendo Sesiones',
    subtitle: 'Metodología clara y organización en cancha',
    image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=800&q=80',
    badge: 'Dirección',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    title: 'Pases & Visión de Cancha',
    subtitle: 'Precisión y velocidad de entrega en carrera',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&w=800&q=80',
    badge: 'Pases',
    span: 'col-span-1',
  },
  {
    title: 'Entrenamientos Individuales',
    subtitle: 'Perfeccionamiento técnico personal en cualquier momento',
    image: 'https://i.ibb.co/Jw05RYNL/Untitled-design-6.png',
    badge: 'Individual',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
];

export const WhatYouGetSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            CONTENIDO INTEGRAL EN PISTA
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase font-heading tracking-tight leading-tight">
            TODO LO QUE <span className="text-[#ff5500]">NECESITAS</span> PARA ENTRENAR MEJOR
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Imagina tener una enorme colección de ejercicios de baloncesto disponible para consultar cada vez que quieras entrenar, practicar o preparar una nueva sesión.
          </p>

          <p className="text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
            Con + 1.000 ejercicios tendrás opciones completas para variar tus entrenamientos y evitar repetir siempre las mismas rutinas.
          </p>
        </div>

        {/* Visual Masonry Composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
          {VISUAL_GALLERY.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 ${item.span || 'col-span-1'} h-64 sm:h-72`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">
                
                {/* Top Badge */}
                <div className="flex justify-start">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-orange-400 border border-zinc-800">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-normal">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white uppercase font-heading tracking-wide">
              + 1.000 EJERCICIOS DE BALONCESTO. UNA GRAN COLECCIÓN PARA TUS ENTRENAMIENTOS.
            </h3>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
              Todo estructurado y listo para que aproveches cada minuto en la cancha sin improvisar.
            </p>

            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold uppercase font-heading tracking-wider text-black bg-[#ff5500] hover:bg-[#ff661a] active:scale-95 transition-all shadow-md"
              >
                <span>ACCEDER A LA COLECCIÓN POR {PRICE_TEXT} 🏀</span>
                <Zap className="w-4 h-4 fill-black" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
