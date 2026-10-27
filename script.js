const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initScrollAnimations();
  initParallax();
  initBlobs();
  initSmartNav();
  initMobileMenu();
  if (!prefersReducedMotion.matches) {
    initAsciiWaveBackground();
    initGlitchEaters();
    initTypographicVortex();
  }
  initCommandPalette();
});

// ================================================================
// SMART NAV
// ================================================================
function initSmartNav() {
  const nav = document.getElementById('mainNav') || document.querySelector('nav');
  if (!nav) return;
  let lastScrollY = window.pageYOffset;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.pageYOffset;
        if (currentScrollY <= 25) {
          nav.classList.remove('nav-hidden');
          nav.classList.remove('nav-scrolled');
        } else {
          nav.classList.add('nav-scrolled');
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.classList.add('nav-hidden');
          } else if (currentScrollY < lastScrollY) {
            nav.classList.remove('nav-hidden');
          }
        }
        lastScrollY = Math.max(0, currentScrollY);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ================================================================
// MOBILE MENU
// ================================================================
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  const nav = document.getElementById('mainNav') || document.querySelector('nav');
  if (!toggle || !navLinks) return;
  const closeMenu = () => {
    toggle.classList.remove('active');
    navLinks.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('nav-open');
    toggle.focus();
  };
  const openMenu = () => {
    if (nav && nav.classList.contains('nav-hidden')) nav.classList.remove('nav-hidden');
    toggle.classList.add('active');
    navLinks.classList.add('open');
    if (overlay) overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    document.body.classList.add('nav-open');
    const firstLink = navLinks.querySelector('a');
    if (firstLink) firstLink.focus();
  };
  toggle.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) closeMenu(); else openMenu();
  });
  if (overlay) overlay.addEventListener('click', closeMenu);
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('open')) closeMenu();
  });
}

// ================================================================
// CURSOR PERSONALIZADO
// ================================================================
function initCursor() {
  const dot = document.getElementById('cursorDot');
  const outline = document.getElementById('cursorOutline');
  if (!dot || !outline) return;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });
  const animateOutline = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;
    outlineX += distX * 0.15;
    outlineY += distY * 0.15;
    outline.style.left = outlineX + 'px';
    outline.style.top = outlineY + 'px';
    requestAnimationFrame(animateOutline);
  };
  animateOutline();

  document.querySelectorAll('a, button, .hover-target').forEach(el => {
    el.addEventListener('mouseenter', () => outline.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => outline.classList.remove('cursor-hover'));
    el.addEventListener('mousedown', () => {
      outline.style.transform = 'translate(-50%, -50%) scale(0.7)';
      outline.style.backgroundColor = 'var(--surface-dark-alt)';
    });
    el.addEventListener('mouseup', () => {
      outline.style.transform = 'translate(-50%, -50%) scale(1)';
      outline.style.backgroundColor = 'transparent';
    });
  });

  document.querySelectorAll('.project-card, .bento-card-media, .hero-image-wrapper').forEach(el => {
    el.addEventListener('mouseenter', () => {
      outline.classList.add('cursor-project');
      dot.classList.add('cursor-project');
    });
    el.addEventListener('mouseleave', () => {
      outline.classList.remove('cursor-project');
      dot.classList.remove('cursor-project');
    });
  });
}

// ================================================================
// SCROLL ANIMATIONS
// ================================================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

// ================================================================
// PARALLAX
// ================================================================
function initParallax() {
  const parallaxElems = document.querySelectorAll('[data-speed]');
  function updateParallax() {
    const scrollTop = window.pageYOffset;
    parallaxElems.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
      const parent = el.parentElement;
      const parentRect = parent.getBoundingClientRect();
      const elementTop = parentRect.top + scrollTop;
      const windowHeight = window.innerHeight;
      if (parentRect.top < windowHeight && parentRect.bottom > 0) {
        const relativeScroll = scrollTop - elementTop + (windowHeight / 2);
        const yPos = relativeScroll * speed;
        el.style.transform = 'translate3d(0, ' + yPos + 'px, 0)';
      }
    });
  }
  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
}

