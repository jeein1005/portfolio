export interface ProjectItem {
  id: string;
  title: string;
  category: 'Interactive Web' | 'Design System' | 'Web Publishing' | 'Full Responsive';
  year: string;
  tagline: string;
  description: string;
  keyPoints: string[];
  techStack: string[];
  accentColor: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'interactive-portfolio',
    title: 'Year of Love Interactive Match',
    category: 'Interactive Web',
    year: '2026',
    tagline: 'GSAP 기반 트렌디 A/B 인터랙티브 퀴즈 & 포트폴리오 웹',
    description: '레트로 Y2K 감성과 카드 플립, 스무스 트랜지션 애니메이션이 결합된 원페이지 인터랙티브 포트폴리오. 방문자가 직접 자신의 취향을 테스트하며 개발자의 작업 스타일을 자연스럽게 체감하도록 설계되었습니다.',
    keyPoints: [
      'GSAP Timeline을 활용한 유려한 화면 전환 및 카드 회전 애니메이션',
      'Web Audio API를 활용한 가벼운 인터랙티브 사운드 피드백',
      'Tailwind CSS 유틸리티를 통한 경량 모던 스타일링 및 완전 반응형 지원'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite'],
    accentColor: '#FF6B6B'
  },
  {
    id: 'design-system',
    title: 'Aura Fintech Design System',
    category: 'Design System',
    year: '2025',
    tagline: '120+ 재사용 토큰 기반의 엔터프라이즈 UI 컴포넌트 라이브러리',
    description: '디자인 토큰과 엄격한 접근성(WCAG AA)을 만족하는 B2B 핀테크 디자인 시스템 구축. Figma 스타일과 코드를 1:1로 동기화하여 개발-디자인 간 커뮤니케이션 비용을 70% 단축시켰습니다.',
    keyPoints: [
      'Tailwind 커스텀 테마 토큰 및 일관된 간격/타이포그래피 규칙 정립',
      '키보드 내비게이션 & 스크린리더 대응 완전 접근성 보장',
      'Storybook 문서화 및 npm 패키지화 배포'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Storybook', 'Radix UI'],
    accentColor: '#3B82F6'
  },
  {
    id: 'kinetic-brand',
    title: 'Kinetic Studio Brand Experience',
    category: 'Interactive Web',
    year: '2025',
    tagline: '스크롤트리거와 키네틱 타이포그래피가 살아 숨쉬는 브랜드 사이트',
    description: '스크롤의 깊이에 따라 유기적으로 반응하는 텍스트 왜곡, 패럴랙스 레이어, 마우스 인터랙션을 구현한 크리에이티브 에이전시 웹사이트. Lighthouse 성능 점수 98점을 달성한 최적화된 모션 설계.',
    keyPoints: [
      'GSAP ScrollTrigger 및 마우스 트래킹 커스텀 인터랙션 구현',
      'GPU 하드웨어 가속(Transform/Opacity)을 적용한 60fps 무손실 렌더링',
      '다국어 지원(i18n) 및 모바일 터치 제스처 최적화'
    ],
    techStack: ['JavaScript (ESNext)', 'GSAP ScrollTrigger', 'Tailwind CSS', 'Lenis Smooth Scroll'],
    accentColor: '#10B981'
  },
  {
    id: 'responsive-commerce',
    title: 'Maison Minimalist E-Commerce',
    category: 'Full Responsive',
    year: '2024',
    tagline: '1px 오차 없는 픽셀 퍼펙트 마크업 & 전환율 극대화 쇼핑몰',
    description: '디자이너의 의도를 한 치의 오차 없이 스크린으로 옮긴 고감도 라이프스타일 셀렉트샵. 빠른 로딩 속도와 직관적인 장바구니/필터 인터랙션으로 사용자 이탈률을 24% 감소시켰습니다.',
    keyPoints: [
      '시맨틱 태그 구조화 및 Schema.org 구조화 데이터 적용으로 검색 엔진 최적화(SEO)',
      '디바이스별 해상도 최적화 반응형 미디어 쿼리 완벽 대응',
      '모달, 슬라이더, 아코디언 등 바닐라 자바스크립트 커스텀 UI 제작'
    ],
    techStack: ['HTML5/SCSS', 'Tailwind CSS', 'Vanilla JavaScript', 'Swiper.js'],
    accentColor: '#F59E0B'
  }
];

export const DEVELOPER_PROFILE = {
  name: '엄지인 (Eom Jeein)',
  role: 'Frontend & Interactive Web Publisher',
  email: 'eomjeein0825@gmail.com',
  github: 'https://github.com/eomjeein',
  location: 'Seoul, Korea (Available for Remote / Hybrid)',
  experienceYears: '3+ Years',
  status: 'Open to Opportunities',
  greeting: '안녕하세요! 디테일에 집착하고 생동감 있는 웹 경험을 만드는 퍼블리셔 엄지인입니다.',
  introduction: '기획자의 의도를 꿰뚫고, 디자이너의 감성을 브라우저에 그대로 피워내는 1px 퍼펙트 인터랙티브 퍼블리셔입니다. 복잡한 디자인 시안도 깔끔한 시맨틱 구조와 유지보수하기 쉬운 모듈식 코드로 완성하며, GSAP을 활용한 섬세한 모션으로 사용자에게 기분 좋은 몰입감을 선사합니다.',
  competencies: [
    { title: 'Pixel Perfect Markup', desc: 'Figma 디자인과 100% 일치하는 섬세한 간격, 폰트 및 반응형 그리드 퍼블리싱' },
    { title: 'Interactive Motion', desc: 'GSAP, Canvas, CSS 애니메이션을 활용한 60fps 무결점 모션 인터랙션 구축' },
    { title: 'Component Architecture', desc: 'React, TypeScript, Tailwind CSS를 활용한 재사용성과 확장성 높은 컴포넌트화' },
    { title: 'Performance & SEO', desc: 'Core Web Vitals 최적화, 시맨틱 태그, 접근성(a11y) 표준 준수' }
  ],
  skills: [
    { category: 'Publishing & Core', items: ['HTML5 (Semantic)', 'CSS3 / Modern Layout', 'Tailwind CSS', 'SCSS / PostCSS'] },
    { category: 'Animation & Interactive', items: ['GSAP (ScrollTrigger, Timeline)', 'Web Animations API', 'Canvas 2D', 'Motion'] },
    { category: 'Frontend Ecosystem', items: ['TypeScript', 'JavaScript (ES6+)', 'React 19', 'Vite', 'Next.js'] },
    { category: 'Tools & Workflow', items: ['Figma', 'Git / GitHub', 'Chrome DevTools', 'Web Audio API'] }
  ]
};
