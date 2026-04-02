import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "What does the Fit Pro Alpha system actually do?",
    answer: "We help you scale your fitness coaching business seamlessly by deploying highly-targeted conversion funnels, VSL mechanics, and back-end automations. We engineer the exact machine you need to consistently print high-ticket clients on autopilot."
  },
  {
    question: "How do I know I will get a return on my investment?",
    answer: "We track every single metric ruthlessly. From cost-per-click to total client acquisition cost. Our entire scaling framework is built on strict, transparent KPIs, guaranteeing that you know exactly how your capital is predictably performing."
  },
  {
    question: "Do you only work with massive agencies?",
    answer: "We work exclusively with elite fitness influencers and scaling coaching businesses that possess proven offers. If you have any foundational momentum, our systems are built precisely to pour pure gasoline on the fire."
  },
  {
    question: "Why is Fit Pro Alpha better than organic outreach?",
    answer: "Because organic scaling relies on exhausting hustle and the unpredictable whims of social media algorithms. Our paid acquisition methods and automated pipelines buy back your time and create a mathematically predictable stream of inbound booked calls."
  },
  {
    question: "Can you explicitly guarantee specific revenue results?",
    answer: "While we cannot legally guarantee specific numeric revenue spikes because we can't control your sales team's closing rates, we absolutely guarantee the flawless deployment of our proven scaling infrastructure to get you in front of qualified buyers."
  },
  {
    question: "What exactly is involved in your deployment?",
    answer: "Everything from establishing aggressive paid user acquisition across Meta and YouTube, to systematically building your high-converting Video Sales Letter funnels, and integrating our proprietary AI follow-up nurture sequences natively into your backend."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#0a0a0a] pt-32 pb-40 border-t border-zinc-900 border-b overflow-hidden">
      {/* Immersive Atmospheric Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         {/* Cinematic Dark Background Image */}
         <img 
           src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&h=1080&fit=crop" 
           alt="Atmospheric Background" 
           className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale-[0.8]"
         />
         {/* Ambient Lighting Accents */}
         <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-brand-green/10 blur-[200px] rounded-full mix-blend-screen" />
         <div className="absolute bottom-10 right-10 w-[800px] h-[800px] bg-cyan-700/10 blur-[250px] mix-blend-screen" />
         {/* Deep Gradient Fade-outs for seamless blending */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1300px] relative z-10">
        
        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT: Fixed Info Panel */}
          <div className="w-full lg:w-[40%] flex flex-col items-start lg:sticky lg:top-32 self-start pb-10">
            <h2 className="font-montserrat font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter leading-[1.0] mb-8">
              FREQUENTLY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-green to-lime-300">ASKED</span><br />
              QUESTIONS.
            </h2>
            <p className="font-inter text-zinc-400 text-lg md:text-xl font-medium mb-12 max-w-sm">
              Everything you need to know about our scaling systems, our guarantees, and our exact aggressive methodologies.
            </p>
            <button className="bg-transparent border-[3px] border-[#333] hover:border-brand-green text-zinc-300 hover:text-brand-green font-montserrat font-bold uppercase tracking-widest text-[10px] md:text-xs px-8 py-5 rounded-full transition-all duration-300">
              Still Have Questions?
            </button>
          </div>

          {/* RIGHT: High-End Accordion List */}
          <div className="w-full lg:w-[60%] flex flex-col border-t-2 border-zinc-900">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="group border-b-2 border-zinc-900 overflow-hidden"
                >
                  {/* Question Row */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-8 md:py-10 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                  >
                    <h3 className={`font-inter font-black text-xl md:text-3xl tracking-tight transition-colors duration-400 pr-8 ${isOpen ? 'text-brand-green' : 'text-zinc-200 group-hover:text-white'}`}>
                      {faq.question}
                    </h3>

                    {/* Animated Plus/Cross Icon */}
                    <div className={`shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-[3px] transition-all duration-500 will-change-transform ${isOpen ? 'border-brand-green bg-brand-green/10 rotate-[135deg] shadow-[0_0_20px_rgba(204,255,0,0.2)]' : 'border-zinc-800 group-hover:border-zinc-600 group-hover:bg-zinc-800'}`}>
                      <Plus className={`w-5 h-5 md:w-7 md:h-7 transition-colors duration-400 ${isOpen ? 'text-brand-green' : 'text-zinc-500 group-hover:text-zinc-300'}`} strokeWidth={3} />
                    </div>
                  </button>

                  {/* Answer Content using CSS Grid for butter-smooth automatic height transition */}
                  <div 
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-10' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-inter text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl pr-8 md:pr-16">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;