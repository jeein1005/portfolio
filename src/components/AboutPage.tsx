import React, { useState } from 'react';
import { Mail, Github, MapPin, Briefcase, Award, Check, Copy, ArrowLeft } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { DaisyFlower, RetroSmiley, SparkleStar } from './FloatingStickers';

interface AboutPageProps {
  onBackToQuiz: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToQuiz }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-20 flex flex-col items-center">
      {/* Decorative Stickers */}
      <div className="absolute top-16 left-6 md:left-14">
        <DaisyFlower size={68} className="animate-spin-slow" />
      </div>
      <div className="absolute top-20 right-8 md:right-16">
        <RetroSmiley size={60} className="animate-float-slow" />
      </div>

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 relative">
        <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-brutal mb-3 text-slate-800">
          <span>ABOUT ME & DOSSIER</span>
        </div>

        <h1 className="retro-3d-title text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-3 uppercase">
          ABOUT THE DEVELOPER
        </h1>

        <p className="text-sm sm:text-base text-slate-900 font-medium max-w-lg mx-auto leading-relaxed">
          디테일에 집착하고 생동감 있는 웹 경험을 만드는 프론트엔드 퍼블리셔 엄지인입니다.
        </p>
      </div>

      {/* Main Content Box */}
      <div className="w-full max-w-4xl bg-[#fff5f7] border-3 md:border-4 border-black rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 shadow-[8px_8px_0_#000] relative space-y-8">
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b-2 border-black/15">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-pink-300 via-yellow-200 to-sky-300 border-3 border-black flex items-center justify-center font-black text-3xl sm:text-4xl text-slate-900 shadow-brutal shrink-0">
            엄
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="inline-block bg-[#fef08a] border-2 border-black rounded-full px-3.5 py-0.5 text-xs font-black text-slate-900 mb-2 shadow-[2px_2px_0_#000]">
              {DEVELOPER_PROFILE.status}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {DEVELOPER_PROFILE.name}
            </h2>
            <p className="text-sm sm:text-base font-extrabold text-pink-600 mt-1">
              {DEVELOPER_PROFILE.role}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm text-slate-700 mt-3 font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-slate-600" />
                경력 {DEVELOPER_PROFILE.experienceYears}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-600" />
                {DEVELOPER_PROFILE.location}
              </span>
            </div>
          </div>
        </div>

        {/* Philosophy Statement */}
        <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0_#000]">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
            Work Philosophy & Introduction
          </h3>
          <p className="text-base sm:text-lg font-black text-slate-900 leading-relaxed mb-3">
            "{DEVELOPER_PROFILE.greeting}"
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {DEVELOPER_PROFILE.introduction}
          </p>
        </div>

        {/* Core Competencies */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
            핵심 역량 & 퍼블리싱 가치
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DEVELOPER_PROFILE.competencies.map((comp, idx) => (
              <div key={idx} className="bg-white border-2 border-black rounded-xl p-4 shadow-[2px_2px_0_#000]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-4 h-4 text-pink-600 shrink-0" />
                  <span className="text-sm font-black text-slate-900">{comp.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
            기술 스택 & 도구
          </h3>
          <div className="space-y-3">
            {DEVELOPER_PROFILE.skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white border-2 border-black/80 rounded-xl p-4">
                <div className="text-xs font-black uppercase text-slate-600 mb-2">
                  {skillGroup.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="text-xs font-bold bg-slate-100 border border-slate-300 px-3 py-1 rounded text-slate-900">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Actions */}
        <div className="pt-6 border-t-2 border-black/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border-2 border-black px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-900 shadow-brutal cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-black">이메일 복사완료!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{DEVELOPER_PROFILE.email}</span>
                </>
              )}
            </button>

            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full border-2 border-black shadow-brutal hover:bg-slate-800 transition-colors"
              title="GitHub 프로필 방문"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <a
            href="mailto:eomjeein0825@gmail.com?subject=[프로젝트 문의] 프론트엔드 퍼블리셔 협업 제안"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fef08a] hover:bg-[#fde047] text-slate-950 font-black text-xs sm:text-sm px-6 py-2.5 rounded-full border-2 border-black shadow-brutal cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>직접 메일 보내기</span>
          </a>
        </div>

        {/* Back to Quiz Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onBackToQuiz}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-black text-sm px-6 py-2.5 rounded-full border-2 border-black shadow-brutal cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>퀴즈 페이지로 돌아가기</span>
          </button>
        </div>
      </div>
    </div>
  );
};
