import React, { useState } from 'react';
import { Heart, Check, Github, ArrowLeft, ArrowUp } from 'lucide-react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/portfolioData';
import { DaisyFlower, RetroSmiley } from './FloatingStickers';

interface ProjectsPageProps {
  onBackToQuiz: () => void;
  embedded?: boolean;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBackToQuiz, embedded = false }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div
      id="projects"
      className={
        embedded
          ? 'relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center scroll-mt-24 pt-2'
          : 'relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-20 flex flex-col items-center'
      }
    >
      {/* Decorative Stickers only when viewed standalone */}
      {!embedded && (
        <>
          <div className="absolute top-16 left-6 md:left-14">
            <DaisyFlower size={68} className="animate-spin-slow" />
          </div>
          <div className="absolute top-20 right-8 md:right-16">
            <RetroSmiley size={60} className="animate-float-slow" />
          </div>
        </>
      )}

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 relative">
        <h1 className="retro-3d-title font-serif-title text-4xl sm:text-6xl md:text-7xl tracking-tight mb-3 uppercase flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-4">
          <span>WALL</span>
          <span className="retro-script-word font-script text-5xl sm:text-7xl md:text-8xl mx-1 sm:mx-2 select-none">
            of
          </span>
          <span>WORKS</span>
        </h1>

        <p className="font-sans-body text-sm sm:text-base text-slate-900 font-medium max-w-xl mx-auto leading-relaxed">
          1px의 오차 없는 섬세한 퍼블리싱 마크업과 생동감 넘치는 웹 인터랙션으로 완성된 프로젝트 컬렉션입니다.
        </p>
      </div>

      {/* Main Content Box */}
      <div className="w-full bg-[#fff5f7] border-3 md:border-4 border-black rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 shadow-[8px_8px_0_#000] relative">
        {/* Project Card Grid (Playing Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
              className={`group relative bg-white border-3 border-black rounded-2xl p-5 flex flex-col justify-between shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all cursor-pointer min-h-[340px] ${
                selectedProject?.id === project.id ? 'ring-4 ring-pink-500 bg-pink-50/50' : ''
              }`}
            >
              {/* Top Corner Hearts & Year */}
              <div className="flex items-center justify-between text-black mb-4">
                <Heart className="w-4 h-4 fill-black text-black" />
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                  {project.year}
                </span>
                <Heart className="w-4 h-4 fill-black text-black" />
              </div>

              {/* Center Title in 3D yellow typography */}
              <div className="text-center my-auto py-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-pink-600 block mb-1">
                  {project.category}
                </span>
                <h3 className="retro-3d-yellow text-xl sm:text-2xl font-black text-slate-900 group-hover:scale-105 transition-transform duration-200">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium line-clamp-2 px-1">
                  {project.tagline}
                </p>
              </div>

              {/* Tech Badges & Bottom Corner Hearts */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Heart className="w-4 h-4 fill-black text-black" />
                  <span className="text-[11px] font-black text-slate-800 uppercase tracking-wider group-hover:text-pink-600 transition-colors">
                    {selectedProject?.id === project.id ? '클릭 시 닫기' : '자세히 보기'}
                  </span>
                  <Heart className="w-4 h-4 fill-black text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Project Full Details Showcase */}
        {selectedProject && (
          <div className="mt-8 bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-brutal animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b-2 border-black/10">
              <div>
                <span className="inline-block text-xs font-black uppercase text-pink-600 bg-pink-100 border border-black rounded px-2.5 py-1 mb-2">
                  {selectedProject.category} · {selectedProject.year}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {selectedProject.title}
                </h2>
                <p className="text-sm sm:text-base font-bold text-slate-700 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/eomjeein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-black hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full border border-black shadow-[2px_2px_0_#ff4d6d]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 border-2 border-black px-3 py-2 rounded-full cursor-pointer"
                >
                  닫기
                </button>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="bg-[#f8fafc] border-2 border-black rounded-xl p-5 mb-5">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2.5">
                핵심 퍼블리싱 & 엔지니어링 구현 포인트:
              </h4>
              <div className="space-y-2">
                {selectedProject.keyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold text-slate-500 uppercase mr-1">기술 스택:</span>
              {selectedProject.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-bold bg-black text-white px-3 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Navigation Back to Quiz & Scroll to Top */}
        <div className="mt-10 pt-6 border-t-2 border-black/15 flex flex-wrap items-center justify-center gap-3">
          {embedded && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-black font-black text-sm sm:text-base px-5 py-3 rounded-full border-2 border-black shadow-brutal cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span>맨 위로 (About Me)</span>
            </button>
          )}
          <button
            onClick={onBackToQuiz}
            className="inline-flex items-center gap-2 bg-[#fef08a] hover:bg-[#fde047] text-black font-black text-sm sm:text-base px-6 py-3 rounded-full border-2 border-black shadow-brutal cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>퀴즈 페이지로 돌아가기</span>
          </button>
        </div>
      </div>
    </div>
  );
};
