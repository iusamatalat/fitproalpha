import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from '../../../assets/logo.svg';

const PlatformSection = () => {
  return (
    <section className="bg-[#f4f6ef] pt-16 pb-40 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px] flex flex-col items-center">
        
        {/* Pill Badge */}
        <div className="bg-[#ccff00] text-black font-montserrat font-black text-[10px] md:text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8 shadow-sm">
          Built For Scale
        </div>

        {/* Headline */}
        <h2 className="font-montserrat font-black text-5xl md:text-6xl lg:text-[5.5rem] tracking-tighter uppercase text-black leading-[0.85] mb-8 text-center max-w-5xl">
          The Most Ruthlessly Effective Platform For Rapidly Scaling Businesses On Planet Earth
        </h2>

        {/* Paragraph */}
        <p className="font-inter text-lg md:text-[1.35rem] text-zinc-800 font-medium max-w-4xl text-center leading-relaxed mb-20 px-4">
          There are a lot of so-called "agencies" and "gurus" roaming around the wild wild west that is the web, today. Most of these people are all bark, no bite. All waffle, no syrup. 'Cause marketers lie, but numbers don't. And <span className="underline decoration-2 underline-offset-4 font-bold">we've generated $7.8 billion</span> <span className="font-bold">(with a B)</span> for our clients, in 1067 different industries and niches.
        </p>

        {/* Realistic Apple Devices Graphic Composition */}
        <div className="relative w-full max-w-6xl mx-auto flex items-end justify-center mt-20 pt-10 pb-16 z-10 px-4 md:px-12">
           
           {/* Center piece - TV Monitor */}
           <div className="relative w-[95%] sm:w-[85%] md:w-[75%] lg:w-[68%] mx-auto z-10 my-10 lg:my-0 pb-10">
              {/* TV Screen Unit */}
              <div className="bg-[#1a1a1a] p-1 md:p-1.5 rounded-lg shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-zinc-700/80">
                 <div className="relative aspect-[16/9] bg-black overflow-hidden border border-black group flex flex-col items-center justify-center">
                   <img src={Logo} alt="Fit Pro Alpha Logo" className="w-full h-full object-contain p-8 md:p-16 opacity-90 drop-shadow-[0_0_15px_rgba(204,255,0,0.2)]" />
                   
                   {/* Decorative Video Player Progress Bar */}
                   <div className="absolute bottom-4 md:bottom-8 inset-x-4 md:inset-x-8 flex items-center gap-3 z-20">
                      <div className="flex-1 h-1 md:h-1.5 bg-white/30 rounded-full overflow-hidden">
                         <div className="w-[85%] h-full bg-[#ccff00]"></div>
                      </div>
                      <span className="text-white text-[10px] md:text-sm font-inter font-bold">01:42:28</span>
                   </div>
                   
                   {/* Logo Overlay */}
                   <div className="absolute top-4 md:top-8 left-0 right-0 flex justify-center z-20 pointer-events-none">
                      <span className="text-white font-montserrat font-bold tracking-tight text-xl md:text-3xl lg:text-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        FIT PRO ALPHA
                      </span>
                   </div>
                 </div>
                 
                 {/* TV Bottom Lip (Silver) */}
                 <div className="h-1.5 md:h-2.5 mt-0.5 bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-400 rounded-b-sm shadow-inner relative overflow-hidden flex items-center justify-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-white/50 blur-[1px]"></div>
                 </div>
              </div>

              {/* TV Stand Base */}
              <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center -z-10">
                 {/* Vertical post */}
                 <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-b from-zinc-500 to-zinc-300"></div>
                 {/* Curved wide base */}
                 <div className="w-40 md:w-64 h-2 md:h-3 bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-400 rounded-[100%] shadow-[0_15px_15px_rgba(0,0,0,0.3)] border-b border-zinc-600 block"></div>
              </div>
              
              {/* Apple TV Box */}
              <div className="absolute bottom-0 md:bottom-1 right-[15%] md:right-[20%] z-20 w-12 md:w-20">
                 <div className="h-3 md:h-5 bg-[#0a0a0a] rounded object-cover shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-t border-b border-[#222] border-t-zinc-600/30 flex items-center justify-center relative">
                    <div className="absolute right-1 w-1 h-1 rounded-full bg-white/80 blur-[0.5px]"></div>
                 </div>
              </div>
           </div>
           
           {/* Overlapping Left - Macbook */}
           <div className="absolute left-[-2%] md:left-[2%] lg:left-[5%] bottom-6 md:bottom-8 w-[40%] md:w-[32%] lg:w-[30%] min-w-[150px] z-30 transform hover:-translate-y-2 transition-transform duration-500">
               {/* MacBook Lid */}
               <div className="bg-[#111] rounded-t-lg md:rounded-t-xl p-1 md:p-2 border-[2px] md:border-[3px] border-zinc-300 shadow-[20px_10px_30px_rgba(0,0,0,0.4)] relative">
                  <div className="absolute top-0.5 md:top-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-zinc-800"></div>
                  <div className="relative aspect-[16/10] bg-black overflow-hidden group flex items-center justify-center">
                     <img src={Logo} alt="Fit Pro Alpha Logo" className="w-full h-full object-contain p-4 md:p-8 opacity-80 drop-shadow-[0_0_10px_rgba(204,255,0,0.2)]" />
                     {/* Logo overlay */}
                     <div className="absolute top-2 left-2 md:top-3 md:left-3 z-20">
                        <span className="text-white font-montserrat font-bold tracking-tight text-[8px] md:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          FIT PRO ALPHA
                        </span>
                     </div>
                  </div>
               </div>
               {/* MacBook Base */}
               <div className="relative bg-gradient-to-b from-zinc-300 to-zinc-500 h-1.5 md:h-2.5 rounded-b border border-t-0 border-zinc-500 -mt-0.5 md:-mt-1 shadow-2xl z-10 w-[112%] -left-[6%] flex justify-center">
                  <div className="w-8 md:w-12 h-0.5 md:h-1 bg-zinc-400 rounded-b-md shadow-inner"></div>
               </div>
           </div>

           {/* Overlapping Right - iPad */}
           <div className="absolute right-[12%] md:right-[15%] lg:right-[18%] bottom-4 md:bottom-6 w-[20%] md:w-[16%] lg:w-[14%] min-w-[100px] z-30 transform hover:-translate-y-2 transition-transform duration-500">
               <div className="bg-[#111] p-1.5 md:p-2 rounded-xl md:rounded-[1.5rem] border-2 border-zinc-700 shadow-[15px_20px_40px_rgba(0,0,0,0.4)] relative">
                  <div className="absolute top-0 right-1/2 translate-x-1/2 w-8 h-1.5 md:h-2 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-zinc-800 rounded-full"></div>
                  </div>
                  <div className="relative aspect-[3/4] bg-black rounded-md md:rounded-xl overflow-hidden flex items-center justify-center">
                     <img src={Logo} alt="Fit Pro Alpha Logo" className="w-full h-full object-contain p-4 md:p-6 opacity-90 drop-shadow-[0_0_10px_rgba(204,255,0,0.2)]" />
                     <div className="absolute top-2 left-2 md:top-3 md:left-3 z-20 hidden md:block">
                        <span className="text-white font-montserrat font-bold tracking-tight text-[8px] md:text-[10px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          FIT PRO ALPHA
                        </span>
                     </div>
                  </div>
               </div>
           </div>

           {/* Overlapping Far Right - iPhone */}
           <div className="absolute right-0 md:right-[8%] lg:right-[10%] bottom-0 md:bottom-2 w-[10%] md:w-[8%] lg:w-[7%] min-w-[60px] z-40 transform hover:-translate-y-2 transition-transform duration-500">
               <div className="bg-[#111] p-1 md:p-1.5 rounded-xl md:rounded-2xl border-[1.5px] md:border-2 border-zinc-600 shadow-[10px_20px_30px_rgba(0,0,0,0.5)] relative bg-clip-padding">
                  <div className="relative aspect-[9/19] bg-black rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center">
                     <img src={Logo} alt="Fit Pro Alpha Logo" className="w-full h-full object-contain p-3 md:p-4 opacity-90 drop-shadow-[0_0_10px_rgba(204,255,0,0.2)]" />
                     {/* iPhone Notch */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-2 md:h-3 bg-[#111] rounded-b-[4px] md:rounded-b-[8px] z-10"></div>
                     <div className="absolute top-2 md:top-4 left-0 right-0 flex justify-center z-20">
                        <span className="text-white font-montserrat font-bold tracking-tight text-[5px] md:text-[8px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center pb-2">
                          FIT PRO<br/>ALPHA
                        </span>
                     </div>
                  </div>
               </div>
           </div>

        </div>

        {/* Call to Action Button */}
        <div className="container mx-auto px-6 flex justify-center pb-12 relative z-10 mt-12 md:mt-20">
          <button className="group relative inline-flex items-center justify-center gap-4 bg-[#ccff00] text-black font-montserrat font-black text-xl md:text-2xl uppercase tracking-widest py-6 px-12 md:px-16 overflow-hidden rounded-full shadow-[0_0_40px_rgba(204,255,0,0.4)] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(204,255,0,0.6)] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full blur-xl group-hover:bg-white/40 transition-colors duration-500"></div>
            <span className="relative z-10 flex items-center gap-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
              Hit The Damn Button
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-3 transition-transform duration-300" strokeWidth={3} />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default PlatformSection;
