// Auto Theme Enforcement (Default Light)
(function(){
  document.body.classList.remove('emergency-mode');
  setTimeout(updateDarkModeIcon, 100);
})();

function toggleDarkMode() {
  document.body.classList.toggle('emergency-mode');
  updateDarkModeIcon();
}

function updateDarkModeIcon() {
  const isDark = document.body.classList.contains('emergency-mode');
  document.querySelectorAll('.dark-mode-icon').forEach(icon => {
    if (isDark) {
      icon.classList.remove('fa-triangle-exclamation');
      icon.classList.add('fa-power-off');
      icon.style.color = 'var(--accent-color)';
    } else {
      icon.classList.remove('fa-power-off');
      icon.classList.add('fa-triangle-exclamation');
      icon.style.color = '';
    }
  });
}

const servicesData = {
  web: {
    title: 'DISEÑO DE PÁGINAS WEB', cat: '[ DESARROLLO DE SOFTWARE ]', icon: 'fa-globe',
    desc: 'Diseñamos páginas web modernas, atractivas y ultra rápidas para darle presencia profesional a tu negocio en internet.',
    bullets: [
      { t: 'Diseño que vende', d: 'Páginas claras que guían a tus clientes directamente a comprar o contactarte.' },
      { t: 'Aparece en Google', d: 'Optimizamos tu sitio para que sea fácil de encontrar cuando busquen tus servicios.' },
      { t: 'Se adapta a todo', d: 'Tu página se verá perfecta tanto en celulares como en computadoras.' }
    ],
    tags: ['WEB', 'UI/UX', 'SEO']
  },
  app: {
    title: 'APPS MÓVILES A MEDIDA', cat: '[ DESARROLLO DE SOFTWARE ]', icon: 'fa-mobile-screen',
    desc: 'Desarrollamos aplicaciones móviles personalizadas para llevar el control, organización y ventas al celular de tus clientes.',
    bullets: [
      { t: 'Digitaliza procesos', d: 'Pasa del papel y lápiz a herramientas automáticas en tu teléfono.' },
      { t: 'Atención 24/7', d: 'Tus clientes pueden ver servicios o agendar citas en cualquier momento desde la App.' },
      { t: 'Fidelización', d: 'Mantén a tus clientes conectados a tu negocio con un solo toque.' }
    ],
    tags: ['ANDROID', 'IOS', 'FLUTTER', 'REACT NATIVE']
  },
  sys: {
    title: 'SISTEMAS INTELIGENTES', cat: '[ DESARROLLO DE SOFTWARE ]', icon: 'fa-gears',
    desc: 'Si tu personal pierde horas haciendo trabajo manual y repetitivo, necesitas un sistema inteligente que lo haga por ti.',
    bullets: [
      { t: 'Incansables', d: 'Programas de software automatizado que trabajan 24/7 sin distracciones ni errores.' },
      { t: 'Procesos súper rápidos', d: 'Lo que a un humano le toma horas hacer, el programa lo termina en segundos.' },
      { t: 'Organización total', d: 'Deja de perder facturas y correos, el sistema captura y ordena toda la información.' }
    ],
    tags: ['SOFTWARE A MEDIDA', 'AUTOMATIZACIÓN', 'SCRIPTS']
  },
  pc: {
    title: 'MANTENIMIENTO DE PC', cat: '[ INFRAESTRUCTURA IT ]', icon: 'fa-desktop',
    desc: 'Diagnóstico, reparación y actualización de computadoras lentas o que no encienden para que vuelvan a funcionar como nuevas.',
    bullets: [
      { t: 'Diagnóstico y Reparación', d: 'Arreglo de computadoras lentas o que no encienden para que funcionen como nuevas.' },
      { t: 'Upgrades', d: 'Instalación de SSDs o memoria RAM para darle más años de vida útil a tu equipo.' },
      { t: 'Formateo e Instalación', d: 'Instalación limpia de Windows y todos los programas básicos o paquetería.' }
    ],
    tags: ['HARDWARE', 'WINDOWS OS', 'ENSAMBLAJE']
  },
  antivirus: {
    title: 'VACUNA ANTIVIRUS', cat: '[ INFRAESTRUCTURA IT ]', icon: 'fa-shield-virus',
    desc: 'Limpieza profunda de virus y programas espía que ponen en riesgo tu información y vuelven lenta tu máquina.',
    bullets: [
      { t: 'Desinfección Total', d: 'Limpieza profunda de virus, malware y programas espía.' },
      { t: 'Recuperación Forense', d: 'Rescate de archivos ocultos, encriptados o borrados en memorias USB o discos duros.' },
      { t: 'Prevención', d: 'Instalación de protección definitiva y firewalls para navegar con tranquilidad.' }
    ],
    tags: ['SEGURIDAD INFORMÁTICA', 'SOFTWARE ANTIVIRUS', 'RECUPERACIÓN DE DATOS']
  },
  wifi: {
    title: 'REDES WI-FI Y CONECTIVIDAD', cat: '[ INFRAESTRUCTURA IT ]', icon: 'fa-wifi',
    desc: 'Mejora de señal de internet y diseño de redes cableadas para oficinas y hogares.',
    bullets: [
      { t: 'Optimización de Señal', d: 'Repetidores y Access Points para que el Wi-Fi llegue a todas las habitaciones sin cortes.' },
      { t: 'Redes Locales (LAN)', d: 'Diseño e instalación de redes cableadas seguras para computadoras e impresoras.' }
    ],
    tags: ['REDES IP', 'ROUTERS', 'CABLEADO ESTRUCTURADO']
  },
  acc: {
    title: 'CONTROL DE ACCESOS', cat: '[ SEGURIDAD Y CONTROL ]', icon: 'fa-fingerprint',
    desc: 'Instalación de sistemas biométricos para restringir el acceso y llevar el registro de personal.',
    bullets: [
      { t: 'Sistemas Biométricos', d: 'Torniquetes y cerraduras electrónicas con huella, rostro, PIN o tarjeta.' },
      { t: 'Gestión de Personal', d: 'Registro exacto y automático de asistencia (entradas/salidas) de tus empleados.' }
    ],
    tags: ['TORNIQUETES', 'BIOMETRÍA', 'CONTROLADORES LÓGICOS']
  },
  cam: {
    title: 'CÁMARAS DE SEGURIDAD', cat: '[ SEGURIDAD Y CONTROL ]', icon: 'fa-video',
    desc: 'Instalación de cámaras de videovigilancia de alta definición con monitoreo remoto en vivo.',
    bullets: [
      { t: 'Monitoreo Móvil', d: 'Ve las cámaras en vivo desde tu celular en cualquier lugar del mundo.' },
      { t: 'Visión Nocturna', d: 'Grabación clara incluso en oscuridad total en resolución HD/4K.' }
    ],
    tags: ['CCTV', 'SEGURIDAD ELECTRÓNICA', 'NVR/DVR']
  },
  db: {
    title: 'BASES DE DATOS SEGURAS', cat: '[ SEGURIDAD Y CONTROL ]', icon: 'fa-database',
    desc: 'Bases de datos protegidas y respaldos automáticos para no perder información vital.',
    bullets: [
      { t: 'Respaldos Automáticos', d: 'Copias de seguridad diarias en la nube de tus archivos importantes.' },
      { t: 'Blindaje de Datos', d: 'Protección contra secuestros de información (Ransomware).' }
    ],
    tags: ['CLOUD STORAGE', 'SQL / NOSQL', 'CIBERSEGURIDAD']
  }
};

