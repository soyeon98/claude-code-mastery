# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어
- **커밋 메시지**: 한국어
- **문서화**: 한국어
- **변수명 / 함수명**: 영어 (코드 표준 준수)

---

## 프로젝트 개요

개발자 웹 이력서 (Single Page Application). 별도의 프레임워크나 번들러 없이 HTML/CSS/JS로 구성된 정적 사이트이며, Tailwind CSS를 스타일링에 사용한다.

**기술 스택**
- HTML5 (시맨틱 마크업)
- CSS3 + Tailwind CSS v3 (유틸리티 기반 스타일링)
- Vanilla JavaScript (ES6+)

---

## 프로젝트 구조

```
web-resume/
├── index.html          # 진입점 — 모든 섹션이 이 파일에 포함됨
├── css/
│   └── custom.css      # Tailwind로 표현 불가능한 커스텀 스타일, 애니메이션
├── js/
│   └── main.js         # 스크롤 스파이, Fade-in, 다크모드, 폼 처리 등 모든 JS 로직
├── assets/
│   ├── images/         # 프로필 사진 등 이미지 (WebP 권장)
│   └── icons/          # SVG 아이콘
└── tailwind.config.js  # 커스텀 컬러 팔레트, 폰트 확장 설정
```

---

## 개발 명령어

### Tailwind CSS 빌드

```bash
# 개발 모드 (watch — 파일 변경 시 자동 재빌드)
npx tailwindcss -i ./css/custom.css -o ./css/output.css --watch

# 프로덕션 빌드 (미사용 클래스 제거)
npx tailwindcss -i ./css/custom.css -o ./css/output.css --minify
```

### 로컬 개발 서버

```bash
# VS Code Live Server 확장 사용 시
# index.html 우클릭 → "Open with Live Server"

# 또는 npx serve 사용
npx serve .
```

> `index.html`에서 `<link>`로 연결하는 CSS 파일은 `./css/output.css`(빌드 결과물)이며, `custom.css`는 Tailwind의 입력 파일이다.

---

## 아키텍처

### 페이지 구조 (index.html)

단일 HTML 파일에 7개 섹션이 순서대로 배치된다.

```
<header>  내비게이션 바 (상단 고정, 앵커 링크, 다크모드 토글 버튼)
<main>
  #hero        프로필 사진, 이름, 직함, SNS 링크, CTA 버튼
  #about       자기소개 텍스트, 기본 정보 배지
  #skills      기술 카테고리별 태그 카드
  #experience  타임라인 형태의 경력 목록
  #projects    프로젝트 카드 그리드
  #education   학력 및 자격증
  #contact     SNS 링크 + 문의 폼
<footer>  저작권 텍스트
```

### JavaScript 구조 (js/main.js)

단일 파일에 기능별로 함수를 분리하여 구성한다.

| 기능 | 구현 방식 |
|------|-----------|
| 섹션 Fade-in | `IntersectionObserver` — 뷰포트 진입 시 `opacity-0` → `opacity-100` 전환 |
| 스크롤 스파이 | `IntersectionObserver` — 현재 섹션에 해당하는 nav 링크 활성화 |
| 다크 모드 | `document.documentElement.classList.toggle('dark')` + `localStorage` 유지 |
| Scroll-to-top | 스크롤 위치 감지 후 버튼 표시/숨김, `window.scrollTo` |
| 문의 폼 | `submit` 이벤트 핸들러 — 유효성 검사 후 인라인 알림 메시지 표시 |

### Tailwind 설정 (tailwind.config.js)

`darkMode: 'class'`로 설정하여 `<html>` 태그의 `dark` 클래스로 다크 모드를 제어한다. `content` 경로에 `index.html`과 `js/**/*.js`를 포함해야 프로덕션 빌드 시 클래스가 누락되지 않는다.

```js
content: ['./index.html', './js/**/*.js'],
darkMode: 'class',
```

---

## 커밋 메시지 컨벤션

```
<타입>: <변경 내용 요약>

타입 목록:
  feat     새로운 기능 추가
  fix      버그 수정
  style    스타일(CSS/Tailwind) 변경
  refactor 기능 변화 없는 코드 개선
  chore    빌드 설정, 패키지 변경
  docs     문서 수정
```

예시:
```
feat: 다크 모드 토글 기능 추가
style: Hero 섹션 모바일 레이아웃 개선
fix: 스크롤 스파이 활성화 기준점 오류 수정
```

---

## 개발 시 주의사항

- Tailwind 클래스는 `index.html`과 `main.js` 안에서만 동적으로 추가/제거한다. `custom.css`에 Tailwind 클래스를 문자열로 작성하면 purge 단계에서 제거될 수 있다.
- 다크 모드 스타일은 반드시 `dark:` 접두사 유틸리티 클래스로 처리하고, `tailwind.config.js`의 `darkMode: 'class'` 설정이 전제된다.
- 이미지는 `assets/images/`에 WebP 포맷으로 저장하고 `<img loading="lazy">` 속성을 적용한다.
- 배포 전 반드시 프로덕션 빌드(`--minify`)를 실행하여 `output.css` 파일 크기를 줄인다.
