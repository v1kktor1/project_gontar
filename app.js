document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const opened = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', opened);
    });
  }
});
