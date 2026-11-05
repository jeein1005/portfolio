import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import { DaisyFlower, RetroSmiley, SparkleStar } from './FloatingStickers';

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
          '.gsap-intro-title',
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.gsap-intro-sub',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          '.gsap-intro-card',
          { opacity: 0, y: 40, rotation: -2 },
          { opacity: 1, y: 0, rotation: 0, duration: 0.8, ease: 'elastic.out(1, 0.75)' },
          '-=0.3'
        )
        .fromTo(
          '.gsap-sticker',
          { scale: 0, rotation: -45 },
          { scale: 1, rotation: 0, duration: 0.7, stagger: 0.15, ease: 'back.out(2)' },
          '-=0.5'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-20 pb-16 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      {/* Decorative Stickers positioned around the hero like in the screenshots */}
      <div className="absolute top-12 left-6 md:left-12 gsap-sticker">
        <DaisyFlower size={72} className="animate-spin-slow" />
      </div>
      <div className="absolute top-20 right-8 md:right-16 gsap-sticker">
        <RetroSmiley size={64} className="animate-float-slow" />
      </div>
      <div className="absolute bottom-16 left-8 md:left-20 gsap-sticker">
        <SparkleStar size={48} fill="#FEF08A" className="animate-float-reverse" />
      </div>
      <div className="absolute bottom-20 right-10 md:right-24 gsap-sticker">
        <DaisyFlower size={60} className="animate-float-slow" />
      </div>

      {/* Intro Header */}
      <div className="text-center mb-8 relative">
        <div className="gsap-intro-tag inline-flex items-center gap-2 bg-white/95 border-2 border-black rounded-full px-4 py-1.5 text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-brutal mb-4 text-slate-800">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span>Interactive Portfolio & Fit Quiz</span>
        </div>

        <p className="font-sans-body tracking-widest text-xs md:text-sm font-bold uppercase text-slate-900/80 mb-2">
          WELCOME TO THE
        </p>

        <h1
          ref={headlineRef}
          className="gsap-intro-title retro-3d-title font-serif-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-4"
        >
          <span>MATCH</span>
          <span className="retro-script-word font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl mx-1 sm:mx-2 select-none">
            of
          </span>
          <span>DEV</span>
        </h1>

        <h2 className="gsap-intro-sub font-sans-body text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto mb-3">
          당신의 프로젝트에 딱 맞는 퍼블리셔/개발자 찾기
        </h2>

        <p className="font-sans-body text-sm md:text-base text-slate-800 font-medium max-w-xl mx-auto leading-relaxed">
          간단한 4가지 A/B 퀴즈를 풀며 나의 작업 성향과 개발 철학을 파악해보세요.
          <br className="hidden sm:inline" />
          질문이 끝나면 당신의 프로젝트에 100% 매칭되는 결과를 만나보실 수 있습니다!
        </p>
      </div>

      {/* Main Interactive Stage Box (Styled like the reference screenshot frame) */}
      <div
        ref={cardStageRef}
        className="gsap-intro-card w-full max-w-3xl bg-[#fff5f7] border-3 md:border-4 border-black rounded-2xl md:rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0_#000] relative overflow-hidden"
      >
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-pink-100 rounded-2xl border-2 border-black flex items-center justify-center mb-5 shadow-brutal">
            <Code2 className="w-9 h-9 text-slate-900" />
          </div>

          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-1">
            ✦ Fast & Fun 1-Minute Quiz ✦
          </span>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
            어떤 작업 스타일의 개발자를 찾고 계신가요?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-lg mb-8 text-left">
            <div className="flex items-start gap-2.5 bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0_#000]">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                A/B 양자택일 즉석 질문
                <span className="block text-[11px] font-normal text-slate-500">직관적인 카드 클릭으로 진행</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0_#000]">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                100% 실무 맞춤형 분석
                <span className="block text-[11px] font-normal text-slate-500">프로젝트 적합도 & 강점 도출</span>
              </div>
            </div>
          </div>

          {/* Big Action Button */}
          <button
            onClick={() => {
              onStartQuiz();
            }}
            className="group relative inline-flex items-center justify-center gap-3 bg-[#fef08a] hover:bg-[#fde047] text-slate-950 font-black text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 rounded-full border-3 border-black shadow-[5px_5px_0_#000] hover:shadow-[7px_7px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] transition-all cursor-pointer"
          >
            <span>퀴즈 시작하기 (Start Quiz)</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
