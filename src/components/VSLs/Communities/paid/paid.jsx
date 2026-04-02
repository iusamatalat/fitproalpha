import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Zap, Video, FileText, Check, Trophy, Lock } from 'lucide-react';
import logoUrl from '../../../../assets/logo.png';

const PaidVSL = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-inter selection:bg-brand-green selection:text-black">

      {/* 1. Header & Vision Hook */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <img src={logoUrl} alt="Fit Pro Alpha Logo" className="h-[50px] md:h-[70px] mx-auto mb-10" style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(85%) saturate(3061%) hue-rotate(24deg) brightness(109%) contrast(98%)' }} />

          <div className="inline-block bg-zinc-900 border border-brand-green/30 px-5 py-2 mb-8 relative group">
            <span className="text-brand-green font-bold text-sm md:text-base uppercase tracking-widest relative z-10">
              Limitless Alpha's Community Overview
            </span>
          </div>

          <h1 className="font-montserrat font-black text-5xl sm:text-6xl md:text-8xl leading-[0.9] uppercase tracking-tighter mb-10 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            What If This Was <span className="text-zinc-500 line-through decoration-brand-green decoration-[6px]">The Last Time</span> <br />
            You Ever Felt Stuck?
          </h1>

          <div className="text-xl md:text-2xl text-zinc-300 font-medium max-w-3xl mx-auto leading-relaxed mb-12 text-left bg-black/50 p-8 border-l-4 border-brand-green">
            <p className="mb-4">Pause for a moment. Close your eyes and imagine waking up 30 days from now.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" /> You’re sipping your morning coffee...</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" /> You check your phone...</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" /> You see the first payment notification you’ve been dreaming about.</li>
            </ul>
            <p className="mt-6 text-white font-bold text-2xl italic tracking-tight">"That moment when you realize: ‘I’m actually doing this. My business is real.’"</p>
          </div>

          <p className="text-xl text-zinc-400 font-bold uppercase tracking-widest mb-4">Real results from members just like you:</p>
          <div className="inline-flex items-center bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-full shadow-[0_5px_15px_rgba(187,246,0,0.15)]">
            <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-black font-black text-xl mr-4">A</div>
            <p className="text-zinc-200 font-medium text-lg"><span className="text-brand-green font-bold">Aatika Khalid</span> – Made 1 lac 45k in December.</p>
          </div>
        </div>
      </section>

      {/* 2. Problem/Solution & The Cost of Doing Nothing */}
      <section className="py-24 px-6 md:px-12 relative bg-zinc-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase tracking-tighter text-white mb-8 border-b border-zinc-900 pb-6">
              Why This Community <span className="text-brand-green">Exists</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Most coaches never build a sustainable business—not because they lack talent, but because:
            </p>
            <ul className="space-y-5 mb-10">
              <li className="flex gap-4 text-zinc-300 text-lg group"><XCircle className="w-6 h-6 text-red-500 shrink-0 group-hover:scale-110 transition-transform" /> They never had a clear roadmap.</li>
              <li className="flex gap-4 text-zinc-300 text-lg group"><XCircle className="w-6 h-6 text-red-500 shrink-0 group-hover:scale-110 transition-transform" /> They tried piecing everything together alone.</li>
              <li className="flex gap-4 text-zinc-300 text-lg group"><XCircle className="w-6 h-6 text-red-500 shrink-0 group-hover:scale-110 transition-transform" /> They never had someone who genuinely cared whether they win or not.</li>
            </ul>
            <div className="p-6 bg-brand-green text-black font-bold text-lg md:text-xl uppercase tracking-wider transform -skew-x-2">
              Fit Pro Limitless Alpha is the bridge between watching others win and experiencing your first real momentum.
            </div>
          </div>

          <div className="bg-black border border-zinc-800 p-10 md:p-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:scale-[2]" />
            <h3 className="font-montserrat font-black text-3xl uppercase mb-6 text-red-500 relative z-10">The Hidden Cost Of Doing Nothing</h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6 relative z-10">
              How much has waiting already cost you?
            </p>
            <ul className="space-y-4 text-zinc-400 mb-8 relative z-10">
              <li className="flex gap-3"><span className="text-red-500 font-black">•</span> Months—or years—of lost income?</li>
              <li className="flex gap-3"><span className="text-red-500 font-black">•</span> Wasted time scrolling for answers?</li>
              <li className="flex gap-3"><span className="text-red-500 font-black">•</span> The quiet regret of watching others create what you want?</li>
            </ul>
            <p className="text-white font-black text-xl border-t border-zinc-800 pt-6 relative z-10">
              Every day you delay, you stay stuck in the same place. Nothing changes until you do.
            </p>

            <div className="mt-8 bg-zinc-900 border-l-4 border-brand-green p-4 relative z-10">
              <p className="text-sm text-zinc-400 uppercase tracking-widest font-bold mb-1">Member Win</p>
              <p className="text-white font-medium italic">"Made $1000 in just 10 days with only 5 clients." - Dt. Maham Naveed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Shattering Beliefs */}
      <section className="py-24 px-6 md:px-12 bg-black border-y border-zinc-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-montserrat font-black text-5xl md:text-7xl uppercase tracking-tighter text-white mb-6">
            Why You've Stayed <br /> <span className="text-red-500">Stuck Until Now</span>
          </h2>
          <p className="text-xl text-zinc-400 font-medium">Let’s be honest—it’s not about time, money, or skills. It’s about beliefs that keep you paralyzed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Internal Beliefs */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-brand-green transition-colors">
            <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-4">Internal Beliefs</h3>
            <p className="text-zinc-500 line-through mb-4 font-medium italic">"I’m not ready. I’m not good enough. What if I fail?"</p>
            <div className="bg-brand-green/10 p-4 border border-brand-green/20">
              <p className="text-brand-green font-bold mb-1 uppercase text-sm tracking-widest">The Truth</p>
              <p className="text-white font-medium">You will never feel ready. You build readiness through action.</p>
            </div>
            <p className="text-zinc-400 text-sm mt-6 border-t border-zinc-800 pt-4 italic">"From Chai to Closing My First $1000 Deal! The Journey Begins!" - Faiza Ejaz</p>
          </div>

          {/* External Beliefs */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-brand-green transition-colors">
            <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-4">External Beliefs</h3>
            <p className="text-zinc-500 line-through mb-4 font-medium italic">"I don’t have enough money. Clients are hard to find. I don’t know where to start."</p>
            <div className="bg-brand-green/10 p-4 border border-brand-green/20">
              <p className="text-brand-green font-bold mb-1 uppercase text-sm tracking-widest">The Truth</p>
              <p className="text-white font-medium">The longer you wait, the more time and money you waste.</p>
            </div>
          </div>

          {/* Vehicle Beliefs */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-brand-green transition-colors">
            <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-4">Vehicle Beliefs</h3>
            <p className="text-zinc-500 line-through mb-4 font-medium italic">"Will this really work for me? Should I wait until I can afford it?"</p>
            <div className="bg-brand-green/10 p-4 border border-brand-green/20">
              <p className="text-brand-green font-bold mb-1 uppercase text-sm tracking-widest">The Truth</p>
              <p className="text-white font-medium">This is the most accessible, risk-free way to finally see real results.</p>
            </div>
            <p className="text-zinc-400 text-sm mt-6 border-t border-zinc-800 pt-4 italic">"I have roughly closed clients of $2395 within these 5 months!" - Manaal Syed</p>
          </div>
        </div>
      </section>

      {/* 4. What You Get (The Offer) */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 relative">
            <h2 className="font-montserrat font-black text-5xl md:text-7xl uppercase tracking-tighter text-white mb-6">
              Everything You Get <br /> <span className="bg-brand-green text-black px-4 inline-block mt-2">Inside The Community</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-black border border-zinc-800 p-8 hover:border-white transition-colors relative">
              <span className="absolute top-4 right-6 font-montserrat font-black text-5xl text-zinc-900 group-hover:text-zinc-800 z-0">01</span>
              <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-3 relative z-10 w-3/4">Orientation Module</h3>
              <p className="text-zinc-400 relative z-10 mb-6 min-h-[60px]">Get your profile set up, know exactly where to start, and feel confident instantly.</p>
              <p className="text-brand-green font-bold text-sm tracking-widest uppercase relative z-10 border-t border-zinc-800 pt-4">(Value: $100)</p>
            </div>
            <div className="bg-black border border-zinc-800 p-8 hover:border-white transition-colors relative">
              <span className="absolute top-4 right-6 font-montserrat font-black text-5xl text-zinc-900 group-hover:text-zinc-800 z-0">02</span>
              <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-3 relative z-10 w-3/4">Fundamentals Masterclass</h3>
              <p className="text-zinc-400 relative z-10 mb-6 min-h-[60px]">Discover why nothing else has worked and learn the real, unbreakable fundamentals of scaling.</p>
              <p className="text-brand-green font-bold text-sm tracking-widest uppercase relative z-10 border-t border-zinc-800 pt-4">(Value: $200)</p>
            </div>
            <div className="bg-black border border-zinc-800 p-8 hover:border-white transition-colors relative">
              <span className="absolute top-4 right-6 font-montserrat font-black text-5xl text-zinc-900 group-hover:text-zinc-800 z-0">03</span>
              <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-3 relative z-10 w-3/4">4-Week Action Challenge</h3>
              <p className="text-zinc-400 relative z-10 mb-6 min-h-[60px]">Strategic goals and tactical execution plans laid out week by week.</p>
              <p className="text-brand-green font-bold text-sm tracking-widest uppercase relative z-10 border-t border-zinc-800 pt-4">(Value: $300)</p>
            </div>
            <div className="bg-black border border-zinc-800 p-8 hover:border-white transition-colors relative">
              <span className="absolute top-4 right-6 font-montserrat font-black text-5xl text-zinc-900 group-hover:text-zinc-800 z-0">04</span>
              <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-3 relative z-10 w-3/4">Ultimate Resource Library</h3>
              <p className="text-zinc-400 relative z-10 mb-6 min-h-[60px]">Plug-and-play templates, proven scripts, and high-converting checklists.</p>
              <p className="text-brand-green font-bold text-sm tracking-widest uppercase relative z-10 border-t border-zinc-800 pt-4">(Value: $100)</p>
            </div>
            <div className="bg-black border border-zinc-800 p-8 hover:border-white transition-colors relative">
              <span className="absolute top-4 right-6 font-montserrat font-black text-5xl text-zinc-900 group-hover:text-zinc-800 z-0">05</span>
              <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-3 relative z-10 w-3/4">Daily Live Coaching</h3>
              <p className="text-zinc-400 relative z-10 mb-6 min-h-[60px]">Real-time support, feedback, and raw motivation directly from the experts.</p>
              <p className="text-brand-green font-bold text-sm tracking-widest uppercase relative z-10 border-t border-zinc-800 pt-4">(Value: $400/month)</p>
            </div>
            <div className="bg-brand-green text-black border border-brand-green p-8 hover:brightness-110 transition-colors relative transform scale-[1.03] shadow-[0_20px_50px_rgba(187,246,0,0.2)]">
              <span className="absolute top-4 right-6 font-montserrat font-black text-5xl text-black/10 z-0">06</span>
              <h3 className="font-montserrat font-black text-2xl uppercase mb-3 relative z-10 w-3/4">Clear Growth Roadmap</h3>
              <p className="font-medium relative z-10 mb-6 min-h-[60px]">Never second guess. Join → Orientation → Masterclass → 4-Week Challenge → Daily Lives → Graduate to Premium.</p>
              <p className="font-bold text-black text-lg tracking-widest uppercase relative z-10 border-t border-black/20 pt-4 flex gap-2 items-center">
                <Lock className="w-5 h-5" /> (Value: PRICELESS)
              </p>
            </div>
          </div>

          {/* Fast Action Bonus */}
          <div className="bg-black border-2 border-brand-green p-8 md:p-12 text-center max-w-4xl mx-auto shadow-[0_0_50px_rgba(187,246,0,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full translate-x-12 -translate-y-12" />
            <div className="inline-flex items-center gap-2 bg-red-500 text-white font-bold uppercase tracking-widest text-xs md:text-sm px-4 py-1.5 mb-6">
              <Zap className="w-4 h-4" /> Fast Action Bonus (First 100 Members Only)
            </div>
            <h3 className="font-montserrat font-black text-3xl md:text-5xl uppercase text-white mb-4">The Fast-Start Client Blueprint</h3>
            <p className="text-zinc-300 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-6">
              Hidden bonus training revealing exactly how top members closed their first 3 high-paying clients in 14 days or less.
            </p>
            <p className="text-brand-green font-black tracking-widest uppercase text-xl">(Value: $500)</p>
          </div>
        </div>
      </section>

      {/* 5. Pricing & Guarantee */}
      <section className="py-24 px-6 md:px-12 bg-black relative border-y border-zinc-900">
        <div className="max-w-5xl mx-auto text-center">

          <div className="mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-6xl uppercase tracking-tighter text-white mb-4">
              The <span className="text-brand-green">Investment</span>
            </h2>
            <p className="text-xl text-zinc-400 font-medium">Total combined value is over $1,600. If you tried to get this level of coaching anywhere else, you’d be paying $500-$600/month minimum.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div>
                <h4 className="font-montserrat font-bold text-xl text-white mb-4 uppercase tracking-widest">Monthly Commitment</h4>
                <div className="flex justify-center items-start gap-1 mb-8">
                  <span className="text-brand-green font-bold text-2xl mt-2">$</span>
                  <span className="font-montserrat font-black text-6xl text-white tracking-tighter">20</span>
                  <span className="text-zinc-500 font-medium self-end text-lg mb-2">/mo</span>
                </div>
                <ul className="text-left space-y-4 text-zinc-300 font-medium mb-8">
                  <li className="flex gap-3"><Check className="text-brand-green shrink-0 w-5 h-5" /> Full Community Access</li>
                  <li className="flex gap-3"><Check className="text-brand-green shrink-0 w-5 h-5" /> Live Coaching</li>
                </ul>
              </div>
              <a href="https://www.skool.com/limitless-alphas" className="w-full block text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold uppercase tracking-widest py-4 transition-colors">Select Plan</a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 opacity-90">
              <div>
                <h4 className="font-montserrat font-bold text-xl text-white mb-4 uppercase tracking-widest">Quarterly Package</h4>
                <div className="flex justify-center items-start gap-1 mb-8">
                  <span className="text-brand-green font-bold text-2xl mt-2">$</span>
                  <span className="font-montserrat font-black text-6xl text-white tracking-tighter">50</span>
                  <span className="text-zinc-500 font-medium self-end text-lg mb-2">/3 mo</span>
                </div>
                <ul className="text-left space-y-4 text-zinc-300 font-medium mb-8">
                  <li className="flex gap-3"><Check className="text-brand-green shrink-0 w-5 h-5" /> 3 Months Access</li>
                  <li className="flex gap-3"><Check className="text-brand-green shrink-0 w-5 h-5" /> Save $10 overall</li>
                </ul>
              </div>
              <a href="https://www.skool.com/limitless-alphas" className="w-full block text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold uppercase tracking-widest py-4 transition-colors">Select Plan</a>
            </div>

            <div className="bg-brand-green text-black border-2 border-white p-8 flex flex-col justify-between transform scale-105 shadow-[0_20px_50px_rgba(187,246,0,0.3)] relative z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-brand-green font-bold uppercase tracking-widest text-xs px-4 py-1 border border-brand-green">
                Most Popular
              </div>
              <div>
                <h4 className="font-montserrat font-black text-2xl text-black mb-4 uppercase tracking-widest">Premium Yearly</h4>
                <div className="flex justify-center items-start gap-1 mb-8">
                  <span className="text-black font-black text-2xl mt-2">$</span>
                  <span className="font-montserrat font-black text-7xl text-black tracking-tighter">200</span>
                  <span className="text-black/60 font-medium self-end text-lg mb-2">/yr</span>
                </div>
                <ul className="text-left space-y-4 text-black font-semibold mb-8">
                  <li className="flex gap-3"><Check className="text-black shrink-0 w-6 h-6 stroke-[3]" /> Project 90 Eligible</li>
                  <li className="flex gap-3"><Check className="text-black shrink-0 w-6 h-6 stroke-[3]" /> 12-Month Guarantee Setup</li>
                  <li className="flex gap-3"><Check className="text-black shrink-0 w-6 h-6 stroke-[3]" /> Fast Action Bonus Blueprint</li>
                  <li className="flex gap-3"><Check className="text-black shrink-0 w-6 h-6 stroke-[3]" /> Private Slack Channel</li>
                </ul>
              </div>
              <a href="https://www.skool.com/limitless-alphas" className="w-full block text-center bg-black hover:bg-zinc-900 text-brand-green font-black uppercase tracking-widest py-5 transition-transform hover:scale-105 shadow-xl text-lg">Join Premium</a>
            </div>
          </div>

          <div className="bg-black border border-brand-green/30 p-8 md:p-12 text-left relative overflow-hidden group">
            <ShieldCheck className="absolute -right-8 -bottom-8 w-64 h-64 text-brand-green/5 group-hover:text-brand-green/10 transition-colors duration-500" strokeWidth={1} />
            <h3 className="font-montserrat font-black text-3xl md:text-4xl uppercase mb-6 text-white flex items-center gap-4 relative z-10">
              <ShieldCheck className="w-10 h-10 text-brand-green" /> The 12-Month Risk-Free Guarantee
            </h3>
            <p className="text-xl text-zinc-300 leading-relaxed font-medium relative z-10">
              We are so confident in our roadmap that if you join the Premium Yearly plan, do the work week-by-week, execute the missions, and you don’t mathematically make at least <span className="text-brand-green font-bold">$1,000</span> back within 12 months... <span className="text-white font-bold underline decoration-brand-green decoration-4 underline-offset-4">we will refund every single penny.</span> Zero risk to you.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Project 90 & Final Urgency CTA */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy className="w-20 h-20 text-brand-green mx-auto mb-8" />
          <h2 className="font-montserrat font-black text-5xl md:text-7xl uppercase tracking-tighter text-white mb-6">
            Project <span className="text-brand-green">90</span>
          </h2>
          <p className="text-xl text-zinc-300 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
            A ruthlessly efficient 90-day challenge exclusive to Premium Members designed to force you to generate at least <strong className="text-white">$1,000</strong>. Includes weekly roadmaps, live kickoff sessions, weekly execution missions, and a progress dashboard.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 p-8 mb-16 text-left">
            <p className="font-bold text-white uppercase tracking-widest mb-2 border-b border-zinc-800 pb-2">Final Reality Check:</p>
            <p className="text-zinc-400 italic font-medium text-lg leading-relaxed">
              "If you don’t take this first step now, you’ll be in the exact same place 6 months from today."
            </p>
            <p className="text-brand-green mt-4 font-bold text-sm uppercase tracking-widest">- Fit Pro Limitless Alpha</p>
          </div>

          <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase tracking-tighter text-white mb-10">
            Ready To Get Started?
          </h2>
          <a
            href="https://www.skool.com/limitless-alphas"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center bg-brand-green text-black font-inter font-black uppercase tracking-widest text-xl px-16 py-6 shadow-[0_15px_40px_rgba(187,246,0,0.4)] transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-3">
              Join Skool Community
              <ArrowRight className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-2 stroke-[3]" />
            </span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default PaidVSL;
