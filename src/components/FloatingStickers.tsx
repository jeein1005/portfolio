import React from 'react';

export const DaisyFlower: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 80 }) => {
  return (
    <div className={`relative inline-block select-none pointer-events-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[2px_3px_0_rgba(0,0,0,0.85)]">
        {/* Flower Petals (Pink with crisp black outline) */}
        <g stroke="#000000" strokeWidth="2.5" strokeLinejoin="round" fill="#FFAEC9">
          <circle cx="50" cy="22" r="16" />
          <circle cx="74" cy="34" r="16" />
          <circle cx="77" cy="62" r="16" />
          <circle cx="56" cy="80" r="16" />
          <circle cx="30" cy="74" r="16" />
          <circle cx="21" cy="48" r="16" />
          <circle cx="32" cy="26" r="16" />
        </g>
        {/* Center yellow disk */}
        <circle cx="50" cy="50" r="18" fill="#FEE440" stroke="#000000" strokeWidth="2.5" />
        {/* Smiley face in center */}
        <ellipse cx="44" cy="46" rx="2.5" ry="4" fill="#000000" />
        <ellipse cx="56" cy="46" rx="2.5" ry="4" fill="#000000" />
        <path d="M 43 53 Q 50 61 57 53" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Cheeks */}
        <circle cx="41" cy="53" r="2" fill="#FF8FA3" />
        <circle cx="59" cy="53" r="2" fill="#FF8FA3" />
      </svg>
    </div>
  );
};

export const RetroSmiley: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 56 }) => {
  return (
    <div className={`relative inline-block select-none pointer-events-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[3px_3px_0_rgba(0,0,0,0.9)]">
        <circle cx="50" cy="50" r="44" fill="#FFD166" stroke="#000000" strokeWidth="4" />
        {/* Eyes */}
        <ellipse cx="37" cy="42" rx="4.5" ry="7" fill="#000000" />
        <ellipse cx="63" cy="42" rx="4.5" ry="7" fill="#000000" />
        {/* Big Smile */}
        <path d="M 32 55 Q 50 78 68 55" stroke="#000000" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
};

export const SparkleStar: React.FC<{ className?: string; size?: number; fill?: string }> = ({ 
  className = '', 
  size = 40,
  fill = '#FFFFFF'
}) => {
  return (
    <div className={`relative inline-block select-none pointer-events-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
        <polygon 
          points="50,5 63,35 95,38 71,60 78,92 50,75 22,92 29,60 5,38 37,35" 
          fill={fill} 
          stroke="#000000" 
          strokeWidth="3.5" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
};

export const BackgroundClouds: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cloud 1 */}
      <div className="absolute top-12 -left-20 w-80 h-36 bg-white/40 blur-xl rounded-full animate-float-slow" />
      {/* Cloud 2 */}
      <div className="absolute top-1/4 -right-24 w-96 h-44 bg-white/45 blur-2xl rounded-full animate-float-reverse" />
      {/* Cloud 3 */}
      <div className="absolute bottom-16 left-1/3 w-[32rem] h-52 bg-white/35 blur-3xl rounded-full" />
    </div>
  );
};
