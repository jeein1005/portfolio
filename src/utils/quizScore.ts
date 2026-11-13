export interface QuestionOption {
  id: 'A' | 'B';
  title: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  questionNumber: string;
  title: string;
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
    title: '새로운 프로젝트의 UI 마크업을 시작할 때, 당신이 더 선호하는 방식은?',
    options: {
      A: {
        id: 'A',
        title: '확장성이 생명!',
        description: '재사용 가능한 컴포넌트 단위로 쪼개고 디자인 토큰을 체계화하며 시작한다.'
      },
      B: {
        id: 'B',
        title: '유연성이 생명!',
        description: '모바일, 태블릿, 데스크탑을 아우르며 어떤 해상도에서도 틀어짐 없는 튼튼한 반응형(Responsive) 레이아웃 뼈대부터 잡는다.',
      }
    }
  },
  {
    id: 2,
    questionNumber: '02',
    title: '웹 페이지의 퀄리티를 한 단계 더 끌어올려야 한다면, 당신이 가장 먼저 집중할 부분은?',
    options: {
      A: {
        id: 'A',
        title: '어떤 환경에서도 완벽하게!',
        description: '사파리, 모바일 웹 등 다양한 브라우저와 기기 해상도에서 레이아웃이 틀어지지 않는지 크로스 브라우징과 반응형 디테일을 한 번 더 꼼꼼히 점검한다.'
      },
      B: {
        id: 'B',
        title: '손끝에서 느껴지는 생동감!',
        description: '버튼의 호버(Hover) 효과, 부드러운 스크롤 등 유저가 직접 만지고 경험하는 마이크로 인터랙션과 트랜지션을 다듬어 퀄리티를 높인다.'
      }
    }
  },
  {
    id: 3,
    questionNumber: '03',
    title: '런칭한 서비스의 사용자 경험(UX)을 개선하기 위해 당신이 취할 행동은?',
    options: {
      A: {
        id: 'A',
        title: '정보 전달이 최우선!',
        description: '텍스트의 가독성, 명도 대비, 여백(Whitespace)을 재조정하여 사용자가 화면에서 헤매지 않도록 시각적 계층을 명확히 한다.',
      },
      B: {
        id: 'B',
        title: '사용자의 마음으로!',
        description: '실제 화면의 UI 플로우를 짚어보며 직관적이지 않은 동선과 마이크로 인터랙션을 다듬는다.',
      }
    }
  },
  {
    id: 4,
    questionNumber: '04',
    title: '최근 대세인 "생성형 AI", 실무에서 주로 어떻게 활용하시나요?',
    options: {
      A: {
        id: 'A',
        title: '나만의 페어 프로그래머!',
        description: '복잡한 코드 리팩토링이나 디버깅에 적극 활용해 압도적으로 개발 생산성을 높인다.',
      },
      B: {
        id: 'B',
        title: '똑똑한 작업 어시스턴트!',
        description: '테스트용 더미 데이터 생성부터 화면 구성에 필요한 샘플 텍스트, 애니메이션 아이디어를 빠르게 수집할 때 활용한다.',
      }
    }
  },
  {
    id: 5,
    questionNumber: '05',
    title: '피그마(Figma) 시안을 두고 기획/디자인팀과 커뮤니케이션을 해야 할 때?',
    options: {
      A: {
        id: 'A',
        title: '이 방식은 어때요?',
        description: '디자인 의도를 살리면서 성능도 챙길 수 있는 합리적인 기술적 대안을 제안한다.',
      },
      B: {
        id: 'B',
        title: '숨은 디테일도 놓치지 말자!',
        description: '피그마 시안에 빠져있기 쉬운 호버(Hover), 포커스(Focus), 에러 상태 등을 꼼꼼히 짚어내어 피드백을 주고받는다.',
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
