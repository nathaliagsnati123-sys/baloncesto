import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative bg-[#060608] border-t border-zinc-800/80 py-6 sm:py-8 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
        
        {/* Brand mark */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#ff5500] flex items-center justify-center text-black font-black text-xs">
            🏀
          </div>
          <span className="font-heading font-extrabold text-white text-base sm:text-lg tracking-wider">
            + 1.000 EJERCICIOS DE BALONCESTO
          </span>
        </div>

        {/* Copyright notice */}
        <div className="text-xs text-zinc-400 font-medium">
          <p>© 2026 Entrenamiento de baloncesto. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};
