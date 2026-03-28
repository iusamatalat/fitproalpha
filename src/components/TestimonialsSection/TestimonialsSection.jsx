import React from 'react';
import { Play } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'LEE SELKIRK', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop' },
  { id: 2, name: 'SELMA CHRISTOFI', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop' },
  { id: 3, name: 'ADAM HURDLEY', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=300&fit=crop' },
  { id: 4, name: 'TYE SPIERINGS', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=300&fit=crop' },
  { id: 5, name: 'ROHAN FISHER', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=300&fit=crop' },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full relative bg-[#222]">
      {/* Main Featured Testimonial Hero */}
      <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop" 
            alt="Main Testimonial Background" 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-[#222]/70"></div>
        </div>

        {/* Featured Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center -mt-16">
          {/* Logo */}
          <div className="mb-6 flex flex-col items-center">
            <span className="font-montserrat font-black text-white text-[2.5rem] drop-shadow-md leading-none">m</span>
            <span className="text-[10px] text-white font-montserrat font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-sm">metricon</span>
          </div>

          <p className="font-inter text-xl md:text-2xl lg:text-[1.8rem] text-white font-medium max-w-4xl text-center leading-relaxed mb-6 drop-shadow-md">
            "Since partnering with Fit Pro Alpha the results have been nothing short of outstanding. There are three simple words here and that is: Leads! Leads! Leads!"
          </p>

          <p className="font-montserrat font-bold text-brand-green text-xs md:text-sm tracking-widest uppercase mb-12 drop-shadow-md">
            Domenic Varese, Marketing Manager, Metricon
          </p>

          <button className="w-20 h-20 bg-[#99cc00]/90 hover:bg-brand-green border-[3px] border-transparent text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-[0_0_20px_rgba(204,255,0,0.2)] group hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]">
            <Play className="w-8 h-8 ml-1 fill-current stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Video Thumbnails Marquee */}
      <div className="relative bg-[#222] pt-8 pb-16 z-20 md:-mt-16 bg-gradient-to-t from-[#222] via-[#222]/80 to-transparent">
        {/* Left/Right Fade out Corridors */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-[#222] to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-[#222] to-transparent z-10"></div>

        <div className="flex overflow-x-hidden group">
          <div className="animate-marquee hover:[animation-play-state:paused] flex items-center gap-4 md:gap-6 px-4">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
              <div key={i} className="flex flex-col items-center gap-3 shrink-0 cursor-pointer group/card w-[260px] md:w-[320px]">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-[3px] border-transparent group-hover/card:border-brand-green/30 transition-all duration-300">
                  <img src={testimonial.image} alt={testimonial.name} className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/10 transition-colors duration-300"></div>
                  {/* Small internal play icon wrapper */}
                  <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded flex items-center justify-center">
                    <Play className="w-4 h-4 text-white/90 fill-white/90 drop-shadow-md group-hover/card:text-brand-green transition-colors" />
                  </div>
                </div>
                <span className="font-montserrat font-black text-brand-green text-[10px] md:text-xs uppercase tracking-[0.2em] transform group-hover/card:translate-y-1 transition-transform">
                  {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
