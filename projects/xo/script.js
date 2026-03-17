let turno = "X";
let tablero = ["", "", "", "", "", "", "", "", ""];
let jugando = true;

let puntosX = 0;
let puntosO = 0;

let jugadorX = "";
let jugadorO = "";

let colorX = "#11131a";
let colorO = "#1f1724";

function empezarJuego() {
  const nombre1 = document.getElementById("jugador1").value.trim() || "Jugador 1";
  const ficha = document.getElementById("fichaJugador1").value;
  const color1 = document.getElementById("colorJugador1").value;
  const nombre2 = document.getElementById("jugador2").value.trim() || "Jugador 2";
  const color2 = document.getElementById("colorJugador2").value;

  const colores = {
    negro: "#11131a",
    rojo: "#3b0d14",
    verde: "#0f2c24",
    azul: "#10263f"
  };

  const coloresOscuros = {
    negro: "#09090b",
    rojo: "#24070d",
    verde: "#0a1c17",
    azul: "#0a1728"
  };

  if (ficha === "X") {
    jugadorX = nombre1;
    jugadorO = nombre2;
    colorX = colores[color1];
    colorO = color1 === color2 ? coloresOscuros[color2] : colores[color2];
  } else {
    jugadorX = nombre2;
    jugadorO = nombre1;
    colorO = colores[color1];
    colorX = color1 === color2 ? coloresOscuros[color2] : colores[color2];
  }

  document.getElementById("nombreX").textContent = "☠️ " + jugadorX;
  document.getElementById("nombreO").textContent = "💀 " + jugadorO;

  document.getElementById("inicio").style.display = "none";
  document.getElementById("juego").style.display = "block";

  actualizarColorFondo(turno);
  crearTablero();
  actualizarMensaje();
}

function crearTablero() {
  const contenedor = document.getElementById("tablero");
  contenedor.innerHTML = "";
  tablero = ["", "", "", "", "", "", "", "", ""];

  for (let i = 0; i < 9; i++) {
    const celda = document.createElement("div");
    celda.className = "celda";
    celda.setAttribute("data-index", i);
    celda.onclick = function () {
      const indice = Number(this.getAttribute("data-index"));
      clickCelda(indice, this);
    };
    contenedor.appendChild(celda);
  }
}

function clickCelda(i, celda) {
  if (!jugando || tablero[i] !== "") {
    return;
  }

  tablero[i] = turno;
  celda.textContent = turno === "X" ? "☠️" : "💀";

  if (verificarGanador()) {
    mostrarGanador(turno);
    jugando = false;
    return;
  }

  if (tablero.indexOf("") === -1) {
    document.getElementById("mensaje").textContent = "Empate. Nadie escapó del destino.";
    sacudirPantalla();
    return;
  }

  turno = turno === "X" ? "O" : "X";
  actualizarColorFondo(turno);
  actualizarMensaje();
}

function verificarGanador() {
  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return combos.some(([a, b, c]) => tablero[a] !== "" && tablero[a] === tablero[b] && tablero[a] === tablero[c]);
}

function mostrarGanador(fichaGanadora) {
  let nombreGanador = "";
  let nombrePerdedor = "";

  if (fichaGanadora === "X") {
    nombreGanador = jugadorX;
    nombrePerdedor = jugadorO;
    puntosX += 1;
    document.body.style.backgroundColor = colorX;
  } else {
    nombreGanador = jugadorO;
    nombrePerdedor = jugadorX;
    puntosO += 1;
    document.body.style.backgroundColor = colorO;
  }

  document.getElementById("puntosX").textContent = puntosX;
  document.getElementById("puntosO").textContent = puntosO;
  document.getElementById("mensaje").innerHTML =
    `<strong>${nombreGanador}</strong> ganó la partida.<br><span>${nombrePerdedor}, será en la próxima.</span>`;
}

function actualizarMensaje() {
  const nombreTurno = turno === "X" ? jugadorX : jugadorO;
  const icono = turno === "X" ? "☠️" : "💀";
  document.getElementById("mensaje").textContent = `Turno de: ${icono} ${nombreTurno}`;
}

function actualizarColorFondo(turnoActual) {
  document.body.style.backgroundColor = turnoActual === "X" ? colorX : colorO;
}

function reiniciarJuego() {
  jugando = true;
  turno = "X";
  actualizarColorFondo(turno);
  crearTablero();
  actualizarMensaje();
}

