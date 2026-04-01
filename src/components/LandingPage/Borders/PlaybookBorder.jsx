import React from 'react';

const PlaybookBorder = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-40 pointer-events-none -mt-[60px] md:-mt-[120px] lg:-mt-[180px]">
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[100px] md:min-h-[180px] lg:min-h-[260px] object-cover block drop-shadow-sm"
        preserveAspectRatio="none"
      >
        {/* The Light baseline filling to bottom */}
        <polygon points="0,170 1440,30 1440,200 0,200" fill="#f4f6ef" />
        
        {/* Left Outlined Box */}
        <polygon points="-10,135 150,120 150,150 -10,165" stroke="#74ee66" strokeWidth="1.5" fill="none" />

        {/* Left Solid Pale Yellow Box */}
        <polygon points="-10,170 300,140 300,165 -10,195" fill="#eef8be" />

        {/* Right Green Box (Solid) - Primary intersecting block */}
        <polygon points="1080,45 1440,8 1440,45 1080,82" fill="#74ee66" />
        
        {/* Right Green Box 2 (Solid) - Parallel block below it */}
        <polygon points="1200,85 1440,60 1440,90 1200,115" fill="#74ee66" />
      </svg>
    </div>
  );
};

export default PlaybookBorder;
