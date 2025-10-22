document.getElementById('modo').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
});
sections.forEach(sec => observer.observe(sec));
