import React from 'react';
import logoUrl from '../../assets/logo.svg';

const OfferingSection = () => {
  return (
    <section className="relative w-full bg-[#242424] pt-4 pb-32 z-10">
      <div className="container mx-auto px-6 max-w-[1240px]">

        {/* Section Header */}
        <div className="w-full flex justify-center items-center gap-4 md:gap-6 mb-20 md:mb-24 mt-8">
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
          <div className="relative bg-[#333333] rounded-2xl pt-20 lg:pt-24 pb-10 px-6 lg:px-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-3 border-t-[8px] border-[#333333] mt-16 md:mt-0 group flex flex-col h-full">

            {/* Massive Circular Icon / Logo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-32 lg:h-32 bg-black rounded-full flex items-center justify-center shadow-2xl border-[8px] border-[#333333] z-20 transition-transform duration-500 group-hover:scale-110">
              <img src={logoUrl} alt="Fit Pro Alpha Tribe" className="w-12 h-12 lg:w-16 lg:h-16 object-contain hue-rotate-180 brightness-125" />
            </div>

            <p className="text-cyan-400 font-montserrat font-bold uppercase tracking-[0.1em] lg:tracking-[0.15em] text-[10px] lg:text-xs mb-3">
              Join the movement
            </p>

            <div className="min-h-[130px] lg:min-h-[160px] flex items-center justify-center mb-6">
              <h4 className="font-montserrat font-black text-[2.1rem] lg:text-[2.6rem] xl:text-[3rem] tracking-tighter uppercase text-white drop-shadow-md leading-[1.05]">
                <span className="block">Fit Pro</span>
                <span className="block">Alpha</span>
                <span className="block">Tribe</span>
              </h4>
            </div>

            <p className="font-inter text-zinc-300 leading-relaxed mb-10 text-sm lg:text-[15px] flex-1">
              Join our exclusive Skool community of fitness professionals. Get foundational scaling training, weekly Q&A calls, and unmatched peer networking at absolutely zero cost.
            </p>

            <button className="mt-auto inline-flex items-center justify-center bg-transparent border-[3px] border-cyan-400 text-cyan-400 font-inter font-black uppercase tracking-widest text-[10px] lg:text-xs px-6 py-3.5 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300 w-full">
              Join For Free
            </button>
          </div>

          {/* Card 2: Paid Community */}
          <div className="relative bg-[#333333] rounded-2xl pt-20 lg:pt-24 pb-10 px-6 lg:px-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-3 border-t-[8px] border-[#333333] mt-16 md:mt-0 group flex flex-col h-full">

            {/* Massive Circular Icon / Logo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-32 lg:h-32 bg-black rounded-full flex items-center justify-center shadow-2xl border-[8px] border-[#333333] z-20 transition-transform duration-500 group-hover:scale-110">
              <img src={logoUrl} alt="Limitless Alpha" className="w-12 h-12 lg:w-16 lg:h-16 object-contain hue-rotate-[-90deg] brightness-125 saturate-150" />
            </div>

            <p className="text-[#9d4edd] font-montserrat font-bold uppercase tracking-[0.1em] lg:tracking-[0.15em] text-[10px] lg:text-xs mb-3">
              Unlock standard systems
            </p>

            <div className="min-h-[130px] lg:min-h-[160px] flex items-center justify-center mb-6">
              <h4 className="font-montserrat font-black text-[2.1rem] lg:text-[2.6rem] xl:text-[3rem] tracking-tighter uppercase text-white drop-shadow-md leading-[1.05]">
                <span className="block">Fit Pro</span>
                <span className="block">Limitless</span>
                <span className="block">Alpha</span>
              </h4>
            </div>

            <p className="font-inter text-zinc-300 leading-relaxed mb-10 text-sm lg:text-[15px] flex-1">
              Gain direct access to our exact scaling frameworks, standard ad templates, and sales scripts to seamlessly deploy the Alpha Systems inside our paid inner circle.
            </p>

            <button className="mt-auto inline-flex items-center justify-center bg-transparent border-[3px] border-[#9d4edd] text-[#9d4edd] font-inter font-black uppercase tracking-widest text-[10px] lg:text-xs px-6 py-3.5 rounded-full hover:bg-[#9d4edd] hover:text-white transition-colors duration-300 w-full">
              Join Paid Tier
            </button>
          </div>

          {/* Card 3: Premium Community */}
          <div className="relative bg-[#333333] rounded-2xl pt-20 lg:pt-24 pb-10 px-6 lg:px-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-3 border-t-[8px] border-[#333333] mt-16 md:mt-0 group flex flex-col h-full">

            {/* Massive Circular Icon / Logo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-32 lg:h-32 bg-black rounded-full flex items-center justify-center shadow-2xl border-[8px] border-[#333333] z-20 transition-transform duration-500 group-hover:scale-110">
              <img src={logoUrl} alt="Peer Premium" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
            </div>

            <p className="text-brand-green font-montserrat font-bold uppercase tracking-[0.1em] lg:tracking-[0.15em] text-[10px] lg:text-xs mb-3">
              Hire us to do it for you
            </p>

            <div className="min-h-[130px] lg:min-h-[160px] flex items-center justify-center mb-6">
              <h4 className="font-montserrat font-black text-[2.1rem] lg:text-[2.6rem] xl:text-[3rem] tracking-tighter uppercase text-white drop-shadow-md leading-[1.05]">
                <span className="block">Fit Pro</span>
                <span className="block">Alpha</span>
                <span className="block">Premium Community</span>
              </h4>
            </div>

            <p className="font-inter text-zinc-300 leading-relaxed mb-10 text-sm lg:text-[15px] flex-1">
              We exclusively build, deploy, and scale high-ticket funnels right into your fitness business. Completely done-for-you so you can focus purely on your clients.
            </p>

            <button className="mt-auto inline-flex items-center justify-center bg-transparent border-[3px] border-brand-green text-brand-green font-inter font-black uppercase tracking-widest text-[10px] lg:text-xs px-6 py-3.5 rounded-full hover:bg-brand-green hover:text-black transition-colors duration-300 w-full">
              Apply For Premium
            </button>
          </div>

        </div>
      </div>
      {/* Massive dynamic spacer allowing the PlaybookBorder's negative margin to consume this space natively */}
      <div className="h-[60px] md:h-[120px] lg:h-[180px] w-full bg-transparent pointer-events-none mt-16" />
    </section>
  );
};

export default OfferingSection;
