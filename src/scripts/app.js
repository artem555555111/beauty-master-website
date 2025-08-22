// Beauty Master Website - Main JavaScript File
// Объединяет всю функциональность сайта в одном файле

document.addEventListener('DOMContentLoaded', () => {
    console.log('Beauty Master Website loaded successfully! 🎉');
    
    // Инициализация всех модулей
    initNavigation();
    initAnimations();
    initForms();
    initModals();
    initFAQ();
    initPortfolio();
    initScrollEffects();
    
    // Дополнительные инициализации
    initLazyLoading();
    initSmoothScrolling();
    initContactForm();
});

// ===== НАВИГАЦИЯ =====
function initNavigation() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainMenu = document.getElementById('mainMenu');
    const header = document.getElementById('header');
    
    if (mobileMenuToggle && mainMenu) {
        // Мобильное меню
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            
            mainMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Блокировка скролла при открытом меню
            document.body.style.overflow = mainMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Закрытие меню при клике на ссылку
        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Закрытие меню при клике вне его
        document.addEventListener('click', (e) => {
            if (!mainMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mainMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Sticky header при скролле
    if (header) {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.classList.add('header--sticky');
            } else {
                header.classList.remove('header--sticky');
            }
            
            // Скрытие/показ header при скролле
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.classList.add('header--hidden');
            } else {
                header.classList.remove('header--hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// ===== АНИМАЦИИ =====
function initAnimations() {
    // Intersection Observer для анимаций
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Добавляем задержку для элементов с delay
                const delay = entry.target.dataset.delay;
                if (delay) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-delay-complete');
                    }, parseInt(delay));
                }
            }
        });
    }, observerOptions);
    
    // Наблюдаем за всеми анимируемыми элементами
    const animatedElements = document.querySelectorAll(`
        .animate-fade-up, .animate-slide-left, .animate-slide-right, 
        .animate-scale-in, .animate-bounce, .hover-lift
    `);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Анимация счетчиков
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000; // 2 секунды
        const increment = target / (duration / 16); // 60 FPS
        
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

// ===== ФОРМЫ =====
function initForms() {
    // Основная контактная форма
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Форма курса
    const courseForm = document.getElementById('courseForm');
    if (courseForm) {
        courseForm.addEventListener('submit', handleCourseFormSubmit);
    }
    
    // Валидация форм
    initFormValidation();
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Показываем состояние загрузки
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loading-spinner"></span> Отправка...';
    
    // Имитация отправки (замените на реальный API)
    setTimeout(() => {
        // Показываем модальное окно успеха
        showSuccessModal('Спасибо! Мы свяжемся с вами в ближайшее время.');
        
        // Сбрасываем форму
        form.reset();
        
        // Восстанавливаем кнопку
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Отправить заявку';
    }, 1500);
}

function handleCourseFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Показываем состояние загрузки
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loading-spinner"></span> Запись...';
    
    // Имитация отправки
    setTimeout(() => {
        // Закрываем модальное окно курса
        closeCourseModal();
        
        // Показываем модальное окно успеха
        showSuccessModal('Спасибо! Мы свяжемся с вами для уточнения деталей курса.');
        
        // Сбрасываем форму
        form.reset();
        
        // Восстанавливаем кнопку
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Записаться на курс';
    }, 1500);
}

function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Убираем предыдущие ошибки
    clearFieldError(e);
    
    // Проверяем обязательность
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Это поле обязательно для заполнения');
        return false;
    }
    
    // Проверяем email
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Введите корректный email адрес');
            return false;
        }
    }
    
    // Проверяем телефон
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Введите корректный номер телефона');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    
    field.classList.add('field-error--has-error');
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    const errorDiv = field.parentNode.querySelector('.field-error');
    
    if (errorDiv) {
        errorDiv.remove();
        field.classList.remove('field-error--has-error');
    }
}

