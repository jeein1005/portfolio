/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { IntroView } from './components/IntroView';
import { QuizSection } from './components/QuizSection';
import { ResultView } from './components/ResultView';
import { AboutPage } from './components/AboutPage';
import { BackgroundClouds } from './components/FloatingStickers';
import { HeartLoader } from './components/HeartLoader';

const STORAGE_KEY = 'match_my_dev_quiz_answers';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'quiz' | 'projects' | 'about'>('quiz');
  const [quizStep, setQuizStep] = useState<'intro' | 'question' | 'result'>('intro');
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {};
  });

  // Parse path and query/hash into route state
  const parseRoute = useCallback((pathname: string, hash: string, search: string) => {
    const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';
    const cleanHash = hash.toLowerCase();
    const params = new URLSearchParams(search);

    // Query params for testability & legacy links
    if (params.get('autostart') === '1') {
      return { tab: 'quiz' as const, step: 'question' as const };
    }
    if (params.get('result') === '1') {
      return { tab: 'quiz' as const, step: 'result' as const };
    }
    if (params.get('tab') === 'projects') {
      return { tab: 'projects' as const, step: 'intro' as const };
    }
    if (params.get('tab') === 'about') {
      return { tab: 'about' as const, step: 'intro' as const };
    }

    // Hash anchors
    if (cleanHash === '#projects') {
      return { tab: 'projects' as const, step: 'intro' as const };
    }
    if (cleanHash === '#about') {
      return { tab: 'about' as const, step: 'intro' as const };
    }

    // Pathname checks
    if (cleanPath === '/projects' || cleanPath.startsWith('/projects')) {
      return { tab: 'projects' as const, step: 'intro' as const };
    }
    if (cleanPath === '/about' || cleanPath.startsWith('/about')) {
      return { tab: 'about' as const, step: 'intro' as const };
    }
    if (cleanPath === '/quiz/question' || cleanPath === '/question') {
      return { tab: 'quiz' as const, step: 'question' as const };
    }
    if (cleanPath === '/quiz/result' || cleanPath === '/result') {
      return { tab: 'quiz' as const, step: 'result' as const };
    }

    return { tab: 'quiz' as const, step: 'intro' as const };
  }, []);

  // Apply route changes
  const applyRoute = useCallback((pathname: string, hash = '', search = '', shouldScroll = true) => {
    const route = parseRoute(pathname, hash, search);
    setActiveTab(route.tab);
    setQuizStep(route.step);

    if (route.step === 'result') {
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) {
          setAnswers(JSON.parse(saved));
        } else {
          // Default answers so ResultView renders immediately on direct link
          const fallback = { 1: 'A' as const, 2: 'A' as const, 3: 'A' as const, 4: 'B' as const };
          setAnswers(fallback);
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fallback));
        }
      } catch {
        // fallback
      }
    }

    if (shouldScroll) {
      if (route.tab === 'projects') {
        setTimeout(() => {
          const el = document.getElementById('projects');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [parseRoute]);

  // Navigate function with History API support
  const navigateTo = useCallback((targetUrl: string, replace = false) => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.pathname + window.location.search + window.location.hash;
      if (currentUrl !== targetUrl) {
        if (replace) {
          window.history.replaceState({ url: targetUrl }, '', targetUrl);
        } else {
          window.history.pushState({ url: targetUrl }, '', targetUrl);
        }
      }
      const url = new URL(targetUrl, window.location.origin);
      applyRoute(url.pathname, url.hash, url.search, true);
    }
  }, [applyRoute]);

  // Initial route resolution on mount & Browser PopState listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Resolve initial route from current URL
      applyRoute(window.location.pathname, window.location.hash, window.location.search, false);

      const handlePopState = () => {
        applyRoute(window.location.pathname, window.location.hash, window.location.search, true);
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, [applyRoute]);

  const handleStartQuiz = () => {
    navigateTo('/quiz/question');
  };

  const handleQuizComplete = (finalAnswers: Record<number, 'A' | 'B'>) => {
    setAnswers(finalAnswers);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(finalAnswers));
    } catch {
      // ignore
    }
    navigateTo('/quiz/result');
  };

  const handleResetQuiz = () => {
    setAnswers({});
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    navigateTo('/');
  };

  const handleNavigate = (tab: 'quiz' | 'projects' | 'about') => {
    if (tab === 'projects') {
      navigateTo('/projects');
    } else if (tab === 'about') {
      navigateTo('/about');
    } else {
      navigateTo('/');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-pink-300 selection:text-slate-900 overflow-x-hidden">
      {/* Heart loading screen on first load */}
      {isLoading && (
        <HeartLoader onFinish={() => setIsLoading(false)} minDuration={1600} />
      )}

      {/* Background Soft Clouds */}
      <BackgroundClouds />

      {/* Responsive wrapper with Max-width 1920px */}
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
                <IntroView 
                  onStartQuiz={handleStartQuiz} 
                  onNavigate={handleNavigate} 
                />
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

          {/* TAB 2 & 3: INTEGRATED ABOUT ME & PROJECTS PAGE */}
          {(activeTab === 'about' || activeTab === 'projects') && (
            <AboutPage
              onBackToQuiz={() => handleNavigate('quiz')}
              initialSection={activeTab === 'projects' ? 'projects' : 'about'}
              onNavigateToProjects={() => handleNavigate('projects')}
            />
          )}
        </main>
      </div>
    </div>
  );
}
