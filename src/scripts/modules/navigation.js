// Модуль навигации
export class Navigation {
    constructor() {
        this.header = null;
        this.mobileMenuToggle = null;
        this.mobileMenu = null;
        this.lastScrollTop = 0;
        this.scrollThreshold = 100;
    }

    init() {
        this.header = document.querySelector('.header');
        this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        this.mobileMenu = document.querySelector('.navigation__menu');
        
        if (this.header) {
            this.initScrollEffects();
        }
        
        if (this.mobileMenuToggle && this.mobileMenu) {
            this.initMobileMenu();
        }
        
        this.initActiveMenuLinks();
    }

    // Эффекты при прокрутке
    initScrollEffects() {
        let ticking = false;
        
        const updateHeader = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Добавляем эффект прозрачности при прокрутке
            if (scrollTop > this.scrollThreshold) {
                this.header.classList.add('header--scrolled');
            } else {
                this.header.classList.remove('header--scrolled');
            }
            
            this.lastScrollTop = scrollTop;
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Инициализация начального состояния
        updateHeader();
    }

    // Мобильное меню
    initMobileMenu() {
        this.mobileMenuToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Закрытие меню при клике на ссылку
        const mobileLinks = this.mobileMenu.querySelectorAll('.menu__link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Закрытие меню при клике вне
        document.addEventListener('click', (e) => {
            if (!this.header.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Закрытие меню по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.mobileMenu.classList.toggle('menu--open');
        this.mobileMenuToggle.classList.toggle('active');
        
        // Анимация гамбургера
        const spans = this.mobileMenuToggle.querySelectorAll('span');
        if (this.mobileMenu.classList.contains('menu--open')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }

    closeMobileMenu() {
        this.mobileMenu.classList.remove('menu--open');
        this.mobileMenuToggle.classList.remove('active');
        
        const spans = this.mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }

    // Активные ссылки в меню
    initActiveMenuLinks() {
        const sections = document.querySelectorAll('section[id]');
        const menuLinks = document.querySelectorAll('.menu__link');
        
        const updateActiveLink = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const headerHeight = this.header ? this.header.offsetHeight : 80;
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - headerHeight - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            menuLinks.forEach(link => {
                link.classList.remove('menu__link--active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('menu__link--active');
                }
            });
        };
        
        window.addEventListener('scroll', updateActiveLink, { passive: true });
        
        // Инициализация начального состояния
        updateActiveLink();
    }

    // Плавная прокрутка к секциям
    scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = this.header ? this.header.offsetHeight : 0;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Закрываем мобильное меню после клика
            if (this.mobileMenu.classList.contains('menu--open')) {
                this.closeMobileMenu();
            }
        }
    }

    // Обновление активной ссылки
    updateActiveMenuLink(targetId) {
        const menuLinks = document.querySelectorAll('.menu__link');
        menuLinks.forEach(link => {
            link.classList.remove('menu__link--active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('menu__link--active');
            }
        });
    }
}
