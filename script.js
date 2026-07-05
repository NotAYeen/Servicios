tailwind.config={theme:{extend:{colors:{white:'rgb(var(--color-white) / <alpha-value>)',accent:'var(--accent)',accentSoft:'var(--accent-soft)',gold:'var(--gold)',goldSoft:'var(--gold-soft)',coral:'var(--coral)',coralSoft:'var(--coral-soft)',fg:'var(--fg)',muted:'var(--muted)'},fontSize:{xs:['0.875rem','1.25rem'],sm:['1rem','1.5rem'],base:['1.125rem','1.75rem'],lg:['1.25rem','1.75rem'],xl:['1.375rem','2rem']}}}}

// Auto Dark Mode
(function(){
  const h=new Date().getHours();
  if(h>=20||h<6)document.body.classList.add('dark-mode');
  setTimeout(updateDarkModeIcon, 100); // Wait for DOM
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
