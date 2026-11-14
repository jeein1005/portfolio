import React from 'react';
import { Heart } from 'lucide-react';

interface RetroFrameCardProps {
  children: React.ReactNode;
  className?: string;
  /** 바깥 프레임 색상 (예: 레드 #FF1E1E, 파스텔 핑크 #FFC7E9) */
  frameColor?: string;
  /** 안쪽 카드 배경색 */
  innerBgColor?: string;
}

const CornerScoop: React.FC<{
  position: 'tl' | 'tr' | 'bl' | 'br';
  frameColor: string;
}> = ({ position, frameColor }) => {
  const positionClasses = {
    tl: '-top-[2px] -left-[2px]',
    tr: '-top-[2px] -right-[2px]',
    bl: '-bottom-[2px] -left-[2px]',
    br: '-bottom-[2px] -right-[2px]',
  }[position];

  const cornerRotation = {
    tl: 'rotate(0 12 12)',
    tr: 'rotate(90 12 12)',
    br: 'rotate(180 12 12)',
    bl: 'rotate(270 12 12)',
  }[position];

  const heartPositionClasses = {
    tl: '-top-[1.5px] -left-[1.5px]',
    tr: '-top-[1.5px] -right-[1.5px]',
    bl: '-bottom-[1.5px] -left-[1.5px]',
    br: '-bottom-[1.5px] -right-[1.5px]',
  }[position];

  return (
    <div
      className={`absolute ${positionClasses} w-[24px] h-[24px] pointer-events-none z-10`}
      aria-hidden="true"
    >
      {/* 모서리 곡선 프레임 (24x24) */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={cornerRotation}>
          <path
            d="M 0 0 L 23 0 L 23 1 A 22 22 0 0 1 1 23 L 0 23 Z"
            fill={frameColor}
          />
          <path
            d="M 23 1 A 22 22 0 0 1 1 23"
            stroke="#000000"
            strokeWidth="1"
            strokeLinecap="square"
          />
        </g>
      </svg>

      {/* 하트 아이콘 */}
      <Heart
        className={`absolute ${heartPositionClasses} w-3.5 h-3.5 fill-black text-black`}
      />
    </div>
  );
};

export const RetroFrameCard: React.FC<RetroFrameCardProps> = ({
  children,
  className = '',
  frameColor = '#FF1E1E',
  innerBgColor = '#FFFFFF',
}) => {
  return (
    <div
      style={{ backgroundColor: frameColor }}
      className={`relative rounded-lg border-2 border-black p-2 ${className}`}
    >
      <div
        style={{ backgroundColor: innerBgColor }}
        className="relative w-full h-full border-2 border-black p-5 sm:p-6"
      >
        <CornerScoop position="tl" frameColor={frameColor} />
        <CornerScoop position="tr" frameColor={frameColor} />
        <CornerScoop position="bl" frameColor={frameColor} />
        <CornerScoop position="br" frameColor={frameColor} />

        <div className="relative z-0">{children}</div>
      </div>
    </div>
  );
};