import React from 'react';

const MessageDividerBorder = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 bg-white">
      <svg
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[80px] md:min-h-[120px] lg:min-h-[160px] object-cover block"
        preserveAspectRatio="none"
      >
        {/* Grey Base (Tailwind bg-zinc-100 is #f4f4f5) */}
        <polygon points="0,120 1440,20 1440,165 0,165" fill="#f4f4f5" />
        
        {/* Far Left Green Outline Box */}
        <polygon points="-5,90 140,80 140,110 -5,120" stroke="#74ee66" strokeWidth="1.5" fill="none" />

        {/* Far Left Solid Green Box */}
        <polygon points="0,115 350,91 350,126 0,150" fill="#74ee66" />
        
        {/* Left Pale Yellow Box UNDER green */}
        <polygon points="0,140 250,123 250,165 0,165" fill="#eef8be" />

        {/* Top Right Pale Green Box */}
        <polygon points="1200,36 1440,20 1440,46 1200,62" fill="#eef8be" />
      </svg>
    </div>
  );
};

export default MessageDividerBorder;
