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
  // Плавний скрол (твій існуючий код)
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 🚗 Переходи при кліку на машини
  const cars = document.querySelectorAll('.car-card');
  cars.forEach(car => {
    car.addEventListener('click', () => {
      const title = car.querySelector('h3').textContent.trim();

      // Визначаємо, на яку сторінку переходити
      switch (title) {
        case 'FERRARI SF-23':
          window.open('carsweb/ferrari.html', '_blank');
          break;
        case 'MERCEDES W14':
          window.open('carsweb/mercedes.html', '_blank');
          break;
        case 'RED BULL RB19':
          window.open('carsweb/redbull.html', '_blank');
          break;
        default:
          alert('Сторінка в розробці 🚧');
      }
    });
  });
});