// ===== МОДАЛЬНЫЕ ОКНА =====
function initModals() {
    // Закрытие модальных окон по клику на overlay
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__overlay')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        }
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal[aria-hidden="false"]');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Фокус на первый интерактивный элемент
        const firstFocusable = modal.querySelector('button, input, textarea, select, a');
        if (firstFocusable) {
            firstFocusable.focus();
        }
    }
}

function closeModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Функции для модальных окон курсов
function openCourseModal(courseType) {
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    
    if (modal && modalTitle) {
        // Устанавливаем заголовок в зависимости от курса
        const courseNames = {
            'basic': 'Запись на курс "Основы оформления бровей"',
            'advanced': 'Запись на курс "Продвинутые техники"',
            'individual': 'Запись на курс "Индивидуальное обучение"'
        };
        
        modalTitle.textContent = courseNames[courseType] || 'Запись на курс';
        
        // Открываем модальное окно
        openModal('courseModal');
    }
}

function closeCourseModal() {
    closeModal(document.getElementById('courseModal'));
}

function showSuccessModal(message) {
    const modal = document.getElementById('successModal');
    const messageElement = modal.querySelector('.success-message');
    
    if (messageElement) {
        messageElement.textContent = message;
    }
    
    openModal('successModal');
}

function closeSuccessModal() {
    closeModal(document.getElementById('successModal'));
}

// ===== FAQ =====
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question && answer && toggle) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Закрываем все FAQ
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                    const faqAnswer = faq.querySelector('.faq-answer');
                    const faqToggle = faq.querySelector('.faq-toggle');
                    if (faqAnswer) faqAnswer.style.maxHeight = '0px';
                    if (faqToggle) faqToggle.textContent = '+';
                });
                
                // Открываем текущий, если он был закрыт
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    toggle.textContent = '−';
                }
            });
        }
    });
}

// ===== ПОРТФОЛИО =====
function initPortfolio() {
    // Фильтрация портфолио
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterBtns.length && portfolioItems.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Убираем активный класс у всех кнопок
                filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
                // Добавляем активный класс к текущей кнопке
                btn.classList.add('filter-btn--active');
                
                // Фильтруем элементы
                portfolioItems.forEach(item => {
                    const categories = item.getAttribute('data-category');
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        item.style.display = 'block';
                        item.classList.add('animate-fade-up');
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Модальные окна портфолио
    const portfolioModalItems = document.querySelectorAll('.portfolio-item[onclick*="openPortfolioModal"]');
    
    portfolioModalItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openPortfolioModal(index);
        });
    });
}

function openPortfolioModal(index) {
    const modal = document.getElementById('portfolioModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCategory = document.getElementById('modalCategory');
    
    if (modal && modalImage && modalTitle && modalDescription && modalCategory) {
        // Данные портфолио (можно вынести в отдельный файл)
        const portfolioData = [
            {
                title: "Коррекция бровей",
                description: "До и после коррекции. Придание идеальной формы бровям с учетом особенностей лица клиента.",
                category: "Брови",
                image: "../images/portfolio/before-after-brows.jpg"
            },
            {
                title: "Ламинирование ресниц",
                description: "До и после ламинирования. Долговременная завивка и укрепление ресниц на 6-8 недель.",
                category: "Ресницы",
                image: "../images/portfolio/before-after-eyelashes.jpg"
            },
            // Добавьте больше элементов по необходимости
        ];
        
        if (portfolioData[index]) {
            const item = portfolioData[index];
            
            modalImage.src = item.image;
            modalImage.alt = item.title;
            modalTitle.textContent = item.title;
            modalDescription.textContent = item.description;
            modalCategory.textContent = item.category;
            
            openModal('portfolioModal');
        }
    }
}

function closePortfolioModal() {
    closeModal(document.getElementById('portfolioModal'));
}

// ===== ЭФФЕКТЫ СКРОЛЛА =====
function initScrollEffects() {
    // Параллакс эффект для hero секции
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
            }
        });
    }, observerOptions);
    
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach(element => {
        scrollObserver.observe(element);
    });
}

