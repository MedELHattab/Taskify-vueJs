const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.classList.remove('fa-moon');
    darkModeToggle.classList.add('fa-sun'); // Replace "fa-sun" with the appropriate Font Awesome sun icon.
  } else {
    darkModeToggle.classList.remove('fa-sun');
    darkModeToggle.classList.add('fa-moon');
  }
});