const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index, direction) {
    slides.forEach((s, i) => {
      s.classList.remove('active', 'prev');
      if (i === index) s.classList.add('active');
      else if (i === current && direction === 'next') s.classList.add('prev');
    });
    current = index;
  }

  function nextSlide() {
    const next = (current + 1) % slides.length;
    showSlide(next, 'next');
  }

  function prevSlide() {
    const prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev, 'prev');
  }

  document.getElementById('next').addEventListener('click', nextSlide);
  document.getElementById('prev').addEventListener('click', prevSlide);

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });



document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.innerHTML = '📋';
  btn.addEventListener('click', () => {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code);
    btn.classList.add('copied');
    btn.innerHTML = '✅';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '📋';
    }, 1200);
  });
});
