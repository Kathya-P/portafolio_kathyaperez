const { translations } = require("./projects/xo/script");

function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

// ===== NAV: add/remove background on scroll =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close when any link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== LANG TOGGLE =====
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'es';
setLang(currentLang);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  setLang(currentLang);
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== SECTION TITLE ANIMATED UNDERLINE =====
const titleObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('line-on'); });
}, { threshold: 0.5 });
document.querySelectorAll('.section-title').forEach(el => titleObserver.observe(el));

// ===== MOUSE SPOTLIGHT =====
const spotlight = document.createElement('div');
spotlight.className = 'spotlight';
document.body.prepend(spotlight);
document.addEventListener('mousemove', e => {
  spotlight.style.setProperty('--mx', e.clientX + 'px');
  spotlight.style.setProperty('--my', e.clientY + 'px');
});

// ===== TYPING ANIMATION =====
const roles = ['Junior Backend Developer', 'Java / Spring Boot', 'C# / .NET Developer', 'API Builder', 'Full-Stack Junior'];
const roleEl = document.querySelector('.hero-role');
let roleIdx = 0, charIdx = 0, deleting = false;

function typeRole() {
  const current = roles[roleIdx];
  if (!deleting) {
    charIdx++;
    roleEl.innerHTML = current.slice(0, charIdx) + '<span class="cursor">|</span>';
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeRole, 2200);
      return;
    }
  } else {
    charIdx--;
    roleEl.innerHTML = current.slice(0, charIdx) + '<span class="cursor">|</span>';
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeRole, deleting ? 45 : 85);
}
typeRole();

// ===== 3D CARD TILT =====
document.querySelectorAll('.project-card, .cert-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-5px) scale(1.01)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== SCROLL SPY — active nav link =====
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"]');

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spyObserver.observe(s));

// ===== STAGGERED REVEALS =====
document.querySelectorAll('.skills-grid .skill-category').forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 90}ms`);
  el.dataset.dir = 'scale';
});
document.querySelectorAll('.projects-grid .project-card').forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 80}ms`);
  el.dataset.dir = i % 2 === 0 ? 'left' : 'right';
});
document.querySelectorAll('.certs-grid .cert-card').forEach((el, i) => {
  el.style.setProperty('--delay', `${(i % 4) * 70}ms`);
  el.dataset.dir = 'scale';
});
document.querySelectorAll('.contact-grid .contact-card').forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 100}ms`);
  el.dataset.dir = 'left';
});

// ===== PROJECT FILTERS =====
const filterButtons = document.querySelectorAll('.filter-chip');
const projectCards = [...document.querySelectorAll('.projects-grid .project-card')];
const projectsEmpty = document.getElementById('projectsEmpty');

function applyProjectFilter(filter) {
  let visibleCount = 0;

  projectCards.forEach(card => {
    const tech = (card.dataset.tech || '').toLowerCase();
    const show = filter === 'all' || tech.includes(filter);
    card.classList.toggle('is-hidden', !show);
    if (show) visibleCount++;
  });

  if (projectsEmpty) {
    projectsEmpty.classList.toggle('show', visibleCount === 0);
  }
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');
    applyProjectFilter(button.dataset.filter);
  });
});

applyProjectFilter('all');

