const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'en';

function updateMenuLanguage(lang) {
  const links = document.querySelectorAll('#navMenu a');
  links.forEach(link => {
    link.textContent = link.getAttribute(`data-${lang}`);
  });
}

// Set initial language on page load
updateMenuLanguage(currentLang);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  updateMenuLanguage(currentLang);
  localStorage.setItem('lang', currentLang);
});
