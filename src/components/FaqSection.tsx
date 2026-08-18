import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Zap } from 'lucide-react';
import { FAQ_DATA, CHECKOUT_URL, PRICE_TEXT } from '../data/salesData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Closed by default on load

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-10 sm:py-14 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            RESOLVEMOS TUS DUDAS
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase font-heading tracking-tight leading-tight">
            PREGUNTAS FRECUENTES
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal">
            Todo lo que necesitas saber antes de acceder a la colección completa.
          </p>
        </div>

        {/* Modern Clean Accordion List */}
        <div className="space-y-2.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-zinc-900/90 border-zinc-700'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white font-heading tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#ff5500] text-black' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-4 sm:px-4 pt-1 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed border-t border-zinc-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Purchase CTA below FAQ */}
        <div className="mt-6 sm:mt-8 text-center space-y-2.5 max-w-md mx-auto">
          <a
            href={CHECKOUT_URL}
            id="faq-cta-btn"
            className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base sm:text-lg font-extrabold uppercase font-heading tracking-wide text-black bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all shadow-lg shadow-emerald-950/50"
          >
            <span>QUIERO ACCEDER POR {PRICE_TEXT} 🏀</span>
            <Zap className="w-5 h-5 fill-black group-hover:translate-x-0.5 transition-transform" />
          </a>

          <div className="flex items-center justify-center gap-3 text-xs text-zinc-400 font-medium pt-0.5">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-zinc-300" />
              Acceso inmediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
              Garantía de 7 días
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
