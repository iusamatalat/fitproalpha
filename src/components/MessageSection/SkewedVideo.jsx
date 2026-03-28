import React, { useEffect, useState, useRef } from 'react';
import bgVideo from '../../assets/bg.mp4';

const SkewedVideo = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress starting when the element is somewhat visible
      // until it reaches the upper middle of the screen.
      const startVisible = windowHeight;
      const endVisible = windowHeight * 0.35;

      let progress = (startVisible - rect.top) / (startVisible - endVisible);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When progress is 0, skew is -12deg and it's slightly scaled down.
  // When progress is 1, skew is 0deg and scale is 1 (normal square framing).
  // I also added a smoothing effect via a slight spring-like cubic transition.
  const currentSkew = -12 * (1 - scrollProgress);
  const currentScale = 0.85 + (0.15 * scrollProgress);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto z-40 -mt-[80px] md:-mt-[120px] lg:-mt-[160px] px-4 mb-24"
      ref={containerRef}
    >
      <div
        className="wistia-embed__inner relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] cursor-pointer group origin-center will-change-transform"
        style={{
          transform: `scale(${currentScale}) skewY(${currentSkew}deg)`,
          // Use CSS transition for a smoother sub-frame easing where scroll events might stagger
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Dark subtle overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

        {/* Video Thumbnail Space */}
        <div className="absolute inset-0 w-full h-full bg-zinc-900 border-4 md:border-8 border-white box-border">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  );
};

export default SkewedVideo;
