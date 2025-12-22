// darkmode.js

(function () {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.documentElement.classList.add('manual-dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('manual-dark');

    if (document.documentElement.classList.contains('manual-dark')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});








