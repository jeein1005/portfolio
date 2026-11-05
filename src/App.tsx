/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { IntroView } from './components/IntroView';
import { QuizSection } from './components/QuizSection';
import { ResultView } from './components/ResultView';
import { ProjectsPage } from './components/ProjectsPage';
import { AboutPage } from './components/AboutPage';
import { BackgroundClouds } from './components/FloatingStickers';
import { HeartLoader } from './components/HeartLoader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'quiz' | 'projects' | 'about'>('quiz');
  const [quizStep, setQuizStep] = useState<'intro' | 'question' | 'result'>('intro');
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});

  // Support ?autostart=1 or ?tab=projects for testability
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        setIsLoading(false);
        setActiveTab('quiz');
        setQuizStep('question');
      } else if (params.get('tab') === 'projects') {
        setIsLoading(false);
        setActiveTab('projects');
      } else if (params.get('tab') === 'about') {
        setIsLoading(false);
        setActiveTab('about');
      } else if (params.get('result') === '1') {
        setIsLoading(false);
        setActiveTab('quiz');
        setAnswers({ 1: 'A', 2: 'A', 3: 'A', 4: 'B' });
        setQuizStep('result');
      }
    }
  }, []);

  const handleStartQuiz = () => {
    setQuizStep('question');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = (finalAnswers: Record<number, 'A' | 'B'>) => {
    setAnswers(finalAnswers);
    setQuizStep('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setActiveTab('quiz');
    setQuizStep('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: 'quiz' | 'projects' | 'about') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-pink-300 selection:text-slate-900 overflow-x-hidden">
      {/* 5. Heart loading screen on first load */}
      {isLoading && (
        <HeartLoader onFinish={() => setIsLoading(false)} minDuration={1600} />
      )}

      {/* Background Soft Clouds */}
      <BackgroundClouds />

      {/* 4. Responsive wrapper with Max-width 1920px */}
      <div className="app-container flex-1 flex flex-col relative z-10">
        {/* Fixed Top Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          onNavigate={handleNavigate}
          onResetQuiz={quizStep !== 'intro' ? handleResetQuiz : undefined}
          quizStep={quizStep}
        />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center justify-center relative z-10 w-full px-3 sm:px-6 lg:px-8">
          {/* TAB 1: QUIZ FLOW */}
          {activeTab === 'quiz' && (
            <>
              {quizStep === 'intro' && (
                <IntroView onStartQuiz={handleStartQuiz} />
              )}

              {quizStep === 'question' && (
                <QuizSection
                  onComplete={handleQuizComplete}
                  onReset={handleResetQuiz}
                />
              )}

              {quizStep === 'result' && (
                <ResultView
                  answers={answers}
                  onRestart={handleResetQuiz}
                  onOpenProjects={() => handleNavigate('projects')}
                  onOpenAbout={() => handleNavigate('about')}
                />
              )}
            </>
          )}

          {/* TAB 2: PROJECTS STANDALONE PAGE */}
          {activeTab === 'projects' && (
            <ProjectsPage onBackToQuiz={() => handleNavigate('quiz')} />
          )}

          {/* TAB 3: ABOUT ME STANDALONE PAGE */}
          {activeTab === 'about' && (
            <AboutPage onBackToQuiz={() => handleNavigate('quiz')} />
          )}
        </main>

        {/* Minimal Footer */}
        <footer className="relative z-20 py-5 text-center text-xs font-semibold text-slate-800/80 px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>JEEIN.DEV Interactive Portfolio</span>
            <span>·</span>
            <span>Inter & Pretendard</span>
            <span>·</span>
            <span>Tailwind CSS & GSAP</span>
            <span>·</span>
            <button
              onClick={() => handleNavigate('about')}
              className="hover:underline font-bold text-slate-900 cursor-pointer"
            >
              Eom Jeein © 2026
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
