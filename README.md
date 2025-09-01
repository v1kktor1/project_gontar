1. Сформулируй цель и объём (5 минут)

Реши, что будет в проекте: landing + секция «фичи» + контакты? Или ещё блог?

Определи страницы (например: index.html, about.html, contact.html) и приоритеты (что должно быть готово в «половинном» варианте — например: header+hero+фичи+footer).

Определи палитру/шрифты/тон (например: Inter, 3 цвета: primary/secondary/accent).

2. Дизайн в Figma — быстрый рабочий макет (30–90 минут)

Создай файл, заведи фреймы для Desktop / Tablet / Mobile.

Сетка: включи layout grid (12 колонок для десктопа).

Стили: создай текстовые стили (H1/H2/Body), цветовую палитру (создать swatches).

Компоненты: header (с вариантами: десктоп/моб), кнопки (primary/secondary), карточка фичи — вынеси как компонент.

Прототип: добавь простой переход (клик по кнопке → якорь).

Экспорт: подготовь логотип/иконки в SVG, изображения — в 1x и 2x (для ретины). Называй файлы понятно: logo.svg, hero-1@2x.jpg.

Хэнд-офф: используй панель Inspect → копируй размеры, отступы, цвета (Figma даёт CSS-значения).

3. Структура репозитория (перед созданием репо продумай структуру)

Пример:

project-name/
├─ assets/
│  ├─ images/
│  └─ icons/
├─ index.html
├─ styles.css
├─ app.js
├─ README.md
├─ .gitignore
└─ LICENSE

4. Создать репозиторий на GitHub (через сайт или gh)

На GitHub → New repository → имя → Public/Private → добавить README? (можно оставить пустым).

Локально:

mkdir project-name
cd project-name
git init
# создаёшь файлы (index.html, styles.css, app.js, README.md, .gitignore)
git add .
git commit -m "chore: initial project scaffold"
git branch -M main
git remote add origin https://github.com/ТВОЙ_ЮЗЕР/PROJECT-NAME.git
git push -u origin main


(если используешь SSH — меняешь URL на git@github.com:...)

5. .gitignore (пример)
node_modules/
.DS_Store
dist/
.env

6. Минимальный, красивый и понятный старт-код (копируй в проект)

index.html

<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Project — Классный сайт</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <a class="logo" href="/">Лого</a>
      <button class="nav-toggle" aria-expanded="false" aria-label="Открыть меню">☰</button>
      <nav class="nav-menu" id="nav">
        <a href="#features">Фичи</a>
        <a href="#about">О нас</a>
        <a href="#contact">Контакты</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <main>
    <section class="hero">
      <div class="container hero-inner">
        <h1>Коротко. Красиво. Работает.</h1>
        <p class="lead">Простая и аккуратная посадочная страница — чуть кода, много шарма.</p>
        <a class="btn" href="#features">Посмотреть</a>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="features container">
      <!-- Карточки фич -->
      <article class="card">
        <h3>Быстро</h3>
        <p>Короткие загрузки и минимализм в интерфейсе.</p>
      </article>
      <article class="card">
        <h3>Просто</h3>
        <p>Понятная структура и комментарии в коде.</p>
      </article>
      <article class="card">
        <h3>Красиво</h3>
        <p>Современный минималистичный дизайн.</p>
      </article>
    </section>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <small>© <span id="year"></span> — Твой проект</small>
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>


styles.css

/* Базовые стили и переменные */
:root{
  --bg: #0f1724;
  --card: #0b1220;
  --muted: #9aa6bf;
  --accent: #6EE7B7;
  --primary: #7c3aed;
  --fw-bold: 700;
  --container: 1100px;
  --radius: 12px;
  --gap: 18px;
}

