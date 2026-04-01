import React from 'react';

const SuccessStoriesBorder = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-40 pointer-events-none -mt-1 bg-[#0d0d0d]">
      <svg
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[80px] md:min-h-[140px] lg:min-h-[180px] block"
        preserveAspectRatio="none"
      >
        {/* Base slant separating white (top) and dark (bottom) */}
        <polygon points="0,0 1440,0 1440,50 0,150" fill="#f4f6ef" />
        
        {/* Hollow lime outline (top left) */}
        <polygon points="-10,70 140,60 140,90 -10,100" stroke="#ccff00" strokeWidth="1" fill="none" opacity="0.6" />
        
        {/* Solid grass green (left edge, crossing slash) */}
        <polygon points="-20,130 220,113 220,153 -20,170" fill="#68ec53" />
        
        {/* Large pale green (center left) */}
        <polygon points="240,110 590,86 590,121 240,145" fill="#ccff00" opacity="0.25" />
        
        {/* Pale green (center right, entirely in black region) */}
        <polygon points="820,105 1170,81 1170,111 820,135" fill="#ccff00" opacity="0.25" />
        
        {/* Solid grass green (top right area, in white region) */}
        <polygon points="1150,20 1450,-1 1450,39 1150,60" fill="#68ec53" />
        
        {/* Solid grass green (bottom right area) */}
        <polygon points="1080,125 1430,101 1430,136 1080,160" fill="#68ec53" />
        
        {/* Offset pale green overlapping the bottom right one */}
        <polygon points="1210,145 1510,124 1510,159 1210,180" fill="#ccff00" opacity="0.6" />
      </svg>
    </div>
  );
};

export default SuccessStoriesBorder;
