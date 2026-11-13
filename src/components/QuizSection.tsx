import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Heart, ChevronRight, Check } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../utils/quizScore';
import { DaisyFlower, SparkleStar, RetroSmiley } from './FloatingStickers';

interface QuizSectionProps {
  onComplete: (answers: Record<number, 'A' | 'B'>) => void;
  onReset: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onComplete, onReset }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLButtonElement>(null);
  const rightCardRef = useRef<HTMLButtonElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentIndex];

  // GSAP Entrance animation on question change
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset transforms
      gsap.set(centerCardRef.current, { clearProps: 'all' });
      gsap.set(leftCardRef.current, { clearProps: 'all' });
      gsap.set(rightCardRef.current, { clearProps: 'all' });

      // Animate center card
      tl.fromTo(
        centerCardRef.current,
        { scale: 0.85, opacity: 0, rotation: -12, y: 30 },
        { scale: 1, opacity: 1, rotation: -3, y: 0, duration: 0.7, ease: 'back.out(1.8)' }
      )
        // Animate left card from left
        .fromTo(
          leftCardRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.4'
        )
        // Animate right card from right
        .fromTo(
          rightCardRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.5'
        );

      // Animate progress bar fill
      if (progressLineRef.current) {
        gsap.to(progressLineRef.current, {
          width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`,
          duration: 0.5,
          ease: 'power1.out'
        });
      }
    }, stageRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const handleSelect = (choice: 'A' | 'B') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedOption(choice);

    const newAnswers = { ...answers, [currentQuestion.id]: choice };
    setAnswers(newAnswers);

    // GSAP Exit animation
    const tl = gsap.timeline({
      onComplete: () => {
        setSelectedOption(null);
        setIsAnimating(false);
        if (currentIndex < QUIZ_QUESTIONS.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          onComplete(newAnswers);
        }
      }
    });

    // Exit transforms
    if (choice === 'A') {
      tl.to(leftCardRef.current, { scale: 1.05, borderColor: '#ef4444', duration: 0.15 })
        .to(centerCardRef.current, { rotation: 10, y: -40, opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.1')
        .to([leftCardRef.current, rightCardRef.current], { opacity: 0, y: 20, duration: 0.3 }, '-=0.3');
    } else {
      tl.to(rightCardRef.current, { scale: 1.05, borderColor: '#ef4444', duration: 0.15 })
        .to(centerCardRef.current, { rotation: -14, y: -40, opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.1')
        .to([leftCardRef.current, rightCardRef.current], { opacity: 0, y: 20, duration: 0.3 }, '-=0.3');
    }
  };

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-20 pb-16 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      {/* Main Interactive Stage Box (Reflecting the layout from reference Screenshot 1) */}
      <div
        ref={stageRef}
        className="w-full bg-[#fff4f6] border-2 border-black rounded-md p-4 sm:p-8 md:p-12 shadow-[4px_4px_0_#000] relative overflow-hidden"
      >
        {/* Top bar with progress indicator */}

        {/* 3-Column A/B Layout with central playing card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[380px] sm:min-h-[420px]">
          {/* OPTION A CARD (Left) */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center w-full">
            <button
              ref={leftCardRef}
              onClick={() => handleSelect('A')}
              disabled={isAnimating}
              className={`group w-full max-w-sm bg-white border-2 border-black rounded-md px-4 py-2 sm:px-6 sm:py-4 text-left shadow-card hover:shadow-card-hover transition-all cursor-pointer relative ${
                selectedOption === 'A' ? 'ring-4 ring-red-500 bg-red-50' : 'hover:-translate-y-1'
              }`}
              aria-label={`Option A: ${currentQuestion.options.A.title}`}
            >
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors leading-snug">
                {currentQuestion.options.A.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentQuestion.options.A.description}
              </p>
            </button>
          </div>

          {/* CENTER PLAYING CARD (Tilted with red border and hearts, like Screenshot 1) */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center py-4">
            <div
              ref={centerCardRef}
              className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 bg-white border-2 border-red-600 rounded-lg shadow-[4px_4px_0_rgba(0,0,0,0.9)] p-5 sm:p-6 flex flex-col justify-between select-none"
              style={{ transform: 'rotate(-3deg)' }}
            >
              {/* Corner Hearts (like playing card in reference) */}
              <div className="flex justify-between items-center">
                <Heart className="w-5 h-5 fill-black text-black" />
                <span className="text-xs font-black font-mono text-red-600 tracking-wider">
                  Q{currentQuestion.questionNumber}
                </span>
                <Heart className="w-5 h-5 fill-black text-black" />
              </div>

              {/* Center Headline in Instrument Serif */}
              <div className="text-center my-auto px-2">
                <p className="text-base sm:text-lg text-slate-800 mt-3">
                  {currentQuestion.title}
                </p>
              </div>

              {/* Bottom Hearts */}
              <div className="flex justify-between items-center">
                <Heart className="w-5 h-5 fill-black text-black" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  MATCH MY DEV
                </span>
                <Heart className="w-5 h-5 fill-black text-black" />
              </div>
            </div>
          </div>

          {/* OPTION B CARD (Right) */}
          <div className="lg:col-span-4 order-3 flex justify-center w-full">
            <button
              ref={rightCardRef}
              onClick={() => handleSelect('B')}
              disabled={isAnimating}
              className={`group w-full max-w-sm bg-white border-2 border-black rounded-md px-4 py-2 sm:px-6 sm:py-4 text-left shadow-card hover:shadow-card-hover transition-all cursor-pointer relative ${
                selectedOption === 'B' ? 'ring-4 ring-red-500 bg-red-50' : 'hover:-translate-y-1'
              }`}
              aria-label={`Option B: ${currentQuestion.options.B.title}`}
            >
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                {currentQuestion.options.B.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentQuestion.options.B.description}
              </p>
            </button>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="mt-8 pt-4">
          <div className="w-full bg-black/10 h-3 rounded-full overflow-hidden border border-black/30 p-0.5">
            <div
              ref={progressLineRef}
              className="bg-black h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-black/15 text-xs font-black tracking-widest text-slate-600">
            <span>STEP {currentIndex + 1} / {QUIZ_QUESTIONS.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
