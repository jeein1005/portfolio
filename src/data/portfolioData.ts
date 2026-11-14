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

interface BrandProject {
  id: number;
  logo: string;
  logoHeightClass: string;
  title: string;
  roleType: string;
  category: string;
  description: string;
}

interface CareerItem {
  company: string;
  period: string;
  description: string;
}

interface ProfileItem {
  name: string;
  age: string;
  profileImage: string;
  role: string;
  email: string;
  github: string;
  location: string;
  experienceYears: string;
  certifications: string;
  introduction: string;
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

export const DEVELOPER_PROFILE: ProfileItem = {
  name: '엄지인 (Eom Jeein)',
  age: '1991.06.18 (만 35세)',
  profileImage: '/assets/profile.webp',
  role: 'Frontend & Interactive Web Publisher',
  email: 'eji910618.jeein@gmail.com',
  github: 'https://github.com/jeein1005',
  location: '천안시 서북구 성성동',
  experienceYears: '10+ Years',
  certifications: '정보처리산업기사',
  introduction: '기획자의 의도를 꿰뚫고, 디자이너의 감성을 브라우저에 그대로 피워내는 1px 퍼펙트 인터랙티브 퍼블리셔입니다. 복잡한 디자인 시안도 깔끔한 시맨틱 구조와 유지보수하기 쉬운 모듈식 코드로 완성하며, GSAP을 활용한 섬세한 모션으로 사용자에게 기분 좋은 몰입감을 선사합니다.',
};

export const CAREER_DATA: CareerItem[] = [
  {
    company: "주식회사시스텀",
    period: "2023. 7 ~ 2025. 8",
    description: "프로젝트 참여, 다양한 성과 (웹 화면 UI/UX 개발)",
  },
  {
    company: "그라픽 (GRAFIK)",
    period: "2015. 2 ~ 2023. 7",
    description: "프로젝트 참여, 다양한 성과 (웹 화면 UI/UX 개발)",
  },
  {
    company: "주식회사엠엑스엔커머스코리아",
    period: "2014. 1 ~ 2015. 1",
    description: "회사 내부 브랜드 프로젝트 참여 (웹 화면 UI/UX 개발)",
  },
  {
    company: "(주)아이티라인",
    period: "2013. 6 ~ 2014. 1",
    description: "회사 내부 브랜드 프로젝트 참여 (웹 화면 UI/UX 개발)",
  },
];

export const BRAND_PROJECTS: BrandProject[] = [
  {
    id: 1,
    logo: "/assets/projects/wizwid.webp",
    logoHeightClass: "max-h-16 sm:max-h-20",
    title: "위즈위드",
    roleType: "운영",
    category: "E-Commerce",
    description: "글로벌 패션 & 라이프스타일 셀렉트 커머스 플랫폼 고도화 및 프로모션 UI/UX 운영 개발"
  },
  {
    id: 2,
    logo: "/assets/projects/wconcept.webp",
    logoHeightClass: "max-h-4 sm:max-h-6",
    title: "더블유컨셉",
    roleType: "운영",
    category: "E-Commerce",
    description: "트렌드 패션 E-Commerce 웹 UI 컴포넌트 유지보수 및 크로스 브라우징 최적화"
  },
  {
    id: 3,
    logo: "/assets/projects/netmarble.webp",
    logoHeightClass: "max-h-6 sm:max-h-8",
    title: "넷마블스토어",
    roleType: "구축",
    category: "E-Commerce",
    description: "글로벌 게임 IP 공식 굿즈 스토어 웹 프론트엔드 화면 신규 구축 및 반응형 퍼블리싱"
  },
  {
    id: 4,
    logo: "/assets/projects/mario.webp",
    logoHeightClass: "max-h-6 sm:max-h-8",
    title: "마리오아울렛",
    roleType: "운영",
    category: "E-Commerce",
    description: "대형 옴니채널 패션 아울렛 공식 온라인몰 신규 구축 및 인터랙티브 UI 지속 운영"
  },
  {
    id: 5,
    logo: "/assets/projects/goodwearmall.webp",
    logoHeightClass: "max-h-6 sm:max-h-8",
    title: "탑텐몰(굿웨어몰)",
    roleType: "구축 및 운영",
    category: "E-Commerce",
    description: "신성통상 대표 패밀리 브랜드 통합몰 구축 및 대규모 반응형 UI 프론트엔드 개발"
  },
  {
    id: 6,
    logo: "/assets/projects/ananti.webp",
    logoHeightClass: "max-h-4 sm:max-h-6",
    title: "아난티",
    roleType: "구축 및 운영",
    category: "Luxury Resort & Hotel",
    description: "프리미엄 리조트 멤버십 플랫폼 예약 및 브랜드 감성 인터랙션 구축/운영"
  },
  {
    id: 7,
    logo: "/assets/projects/eternal.webp",
    logoHeightClass: "max-h-6 sm:max-h-8",
    title: "이터널저니",
    roleType: "운영",
    category: "Lifestyle E-Commerce",
    description: "도서 & 문화 큐레이션 셀렉트샵 디지털 플랫폼 웹 화면 UI/UX 퍼블리싱 운영"
  },
  {
    id: 8,
    logo: "/assets/projects/rosak.webp",
    logoHeightClass: "max-h-4 sm:max-h-6",
    title: "로사케이",
    roleType: "리뉴얼 및 운영",
    category: "E-Commerce",
    description: "카페24로 운영되는 디자이너 핸드백 브랜드 공식 스토어 부분 리뉴얼 및 반응형 웹 퍼블리싱"
  }
];