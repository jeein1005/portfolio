export interface QuestionOption {
  id: 'A' | 'B';
  title: string;
  description: string;
  tag: string;
  archetype: 'architect' | 'craftsman' | 'creative' | 'speedy';
}

export interface QuizQuestion {
  id: number;
  questionNumber: string;
  category: string;
  title: string;
  subtitle: string;
  cardHeadline: string;
  options: {
    A: QuestionOption;
    B: QuestionOption;
  };
}

export interface PersonaResult {
  personaTitle: string;
  subtitle: string;
  matchScore: number;
  tags: string[];
  summary: string;
  fitReason: string;
  keyStrengths: string[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionNumber: '01',
    category: 'CODING ENVIRONMENT',
    title: '선호하는 코딩 환경은?',
    subtitle: '새로운 프로젝트를 시작할 때 당신이 먼저 고려하는 작업 스타일은?',
    cardHeadline: 'YOUR IDEAL CODING ENVIRONMENT:',
    options: {
      A: {
        id: 'A',
        title: 'WebStorm에서 꼼꼼하게 구조 잡기',
        description: '엄격한 타입 체크와 모듈화된 폴더 구조로 유지보수성 200% 확보하기',
        tag: '체계적인 설계 & 아키텍처',
        archetype: 'architect'
      },
      B: {
        id: 'B',
        title: '가벼운 에디터로 빠르게 테스트하기',
        description: '민첩한 핫 리로드와 빠른 프로토타이핑으로 즉각적인 피드백 루프 돌리기',
        tag: '신속한 실행 & 빠른 검증',
        archetype: 'speedy'
      }
    }
  },
  {
    id: 2,
    questionNumber: '02',
    category: 'DEBUGGING STYLE',
    title: '404 에러를 마주했을 때?',
    subtitle: '예상치 못한 버그나 이슈가 발생했을 때 대처하는 방식은?',
    cardHeadline: 'WHEN ENCOUNTERING A 404 OR CRITICAL BUG:',
    options: {
      A: {
        id: 'A',
        title: '원인을 찾을 때까지 완벽하게 디버깅',
        description: 'DevTools 네트워크 탭과 콜스택을 뜯어보며 근본 원인을 뿌리 뽑기',
        tag: '심층 분석 & 근본 해결',
        archetype: 'architect'
      },
      B: {
        id: 'B',
        title: '직관적으로 부딪히며 유연하게 해결',
        description: '다양한 대안과 우회로를 신속히 탐색해 프로젝트 일정 지연 없이 해결하기',
        tag: '유연한 위기대응 & 직관적 감각',
        archetype: 'creative'
      }
    }
  },
  {
    id: 3,
    questionNumber: '03',
    category: 'UI & STYLING',
    title: 'UI / CSS 스타일링을 할 때 당신의 철학은?',
    subtitle: '디자인을 코드로 구현할 때 무엇을 가장 최우선으로 생각하나요?',
    cardHeadline: 'YOUR CRAFT PHILOSOPHY FOR UI & STYLING:',
    options: {
      A: {
        id: 'A',
        title: '1px의 오차도 없는 픽셀 퍼펙트 & 감성 모션',
        description: '디자이너의 의도를 100% 구현하고 부드러운 인터랙션으로 감동 주기',
        tag: '1px 픽셀 장인 & 모션 감각',
        archetype: 'craftsman'
      },
      B: {
        id: 'B',
        title: '디자인 시스템과 유틸리티 퍼스트의 확장성',
        description: '재사용 가능한 토큰과 일관된 규칙으로 팀 전체의 생산성을 극대화하기',
        tag: '디자인 시스템 & 높은 확장성',
        archetype: 'architect'
      }
    }
  },
  {
    id: 4,
    questionNumber: '04',
    category: 'COLLABORATION & MOTION',
    title: '도전적인 인터랙션 아이디어가 나왔을 때?',
    subtitle: '기획이나 디자인에서 새롭고 과감한 웹 모션을 제안받았을 때 당신의 반응은?',
    cardHeadline: 'WHEN PROPOSED A BOLD INTERACTIVE MOTION:',
    options: {
      A: {
        id: 'A',
        title: '오히려 좋아! GSAP로 브라우저 한계까지 극대화',
        description: '방문자의 시선을 사로잡는 차별화된 비주얼 인터랙션을 완성하기',
        tag: 'GSAP 모션 탐구 & 인터랙티브 도전',
        archetype: 'creative'
      },
      B: {
        id: 'B',
        title: '60fps 성능과 사용자 접근성을 고려한 최적 균형',
        description: '아름다움과 부드러운 퍼포먼스, 크로스 브라우징을 완벽하게 양립시키기',
        tag: '성능 최적화 & 크로스 브라우징',
        archetype: 'craftsman'
      }
    }
  }
];

