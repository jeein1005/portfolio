import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface HeartLoaderProps {
  onFinish: () => void;
  minDuration?: number; // milliseconds
}

export const HeartLoader: React.FC<HeartLoaderProps> = ({ onFinish, minDuration = 1800 }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heartPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const startTime = Date.now();
    let animFrameId: number;

    const updateFill = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / minDuration) * 100);
      setProgress(currentProgress);

      if (currentProgress < 100) {
        animFrameId = requestAnimationFrame(updateFill);
      } else {
        // Heart is full, fade out the loader overlay
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 1.02,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
              onFinish();
            }
          });
        } else {
          onFinish();
        }
      }
    };

    animFrameId = requestAnimationFrame(updateFill);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [minDuration, onFinish]);

  // SVG heart geometry (viewBox: 0 0 512 512 기준)
  // 하트 최하단 Y = 448, 최상단 곡선 Y = 약 40 (총 높이: 408)
  const bottomY = 448;
  const heartHeight = 408;
  const liquidY = bottomY - (progress / 100) * heartHeight;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center select-none"
      style={{
        background: 'linear-gradient(180deg, #fbf3e8 0%, #fae6ec 50%, #fed2de 100%)'
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Heart SVG matching Screenshot_2026-10-29_at_1.45.15_PM_73f56cb6.png */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative">
          <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
          >
            <defs>
              {/* Clip path defining the heart silhouette */}
              <clipPath id="heartMask">
                <path d="M 256 448 C 244.6 448 233.8 443.3 225.8 435.1 L 63.8 269 C 14.8 218.8 16.5 137.9 67.5 89.8 C 117.8 42.4 197.8 45.8 244.1 97.4 L 256 110.7 L 267.9 97.4 C 314.2 45.8 394.2 42.4 444.5 89.8 C 495.5 137.9 497.2 218.8 448.2 269 L 286.2 435.1 C 278.2 443.3 267.4 448 256 448 Z" />
              </clipPath>
            </defs>

            {/* Background of heart: soft lavender/pink tint */}
            <path
              d="M 256 448 C 244.6 448 233.8 443.3 225.8 435.1 L 63.8 269 C 14.8 218.8 16.5 137.9 67.5 89.8 C 117.8 42.4 197.8 45.8 244.1 97.4 L 256 110.7 L 267.9 97.4 C 314.2 45.8 394.2 42.4 444.5 89.8 C 495.5 137.9 497.2 218.8 448.2 269 L 286.2 435.1 C 278.2 443.3 267.4 448 256 448 Z"
              fill="#fbeff3"
            />

            {/* Rising red liquid clipped inside the heart */}
            <g clipPath="url(#heartMask)">
              <rect
                x="0"
                y={liquidY}
                width="512"
                height="512"
                fill="#FF002B"
                style={{
                  transition: 'y 0.05s linear'
                }}
              />
            </g>

            {/* Crisp black heart outline */}
            <path
              ref={heartPathRef}
              d="M 256 448 C 244.6 448 233.8 443.3 225.8 435.1 L 63.8 269 C 14.8 218.8 16.5 137.9 67.5 89.8 C 117.8 42.4 197.8 45.8 244.1 97.4 L 256 110.7 L 267.9 97.4 C 314.2 45.8 394.2 42.4 444.5 89.8 C 495.5 137.9 497.2 218.8 448.2 269 L 286.2 435.1 C 278.2 443.3 267.4 448 256 448 Z"
              stroke="#000000"
              strokeWidth="14"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