// ================================================================
// BLOBS
// ================================================================
function initBlobs() {
  const figures = document.querySelectorAll('.project-figure, .hero-image-wrapper');
  const blobShapes = [
    "60% 40% 30% 70% / 60% 30% 70% 40%",
    "30% 60% 70% 40% / 50% 60% 30% 60%",
    "70% 30% 50% 50% / 30% 30% 70% 70%",
    "40% 60% 70% 30% / 40% 50% 60% 50%",
    "50% 50% 40% 60% / 70% 40% 60% 30%"
  ];
  figures.forEach(fig => {
    const duration = 2500 + Math.random() * 1500;
    let currentIndex = Math.floor(Math.random() * blobShapes.length);
    let isHovered = false;
    fig.style.transition = 'border-radius ' + duration + 'ms linear, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    fig.addEventListener('mouseenter', () => {
      isHovered = true;
      fig.style.transition = 'border-radius 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    });
    fig.addEventListener('mouseleave', () => {
      isHovered = false;
      fig.style.transition = 'border-radius 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
      updateBlob();
      setTimeout(() => {
        if (!isHovered && !fig.matches(':hover')) {
          fig.style.transition = 'border-radius ' + duration + 'ms linear, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        }
      }, 600);
    });
    const updateBlob = () => {
      if (!isHovered && !fig.matches(':hover')) {
        currentIndex = (currentIndex + 1) % blobShapes.length;
        fig.style.borderRadius = blobShapes[currentIndex];
      }
    };
    setInterval(updateBlob, duration);
    setTimeout(updateBlob, Math.random() * 500);
  });
}

// ================================================================
// FONDO ASCII — MAR DE ONDAS REACIONANDO AL MOUSE
// ================================================================
function initAsciiWaveBackground() {
  const canvas = document.getElementById('asciiBg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const chars = ['/', ':', '[', ']', '0', '1', 'W', 'A', 'S', 'M', 'S', 'Y', 'S', '-', '_', '.'];
  const cols = 140;
  const rows = 80;
  const charSize = 16;
  let width, height;
  let columns = [];
  let mouse = { x: -1000, y: -1000 };
  let time = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        columns.push({
          x: i * charSize,
          y: j * charSize,
          baseY: j * charSize,
          char: chars[Math.floor(Math.random() * chars.length)],
          speed: 0.5 + Math.random() * 1.5,
          offset: Math.random() * Math.PI * 2
        });
      }
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  resize();

  function draw() {
    time += 0.02;
    const bg = document.querySelector('.section-dark, .section-light') ? getComputedStyle(document.body).backgroundColor : '#0A0B0E';
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    ctx.font = charSize + 'px JetBrains Mono, monospace';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    for (let i = 0; i < columns.length; i++) {
      const c = columns[i];
      const dx = mouse.x - c.x;
      const dy = mouse.y - c.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Onda desde el mouse: senóide que se propaga
      const wave = Math.sin(dist * 0.015 - time * 2 + c.offset) * 20;
      const proximity = Math.max(0, 1 - dist / 300);
      const waveAmp = wave * (0.3 + proximity * 0.7);

      // Brillo según proximidad al mouse
      const alpha = 0.15 + proximity * 0.45;
      const y = c.baseY + waveAmp;

      if (y >= 0 && y <= height) {
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#A1A1AA';
        ctx.fillText(c.char, c.x, y);
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ================================================================
// SEPARADORES GLITCH ASCII EATER
// Píxeles ASCII que se "comen" la sección anterior al hacer scroll
// ================================================================
function initGlitchEaters() {
  const separators = document.querySelectorAll('.glitch-separator');
  if (!separators.length) return;

  const glitchChars = ['[E]', '[F]', '[I]', '[T]', 'C:6NTTTS:', '71XNGXN', '6A·T·S7N', '//', '::', '[]', '01'];

  separators.forEach(sep => {
    const ctx = sep.getContext('2d');
    let width, height;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };
    let scrollProgress = 0;

    function resize() {
      const rect = sep.getBoundingClientRect();
      width = canvasWidth = rect.width;
      height = canvasHeight = rect.height;
      sep.width = width;
      sep.height = height;
      initParticles();
    }

    let canvasWidth, canvasHeight;

    function initParticles() {
      particles = [];
      const count = Math.floor((width * height) / 6000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          char: glitchChars[Math.floor(Math.random() * glitchChars.length)],
          size: 9 + Math.random() * 10,
          opacity: 0.3 + Math.random() * 0.4,
          targetX: Math.random() * width,
          targetY: Math.random() * height
        });
      }
    }

    window.addEventListener('resize', resize);
    sep.addEventListener('mousemove', (e) => {
      const rect = sep.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    sep.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

    window.addEventListener('scroll', () => {
      const rect = sep.getBoundingClientRect();
      const pageTop = window.pageYOffset;
      const sepTop = rect.top + pageTop;
      const sepBottom = sepTop + rect.height;
      const viewBottom = pageTop + window.innerHeight;
      const viewTop = pageTop;

      // Progreso de scroll a través del separador (0 a 1)
      if (viewBottom > sepTop && viewTop < sepBottom) {
        scrollProgress = Math.min(Math.max((viewBottom - sepTop) / (rect.height + window.innerHeight), 0), 1);
      } else if (viewTop >= sepBottom) {
        scrollProgress = 1;
      } else if (viewBottom <= sepTop) {
        scrollProgress = 0;
      }
    }, { passive: true });

    resize();

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.font = 'bold 11px JetBrains Mono, monospace';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      // Los partículas se mueven hacia la derecha (comiendo la sección anterior)
      const scrollSpeed = 0.5 + scrollProgress * 1.5;

      particles.forEach(p => {
        // Movimiento hacia la derecha con el scroll
        p.x += p.vx + scrollSpeed;

        // Ruido sintético local al pasar el mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          const force = (1 - dist / 90) * 3;
          p.x += (Math.random() - 0.5) * force;
          p.y += (Math.random() - 0.5) * force;
        }

        // Rebote en bordes
        if (p.x > width) p.x = -50;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mayor densidad y corrupción según progreso de scroll
        const corruption = scrollProgress * 0.8;
        const alpha = p.opacity * (0.4 + corruption * 0.6);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#71717A';
        ctx.fillText(p.char, p.x, p.y);

        // Corrupción aleatoria de caracteres
        if (Math.random() > 0.985 - corruption * 0.1) {
          p.char = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
      });

      requestAnimationFrame(draw);
    }
    draw();
  });
}

// ================================================================
// VÓRTICE TIPÉRICO ROTACIONAL
// ================================================================
function initTypographicVortex() {
  const vortex = document.querySelector('.typographic-vortex');
  if (!vortex) return;
  const svg = vortex.querySelector('.vortex-svg');
  let rotation = 0;
  function animate() {
    rotation += 0.25;
    svg.style.transform = 'rotate(' + rotation + 'deg)';
    requestAnimationFrame(animate);
  }
  animate();
}

// ================================================================
// COMMAND PALETTE (⌘K)
// ================================================================
function initCommandPalette() {
  const palette = document.getElementById('commandPalette');
  const input = document.getElementById('commandInput');
  const list = document.getElementById('commandList');
  const items = list.querySelectorAll('.command-item');
  let isOpen = false;
  let lastFocusedElement = null;

  function trapFocus(e) {
    if (e.key !== "Tab") return;
    const focusables = palette.querySelectorAll("button, [href], input, [tabindex]:not([tabindex=\"-1\"])");
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function openPalette() {
    lastFocusedElement = document.activeElement;
    palette.hidden = false;
    input.focus();
    isOpen = true;
    document.body.style.overflow = 'hidden';
    const focusables = palette.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
    if (focusables.length) focusables[0].focus();
    palette.addEventListener("keydown", trapFocus);
  }

  function closePalette() {
    palette.hidden = true;
    input.value = '';
    filterCommands('');
    isOpen = false;
    document.body.style.overflow = '';
    palette.removeEventListener("keydown", trapFocus);
    if (lastFocusedElement) lastFocusedElement.focus();
    lastFocusedElement = null;
  }

  function filterCommands(query) {
    const q = query.toLowerCase();
    items.forEach(item => {
      const text = item.querySelector('.command-text').textContent.toLowerCase();
      item.style.display = text.includes(q) ? 'flex' : 'none';
    });
  }

  function executeCommand(item) {
    const action = item.dataset.action;
    if (action === 'scroll') {
      const target = document.querySelector(item.dataset.target);
      if (target) {
        const nav = document.getElementById('mainNav');
        const offset = nav ? 40 : 0;
        const pos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    } else if (action === 'copy') {
      navigator.clipboard.writeText(item.dataset.value).then(() => {
        showToast('Correo copiado al portapapeles');
      });
    } else if (action === 'external') {
      window.open(item.dataset.url, '_blank');
    }
    closePalette();
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (isOpen) closePalette(); else openPalette();
    }
    if (e.key === 'Escape' && isOpen) closePalette();
  });

  input.addEventListener('input', (e) => filterCommands(e.target.value));

  items.forEach(item => {
    item.addEventListener('click', () => executeCommand(item));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') executeCommand(item);
    });
  });

  palette.querySelector('.command-palette-backdrop').addEventListener('click', closePalette);
}

// ================================================================
// TOAST NOTIFICATIONS
// ================================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ================================================================
// CHAT TASKII
// ================================================================
function toggleChat() {
  const panel = document.getElementById('chatPanel');
  const toggle = document.getElementById('chatToggle');
  if (!panel) return;
  const hidden = panel.hidden;
  panel.hidden = !hidden;
  toggle.setAttribute('aria-expanded', String(!hidden));
  if (!hidden) {
    initChatBot();
    const firstFocusable = panel.querySelector("button, input, [tabindex]:not([tabindex=\"-1\"])");
    if (firstFocusable) firstFocusable.focus();
  } else {
    toggle.focus();
  }
}

function initChatBot() {
  const messages = document.getElementById('chatMessages');
  const options = document.getElementById('chatOptions');
  if (!messages || messages.children.length > 0) return;

  const welcome = document.createElement('div');
  welcome.className = 'chat-message bot';
  welcome.textContent = 'Hola, soy Taskii. ¿En qué puedo ayudarte hoy?';
  messages.appendChild(welcome);

  const optProjects = document.createElement('button');
  optProjects.className = 'chat-option';
  optProjects.textContent = 'Ver proyectos';
  optProjects.onclick = () => { sendOption('Ver proyectos'); };

  const optContact = document.createElement('button');
  optContact.className = 'chat-option';
  optContact.textContent = 'Contacto';
  optContact.onclick = () => { sendOption('Contacto'); };

  const optCV = document.createElement('button');
  optCV.className = 'chat-option';
  optCV.textContent = 'Descargar CV';
  optCV.onclick = () => { sendOption('Descargar CV'); };

  options.appendChild(optProjects);
  options.appendChild(optContact);
  options.appendChild(optCV);
}

function sendInput() {
  const input = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');
  const text = input.value.trim();
  if (!text) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user';
  userMsg.textContent = text;
  messages.appendChild(userMsg);
  input.value = '';

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-message bot';
    botMsg.textContent = 'He recibido tu mensaje: "' + text + '". ¿Hay algo más en lo que pueda asistirte?';
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 600);

  messages.scrollTop = messages.scrollHeight;
}

function sendOption(option) {
  const input = document.getElementById('chatInput');
  input.value = option;
  sendInput();
}

function resetChat() {
  const messages = document.getElementById('chatMessages');
  const options = document.getElementById('chatOptions');
  if (messages) messages.innerHTML = '';
  if (options) options.innerHTML = '';
  initChatBot();
}

// ================================================================


// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;
    e.preventDefault();
    const nav = document.getElementById('mainNav');
    const navOffset = nav ? 40 : 0;
    const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.max(Math.abs(distance) * 0.4, 550), 900);
    let startTime = null;
    function easeInOutCubic(x) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
  });
});