function rendirse() {
  puntosX = 0;
  puntosO = 0;

  document.getElementById("puntosX").textContent = "0";
  document.getElementById("puntosO").textContent = "0";

  document.getElementById("juego").style.display = "none";
  document.getElementById("inicio").style.display = "block";
  document.body.style.backgroundColor = "#11131a";
}

function sacudirPantalla() {
  const body = document.body;
  let pos = 0;

  const intervalo = setInterval(() => {
    pos = pos === 0 ? 4 : 0;
    body.style.marginLeft = pos + "px";
  }, 50);

  setTimeout(() => {
    clearInterval(intervalo);
    body.style.marginLeft = "0px";
  }, 400);
}
// ===== TRANSLATIONS =====
export const translations = {
  es: {
    'nav-about': 'Sobre mí',
    'nav-skills': 'Habilidades',
    'nav-projects': 'Proyectos',
    'nav-timeline': 'Trayectoria',
    'nav-certs': 'Certificados',
    'nav-contact': 'Contacto',
    'greeting': '// hola, soy',
    'hero-desc': 'Desarrolladora junior enfocada en backend con Java/Spring Boot y C#/.NET. Construyo APIs seguras, sistemas de gestión y soluciones full stack con enfoque en calidad, escalabilidad y resultados.',
    'hero-pill-role': 'Objetivo: Backend Developer Junior',
    'hero-pill-stack': 'Stack: Java · Spring Boot · C# · .NET',
    'hero-pill-availability': 'Disponibilidad: Prácticas / remoto',
    'hero-btn1': 'Contacto',
    'hero-btn2': 'Ver proyectos clave',
    'hero-btn-cv': 'Descargar CV',
    'about-title': 'Sobre mí',
    'about-p1': 'Soy estudiante de <strong>Ingeniería en Desarrollo de Software</strong> en la Universidad Católica de El Salvador, con enfoque en el área backend. Me interesa construir APIs limpias, sistemas seguros y soluciones que den valor real.',
    'about-p2': 'Tengo experiencia práctica con <strong>PHP, C# (.NET) y Java (Spring Boot)</strong> para el desarrollo backend, y con <strong>HTML, CSS, JavaScript, Vue.js y Bootstrap</strong> en el frontend — lo que me permite entender el proyecto de extremo a extremo.',
    'about-p3': 'Siempre estoy aprendiendo algo nuevo. Actualmente profundizando en arquitectura de software, seguridad web y buenas prácticas de desarrollo.',
    'label-location': '📍 Ubicación',
    'label-uni': '🎓 Universidad',
    'label-langs': '🌐 Idiomas',
    'label-avail': '💼 Disponibilidad',
    'val-location': 'El Salvador',
    'val-uni': 'UNICAES · Ing. en Desarrollo de Software (2024 – presente)',
    'val-langs': 'Español (nativo) · Inglés B2',
    'val-avail': 'Prácticas profesionales / trabajo remoto',
    'skills-title': 'Habilidades',
    'skill-cat-langs': 'Lenguajes',
    'skill-cat-fw': 'Frameworks &amp; Librerías',
    'skill-cat-db': 'Bases de Datos',
    'skill-cat-tools': 'Herramientas &amp; Otros',
    'projects-title': 'Proyectos',
    'projects-subtitle': 'Filtra por tecnología para ver rápido lo que más te interesa.',
    'filter-all': 'Todos',
    'filter-java': 'Java',
    'filter-csharp': 'C#',
    'filter-frontend': 'Frontend',
    'filter-fullstack': 'Full Stack',
    'projects-empty': 'No hay proyectos para ese filtro por ahora.',
    'proj-renta-title': 'Renta SV — Plataforma de Alquileres',
    'proj-renta-desc': 'Sistema web para gestión y búsqueda de propiedades en alquiler en El Salvador. Incluye panel de administrador con CRUD completo, autenticación de usuarios y filtros avanzados de búsqueda.',
    'proj-banban-title': 'Ban Ban — Panadería Digital',
    'proj-banban-desc': 'Sitio web completo para una panadería local. Catálogo visual de productos, diseño responsive con Bootstrap 5, galería de imágenes e integración con redes sociales.',
    'proj-rest-title': 'Restaurante Digital',
    'proj-rest-desc': 'Plataforma web para restaurante con menú digital, sistema de órdenes y panel de administración para gestión de productos y pedidos.',
    'proj-reclut-title': 'Sistema de Reclutamiento',
    'proj-reclut-desc': 'Sistema de escritorio para gestión de procesos de reclutamiento. Registro de candidatos, evaluaciones por categoría (académica, personal, puesto), comparación de postulantes y exportación de resultados.',
    'proj-xo-title': 'XO Game — Tres en Raya',
    'proj-xo-desc': 'Juego de tres en raya con lógica implementada en JavaScript puro. Detección automática de ganador, empates y reinicio de partida. UI limpia y responsive.',
    'proj-seguros-title': 'Sistema de Gestión de Seguros',
    'proj-seguros-desc': 'Plataforma integral de gestión de seguros con cotizaciones automáticas, gestión de pólizas, procesamiento de reclamos y detección de fraudes. Dashboard ejecutivo con KPIs en tiempo real. Frontend completo sin backend requerido.',
    'proj-eventsphere-title': 'EventSphere — Plataforma de Eventos',
    'proj-eventsphere-desc': 'Plataforma web full-stack para gestión de eventos con compra de boletos, generación de códigos QR, chat por evento, sistema de reseñas y panel de administración. Desplegada en Railway con PostgreSQL.',
    'timeline-title': 'Trayectoria',
    'timeline-subtitle': 'Evolución de aprendizaje, proyectos y crecimiento técnico.',
    'timeline-1-title': 'Inicio de Ingeniería en Software',
    'timeline-1-desc': 'Comienzo formal en UNICAES, consolidando fundamentos de programación, arquitectura y bases de datos.',
    'timeline-2-title': 'Primeras certificaciones técnicas',
    'timeline-2-desc': 'Back-End, Front-End y soporte IT; fortaleciendo el perfil para proyectos reales y trabajo en equipo.',
    'timeline-3-title': 'Sistema de Reclutamiento en C#',
    'timeline-3-desc': 'Desarrollo de solución de escritorio con WinForms y SQL Server para evaluación y comparación de candidatos.',
    'timeline-4-title': 'EventSphere y portafolio técnico',
    'timeline-4-desc': 'Implementación de plataforma full stack con Spring Boot, despliegue en Railway y mejora continua del portafolio.',
    'soft-title': 'Habilidades Blandas',
    'soft-certs-label': '// certificados relacionados',
    'soft-communication': 'Comunicación efectiva',
    'soft-teamwork': 'Trabajo en equipo',
    'soft-learning': 'Aprendizaje continuo',
    'soft-problem': 'Resolución de problemas',
    'soft-adapt': 'Adaptabilidad',
    'soft-critical': 'Pensamiento crítico',
    'soft-time': 'Gestión del tiempo',
    'soft-proactive': 'Proactividad',
    'certs-title': 'Certificados',
    'view-cert': 'Ver certificado →',
    'cert-english-level': 'Nivel B2 · Upper Intermediate',
    'contact-title': 'Contacto',
    'contact-subtitle': '¿Tienes una oportunidad o proyecto en mente? Hablemos.',
    'footer-text': 'Diseñado y desarrollado por <strong>Kathya Pérez</strong> · 2026',
  },
  en: {
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-timeline': 'Timeline',
    'nav-certs': 'Certificates',
    'nav-contact': 'Contact',
    'greeting': '// hi, I\'m',
    'hero-desc': 'Junior developer focused on backend with Java/Spring Boot and C#/.NET. I build secure APIs, management systems, and full-stack solutions with an emphasis on quality, scalability, and outcomes.',
    'hero-pill-role': 'Target role: Junior Backend Developer',
    'hero-pill-stack': 'Stack: Java · Spring Boot · C# · .NET',
    'hero-pill-availability': 'Availability: Internship / remote',
    'hero-btn1': 'Contact',
    'hero-btn2': 'View key projects',
    'hero-btn-cv': 'Download CV',
    'about-title': 'About me',
    'about-p1': 'I\'m a <strong>Software Development Engineering</strong> student at Universidad Católica de El Salvador, focused on backend. I care about building clean APIs, secure systems, and solutions that deliver real value.',
    'about-p2': 'I have hands-on experience with <strong>PHP, C# (.NET) and Java (Spring Boot)</strong> for backend, and with <strong>HTML, CSS, JavaScript, Vue.js and Bootstrap</strong> on the frontend — which lets me understand the full project end to end.',
    'about-p3': 'I\'m always learning something new. Currently deepening my knowledge in software architecture, web security and development best practices.',
    'label-location': '📍 Location',
    'label-uni': '🎓 University',
    'label-langs': '🌐 Languages',
    'label-avail': '💼 Availability',
    'val-location': 'El Salvador',
    'val-uni': 'UNICAES · Software Development Engineering (2024 – present)',
    'val-langs': 'Spanish (native) · English B2',
    'val-avail': 'Internship / remote work',
    'skills-title': 'Skills',
    'skill-cat-langs': 'Languages',
    'skill-cat-fw': 'Frameworks &amp; Libraries',
    'skill-cat-db': 'Databases',
    'skill-cat-tools': 'Tools &amp; Other',
    'projects-title': 'Projects',
    'projects-subtitle': 'Filter by technology to quickly see what interests you most.',
    'filter-all': 'All',
    'filter-java': 'Java',
    'filter-csharp': 'C#',
    'filter-frontend': 'Frontend',
    'filter-fullstack': 'Full Stack',
    'projects-empty': 'No projects match this filter yet.',
    'proj-renta-title': 'Renta SV — Rental Platform',
    'proj-renta-desc': 'Web system for property rental management and search in El Salvador. Features admin panel with full CRUD, user authentication and advanced search filters.',
    'proj-banban-title': 'Ban Ban — Digital Bakery',
    'proj-banban-desc': 'Complete website for a local bakery. Visual product catalog, responsive design with Bootstrap 5, image gallery and social media integration.',
    'proj-rest-title': 'Digital Restaurant',
    'proj-rest-desc': 'Web platform for a restaurant with digital menu, order system and admin panel for product and order management.',
    'proj-reclut-title': 'Recruitment System',
    'proj-reclut-desc': 'Desktop system for managing recruitment processes. Candidate registration, category-based evaluations (academic, personal, position), applicant comparison and results export.',
    'proj-xo-title': 'XO Game — Tic Tac Toe',
    'proj-xo-desc': 'Tic tac toe game with pure JavaScript logic. Auto-detects winner, handles draws and game restart. Clean responsive UI.',
    'proj-seguros-title': 'Insurance Management System',
    'proj-seguros-desc': 'Comprehensive insurance management platform with automatic quotes, policy management, claims processing and fraud detection. Executive dashboard with real-time KPIs. Complete frontend without backend required.',
    'proj-eventsphere-title': 'EventSphere — Events Platform',
    'proj-eventsphere-desc': 'Full-stack web platform for event management with ticket purchasing, QR code generation, in-event chat, review system and admin panel. Deployed on Railway with PostgreSQL.',
    'timeline-title': 'Timeline',
    'timeline-subtitle': 'Learning journey, projects and technical growth over time.',
    'timeline-1-title': 'Started Software Engineering degree',
    'timeline-1-desc': 'Formal start at UNICAES, strengthening fundamentals in programming, architecture and databases.',
    'timeline-2-title': 'First technical certifications',
    'timeline-2-desc': 'Back-End, Front-End and IT support certifications, building a stronger profile for real projects and teamwork.',
    'timeline-3-title': 'C# Recruitment System',
    'timeline-3-desc': 'Built a desktop solution with WinForms and SQL Server for candidate evaluation and comparison.',
    'timeline-4-title': 'EventSphere and technical portfolio',
    'timeline-4-desc': 'Delivered a full-stack platform with Spring Boot, Railway deployment, and continuous portfolio improvement.',
    'soft-title': 'Soft Skills',
    'soft-certs-label': '// related certificates',
    'soft-communication': 'Effective communication',
    'soft-teamwork': 'Teamwork',
    'soft-learning': 'Continuous learning',
    'soft-problem': 'Problem solving',
    'soft-adapt': 'Adaptability',
    'soft-critical': 'Critical thinking',
    'soft-time': 'Time management',
    'soft-proactive': 'Proactivity',
    'certs-title': 'Certificates',
    'view-cert': 'View certificate →',
    'cert-english-level': 'Level B2 · Upper Intermediate',
    'contact-title': 'Contact',
    'contact-subtitle': 'Have an opportunity or project in mind? Let\'s talk.',
    'footer-text': 'Designed and developed by <strong>Kathya Pérez</strong> · 2026',
  }
};
