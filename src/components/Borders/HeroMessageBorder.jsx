import React from 'react';

const HeroMessageBorder = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none -mt-[60px] md:-mt-[120px] lg:-mt-[180px]">
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[100px] md:min-h-[180px] lg:min-h-[260px] object-cover"
        preserveAspectRatio="none"
      >
        {/* Base White Triangle Slant (Bottom Area) */}
        <polygon points="0,170 1440,26 1440,210 0,210" fill="#ffffff" />
        
        {/* Far Left Green Block (Solid) */}
        <polygon points="0,160 240,136 240,171 0,195" fill="#74ee66" />
        
        {/* Center-Left Pale Yellow Block */}
        <polygon points="240,126 600,90 600,120 240,156" fill="#eef8be" />

        {/* Far Left Hollow Outlined Rectangle */}
        <polygon points="-10,110 120,97 120,127 -10,140" stroke="#eef8be" strokeWidth="2" fill="none" />

        {/* Center-Right Pale Green Block */}
        <polygon points="840,100 1200,64 1200,94 840,130" fill="#eef8be" />

        {/* Right Green Block (Large Top) */}
        <polygon points="1200,50 1440,26 1440,70 1200,94" fill="#74ee66" />

        {/* Right Lower Solid Green Block */}
        <polygon points="1080,120 1440,84 1440,108 1080,144" fill="#85ec61" />
        
        {/* Far Right Lower Pale Green Block */}
        <polygon points="1200,144 1440,120 1440,156 1200,180" fill="#c1fa85" />
      </svg>
    </div>
  );
};

export default HeroMessageBorder;
