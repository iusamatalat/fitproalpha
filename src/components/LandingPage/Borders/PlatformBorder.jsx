import React from 'react';

const PlatformBorder = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-40 pointer-events-none -mt-1 bg-transparent">
      <svg
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-auto min-h-[80px] md:min-h-[140px] lg:min-h-[180px] block"
        preserveAspectRatio="none"
      >
        {/* Fill from bottom with white to create the slant, leaving top transparent to reveal grid */}
        <polygon points="0,150 1440,50 1440,200 0,200" fill="#f4f6ef" />
        
        {/* Pale green floating in top-left dark region */}
        <polygon points="100,20 420,-2 420,33 100,55" fill="#ccff00" opacity="0.15" />

        {/* Solid grass green intersecting on the far left */}
        <polygon points="-10,130 190,116 190,156 -10,170" fill="#68ec53" />

        {/* Pale green intersecting in the center */}
        <polygon points="650,90 1000,66 1000,101 650,125" fill="#ccff00" opacity="0.3" />

        {/* Hollow floating block in dark region, center-right */}
        <polygon points="800,30 980,17.5 980,52.5 800,65" stroke="#ccff00" strokeWidth="2" fill="none" opacity="0.6" />

        {/* Solid grass green in the white region, right side */}
        <polygon points="1150,110 1500,86 1500,131 1150,155" fill="#68ec53" />
        
        {/* Partially overlapping darker/pale element bottom right */}
        <polygon points="1080,135 1380,114 1380,149 1080,170" fill="#ccff00" opacity="0.4" />
      </svg>
    </div>
  );
};

export default PlatformBorder;
