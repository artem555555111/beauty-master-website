// Импорт модулей
import { Navigation } from './modules/navigation.js';
import { LanguageManager } from './modules/language.js';
// import { ThemeSwitcher } from './modules/theme-switcher.js';
import { FAQManager } from './modules/faq.js';

// Основной класс приложения
class App {
    constructor() {
        this.navigation = new Navigation();
        
        // Проверяем, не инициализирован ли уже LanguageManager
        if (!window.languageManager) {
            this.languageManager = new LanguageManager();
            window.languageManager = this.languageManager;
        } else {
            this.languageManager = window.languageManager;
        }
        
        // Переключатель тем отключен
        // this.themeSwitcher = new ThemeSwitcher();
        
        this.init();
    }

    init() {
        // Инициализация после загрузки DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
    }

    onDOMReady() {
        // Инициализация навигации
        this.navigation.init();
        
        // Инициализация системы языков (если еще не инициализирована)
        if (this.languageManager && !this.languageManager.isInitialized) {
            this.languageManager.init();
            this.languageManager.isInitialized = true;
        }
        
        // Очистка дублирующихся переключателей
        if (this.languageManager) {
            this.languageManager.cleanup();
        }
        
        // Инициализация галереи
        this.initGallery();
        
        // Инициализация FAQ
        this.initFAQ();
        
        // Инициализация фильтров портфолио
        this.initPortfolioFilters();
        
        // Инициализация форм
        this.initForms();
        
        // Инициализация плавной прокрутки
        this.initSmoothScrolling();
    }

    // Инициализация галереи
    initGallery() {
        const galleryItems = document.querySelectorAll('.portfolio-item');
        if (galleryItems.length) {
            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    // Здесь можно добавить открытие модального окна с увеличенным изображением
                    console.log('Открыть изображение:', item.querySelector('img').alt);
                });
            });
        }
    }

    // Инициализация FAQ
    initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const toggle = item.querySelector('.faq-toggle');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Закрываем все остальные элементы
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherToggle = otherItem.querySelector('.faq-toggle');
                    if (otherToggle) otherToggle.textContent = '+';
                });
                
                // Открываем/закрываем текущий элемент
                if (!isActive) {
                    item.classList.add('active');
                    if (toggle) toggle.textContent = '−';
                }
            });
        });
    }

    // Инициализация фильтров портфолио
    initPortfolioFilters() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        if (filterTabs.length && portfolioItems.length) {
            filterTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const filter = tab.getAttribute('data-filter');
                    
                    // Обновляем активную вкладку
                    filterTabs.forEach(t => t.classList.remove('filter-tab--active'));
                    tab.classList.add('filter-tab--active');
                    
                    // Фильтруем элементы
                    this.filterPortfolio(filter, portfolioItems);
                });
            });
        }
    }

    // Фильтрация портфолио
    filterPortfolio(filter, items) {
        items.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Инициализация форм
    initForms() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(contactForm);
            });
        }
    }

    // Обработка отправки формы
    handleFormSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Здесь можно добавить валидацию и отправку данных
        console.log('Данные формы:', data);
        
        // Показываем сообщение об успехе
        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        form.reset();
    }

    // Инициализация плавной прокрутки
    initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Обновляем активную ссылку в меню
                    this.updateActiveMenuLink(targetId);
                }
            });
        });
    }

    // Обновление активной ссылки в меню
    updateActiveMenuLink(targetId) {
        const menuLinks = document.querySelectorAll('.menu__link');
        menuLinks.forEach(link => {
            link.classList.remove('menu__link--active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('menu__link--active');
            }
        });
    }

    // Публичные методы для управления языками
    changeLanguage(lang) {
        if (this.languageManager) {
            this.languageManager.setLanguage(lang);
        }
    }

    getCurrentLanguage() {
        if (this.languageManager) {
            return this.languageManager.getCurrentLanguage();
        }
        return 'ru';
    }

    // Публичные методы для управления темами
    changeTheme(theme) {
        // Переключатель тем отключен
        // if (this.themeSwitcher) {
        //     this.themeSwitcher.setTheme(theme);
        // }
    }

    getCurrentTheme() {
        // Переключатель тем отключен
        // if (this.themeSwitcher) {
        //     return this.themeSwitcher.getCurrentTheme();
        // }
        return 'minimal';
    }
}

// Запуск приложения
new App();
