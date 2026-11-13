# ✨ Interactive UI/UX Developer Portfolio

그리드 레이아웃과 감각적인 마이크로 인터랙션을 통해 UI/UX 개발자의 역량과 작업물을 직관적으로 파악할 수 있는 원페이지(One-page) 인터랙티브 포트폴리오 웹사이트입니다.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=GSAP&logoColor=white)

---

## 💡 Key Features

- **Bento Grid Layout**: 정보의 위계를 고려한 벤토 그리드 형태의 UI로 기술 스택, 경력, 소개 등을 깔끔하고 압축적으로 전달
- **Smooth Animations**: GSAP 기반의 자연스러운 화면 전환 및 스크롤에 반응하는 마이크로 인터랙션
- **Responsive Layout**: Tailwind CSS를 활용하여 모바일 및 데스크톱 환경에 완벽하게 최적화된 반응형 UI
- **Typography Design**: 영문 타이틀 서체와 한글 Pretendard 폰트의 정교한 조합을 통한 가독성 극대화

---

## 🛠 Tech Stack

- **Framework / Library**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Module
- **Animation**: GSAP (GreenSock Animation Platform)
- **Typography**: 
  - `Instrument Serif` (Main Titles)
  - `Alex Brush` (Accents)
  - `Inter` & `Pretendard` (UI & Body Text)

---

## 📁 Project Structure

```text
portfolio/
├── public/                # 정적 에셋 (이미지 등)
├── src/
│   ├── components/        # UI 컴포넌트 (Navbar, IntroView, AboutPage 등)
│   ├── data/              # 포트폴리오 프로젝트 및 경력 데이터 (portfolioData.ts)
│   ├── utils/             # 공통 유틸리티 함수
│   ├── App.tsx            # 메인 루트 컴포넌트
│   ├── index.css          # Tailwind & 전역 스타일 정의
│   └── main.tsx           # React 마운트 엔트리 포인트
├── index.html             # HTML 템플릿 (웹폰트 CDN 포함)
├── package.json           # 의존성 패키지 관리
├── tsconfig.json          # TypeScript 설정
└── vite.config.ts         # Vite 빌드 옵션 & 경로 별칭
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 이상 권장)
- npm

### Installation & Run

1. **의존성 패키지 설치**
   ```bash
   npm install
   ```

2. **로컬 개발 서버 실행**
   ```bash
   npm run dev
   ```

3. 브라우저에서 `http://localhost:5173` 접속 후 확인합니다.

---

## 📦 Build & Deployment

최종 배포용 파일 생성:
```bash
npm run build
```
빌드된 결과물은 `dist/` 폴더에 생성됩니다.