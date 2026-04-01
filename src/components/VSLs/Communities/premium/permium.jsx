import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, ShieldAlert, MonitorPlay, Users, TrendingUp, Trophy, Star, ShieldCheck, Zap } from 'lucide-react';
import logoUrl from '../../../../assets/logo.png';

const PremiumVSL = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-inter selection:bg-brand-green selection:text-black">
      
      {/* 1. Hook & Headline Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <img src={logoUrl} alt="Fit Pro Alpha Logo" className="h-[50px] md:h-[70px] mx-auto mb-10" style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(85%) saturate(3061%) hue-rotate(24deg) brightness(109%) contrast(98%)' }} />
          
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-brand-green/30 px-5 py-2 mb-8 relative group">
            <Star className="w-4 h-4 text-brand-green fill-brand-green" />
            <span className="text-brand-green font-bold text-sm md:text-base uppercase tracking-widest relative z-10">
              FPA Premium Community
            </span>
          </div>

          <h1 className="font-montserrat font-black text-5xl sm:text-6xl md:text-7xl leading-[1.1] uppercase tracking-tighter mb-10 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            The Fastest Way for Health & Fitness Coaches to Hit <span className="text-brand-green border-b-[6px] border-brand-green pb-2 inline-block">$1,000+/Month</span> <br className="hidden lg:block"/> in 30-60 Days Without Years of Trial & Error.
          </h1>

          <div className="text-xl md:text-2xl text-zinc-300 font-medium max-w-4xl mx-auto leading-relaxed mb-12 text-left bg-black/50 p-8 border-l-4 border-red-500 shadow-2xl">
            <h3 className="text-red-500 font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6" /> The Struggle is Real
            </h3>
            <p className="mb-4">Right now, you are probably dealing with:</p>
            <ul className="space-y-4 text-lg md:text-xl text-zinc-400">
              <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500/70 shrink-0 mt-1" /> Spending endless hours alone trying to figure out the coaching business.</li>
              <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500/70 shrink-0 mt-1" /> Feeling stuck without a predictable roadmap to scale.</li>
              <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500/70 shrink-0 mt-1" /> Failing to turn your followers into high-paying clients predictably.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. The Solution & Proof */}
      <section className="py-24 px-6 md:px-12 relative bg-zinc-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-white mb-8">
              The <span className="text-brand-green">Solution</span>
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8 font-medium">
              A step-by-step system with proven strategies, elite mentorship, and a supportive network to help coaches scale predictably. No guesswork, just execution.
            </p>
            
            <div className="space-y-6">
              <div className="bg-black border border-zinc-800 p-6 flex items-start gap-5 hover:border-brand-green transition-colors">
                <MonitorPlay className="w-10 h-10 text-brand-green shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-montserrat font-bold text-xl uppercase mb-2">30-Module Curriculum</h4>
                  <p className="text-zinc-400">Master Niche Selection, Viral Content, Sales Mastery, Follow-Up, Meta Ads, and AI.</p>
                </div>
              </div>
              <div className="bg-black border border-zinc-800 p-6 flex items-start gap-5 hover:border-brand-green transition-colors">
                <Users className="w-10 h-10 text-brand-green shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-montserrat font-bold text-xl uppercase mb-2">Direct Mentorship</h4>
                  <p className="text-zinc-400">2 weekly live group calls (Q&A, Onboarding, Deep Work) and direct feedback on your irresistible offers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Board */}
          <div className="bg-black border-2 border-brand-green p-8 md:p-10 relative shadow-[0_20px_50px_rgba(187,246,0,0.15)] group transform lg:rotate-2">
            <h3 className="font-montserrat font-black text-3xl uppercase mb-8 text-brand-green flex items-center gap-4">
              <Trophy className="w-8 h-8" /> Wall of Wins
            </h3>
            
            <div className="space-y-6">
              <div className="border-b border-zinc-800 pb-4">
                <h4 className="font-montserrat font-bold text-xl uppercase text-white mb-1">Saeeda Maryam</h4>
                <p className="text-brand-green font-black text-2xl tracking-tight">Crossed $70,000</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h4 className="font-montserrat font-bold text-xl uppercase text-white mb-1">Haider Ali Khan</h4>
                <p className="text-brand-green font-black text-2xl tracking-tight">Hit $30,000 Milestone</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h4 className="font-montserrat font-bold text-xl uppercase text-white mb-1">Fatima Ahmed</h4>
                <p className="text-brand-green font-black text-2xl tracking-tight">Scaled to $10,000</p>
                <p className="text-sm text-zinc-500 mt-1">Grew from 12k to 40k followers</p>
              </div>
              <div className="pt-2">
                <h4 className="font-montserrat font-bold text-xl uppercase text-white mb-1">Beginner Success Rate</h4>
                <p className="text-zinc-300 font-medium">Coaches previously charging 1,500 PKR are now closing deals at <span className="text-brand-green font-bold">$100-$500</span> per client.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Grand Guarantee */}
      <section className="py-24 px-6 md:px-12 bg-brand-green text-black relative border-y border-zinc-900 group">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ShieldCheck className="w-24 h-24 mx-auto mb-8 text-black opacity-80" />
          <h2 className="font-montserrat font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-[0.9]">
            The <span className="bg-black text-brand-green px-4 mt-2 inline-block transform skew-x-3">$12,000 Guarantee</span>
          </h2>
          <p className="text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed mb-10 text-black/80">
            Scale to <strong className="font-black text-black underline decoration-4 underline-offset-4">$12,000/year</strong> in 12 months, or our entire team will work for you for <strong className="font-black text-black">FREE</strong> until you do.
          </p>
          
          <div className="bg-black/10 border-2 border-black/20 p-6 md:p-8 max-w-3xl mx-auto text-left font-semibold text-lg">
            <p className="uppercase tracking-widest font-black text-xs mb-4 text-black/60">The Simple Conditions:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Finish onboarding seamlessly</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Apply action steps daily</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Commit to 1-2 hours of focused work</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 shrink-0" /> Attend live calls for 12 months</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Inside the Curriculum */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-6xl uppercase tracking-tighter text-white mb-6">
              Inside The <span className="text-brand-green">Curriculum</span>
            </h2>
            <p className="text-xl text-zinc-400 font-medium">Bite-sized, actionable steps taking just minutes a day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: '01', title: 'Niche & Offer Design', desc: 'Craft irresistible offers that command $997+ price tags effortlessly.' },
              { id: '02', title: 'Content Virality', desc: 'Frameworks to explode growth. One member went from 835 to 10k followers in 19 days.' },
              { id: '03', title: 'Sales & DM Mastery', desc: 'Plug-and-play chat scripts and organic lead gen without spending on ads.' },
              { id: '04', title: 'Advanced Systems', desc: 'Meta Ads, AI Mastery, and operational scaling to automate your coaching.' }
            ].map(col => (
              <div key={col.id} className="bg-zinc-900 border border-zinc-800 p-8 hover:bg-zinc-800 hover:border-brand-green transition-all duration-300 relative group">
                <div className="text-6xl font-black text-zinc-800 absolute right-4 top-4 opacity-50 group-hover:text-brand-green/20 transition-colors">{col.id}</div>
                <h4 className="font-montserrat font-bold text-xl uppercase text-white mb-4 relative z-10 w-4/5">{col.title}</h4>
                <p className="text-zinc-400 font-medium relative z-10">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Investment & Bonuses */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="mb-16">
             <div className="inline-flex items-center gap-2 bg-brand-green text-black font-bold uppercase tracking-widest text-xs md:text-sm px-6 py-2 mb-6 shadow-[5px_5px_0px_white]">
               <Zap className="w-4 h-4" /> Elite Access
             </div>
            <h2 className="font-montserrat font-black text-5xl md:text-6xl uppercase tracking-tighter text-white mb-4">
              Choose Your <span className="text-brand-green">Ascension</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-end">
            {/* 3 Months */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between hover:border-brand-green transition-colors duration-300">
              <div>
                <h4 className="font-montserrat font-bold text-xl text-white mb-4 uppercase tracking-widest">3 Months Access</h4>
                <div className="flex justify-center items-start gap-1 mb-6">
                  <span className="text-zinc-500 font-bold text-xl mt-2">$</span>
                  <span className="font-montserrat font-black text-6xl text-white tracking-tighter">500</span>
                </div>
                <p className="text-zinc-400 mb-8 font-medium">Full community and curriculum access for 90 days.</p>
              </div>
            </div>

            {/* 12 Months (Hero) */}
            <div className="bg-black border-2 border-brand-green p-10 flex flex-col justify-between transform lg:-translate-y-4 shadow-[0_30px_60px_rgba(187,246,0,0.15)] relative">
              <div className="absolute top-0 left-0 w-full bg-brand-green text-black font-black uppercase tracking-widest text-xs py-2 text-center">
                Ultimate Guarantee Pack
              </div>
              <div className="mt-8">
                <h4 className="font-montserrat font-bold text-2xl text-brand-green mb-4 uppercase tracking-widest">12 Months Access</h4>
                <div className="flex justify-center items-start gap-1 mb-8">
                  <span className="text-brand-green font-bold text-2xl mt-2">$</span>
                  <span className="font-montserrat font-black text-7xl text-white tracking-tighter drop-shadow-lg">1500</span>
                </div>
                
                <ul className="text-left space-y-4 text-zinc-300 font-medium mb-10 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                  <li className="flex gap-3"><CheckCircle2 className="text-brand-green shrink-0 w-5 h-5"/> <span className="font-bold text-white">100% Money-Back Guarantee</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-brand-green shrink-0 w-5 h-5"/> Priority Support List</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-brand-green shrink-0 w-5 h-5"/> Private WhatsApp Access</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-brand-green shrink-0 w-5 h-5"/> Detailed Audits (10x faster results)</li>
                </ul>
              </div>
              <a href="https://www.skool.com/limitless-alphas" className="w-full block text-center bg-brand-green hover:bg-white text-black font-black uppercase tracking-widest py-5 transition-colors text-lg shadow-xl">Join Elite Annual</a>
            </div>

            {/* 6 Months */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between hover:border-brand-green transition-colors duration-300">
              <div>
                <h4 className="font-montserrat font-bold text-xl text-white mb-4 uppercase tracking-widest">6 Months Access</h4>
                <div className="flex justify-center items-start gap-1 mb-6">
                  <span className="text-zinc-500 font-bold text-xl mt-2">$</span>
                  <span className="font-montserrat font-black text-6xl text-white tracking-tighter">700</span>
                </div>
                <p className="text-zinc-400 mb-8 font-medium">Extended runway to build momentum and scale.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 6. CTA Instruction */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase tracking-tighter text-white mb-10">
            How to Finalize Your Entry
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12 text-left">
            <div className="bg-zinc-950 p-6 border border-zinc-900 flex-1 relative">
              <span className="text-brand-green font-black text-4xl absolute top-6 right-6 opacity-20">1</span>
              <h3 className="font-bold text-white uppercase tracking-widest mb-2">Join Skool</h3>
              <p className="text-zinc-400 text-sm">Click the link and join Fit Pro Alpha Premium. Secure your profile.</p>
            </div>
            <div className="bg-zinc-950 p-6 border border-zinc-900 flex-1 relative">
              <span className="text-brand-green font-black text-4xl absolute top-6 right-6 opacity-20">2</span>
              <h3 className="font-bold text-white uppercase tracking-widest mb-2">Select Tier</h3>
              <p className="text-zinc-400 text-sm">Choose between the $150/mo or Annual package inside payment portals.</p>
            </div>
            <div className="bg-zinc-950 p-6 border border-zinc-900 flex-1 relative">
              <span className="text-brand-green font-black text-4xl absolute top-6 right-6 opacity-20">3</span>
              <h3 className="font-bold text-white uppercase tracking-widest mb-2">Unlock Access</h3>
              <p className="text-zinc-400 text-sm">Add your Visa/Mastercard. Instant access to the 30-module curriculum is granted.</p>
            </div>
          </div>

          <a 
            href="https://www.skool.com/limitless-alphas"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center bg-brand-green text-black font-inter font-black uppercase tracking-widest text-xl px-16 py-6 shadow-[0_15px_40px_rgba(187,246,0,0.4)] transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] w-full sm:w-auto mt-4"
          >
            <span className="relative z-10 flex items-center gap-3">
              Proceed To Checkout
              <ArrowRight className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-2 stroke-[3]" />
            </span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default PremiumVSL;
