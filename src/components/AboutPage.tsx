import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Github, 
  Check, 
  Copy,
  Send,
} from 'lucide-react';
import { DEVELOPER_PROFILE, CAREER_DATA, BRAND_PROJECTS } from '../data/portfolioData';
import { RetroFrameCard } from './RetroFrameCard';
import { FlipCard } from './FlipCard';

interface AboutPageProps {
  onBackToQuiz: () => void;
  initialSection?: 'about' | 'projects';
  onNavigateToProjects?: () => void;
}


// Reference-faithful four corner hearts component
const CardCornerHearts: React.FC = () => (
  <>
    <Heart className="w-3.5 h-3.5 fill-black text-black absolute top-3.5 left-3.5 pointer-events-none opacity-90" />
    <Heart className="w-3.5 h-3.5 fill-black text-black absolute top-3.5 right-3.5 pointer-events-none opacity-90" />
    <Heart className="w-3.5 h-3.5 fill-black text-black absolute bottom-3.5 left-3.5 pointer-events-none opacity-90" />
    <Heart className="w-3.5 h-3.5 fill-black text-black absolute bottom-3.5 right-3.5 pointer-events-none opacity-90" />
  </>
);

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToQuiz,
  initialSection = 'about',
  onNavigateToProjects
}) => {
  const [copied, setCopied] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<BrandProject | null>(null);

  useEffect(() => {
    if (initialSection === 'projects') {
      const timer = setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [initialSection]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() && !contactMessage.trim()) {
      window.location.href = `mailto:${DEVELOPER_PROFILE.email}?subject=[UI/UX 개발 협업 문의]&body=안녕하세요, 엄지인 개발자님.`;
      return;
    }
    const subject = `[UI/UX 개발 문의] ${contactName || '방문자'}님의 프로젝트 협업 제안`;
    const body = `보낸 분: ${contactName}\n\n문의 내용:\n${contactMessage}`;
    window.location.href = `mailto:${DEVELOPER_PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 3500);
  };

  // 3D serif typography text-shadow matching the attached image
  const title3DStyle = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 2px 2px 0 #000'
  };

  return (
    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 pt-20 pb-20 flex flex-col items-center">
      {/* Page Header */}
      <div className="text-center mb-8 sm:mb-12 relative">
        <h1 className="text-title retro-3d-title font-black tracking-tight mb-2 uppercase flex items-center justify-center flex-wrap">
          <span className="animate-breathe-slow [--motion-breathe-distance:10px] [animation-duration:5000ms] mx-3 md:mx-5">ABOUT</span>
          <span className="animate-breathe-slow [--motion-breathe-distance:6px] mx-3 md:mx-5">ME</span>
        </h1>
      </div>

      {/* =========================================================================
          BENTO GRID LAYOUT (Strictly matches attached image's aesthetic & requirements)
          ========================================================================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* -----------------------------------------------------------------------
            1. [ABOUT ME] (Top Left, 2x2 wide / lg:col-span-2)
            ----------------------------------------------------------------------- */}
        <div className="lg:col-span-2 relative rounded-2xl border-2 border-black bg-gradient-to-b from-white/95 via-[#fff3f7]/90 to-[#ffe7f1]/95 backdrop-blur-md transition-all p-6 sm:p-8 flex flex-col justify-between overflow-hidden group">
          {/* Liquid Glass Highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl" />
          <CardCornerHearts />

          {/* Card Top Label */}
          <div className="text-center text-[11px] font-semibold text-slate-600 tracking-widest uppercase mb-1">
            UI / UX DEVELOPER 
          </div>

          {/* 3D Serif Card Title */}
          <div className="text-center mb-6">
            <h2 
              className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#ff2a5f] tracking-wider uppercase inline-block"
              style={title3DStyle}
            >
              PROFILE
            </h2>
          </div>

          {/* Main Card Body */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 my-auto relative z-10">
            {/* Circular Portrait Image Placeholder */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-1 border-black bg-gradient-to-tr from-pink-200 via-sky-100 to-yellow-100 overflow-hidden flex items-center justify-center relative">
                <img
                  src={DEVELOPER_PROFILE.profileImage}
                  alt={`${DEVELOPER_PROFILE.name} 프로필 사진`}
                  className="w-full h-full object-cover rounded-full filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Profile Details & Self-intro */}
            <div className="flex-1 space-y-3 text-left w-full">
              {/* Structured Profile Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 text-xs sm:text-sm font-semibold">
                <div className="bg-white/85 border border-black/80 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-500 font-bold">이름</span>
                  <span className="text-slate-950 font-bold text-sm">{DEVELOPER_PROFILE.name}</span>
                </div>
                <div className="bg-white/85 border border-black/80 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-500 font-bold">나이</span>
                  <span className="text-slate-950 font-bold text-sm">{DEVELOPER_PROFILE.age}</span>
                </div>
                <div className="bg-white/85 border border-black/80 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-500 font-bold">주소</span>
                  <span className="text-slate-950 font-bold text-sm">{DEVELOPER_PROFILE.location}</span>
                </div>
                <div className="bg-white/85 border border-black/80 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-500 font-bold">자격증</span>
                  <span className="text-slate-950 font-bold text-sm">{DEVELOPER_PROFILE.certifications}</span>
                </div>
              </div>

              {/* Self-Intro Quote */}
              <div className="bg-white/90 border-1 border-black rounded-xl px-4 py-3">
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  {DEVELOPER_PROFILE.introduction}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 bg-white border border-black px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">복사완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{DEVELOPER_PROFILE.email}</span>
                    </>
                  )}
                </button>

                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-black text-white border border-black px-3.5 py-1.5 rounded-full text-xs font-bold"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub 프로필</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card Bottom Subtitle */}
          <div className="text-center text-[11px] text-slate-700 tracking-wide mt-6 pt-2 border-t border-black/10">
            Eom Jeein · 10th Year UI/UX Developer
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            3. [CONTACT] (Top Right, 1x1 / lg:col-span-1)
            ----------------------------------------------------------------------- */}
        <div className="lg:col-span-1 relative rounded-2xl border-2 border-black bg-gradient-to-b from-white/95 via-[#fff3f7]/90 to-[#ffe7f1]/95 backdrop-blur-md transition-all p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
          {/* Liquid Glass Highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent rounded-t-3xl" />
          <CardCornerHearts />

          <div className="text-center text-[11px] font-semibold text-slate-600 tracking-widest uppercase mb-1">
            GET IN
          </div>

          <div className="text-center mb-4">
            <h2 
              className="font-serif-title text-3xl sm:text-4xl font-normal text-[#ff2a5f] tracking-wider uppercase inline-block"
              style={title3DStyle}
            >
              CONTACT
            </h2>
          </div>

          {/* Active Email Form */}
          <form onSubmit={handleSendEmail} className="space-y-3 relative z-10 my-auto text-left">
            <div>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="성함이나 소속"
                className="w-full bg-white/95 border-1 border-black rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            <div>
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="프로젝트 의뢰, 협업 제안, 채용 문의 등 자유롭게 작성해 주세요."
                rows={3}
                className="w-full bg-white/95 border-1 border-black rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none resize-none"
              />
            </div>

            {sentNotice && (
              <div className="text-xs font-bold text-pink-700 bg-pink-100/90 border border-pink-400 rounded-lg p-2 text-center animate-fadeIn">
                이메일 클라이언트가 열립니다!
              </div>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#fef08a] hover:bg-[#fde047] text-slate-950 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border-1 border-black transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </button>
          </form>

          <div className="text-center text-[11px] text-slate-700 tracking-wide mt-4 pt-2 border-t border-black/10">
            {DEVELOPER_PROFILE.email}
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            2. [TECH STACK & TOOLS] (Center/Left, 2-column wide / lg:col-span-2)
            ----------------------------------------------------------------------- */}
        <div className="lg:col-span-2 relative rounded-2xl border-2 border-black bg-gradient-to-b from-white/95 via-[#fff3f7]/90 to-[#ffe7f1]/95 backdrop-blur-md transition-all p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          {/* Liquid Glass Highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/60 to-transparent rounded-t-3xl" />
          <CardCornerHearts />

          <div className="text-center text-[11px] font-semibold text-slate-600 tracking-widest uppercase mb-1">
            SKILLS & ENVIRONMENT
          </div>

          <div className="text-center mb-5">
            <h2 
              className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#ff2a5f] tracking-wider uppercase inline-block"
              style={title3DStyle}
            >
              TECH STACK & TOOLS
            </h2>
          </div>

          {/* Subsections Grid */}
          <div className="space-y-3 relative z-10 text-left my-auto">
            {/* Sub-section 1: Tech Stack */}
            <div className="bg-white/80 border border-black/70 rounded-xl px-4 py-3">
              <div className="text-xs sm:text-sm font-bold uppercase text-pink-700 tracking-wider mb-2.5 flex items-center gap-1.5">
                <span>Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'React', 'JavaScript', 'HTML', 'PUG', 'Tailwind CSS', 'SASS / SCSS', 
                  'CSS3', 'Bootstrap', 'Vite', 'Webpack', 'GSAP', 'Lottie', 
                  'Swiper.js', 'Axios', 'Ajax'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-bold bg-slate-100 border border-slate-400 px-2.5 py-1 rounded-md text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Sub-section 2: Feature List */}
            <div className="bg-white/80 border border-black/70 rounded-xl px-4 py-3">
              <div className="text-xs sm:text-sm font-bold uppercase text-emerald-700 tracking-wider mb-2.5 flex items-center gap-1.5">
                <span>Core Engineering Features</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'semantic HTML', 'Web Accessibility', 'cross-browser compatibility', 
                  'Responsive Web (Modern)', 'SEO', 'Web Performance Optimization', 'PWA (Progressive Web App)'
                ].map((feat) => (
                  <span
                    key={feat}
                    className="text-[11px] font-bold bg-slate-100 border border-slate-400 px-2.5 py-1 rounded-md text-slate-800"
                  >
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Sub-section 3: Tools & Others */}
            <div className="bg-white/80 border border-black/70 rounded-xl px-4 py-3">
              <div className="text-xs sm:text-sm font-bold uppercase text-indigo-700 tracking-wider mb-2.5 flex items-center gap-1.5">
                <span>Tools & Others</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Figma', 'Adobe Photoshop', 'Zeplin', 'VS Code', 'Web Storm', 
                  'Git / GitHub', 'Bitbucket', 'Jira', 'Confluence', 'Slack'
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-bold bg-slate-100 border border-slate-400 px-2.5 py-1 rounded-md text-slate-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-700 tracking-wide mt-5 pt-2 border-t border-black/10">
            Frontend Architecture · Standard Web Practices · Design Ops
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            4. [CAREER] (Mid-Right, vertical 1x2 / lg:col-span-1)
            ----------------------------------------------------------------------- */}
        <div className="lg:col-span-1 relative rounded-2xl border-2 border-black bg-gradient-to-b from-white/95 via-[#fff3f7]/90 to-[#ffe7f1]/95 backdrop-blur-md transition-all p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
          {/* Liquid Glass Highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent rounded-t-3xl" />
          <CardCornerHearts />

          <div className="text-center text-[11px] font-semibold text-slate-600 tracking-widest uppercase mb-1">
            WORK TIMELINE
          </div>

          <div className="text-center mb-4">
            <h2 
              className="font-serif-title text-3xl sm:text-4xl font-normal text-[#ff2a5f] tracking-wider uppercase inline-block"
              style={title3DStyle}
            >
              CAREER
            </h2>
          </div>

          {/* Organized Vertical Timeline List */}
          <div className="space-y-3 relative z-10 text-left my-auto">
            {CAREER_DATA.map((career) => (
              <div 
                className="bg-white/85 border border-black/70 rounded-xl px-4 py-3 relative"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    {career.company}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold bg-[#fef08a] border border-black/80 px-2 py-0.5 rounded-full text-black shrink-0">
                    {career.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-600 leading-snug">
                  {career.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center text-[11px] text-slate-700 tracking-wide mt-4 pt-2 border-t border-black/10">
            Total 10+ Years Dedicated UI/UX Publishing
          </div>
        </div>
      </div>


      {/* -----------------------------------------------------------------------
          5. [FEATURED PROJECTS] (Bottom row, wide / lg:col-span-3)
          ----------------------------------------------------------------------- */}
      <div className="text-center mt-16 sm:mt-20 mb-8 sm:mb-12 relative">
        <h1 className="text-title retro-3d-title font-black tracking-tight mb-2 uppercase flex items-center justify-center flex-wrap">
          <span className="animate-breathe-slow mx-3 md:mx-5">PROJECTS</span>
        </h1>
      </div>
      <div 
        id="projects" 
        className="lg:col-span-3 scroll-mt-24 relative flex flex-col justify-between"
      >
        {/* 8 Brand Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10 text-left my-auto">
          {BRAND_PROJECTS.map((item, index) => (
            <FlipCard
              key={item.id ?? item.title ?? index}
              className="min-h-[320px] sm:min-h-[370px]"
              backFrameColor="#FF1E1E"
              frontContent={
                <div className="flex flex-col justify-between h-full text-center py-2">
                  {/* 상단: 카테고리 */}
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {item.category}
                  </span>

                  {/* 중앙: 브랜드 타이틀 */}
                  <h3 className="relative text-3xl sm:text-4xl font-bold my-auto px-1 break-keep">
                    <img src={item.logo} alt={`${item.title} 로고`} className={`block mx-auto object-contain ${item.logoHeightClass}`} />
                  </h3>

                  {/* 하단: 역할 배지 */}
                  <div>
                    <span className={`inline-block text-[10px] border px-2.5 py-0.5 rounded-full font-medium`}>
                      {item.roleType}
                    </span>
                  </div>
                </div>
              }
              backContent={
                <div className="flex flex-col justify-between h-full text-left">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-bold text-[#FF1E1E] uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
