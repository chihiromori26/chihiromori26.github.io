// ---------------------------------------------
// Chihiro Mori — Portfolio interactions
// ---------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  const year = new Date().getFullYear();
  document.querySelectorAll('.year-en, .year-ja').forEach(el => { el.textContent = year; });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  // Scroll progress bar
  const progressBar = document.getElementById('progressBar');
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  };
  window.addEventListener('scroll', updateProgress);
  updateProgress();

  // Reveal-on-scroll animation
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // Highlight active nav link based on section in view
  const sections = document.querySelectorAll('main section[id]');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const links = document.querySelectorAll(`.main-nav a[href="#${id}"]`);
      if (!links.length) return;
      if (entry.isIntersecting) {
        document.querySelectorAll('.main-nav a').forEach(l => l.classList.remove('active'));
        links.forEach(l => l.classList.add('active'));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(sec => sectionObserver.observe(sec));

  // ---------------------------------------------
  // Language switch (EN / JA)
  // ---------------------------------------------
  const langButtons = document.querySelectorAll('[data-lang-btn]');
  const profilePhoto = document.getElementById('profilePhoto');
  const pageTitle = document.getElementById('pageTitle');
  const pageDescription = document.getElementById('pageDescription');

  const titles = {
    en: 'Chihiro Mori — Computer Science, University of Toronto',
    ja: 'Chihiro Mori（森ちひろ）— トロント大学 コンピュータサイエンス'
  };
  const descriptions = {
    en: 'Portfolio of Chihiro Mori, Computer Science student at the University of Toronto — research in AI, LLMs, and NLP, technical projects, and cross-cultural activities.',
    ja: 'トロント大学でコンピュータサイエンスを専攻するChihiro Moriのポートフォリオサイト。AI・LLM研究、技術プロジェクト、文化活動を紹介しています。'
  };

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-lang]').forEach(el => {
      el.hidden = el.getAttribute('data-lang') !== lang;
    });

    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });

    if (pageTitle) pageTitle.textContent = titles[lang] || titles.en;
    if (pageDescription) pageDescription.setAttribute('content', descriptions[lang] || descriptions.en);

    if (profilePhoto) {
      profilePhoto.alt = lang === 'ja'
        ? (profilePhoto.dataset.altJa || profilePhoto.alt)
        : (profilePhoto.dataset.altEn || profilePhoto.alt);
    }

    if (navToggle) {
      navToggle.setAttribute('aria-label', lang === 'ja' ? 'メニューを開閉' : 'Toggle navigation');
    }

    try { localStorage.setItem('preferredLang', lang); } catch (e) { /* storage unavailable */ }
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.langBtn));
  });

  let initialLang = 'en';
  try {
    const saved = localStorage.getItem('preferredLang');
    if (saved === 'en' || saved === 'ja') {
      initialLang = saved;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith('ja')) {
      initialLang = 'ja';
    }
  } catch (e) {
    if (navigator.language && navigator.language.toLowerCase().startsWith('ja')) {
      initialLang = 'ja';
    }
  }

  applyLang(initialLang);

});