// ===== ЛЕНИВАЯ ЗАГРУЗКА =====
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ===== ПЛАВНАЯ ПРОКРУТКА =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== КОНТАКТНАЯ ФОРМА =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Маска для телефона
        const phoneInput = contactForm.querySelector('input[type="tel"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 0) {
                    if (value.length <= 3) {
                        value = `+7 (${value}`;
                    } else if (value.length <= 6) {
                        value = `+7 (${value.slice(0, 3)}) ${value.slice(3)}`;
                    } else if (value.length <= 8) {
                        value = `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
                    } else {
                        value = `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 8)}-${value.slice(8, 10)}`;
                    }
                }
                
                e.target.value = value;
            });
        }
        
        // Валидация в реальном времени
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

// ===== УТИЛИТЫ =====

// Функция для показа уведомлений
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <span class="notification__message">${message}</span>
            <button class="notification__close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Автоматическое скрытие через 5 секунд
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Функция для копирования в буфер обмена
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Скопировано в буфер обмена!', 'success');
        }).catch(() => {
            showNotification('Не удалось скопировать', 'error');
        });
    } else {
        // Fallback для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Скопировано в буфер обмена!', 'success');
    }
}

// Функция для форматирования цены
function formatPrice(price, currency = '₽') {
    return new Intl.NumberFormat('ru-RU').format(price) + currency;
}

// Функция для debounce
function debounce(func, wait) {
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

// Функция для throttle
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====

// Обработчик изменения размера окна
window.addEventListener('resize', debounce(() => {
    // Пересчитываем размеры и позиции при изменении размера окна
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (modal.style.display === 'flex') {
            // Центрируем модальное окно
            const content = modal.querySelector('.modal__content');
            if (content) {
                content.style.top = '50%';
                content.style.left = '50%';
                content.style.transform = 'translate(-50%, -50%)';
            }
        }
    });
}, 250));

// Обработчик скролла для анимаций
window.addEventListener('scroll', throttle(() => {
    // Анимации при скролле
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16));

// ===== ЭКСПОРТ ФУНКЦИЙ =====
// Делаем функции доступными глобально для использования в HTML
window.openCourseModal = openCourseModal;
window.closeCourseModal = closeCourseModal;
window.closeSuccessModal = closeSuccessModal;
window.openPortfolioModal = openPortfolioModal;
window.closePortfolioModal = closePortfolioModal;
window.toggleFAQ = function(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Закрываем все FAQ
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        if (answer) answer.style.maxHeight = '0px';
        if (toggle) toggle.textContent = '+';
    });
    
    // Открываем текущий, если он был закрыт
    if (!isActive) {
        faqItem.classList.add('active');
        const answer = faqItem.querySelector('.faq-answer');
        const toggle = faqItem.querySelector('.faq-toggle');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
        if (toggle) toggle.textContent = '−';
    }
};

// ===== CSS КЛАССЫ ДЛЯ АНИМАЦИЙ =====
// Добавляем CSS классы для анимаций
const style = document.createElement('style');
style.textContent = `
    .loading-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        border-top-color: transparent;
        animation: spin 1s ease-in-out infinite;
        margin-right: 8px;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    .field-error {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
    
    .field-error--has-error {
        border-color: #dc3545 !important;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease-out;
    }
    
    .notification--success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .notification--error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    
    .notification--info {
        background-color: #d1ecf1;
        color: #0c5460;
        border: 1px solid #bee5eb;
    }
    
    .notification__content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification__close {
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .header--sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        animation: slideDown 0.3s ease-out;
    }
    
    .header--hidden {
        transform: translateY(-100%);
        transition: transform 0.3s ease-out;
    }
    
    @keyframes slideDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
    
    .scroll-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .animate-delay-complete {
        animation-play-state: running;
    }
`;

document.head.appendChild(style);

console.log('Beauty Master Website JavaScript initialized successfully! 🚀');
