import React from 'react';
import { Download, CheckCircle, Zap, Video, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import logoUrl from '../../../assets/logo.png';

const PlaybookVSL = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-inter selection:bg-brand-green selection:text-black pb-24">
      
      {/* 1. Header & Video Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          <img src={logoUrl} alt="Fit Pro Alpha Logo" className="h-[50px] md:h-[70px] mx-auto mb-10" style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(85%) saturate(3061%) hue-rotate(24deg) brightness(109%) contrast(98%)' }} />
          
          <div className="inline-block bg-zinc-900 border border-brand-green/30 px-5 py-2 mb-8 relative">
            <span className="text-brand-green font-bold text-sm md:text-base uppercase tracking-widest relative z-10 font-montserrat">
              Free 7-Figure Agency Blueprint
            </span>
          </div>

          <h1 className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl leading-[0.9] uppercase tracking-tighter mb-8 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            Steal The Internal Playbook <br className="hidden md:block"/> We Use To Grow Coaches <br className="hidden md:block"/> 
            <span className="text-brand-green underline decoration-[6px] decoration-white underline-offset-8">10x Faster.</span>
          </h1>

          <p className="text-xl text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
            Watch this short video to discover exactly how to deploy our automated systems and high-ticket sales strategies to scale your coaching business effortlessly.
          </p>

          {/* VSL Video Placeholder */}
          <div className="w-full max-w-4xl aspect-video bg-zinc-900 border-[6px] border-zinc-800 shadow-[0_30px_60px_rgba(187,246,0,0.15)] flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden transform group hover:scale-[1.01] transition-transform duration-500 mb-12">
            
            <div className="absolute inset-0 bg-brand-green/5 pointer-events-none group-hover:bg-brand-green/10 transition-colors" />
            <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(187,246,0,0.5)] group-hover:scale-110 transition-transform duration-500 absolute z-10">
              <Video className="w-10 h-10 text-black fill-black ml-2" />
            </div>
            <p className="absolute bottom-6 text-zinc-500 font-bold uppercase tracking-widest text-sm z-10 group-hover:text-brand-green transition-colors">Click to Play Training</p>
          </div>
        </div>
      </section>

      {/* 2. What's Inside & Opt-in Grid */}
      <section className="py-24 px-6 md:px-12 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: What They Get */}
          <div className="lg:col-span-6">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase tracking-tighter text-white mb-6">
              What's <span className="text-brand-green">Inside?</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              This isn't just theory. We are handing you the exact templates, scripts, and sandboxes we deploy for our private 7-figure clients.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { title: "High-Ticket DM Scripts", desc: "Turn raw followers into booked calls without sounding salesy." },
                { title: "Automated Funnel Blueprints", desc: "The exact infrastructure to capture and convert leads 24/7." },
                { title: "Viral Ad Sandboxes", desc: "Swipe our best performing ad creative frameworks." },
                { title: "Objection Handling Cheatsheets", desc: "Never lose a high-ticket close to 'let me think about it' again." },
                { title: "Offer Creation Checklists", desc: "Structure your coaching package so they feel stupid saying no." },
                { title: "Vetted Tech Stacks", desc: "Stop wasting money on the wrong software." }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 flex items-start gap-4 hover:border-brand-green transition-colors group">
                  <div className="w-10 h-10 bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/30 group-hover:bg-brand-green/20">
                    <CheckCircle className="w-6 h-6 text-brand-green stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg text-white mb-1 uppercase tracking-widest w-4/5">{item.title}</h4>
                    <p className="text-zinc-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-black border border-brand-green/20 p-6 flex items-center gap-4 text-brand-green/90 font-medium">
              <Lock className="w-8 h-8 shrink-0" />
              <p>This playbook is valued at $497 but is currently available for free for the next 100 action-takers.</p>
            </div>
          </div>

          {/* Right Side: Brutalist Opt-In Form */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
             <div className="bg-brand-green p-8 md:p-12 text-black shadow-[20px_20px_0px_#222] border-4 border-[#222] relative group">
               
               <div className="flex justify-between items-start mb-8">
                 <h3 className="font-montserrat font-black text-4xl uppercase tracking-tighter leading-none w-3/4">
                   Where Should We Send It?
                 </h3>
                 <Zap className="w-10 h-10 stroke-[1.5] animate-pulse shrink-0" />
               </div>
               
               <form className="space-y-6">
                 <div className="space-y-5">
                   <div className="flex flex-col gap-2">
                     <label className="font-inter font-black text-sm uppercase tracking-widest">
                       First Name *
                     </label>
                     <input 
                       type="text" 
                       placeholder="Enter your first name"
                       className="w-full bg-white border-[3px] border-black px-6 py-5 font-inter font-bold text-black placeholder:text-black/40 focus:outline-none focus:ring-4 focus:ring-black/20 transition-all text-lg"
                       required
                     />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="font-inter font-black text-sm uppercase tracking-widest">
                       Your Best Email *
                     </label>
                     <input 
                       type="email" 
                       placeholder="name@example.com"
                       className="w-full bg-white border-[3px] border-black px-6 py-5 font-inter font-bold text-black placeholder:text-black/40 focus:outline-none focus:ring-4 focus:ring-black/20 transition-all text-lg"
                       required
                     />
                   </div>
                 </div>
                 
                 <button 
                  type="submit" 
                  className="w-full group/btn relative inline-flex items-center justify-center gap-3 bg-black text-brand-green font-montserrat font-black uppercase tracking-widest text-xl px-8 py-6 border-4 border-black hover:bg-zinc-900 transition-all duration-300 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.5)] active:translate-y-2 active:shadow-none mt-4"
                 >
                    Get Free Playbook Now
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform stroke-[3]" />
                 </button>
               </form>

               <div className="mt-8 pt-6 border-t border-black/10 flex justify-between items-center opacity-80">
                 <p className="font-inter text-xs font-black uppercase tracking-widest">
                   100% Privacy Respected.
                 </p>
                 <ShieldCheck className="w-5 h-5" />
               </div>
             </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default PlaybookVSL;
