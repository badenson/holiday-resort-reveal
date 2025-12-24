
import React, { useEffect, useState } from 'react';


const HolidayCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    // Initial fade in for the card
    const fadeInTimer = setTimeout(() => setIsVisible(true), 100);
    // Reveal gift content
    const giftTimer = setTimeout(() => setShowGift(true), 1500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(giftTimer);
    };
  }, []);

  return (
    <div
      className={`
        relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-md 
        rounded-3xl border border-white/20 shadow-2xl p-4 sm:p-6 md:p-8 text-center 
        transition-all duration-[1500ms] ease-out transform
        max-h-[95vh] flex flex-col justify-between overflow-y-auto
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}
      `}
    >
      <div className="flex-1 flex flex-col justify-start">
        {/* Holiday Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white mt-0 mb-1 animate-glow">
          Happy Holidays
        </h1>

        {/* Names List */}
        <div className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-white/80 uppercase mb-3">
          Jenna • Alonna • Arionna • Amiyah
        </div>



        {/* Animated Visual (Tropical) */}
        <div className="mb-4 overflow-hidden rounded-xl shadow-lg border border-white/10 relative h-32 sm:h-56 md:h-72">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200"
            alt="Tropical Beach Resort"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes kenBurns {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
            .animate-ken-burns {
              animation: kenBurns 20s ease-in-out infinite;
            }
          `}} />
        </div>

        {/* Animated Gift Reveal */}
        <div
          className={`
            transition-all duration-[1500ms] ease-in-out
            ${showGift ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <p className="text-sm sm:text-base md:text-xl text-white mb-4 leading-snug font-light italic">
            This season comes with sunshine, room keys,
            and lots of fun and adventure.
          </p>

          <div className="bg-white/15 p-3 sm:p-5 rounded-2xl mb-4 border border-white/20 shadow-xl scale-100 hover:scale-[1.02] transition-transform">
            <div className="text-base sm:text-xl md:text-2xl text-white leading-tight flex items-center justify-center gap-2">
              <span className="text-2xl">🎁</span>
              <span><span className="text-yellow-300 font-bold">A 7-Day Stay</span> at a <span className="text-yellow-300 font-bold">Hilton Resort</span></span>
            </div>
          </div>

          <div className="text-xs sm:text-sm md:text-lg text-white/90 mb-4 bg-black/20 py-2 rounded-full inline-block px-6">
            Choose your Hilton dream location &bull; Travel anytime in <span className="text-yellow-300 font-bold">2026</span>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <footer className="mt-2 pt-3 border-t border-white/10 text-[10px] sm:text-xs text-white/50 leading-tight italic">
        May your holidays be warm, your bags be packed,
        and your only decision be beach or pool.
      </footer>
    </div>
  );
};

export default HolidayCard;
