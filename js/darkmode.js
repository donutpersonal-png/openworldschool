const darkToggle = document.getElementById('darkModeToggle');

// Apply stored preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('manual-dark');
}

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('manual-dark');
  if (document.body.classList.contains('manual-dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});











