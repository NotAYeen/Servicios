document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initScrollAnimations();
  initParallax();
  initBlobs();
});
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
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });
  const animateOutline = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;
    outlineX += distX * 0.15;
    outlineY += distY * 0.15;
    outline.style.left = `${outlineX}px`;
    outline.style.top = `${outlineY}px`;
    requestAnimationFrame(animateOutline);
  };
  animateOutline();
  const hoverTargets = document.querySelectorAll('a, button, .hover-target');
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    target.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
  const projectFigures = document.querySelectorAll('.project-figure');
  projectFigures.forEach(fig => {
    fig.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-project');
    });
    fig.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-project');
    });
  });
}
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  elements.forEach(el => observer.observe(el));
}
const taskiiBrain = {
  start: {msg: "¡Hola! Soy Taskii, el asistente virtual de ANTON. ¿En qué área buscas soluciones hoy?", options: [{label: "🖥️ Soporte Técnico", next: "soporte"}, {label: "🌐 Páginas Web o Apps", next: "web"}, {label: "🔒 Seguridad y Control", next: "seguridad"}]},
  soporte: {msg: "Perfecto, ¿cuál es el origen de la falla?", options: [{label: "Físico (No enciende, ruido, lenta)", next: "soporte_fisico"}, {label: "Programas (Virus, Windows, Office)", next: "soporte_programas"}, {label: "Redes (Wi-Fi, Cableado)", next: "soporte_redes"}]},
  soporte_fisico: {msg: "¿Qué tipo de equipo necesitas reparar?", options: [{label: "PC de Escritorio", next: "contact_hardware_pc"}, {label: "Laptop", next: "contact_hardware_lap"}]},
  soporte_programas: {msg: "¿Qué necesitas relacionado con los programas?", options: [{label: "Instalar Programas / Windows", next: "contact_software_inst"}, {label: "Limpieza y Antivirus", next: "contact_software_clean"}]},
  soporte_redes: {msg: "¿Dónde necesitas mejorar la conexión?", options: [{label: "Casa (Falla de señal en hogar)", next: "contact_red_casa"}, {label: "Oficina/Negocio (Múltiples equipos)", next: "contact_red_oficina"}]},
  web: {msg: "¡Genial! ¿Qué tipo de proyecto de software necesitas?", options: [{label: "Proyecto Nuevo (Desde cero)", next: "web_nuevo"}, {label: "Renovar / Arreglar uno existente", next: "contact_web_fix"}, {label: "App Móvil (Android/iOS)", next: "contact_app"}]},
  web_nuevo: {msg: "¿Qué tipo de proyecto nuevo tienes en mente?", options: [{label: "Página Informativa (Portafolio, Servicios)", next: "contact_web_info"}, {label: "Tienda Online (E-commerce)", next: "contact_web_store"}, {label: "Sistema a Medida (Administración/Inventario)", next: "contact_web_sys"}]},
  seguridad: {msg: "¿Qué tipo de solución de seguridad necesitas?", options: [{label: "Cámaras de Vigilancia", next: "seg_cam"}, {label: "Control de Accesos (Huella/Torniquetes)", next: "contact_acc"}, {label: "Bases de Datos Seguras", next: "contact_db"}]},
  seg_cam: {msg: "¿Cuántas cámaras necesitas?", options: [{label: "De 1 a 4 cámaras (Kit Básico)", next: "contact_cam_small"}, {label: "5 o más cámaras (Proyecto Avanzado)", next: "contact_cam_large"}]},
  contact_hardware_pc: {msg: "Por favor, describe brevemente qué le sucede a la PC de escritorio...", input: true, subject: "Soporte PC Escritorio"},
  contact_hardware_lap: {msg: "¿Me podrías detallar la falla de tu Laptop y si sabes el modelo?", input: true, subject: "Soporte Laptop"},
  contact_software_inst: {msg: "¿Qué programas específicos o versión de Windows necesitas que instalemos?", input: true, subject: "Instalacion Software"},
  contact_software_clean: {msg: "¿Notas que se abren ventanas solas o solo va muy lenta?", input: true, subject: "Limpieza Virus"},
  contact_red_casa: {msg: "¿En qué áreas de tu casa no llega bien la señal?", input: true, subject: "Red Casa"},
  contact_red_oficina: {msg: "¿Cuántos equipos aproximados se conectan en tu oficina?", input: true, subject: "Red Oficina"},
  contact_web_info: {msg: "¿De qué trata tu negocio o emprendimiento?", input: true, subject: "Web Informativa"},
  contact_web_store: {msg: "¿Qué tipo de productos vendes?", input: true, subject: "Tienda Online"},
  contact_web_sys: {msg: "¿Qué proceso manual quieres reemplazar?", input: true, subject: "Sistema A Medida"},
  contact_web_fix: {msg: "¿Qué es lo que más te gustaría cambiar o mejorar de tu proyecto actual?", input: true, subject: "Renovacion Web"},
  contact_app: {msg: "¿Para qué servirá principalmente la app?", input: true, subject: "App Movil"},
  contact_cam_small: {msg: "¿Es para interior o exterior?", input: true, subject: "Camaras Basico"},
  contact_cam_large: {msg: "¿Dónde se ubican las instalaciones?", input: true, subject: "Camaras Avanzado"},
  contact_acc: {msg: "¿Quieres abrir con huella, tarjeta o clave?", input: true, subject: "Control Accesos"},
  contact_db: {msg: "¿Qué tipo de información necesitas almacenar?", input: true, subject: "Bases de Datos"}
};
let chatState = 'start', chatPath = [], chatOpen = false, chatInited = false;
let chatMessages, chatOptions, chatInputArea, chatInput, chatPanel, chatToggle, chatToggleIcon;
document.addEventListener('DOMContentLoaded', () => {
  chatMessages = document.getElementById('chatMessages');
  chatOptions = document.getElementById('chatOptions');
  chatInputArea = document.getElementById('chatInputArea');
  chatInput = document.getElementById('chatInput');
  chatPanel = document.getElementById('chatPanel');
  chatToggle = document.getElementById('chatToggle');
  chatToggleIcon = document.getElementById('chatToggleIcon');
});
function toggleChat() {
  chatOpen = !chatOpen;
  chatPanel.classList.toggle('open', chatOpen);
  if (chatToggleIcon) {
    chatToggleIcon.innerHTML = chatOpen 
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-chatbot"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" /><path d="M9.5 9h.01" /><path d="M14.5 9h.01" /><path d="M9.5 13a3.5 3.5 0 0 0 5 0" /></svg>';
  }
  if (chatOpen && !chatInited) {
    chatInited = true;
    setTimeout(() => navigateChat('start'), 250);
  }
}
function resetChat() {
  chatState = 'start';
  chatPath = [];
  chatMessages.innerHTML = '';
  chatOptions.innerHTML = '';
  chatInputArea.classList.remove('show');
  chatInput.value = '';
  navigateChat('start');
}
function navigateChat(nodeId) {
  chatState = nodeId;
  const node = taskiiBrain[nodeId];
  if (!node) return;
  chatPath.push(nodeId);
  chatOptions.innerHTML = '';
  chatInputArea.classList.remove('show');
  const typingEl = document.createElement('div');
  typingEl.className = 'typing';
  typingEl.innerHTML = '<span></span><span></span><span></span>';
  chatMessages.appendChild(typingEl);
  scrollChat();
  setTimeout(() => {
    typingEl.remove();
    addBotMsg(node.msg);
    if (node.input) {
      setTimeout(() => {
        addBotMsg("⚠️ IMPORTANTE: Recuerda dejar tu correo o número de WhatsApp en tu mensaje para poder comunicarme de vuelta contigo.");
        setTimeout(() => {
          chatInputArea.classList.add('show');
          chatInput.focus();
          scrollChat();
        }, 250);
      }, 500);
    } else if (node.options) {
      setTimeout(() => {
        const wrap = document.createElement('div');
        node.options.forEach((opt, i) => {
          const btn = document.createElement('button');
          btn.className = 'opt-btn hover-target';
          btn.textContent = opt.label;
          btn.style.opacity = '0';
          btn.style.transform = 'translateY(5px)';
          btn.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
          btn.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
          btn.onclick = () => {
            addUserMsg(opt.label);
            wrap.remove();
            setTimeout(() => navigateChat(opt.next), 300);
          };
          wrap.appendChild(btn);
          setTimeout(() => {
            btn.style.transition = 'all .25s ease';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
          }, 120 + i * 55);
        });
        chatOptions.appendChild(wrap);
        scrollChat();
      }, 250);
    }
  }, 650 + Math.min(node.msg.length * 10, 450));
}
function addBotMsg(t) {
  const e = document.createElement('div');
  e.className = 'msg-bot';
  e.textContent = t;
  chatMessages.appendChild(e);
  scrollChat();
}
function addUserMsg(t) {
  const e = document.createElement('div');
  e.className = 'msg-user';
  e.textContent = t;
  chatMessages.appendChild(e);
  scrollChat();
}
function scrollChat() {
  setTimeout(() => { chatMessages.scrollTop = chatMessages.scrollHeight; }, 30);
}
async function sendInput() {
  const text = chatInput.value.trim();
  if (!text) return;
  addUserMsg(text);
  chatInput.value = '';
  chatInputArea.classList.remove('show');
  const node = taskiiBrain[chatState];
  const subject = node ? node.subject : 'Consulta General';
  const typingEl = document.createElement('div');
  typingEl.className = 'typing';
  typingEl.innerHTML = '<span></span><span></span><span></span>';
  chatMessages.appendChild(typingEl);
  scrollChat();
  try {
    const response = await fetch("https://formspree.io/f/mojoagyg", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _subject: subject,
        Ruta_de_Dialogo: chatPath.join(" -> "),
        Mensaje: text,
        Origen: "Asistente Virtual Taskii (Portafolio Brutalista)"
      })
    });
    typingEl.remove();
    if (response.ok) {
      addBotMsg('¡Datos transmitidos con éxito! Anton ha recibido tu consulta directamente en su bandeja ("' + subject + '") y se comunicará pronto.');
      showToast('Consulta enviada: ' + subject);
    } else {
      throw new Error("Error en Formspree");
    }
  } catch (error) {
    typingEl.remove();
    addBotMsg('Hubo un error de conexión al enviar tus datos. Por favor, intenta de nuevo más tarde o contacta directamente a Anton.');
    showToast('Error al enviar consulta');
  }
  setTimeout(() => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn hover-target';
    btn.textContent = 'Iniciar nueva consulta';
    btn.style.opacity = '0';
    btn.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    btn.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    btn.onclick = () => {
      btn.remove();
      chatState = 'start';
      chatPath = [];
      navigateChat('start');
    };
    chatOptions.appendChild(btn);
    setTimeout(() => {
      btn.style.transition = 'all .25s ease';
      btn.style.opacity = '1';
    }, 30);
    scrollChat();
  }, 1000);
}
function showToast(msg) {
  const c = document.getElementById('toastContainer');
  if (!c) return;
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>' + msg + '</span>';
  c.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 4000);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;
    e.preventDefault();
    const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200; 
    let startTime = null;
    function easeInOutQuart(x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    }
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuart(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  });
});
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
        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    });
  }
  window.addEventListener('scroll', updateParallax);
  updateParallax();
}
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
    fig.style.transition = `border-radius ${duration}ms linear, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)`;
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
          fig.style.transition = `border-radius ${duration}ms linear, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)`;
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
