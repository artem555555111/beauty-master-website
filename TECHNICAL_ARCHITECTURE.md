# Техническая архитектура сайта

## 1. Технологический стек

### 1.1 Frontend
- **HTML5**: Семантическая разметка, доступность
- **CSS3**: Flexbox, Grid, CSS Variables, анимации
- **JavaScript ES6+**: Модульная архитектура, современный синтаксис
- **Web APIs**: Intersection Observer, History API, Local Storage

### 1.2 Инструменты разработки
- **Сборщик**: Vite или Parcel (быстрая разработка)
- **Препроцессор CSS**: Sass/SCSS (переменные, миксины, вложенность)
- **Линтеры**: ESLint, Stylelint
- **Форматтеры**: Prettier
- **Git**: Версионирование кода

### 1.3 Оптимизация
- **Изображения**: WebP с fallback, lazy loading
- **CSS/JS**: Минификация, tree shaking
- **Шрифты**: Web fonts с display: swap
- **Кэширование**: Service Worker, HTTP headers

## 2. Структура проекта

```
питомей/
├── src/
│   ├── index.html                 # Главная страница
│   ├── pages/                     # HTML страницы
│   │   ├── portfolio.html
│   │   ├── services.html
│   │   ├── about.html
│   │   ├── courses.html
│   │   ├── blog.html
│   │   └── contacts.html
│   ├── styles/                    # CSS стили
│   │   ├── main.scss             # Основные стили
│   │   ├── components/           # Компоненты
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _navigation.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _portfolio.scss
│   │   │   ├── _services.scss
│   │   │   ├── _about.scss
│   │   │   ├── _courses.scss
│   │   │   ├── _blog.scss
│   │   │   └── _contacts.scss
│   │   ├── layouts/              # Макеты
│   │   │   ├── _grid.scss
│   │   │   └── _typography.scss
│   │   ├── utilities/            # Утилиты
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _animations.scss
│   │   │   └── _responsive.scss
│   │   └── main.css              # Скомпилированный CSS
│   ├── scripts/                  # JavaScript
│   │   ├── main.js              # Основной файл
│   │   ├── modules/             # Модули
│   │   │   ├── navigation.js
│   │   │   ├── gallery.js
│   │   │   ├── forms.js
│   │   │   ├── animations.js
│   │   │   └── utils.js
│   │   └── main.min.js          # Минифицированный JS
│   ├── images/                   # Изображения
│   │   ├── hero/                # Фото для главной
│   │   ├── portfolio/           # Работы
│   │   ├── about/               # Фото мастера
│   │   ├── icons/               # Иконки
│   │   └── blog/                # Фото для блога
│   ├── fonts/                   # Шрифты
│   └── assets/                  # Дополнительные файлы
├── dist/                         # Сборка для продакшена
├── node_modules/                 # Зависимости
├── package.json                  # Зависимости и скрипты
├── vite.config.js               # Конфигурация Vite
├── .gitignore                   # Игнорируемые файлы
├── README.md                    # Документация
└── TECHNICAL_SPEC.md            # Техническое задание
```

## 3. Архитектура CSS

### 3.1 Методология
- **BEM** (Block Element Modifier) для именования классов
- **ITCSS** (Inverted Triangle CSS) для организации стилей
- **CSS Custom Properties** для переменных
- **CSS Grid** и **Flexbox** для макетов

### 3.2 Структура CSS
```scss
// 1. Settings (переменные, настройки)
// 2. Tools (миксины, функции)
// 3. Generic (reset, normalize)
// 4. Elements (базовые HTML элементы)
// 5. Objects (макеты, grid системы)
// 6. Components (UI компоненты)
// 7. Utilities (утилитарные классы)
```

### 3.3 Переменные CSS
```scss
:root {
  // Цвета
  --color-primary: #FF6B9D;
  --color-secondary: #FFB5C2;
  --color-accent: #E8B4CB;
  --color-text: #2C2C2C;
  --color-background: #FFFFFF;
  
  // Типографика
  --font-primary: 'Playfair Display', serif;
  --font-secondary: 'Inter', sans-serif;
  
  // Размеры
  --container-max-width: 1200px;
  --section-padding: 80px;
  
  // Анимации
  --transition-fast: 0.2s ease;
  --transition-medium: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

## 4. Архитектура JavaScript

### 4.1 Модульная структура
- **ES6 Modules** для разделения кода
- **Event-driven architecture** для взаимодействия компонентов
- **Observer pattern** для обновления UI
- **Factory pattern** для создания компонентов

### 4.2 Основные модули
```javascript
// navigation.js - Навигация и меню
// gallery.js - Галерея портфолио
// forms.js - Обработка форм
// animations.js - Анимации и эффекты
// utils.js - Утилитарные функции
```

### 4.3 Пример модуля
```javascript
// modules/gallery.js
export class Gallery {
  constructor(container, options = {}) {
    this.container = container;
    this.options = { ...this.defaultOptions, ...options };
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.setupLightbox();
  }
  
