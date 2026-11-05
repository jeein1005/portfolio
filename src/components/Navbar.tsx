import React from 'react';

interface NavbarProps {
  activeTab: 'quiz' | 'projects' | 'about';
  onNavigate: (tab: 'quiz' | 'projects' | 'about') => void;
  onResetQuiz?: () => void;
  quizStep?: 'intro' | 'question' | 'result';
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onResetQuiz,
  quizStep
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-10 py-4 flex items-center justify-between select-none bg-transparent">
      {/* Zone 1: Brand / Logo - Just plain Inter font text as requested */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            onNavigate('quiz');
            if (onResetQuiz) onResetQuiz();
          }}
          className="font-sans-body font-black text-xl sm:text-2xl tracking-tighter text-black hover:opacity-75 transition-opacity cursor-pointer uppercase"
          aria-label="JEEIN.DEV Home"
        >
          JEEIN.DEV
        </button>

        {activeTab === 'quiz' && quizStep === 'question' && (
          <span className="hidden sm:inline-block text-xs font-bold font-sans-body bg-white/90 text-slate-800 px-3 py-1 rounded-full border border-black shadow-[1px_1px_0_#000]">
            Interactive Match Quiz
          </span>
        )}
      </div>

      {/* Zone 2: Navigation Links - Text only, NO icons as requested */}
      <nav className="flex items-center gap-2 sm:gap-3" aria-label="Main Navigation">
        {activeTab !== 'quiz' && (
          <button
            onClick={() => onNavigate('quiz')}
            className="font-sans-body bg-white text-slate-900 border-2 border-black rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold shadow-brutal hover:bg-yellow-100 transition-colors cursor-pointer"
          >
            Home / Quiz
          </button>
        )}

        {activeTab === 'quiz' && quizStep !== 'intro' && onResetQuiz && (
          <button
            onClick={onResetQuiz}
            className="font-sans-body bg-white text-slate-900 border-2 border-black rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-bold shadow-brutal hover:bg-yellow-100 transition-colors cursor-pointer"
          >
            다시하기
          </button>
        )}

        <button
          onClick={() => onNavigate('projects')}
          className={`font-sans-body border-2 border-black rounded-full px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-bold shadow-brutal transition-colors cursor-pointer ${
            activeTab === 'projects'
              ? 'bg-[#fef08a] text-black font-black'
              : 'bg-white text-slate-900 hover:bg-pink-100'
          }`}
        >
          Projects
        </button>

        <button
          onClick={() => onNavigate('about')}
          className={`font-sans-body border-2 border-black rounded-full px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-bold shadow-brutal transition-colors cursor-pointer ${
            activeTab === 'about'
              ? 'bg-[#fef08a] text-black font-black'
              : 'bg-white text-slate-900 hover:bg-pink-100'
          }`}
        >
          About Me
        </button>
      </nav>
    </header>
  );
};