function openServiceModal(key) {
  const data = servicesData[key];
  if (!data) return;
  
  const m = document.getElementById('serviceModal');
  const o = document.getElementById('serviceModalOverlay');
  
  document.getElementById('smTitle').textContent = data.title;
  document.getElementById('smCat').textContent = data.cat;
  document.getElementById('smIcon').className = 'fa-solid ' + data.icon;
  document.getElementById('smDesc').textContent = data.desc;
  
  const list = document.getElementById('smList');
  list.innerHTML = '';
  data.bullets.forEach(b => {
    const item = document.createElement('div');
    item.className = 'flex items-start gap-3 p-4 bg-[var(--bg-primary)] border border-[var(--border-color)]';
    item.innerHTML = `<div class="mt-1 text-[var(--accent-color)]"><i class="fa-solid fa-square-check"></i></div><div><div class="font-bold text-sm mb-1">${b.t}</div><div class="text-muted text-xs leading-relaxed">${b.d}</div></div>`;
    list.appendChild(item);
  });
  
  const tags = document.getElementById('smTags');
  tags.innerHTML = '';
  data.tags.forEach(t => {
    const tag = document.createElement('span');
    tag.className = 'test-tag';
    tag.textContent = t;
    tags.appendChild(tag);
  });
  
  o.classList.add('active');
  m.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
  m.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const m = document.getElementById('serviceModal');
  const o = document.getElementById('serviceModalOverlay');
  if (!m) return;
  m.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
  m.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
  if (o) o.classList.remove('active');
  document.body.style.overflow = '';
}

/* Mobile Menu */
function toggleMobile() {
  const m = document.getElementById('mobileMenu');
  const o = document.getElementById('mobileOverlay');
  const h = document.getElementById('navHamburger');
  m.classList.toggle('active');
  o.classList.toggle('active');
  if (h) h.classList.toggle('active');
}

function closeMobile() {
  const m = document.getElementById('mobileMenu');
  const o = document.getElementById('mobileOverlay');
  const h = document.getElementById('navHamburger');
  if (m) m.classList.remove('active');
  if (o) o.classList.remove('active');
  if (h) h.classList.remove('active');
}

/* ==========================================================================
   Static Interactivity (Removed Parallax/Tilt for Clinical feel)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Add a mechanical "click" feel to test-cards
  const cards = document.querySelectorAll('.test-card');
  
  cards.forEach(card => {
    card.addEventListener('mousedown', () => {
      card.style.transform = 'translateY(2px)';
    });
    card.addEventListener('mouseup', () => {
      card.style.transform = 'translateY(-2px)'; // Matches hover state
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});
