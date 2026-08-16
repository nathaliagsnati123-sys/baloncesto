import React, { useState } from 'react';
import { X, Shield, FileText, Mail } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="relative bg-[#060608] border-t border-zinc-800/80 py-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Brand mark */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#ff5500] flex items-center justify-center text-black font-black text-sm">
            🏀
          </div>
          <span className="font-heading font-extrabold text-white text-lg tracking-wider">
            + 1.000 EJERCICIOS DE BALONCESTO
          </span>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-zinc-400">
          <button
            onClick={() => setActiveModal('terms')}
            className="hover:text-orange-400 transition-colors focus:outline-none"
          >
            Términos y condiciones
          </button>
          <span className="text-zinc-700">|</span>
          <button
            onClick={() => setActiveModal('privacy')}
            className="hover:text-orange-400 transition-colors focus:outline-none"
          >
            Política de privacidad
          </button>
          <span className="text-zinc-700">|</span>
          <button
            onClick={() => setActiveModal('contact')}
            className="hover:text-orange-400 transition-colors focus:outline-none"
          >
            Contacto
          </button>
        </div>

        {/* Copyright notice */}
        <div className="text-xs text-zinc-400 font-medium">
          <p>© 2026 Entrenamiento de baloncesto. Todos los derechos reservados.</p>
        </div>

        {/* Legal Disclaimer */}
        <p className="text-[11px] text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Este sitio no está afiliado a Facebook, Instagram, Google ni a ninguna entidad de la NBA. Los resultados pueden variar según la constancia y aplicación práctica de cada jugador o entrenador.
        </p>

      </div>

      {/* Modal Dialogs for Legal & Contact Information */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#121118] border border-orange-500/40 p-6 sm:p-8 text-left shadow-2xl text-zinc-300 max-h-[85vh] overflow-y-auto">
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg bg-zinc-800/80"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-orange-400 font-heading text-xl font-bold">
                  <FileText className="w-5 h-5" />
                  <h3>Términos y Condiciones</h3>
                </div>
                <p className="text-xs leading-relaxed text-zinc-300">
                  Al adquirir este material digital, el comprador recibe una licencia personal e intransferible para acceder a la colección de 1.000 ejercicios de baloncesto y sus bonos correspondientes.
                </p>
                <p className="text-xs leading-relaxed text-zinc-300">
                  Queda prohibida la reventa, redistribución o copia no autorizada del contenido sin el consentimiento expreso del titular de los derechos de autor.
                </p>
                <p className="text-xs leading-relaxed text-zinc-300">
                  El período de garantía de 7 días se rige conforme a las políticas oficiales de la plataforma de pago segura.
                </p>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-orange-400 font-heading text-xl font-bold">
                  <Shield className="w-5 h-5" />
                  <h3>Política de Privacidad</h3>
                </div>
                <p className="text-xs leading-relaxed text-zinc-300">
                  Valoramos y respetamos tu privacidad. Todos los datos de compra y contacto son procesados de forma encriptada y segura mediante protocolos SSL certificados.
                </p>
                <p className="text-xs leading-relaxed text-zinc-300">
                  No compartimos ni vendemos información personal a terceros bajo ninguna circunstancia.
                </p>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-orange-400 font-heading text-xl font-bold">
                  <Mail className="w-5 h-5" />
                  <h3>Atención y Soporte</h3>
                </div>
                <p className="text-xs leading-relaxed text-zinc-300">
                  Si tienes consultas sobre tu acceso, los materiales o la garantía, nuestro equipo de soporte está a tu disposición para ayudarte.
                </p>
                <div className="p-3.5 rounded-xl bg-black/60 border border-orange-500/30 text-xs font-semibold text-orange-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>soporte@entrenamientobaloncesto.com</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Tiempo estimado de respuesta: menos de 24 horas hábiles.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-xl bg-orange-500 text-black font-bold text-xs uppercase font-heading"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};
