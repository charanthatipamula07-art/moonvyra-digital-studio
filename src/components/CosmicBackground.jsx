import React from 'react';

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top primary nebula aura */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-primary/10 rounded-full blur-[150px] opacity-70"></div>

      {/* Mid-left secondary nebula aura */}
      <div className="absolute top-[35%] -left-64 w-[650px] h-[650px] bg-secondary-container/20 rounded-full blur-[170px] opacity-40"></div>

      {/* Mid-right primary container nebula aura */}
      <div className="absolute top-[65%] -right-64 w-[650px] h-[650px] bg-primary-container/15 rounded-full blur-[180px] opacity-45"></div>

      {/* Subtle bottom canvas glow */}
      <div className="absolute -bottom-40 left-1/3 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[160px] opacity-40"></div>

      {/* Very subtle static cosmic noise / stars overlay via SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
