/**
 * BEAUTY MASTER - Основное приложение
 * Современный, оптимизированный JavaScript
 */

class BeautyMasterApp {
  constructor() {
    this.init();
  }

  init() {
    // Инициализация после загрузки DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.onReady());
    } else {
      this.onReady();
    }
  }

  onReady() {
    this.initNavigation();
    this.initFAQ();
    this.initSmoothScroll();
    this.initAnimations();
    this.initLanguage();
  }

  // === НАВИГАЦИЯ ===
  initNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');

    // Мобильное меню
    if (mobileToggle && menu) {
      mobileToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        mobileToggle.classList.toggle('active');
        
        // Анимация иконки бургера
        const spans = mobileToggle.querySelectorAll('span');
        if (mobileToggle.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });

      // Закрытие меню при клике на ссылку
      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('open');
          mobileToggle.classList.remove('active');
        });
      });
    }

    // Скрытие/показ заголовка при скролле
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header?.classList.add('header--hidden');
      } else {
        header?.classList.remove('header--hidden');
      }
      lastScrollY = window.scrollY;
    });

    // Активная ссылка в меню
    this.updateActiveLink();
    window.addEventListener('scroll', () => this.updateActiveLink());
  }

  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const menuLinks = document.querySelectorAll('.menu a');

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    menuLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  }

  // === FAQ ===
  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const toggle = item.querySelector('.faq-toggle');
      
      if (question) {
        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          
          // Закрываем все FAQ
          faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            const otherToggle = otherItem.querySelector('.faq-toggle');
            if (otherToggle) otherToggle.textContent = '+';
          });
          
          // Открываем текущий, если он не был активен
          if (!isActive) {
            item.classList.add('active');
            if (toggle) toggle.textContent = '−';
          }
        });
      }
    });
  }

  // === ПЛАВНАЯ ПРОКРУТКА ===
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // === АНИМАЦИИ ===
  initAnimations() {
    // Наблюдатель для анимаций при скролле
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Добавляем анимации к элементам
    const animatedElements = document.querySelectorAll('.course-card, .feature-card, .schedule-card, .faq-item');
    animatedElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });
  }

  // === ЯЗЫК ===
  initLanguage() {
    // Простая система переводов
    const translations = {
      ru: {
        'nav.home': 'Главная',
        'nav.portfolio': 'Портфолио',
        'nav.services': 'Услуги',
        'nav.about': 'О мастере',
        'nav.courses': 'Курсы',
        'nav.blog': 'Блог',
        'nav.contacts': 'Контакты'
      },
      en: {
        'nav.home': 'Home',
        'nav.portfolio': 'Portfolio',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.courses': 'Courses',
        'nav.blog': 'Blog',
        'nav.contacts': 'Contacts'
      },
      uk: {
        'nav.home': 'Головна',
        'nav.portfolio': 'Портфоліо',
        'nav.services': 'Послуги',
        'nav.about': 'Про майстра',
        'nav.courses': 'Курси',
        'nav.blog': 'Блог',
        'nav.contacts': 'Контакти'
      }
    };

    const currentLang = localStorage.getItem('language') || 'ru';
    this.setLanguage(currentLang);

    // Создаем простой переключатель языка
    const langSwitcher = document.createElement('div');
    langSwitcher.className = 'lang-switcher';
    langSwitcher.innerHTML = `
      <select class="lang-select">
        <option value="ru" ${currentLang === 'ru' ? 'selected' : ''}>🇷🇺 RU</option>
        <option value="en" ${currentLang === 'en' ? 'selected' : ''}>🇺🇸 EN</option>
        <option value="uk" ${currentLang === 'uk' ? 'selected' : ''}>🇺🇦 UK</option>
      </select>
    `;

    const navActions = document.querySelector('.navigation__actions');
    if (navActions) {
      navActions.appendChild(langSwitcher);
    }

    const langSelect = langSwitcher.querySelector('.lang-select');
    langSelect.addEventListener('change', (e) => {
      this.setLanguage(e.target.value);
    });
  }

  setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    
    // Здесь можно добавить логику перевода элементов
    // Для простоты оставляем базовую реализацию
  }

  // === УТИЛИТЫ ===
  
  // Дебаунс для оптимизации событий
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Троттлинг для скролла
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
}

// Добавляем стили для переключателя языка
const style = document.createElement('style');
style.textContent = `
  .lang-switcher {
    margin-left: var(--space-4);
  }
  
  .lang-select {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
    cursor: pointer;
    transition: var(--transition);
  }
  
  .lang-select:hover {
    border-color: var(--primary);
  }
  
  .lang-select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.1);
  }
  
  .header--hidden {
    transform: translateY(-100%);
  }
  
  @media (max-width: 768px) {
    .lang-switcher {
      order: 1;
      margin-left: 0;
      margin-right: var(--space-4);
    }
    
    .lang-select {
      padding: var(--space-1) var(--space-2);
      font-size: var(--text-xs);
    }
  }
`;
document.head.appendChild(style);

// Инициализация приложения
new BeautyMasterApp();
