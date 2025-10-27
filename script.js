// Botão flutuante para girar o brilho da imagem
const btn = document.getElementById('rotateBtn');
const glow = document.querySelector('.glow');
let angle = 0;

btn.addEventListener('click', () => {
  angle += 120;
  glow.style.transform = `translateY(-20px) rotate(${angle}deg)`;
  btn.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], {
    duration: 700,
  });
});

// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^=\"#\"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href');
    if (id === '#') return;
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
