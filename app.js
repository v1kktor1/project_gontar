document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const cars = document.querySelectorAll('.car-card');
  cars.forEach(car => {
    car.addEventListener('click', () => {
      const title = car.querySelector('h3').textContent.trim();
      switch (title) {
        case 'FERRARI SF-23':
          window.open('ferrari.html', '_blank');
          break;
        case 'MERCEDES W14':
          window.open('mercedes.html', '_blank');
          break;
        case 'RED BULL RB19':
          window.open('redbull.html', '_blank');
          break;
        default:
          alert('Сторінка в розробці 🚧');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const teams = document.querySelectorAll('.team-card');
  teams.forEach(team => {
    team.addEventListener('click', () => {
      const title = team.querySelector('h3').textContent.trim().toUpperCase();

      if (title.includes('FERRARI')) {
        window.open('scuderia_ferrari.html', '_blank');
      } else if (title.includes('MERCEDES')) {
        window.open('amg_petronas.html', '_blank');
      } else if (title.includes('RED BULL')) {
        window.open('redbull_racing.html', '_blank');
      } else {
        alert('Сторінка в розробці 🚧');
      }
    });
  });
});