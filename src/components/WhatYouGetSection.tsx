import React from 'react';
import { 
  Activity, 
  Crosshair, 
  Dumbbell, 
  Layers, 
  MoveRight, 
  ShieldAlert, 
  Sparkles, 
  Target, 
  Users, 
  Zap 
} from 'lucide-react';

interface CategoryItem {
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  drillsCount: string;
  span?: string;
  accentColor: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    title: 'Entrenamientos en Grupo & Táctica Colectiva',
    subtitle: 'Dinámicas de ataque organizado, espaciado, transiciones rápidas y jugadas de pizarra.',
    badge: 'Trabajo en Equipo',
    icon: <Users className="w-6 h-6 text-orange-400" />,
    drillsCount: '+250 Ejercicios',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    accentColor: 'border-orange-500/30',
  },
  {
    title: 'Dribbling & Manejo de Balón',
    subtitle: 'Control explosivo con ambas manos, cambios de ritmo y crossovers ante presión.',
    badge: 'Manejo',
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    drillsCount: '+180 Ejercicios',
    span: 'col-span-1',
    accentColor: 'border-amber-500/30',
  },
  {
    title: 'Mecánica & Efectividad de Tiro',
    subtitle: 'Tiros en suspensión, catch & shoot, tiro libre y salida rápida tras bloqueo.',
    badge: 'Tiro',
    icon: <Crosshair className="w-6 h-6 text-emerald-400" />,
    drillsCount: '+220 Ejercicios',
    span: 'col-span-1',
    accentColor: 'border-emerald-500/30',
  },
  {
    title: 'Metodología & Dirección de Sesiones',
    subtitle: 'Planificación de entrenamientos, optimización de tiempos en pista y corrección técnica.',
    badge: 'Dirección',
    icon: <Target className="w-6 h-6 text-blue-400" />,
    drillsCount: '+150 Ejercicios',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    accentColor: 'border-blue-500/30',
  },
  {
    title: 'Pases & Visión de Cancha',
    subtitle: 'Precisión milimétrica, pases picados, de pecho, béisbol y lectura defensiva.',
    badge: 'Pases',
    icon: <Activity className="w-6 h-6 text-purple-400" />,
    drillsCount: '+120 Ejercicios',
    span: 'col-span-1',
    accentColor: 'border-purple-500/30',
  },
  {
    title: 'Entrenamientos Individuales & Técnica',
    subtitle: 'Rutinas de perfeccionamiento personal para entrenar solo en cualquier cancha.',
    badge: 'Individual',
    icon: <Dumbbell className="w-6 h-6 text-orange-400" />,
    drillsCount: '+200 Ejercicios',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    accentColor: 'border-orange-500/30',
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

        {/* Category Cards Composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
          {CATEGORIES.map((item, index) => {
            return (
              <div
                key={index}
                className={`group relative rounded-2xl bg-zinc-900/90 border ${item.accentColor} hover:border-orange-500/60 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:bg-zinc-900 shadow-lg ${item.span || 'col-span-1'}`}
              >
                <div>
                  {/* Top Badges & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/80 text-orange-400 border border-zinc-800 font-heading">
                        {item.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold uppercase bg-zinc-800 text-zinc-300 border border-zinc-700">
                        {item.drillsCount}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading uppercase tracking-wide group-hover:text-orange-400 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-medium">Formato Digital Interactivo</span>
                  <span className="text-orange-400 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Ver Módulos <MoveRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

