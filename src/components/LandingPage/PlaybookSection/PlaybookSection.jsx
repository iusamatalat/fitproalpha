import React from 'react';
import { Download, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../../../assets/logo.svg';

const PlaybookSection = () => {
  return (
    <section className="relative w-full bg-[#f4f6ef] pt-8 pb-32 z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px]">
        
        {/* Headline Header Area */}
        <div className="text-center md:text-left mb-16 relative z-20">
          <h2 className="font-montserrat font-black text-6xl md:text-[5.5rem] lg:text-[7rem] tracking-tighter uppercase text-black leading-[0.85] mb-6 drop-shadow-sm">
            Grow 10x <br />
            <span className="relative inline-block">
               Faster<span className="text-brand-green">.</span>
               <div className="absolute -bottom-2 left-0 w-full h-4 bg-brand-green/30 -z-10 skew-x-12" />
            </span>
          </h2>
          <p className="font-inter text-xl md:text-2xl text-zinc-600 font-medium max-w-2xl">
            Steal our internal agency playbook and deploy the exact systems we use to scale our clients to 7-figures.
          </p>
        </div>

        {/* Dynamic 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: 3D Playbook Graphic Hero */}
          <div className="lg:col-span-5 relative flex justify-center perspective-1000">
             {/* 3D Book Container */}
             <div className="relative w-full max-w-[360px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] aspect-[3/4] bg-[#111] rounded-r-3xl rounded-l-md border-l-[16px] border-[#222] shadow-[25px_25px_60px_rgba(0,0,0,0.3)] transform lg:rotate-y-12 lg:rotate-z-3 hover:rotate-y-0 hover:rotate-z-0 transition-transform duration-700 ease-out group">
                
                {/* Book Cover Design */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between overflow-hidden rounded-r-2xl border-2 border-zinc-800">
                   <div className="flex justify-between items-start">
                     <img src={logoUrl} alt="logo" className='text-brand-green w-10 h-10 animate-pulse'/>
                   </div>
                   
                   <div className="z-10 relative">
                     <h3 className="font-montserrat font-black text-[3.5rem] lg:text-6xl text-white uppercase leading-[0.85] tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500 origin-left">
                       The Ultimate<br/>Content<br/>Playbook
                     </h3>
                     <div className="w-16 h-2 bg-brand-green mb-4" />
                     <p className="font-inter text-zinc-400 text-sm font-medium">Volume I: The 7-Figure Blueprint</p>
                   </div>

                   <p className="font-inter font-black text-zinc-600 text-xs tracking-widest uppercase">Fit Pro Alpha</p>

                   {/* Neon geometric overlay rings inside the book */}
                   <div className="absolute -right-16 -top-16 w-56 h-56 border-[8px] border-brand-green/20 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                   <div className="absolute -right-24 top-32 w-64 h-64 border-[3px] border-brand-green/10 rounded-full group-hover:scale-150 transition-transform duration-1000 delay-100 pointer-events-none" />
                </div>
             </div>
          </div>

          {/* Right Side: Brutalist Opt-in Form and Benefits */}
          <div className="lg:col-span-7 space-y-10 relative z-20">
             
             {/* Benefits Grid Checklist */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
               {[
                 "Health Professional Content Playbook",
                 "Fitness Coaches 500 Content Ideas",
                 "Complete Video Creation Playbook",
                 "Faceless Content Guide",
                 "Single Image & Carousel Guide",
                 "Ultimate AI Playbook — Tools & Prompts"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-[2px] border-zinc-100 hover:border-brand-green transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-brand-green stroke-[3]" />
                    </div>
                    <span className="font-inter font-bold text-zinc-800 text-sm">{item}</span>
                 </div>
               ))}
             </div>

             {/* Minimal Brutalist Opt-In Form Container */}
             <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[12px_12px_0px_#111] border-4 border-[#111] relative text-center">
               <h4 className="font-montserrat font-black uppercase tracking-tight text-3xl md:text-4xl text-black mb-4 mt-2">
                 Get Instant Access
               </h4>
               <p className="font-inter text-zinc-600 mb-8 font-medium">
                 Click below to dive straight into the playbook and unlock the exact systems we use to scale to 7-figures.
               </p>
               
               {/* Direct Redirect React Router Link */}
               <Link to="/playbook" className="w-full group relative inline-flex items-center justify-center gap-3 bg-brand-green text-black font-montserrat font-black uppercase tracking-widest text-lg md:text-xl px-8 py-6 rounded-xl border-4 border-[#111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#111] active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_#111]">
                  Grab Yours Now
                  <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform stroke-[3]" />
               </Link>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PlaybookSection;