export function calculateQuizResult(answers: Record<number, 'A' | 'B'>): PersonaResult {
  const answerCount = Object.keys(answers).length;
  const aCount = Object.values(answers).filter(val => val === 'A').length;
  const bCount = Object.values(answers).filter(val => val === 'B').length;

  if (aCount >= 3) {
    return {
      personaTitle: '디테일에 집착하는 픽셀 마법사',
      subtitle: 'The Detail-Obsessed Pixel Craftsman',
      matchScore: 100,
      tags: ['1px 픽셀 퍼펙트', 'GSAP 인터랙티브', '탄탄한 아키텍처', '완벽주의 퍼블리싱'],
      summary: '체계적인 설계와 미세한 인터랙션 감각을 겸비하여, 디자이너의 꿈을 그대로 웹에 구현하는 퍼블리셔입니다.',
      fitReason: '구조적인 안정성과 감각적인 모션 디테일을 동시에 요구하는 당신의 프로젝트에 100% 매칭됩니다!',
      keyStrengths: [
        '피그마 시안 100% 일치 픽셀 퍼펙트 마크업',
        'GSAP, CSS Keyframes를 활용한 60fps 부드러운 웹 모션',
        'TypeScript 기반의 유지보수 용이한 컴포넌트 아키텍처',
        '디자이너 & 기획자와의 막힘없는 소통 및 디테일 캐치'
      ]
    };
  } else if (bCount >= 3) {
    return {
      personaTitle: '속도와 유연성을 겸비한 애자일 빌더',
      subtitle: 'The Fast & Agile Interactive Builder',
      matchScore: 100,
      tags: ['빠른 프로토타이핑', '유연한 문제 해결', 'Tailwind CSS 장인', '사용자 경험 중심'],
      summary: '아이디어를 빠르게 시각화하고 유연하게 이슈를 돌파하여 프로젝트를 속도감 있게 이끄는 개발자입니다.',
      fitReason: '신속한 실행력과 능동적인 문제 해결력이 필요한 당신의 팀과 완벽한 시너지를 낼 수 있습니다!',
      keyStrengths: [
        'Tailwind CSS를 활용한 기민한 반응형 UI 구현',
        '예상치 못한 이슈 발생 시 빠른 가설 검증과 대안 제시',
        '프로덕트 출시 일정 준수 및 민첩한 사용자 피드백 반영',
        '효율적인 컴포넌트 재사용 및 간결한 코드베이스'
      ]
    };
  } else {
    return {
      personaTitle: '설계와 감성을 잇는 하이브리드 퍼블리셔',
      subtitle: 'The Hybrid Creative Engineer',
      matchScore: 100,
      tags: ['균형 잡힌 시각', '인터랙티브 웹 전문', '성능 최적화', '전방위 올라운더'],
      summary: '아름다운 모션 그래픽과 단단한 코드 구조 사이에서 최적의 황금비율을 찾아내는 올라운드 퍼블리셔입니다.',
      fitReason: '비주얼 퀄리티와 비즈니스 실행력을 모두 놓치지 않는 스마트한 협업 파트너를 찾으셨습니다!',
      keyStrengths: [
        '시각적 몰입감과 60fps 경량 최적화의 완벽한 조화',
        '디자인 시스템 구축 및 유지보수 중심의 컴포넌트 설계',
        '모바일, 태블릿, 데스크톱 전 기기 완벽 반응형 대응',
        '새로운 라이브러리와 트렌디한 웹 기술 습득에 탁월'
      ]
    };
  }
}
