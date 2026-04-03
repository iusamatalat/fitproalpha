import React from 'react';
import { ArrowRight } from 'lucide-react';
import SkewedVideo from './SkewedVideo';
import founderImg from '../../../assets/founder.png';
import gymBg from '../../../assets/gym_bg.png';

const MessageSection = () => {
  return (
    <section className="relative w-full flex flex-col z-30">

      {/* Top White Section housing the Video */}
      <div className="bg-white w-full pt-12 pb-16">
        <SkewedVideo />

        {/* Action Button */}
        <div className="container mx-auto px-6 max-w-5xl flex justify-center items-center mt-6 mb-4 relative z-20">
          <button className="group relative inline-flex items-center justify-center bg-brand-green text-black font-inter font-black uppercase tracking-widest text-sm md:text-lg px-10 md:px-14 py-4 md:py-[1.15rem] rounded-full shadow-[0_10px_40px_rgba(187,246,0,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_15px_50px_rgba(187,246,0,0.55)] active:scale-[0.97] overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Book Your Free Strategy Call Now
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1.5 stroke-[3]" />
            </span>
            {/* Elegant glass/white sweep effect hidden natively on hover */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300 ease-out z-0 pointer-events-none" />
          </button>
        </div>
      </div>



      {/* The Dark Section containing the letter with Background Image */}
      <div className="relative w-full pb-32 pt-16 mt-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-brand-green/30 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img src={gymBg} className="w-full h-full object-cover object-center opacity-100 scale-105 brightness-110" alt="Gym Background" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-20 text-left">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Shorter Message */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">

              {/* Hook */}
              <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05] mb-8">
                Stop Trading Time <br className="hidden md:block" />
                <span className="text-black bg-brand-green px-3 py-1 mt-3 inline-block leading-none border-2 border-brand-green transform -skew-x-3 shadow-[4px_4px_0_#000]">For Pennies.</span>
              </h2>

              {/* Shorter Core Sales Letter Content */}
              <div className="font-inter text-lg md:text-[1.15rem] text-zinc-300 leading-[1.8] space-y-6 lg:pr-8">
                <p className="font-semibold text-xl text-white border-l-4 border-brand-green pl-5 py-1">
                  If you're still relying on viral reels and algorithm luck to get clients, you're building a business on quicksand.
                </p>

                <div className="bg-zinc-900 p-6 md:p-8 border-t-[6px] border-brand-green shadow-[8px_8px_0px_#000] my-8 relative overflow-hidden group">
                  <h4 className="font-black font-montserrat tracking-tight text-xl mb-4 text-white uppercase relative z-10 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-brand-green rounded-full block" />
                    The Alpha Difference
                  </h4>
                  <p className="font-medium text-zinc-400 relative z-10 leading-relaxed text-base md:text-lg">
                    We build ruthless, fully-automated acquisition machines. You coach. We scale. If you don't grow, we pay you. Simple.
                  </p>
                  {/* Decorative background element for the blockquote */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:scale-[2]" />
                </div>

                <p className="font-black font-montserrat uppercase tracking-tight text-white mt-10 text-2xl md:text-3xl leading-tight">
                  Ready to dominate? <br />Let's get to work.
                </p>
              </div>
            </div>

            {/* Right Column: Founder Image with Bottom Graphics */}
            <div className="lg:col-span-5 xl:col-span-6 lg:ml-8 relative mt-10 lg:mt-0">

              {/* Decorative solid outline frame */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 bg-brand-green shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-black overflow-hidden z-0" />

              {/* Image Container */}
              <div className="relative bg-zinc-900 overflow-hidden border-2 border-black z-10 w-full h-[500px] md:h-[650px] lg:h-[700px]">
                <img
                  src={founderImg}
                  alt="Founder of Fit Pro Alpha"
                  className="w-full h-full object-cover object-center"
                />

                {/* Bottom Graphic Info Box Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 flex flex-col justify-end z-20">
                  <div className="bg-black/95 backdrop-blur-sm border-l-[6px] border-brand-green p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-green/10 rounded-full translate-x-8 -translate-y-8" />

                    <h3 className="text-white font-montserrat font-black text-2xl md:text-3xl uppercase tracking-widest relative z-10">
                      Hassaan Ahmed
                    </h3>


                    <div className="h-px w-16 bg-zinc-800 my-4 relative z-10" />

                    <p className="text-zinc-400 font-inter text-sm md:text-base leading-relaxed hidden sm:block relative z-10">
                      Fitness Business Coach | Founder of Fit Pro Alpha
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        {/* Massive dynamic spacer allowing the OfferingBorder's negative margin to consume this space natively */}
        <div className="h-[60px] md:h-[120px] lg:h-[180px] w-full bg-transparent pointer-events-none mt-12 relative z-20" />
      </div>

    </section>
  );
};

export default MessageSection;
