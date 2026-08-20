import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { PREVIEW_CAROUSEL_SLIDES } from '../data/salesData';

export const MaterialPreviewSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = PREVIEW_CAROUSEL_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Optional auto-advance every 5 seconds
  useEffect(() => {
    // Pre-cache all slide images for instant navigation
    PREVIEW_CAROUSEL_SLIDES.forEach((slide) => {
      const img1 = new Image();
      img1.src = slide.image;
      const img2 = new Image();
      img2.src = slide.image.replace('.webp', '.jpg');
    });

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const activeSlide = PREVIEW_CAROUSEL_SLIDES[currentIndex];

  return (
    <section id="muestra" className="relative py-10 sm:py-14 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5" />
            VISTA PREVIA VISUAL
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase font-heading tracking-tight">
            MIRA LO QUE TE ESPERA
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            Descubre algunas imágenes y ejemplos del contenido que encontrarás al acceder.
          </p>
        </div>

        {/* Interactive Carousel Container */}
        <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl">
          
          {/* Main Slide Display Area */}
          <div className="relative h-[290px] sm:h-[360px] md:h-[400px] w-full overflow-hidden">
            <picture key={activeSlide.id}>
              <source
                type="image/webp"
                srcSet={activeSlide.image}
              />
              <source
                type="image/jpeg"
                srcSet={activeSlide.image.replace('.webp', '.jpg')}
              />
              <img
                src={activeSlide.image.replace('.webp', '.jpg')}
                alt={activeSlide.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-all duration-500 ease-out"
              />
            </picture>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/80 via-transparent to-transparent hidden md:block" />

            {/* Slide Information Box */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 md:max-w-xl flex flex-col justify-end text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#ff5500] text-black text-[11px] font-bold uppercase font-heading tracking-wider">
                  EJEMPLO 0{activeSlide.id} / 0{totalSlides}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-orange-400 text-[11px] font-medium border border-zinc-800 uppercase">
                  {activeSlide.category}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white uppercase font-heading tracking-wide mb-1">
                {activeSlide.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                {activeSlide.description}
              </p>
            </div>

            {/* Left & Right Arrow Controls */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Anterior imagen"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-black/75 hover:bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center transition-all backdrop-blur-md shadow-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Siguiente imagen"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-black/75 hover:bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center transition-all backdrop-blur-md shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Bottom Thumbnail / Dot Navigation */}
          <div className="bg-zinc-950 p-4 border-t border-zinc-800 flex items-center justify-between gap-4 flex-wrap">
            
            {/* Slide Count Indicator */}
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Vista <span className="text-orange-400 font-bold">{currentIndex + 1}</span> de {totalSlides}
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {PREVIEW_CAROUSEL_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir a imagen ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-[#ff5500]'
                      : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>

            {/* Quick Next Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-orange-400 transition-colors"
              >
                Siguiente
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
