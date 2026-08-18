import React, { useEffect, useState } from 'react';
import { Clock, Flame } from 'lucide-react';
import { PRICE_TEXT } from '../data/salesData';

export const TopUrgencyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 14 * 60 + 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <div
      id="top-urgency-banner"
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white shadow-md shadow-red-950/30 border-b border-red-500/40 py-1 sm:py-1.5 px-3"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center">
        {/* Urgency & Offer Message */}
        <div className="flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 fill-white text-white animate-pulse" />
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white font-heading whitespace-nowrap">
            OFERTA POR TIEMPO LIMITADO
          </span>
        </div>

        {/* Live Countdown Timer */}
        <div className="flex items-center gap-1 bg-black/35 border border-white/20 rounded px-2 py-0.5 text-white">
          <Clock className="w-3 h-3 text-red-200" />
          <div className="flex items-center gap-0.5 font-mono font-bold text-[11px] sm:text-xs text-white">
            <span className="bg-black/50 px-1 py-0.2 rounded text-white">
              {formattedHours}
            </span>
            <span className="text-red-200 animate-pulse">:</span>
            <span className="bg-black/50 px-1 py-0.2 rounded text-white">
              {formattedMinutes}
            </span>
            <span className="text-red-200 animate-pulse">:</span>
            <span className="bg-black/50 px-1 py-0.2 rounded text-white">
              {formattedSeconds}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
