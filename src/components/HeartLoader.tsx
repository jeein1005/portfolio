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

  // SVG heart geometry (width 100, height 90)
  // Heart bounds: approx y from 12 to 85, total height ~73
  // Y coordinate of liquid level: 85 - (progress / 100) * 73
  const heartHeight = 75;
  const bottomY = 88;
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
            viewBox="0 0 100 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
          >
            <defs>
              {/* Clip path defining the heart silhouette */}
              <clipPath id="heartMask">
                <path
                  d="M50 85 C50 85 12 60 12 32 C12 18 24 10 37 10 C44 10 48 14 50 18 C52 14 56 10 63 10 C76 10 88 18 88 32 C88 60 50 85 50 85 Z"
                />
              </clipPath>
            </defs>

            {/* Background of heart: soft lavender/pink tint */}
            <path
              d="M50 85 C50 85 12 60 12 32 C12 18 24 10 37 10 C44 10 48 14 50 18 C52 14 56 10 63 10 C76 10 88 18 88 32 C88 60 50 85 50 85 Z"
              fill="#fbeff3"
            />

            {/* Rising red liquid clipped inside the heart */}
            <g clipPath="url(#heartMask)">
              <rect
                x="0"
                y={liquidY}
                width="100"
                height="100"
                fill="#FF002B"
                style={{
                  transition: 'y 0.05s linear'
                }}
              />
            </g>

            {/* Crisp black heart outline */}
            <path
              ref={heartPathRef}
              d="M50 85 C50 85 12 60 12 32 C12 18 24 10 37 10 C44 10 48 14 50 18 C52 14 56 10 63 10 C76 10 88 18 88 32 C88 60 50 85 50 85 Z"
              stroke="#000000"
              strokeWidth="2.8"
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
