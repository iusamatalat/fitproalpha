import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, Video, FileText, Users, Calendar } from 'lucide-react';
import logoUrl from '../../../../assets/logo.png';

const FreeVSL = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-inter selection:bg-brand-green selection:text-black">
      
      {/* Header/Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <img src={logoUrl} alt="Fit Pro Alpha Logo" className="h-[60px] md:h-[80px] mx-auto mb-10" style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(85%) saturate(3061%) hue-rotate(24deg) brightness(109%) contrast(98%)' }} />
          
          <div className="inline-block bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full mb-6 relative">
            <span className="text-zinc-400 font-medium text-sm md:text-base uppercase tracking-widest relative z-10">
              Exclusive Access
            </span>
          </div>

          <h1 className="font-montserrat font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase tracking-tighter mb-8 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            Fit Pro Alpha <br />
            <span className="text-brand-green">Free Tribe</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed mb-12 relative z-10">
            We’re glad that you’ve shown interest in joining our FPA Free community. Before getting into further details, let us clarify the protocols of joining.
          </p>
        </div>
      </section>

      {/* Protocols Section (Who it's for / Not for) */}
      <section className="py-20 px-6 md:px-12 bg-zinc-950 border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Who it's FOR */}
          <div className="bg-black border border-zinc-800 p-8 md:p-12 shadow-[10px_10px_0px_rgba(187,246,0,0.2)] hover:shadow-[10px_10px_0px_rgba(187,246,0,1)] hover:-translate-y-2 transition-all duration-300 group">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl uppercase mb-10 text-white flex items-center gap-4 border-b border-zinc-800 pb-6 group-hover:border-brand-green/30 transition-colors">
              <span className="text-brand-green relative">
                Inside The Community
                <span className="absolute -bottom-[25px] left-0 w-1/3 h-[2px] bg-brand-green"></span>
              </span>
            </h2>
            <ul className="space-y-6">
              {[
                "To start and grow their online health & fitness coaching business.",
                "To attract and close high-paying clients using proven strategies.",
                "To learn the proven methods to scale your business.",
                "To build brand and establish themselves as experts in your niche.",
                "To create a consistent income stream through coaching, without burnout.",
                "To master social media marketing and sales to get more clients.",
                "To get step-by-step roadmap from industry experts and avoid costly mistakes.",
                "To be part of a supportive community that shares knowledge and wins together."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-5 group/item">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-brand-green shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                  <span className="text-zinc-300 text-base md:text-lg leading-snug group-hover/item:text-white transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who it's NOT for */}
          <div className="bg-black border border-zinc-800 p-8 md:p-12 shadow-[10px_10px_0px_rgba(239,68,68,0.2)] hover:shadow-[10px_10px_0px_rgba(239,68,68,1)] hover:-translate-y-2 transition-all duration-300 group">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl uppercase mb-10 text-white flex items-center gap-4 border-b border-zinc-800 pb-6 group-hover:border-red-500/30 transition-colors">
              <span className="text-red-500 relative">
                This Is NOT For You If:
                <span className="absolute -bottom-[25px] left-0 w-1/3 h-[2px] bg-red-500"></span>
              </span>
            </h2>
            <ul className="space-y-6">
              {[
                "Are looking for quick fixes or overnight success.",
                "Are not willing to take action and implement proven strategies.",
                "Expect to make money without effort or investing in your skills.",
                "Are not open to learning and trying new approaches.",
                "Think social media and marketing are not important for growing a business.",
                "Are not serious about helping clients achieve real results in health & fitness."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-5 group/item">
                  <XCircle className="w-6 h-6 md:w-7 md:h-7 text-red-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                  <span className="text-zinc-300 text-base md:text-lg leading-snug group-hover/item:text-white transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* What Will You Get */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-brand-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(187,246,0,0.03)_0%,transparent_50%)] pointer-events-none z-0" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 relative">
            <h2 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-white mb-6 relative inline-block">
              What Will You <span className="text-brand-green">Get?</span>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-brand-green"></div>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium mt-10">This is where you learn all the required skills to grow your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <Video className="w-8 h-8"/>, title: "Social Media Growth", desc: "How growth works on social media as a health & fitness coach." },
              { icon: <ArrowRight className="w-8 h-8"/>, title: "$1000 / Month Planner", desc: "How to make $1000 / month as an online health & fitness coach." },
              { icon: <FileText className="w-8 h-8"/>, title: "2025 Complete Roadmap", desc: "Complete roadmap to start & scale your business to $1000/month consistently." },
              { icon: <Users className="w-8 h-8"/>, title: "First 5 Clients Strategy", desc: "Gain exclusive access to proven strategies to grab and retain your first 5 clients." },
              { icon: <CheckCircle2 className="w-8 h-8"/>, title: "Delivering Elite Results", desc: "Learn to deliver results confidently to your clients to retain them every month." },
              { icon: <Calendar className="w-8 h-8"/>, title: "Weekly Support & Calls", desc: "Weekly 1 live session & team support. Plus a lot of valuable resources!" }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-10 hover:bg-zinc-800 hover:border-brand-green transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:scale-[2]" />
                <div className="w-16 h-16 bg-black border border-zinc-700 flex items-center justify-center text-brand-green mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 relative z-10">
                  {item.icon}
                </div>
                <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-4 relative z-10">{item.title}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed text-sm md:text-base relative z-10 group-hover:text-zinc-300 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Join */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-10 text-white">
            Join FPA Free Tribe For <br/>
            <span className="bg-brand-green text-black px-6 py-2 inline-block transform -skew-x-6 mt-6 shadow-[10px_10px_0px_rgba(255,255,255,1)]">ZERO COST</span>
          </h2>
          
          <div className="bg-black border border-zinc-800 p-8 md:p-14 text-left mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-1 hover:rotate-0 transition-transform duration-500 relative">
            <h3 className="font-montserrat font-black text-3xl md:text-4xl uppercase mb-6 text-brand-green">⚠️ Important Protocol</h3>
            <p className="text-zinc-300 text-lg md:text-xl md:leading-relaxed mb-10 font-medium border-l-4 border-brand-green pl-6">
              Answer the questions properly, Add your profile picture, and optimise your bio. <span className="text-white font-bold">Otherwise your request will be automatically denied.</span>
            </p>

            <div className="space-y-6 text-lg md:text-xl font-medium text-white mb-6">
              <div className="flex gap-6 items-center bg-zinc-900/50 p-4 border border-zinc-800">
                <span className="w-12 h-12 bg-brand-green text-black flex items-center justify-center font-black text-2xl shrink-0">1</span>
                Click the access link below.
              </div>
              <div className="flex gap-6 items-center bg-zinc-900/50 p-4 border border-zinc-800">
                <span className="w-12 h-12 bg-brand-green text-black flex items-center justify-center font-black text-2xl shrink-0">2</span>
                Click on "Join Group" on Skool.
              </div>
              <div className="flex gap-6 items-center bg-zinc-900/50 p-4 border border-zinc-800">
                <span className="w-12 h-12 bg-brand-green text-black flex items-center justify-center font-black text-2xl shrink-0">3</span>
                Add your details and enter the verification code sent to your email.
              </div>
              <div className="flex gap-6 items-center bg-zinc-900/50 p-4 border border-zinc-800 border-l-4 border-l-brand-green">
                <span className="w-12 h-12 bg-brand-green text-black flex items-center justify-center font-black text-2xl shrink-0">!</span>
                You’re in. Welcome to the Tribe.
              </div>
            </div>
          </div>

          <a 
            href="https://www.skool.com/fit-pro-alpha-tribe-free-4746"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center bg-brand-green text-black font-inter font-black uppercase tracking-widest text-lg md:text-2xl px-12 py-6 shadow-[0_10px_40px_rgba(187,246,0,0.35)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] overflow-hidden rounded-full w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-4">
              Join Skool Group Now
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-2 stroke-[3]" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out z-0 pointer-events-none" />
          </a>
        </div>
      </section>

      {/* Upsell / Premium Community Section */}
      <section className="py-24 px-6 md:px-12 bg-brand-black border-t border-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-brand-green/10 text-brand-green px-6 py-2 uppercase font-montserrat font-bold tracking-widest text-sm mb-8 border border-brand-green/20 rounded-full">
            Accelerate Your Results
          </div>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-7xl uppercase tracking-tighter text-white mb-10 leading-[0.9]">
            Scale To <br className="hidden md:block"/> <span className="text-brand-green drop-shadow-[0_0_20px_rgba(187,246,0,0.3)]">$12,000 / Year Minimum</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-medium max-w-4xl mx-auto mb-16 leading-relaxed">
            If you want to grow fast, build and scale your business rapidly, join our Premium Community. Here are the results you can expect:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 shadow-lg hover:border-brand-green transition-colors duration-300">
              <h4 className="font-montserrat font-black text-2xl text-white mb-3 uppercase">Saeeda Maryam</h4>
              <p className="text-brand-green font-bold text-xl md:text-2xl tracking-tight">Crossed $20,000 In 10 Months</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 shadow-lg hover:border-brand-green transition-colors duration-300">
              <h4 className="font-montserrat font-black text-2xl text-white mb-3 uppercase">Fatima Ahmed</h4>
              <p className="text-brand-green font-bold text-xl md:text-2xl tracking-tight">Hit $10,000 Milestone</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 shadow-lg hover:border-brand-green transition-colors duration-300">
              <h4 className="font-montserrat font-black text-2xl text-white mb-3 uppercase">Haider Ali Khan</h4>
              <p className="text-brand-green font-bold text-xl md:text-2xl tracking-tight">Hit $10,000 Milestone</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 shadow-lg hover:border-brand-green transition-colors duration-300">
              <h4 className="font-montserrat font-black text-2xl text-white mb-3 uppercase">Laiba Moazam</h4>
              <p className="text-brand-green font-bold text-xl md:text-2xl tracking-tight">Hit $3,000 In 6 Months</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 shadow-lg hover:border-brand-green transition-colors duration-300">
              <h4 className="font-montserrat font-black text-2xl text-white mb-3 uppercase">Farzeen Shahid</h4>
              <p className="text-brand-green font-bold text-xl md:text-2xl tracking-tight">Made 50,000 PKR Fast</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 shadow-lg border-l-[4px] border-l-brand-green hover:border-brand-green transition-colors duration-300">
              <h4 className="font-montserrat font-black text-2xl text-white mb-3 uppercase">Average Beginner Growth</h4>
              <p className="text-white font-medium text-lg leading-relaxed">
                From charging <span className="line-through text-zinc-500">1,500 PKR</span> to closing <span className="text-brand-green font-bold">$100-$500</span> per client.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 bg-zinc-950 p-8 md:p-12 border border-zinc-900 rounded-3xl max-w-4xl mx-auto shadow-2xl">
            <div className="text-left w-full sm:flex-1">
              <h3 className="font-montserrat font-black text-2xl uppercase mb-2">Ready To Dominate?</h3>
              <p className="text-zinc-400 font-medium">Choose your ascension path below.</p>
            </div>
            <div className="flex flex-col gap-4 w-full sm:w-auto shrink-0">
              <a 
                href="https://www.skool.com/fit-pro-alpha-community"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-block bg-brand-green text-black font-inter font-black uppercase tracking-widest text-sm md:text-base px-8 py-4 shadow-[0_5px_15px_rgba(187,246,0,0.3)] hover:scale-105 transition-all duration-300 rounded-full"
              >
                Join Premium Now
              </a>
              
              <a 
                href="https://calendly.com/fitproalpha/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-block bg-transparent border-2 border-zinc-700 text-white font-inter font-bold uppercase tracking-widest text-sm md:text-base px-8 py-4 hover:border-white hover:text-black hover:bg-white transition-all duration-300 rounded-full"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FreeVSL;
