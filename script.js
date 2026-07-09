(function(){
  const h=new Date().getHours();
  if(h>=20||h<6)document.body.classList.add('dark-mode');
  setTimeout(updateDarkModeIcon, 100);
})();
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  updateDarkModeIcon();
}
function updateDarkModeIcon() {
  const isDark = document.body.classList.contains('dark-mode');
  document.querySelectorAll('.dark-mode-icon').forEach(icon => {
    if (isDark) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
}
const servicesData = {
  web: {
    title: 'Diseño de Páginas Web', cat: 'Desarrollo de Software', color: 'var(--accent)', bg: 'var(--accent-soft)', icon: 'fa-globe',
    desc: 'Diseñamos páginas web modernas, atractivas y ultra rápidas para darle presencia profesional a tu negocio en internet.',
    bullets: [
      { t: 'Diseño que vende', d: 'Páginas claras que guían a tus clientes directamente a comprar o contactarte.' },
      { t: 'Aparece en Google', d: 'Optimizamos tu sitio para que sea fácil de encontrar cuando busquen tus servicios.' },
      { t: 'Se adapta a todo', d: 'Tu página se verá perfecta tanto en celulares como en computadoras.' }
    ],
    tags: ['Web', 'UI/UX', 'SEO']
  },
  app: {
    title: 'Apps Móviles a Medida', cat: 'Desarrollo de Software', color: 'var(--accent)', bg: 'var(--accent-soft)', icon: 'fa-mobile-screen',
    desc: 'Desarrollamos aplicaciones móviles personalizadas para llevar el control, organización y ventas al celular de tus clientes.',
    bullets: [
      { t: 'Digitaliza procesos', d: 'Pasa del papel y lápiz a herramientas automáticas en tu teléfono.' },
      { t: 'Atención 24/7', d: 'Tus clientes pueden ver servicios o agendar citas en cualquier momento desde la App.' },
      { t: 'Fidelización', d: 'Mantén a tus clientes conectados a tu negocio con un solo toque.' }
    ],
    tags: ['Android', 'iOS', 'Flutter', 'React Native']
  },
  sys: {
    title: 'Sistemas Inteligentes', cat: 'Desarrollo de Software', color: 'var(--accent)', bg: 'var(--accent-soft)', icon: 'fa-gears',
    desc: 'Si tu personal pierde horas haciendo trabajo manual y repetitivo, necesitas un sistema inteligente que lo haga por ti.',
    bullets: [
      { t: 'Incansables', d: 'Programas de software automatizado que trabajan 24/7 sin distracciones ni errores.' },
      { t: 'Procesos súper rápidos', d: 'Lo que a un humano le toma horas hacer, el programa lo termina en segundos.' },
      { t: 'Organización total', d: 'Deja de perder facturas y correos, el sistema captura y ordena toda la información.' }
    ],
    tags: ['Software a Medida', 'Automatización', 'Scripts']
  },
  pc: {
    title: 'Mantenimiento de PC', cat: 'Soporte y Mantenimiento IT', color: 'var(--gold)', bg: 'var(--gold-soft)', icon: 'fa-desktop',
    desc: 'Diagnóstico, reparación y actualización de computadoras lentas o que no encienden para que vuelvan a funcionar como nuevas.',
    bullets: [
      { t: 'Diagnóstico y Reparación', d: 'Arreglo de computadoras lentas o que no encienden para que funcionen como nuevas.' },
      { t: 'Upgrades', d: 'Instalación de SSDs o memoria RAM para darle más años de vida útil a tu equipo.' },
      { t: 'Formateo e Instalación', d: 'Instalación limpia de Windows y todos los programas básicos o paquetería.' }
    ],
    tags: ['Hardware', 'Windows OS', 'Ensamblaje']
  },
  antivirus: {
    title: 'Vacuna Antivirus', cat: 'Soporte y Mantenimiento IT', color: 'var(--gold)', bg: 'var(--gold-soft)', icon: 'fa-shield-virus',
    desc: 'Limpieza profunda de virus y programas espía que ponen en riesgo tu información y vuelven lenta tu máquina.',
    bullets: [
      { t: 'Desinfección Total', d: 'Limpieza profunda de virus, malware y programas espía.' },
      { t: 'Recuperación Forense', d: 'Rescate de archivos ocultos, encriptados o borrados en memorias USB o discos duros.' },
      { t: 'Prevención', d: 'Instalación de protección definitiva y firewalls para navegar con tranquilidad.' }
    ],
    tags: ['Seguridad Informática', 'Software Antivirus', 'Recuperación de Datos']
  },
  wifi: {
    title: 'Redes Wi-Fi y Conectividad', cat: 'Soporte y Mantenimiento IT', color: 'var(--gold)', bg: 'var(--gold-soft)', icon: 'fa-wifi',
    desc: 'Mejora de señal de internet y diseño de redes cableadas para oficinas y hogares.',
    bullets: [
      { t: 'Optimización de Señal', d: 'Repetidores y Access Points para que el Wi-Fi llegue a todas las habitaciones sin cortes.' },
      { t: 'Redes Locales (LAN)', d: 'Diseño e instalación de redes cableadas seguras para computadoras e impresoras.' }
    ],
    tags: ['Redes IP', 'Routers', 'Cableado Estructurado']
  },
  acc: {
    title: 'Control de Accesos', cat: 'Seguridad y Control', color: 'var(--coral)', bg: 'var(--coral-soft)', icon: 'fa-fingerprint',
    desc: 'Instalación de sistemas biométricos para restringir el acceso y llevar el registro de personal.',
    bullets: [
      { t: 'Sistemas Biométricos', d: 'Torniquetes y cerraduras electrónicas con huella, rostro, PIN o tarjeta.' },
      { t: 'Gestión de Personal', d: 'Registro exacto y automático de asistencia (entradas/salidas) de tus empleados.' }
    ],
    tags: ['Torniquetes', 'Biometría', 'Controladores Lógicos']
  },
  cam: {
    title: 'Cámaras de Seguridad', cat: 'Seguridad y Control', color: 'var(--coral)', bg: 'var(--coral-soft)', icon: 'fa-video',
    desc: 'Instalación de cámaras de videovigilancia de alta definición con monitoreo remoto en vivo.',
    bullets: [
      { t: 'Instalación Profesional', d: 'Colocación estratégica de cámaras CCTV y cableado oculto.' },
      { t: 'Monitoreo Remoto', d: 'Configuración para que vigiles tu negocio o casa en vivo desde tu celular en cualquier lugar.' }
    ],
    tags: ['CCTV', 'Seguridad Electrónica', 'NVR/DVR']
  },
  db: {
    title: 'Bases de Datos Seguras', cat: 'Seguridad y Control', color: 'var(--coral)', bg: 'var(--coral-soft)', icon: 'fa-database',
    desc: 'Diseño de arquitectura de datos blindada para organizar tu información de forma incorruptible.',
    bullets: [
      { t: 'Arquitectura de Datos', d: 'Bases de datos blindadas para organizar inventario, ventas y datos de clientes.' },
      { t: 'Backups (Respaldos)', d: 'Sistemas de respaldo automático local y en la nube ante accidentes o fallas.' }
    ],
    tags: ['Cloud Storage', 'SQL / NoSQL', 'Ciberseguridad']
  }
};
const modal = document.getElementById('serviceModal');
const modalOverlay = document.getElementById('serviceModalOverlay');
function openServiceModal(id) {
  const data = servicesData[id];
  if(!data) return;
  document.getElementById('smIconWrap').style.backgroundColor = data.bg;
  document.getElementById('smIconWrap').style.color = data.color;
  document.getElementById('smIcon').className = 'fa-solid ' + data.icon;
  document.getElementById('smTitle').textContent = data.title;
  document.getElementById('smCat').textContent = data.cat;
  document.getElementById('smCat').style.color = data.color;
  document.getElementById('smDesc').textContent = data.desc;
  const list = document.getElementById('smList');
  list.innerHTML = data.bullets.map(b => 
    '<div class="bullet-item"><i class="fa-solid fa-circle" style="color:'+data.color+'"></i><span><strong class="text-fg">'+b.t+'</strong> — '+b.d+'</span></div>'
  ).join('');
  const tags = document.getElementById('smTags');
  tags.innerHTML = data.tags.map(t => 
    '<span class="tech-tag" style="background:'+data.bg+';color:'+data.color+'">'+t+'</span>'
  ).join('');
  modalOverlay.classList.add('open');
  modal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
  modal.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
  document.body.style.overflow = 'hidden';
}
function closeServiceModal() {
  modalOverlay.classList.remove('open');
  modal.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
  modal.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
  document.body.style.overflow = '';
}
const navbar=document.getElementById('navbar');
const navHamburger=document.getElementById('navHamburger');
const mobileMenu=document.getElementById('mobileMenu');
const mobileOverlay=document.getElementById('mobileOverlay');
let mobileOpen=false;
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });
function toggleMobile(){
  mobileOpen=!mobileOpen;
  mobileMenu.classList.toggle('open',mobileOpen);
  mobileOverlay.classList.toggle('open',mobileOpen);
  navHamburger.classList.toggle('active',mobileOpen);
  document.body.style.overflow=mobileOpen?'hidden':'';
}
function closeMobile(){
  mobileOpen=false;
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  navHamburger.classList.remove('active');
  document.body.style.overflow='';
}
(function(){
  const init = () => {
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    },{threshold:.08,rootMargin:'0px 0px -30px 0px'});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  };
  if (window.requestIdleCallback) requestIdleCallback(init);
  else setTimeout(init, 300);
})();
const taskiiBrain={
  start:{msg:"¡Hola! Soy, el asistente virtual de ANTON. ¿En qué área buscas soluciones hoy?",
    options:[{label:"🖥️ Soporte Técnico",next:"soporte"},{label:"🌐 Páginas Web o Apps",next:"web"},{label:"🔒 Seguridad y Control",next:"seguridad"}]},
  soporte:{msg:"Perfecto, ¿cuál es el origen de la falla?",
    options:[{label:"Físico (No enciende, ruido, lenta)",next:"soporte_fisico"},{label:"Programas (Virus, Windows, Office)",next:"soporte_programas"},{label:"Redes (Wi-Fi, Cableado)",next:"soporte_redes"}]},
  soporte_fisico:{msg:"¿Qué tipo de equipo necesitas reparar?",
    options:[{label:"PC de Escritorio",next:"contact_hardware_pc"},{label:"Laptop",next:"contact_hardware_lap"}]},
  soporte_programas:{msg:"¿Qué necesitas relacionado con los programas?",
    options:[{label:"Instalar Programas / Windows",next:"contact_software_inst"},{label:"Limpieza y Antivirus",next:"contact_software_clean"}]},
  soporte_redes:{msg:"¿Dónde necesitas mejorar la conexión?",
    options:[{label:"Casa (Falla de señal en hogar)",next:"contact_red_casa"},{label:"Oficina/Negocio (Múltiples equipos)",next:"contact_red_oficina"}]},
  web:{msg:"¡Genial! ¿Qué tipo de proyecto de software necesitas?",
    options:[{label:"Proyecto Nuevo (Desde cero)",next:"web_nuevo"},{label:"Renovar / Arreglar uno existente",next:"contact_web_fix"},{label:"App Móvil (Android/iOS)",next:"contact_app"}]},
  web_nuevo:{msg:"¿Qué tipo de proyecto nuevo tienes en mente?",
    options:[{label:"Página Informativa (Portafolio, Servicios)",next:"contact_web_info"},{label:"Tienda Online (E-commerce)",next:"contact_web_store"},{label:"Sistema a Medida (Administración/Inventario)",next:"contact_web_sys"}]},
  seguridad:{msg:"¿Qué tipo de solución de seguridad necesitas?",
    options:[{label:"Cámaras de Vigilancia",next:"seg_cam"},{label:"Control de Accesos (Huella/Torniquetes)",next:"contact_acc"},{label:"Bases de Datos Seguras",next:"contact_db"}]},
  seg_cam:{msg:"¿Cuántas cámaras necesitas?",
    options:[{label:"De 1 a 4 cámaras (Kit Básico)",next:"contact_cam_small"},{label:"5 o más cámaras (Proyecto Avanzado)",next:"contact_cam_large"}]},
  contact_hardware_pc:{msg:"Por favor, describe brevemente qué le sucede a la PC de escritorio...",input:true,subject:"Soporte PC Escritorio"},
  contact_hardware_lap:{msg:"¿Me podrías detallar la falla de tu Laptop y si sabes el modelo?",input:true,subject:"Soporte Laptop"},
  contact_software_inst:{msg:"¿Qué programas específicos o versión de Windows necesitas que instalemos?",input:true,subject:"Instalacion Software"},
  contact_software_clean:{msg:"¿Notas que se abren ventanas solas o solo va muy lenta?",input:true,subject:"Limpieza Virus"},
  contact_red_casa:{msg:"¿En qué áreas de tu casa no llega bien la señal?",input:true,subject:"Red Casa"},
  contact_red_oficina:{msg:"¿Cuántos equipos aproximados se conectan en tu oficina?",input:true,subject:"Red Oficina"},
  contact_web_info:{msg:"¿De qué trata tu negocio o emprendimiento?",input:true,subject:"Web Informativa"},
  contact_web_store:{msg:"¿Qué tipo de productos vendes?",input:true,subject:"Tienda Online"},
  contact_web_sys:{msg:"¿Qué proceso manual quieres reemplazar?",input:true,subject:"Sistema A Medida"},
  contact_web_fix:{msg:"¿Qué es lo que más te gustaría cambiar o mejorar de tu proyecto actual?",input:true,subject:"Renovacion Web"},
  contact_app:{msg:"¿Para qué servirá principalmente la app?",input:true,subject:"App Movil"},
  contact_cam_small:{msg:"¿Es para interior o exterior?",input:true,subject:"Camaras Basico"},
  contact_cam_large:{msg:"¿Dónde se ubican las instalaciones?",input:true,subject:"Camaras Avanzado"},
  contact_acc:{msg:"¿Quieres abrir con huella, tarjeta o clave?",input:true,subject:"Control Accesos"},
  contact_db:{msg:"¿Qué tipo de información necesitas almacenar?",input:true,subject:"Bases de Datos"}
};
let chatState='start',chatPath=[],chatOpen=false,chatInited=false;
const chatMessages=document.getElementById('chatMessages');
const chatOptions=document.getElementById('chatOptions');
const chatInputArea=document.getElementById('chatInputArea');
const chatInput=document.getElementById('chatInput');
const chatPanel=document.getElementById('chatPanel');
const chatToggle=document.getElementById('chatToggle');
const chatToggleIcon=document.getElementById('chatToggleIcon');
function toggleChat(){
  chatOpen=!chatOpen;
  chatPanel.classList.toggle('open',chatOpen);
  if(document.getElementById('chatToggleIconRobot')){
    document.getElementById('chatToggleIconRobot').classList.toggle('hidden', chatOpen);
    document.getElementById('chatToggleIconXmark').classList.toggle('hidden', !chatOpen);
  }
  if(chatOpen&&!chatInited){chatInited=true;setTimeout(()=>navigateChat('start'),250)}
  if(window.innerWidth <= 480){ document.body.style.overflow = chatOpen ? 'hidden' : ''; }
}
function openChat(){
  if(!chatOpen)toggleChat();
  if(!chatInited){chatInited=true;setTimeout(()=>navigateChat('start'),250)}
}
function resetChat(){
  chatState='start';chatPath=[];
  chatMessages.innerHTML='';chatOptions.innerHTML='';
  chatInputArea.classList.remove('show');chatInput.value='';
  navigateChat('start');
}
function navigateChat(nodeId){
  chatState=nodeId;
  const node=taskiiBrain[nodeId];
  if(!node)return;
  chatPath.push(nodeId);
  chatOptions.innerHTML='';
  chatInputArea.classList.remove('show');
  const typingEl=document.createElement('div');
  typingEl.className='typing';
  typingEl.innerHTML='<span></span><span></span><span></span>';
  chatMessages.appendChild(typingEl);
  scrollChat();
  setTimeout(()=>{
    typingEl.remove();
    addBotMsg(node.msg);
    if(node.input){
      setTimeout(()=>{
        addBotMsg("⚠️ IMPORTANTE: Recuerda dejar tu correo o número de WhatsApp en tu mensaje para poder comunicarme de vuelta contigo.");
        setTimeout(()=>{chatInputArea.classList.add('show');chatInput.focus()},250);
      }, 500);
    }else if(node.options){
      setTimeout(()=>{
        const wrap=document.createElement('div');
        node.options.forEach((opt,i)=>{
          const btn=document.createElement('button');
          btn.className='opt-btn';
          btn.textContent=opt.label;
          btn.style.opacity='0';btn.style.transform='translateY(5px)';
          btn.onclick=()=>{addUserMsg(opt.label);wrap.remove();setTimeout(()=>navigateChat(opt.next),300)};
          wrap.appendChild(btn);
          setTimeout(()=>{btn.style.transition='all .25s ease';btn.style.opacity='1';btn.style.transform='translateY(0)'},120+i*55);
        });
        chatOptions.appendChild(wrap);
        scrollChat();
      },250);
    }
  },650+Math.min(node.msg.length*10,450));
}
function addBotMsg(t){const e=document.createElement('div');e.className='msg-bot';e.textContent=t;chatMessages.appendChild(e);scrollChat()}
function addUserMsg(t){const e=document.createElement('div');e.className='msg-user';e.textContent=t;chatMessages.appendChild(e);scrollChat()}
function scrollChat(){setTimeout(()=>{chatMessages.scrollTop=chatMessages.scrollHeight},30)}
async function sendInput(){
  const text=chatInput.value.trim();
  if(!text)return;
  addUserMsg(text);
  chatInput.value='';
  chatInputArea.classList.remove('show');
  const node=taskiiBrain[chatState];
  const subject=node?node.subject:'Consulta General';
  const typingEl=document.createElement('div');
  typingEl.className='typing';
  typingEl.innerHTML='<span></span><span></span><span></span>';
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
            Origen: "Asistente Virtual Taskii (Nueva Propuesta)"
        })
    });
    typingEl.remove();
    if (response.ok) {
        addBotMsg('¡Datos transmitidos con éxito! Anton ha recibido tu consulta directamente en su bandeja ("'+subject+'") y se comunicará pronto.');
        showToast('Consulta enviada: '+subject);
    } else {
        throw new Error("Error en Formspree");
    }
  } catch (error) {
    typingEl.remove();
    addBotMsg('Hubo un error de conexión al enviar tus datos. Por favor, intenta de nuevo más tarde o contacta directamente a Anton.');
    showToast('Error al enviar consulta');
  }
  setTimeout(()=>{
    const btn=document.createElement('button');
    btn.className='opt-btn';btn.textContent='Iniciar nueva consulta';
    btn.style.opacity='0';
    btn.onclick=()=>{btn.remove();chatState='start';chatPath=[];navigateChat('start')};
    chatOptions.appendChild(btn);
    setTimeout(()=>{btn.style.transition='all .25s ease';btn.style.opacity='1'},30);
    scrollChat();
  },1000);
}
function showToast(msg){
  const c=document.getElementById('toastContainer');
  const t=document.createElement('div');t.className='toast';
  t.innerHTML='<svg class="" style="; width: 1em; height: 1em; vertical-align: -0.125em;" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill="currentColor" d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"/></svg><span>'+msg+'</span>';
  c.appendChild(t);
  requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),400)},4000);
}
