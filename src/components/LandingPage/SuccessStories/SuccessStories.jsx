import React from 'react';
import { ArrowRight } from 'lucide-react';

const stories = [
  { id: 1, title: 'MARSHALL WHITE', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop' },
  { id: 2, title: 'HURDLEYS OFFICE FURNITURE', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&h=600&fit=crop' },
  { id: 3, title: 'CLEARANCE SOLUTIONS AUSTRALIA', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=600&fit=crop' },
  { id: 4, title: 'MASSEUSE MASSAGE', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=600&fit=crop' },
  { id: 5, title: "LET'S GET CARE", image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e8eb3?w=500&h=600&fit=crop' },
  { id: 6, title: 'LUMINA STUDIOS', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=600&fit=crop' },
];

const SuccessStories = () => {
  return (
    <section className="bg-brand-black pb-24 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 pt-16">
        <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-center text-white uppercase leading-[1.05] tracking-tight flex flex-col items-center">
          <span>Become Our Next</span>
          <span>Success Story</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group mb-20 pointer-events-auto">
        {/* Left/Right Fade overlay for generic marquee style */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-brand-black to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-brand-black to-transparent z-20"></div>

        <div className="animate-marquee hover:[animation-play-state:paused] flex items-center gap-6 py-8">
          {[...stories, ...stories].map((story, i) => (
            <div
              key={i}
              className="relative w-[300px] md:w-[350px] h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shrink-0 group/card cursor-pointer"
            >
              <img
                src={story.image}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover scale-[1.01] group-hover/card:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/80 transition-opacity duration-300 group-hover/card:opacity-80"></div>
              <div className="absolute top-0 left-0 p-8 w-full z-10 transition-transform duration-500 group-hover/card:-translate-y-2">
                <h3 className="font-montserrat font-black text-3xl text-white uppercase leading-none drop-shadow-md pr-4">
                  {story.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 flex justify-center pb-12 relative z-10">
        <button className="group relative inline-flex items-center justify-center gap-4 bg-brand-green text-black font-montserrat font-black text-xl md:text-2xl uppercase tracking-widest py-6 px-12 md:px-16 overflow-hidden rounded-full shadow-[0_0_40px_rgba(153,204,0,0.4)] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(153,204,0,0.6)] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <div className="absolute inset-0 bg-[#bbf600]/20 animate-pulse rounded-full blur-xl group-hover:bg-[#bbf600]/40 transition-colors duration-500"></div>
          <span className="relative z-10 flex items-center gap-3 drop-shadow-sm">
            Hit The Damn Button
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-3 transition-transform duration-300" strokeWidth={3} />
          </span>
        </button>
      </div>

    </section>
  );
};

export default SuccessStories;