/* Сброс (очень коротко) */
*{box-sizing:border-box}
html,body{margin:0;padding:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;}
body{background:linear-gradient(180deg,#071028 0%, #0f1724 100%);color:#E6EEF3;line-height:1.5}

/* Контейнер */
.container{max-width:var(--container);margin:0 auto;padding:0 20px}

/* Header */
.site-header{padding:18px 0}
.site-header .container{display:flex;align-items:center;justify-content:space-between}
.logo{font-weight:var(--fw-bold);letter-spacing:0.4px;color:var(--accent);text-decoration:none}
.nav-menu{display:flex;gap:16px}
.nav-menu a{color:var(--muted);text-decoration:none;padding:8px;border-radius:8px}
.nav-menu a:hover{color:#fff;background:rgba(255,255,255,0.03)}

/* Mobile nav */
.nav-toggle{display:none;background:none;border:0;color:var(--muted);font-size:22px}

/* Hero */
.hero{padding:80px 0 60px}
.hero-inner{display:flex;flex-direction:column;gap:16px}
.hero h1{font-size:40px;margin:0;color:#fff}
.lead{color:var(--muted);max-width:700px}
.btn{display:inline-block;padding:12px 18px;border-radius:10px;background:linear-gradient(90deg,var(--primary),var(--accent));color:#021; text-decoration:none;font-weight:600}

/* Features */
.features{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:60px 0}
.card{background:rgba(255,255,255,0.03);padding:20px;border-radius:var(--radius);min-height:140px}

/* Footer */
.site-footer{padding:30px 0;color:var(--muted);border-top:1px solid rgba(255,255,255,0.03)}

/* Responsive */
@media (max-width:900px){
  .features{grid-template-columns:repeat(2,1fr)}
  .hero h1{font-size:32px}
}
@media (max-width:650px){
  .nav-menu{position:absolute;right:20px;top:68px;display:none;flex-direction:column;background:#081022;padding:12px;border-radius:10px}
  .nav-menu.open{display:flex}
  .nav-toggle{display:block}
  .features{grid-template-columns:1fr}
}


app.js

// Простая логика: mobile menu + вставка года
document.addEventListener('DOMContentLoaded', () => {
  // Вставляем текущий год в футер
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Переключатель мобильного меню
  const btn = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const opened = menu.classList.toggle('open'); // добавляет / убирает класс 'open'
      btn.setAttribute('aria-expanded', opened);
    });
  }
});

7. Комментарии в коде — правила

HTML: используем <!-- комментарий --> в нужных местах (например пояснить блок).

CSS: /* пояснение */ перед группой правил.

JS: // и /* */.
Пиши коротко и по делу: зачем этот блок/почему такой брейкпоинт/откуда берётся цвет.

8. Коммиты и ветвление (как профи, но проще)

Работай в ветках: feature/hero, feature/nav, fix/responsive.

Примеры сообщений:

feat: add hero section

fix: mobile menu toggle

style: tweak typography

chore: add README

Перед пушем git status → git add . → git commit -m "feat: ...".

Push: git push -u origin feature/hero → открой Pull Request в GitHub → смержь в main.

9. Deploy (самый простой: GitHub Pages)

На GitHub → Settings → Pages → Source → выбери main branch / root (или /docs), Save.

После этого сайт будет доступен по https://ТВОЙ_ЮЗЕР.github.io/PROJECT-NAME/.
(Если хочешь автоматизировать — настроим GH Actions, но для простого статика это не нужно.)

10. README и визуализация

README должен содержать:

Описание проекта (цель).

Как запустить локально: open index.html / live server / python -m http.server.

Скриншоты (сделай экспорт из Figma и положи в assets/images/screenshot.png).

Лицензия (MIT — ок для учебных проектов).

Пример run:

# Как запустить
Открой index.html в браузере или:
python -m http.server 8000
# Открой http://localhost:8000

11. Тесты, линт и качество (опционально)

HTML/CSS: валидируй через валидатор или расширение в VS Code.

JS: если много кода — добавь ESLint.

Добавь простую проверку accessibility (axe или Lighthouse).

12. Что дальше (фичи, которые можно добавить)

Анимации при скролле (IntersectionObserver).

Тёмная тема (CSS custom properties + toggle).

Форма обратной связи с валидацией.

Мини-CMS / headless (Netlify CMS / Firebase) — если захочешь динамику.#   p r o j e c t _ g o n t a r 
 
 