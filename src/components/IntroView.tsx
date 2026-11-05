import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import { DaisyFlower, RetroSmiley, SparkleStar, Rainbow } from './FloatingStickers';

interface IntroViewProps {
  onStartQuiz: () => void;
}

export const IntroView: React.FC<IntroViewProps> = ({ onStartQuiz }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardStageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline();

      tl.fromTo(
        '.gsap-intro-tag',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' }
      )
        .fromTo(
          '.gsap-intro-card',
          { opacity: 0, y: 40, rotation: -2 },
          { opacity: 1, y: 0, rotation: 0, duration: 0.8, ease: 'elastic.out(1, 0.75)' },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 w-full">
      {/* Decorative Stickers positioned around the hero like in the screenshots */}
      <div className="absolute top-12 left-6 md:left-12 gsap-sticker">
        <DaisyFlower size={194} className="animate-spin-slow" />
      </div>
      <div className="absolute top-20 right-8 md:right-16 gsap-sticker">
        <RetroSmiley size={64} />
      </div>
      <div className="absolute bottom-20 right-1 md:right-100 gsap-sticker [--motion-pulse-offset:0.15;]">
        <SparkleStar size={48} className="animate-float-pulse" />
      </div>
      <div className="absolute top-4 right-1/2 gsap-sticker">
        <SparkleStar size={40} className="animate-float-pulse" />
      </div>
      <div className="absolute top-60 left-150 gsap-sticker">
        <SparkleStar size={30} className="animate-float-pulse [--motion-pulse-offset:0.12;]" />
      </div>
      <div className="absolute bottom-1/2 left-8 md:left-20 gsap-sticker">
        <SparkleStar size={28} className="animate-float-pulse" />
      </div>
      <div className="absolute bottom-50 left-8 md:left-100 gsap-sticker">
        <SparkleStar size={68} className="animate-float-pulse" />
      </div>
      <div className="absolute bottom-30 right-10 md:right-24 gsap-sticker [transform:rotate(45deg)]">
        <DaisyFlower size={124} className="animate-spin-slow" />
      </div>
      <div className="absolute -bottom-40 left-0 gsap-sticker">
        <Rainbow size={673} />
      </div>
      <div className="absolute -top-60 right-0 gsap-sticker sticker-rainbow">
        <Rainbow size={875} />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 pt-20 pb-16 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
        {/* Intro Header */}
        <div className="text-center mb-8 relative">
          <h1
            ref={headlineRef}
            className="text-title retro-3d-title font-serif-title tracking-tight uppercase flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-4"
          >
            <span className="animate-breathe-slow [--motion-breathe-distance:10px] [animation-duration:5000ms]">MATCH</span>
            
            <span className="retro-script-word font-script mr-1 sm:mr-3 select-none animate-breathe-slow [--motion-breathe-distance:8px] [animation-duration:7000ms] [animation-delay:500ms]">
              Of
            </span>

            <span className="animate-breathe-slow">DEV</span>
          </h1>

          <p className="font-sans-body text-sm md:text-base text-slate-800 font-medium max-w-xl mx-auto leading-relaxed mt-8">
            간단한 퀴즈를 풀며
            <br className="hidden sm:inline" />
            내가 같이 일하고 싶은 사람의 작업 성향과 개발 철학을 파악해보세요.
            <br className="hidden sm:inline" />
            <br/>
            질문이 끝나면 당신의 프로젝트에
            <br className="hidden sm:inline" />
            100% 매칭되는 파트너를 만나보실 수 있습니다!
          </p>
        </div>

        {/* Big Action Button */}
        <button
          onClick={() => {
            onStartQuiz();
          }}
          className="group relative inline-flex items-center justify-center gap-3 bg-[#fef08a] hover:bg-[#fde047] text-slate-950 font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 rounded-full border-3 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] transition-all cursor-pointer"
        >
          <span>당신의 프로젝트에 딱 맞는 웹 개발자 찾기</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
