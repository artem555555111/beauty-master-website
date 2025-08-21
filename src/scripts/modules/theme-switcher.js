// Модуль переключения тем дизайна
export class ThemeSwitcher {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'minimal';
        this.themes = ['minimal', 'elegant', 'creative'];
        this.themeNames = {
            minimal: 'Минималистичный',
            elegant: 'Элегантный',
            creative: 'Креативный'
        };
        this.init();
    }

    init() {
        this.createThemeSelector();
        this.setTheme(this.currentTheme);
        this.bindEvents();
    }

    // Создание переключателя тем
    createThemeSelector() {
        const header = document.querySelector('.header');
        if (!header) return;

        const navigation = header.querySelector('.navigation__actions');
        if (!navigation) return;

        // Создаем переключатель тем
        const themeSelector = document.createElement('div');
        themeSelector.className = 'theme-selector';
        themeSelector.innerHTML = `
            <div class="theme-selector__current">
                <span class="theme-selector__icon">🎨</span>
                <span class="theme-selector__name">${this.themeNames[this.currentTheme]}</span>
                <span class="theme-selector__arrow">▼</span>
            </div>
            <div class="theme-selector__dropdown">
                <div class="theme-selector__option" data-theme="minimal">
                    <span class="theme-selector__icon">✨</span>
                    <span class="theme-selector__name">Минималистичный</span>
                </div>
                <div class="theme-selector__option" data-theme="elegant">
                    <span class="theme-selector__icon">👑</span>
                    <span class="theme-selector__name">Элегантный</span>
                </div>
                <div class="theme-selector__option" data-theme="creative">
                    <span class="theme-selector__icon">🚀</span>
                    <span class="theme-selector__name">Креативный</span>
                </div>
            </div>
        `;

        // Вставляем после переключателя языков
        const languageSelector = navigation.querySelector('.language-selector');
        if (languageSelector) {
            languageSelector.insertAdjacentElement('afterend', themeSelector);
        } else {
            navigation.insertBefore(themeSelector, navigation.firstChild);
        }

        this.themeSelector = themeSelector;
    }

    // Привязка событий
    bindEvents() {
        if (this.themeSelector) {
            const current = this.themeSelector.querySelector('.theme-selector__current');
            const dropdown = this.themeSelector.querySelector('.theme-selector__dropdown');
            const options = this.themeSelector.querySelectorAll('.theme-selector__option');

            // Открытие/закрытие dropdown
            current.addEventListener('click', () => {
                dropdown.classList.toggle('theme-selector__dropdown--open');
            });

            // Выбор темы
            options.forEach(option => {
                option.addEventListener('click', () => {
                    const theme = option.getAttribute('data-theme');
                    this.setTheme(theme);
                    dropdown.classList.remove('theme-selector__dropdown--open');
                });
            });

            // Закрытие при клике вне
            document.addEventListener('click', (e) => {
                if (!this.themeSelector.contains(e.target)) {
                    dropdown.classList.remove('theme-selector__dropdown--open');
                }
            });
        }
    }

    // Установка темы
    setTheme(theme) {
        if (this.themes.includes(theme)) {
            this.currentTheme = theme;
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            // Обновляем переключатель
            this.updateThemeSelector();
            
            // Анимация смены темы
            this.animateThemeChange();
            
            console.log(`Тема изменена на: ${theme}`);
        }
    }

    // Обновление переключателя тем
    updateThemeSelector() {
        if (this.themeSelector) {
            const name = this.themeSelector.querySelector('.theme-selector__name');
            if (name) {
                name.textContent = this.themeNames[this.currentTheme];
            }
        }
    }

    // Анимация смены темы
    animateThemeChange() {
        const content = document.querySelector('.main');
        if (content) {
            content.style.opacity = '0.8';
            content.style.transform = 'scale(0.99)';
            
            setTimeout(() => {
                content.style.opacity = '1';
                content.style.transform = 'scale(1)';
            }, 300);
        }
    }

    // Получение текущей темы
    getCurrentTheme() {
        return this.currentTheme;
    }

    // Получение названия темы
    getThemeName(theme) {
        return this.themeNames[theme] || theme;
    }

    // Список доступных тем
    getAvailableThemes() {
        return this.themes;
    }
}
