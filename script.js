/* ==========================================================================
   Art Direction / Brutalist Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   Custom Cursor Logic
   -------------------------------------------------------------------------- */
function initCursor() {
  const dot = document.getElementById('cursorDot');
  const outline = document.getElementById('cursorOutline');
  
  if (!dot || !outline) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;

  // Track mouse movement
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Instantly move the dot
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Smooth follow for the outline using requestAnimationFrame
  const animateOutline = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;
    
    outlineX += distX * 0.15; // easing factor
    outlineY += distY * 0.15;
    
    outline.style.left = `${outlineX}px`;
    outline.style.top = `${outlineY}px`;
    
    requestAnimationFrame(animateOutline);
  };
  animateOutline();

  // Hover states for links and interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .hover-target');
  
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    target.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

/* --------------------------------------------------------------------------
   Scroll Animations (Fade-In Up)
   -------------------------------------------------------------------------- */
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
