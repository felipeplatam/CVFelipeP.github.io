document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const modoToggle = document.getElementById('modo');

  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark');
    modoToggle.checked = true;
  }

  modoToggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    localStorage.setItem('darkMode', body.classList.contains('dark'));
  });

  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });
  sections.forEach(sec => observer.observe(sec));
});
