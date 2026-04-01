import React from 'react';

const OfferingBorder = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-40 pointer-events-none -mt-[60px] md:-mt-[120px] lg:-mt-[180px]">
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[100px] md:min-h-[180px] lg:min-h-[260px] object-cover block"
        preserveAspectRatio="none"
      >
        {/* The Dark Grey background block filling to bottom. Transitioning seamlessly from zinc-100 */}
        <polygon points="0,170 1440,30 1440,200 0,200" fill="#242424" />
        
        {/* Left Outlined Box. Sits partially in white, intersecting dark. */}
        <polygon points="-10,140 180,121 180,146 -10,165" stroke="#74ee66" strokeWidth="1.5" fill="none" />

        {/* Left Solid Pale Yellow Box. Sits distinctly inside the dark area, parallel. */}
        <polygon points="-10,175 240,150 240,175 -10,200" fill="#eef8be" />

        {/* Right Outlined Box. Highest up, sloped properly. */}
        <polygon points="1050,45 1380,12 1380,42 1050,75" stroke="#74ee66" strokeWidth="1.5" fill="none" />

        {/* Right Green Box (Solid). Placed exactly in between the strokes and shadows */}
        <polygon points="1180,45 1450,18 1450,53 1180,80" fill="#74ee66" />

        {/* Deep grey shadow block intersecting green on right */}
        <polygon points="1280,75 1450,58 1450,93 1280,110" fill="#4a4a4a" />
      </svg>
    </div>
  );
};

export default OfferingBorder;
