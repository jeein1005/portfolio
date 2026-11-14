import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { RetroFrameCard } from './RetroFrameCard';

interface FlipCardProps {
  /** 앞면(기본 상태)에 들어갈 내용 */
  frontContent: React.ReactNode;
  /** 뒷면(뒤집힌 상태)에 들어갈 내용 */
  backContent: React.ReactNode;
  /** 추가 스타일 (최소 높이 min-h-[...] 나 비율 aspect-[...] 등) */
  className?: string;
  /** 뒷면 프레임 색상 (기본값: #FF1E1E) */
  backFrameColor?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  className = '',
  backFrameColor = '#FF1E1E',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // 키보드 접근성 (Enter 또는 Space 키로도 카드 뒤집기 지원)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleFlip();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onClick={handleToggleFlip}
      onKeyDown={handleKeyDown}
      className={`group cursor-pointer select-none [perspective:1000px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-lg ${className}`}
    >
      {/* grid를 사용해 앞면과 뒷면을 같은 셀(col-start-1 row-start-1)에 겹쳐 높이 동기화 */}
      <div
        className={`grid grid-cols-1 grid-rows-1 w-full h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] [transform-style:preserve-3d] [@media(hover:hover)]:group-hover:[transform:rotateY(180deg)] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* 1. 앞면 (호버/터치 전) */}
        <div className="col-start-1 row-start-1 relative w-full h-full rounded-lg border-2 border-black bg-gradient-to-t from-[#FFE3F4] to-white p-5 sm:p-6 [backface-visibility:hidden] flex flex-col justify-between">
          {/* 네 모서리 하트 장식 */}
          <Heart className="absolute top-2 left-2 w-3.5 h-3.5 fill-black text-black pointer-events-none" />
          <Heart className="absolute top-2 right-2 w-3.5 h-3.5 fill-black text-black pointer-events-none" />
          <Heart className="absolute bottom-2 left-2 w-3.5 h-3.5 fill-black text-black pointer-events-none" />
          <Heart className="absolute bottom-2 right-2 w-3.5 h-3.5 fill-black text-black pointer-events-none" />

          <div className="w-full h-full flex flex-col justify-between">
            {frontContent}
          </div>
        </div>

        {/* 2. 뒷면 (호버/터치 후) */}
        <div className="col-start-1 row-start-1 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <RetroFrameCard className="w-full h-full" frameColor={backFrameColor}>
            {backContent}
          </RetroFrameCard>
        </div>
      </div>
    </div>
  );
};