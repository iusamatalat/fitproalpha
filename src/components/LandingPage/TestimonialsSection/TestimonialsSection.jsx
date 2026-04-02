import React, { useState } from 'react';
import { Play, Star, ChevronRight } from 'lucide-react';

const testimonials = [
  { 
    id: 1, 
    name: 'LEE SELKIRK', 
    role: 'Owner, Apex Training',
    quote: '"Fit Pro Alpha systems helped us scale from $10k to $60k MRR in just 90 days. The blueprint is simply unmatched."',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1080&h=720&fit=crop' 
  },
  { 
    id: 2, 
    name: 'SELMA CHRISTOFI', 
    role: 'Founder, Elevate Fitness',
    quote: '"I was exhausted doing organic outreach. Now, high-ticket clients come to us on absolute autopilot."',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1080&h=720&fit=crop' 
  },
  { 
    id: 3, 
    name: 'ADAM HURDLEY', 
    role: 'Head Coach, Iron Tribe',
    quote: '"The AI workflows saved me 20 hours a week. I finally have my weekends back while the business grows."',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1080&h=720&fit=crop' 
  },
  { 
    id: 4, 
    name: 'TYE SPIERINGS', 
    role: 'CEO, Spierings Elite',
    quote: '"We doubled our conversion rate in week one. The sales scripts provided in the playbook are pure gold."',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1080&h=720&fit=crop' 
  },
  { 
    id: 5, 
    name: 'ROHAN FISHER', 
    role: 'Owner, Fisher Performance',
    quote: '"A completely done-for-you machine. If you want to dominate your local market, this is the only way."',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1080&h=720&fit=crop' 
  },
  {
    id: 6,
    name: 'SARAH JENKINS',
    role: 'Founder, SJ Athletics',
    quote: '"From completely stagnant to hiring 3 new coaches to handle the lead volume. It fundamentally changed everything."',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1080&h=720&fit=crop'
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = testimonials[activeIndex];

  return (
    <section className="relative w-full bg-[#111] pt-24 pb-32 overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-[1500px] relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-[1.1] md:leading-none mb-4">
              Real <span className="text-brand-green text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-lime-300">Results.</span>
            </h2>
            <p className="font-inter text-zinc-400 text-lg md:text-xl font-medium">
              Don't just take our word for it. Here is the raw, unedited truth from coaches who implemented our systems.
            </p>
          </div>
        </div>

        {/* Masterclass Layout Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Featured Video Player (Left Side) */}
          <div className="xl:col-span-8 flex flex-col h-full animate-[fadeIn_0.6s_ease-out]">
            <div className="relative w-full aspect-square sm:aspect-video md:aspect-[21/9] xl:aspect-auto xl:h-[700px] rounded-[2rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-[3px] border-zinc-800 hover:border-brand-green/50 transition-colors duration-500 bg-black">
              
              {/* Image with slow zoom */}
              <img 
                key={`img-${activeItem.id}`}
                src={activeItem.image} 
                alt={activeItem.name} 
                className="absolute inset-0 w-full h-full object-cover animate-[kenburns_20s_infinite_alternate] opacity-80"
              />
              
              {/* Cinematic Vignette/Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 via-transparent to-transparent opacity-90" />
              
              {/* Massive Play Button */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-auto md:bottom-1/2 md:inset-0 md:flex md:items-center md:justify-center pointer-events-none z-20">
                <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-brand-green/20 backdrop-blur-md border-2 border-brand-green/50 shadow-[0_0_50px_rgba(204,255,0,0.4)] group-hover:scale-110 group-hover:bg-brand-green/30 transition-all duration-500 cursor-pointer pointer-events-auto">
                  <Play className="w-8 h-8 md:w-14 md:h-14 text-white fill-white ml-2 drop-shadow-lg" />
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-brand-green animate-[ping_2s_ease-out_infinite] opacity-20" />
                </div>
              </div>

              {/* Lower Third Info Card */}
              <div key={`info-${activeItem.id}`} className="absolute bottom-0 left-0 w-full md:w-3/4 lg:w-2/3 p-6 md:p-10 animate-[slideUp_0.5s_ease-out] z-30">
                <div className="flex items-center gap-1.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 md:w-6 md:h-6 text-brand-green fill-brand-green" />
                  ))}
                </div>
                <h3 className="font-montserrat font-black text-2xl md:text-3xl lg:text-4xl text-white uppercase tracking-wide mb-2 drop-shadow-md">
                  {activeItem.name}
                </h3>
                <p className="font-inter text-brand-green font-bold text-xs md:text-md uppercase tracking-widest mb-4">
                  {activeItem.role}
                </p>
                <div className="p-4 md:p-6 bg-black/50 backdrop-blur-lg rounded-xl border-l-[4px] border-brand-green shadow-xl">
                    <p className="font-inter text-zinc-200 text-sm md:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-lg italic">
                    {activeItem.quote}
                    </p>
                </div>
              </div>

            </div>
          </div>

          {/* Playlist Roster (Right Side) - AUTOSCROLLING LOOP */}
          <div className="xl:col-span-4 relative overflow-hidden h-[600px] xl:h-[700px] rounded-2xl group/marquee pr-2 xl:pr-4 mt-8 xl:mt-0">
            
            {/* Top/Bottom Gradient Masks to safely blur the scrolling elements into the background */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#111] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#111] to-transparent z-20 pointer-events-none" />

            {/* Exactly Matches SuccessStories Logic */}
            <div className="animate-marquee-vertical group-hover/marquee:[animation-play-state:paused] w-full pt-4">
              
              {/* Render 2 identical blocks to create the seamless mathematical loop offset matching -50% translateY */}
              {[0, 1].map((blockIndex) => (
                <div key={blockIndex} className="flex flex-col gap-3 md:gap-4 mb-3 md:gap-4 w-full">
                  {testimonials.map((test, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <div 
                        key={`${blockIndex}-${test.id}`}
                        onClick={() => setActiveIndex(index)}
                        className={`flex items-stretch md:items-center gap-4 p-3 md:p-4 rounded-2xl cursor-pointer transition-all duration-300 group ${
                          isActive 
                            ? 'bg-zinc-800/80 border-l-[6px] border-brand-green shadow-lg scale-[1.02] z-10 relative' 
                            : 'bg-[#1a1a1a] border-l-[6px] border-transparent hover:bg-zinc-800/50 hover:border-zinc-600'
                        }`}
                      >
                        {/* Thumbnail */}
                        <div className="relative w-24 h-28 md:w-36 md:h-24 shrink-0 rounded-xl overflow-hidden border-2 border-zinc-700 group-hover:border-brand-green/50 transition-colors">
                          <img src={test.image} alt={test.name} className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105'}`} />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className={`w-5 h-5 md:w-6 md:h-6 ml-1 transition-colors ${isActive ? 'text-brand-green fill-brand-green' : 'text-white/80 fill-white/80 group-hover:text-white'}`} />
                          </div>
                        </div>

                        {/* Thumbnail Info */}
                        <div className="flex-1 flex flex-col justify-center py-1">
                          <h4 className={`font-montserrat font-black text-xs md:text-sm uppercase tracking-wider mb-1 ${isActive ? 'text-brand-green' : 'text-zinc-200 group-hover:text-white'}`}>
                            {test.name}
                          </h4>
                          <p className="font-inter text-zinc-500 text-[10px] md:text-xs font-medium line-clamp-3 leading-snug">
                            {test.quote}
                          </p>
                        </div>

                        {/* Action Icon */}
                        <div className="shrink-0 pl-1 md:pl-2 flex items-center justify-center">
                          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-brand-green translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1'}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Internal Custom Keyframes definition for standalone usage */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default TestimonialsSection;
