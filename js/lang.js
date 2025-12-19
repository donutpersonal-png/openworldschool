// Set current year in footer
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Language toggle
let currentLang = 'en';
const toggleBtn = document.getElementById('langToggle');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    toggleBtn.textContent = currentLang === 'en' ? 'RU' : 'EN';
    
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.dataset[currentLang];
    });
  });
}
