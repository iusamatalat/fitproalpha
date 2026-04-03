import React, { useEffect, useState, useRef } from 'react';
import { Play } from 'lucide-react';
import bgVideo from '../../../assets/bg.mp4';

const SkewedVideo = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const manuallyPaused = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startVisible = windowHeight;
      const endVisible = windowHeight * 0.35;

      let progress = (startVisible - rect.top) / (startVisible - endVisible);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      // It is visually on screen if the bottom hasn't passed the top of the window,
      // and the top hasn't passed the bottom of the window
      const visible = rect.bottom > 0 && rect.top < windowHeight;
      setIsVisible(visible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle play/pause based on scroll visibility and user intent
  useEffect(() => {
    if (!videoRef.current || !hasInteracted) return;

    // Conditions to auto-play: must be nearly full screen horizontally, visually on screen, and user hasn't explicitly paused it
    const shouldPlay = isVisible && scrollProgress >= 0.95 && !manuallyPaused.current;

    if (shouldPlay) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    } else {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
      }
    }
  }, [isVisible, scrollProgress, hasInteracted]);

  const currentSkew = -12 * (1 - scrollProgress);
  const currentScale = 0.85 + (0.15 * scrollProgress);

  const handleCustomPlayClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      manuallyPaused.current = false;
      videoRef.current.play().catch(() => {});
      setHasInteracted(true);
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    // If the video pauses while it's in full view, it means the user manually stopped it
    // (like clicking the timeline or pause button). We respect that and prevent auto-playing.
    if (isVisible && scrollProgress >= 0.95) {
      manuallyPaused.current = true;
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    manuallyPaused.current = false;
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto z-40 -mt-[80px] md:-mt-[120px] lg:-mt-[160px] px-4 mb-24"
      ref={containerRef}
    >
      <div
        className="wistia-embed__inner relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] origin-center will-change-transform"
        style={{
          transform: `scale(${currentScale}) skewY(${currentSkew}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Deep dark subtle overlay if it has not yet been interacted with */}
        <div className={`absolute inset-0 transition-colors duration-500 z-10 pointer-events-none ${hasInteracted ? 'opacity-0' : 'bg-black/40'}`} />

        {/* Video Thumbnail Space */}
        <div className="absolute inset-0 w-full h-full bg-zinc-900 border-4 md:border-8 border-white box-border">
          <video 
            ref={videoRef}
            src={bgVideo} 
            loop 
            playsInline
            controls={hasInteracted} // Show controls permanently ONLY AFTER first interaction
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Big Custom Initial Hook Play Button (visible only before FIRST play interaction) */}
        {!hasInteracted && (
          <div 
            className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer group"
            onClick={handleCustomPlayClick}
          >
            <div className="bg-brand-green p-4 md:p-6 rounded-full transform transition-transform duration-300 group-hover:scale-110 shadow-2xl flex items-center justify-center">
              <Play className="w-8 h-8 md:w-12 md:h-12 fill-black stroke-black ml-2" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkewedVideo;
