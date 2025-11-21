document.addEventListener('DOMContentLoaded', () => {
  /* ===== ПЛАВНЫЙ СКРОЛЛ ПО МЕНЮ ===== */
  const scrollLinks = document.querySelectorAll('.scroll-link');

  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ===== КАРТОЧКИ БОЛИДОВ (МОДЕЛИ) ===== */
  const carCards = document.querySelectorAll('.car-card');

  carCards.forEach(card => {
    card.addEventListener('click', () => {
      const page = card.dataset.page;
      if (page) {
        window.open(page, '_blank');
      } else {
        alert('Сторінка в розробці 🚧');
      }
    });
  });

  /* ===== КАРТОЧКИ КОМАНД ===== */
  const teamCards = document.querySelectorAll('.team-card');

  teamCards.forEach(card => {
    card.addEventListener('click', () => {
      const page = card.dataset.page;
      if (page) {
        window.open(page, '_blank');
      } else {
        alert('Сторінка в розробці 🚧');
      }
    });
  });

  /* ===== SCROLL REVEAL АНИМАЦИЯ ===== */
  const revealElements = document.querySelectorAll(
    '.page-section, .car-card, .team-card, .tech-card'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => observer.observe(el));

  /* ===== ACTIVE NAV (подсветка текущего раздела) ===== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  const setActiveNav = () => {
    const scrollPos = window.scrollY;
    let currentId = null;

    sections.forEach(section => {
      const offsetTop = section.offsetTop;
      if (scrollPos >= offsetTop - 200) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      const hrefId = link.getAttribute('href').substring(1);
      link.classList.toggle('active', hrefId === currentId);
    });
  };

  /* ===== КНОПКА "НАВЕРХ" И АНИМАЦИЯ ЛОГО ПРИ СКРОЛЛЕ ===== */
  const toTopBtn = document.getElementById('toTop');
  const logoImg = document.querySelector('.logo-img');

  const onScroll = () => {
    // показать/спрятать кнопку "наверх"
    if (window.scrollY > 500) {
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }

    // лёгкий ресайз логотипа
    if (window.scrollY > 80) {
      logoImg.style.transform = 'scale(0.9)';
    } else {
      logoImg.style.transform = 'scale(1)';
    }

    // обновление active nav
    setActiveNav();
  };

  window.addEventListener('scroll', onScroll);

  if (toTopBtn) {
    toTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== ФОРМА ОБРАТНОЙ СВЯЗИ (простая имитация отправки) ===== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name') || 'гість';

      alert(`Дякуємо, ${name}! Ваше повідомлення надіслано (демо).`);
      contactForm.reset();
    });
  }

  // Первичная установка состояния active-nav при загрузке
  setActiveNav();
});
