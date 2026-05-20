// 다크 모드 초기화
function initDarkMode() {
  const btn = document.getElementById('darkToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');

  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  }

  btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    updateDarkIcon();
  });

  updateDarkIcon();

  function updateDarkIcon() {
    const isDark = html.classList.contains('dark');
    document.getElementById('iconSun').classList.toggle('hidden', !isDark);
    document.getElementById('iconMoon').classList.toggle('hidden', isDark);
  }
}

// 모바일 메뉴 토글
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // 메뉴 링크 클릭 시 메뉴 닫기
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

// 스크롤 스파이 — 현재 섹션에 해당하는 nav 링크 활성화
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

// 섹션 Fade-in — 뷰포트 진입 시 section-visible 클래스 추가
function initFadeIn() {
  const elements = document.querySelectorAll('.section-hidden');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

// 상단으로 이동 버튼
function initScrollToTop() {
  const btn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    const isVisible = window.scrollY > 200;
    btn.classList.toggle('opacity-0', !isVisible);
    btn.classList.toggle('pointer-events-none', !isVisible);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 내비게이션 스크롤 배경 효과
function initNavScroll() {
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('shadow-md');
    }
  });
}

// 스킬 탭 전환
function initSkillTabs() {
  const tabs = document.querySelectorAll('.skill-tab');
  const panels = document.querySelectorAll('.skill-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => {
        const isActive = t.dataset.tab === target;
        t.classList.toggle('bg-primary-500', isActive);
        t.classList.toggle('text-white', isActive);
        t.classList.toggle('bg-gray-100', !isActive);
        t.classList.toggle('dark:bg-gray-700', !isActive);
        t.classList.toggle('text-gray-600', !isActive);
        t.classList.toggle('dark:text-gray-300', !isActive);
      });

      panels.forEach((panel) => {
        panel.classList.toggle('hidden', panel.dataset.panel !== target);
      });
    });
  });
}

// 문의 폼 — 유효성 검사 후 인라인 메시지 표시
function initContactForm() {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      showMessage('모든 필드를 입력해 주세요.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('올바른 이메일 형식을 입력해 주세요.', 'error');
      return;
    }

    showMessage('메시지가 전송되었습니다. 감사합니다!', 'success');
    form.reset();
  });

  function showMessage(text, type) {
    msg.textContent = text;
    msg.className = [
      'mt-4 p-3 rounded-lg text-sm font-medium',
      type === 'success'
        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    ].join(' ');
    msg.classList.remove('hidden');

    if (type === 'success') {
      setTimeout(() => msg.classList.add('hidden'), 4000);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initMobileMenu();
  initScrollSpy();
  initFadeIn();
  initScrollToTop();
  initNavScroll();
  initSkillTabs();
  initContactForm();
});
