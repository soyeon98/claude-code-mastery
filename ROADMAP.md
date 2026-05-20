# 개발자 웹 이력서 개발 로드맵

## 기술 스택
- **HTML5** — 시맨틱 마크업 구조
- **CSS3** — 커스텀 스타일 및 애니메이션
- **JavaScript (Vanilla)** — 인터랙션 및 동적 기능
- **Tailwind CSS** — 유틸리티 기반 반응형 스타일링

---

## 프로젝트 구조

```
web-resume/
├── index.html
├── css/
│   └── custom.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── profile.jpg
│   └── icons/
└── tailwind.config.js
```

---

## Phase 1 — 환경 설정 및 기본 구조

### 1-1. 프로젝트 초기화
- [ ] 프로젝트 폴더 생성 및 디렉토리 구조 세팅
- [ ] Tailwind CSS CDN 또는 npm 설치 (`npm init`, `tailwindcss` 설치)
- [ ] `tailwind.config.js` 기본 설정 (폰트, 컬러 팔레트 커스터마이징)
- [ ] `index.html` 기본 템플릿 작성 (lang, meta, viewport, title)

### 1-2. 레이아웃 설계
- [ ] 전체 페이지 단일 스크롤(Single Page) 구조 설계
- [ ] 내비게이션 바 (상단 고정, 섹션 앵커 링크)
- [ ] 반응형 그리드 레이아웃 기본 틀 작성 (모바일 / 태블릿 / 데스크탑)

---

## Phase 2 — 섹션별 콘텐츠 개발

### 2-1. Hero 섹션 (상단 소개)
- [ ] 프로필 사진 (원형 이미지)
- [ ] 이름, 직함(포지션) 표시
- [ ] 한 줄 자기소개 (tagline)
- [ ] GitHub / LinkedIn / 이메일 아이콘 링크
- [ ] CTA 버튼 ("이력서 다운로드", "연락하기")

```
예시 내용:
이름: 김개발
직함: Frontend Developer
소개: 사용자 경험을 중시하는 프론트엔드 개발자입니다.
```

### 2-2. About 섹션 (자기소개)
- [ ] 간략한 자기소개 텍스트 (3~4문장)
- [ ] 주요 관심 분야 및 개발 철학
- [ ] 거주 지역, 경력 연차 등 기본 정보 배지

```
예시 내용:
- 경력: 3년차 프론트엔드 개발자
- 위치: 서울, 대한민국
- 관심 분야: UI/UX, 웹 성능 최적화, 오픈소스
```

### 2-3. Skills 섹션 (기술 스택)
- [ ] 기술 카테고리별 분류 (Frontend / Backend / Tools)
- [ ] 스킬 태그 또는 아이콘 카드 형태 표시
- [ ] 숙련도 프로그레스 바 (선택 사항)

```
예시 내용:
Frontend : HTML, CSS, JavaScript, React, Tailwind CSS
Backend  : Node.js, Express, MySQL
Tools    : Git, GitHub, Figma, VS Code
```

### 2-4. Experience 섹션 (경력)
- [ ] 타임라인 형태의 경력 목록
- [ ] 회사명, 포지션, 재직 기간 표시
- [ ] 주요 업무 및 성과 bullet point 리스트

```
예시 내용:
(주)테크스타트 | Frontend Developer | 2022.03 ~ 현재
  - React 기반 사내 관리자 대시보드 개발
  - Tailwind CSS 도입으로 스타일링 생산성 40% 향상
  - 웹 성능 최적화 (Lighthouse 점수 65 → 92)

(주)웹에이전시 | Web Publisher | 2021.01 ~ 2022.02
  - 반응형 웹사이트 퍼블리싱 10건 이상
  - HTML/CSS/jQuery 기반 랜딩 페이지 제작
```

### 2-5. Projects 섹션 (프로젝트)
- [ ] 프로젝트 카드 그리드 레이아웃
- [ ] 프로젝트명, 설명, 사용 기술 태그, GitHub / 데모 링크
- [ ] 호버 시 오버레이 애니메이션 효과

```
예시 내용:
프로젝트 1: 개인 블로그
  - 설명: Next.js와 Markdown으로 제작한 개인 기술 블로그
  - 기술: React, Next.js, Tailwind CSS
  - 링크: GitHub | Live Demo

프로젝트 2: Todo 앱
  - 설명: 로컬스토리지 기반 할 일 관리 앱
  - 기술: Vanilla JS, HTML, CSS
  - 링크: GitHub | Live Demo
```

### 2-6. Education 섹션 (학력)
- [ ] 학교명, 전공, 졸업 연도
- [ ] 관련 자격증 목록

```
예시 내용:
한국대학교 | 컴퓨터공학과 | 2021년 졸업
자격증: 정보처리기사, SQLD
```

### 2-7. Contact 섹션 (연락처)
- [ ] 이메일, GitHub, LinkedIn 링크
- [ ] 간단한 문의 폼 (이름 / 이메일 / 메시지 / 전송 버튼)
- [ ] 폼 전송 시 알림 메시지 (JavaScript)

---

## Phase 3 — UI/UX 및 인터랙션

### 3-1. 반응형 디자인
- [ ] 모바일 (< 768px) 레이아웃 최적화
- [ ] 태블릿 (768px ~ 1024px) 레이아웃 조정
- [ ] 데스크탑 (> 1024px) 풀 레이아웃

### 3-2. 애니메이션 및 인터랙션
- [ ] 스크롤 시 섹션 Fade-in 애니메이션 (IntersectionObserver API)
- [ ] 내비게이션 스크롤 스파이 (현재 섹션 하이라이트)
- [ ] 상단으로 이동 버튼 (Scroll-to-top)
- [ ] 다크 모드 토글 (localStorage 저장)

### 3-3. 스타일 커스터마이징
- [ ] Tailwind 커스텀 컬러 팔레트 정의 (primary, secondary)
- [ ] Google Fonts 또는 로컬 폰트 적용
- [ ] 내비게이션 스크롤 시 배경색 변화 효과

---

## Phase 4 — 최적화 및 배포

### 4-1. 성능 최적화
- [ ] 이미지 최적화 (WebP 변환, lazy loading)
- [ ] Tailwind CSS 프로덕션 빌드 (불필요한 클래스 purge)
- [ ] HTML/CSS/JS 코드 정리 및 검토

### 4-2. 접근성 및 SEO
- [ ] 시맨틱 HTML 태그 사용 확인 (`<header>`, `<main>`, `<section>`, `<footer>`)
- [ ] 이미지 `alt` 속성 작성
- [ ] meta 태그 설정 (description, og:title, og:image)
- [ ] `robots.txt`, `sitemap.xml` 작성 (선택 사항)

### 4-3. 배포
- [ ] GitHub 저장소 생성 및 코드 push
- [ ] GitHub Pages 또는 Netlify / Vercel 배포
- [ ] 커스텀 도메인 연결 (선택 사항)

---

## 마일스톤 요약

| Phase | 목표 | 산출물 |
|-------|------|--------|
| Phase 1 | 환경 설정, 레이아웃 기본 구조 | `index.html` 골격, Tailwind 설정 |
| Phase 2 | 7개 섹션 콘텐츠 완성 | 전체 페이지 정적 콘텐츠 |
| Phase 3 | 반응형, 애니메이션, 다크모드 | 인터랙티브 이력서 완성본 |
| Phase 4 | 최적화, SEO, 배포 | 라이브 URL |

---

## 디자인 레퍼런스 키워드
- `developer portfolio minimal`
- `resume tailwind css template`
- `single page resume html css js`
