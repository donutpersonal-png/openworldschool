// Get language toggle button
const langToggle = document.getElementById('langToggle');

// Retrieve saved language or default to English
let currentLang = localStorage.getItem('lang') || 'en';

// Function to update text based on selected language
function updateLanguage(lang) {
  // Translate all elements with data-en and data-ru
  const translatable = document.querySelectorAll('[data-en][data-ru]');
  translatable.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// Initialize language on page load
updateLanguage(currentLang);

// Event listener for language toggle button
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  updateLanguage(currentLang);
  localStorage.setItem('lang', currentLang);
});
