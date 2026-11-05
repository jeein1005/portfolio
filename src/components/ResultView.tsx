import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { 
  CheckCircle2, 
  Github, 
  FileText, 
  RotateCcw, 
  Sparkles, 
  FolderGit2, 
  Award,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { PersonaResult, calculateQuizResult } from '../utils/quizScore';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { DaisyFlower, RetroSmiley } from './FloatingStickers';

interface ResultViewProps {
  answers: Record<number, 'A' | 'B'>;
  onRestart: () => void;
  onOpenProjects: () => void;
  onOpenAbout: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  answers,
  onRestart,
  onOpenProjects,
  onOpenAbout
}) => {
  const result: PersonaResult = calculateQuizResult(answers);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF8FA3', '#1A535C']
      });
    } catch {
      // fallback
    }

    // GSAP Stagger
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-result-badge',
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' }
      );
      gsap.fromTo(
        '.gsap-result-title',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.gsap-result-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'back.out(1.4)' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-20 pb-20 flex flex-col items-center">
      {/* Decorative Stickers */}
      <div className="absolute top-12 left-4 md:left-10">
        <DaisyFlower size={68} className="animate-spin-slow" />
      </div>
      <div className="absolute top-16 right-4 md:right-12">
        <RetroSmiley size={60} className="animate-float-slow" />
      </div>

      {/* Hero match header */}
      <div className="text-center mb-8 relative">
        <div className="gsap-result-badge inline-flex items-center gap-2 bg-[#fef08a] border-2 border-black rounded-full px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-wider shadow-brutal mb-4 text-slate-900">
          <Sparkles className="w-4 h-4 text-pink-600" />
          <span>MATCHING RESULT: 100% PERFECT FIT</span>
        </div>

        <h1 className="gsap-result-title retro-3d-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
          당신이 찾는 개발자는<br className="sm:hidden" /> 바로 저입니다!
        </h1>

        <p className="text-base sm:text-xl font-bold text-slate-900 max-w-2xl mx-auto">
          선택하신 답변들을 바탕으로 도출된 당신의 이상적인 협업 파트너:
        </p>
      </div>

      {/* Main Result Card */}
      <div className="gsap-result-card w-full bg-[#fff5f7] border-3 md:border-4 border-black rounded-2xl md:rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0_#000] relative mb-8">
        {/* Top Tag & Match Score Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-black/15">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-pink-100 border-2 border-black flex items-center justify-center shadow-[2px_2px_0_#000]">
              <Award className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-pink-600 block">
                ANALYTIC PERSONA
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">
                {result.personaTitle}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl border-2 border-black shadow-[3px_3px_0_#ff4d6d]">
            <span className="text-xs font-bold text-yellow-300">궁합 지수</span>
            <span className="text-xl sm:text-2xl font-black text-white">100%</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-5">
          {result.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white border-2 border-black px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-[1px_1px_0_#000]"
            >
              ✦ {tag}
            </span>
          ))}
        </div>

        {/* Persona Summary & Fit Reason */}
        <div className="bg-white border-2 border-black rounded-xl p-5 sm:p-6 mb-6 shadow-[3px_3px_0_#000]">
          <p className="text-sm sm:text-base font-extrabold text-slate-900 mb-2 leading-relaxed">
            "{result.summary}"
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            💡 <span className="font-bold text-slate-800">선택 결과 분석:</span> {result.fitReason}
          </p>
        </div>

        {/* Key Strengths Grid */}
        <div className="mb-8">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            실무에서 즉시 발휘되는 핵심 역량
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {result.keyStrengths.map((str, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-pink-50/70 border border-black/80 rounded-lg p-3 text-xs sm:text-sm font-bold text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <span>{str}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Snapshot */}
        <div className="bg-[#f0f9ff] border-2 border-black rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[2px_2px_0_#000]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center font-black text-lg text-slate-900 shadow-[1px_1px_0_#000]">
              엄
            </div>
            <div>
              <div className="text-sm sm:text-base font-black text-slate-900">
                {DEVELOPER_PROFILE.name}
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {DEVELOPER_PROFILE.role} · 경력 {DEVELOPER_PROFILE.experienceYears}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onOpenAbout}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border-2 border-black px-4 py-2 rounded-lg text-xs font-bold text-slate-900 shadow-[2px_2px_0_#000] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>상세 소개 / 이력</span>
            </button>
            <button
              onClick={onOpenProjects}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-pink-200 hover:bg-pink-300 border-2 border-black px-4 py-2 rounded-lg text-xs font-bold text-slate-900 shadow-[2px_2px_0_#000] cursor-pointer"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>프로젝트 보기</span>
            </button>
          </div>
        </div>

        {/* Primary Action Buttons (GitHub, Resume, Portfolio, Re-take) */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 pt-2">
          {/* GitHub Button */}
          <a
            href={DEVELOPER_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-slate-800 text-white font-black text-sm px-6 py-3.5 rounded-full border-2 border-black shadow-brutal cursor-pointer"
          >
            <Github className="w-4 h-4 text-white" />
            <span>GitHub 방문하기</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
          </a>

          {/* Projects Gallery Page Button */}
          <button
            onClick={onOpenProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fef08a] hover:bg-[#fde047] text-slate-950 font-black text-sm px-6 py-3.5 rounded-full border-2 border-black shadow-brutal cursor-pointer"
          >
            <FolderGit2 className="w-4 h-4 text-slate-950" />
            <span>프로젝트 페이지로 이동 (4)</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Restart Quiz Button */}
          <button
            onClick={onRestart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-5 py-3.5 rounded-full border-2 border-black shadow-brutal cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>퀴즈 다시 풀기</span>
          </button>
        </div>
      </div>
    </div>
  );
};
