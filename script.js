const SVG_MAP = {"globe":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z\"/></svg>","mobile-screen":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM128 440c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24zM304 64l-224 0 0 304 224 0 0-304z\"/></svg>","gears":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M415.9 210.5c12.2-3.3 25 2.5 30.5 13.8L465 261.9c10.3 1.4 20.4 4.2 29.9 8.1l35-23.3c10.5-7 24.4-5.6 33.3 3.3l19.2 19.2c8.9 8.9 10.3 22.9 3.3 33.3l-23.3 34.9c1.9 4.7 3.6 9.6 5 14.7 1.4 5.1 2.3 10.1 3 15.2l37.7 18.6c11.3 5.6 17.1 18.4 13.8 30.5l-7 26.2c-3.3 12.1-14.6 20.3-27.2 19.5l-42-2.7c-6.3 8.1-13.6 15.6-21.9 22l2.7 41.9c.8 12.6-7.4 24-19.5 27.2l-26.2 7c-12.2 3.3-24.9-2.5-30.5-13.8l-18.6-37.6c-10.3-1.4-20.4-4.2-29.9-8.1l-35 23.3c-10.5 7-24.4 5.6-33.3-3.3l-19.2-19.2c-8.9-8.9-10.3-22.8-3.3-33.3l23.3-35c-1.9-4.7-3.6-9.6-5-14.7s-2.3-10.2-3-15.2l-37.7-18.6c-11.3-5.6-17-18.4-13.8-30.5l7-26.2c3.3-12.1 14.6-20.3 27.2-19.5l41.9 2.7c6.3-8.1 13.6-15.6 21.9-22l-2.7-41.8c-.8-12.6 7.4-24 19.5-27.2l26.2-7zM448.4 340a44 44 0 1 0 .1 88 44 44 0 1 0 -.1-88zM224.9-45.5l26.2 7c12.1 3.3 20.3 14.7 19.5 27.2l-2.7 41.8c8.3 6.4 15.6 13.8 21.9 22l42-2.7c12.5-.8 23.9 7.4 27.2 19.5l7 26.2c3.2 12.1-2.5 24.9-13.8 30.5l-37.7 18.6c-.7 5.1-1.7 10.2-3 15.2s-3.1 10-5 14.7l23.3 35c7 10.5 5.6 24.4-3.3 33.3L307.3 262c-8.9 8.9-22.8 10.3-33.3 3.3L239 242c-9.5 3.9-19.6 6.7-29.9 8.1l-18.6 37.6c-5.6 11.3-18.4 17-30.5 13.8l-26.2-7c-12.2-3.3-20.3-14.7-19.5-27.2l2.7-41.9c-8.3-6.4-15.6-13.8-21.9-22l-42 2.7c-12.5 .8-23.9-7.4-27.2-19.5l-7-26.2c-3.2-12.1 2.5-24.9 13.8-30.5l37.7-18.6c.7-5.1 1.7-10.1 3-15.2 1.4-5.1 3-10 5-14.7L55.1 46.5c-7-10.5-5.6-24.4 3.3-33.3L77.6-6c8.9-8.9 22.8-10.3 33.3-3.3l35 23.3c9.5-3.9 19.6-6.7 29.9-8.1l18.6-37.6c5.6-11.3 18.3-17 30.5-13.8zM192.4 84a44 44 0 1 0 0 88 44 44 0 1 0 0-88z\"/></svg>","desktop":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l144 0-16 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-16-48 144 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L96 320c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32z\"/></svg>","shield-virus":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M253.4 2.9C249.2 1 244.7 0 240 0s-9.2 1-13.4 2.9L38.3 82.8c-22 9.3-38.4 31-38.3 57.2 .5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0 172.4-82.5 213.2-264 213.6-363.2 .1-26.2-16.3-47.9-38.3-57.2L253.4 2.9zM240 128c13.3 0 24 10.7 24 24 0 22.9 27.7 34.4 43.9 18.2 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-16.2 16.2-4.7 43.9 18.2 43.9 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.9 0-34.4 27.7-18.2 43.9 9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-16.2-16.2-43.9-4.7-43.9 18.2 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-22.9-27.7-34.4-43.9-18.2-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c16.2-16.2 4.7-43.9-18.2-43.9-13.3 0-24-10.7-24-24s10.7-24 24-24c22.9 0 34.4-27.7 18.2-43.9-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c16.2 16.2 43.9 4.7 43.9-18.2 0-13.3 10.7-24 24-24zM208 264a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm88 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z\"/></svg>","wifi":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M288 96c-90.9 0-173.2 36-233.7 94.6-12.7 12.3-33 12-45.2-.7s-12-33 .7-45.2C81.7 74.9 179.9 32 288 32S494.3 74.9 566.3 144.7c12.7 12.3 13 32.6 .7 45.2s-32.6 13-45.2 .7C461.2 132 378.9 96 288 96zM240 432a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM168 326.2c-11.7 13.3-31.9 14.5-45.2 2.8s-14.5-31.9-2.8-45.2C161 237.4 221.1 208 288 208s127 29.4 168 75.8c11.7 13.3 10.4 33.5-2.8 45.2s-33.5 10.4-45.2-2.8C378.6 292.9 335.8 272 288 272s-90.6 20.9-120 54.2z\"/></svg>","fingerprint":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M48 256c0-114.9 93.1-208 208-208 63.1 0 119.6 28.1 157.8 72.5 8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0 114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6-15.2 5-18.7 23.7-8.3 35.9 7.1 8.3 18.8 10.8 29.4 7.9 10.6-2.9 21.8-4.4 33.4-4.4 70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3-1.7 14.6 9.4 27.8 24.2 27.8 11.8 0 21.9-8.6 23.3-20.3 3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4-23.1 29.8-36.8 67.1-36.8 107.7l0 24.9c0 24.2-2.6 48.4-7.8 71.9-3.4 15.6 7.9 31.1 23.9 31.1 10.5 0 19.9-7 22.2-17.3 6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1 7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1-3.8 14.3 6.7 29 21.5 29 9.5 0 17.9-6.2 20.4-15.4 10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9-2.7 13.9 7.7 27.2 21.8 27.2 10.2 0 19-7 21-17 7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z\"/></svg>","video":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z\"/></svg>","database":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z\"/></svg>","circle":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z\"/></svg>","moon":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z\"/></svg>","sun":"<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z\"/></svg>"};
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
  document.getElementById('smIcon').innerHTML = SVG_MAP[data.icon.replace('fa-','')].replace('<svg ', '<svg style="width: 2.5rem; height: 2.5rem;" ');
  document.getElementById('smTitle').textContent = data.title;
  document.getElementById('smCat').textContent = data.cat;
  document.getElementById('smCat').style.color = data.color;
  document.getElementById('smDesc').textContent = data.desc;
  const list = document.getElementById('smList');
  list.innerHTML = data.bullets.map(b => 
    '<div class="bullet-item">' + SVG_MAP['circle'].replace('<svg ', '<svg style="width: 1em; height: 1em; color:'+data.color+';" ') + '<span><strong class="text-fg">'+b.t+'</strong> — '+b.d+'</span></div>'
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
