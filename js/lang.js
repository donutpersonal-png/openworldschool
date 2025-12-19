const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'en';

function updateLanguage(lang) {
  // Translate menu
  const menuLinks = document.querySelectorAll('#navMenu a');
  menuLinks.forEach(link => {
    link.textContent = link.getAttribute(`data-${lang}`);
  });

  // Translate all other elements with data-en/data-ru
  const translatable = document.querySelectorAll('[data-en][data-ru]');
  translatable.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// Set initial language on page load
updateLanguage(currentLang);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  updateLanguage(currentLang);
  localStorage.setItem('lang', currentLang);
});