  // ... остальные методы
}
```

## 5. Адаптивный дизайн

### 5.1 Breakpoints
```scss
// Мобильные устройства
$mobile: 320px;
$mobile-large: 480px;

// Планшеты
$tablet: 768px;
$tablet-large: 1024px;

// Десктоп
$desktop: 1200px;
$desktop-large: 1440px;
```

### 5.2 Mobile-first подход
- Начинаем с мобильной версии
- Добавляем стили для больших экранов
- Используем CSS Grid и Flexbox для адаптивности
- Touch-friendly интерфейс

### 5.3 Адаптивные изображения
```html
<picture>
  <source srcset="image-large.webp" media="(min-width: 1200px)">
  <source srcset="image-medium.webp" media="(min-width: 768px)">
  <img src="image-small.webp" alt="Описание">
</picture>
```

## 6. Производительность

### 6.1 Оптимизация изображений
- **WebP** формат с fallback на JPEG
- **Responsive images** с srcset
- **Lazy loading** для изображений ниже fold
- **Image optimization** (сжатие, правильные размеры)

### 6.2 Оптимизация CSS/JS
- **Critical CSS** для above-the-fold контента
- **Code splitting** для JavaScript
- **Tree shaking** для удаления неиспользуемого кода
- **Minification** для продакшена

### 6.3 Кэширование
- **Service Worker** для offline функциональности
- **HTTP caching** headers
- **Local Storage** для пользовательских настроек
- **Session Storage** для временных данных

## 7. SEO и доступность

### 7.1 Семантическая разметка
```html
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
<h1> - <h6> для иерархии заголовков
<nav> для навигации
<main> для основного контента
```

### 7.2 Мета-теги
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

### 7.3 Доступность
- **ARIA labels** для интерактивных элементов
- **Keyboard navigation** поддержка
- **Screen reader** совместимость
- **Color contrast** соответствие стандартам
- **Focus indicators** для навигации

## 8. Тестирование

### 8.1 Кроссбраузерность
- Chrome (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- Edge (последние 2 версии)

### 8.2 Устройства
- iOS Safari (iPhone, iPad)
- Android Chrome
- Планшеты (различные размеры)
- Десктопные браузеры

### 8.3 Инструменты тестирования
- **Lighthouse** для производительности
- **W3C Validator** для HTML
- **CSS Validator** для CSS
- **Browser DevTools** для отладки

## 9. Развертывание

### 9.1 Сборка
- **Vite** для быстрой разработки
- **Production build** с оптимизацией
- **Asset optimization** (изображения, шрифты)
- **Bundle analysis** для анализа размера

### 9.2 Хостинг
- **Static hosting** (Netlify, Vercel, GitHub Pages)
- **CDN** для быстрой доставки контента
- **HTTPS** обязателен
- **Gzip compression** для файлов

### 9.3 Мониторинг
- **Google Analytics** для аналитики
- **Performance monitoring** для производительности
- **Error tracking** для отслеживания ошибок
- **Uptime monitoring** для доступности

## 10. Система управления контентом

### 10.1 Архитектура CMS
- **Frontend**: Статические HTML страницы
- **Backend**: Простой PHP API для управления контентом
- **Database**: SQLite для хранения данных
- **File Storage**: Локальное хранение изображений

### 10.2 API endpoints
```php
// Аутентификация
POST /api/auth/login
POST /api/auth/logout

// Управление контентом
GET /api/content/pages
PUT /api/content/pages/{id}
GET /api/content/services
PUT /api/content/services/{id}
POST /api/content/portfolio
DELETE /api/content/portfolio/{id}

// Управление файлами
POST /api/files/upload
DELETE /api/files/{id}
```

### 10.3 Структура базы данных
```sql
-- Страницы
CREATE TABLE pages (
    id INTEGER PRIMARY KEY,
    slug TEXT UNIQUE,
    title TEXT,
    content TEXT,
    meta_description TEXT,
    updated_at DATETIME
);

-- Услуги
CREATE TABLE services (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price DECIMAL(10,2),
    duration INTEGER,
    description TEXT,
    category TEXT
);

-- Портфолио
CREATE TABLE portfolio (
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    image_path TEXT,
    category TEXT,
    before_after BOOLEAN,
    created_at DATETIME
);
```

### 10.4 Безопасность админ-панели
- JWT токены для аутентификации
- CSRF защита
- Rate limiting для API
- Валидация входных данных
- Логирование действий администратора
