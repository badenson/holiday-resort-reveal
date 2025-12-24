
import React from 'react';

const NewYearAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-32 sm:h-56 md:h-72 rounded-xl overflow-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b] border border-white/20 shadow-inner flex items-end justify-center pb-0">
      {/* Stars and Moon */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 right-8 w-6 h-6 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-4 right-8 w-4 h-4 bg-white/20 rounded-full" />
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* NYC Skyline Silhouettes - Multi-layered and more detailed */}
      <div className="absolute bottom-0 w-full flex items-end justify-between px-1 sm:px-4 z-10">
        
        {/* Far Left: One World Trade Style */}
        <div className="flex flex-col items-center mb-0 opacity-60">
          <div className="w-0.5 h-8 sm:h-16 bg-slate-900" />
          <div className="w-4 sm:w-8 h-20 sm:h-40 bg-slate-900 clip-path-tower relative">
             <div className="absolute inset-0 p-1 flex flex-col gap-1 overflow-hidden opacity-30">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex gap-0.5">
                    <div className="w-full h-0.5 bg-yellow-500/40" />
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Chrysler Building Style */}
        <div className="flex flex-col items-center mb-0 translate-x-1 sm:translate-x-2 opacity-80">
          <div className="w-0.5 h-6 sm:h-12 bg-slate-900" />
          <div className="w-4 sm:w-8 h-2 sm:h-4 bg-slate-900 rounded-t-full" />
          <div className="w-6 sm:w-12 h-2 sm:h-4 bg-slate-900 rounded-t-full" />
          <div className="w-8 sm:w-16 h-16 sm:h-32 bg-slate-900 relative">
             <div className="absolute inset-0 p-1 grid grid-cols-3 gap-0.5 opacity-40">
                {[...Array(18)].map((_, i) => (
                  <div key={i} className={`h-0.5 rounded-sm ${Math.random() > 0.4 ? 'bg-yellow-200/50' : 'bg-transparent'}`} />
                ))}
              </div>
          </div>
        </div>

        {/* Mid-Ground Buildings */}
        <div className="w-10 sm:w-20 h-12 sm:h-24 bg-slate-950 border-t border-slate-800 opacity-90 mx-[-4px] z-20" />

        {/* Empire State Building - Prominent Center-Right */}
        <div className="flex flex-col items-center mb-0 -translate-x-1 sm:-translate-x-4 z-10 opacity-90">
          <div className="w-0.5 sm:w-1 h-12 sm:h-24 bg-slate-900" />
          <div className="w-2 sm:w-4 h-3 sm:h-6 bg-slate-900" />
          <div className="w-5 sm:w-10 h-6 sm:h-12 bg-slate-900" />
          <div className="w-8 sm:w-16 h-24 sm:h-48 bg-slate-900 border-x border-slate-800 relative">
            <div className="absolute inset-0 p-1 sm:p-2 grid grid-cols-4 gap-1 overflow-hidden">
               {[...Array(40)].map((_, i) => (
                  <div key={i} className={`h-0.5 sm:h-1 rounded-sm ${Math.random() > 0.6 ? 'bg-yellow-400/60' : 'bg-transparent'}`} />
                ))}
            </div>
          </div>
        </div>

        {/* Right Side Cluster */}
        <div className="flex items-end mb-0 opacity-70">
           <div className="w-6 sm:w-12 h-18 sm:h-36 bg-slate-950 border-t border-slate-800" />
           <div className="w-8 sm:w-14 h-14 sm:h-28 bg-slate-900 relative">
             <div className="absolute inset-0 p-1 grid grid-cols-2 gap-1">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`h-1 ${Math.random() > 0.7 ? 'bg-yellow-500/30' : 'bg-transparent'}`} />
                ))}
              </div>
           </div>
        </div>
      </div>

      {/* Snowy Ground */}
      <div className="absolute bottom-0 w-full h-6 sm:h-10 bg-white rounded-t-[50%] blur-[1px] opacity-95 z-30" />

      {/* Rockefeller Center Style Tree - Foreground Star of the scene */}
      <div className="relative z-40 flex flex-col items-center scale-[0.6] sm:scale-90 md:scale-110 origin-bottom mb-1 sm:mb-2">
        {/* Large Star */}
        <div className="text-yellow-200 text-3xl drop-shadow-[0_0_15px_rgba(253,224,71,1)] animate-pulse z-50 mb-[-14px]">★</div>
        
        {/* Tree Layers with Twinkling Multi-colored Lights */}
        <div className="w-0 h-0 border-l-[30px] sm:border-l-[40px] border-l-transparent border-r-[30px] sm:border-r-[40px] border-r-transparent border-b-[40px] sm:border-b-[50px] border-b-emerald-800 drop-shadow-lg relative">
            <div className="absolute top-[18px] left-[-8px] w-2 h-2 bg-red-500 rounded-full animate-twinkle" style={{animationDelay: '0.1s'}} />
            <div className="absolute top-[22px] right-[-8px] w-2 h-2 bg-blue-400 rounded-full animate-twinkle" style={{animationDelay: '0.6s'}} />
            <div className="absolute top-[10px] left-[0px] w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{animationDelay: '1.2s'}} />
        </div>
        <div className="w-0 h-0 border-l-[45px] sm:border-l-[55px] border-l-transparent border-r-[45px] sm:border-r-[55px] border-r-transparent border-b-[50px] sm:border-b-[60px] border-b-emerald-900 mt-[-30px] drop-shadow-xl relative">
            <div className="absolute top-[20px] left-[-22px] w-2 h-2 bg-yellow-300 rounded-full animate-twinkle" style={{animationDelay: '0.3s'}} />
            <div className="absolute top-[30px] right-[-20px] w-2 h-2 bg-purple-400 rounded-full animate-twinkle" style={{animationDelay: '0.8s'}} />
            <div className="absolute top-[15px] left-[5px] w-2 h-2 bg-orange-400 rounded-full animate-twinkle" style={{animationDelay: '1.4s'}} />
        </div>
        <div className="w-0 h-0 border-l-[60px] sm:border-l-[75px] border-l-transparent border-r-[60px] sm:border-r-[75px] border-r-transparent border-b-[60px] sm:border-b-[75px] border-b-[#064e3b] mt-[-40px] drop-shadow-2xl relative">
            <div className="absolute top-[35px] left-[-35px] w-2.5 h-2.5 bg-blue-500 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}} />
            <div className="absolute top-[45px] right-[-30px] w-2.5 h-2.5 bg-red-400 rounded-full animate-twinkle" style={{animationDelay: '1.1s'}} />
            <div className="absolute top-[25px] left-[15px] w-2 h-2 bg-green-300 rounded-full animate-twinkle" style={{animationDelay: '1.7s'}} />
            <div className="absolute top-[50px] left-[-10px] w-2 h-2 bg-yellow-200 rounded-full animate-twinkle" style={{animationDelay: '2s'}} />
        </div>
        
        {/* Trunk */}
        <div className="w-8 sm:w-10 h-4 sm:h-6 bg-[#451a03] rounded-sm" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); box-shadow: 0 0 2px currentColor; }
          50% { opacity: 1; transform: scale(1.3); box-shadow: 0 0 10px currentColor; }
        }
        .animate-twinkle {
          animation: twinkle 2.5s infinite ease-in-out;
        }
        .clip-path-tower {
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        }
      `}} />
    </div>
  );
};

export default NewYearAnimation;
