// ===== TRANSLATIONS =====
const translations = {
  es: {
    'nav-about':    'Sobre mí',
    'nav-skills':   'Habilidades',
    'nav-projects': 'Proyectos',
    'nav-certs':    'Certificados',
    'nav-contact':  'Contacto',
    'greeting':     '// hola, soy',
    'hero-desc':    'Estudiante de Ingeniería en Desarrollo de Software en la Universidad Católica de El Salvador. Apasionada por construir APIs robustas, sistemas seguros y soluciones backend limpias y escalables.',
    'hero-btn1':    'Ver proyectos',
    'hero-btn2':    'Contacto',
    'hero-btn-cv':  'Descargar CV',
    'about-title':  'Sobre mí',
    'about-p1':     'Soy estudiante de <strong>Ingeniería en Desarrollo de Software</strong> en la Universidad Católica de El Salvador, con enfoque en el área backend. Me interesa construir APIs limpias, sistemas seguros y soluciones que den valor real.',
    'about-p2':     'Tengo experiencia práctica con <strong>PHP, C# (.NET) y Java (Spring Boot)</strong> para el desarrollo backend, y con <strong>HTML, CSS, JavaScript, Vue.js y Bootstrap</strong> en el frontend — lo que me permite entender el proyecto de extremo a extremo.',
    'about-p3':     'Siempre estoy aprendiendo algo nuevo. Actualmente profundizando en arquitectura de software, seguridad web y buenas prácticas de desarrollo.',
    'label-location': '📍 Ubicación',
    'label-uni':      '🎓 Universidad',
    'label-langs':    '🌐 Idiomas',
    'label-avail':    '💼 Disponibilidad',
    'val-location': 'El Salvador',
    'val-uni':      'UNICAES · Ing. en Desarrollo de Software (2024 – presente)',
    'val-langs':    'Español (nativo) · Inglés B2',
    'val-avail':    'Prácticas profesionales / trabajo remoto',
    'skills-title':   'Habilidades',
    'skill-cat-langs': 'Lenguajes',
    'skill-cat-fw':   'Frameworks &amp; Librerías',
    'skill-cat-db':   'Bases de Datos',
    'skill-cat-tools': 'Herramientas &amp; Otros',
    'projects-title':   'Proyectos',
    'proj-renta-title': 'Renta SV — Plataforma de Alquileres',
    'proj-renta-desc':  'Sistema web para gestión y búsqueda de propiedades en alquiler en El Salvador. Incluye panel de administrador con CRUD completo, autenticación de usuarios y filtros avanzados de búsqueda.',
    'proj-banban-title': 'Ban Ban — Panadería Digital',
    'proj-banban-desc':  'Sitio web completo para una panadería local. Catálogo visual de productos, diseño responsive con Bootstrap 5, galería de imágenes e integración con redes sociales.',
    'proj-rest-title': 'Restaurante Digital',
    'proj-rest-desc':  'Plataforma web para restaurante con menú digital, sistema de órdenes y panel de administración para gestión de productos y pedidos.',
    'proj-xo-title': 'XO Game — Tres en Raya',
    'proj-xo-desc':  'Juego de tres en raya con lógica implementada en JavaScript puro. Detección automática de ganador, empates y reinicio de partida. UI limpia y responsive.',
    'proj-eventsphere-title': 'EventSphere — Plataforma de Eventos',
    'proj-eventsphere-desc':  'Plataforma web full-stack para gestión de eventos con compra de boletos, generación de códigos QR, chat por evento, sistema de reseñas y panel de administración. Desplegada en Railway con PostgreSQL.',
    'soft-title':         'Habilidades Blandas',
    'soft-certs-label':  '// certificados relacionados',
    'soft-communication': 'Comunicación efectiva',
    'soft-teamwork':     'Trabajo en equipo',
    'soft-learning':     'Aprendizaje continuo',
    'soft-problem':      'Resolución de problemas',
    'soft-adapt':        'Adaptabilidad',
    'soft-critical':     'Pensamiento crítico',
    'soft-time':         'Gestión del tiempo',
    'soft-proactive':    'Proactividad',
    'certs-title':        'Certificados',
    'view-cert':          'Ver certificado →',
    'cert-english-level': 'Nivel B2 · Upper Intermediate',
    'contact-title':    'Contacto',
    'contact-subtitle': '¿Tienes una oportunidad o proyecto en mente? Hablemos.',
    'footer-text':      'Diseñado y desarrollado por <strong>Kathya Pérez</strong> · 2026',
  },
  en: {
    'nav-about':    'About',
    'nav-skills':   'Skills',
    'nav-projects': 'Projects',
    'nav-certs':    'Certificates',
    'nav-contact':  'Contact',
    'greeting':     '// hi, I\'m',
    'hero-desc':    'Software Development Engineering student at Universidad Católica de El Salvador. Passionate about building robust APIs, secure systems, and clean backend solutions.',
    'hero-btn1':    'View projects',
    'hero-btn2':    'Contact',
    'hero-btn-cv':  'Download CV',
    'about-title':  'About me',
    'about-p1':     'I\'m a <strong>Software Development Engineering</strong> student at Universidad Católica de El Salvador, focused on backend. I care about building clean APIs, secure systems, and solutions that deliver real value.',
    'about-p2':     'I have hands-on experience with <strong>PHP, C# (.NET) and Java (Spring Boot)</strong> for backend, and with <strong>HTML, CSS, JavaScript, Vue.js and Bootstrap</strong> on the frontend — which lets me understand the full project end to end.',
    'about-p3':     'I\'m always learning something new. Currently deepening my knowledge in software architecture, web security and development best practices.',
    'label-location': '📍 Location',
    'label-uni':      '🎓 University',
    'label-langs':    '🌐 Languages',
    'label-avail':    '💼 Availability',
    'val-location': 'El Salvador',
    'val-uni':      'UNICAES · Software Development Engineering (2024 – present)',
    'val-langs':    'Spanish (native) · English B2',
    'val-avail':    'Internship / remote work',
    'skills-title':   'Skills',
    'skill-cat-langs': 'Languages',
    'skill-cat-fw':   'Frameworks &amp; Libraries',
    'skill-cat-db':   'Databases',
    'skill-cat-tools': 'Tools &amp; Other',
    'projects-title':   'Projects',
    'proj-renta-title': 'Renta SV — Rental Platform',
    'proj-renta-desc':  'Web system for property rental management and search in El Salvador. Features admin panel with full CRUD, user authentication and advanced search filters.',
    'proj-banban-title': 'Ban Ban — Digital Bakery',
    'proj-banban-desc':  'Complete website for a local bakery. Visual product catalog, responsive design with Bootstrap 5, image gallery and social media integration.',
    'proj-rest-title': 'Digital Restaurant',
    'proj-rest-desc':  'Web platform for a restaurant with digital menu, order system and admin panel for product and order management.',
    'proj-xo-title': 'XO Game — Tic Tac Toe',
    'proj-xo-desc':  'Tic tac toe game with pure JavaScript logic. Auto-detects winner, handles draws and game restart. Clean responsive UI.',
    'proj-eventsphere-title': 'EventSphere — Events Platform',
    'proj-eventsphere-desc':  'Full-stack web platform for event management with ticket purchasing, QR code generation, in-event chat, review system and admin panel. Deployed on Railway with PostgreSQL.',
    'soft-title':         'Soft Skills',
    'soft-certs-label':  '// related certificates',
    'soft-communication': 'Effective communication',
    'soft-teamwork':     'Teamwork',
    'soft-learning':     'Continuous learning',
    'soft-problem':      'Problem solving',
    'soft-adapt':        'Adaptability',
    'soft-critical':     'Critical thinking',
    'soft-time':         'Time management',
    'soft-proactive':    'Proactivity',
    'certs-title':        'Certificates',
    'view-cert':          'View certificate →',
    'cert-english-level': 'Level B2 · Upper Intermediate',
    'contact-title':    'Contact',
    'contact-subtitle': 'Have an opportunity or project in mind? Let\'s talk.',
    'footer-text':      'Designed and developed by <strong>Kathya Pérez</strong> · 2026',
  }
};

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
const roles = ['Backend Developer', 'API Designer', 'Software Engineer', 'Full-Stack Dev', 'IT Security Learner'];
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

