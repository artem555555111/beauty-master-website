// Модуль управления языками
import { t, setLanguage, getCurrentLanguage } from '../locales.js';

export class LanguageManager {
    constructor() {
        this.currentLang = getCurrentLanguage();
        this.languageSelector = null;
        this.isInitialized = false;
        this.init();
    }

    init() {
        // Проверяем, не создан ли уже переключатель
        if (document.querySelector('.language-selector')) {
            console.log('Переключатель языков уже существует');
            this.languageSelector = document.querySelector('.language-selector');
            this.bindEvents();
            this.isInitialized = true;
            return;
        }
        
        this.createLanguageSelector();
        this.setInitialLanguage();
        this.bindEvents();
        this.updateContent();
        this.isInitialized = true;
    }

    // Создание переключателя языков
    createLanguageSelector() {
        // Проверяем, не существует ли уже переключатель
        if (document.querySelector('.language-selector')) {
            console.log('Переключатель языков уже существует, пропускаем создание');
            return;
        }

        // Создаем переключатель языков
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <div class="language-selector__current">
                <span class="language-selector__flag">${this.getFlag(this.currentLang)}</span>
                <span class="language-selector__code">${this.getLanguageCode(this.currentLang)}</span>
                <span class="language-selector__arrow">▼</span>
            </div>
            <div class="language-selector__dropdown">
                <div class="language-selector__option" data-lang="ru">
                    <span class="language-selector__flag">🇷🇺</span>
                    <span class="language-selector__name">Русский</span>
                </div>
                <div class="language-selector__option" data-lang="uk">
                    <span class="language-selector__flag">🇺🇦</span>
                    <span class="language-selector__name">Українська</span>
                </div>
                <div class="language-selector__option" data-lang="pl">
                    <span class="language-selector__flag">🇵🇱</span>
                    <span class="language-selector__name">Polski</span>
                </div>
            </div>
        `;

        // Добавляем в header
        const header = document.querySelector('.header');
        if (header) {
            const navigation = header.querySelector('.navigation__actions');
            if (navigation) {
                // Проверяем, нет ли уже переключателя в navigation__actions
                if (!navigation.querySelector('.language-selector')) {
                    // Вставляем переключатель после кнопки "Записаться"
                    const signupBtn = navigation.querySelector('.btn--primary');
                    if (signupBtn) {
                        signupBtn.insertAdjacentElement('afterend', languageSelector);
                    } else {
                        // Если кнопка не найдена, вставляем в начало
                        navigation.insertBefore(languageSelector, navigation.firstChild);
                    }
                    this.languageSelector = languageSelector;
                    console.log('Переключатель языков успешно создан');
                } else {
                    console.log('Переключатель языков уже существует в navigation__actions');
                    this.languageSelector = navigation.querySelector('.language-selector');
                }
            }
        }
    }

    // Очистка существующих переключателей
    cleanup() {
        const existingSelectors = document.querySelectorAll('.language-selector');
        if (existingSelectors.length > 1) {
            console.log(`Найдено ${existingSelectors.length} переключателей, удаляем дубликаты`);
            // Оставляем только первый, удаляем остальные
            for (let i = 1; i < existingSelectors.length; i++) {
                existingSelectors[i].remove();
            }
            this.languageSelector = existingSelectors[0];
        }
    }

    // Установка начального языка
    setInitialLanguage() {
        setLanguage(this.currentLang);
        this.updateLanguageSelector();
    }

    // Привязка событий
    bindEvents() {
        if (this.languageSelector) {
            // Удаляем существующие обработчики событий
            const newSelector = this.languageSelector.cloneNode(true);
            this.languageSelector.parentNode.replaceChild(newSelector, this.languageSelector);
            this.languageSelector = newSelector;

            // Переключение языков
            const current = this.languageSelector.querySelector('.language-selector__current');
            const dropdown = this.languageSelector.querySelector('.language-selector__dropdown');
            const options = this.languageSelector.querySelectorAll('.language-selector__option');

            // Открытие/закрытие dropdown
            current.addEventListener('click', () => {
                dropdown.classList.toggle('language-selector__dropdown--open');
            });

            // Выбор языка
            options.forEach(option => {
                option.addEventListener('click', () => {
                    const lang = option.getAttribute('data-lang');
                    this.changeLanguage(lang);
                    dropdown.classList.remove('language-selector__dropdown--open');
                });
            });

            // Закрытие при клике вне
            document.addEventListener('click', (e) => {
                if (!this.languageSelector.contains(e.target)) {
                    dropdown.classList.remove('language-selector__dropdown--open');
                }
            });
        }
    }

    // Смена языка
    changeLanguage(lang) {
        if (lang !== this.currentLang) {
            this.currentLang = lang;
            setLanguage(lang);
            this.updateLanguageSelector();
            this.updateContent();
            
            // Анимация смены языка
            this.animateLanguageChange();
        }
    }

    // Обновление переключателя языков
    updateLanguageSelector() {
        if (this.languageSelector) {
            const flag = this.languageSelector.querySelector('.language-selector__flag');
            const code = this.languageSelector.querySelector('.language-selector__code');
            
            if (flag) flag.textContent = this.getFlag(this.currentLang);
            if (code) code.textContent = this.getLanguageCode(this.currentLang);
        }
    }

    // Обновление контента на странице
    updateContent() {
        // Обновляем навигацию
        this.updateNavigation();
        
        // Обновляем hero секцию
        this.updateHero();
        
        // Обновляем секцию "О мастере"
        this.updateAbout();
        
        // Обновляем программу курса
        this.updateProgram();
        
        // Обновляем тарифы
        this.updatePricing();
        
        // Обновляем портфолио
        this.updatePortfolio();
        
        // Обновляем FAQ
        this.updateFAQ();
        
        // Обновляем контакты
        this.updateContact();
        
        // Обновляем footer
        this.updateFooter();
    }

    // Обновление навигации
    updateNavigation() {
        const navLinks = document.querySelectorAll('.menu__link');
        navLinks.forEach((link, index) => {
            const keys = ['nav.home', 'nav.about', 'nav.program', 'nav.pricing', 'nav.portfolio', 'nav.faq', 'nav.contact'];
            if (keys[index]) {
                link.textContent = t(keys[index]);
            }
        });
    }

    // Обновление hero секции
    updateHero() {
        const title = document.querySelector('.hero__title');
        const subtitle = document.querySelector('.hero__subtitle');
        const experienceLabel = document.querySelector('.hero__stat-label:nth-child(1)');
        const studentsLabel = document.querySelector('.hero__stat-label:nth-child(2)');
        const satisfiedLabel = document.querySelector('.hero__stat-label:nth-child(3)');
        const chooseTariffBtn = document.querySelector('.hero__actions .btn--primary');
        const viewProgramBtn = document.querySelector('.hero__actions .btn--secondary');

        if (title) title.textContent = t('hero.title');
        if (subtitle) subtitle.textContent = t('hero.subtitle');
        if (experienceLabel) experienceLabel.textContent = t('hero.stats.experience');
        if (studentsLabel) studentsLabel.textContent = t('hero.stats.students');
        if (satisfiedLabel) satisfiedLabel.textContent = t('hero.stats.satisfied');
        if (chooseTariffBtn) chooseTariffBtn.textContent = t('hero.actions.chooseTariff');
        if (viewProgramBtn) viewProgramBtn.textContent = t('hero.actions.viewProgram');
    }

    // Обновление секции "О мастере"
    updateAbout() {
        const title = document.querySelector('#about .section-title');
        const description = document.querySelector('.about__description');
        const achievements = document.querySelectorAll('.achievement-text');
        const actionBtn = document.querySelector('#about .btn');

        if (title) title.textContent = t('about.title');
        if (description) description.textContent = t('about.description');
        if (achievements.length >= 4) {
            achievements[0].textContent = t('about.achievements.students');
            achievements[1].textContent = t('about.achievements.course');
            achievements[2].textContent = t('about.achievements.brands');
            achievements[3].textContent = t('about.achievements.certified');
        }
        if (actionBtn) actionBtn.textContent = t('about.action');
    }

    // Обновление программы курса
    updateProgram() {
        const title = document.querySelector('#program .section-title');
        const subtitle = document.querySelector('#program .section-subtitle');
        const lessons = document.querySelectorAll('.program-lesson');

        if (title) title.textContent = t('program.title');
        if (subtitle) subtitle.textContent = t('program.subtitle');

        lessons.forEach((lesson, index) => {
            const lessonKey = `program.lessons.lesson${index + 1}`;
            const lessonTitle = lesson.querySelector('.lesson-title');
            const whatTitle = lesson.querySelector('.lesson-content h4:first-of-type');
            const resultTitle = lesson.querySelector('.lesson-content h4:last-of-type');
            const resultText = lesson.querySelector('.lesson-content p');
            const topics = lesson.querySelectorAll('.lesson-content li');

            if (lessonTitle) lessonTitle.textContent = t(`${lessonKey}.title`);
            if (whatTitle) whatTitle.textContent = t(`${lessonKey}.what`);
            if (resultTitle) resultTitle.textContent = t(`${lessonKey}.result`);
            if (resultText) resultText.textContent = t(`${lessonKey}.resultText`);

            // Обновляем темы урока
            const topicsData = t(`${lessonKey}.topics`);
            if (Array.isArray(topicsData)) {
                topics.forEach((topic, topicIndex) => {
                    if (topicsData[topicIndex]) {
                        topic.textContent = topicsData[topicIndex];
                    }
                });
            }
        });
    }

    // Обновление тарифов
    updatePricing() {
        const title = document.querySelector('#pricing .section-title');
        const subtitle = document.querySelector('#pricing .section-subtitle');
        const plans = document.querySelectorAll('.pricing-card');

        if (title) title.textContent = t('pricing.title');
        if (subtitle) subtitle.textContent = t('pricing.subtitle');

        plans.forEach((plan, index) => {
            const planKeys = ['basic', 'advanced', 'individual'];
            const planKey = planKeys[index];
            if (planKey) {
                const planTitle = plan.querySelector('.pricing-card__title');
                const badge = plan.querySelector('.pricing-card__badge');
                const actionBtn = plan.querySelector('.btn');
                const features = plan.querySelectorAll('.pricing-card__features li');

                if (planTitle) planTitle.textContent = t(`pricing.plans.${planKey}.title`);
                if (badge) badge.textContent = t(`pricing.plans.${planKey}.badge`);
                if (actionBtn) actionBtn.textContent = t(`pricing.plans.${planKey}.action`);

                // Обновляем особенности тарифа
                const featuresData = t(`pricing.plans.${planKey}.features`);
                if (Array.isArray(featuresData)) {
                    features.forEach((feature, featureIndex) => {
                        if (featuresData[featureIndex]) {
                            feature.textContent = featuresData[featureIndex];
                        }
                    });
                }
            }
        });
    }

    // Обновление портфолио
    updatePortfolio() {
        const title = document.querySelector('#portfolio .section-title');
        const subtitle = document.querySelector('#portfolio .section-subtitle');
        const works = document.querySelectorAll('.portfolio-item');

        if (title) title.textContent = t('portfolio.title');
        if (subtitle) subtitle.textContent = t('portfolio.subtitle');

        works.forEach((work, index) => {
            const workKey = `portfolio.works.work${index + 1}`;
            const workTitle = work.querySelector('.portfolio-item__title');
            const workDescription = work.querySelector('.portfolio-item__description');

            if (workTitle) workTitle.textContent = t(`${workKey}.title`);
            if (workDescription) workDescription.textContent = t(`${workKey}.description`);
        });
    }

    // Обновление FAQ
    updateFAQ() {
        const title = document.querySelector('#faq .section-title');
        const subtitle = document.querySelector('#faq .section-subtitle');
        const questions = document.querySelectorAll('.faq-item');

        if (title) title.textContent = t('faq.title');
        if (subtitle) subtitle.textContent = t('faq.subtitle');

        questions.forEach((item, index) => {
            const questionKey = `faq.questions.q${index + 1}`;
            const question = item.querySelector('.faq-question h3');
            const answer = item.querySelector('.faq-answer p');

            if (question) question.textContent = t(`${questionKey}.question`);
            if (answer) answer.textContent = t(`${questionKey}.answer`);
        });
    }

    // Обновление контактов
    updateContact() {
        const title = document.querySelector('#contact .section-title');
        const description = document.querySelector('.contact__description');
        const labels = document.querySelectorAll('.contact__label');
        const actionBtns = document.querySelectorAll('.contact__actions .btn');
        const formTitle = document.querySelector('.contact-form__title');
        const formInputs = document.querySelectorAll('.contact__form input, .contact__form select, .contact__form textarea');
        const submitBtn = document.querySelector('.contact__form .btn');

        if (title) title.textContent = t('contact.title');
        if (description) description.textContent = t('contact.description');

        // Обновляем метки контактной информации
        if (labels.length >= 4) {
            labels[0].textContent = t('contact.info.phone');
            labels[1].textContent = t('contact.info.email');
            labels[2].textContent = t('contact.info.address');
            labels[3].textContent = t('contact.info.workingHours');
        }

        // Обновляем кнопки действий
        if (actionBtns.length >= 2) {
            actionBtns[0].textContent = t('contact.actions.call');
            actionBtns[1].textContent = t('contact.actions.whatsapp');
        }

        // Обновляем форму
        if (formTitle) formTitle.textContent = t('contact.form.title');
        if (submitBtn) submitBtn.textContent = t('contact.form.submit');

        // Обновляем поля формы
        formInputs.forEach((input, index) => {
            const placeholders = [
                t('contact.form.name'),
                t('contact.form.phone'),
                t('contact.form.course'),
                t('contact.form.message')
            ];
            if (placeholders[index]) {
                input.placeholder = placeholders[index];
            }
        });

        // Обновляем опции курсов
        const courseSelect = document.querySelector('#course');
        if (courseSelect) {
            const options = courseSelect.querySelectorAll('option');
            if (options.length >= 4) {
                options[1].textContent = t('contact.form.courseOptions.basic');
                options[2].textContent = t('contact.form.courseOptions.advanced');
                options[3].textContent = t('contact.form.courseOptions.individual');
            }
        }
    }

    // Обновление footer
    updateFooter() {
        const description = document.querySelector('.footer__description');
        const navigation = document.querySelector('.footer__subtitle');

        if (description) description.textContent = t('footer.description');
        if (navigation) navigation.textContent = t('footer.navigation');
    }

    // Анимация смены языка
    animateLanguageChange() {
        const content = document.querySelector('.main');
        if (content) {
            content.style.opacity = '0.7';
            content.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                content.style.opacity = '1';
                content.style.transform = 'scale(1)';
            }, 300);
        }
    }

    // Получение флага языка
    getFlag(lang) {
        const flags = {
            ru: '🇷🇺',
            uk: '🇺🇦',
            pl: '🇵🇱'
        };
        return flags[lang] || '🌐';
    }

    // Получение кода языка
    getLanguageCode(lang) {
        const codes = {
            ru: 'RU',
            uk: 'UK',
            pl: 'PL'
        };
        return codes[lang] || 'EN';
    }

    // Получение текущего языка
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Установка языка программно
    setLanguage(lang) {
        this.changeLanguage(lang);
    }
}
