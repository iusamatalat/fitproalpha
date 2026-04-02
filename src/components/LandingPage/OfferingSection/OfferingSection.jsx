import React from 'react';
import { Link } from 'react-router-dom';
import wolfCover from '../../../assets/wolf_cover.png';

const OfferingSection = () => {
  return (
    <section className="relative w-full bg-[#1a1a1a] pt-4 pb-32 z-10 overflow-hidden">
      
      {/* Lively Cinematic Background Photo */}
      <div className="absolute inset-x-0 -top-[10%] -bottom-[10%] z-0 pointer-events-none">
         {/* Using an intense dark crossfit gym background */}
         <img 
           src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
           alt="Alpha Gym Background" 
           className="w-full h-full object-cover opacity-40 grayscale mix-blend-overlay animate-[kenburns_30s_infinite_alternate]"
         />
         {/* Vignette mask to fade out edges mathematically preventing sharp cutoffs */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#242424] via-[#242424]/80 to-[#111111]" />
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#242424_100%)] opacity-80" />
      </div>

      <div className="container mx-auto px-6 max-w-[1240px] relative z-10">

        {/* Section Header */}
        <div className="w-full flex justify-center items-center gap-4 md:gap-6 mb-16 md:mb-24 mt-8">
           <span className="text-white font-montserrat font-black uppercase tracking-[0.25em] text-2xl md:text-3xl lg:text-5xl">
             OUR
           </span>
           <span className="bg-brand-green text-black font-montserrat font-black uppercase tracking-[0.25em] text-2xl md:text-3xl lg:text-5xl px-4 md:px-6 py-2 md:py-3 shadow-lg">
             OFFERING
           </span>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10 xl:gap-14 h-full">

          {/* Card 1: Free Community */}
          <div className="relative bg-[#333333] rounded-2xl pb-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-3 border-t-[8px] border-cyan-400 group flex flex-col h-full overflow-hidden">

            {/* Cover Photo: Cyan */}
            <div className="relative w-full h-48 lg:h-56 overflow-hidden">
              <img src={wolfCover} alt="Wolf Cover" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/50 to-[#333333]/10" />
            </div>

            {/* Content Area */}
            <div className="px-6 lg:px-8 mt-6 flex flex-col flex-1 relative z-10">
              <p className="text-cyan-400 font-montserrat font-bold uppercase tracking-[0.1em] lg:tracking-[0.15em] text-[10px] lg:text-xs mb-3">
                Join the movement
              </p>

              <div className="min-h-[110px] md:min-h-[130px] lg:min-h-[160px] flex items-center justify-center mb-4 md:mb-6">
                <h4 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] tracking-tight sm:tracking-tighter uppercase text-white drop-shadow-md leading-[1.1] lg:leading-[1.05]">
                  <span className="block">Fit Pro</span>
                  <span className="block">Alpha</span>
                  <span className="block">Tribe</span>
                </h4>
              </div>


              <Link to="/free-community" className="mt-auto inline-flex items-center justify-center bg-transparent border-[3px] border-cyan-400 text-cyan-400 font-inter font-black uppercase tracking-widest text-[10px] lg:text-xs px-6 py-3.5 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300 w-full">
                Join For Free
              </Link>
            </div>
          </div>

          {/* Card 2: Paid Community */}
          <div className="relative bg-[#333333] rounded-2xl pb-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-3 border-t-[8px] border-[#9d4edd] group flex flex-col h-full overflow-hidden">

            {/* Cover Photo: Purple */}
            <div className="relative w-full h-40 sm:h-48 lg:h-56 overflow-hidden">
              <img src={wolfCover} alt="Wolf Cover" className="w-full h-full object-cover opacity-80 hue-rotate-[90deg] saturate-150 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/50 to-[#333333]/10" />
            </div>

            {/* Content Area */}
            <div className="px-5 sm:px-6 lg:px-8 mt-6 flex flex-col flex-1 relative z-10">
              <p className="text-[#9d4edd] font-montserrat font-bold uppercase tracking-[0.1em] lg:tracking-[0.15em] text-[9px] sm:text-[10px] lg:text-xs mb-3">
                Unlock standard systems
              </p>

              <div className="min-h-[110px] md:min-h-[130px] lg:min-h-[160px] flex items-center justify-center mb-4 md:mb-6">
                <h4 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] tracking-tight sm:tracking-tighter uppercase text-white drop-shadow-md leading-[1.1] lg:leading-[1.05]">
                  <span className="block">Fit Pro</span>
                  <span className="block">Limitless</span>
                  <span className="block">Alpha</span>
                </h4>
              </div>

            

              <Link to="/premium-community" className="mt-auto inline-flex items-center justify-center bg-transparent border-[3px] border-[#9d4edd] text-[#9d4edd] font-inter font-black uppercase tracking-widest text-[10px] lg:text-xs px-6 py-3.5 rounded-full hover:bg-[#9d4edd] hover:text-white transition-colors duration-300 w-full">
                Join Paid Tier
              </Link>
            </div>
          </div>

          {/* Card 3: Premium Community */}
          <div className="relative bg-[#333333] rounded-2xl pb-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-3 border-t-[8px] border-brand-green group flex flex-col h-full overflow-hidden">

            {/* Cover Photo: Green */}
            <div className="relative w-full h-40 sm:h-48 lg:h-56 overflow-hidden">
              <img src={wolfCover} alt="Wolf Cover" className="w-full h-full object-cover opacity-80 hue-rotate-[-60deg] saturate-150 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/50 to-[#333333]/10" />
            </div>

            {/* Content Area */}
            <div className="px-5 sm:px-6 lg:px-8 mt-6 flex flex-col flex-1 relative z-10">
              <p className="text-brand-green font-montserrat font-bold uppercase tracking-[0.1em] lg:tracking-[0.15em] text-[9px] sm:text-[10px] lg:text-xs mb-3">
                Hire us to do it for you
              </p>

              <div className="min-h-[110px] md:min-h-[130px] lg:min-h-[160px] flex items-center justify-center mb-4 md:mb-6">
                <h4 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] tracking-tight sm:tracking-tighter uppercase text-white drop-shadow-md leading-[1.1] lg:leading-[1.05]">
                  <span className="block">Fit Pro</span>
                  <span className="block">Alpha</span>
                  <span className="block">Premium</span>
                  <span className="block">Community</span>
                  </h4>
              </div>

              

              <Link to="/alpha-elite" className="mt-auto inline-flex items-center justify-center bg-transparent border-[3px] border-brand-green text-brand-green font-inter font-black uppercase tracking-widest text-[10px] lg:text-xs px-6 py-3.5 rounded-full hover:bg-brand-green hover:text-black transition-colors duration-300 w-full">
                Apply For Premium
              </Link>
            </div>
          </div>

        </div>
      </div>
      {/* Massive dynamic spacer allowing the PlaybookBorder's negative margin to consume this space natively */}
      <div className="h-[60px] md:h-[120px] lg:h-[180px] w-full bg-transparent pointer-events-none mt-16" />
    </section>
  );
};

export default OfferingSection;
