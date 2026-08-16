import React from 'react';
import { TopUrgencyBanner } from './components/TopUrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BonusesSection } from './components/BonusesSection';
import { OfferSection } from './components/OfferSection';
import { MaterialPreviewSection } from './components/MaterialPreviewSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { StickyMobileCta } from './components/StickyMobileCta';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-[#ff5500] selection:text-black">
      {/* Faixa Superior com Cronômetro e Urgência */}
      <TopUrgencyBanner />

      {/* Main Page Flow */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1ª Sección — Hero */}
        <HeroSection />

        {/* 2ª Sección — ¿Qué vas a recibir? */}
        <WhatYouGetSection />

        {/* 3ª Sección — Beneficios */}
        <BenefitsSection />

        {/* 4ª Sección — Bonos */}
        <BonusesSection />

        {/* 5ª Sección — Oferta con temporizador */}
        <OfferSection />

        {/* 6ª Sección — Muestra del material (Carrusel 5 imágenes) */}
        <MaterialPreviewSection />

        {/* 7ª Sección — Testimonios */}
        <TestimonialsSection />

        {/* 8ª Sección — Garantía de 7 días */}
        <GuaranteeSection />

        {/* 9ª Sección — Preguntas frecuentes */}
        <FaqSection />
      </main>

      {/* 10ª Sección — Footer */}
      <FooterSection />

      {/* Persistent Floating Sticky CTA Bar */}
      <StickyMobileCta />
    </div>
  );
}
