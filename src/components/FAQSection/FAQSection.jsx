import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What does a Digital Marketing Agency actually do?",
    answer: "A digital marketing agency helps you grow your business online by deploying targeted ad campaigns, optimizing your funnels to convert traffic into high-ticket clients, and building backend systems to maximize customer lifetime value. In short: we build the machine that prints money for your coaching business."
  },
  {
    question: "How do I know that I will get a return on my investment?",
    answer: "We track every single metric. From cost-per-click, to cost-per-lead, to cost-per-acquisition. You will have a fully transparent dashboard that shows you exactly how much money you put in, and exactly how much revenue comes out. Our entire system is built around strict KPIs and measurable ROI."
  },
  {
    question: "Do you work with big or small companies?",
    answer: "We work exclusively with elite fitness influencers and scaling coaching businesses that have proven offers and are ready to hyper-scale. If you're just starting out from zero, we might not be the best fit yet. But if you have momentum, we pour gasoline on the fire."
  },
  {
    question: "Why is Fit Pro Alpha the best digital marketing agency?",
    answer: "Because we actually practice what we preach. We don't just run ads; we engineer ruthless, full-funnel scaling systems. We've generated over $7.8 billion for our clients across the board by focusing purely on metrics that actually matter: booked calls and closed deals."
  },
  {
    question: "Can you guarantee results?",
    answer: "While nobody can guarantee absolute specific numbers because we can't control the market or your sales team's closing rate, we do guarantee the flawless deployment of our proven scaling systems. We don't win unless you win."
  },
  {
    question: "What's involved with digital marketing?",
    answer: "Everything from aggressive paid user acquisition across Meta, Google, and YouTube, to building high-converting VSL (Video Sales Letter) funnels, setting up automated email nuture sequences, and seamlessly integrating with your backend sales setters."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 md:py-32 w-full relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Headline */}
        <h2 className="font-montserrat font-black text-[2.5rem] md:text-5xl lg:text-[4rem] text-center text-black uppercase leading-[0.9] tracking-tighter mb-16 flex flex-col items-center">
          <span>You've Got Questions,</span>
          <span>We've Got Answers.</span>
        </h2>

        {/* Accordion Container */}
        <div className="flex flex-col gap-[3px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#f2f2f2] hover:bg-[#e8e8e8] transition-colors duration-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-5 px-6 md:px-8 flex justify-between items-center focus:outline-none group cursor-pointer"
              >
                {/* FIX APPLIED HERE: 
                  Removed mix-blend-difference so the text actually shows up.
                  Changed text-black to text-zinc-900 for a slightly softer, more professional look. 
                */}
                <span className={`font-inter font-bold text-[15px] md:text-base leading-snug pr-4 transition-colors duration-300 ${openIndex === index ? 'text-brand-green' : 'text-zinc-900 group-hover:text-brand-green'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180 text-brand-green' : 'text-zinc-400 group-hover:text-zinc-600'}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 md:px-8 pb-6 pt-1 font-inter text-zinc-600 text-sm md:text-[15px] font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;