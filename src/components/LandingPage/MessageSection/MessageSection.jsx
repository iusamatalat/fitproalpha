import React from 'react';
import { ArrowRight } from 'lucide-react';
import SkewedVideo from './SkewedVideo';
import MessageDividerBorder from '../Borders/MessageDividerBorder';

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

      {/* The geometric border separating White from Light Grey natively */}
      <MessageDividerBorder />

      {/* The Light Grey Section containing the letter */}
      <div className="w-full bg-zinc-100 text-zinc-900 pb-32 pt-16">
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-left">
           
           {/* Date Tag */}
           <div className="mb-12 inline-block">
             <p className="text-xs md:text-sm font-black font-inter text-black uppercase tracking-tight">
               Updated: 25th of March, 2026
             </p>
             <div className="w-full h-[2px] bg-brand-green mt-1" />
           </div>

           {/* Letter Intro */}
           <p className="font-inter text-2xl md:text-[1.7rem] text-zinc-900 leading-relaxed font-bold mb-8">
             Dear Fitness Professional,
           </p>

           {/* Core Sales Letter Content */}
           <div className="font-inter text-lg md:text-[1.15rem] text-zinc-700 leading-[1.8] max-w-3xl space-y-6">
             <p>
               Are you absolutely sick and tired of grinding for likes, views, and followers... while your bank account stays frustratingly flat?
             </p>
             <p>
               Or maybe your coaching business is doing <i>okay</i>. You've got a decent roster of clients, but you're working 14-hour days, answering DMs at 11 PM, and you know deep down you are leaving hundreds of thousands of dollars on the table.
             </p>
             <p>
               If you want to absolutely dominate the fitness space, scale your coaching offers to the moon, and build a highly profitable empire that runs like a machine... <strong className="font-bold text-black bg-[#d7ff00]/40 px-1">then this will be the most important page you'll ever read.</strong>
             </p>
             
             <h3 className="font-montserrat font-black text-2xl md:text-3xl text-black uppercase tracking-tight mt-12 mb-6">
               Here Is The Brutal Truth...
             </h3>
             
             <p>
               The online fitness industry is more saturated than ever. Every single day, another "influencer" with a ring light and a cheap templated app pops up trying to steal your market share. 
             </p>
             <p>
               Posting workout reels and praying the algorithm blesses you is <strong className="font-bold text-black border-b-[3px] border-brand-green">NOT</strong> a scalable business model. It's a guaranteed recipe for total burnout.
             </p>
             <p>
               You don't need more social media "hacks" or a prettier Instagram aesthetic. You need a ruthlessly efficient, predictable system that turns cold attention into high-paying clients on demand.
             </p>

             <div className="bg-white p-6 md:p-8 border-l-[6px] border-black shadow-[10px_10px_0px_rgba(187,246,0,1)] my-12 relative overflow-hidden group">
               <h4 className="font-black font-montserrat tracking-tight text-xl md:text-2xl mb-4 text-black uppercase relative z-10">What We Do At Fit Pro Alpha</h4>
               <p className="font-medium text-zinc-600 relative z-10 leading-relaxed">
                 We don't just "run ads." We engineer aggressive, full-funnel scaling systems exclusively for elite fitness influencers and coaches. We guarantee our outcomes with our own capital. If we don't multiply your revenue, we work for free until we do.
               </p>
               {/* Decorative background element for the blockquote */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:scale-[2]" />
             </div>

             <p>
               If you're ready to stop playing small and start building a legacy, you need to read every single word on this page. But be warned: we only partner with professionals who are hungry for absolute market domination.
             </p>
             
             <p className="font-bold text-black mt-8 text-xl">
               Let's get to work.
             </p>
           </div>
        </div>
        {/* Massive dynamic spacer allowing the OfferingBorder's negative margin to consume this space natively */}
        <div className="h-[60px] md:h-[120px] lg:h-[180px] w-full bg-transparent pointer-events-none mt-12" />
      </div>

    </section>
  );
};

export default MessageSection;
