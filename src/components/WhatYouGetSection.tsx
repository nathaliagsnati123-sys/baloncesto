import React from 'react';
import { Target } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface VisualItem {
  title: string;
  subtitle: string;
  badge: string;
  span?: string;
  imgData: {
    webpSm?: string;
    webp: string;
    jpgSm?: string;
    jpg: string;
  };
}

const VISUAL_GALLERY: VisualItem[] = [
  {
    title: 'Entrenamientos en Grupo & Táctica',
    subtitle: 'Dinámicas colectivas y sistemas de juego',
    badge: 'Trabajo en Equipo',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    imgData: IMAGES.whatYouGet.groupTactics,
  },
  {
    title: 'Dribbling & Manejo de Balón',
    subtitle: 'Control explosivo con ambas manos',
    badge: 'Manejo',
    span: 'col-span-1',
    imgData: IMAGES.benefits[1],
  },
  {
    title: 'Mecánica de Tiro a Canasta',
    subtitle: 'Tiros en suspensión, catch & shoot y tiro libre',
    badge: 'Tiro',
    span: 'col-span-1',
    imgData: IMAGES.benefits[2],
  },
  {
    title: 'Entrenadores Dirigiendo Sesiones',
    subtitle: 'Metodología clara y organización en cancha',
    badge: 'Dirección',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    imgData: IMAGES.benefits[3],
  },
  {
    title: 'Pases & Visión de Cancha',
    subtitle: 'Precisión y velocidad de entrega en carrera',
    badge: 'Pases',
    span: 'col-span-1',
    imgData: IMAGES.benefits[4],
  },
  {
    title: 'Entrenamientos Individuales',
    subtitle: 'Perfeccionamiento técnico personal en cualquier momento',
    badge: 'Individual',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    imgData: {
      webp: IMAGES.whatYouGet.individualTactics.webp,
      jpg: IMAGES.whatYouGet.individualTactics.jpg,
      webpSm: IMAGES.whatYouGet.individualTactics.webp,
      jpgSm: IMAGES.whatYouGet.individualTactics.jpg,
    },
  },
];

export const WhatYouGetSection: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-14 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            CONTENIDO INTEGRAL EN PISTA
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase font-heading tracking-tight leading-tight">
            TODO LO QUE <span className="text-[#ff5500]">NECESITAS</span> PARA ENTRENAR MEJOR
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            Imagina tener una enorme colección de ejercicios de baloncesto disponible para consultar cada vez que quieras entrenar, practicar o preparar una nueva sesión.
          </p>
        </div>

        {/* Visual Masonry Composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
          {VISUAL_GALLERY.map((item, index) => {
            const smWebp = item.imgData.webpSm || item.imgData.webp;
            const lgWebp = item.imgData.webp;
            const smJpg = item.imgData.jpgSm || item.imgData.jpg;
            const lgJpg = item.imgData.jpg;
            return (
              <div
                key={index}
                className={`group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 ${item.span || 'col-span-1'} h-48 sm:h-56`}
              >
                {/* Image */}
                <img
                  src={lgJpg}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
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
            );
          })}
        </div>

      </div>
    </section>
  );
};
