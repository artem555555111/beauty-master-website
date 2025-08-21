// Файл локализации для многоязычной поддержки
export const locales = {
    ru: {
        // Навигация
        nav: {
            home: 'Главная',
            about: 'О мастере',
            program: 'Программа курса',
            pricing: 'Тарифы',
            portfolio: 'Портфолио',
            faq: 'FAQ',
            contact: 'Контакты'
        },
        
        // Hero секция
        hero: {
            title: 'Курс "БРОВИСТ С НУЛЯ"',
            subtitle: 'Станьте профессиональным мастером по бровям! Обучение с нуля, практические занятия, индивидуальный подход. Получите сертификат и начните зарабатывать.',
            stats: {
                experience: 'лет опыта',
                students: 'учеников',
                satisfied: 'довольных'
            },
            actions: {
                chooseTariff: 'Выбрать тариф',
                viewProgram: 'Программа курса'
            }
        },
        
        // О мастере
        about: {
            title: 'О мастере',
            description: '5+ лет опыта в индустрии красоты. Обучила более 100 мастеров, которые успешно работают в салонах Москвы и открыли собственные студии.',
            achievements: {
                students: 'Обучила >100 учеников по всему миру',
                course: 'Автор курса "БРОВИСТ С НУЛЯ"',
                brands: 'Сотрудничество с брендами Bronsun, FreiAVIVER',
                certified: 'Сертифицированный мастер-преподаватель'
            },
            action: 'Перейти к программе'
        },
        
        // Программа курса
        program: {
            title: 'Программа курса',
            subtitle: 'Курс включает теоретические занятия и практические задания с обратной связью',
            lessons: {
                lesson1: {
                    title: 'Фундамент',
                    what: 'Что изучаем:',
                    topics: [
                        'Анатомия бровей и лица',
                        'Анализ формы лица',
                        'Инструменты и материалы',
                        'Техника безопасности'
                    ],
                    result: 'Результат:',
                    resultText: 'Понимание основ профессии, умение анализировать лицо клиента'
                },
                lesson2: {
                    title: 'Коррекция',
                    what: 'Что изучаем:',
                    topics: [
                        'Техники коррекции пинцетом',
                        'Коррекция нитью',
                        'Создание формы бровей',
                        'Работа с проблемными бровями'
                    ],
                    result: 'Результат:',
                    resultText: 'Уверенное владение техниками коррекции, создание идеальной формы'
                },
                lesson3: {
                    title: 'Окрашивание',
                    what: 'Что изучаем:',
                    topics: [
                        'Окрашивание краской',
                        'Окрашивание хной',
                        'Подбор цвета',
                        'Фиксация результата'
                    ],
                    result: 'Результат:',
                    resultText: 'Профессиональное окрашивание бровей с долговременным эффектом'
                },
                lesson4: {
                    title: 'Ламинирование',
                    what: 'Что изучаем:',
                    topics: [
                        'Техника ламинирования',
                        'Выбор составов',
                        'Фиксация формы',
                        'Уход после процедуры'
                    ],
                    result: 'Результат:',
                    resultText: 'Создание объемных, ухоженных бровей с долговременным эффектом'
                },
                lesson5: {
                    title: 'Практика',
                    what: 'Что изучаем:',
                    topics: [
                        'Работа с моделями',
                        'Разбор ошибок',
                        'Консультации клиентов',
                        'Бизнес-планирование'
                    ],
                    result: 'Результат:',
                    resultText: 'Готовность к работе с клиентами, понимание бизнес-процессов'
                }
            }
        },
        
        // Тарифы
        pricing: {
            title: 'Тарифы курса',
            subtitle: 'Выберите подходящий тариф и начните свой путь в профессии',
            plans: {
                basic: {
                    title: 'Базовый',
                    price: '25 000₽',
                    oldPrice: '30 000₽',
                    features: [
                        '3 дня обучения (24 часа)',
                        'Теоретические материалы',
                        'Практика на моделях',
                        'Сертификат по окончании',
                        'Базовый набор инструментов'
                    ],
                    action: 'Записаться'
                },
                advanced: {
                    title: 'Продвинутый',
                    badge: 'Популярно',
                    price: '35 000₽',
                    oldPrice: '40 000₽',
                    features: [
                        '5 дней обучения (40 часов)',
                        'Все из базового курса',
                        'Ламинирование бровей',
                        'Работа с проблемными бровями',
                        'Бизнес-планирование',
                        'Полный набор инструментов',
                        'Поддержка после обучения'
                    ],
                    action: 'Записаться'
                },
                individual: {
                    title: 'Индивидуальный',
                    badge: 'VIP',
                    price: '50 000₽',
                    oldPrice: '60 000₽',
                    features: [
                        'Все из продвинутого курса',
                        'Индивидуальный план обучения',
                        'Гибкий график занятий',
                        'Неограниченная практика',
                        'Личный ментор',
                        'Помощь в трудоустройстве',
                        'Пожизненная поддержка'
                    ],
                    action: 'Записаться'
                }
            }
        },
        
        // Портфолио
        portfolio: {
            title: 'Портфолио работ',
            subtitle: 'Примеры работ мастера и учеников',
            works: {
                work1: {
                    title: 'Классическая форма бровей',
                    description: 'Коррекция формы, окрашивание хной, создание естественного изгиба'
                },
                work2: {
                    title: 'Ламинирование бровей',
                    description: 'Выпрямление волосков, фиксация формы, долговременный результат'
                },
                work3: {
                    title: 'Архитектурные брови',
                    description: 'Создание четкой формы, прорисовка хвостика, объемное окрашивание'
                },
                work4: {
                    title: 'Естественные брови',
                    description: 'Легкая коррекция, подчеркивание естественной формы, деликатное окрашивание'
                }
            }
        },
        
        // FAQ
        faq: {
            title: 'Часто задаваемые вопросы',
            subtitle: 'Ответы на популярные вопросы о курсах',
            questions: {
                q1: {
                    question: 'Нужны ли базовые знания для начала обучения?',
                    answer: 'Нет, наши курсы рассчитаны на обучение с нуля. Мы начинаем с самых основ и постепенно переходим к сложным техникам.'
                },
                q2: {
                    question: 'Сколько человек в группе?',
                    answer: 'Максимум 4 человека в группе, что обеспечивает индивидуальный подход к каждому ученику.'
                },
                q3: {
                    question: 'Предоставляете ли вы материалы для практики?',
                    answer: 'Да, все необходимые материалы и инструменты предоставляются во время обучения. После курса вы получаете базовый набор в подарок.'
                },
                q4: {
                    question: 'Можно ли оплатить курс в рассрочку?',
                    answer: 'Да, мы предлагаем удобную рассрочку без переплат. Первый взнос 50%, остальное можно оплатить в течение месяца.'
                },
                q5: {
                    question: 'Выдаете ли вы сертификат?',
                    answer: 'Да, по окончании курса вы получаете сертификат, который признается в салонах красоты Москвы.'
                },
                q6: {
                    question: 'Помогаете ли с трудоустройством?',
                    answer: 'Да, мы помогаем с составлением резюме, даем рекомендации и поддерживаем связь с салонами, которые ищут мастеров.'
                }
            }
        },
        
        // Контакты
        contact: {
            title: 'Готовы стать мастером по бровям?',
            description: 'Запишитесь на курс и получите скидку 15% при оплате за месяц до начала обучения',
            info: {
                phone: 'Телефон',
                email: 'Email',
                address: 'Адрес',
                workingHours: 'Режим работы'
            },
            actions: {
                call: 'Позвонить для записи',
                whatsapp: 'Написать в WhatsApp'
            },
            form: {
                title: 'Оставить заявку',
                name: 'Ваше имя',
                phone: 'Телефон',
                course: 'Выберите курс',
                courseOptions: {
                    basic: 'Базовый курс',
                    advanced: 'Продвинутый курс',
                    individual: 'Индивидуальный курс'
                },
                message: 'Дополнительная информация',
                submit: 'Отправить заявку'
            }
        },
        
        // Footer
        footer: {
            description: 'Профессиональные курсы по оформлению бровей в Москве',
            navigation: 'Навигация'
        },
        
        // Общие
        common: {
            loading: 'Загрузка...',
            error: 'Ошибка',
            success: 'Успешно',
            close: 'Закрыть',
            more: 'Подробнее',
            back: 'Назад',
            next: 'Далее'
        }
    },
    
    uk: {
        // Навігація
        nav: {
            home: 'Головна',
            about: 'Про майстра',
            program: 'Програма курсу',
            pricing: 'Тарифи',
            portfolio: 'Портфоліо',
            faq: 'FAQ',
            contact: 'Контакти'
        },
        
        // Hero секція
        hero: {
            title: 'Курс "БРОВИСТ З НУЛЯ"',
            subtitle: 'Станьте професійним майстром по бровах! Навчання з нуля, практичні заняття, індивідуальний підхід. Отримайте сертифікат і почніть заробляти.',
            stats: {
                experience: 'років досвіду',
                students: 'учнів',
                satisfied: 'задоволених'
            },
            actions: {
                chooseTariff: 'Обрати тариф',
                viewProgram: 'Програма курсу'
            }
        },
        
        // Про майстра
        about: {
            title: 'Про майстра',
            description: '5+ років досвіду в індустрії краси. Навчила більше 100 майстрів, які успішно працюють в салонах Москви та відкрили власні студії.',
            achievements: {
                students: 'Навчила >100 учнів по всьому світу',
                course: 'Автор курсу "БРОВИСТ З НУЛЯ"',
                brands: 'Співпраця з брендами Bronsun, FreiAVIVER',
                certified: 'Сертифікований майстер-викладач'
            },
            action: 'Перейти до програми'
        },
        
        // Програма курсу
        program: {
            title: 'Програма курсу',
            subtitle: 'Курс включає теоретичні заняття та практичні завдання з зворотним зв\'язком',
            lessons: {
                lesson1: {
                    title: 'Фундамент',
                    what: 'Що вивчаємо:',
                    topics: [
                        'Анатомія брів та обличчя',
                        'Аналіз форми обличчя',
                        'Інструменти та матеріали',
                        'Техніка безпеки'
                    ],
                    result: 'Результат:',
                    resultText: 'Розуміння основ професії, вміння аналізувати обличчя клієнта'
                },
                lesson2: {
                    title: 'Корекція',
                    what: 'Що вивчаємо:',
                    topics: [
                        'Техніки корекції пінцетом',
                        'Корекція ниткою',
                        'Створення форми брів',
                        'Робота з проблемними бровами'
                    ],
                    result: 'Результат:',
                    resultText: 'Впевнене володіння техніками корекції, створення ідеальної форми'
                },
                lesson3: {
                    title: 'Фарбування',
                    what: 'Що вивчаємо:',
                    topics: [
                        'Фарбування фарбою',
                        'Фарбування хною',
                        'Підбір кольору',
                        'Фіксація результату'
                    ],
                    result: 'Результат:',
                    resultText: 'Професійне фарбування брів з довгостроковим ефектом'
                },
                lesson4: {
                    title: 'Ламінування',
                    what: 'Що вивчаємо:',
                    topics: [
                        'Техніка ламінування',
                        'Вибір складів',
                        'Фіксація форми',
                        'Догляд після процедури'
                    ],
                    result: 'Результат:',
                    resultText: 'Створення об\'ємних, доглянутих брів з довгостроковим ефектом'
                },
                lesson5: {
                    title: 'Практика',
                    what: 'Що вивчаємо:',
                    topics: [
                        'Робота з моделями',
                        'Розбір помилок',
                        'Консультації клієнтів',
                        'Бізнес-планування'
                    ],
                    result: 'Результат:',
                    resultText: 'Готовність до роботи з клієнтами, розуміння бізнес-процесів'
                }
            }
        },
        
        // Тарифи
        pricing: {
            title: 'Тарифи курсу',
            subtitle: 'Оберіть підходящий тариф і почніть свій шлях у професії',
            plans: {
                basic: {
                    title: 'Базовий',
                    price: '25 000₽',
                    oldPrice: '30 000₽',
                    features: [
                        '3 дні навчання (24 години)',
                        'Теоретичні матеріали',
                        'Практика на моделях',
                        'Сертифікат по закінченні',
                        'Базовий набір інструментів'
                    ],
                    action: 'Записатися'
                },
                advanced: {
                    title: 'Просунутий',
                    badge: 'Популярно',
                    price: '35 000₽',
                    oldPrice: '40 000₽',
                    features: [
                        '5 днів навчання (40 годин)',
                        'Все з базового курсу',
                        'Ламінування брів',
                        'Робота з проблемними бровами',
                        'Бізнес-планування',
                        'Повний набір інструментів',
                        'Підтримка після навчання'
                    ],
                    action: 'Записатися'
                },
                individual: {
                    title: 'Індивідуальний',
                    badge: 'VIP',
                    price: '50 000₽',
                    oldPrice: '60 000₽',
                    features: [
                        'Все з просунутого курсу',
                        'Індивідуальний план навчання',
                        'Гнучкий графік занять',
                        'Необмежена практика',
                        'Особистий ментор',
                        'Допомога в працевлаштуванні',
                        'Довічна підтримка'
                    ],
                    action: 'Записатися'
                }
            }
        },
        
        // Портфоліо
        portfolio: {
            title: 'Портфоліо робіт',
            subtitle: 'Приклади робіт майстра та учнів',
            works: {
                work1: {
                    title: 'Класична форма брів',
                    description: 'Корекція форми, фарбування хною, створення природного вигину'
                },
                work2: {
                    title: 'Ламінування брів',
                    description: 'Випрямлення волосків, фіксація форми, довгостроковий результат'
                },
                work3: {
                    title: 'Архітектурні брови',
                    description: 'Створення чіткої форми, прорисовка хвостика, об\'ємне фарбування'
                },
                work4: {
                    title: 'Природні брови',
                    description: 'Легка корекція, підкреслення природної форми, делікатне фарбування'
                }
            }
        },
        
        // FAQ
        faq: {
            title: 'Часто задавані питання',
            subtitle: 'Відповіді на популярні питання про курси',
            questions: {
                q1: {
                    question: 'Чи потрібні базові знання для початку навчання?',
                    answer: 'Ні, наші курси розраховані на навчання з нуля. Ми починаємо з самих основ і поступово переходимо до складних технік.'
                },
                q2: {
                    question: 'Скільки людей у групі?',
                    answer: 'Максимум 4 людини в групі, що забезпечує індивідуальний підхід до кожного учня.'
                },
                q3: {
                    question: 'Чи надаєте ви матеріали для практики?',
                    answer: 'Так, всі необхідні матеріали та інструменти надаються під час навчання. Після курсу ви отримуєте базовий набір в подарунок.'
                },
                q4: {
                    question: 'Чи можна оплатити курс в розстрочку?',
                    answer: 'Так, ми пропонуємо зручну розстрочку без переплат. Перший внесок 50%, решту можна оплатити протягом місяця.'
                },
                q5: {
                    question: 'Чи видаєте ви сертифікат?',
                    answer: 'Так, по закінченні курсу ви отримуєте сертифікат, який визнається в салонах краси Москви.'
                },
                q6: {
                    question: 'Чи допомагаєте з працевлаштуванням?',
                    answer: 'Так, ми допомагаємо зі складанням резюме, даємо рекомендації та підтримуємо зв\'язок з салонами, які шукають майстрів.'
                }
            }
        },
        
        // Контакти
        contact: {
            title: 'Готові стати майстром по бровах?',
            description: 'Запишіться на курс і отримайте знижку 15% при оплаті за місяць до початку навчання',
            info: {
                phone: 'Телефон',
                email: 'Email',
                address: 'Адреса',
                workingHours: 'Режим роботи'
            },
            actions: {
                call: 'Зателефонувати для запису',
                whatsapp: 'Написати в WhatsApp'
            },
            form: {
                title: 'Залишити заявку',
                name: 'Ваше ім\'я',
                phone: 'Телефон',
                course: 'Оберіть курс',
                courseOptions: {
                    basic: 'Базовий курс',
                    advanced: 'Просунутий курс',
                    individual: 'Індивідуальний курс'
                },
                message: 'Додаткова інформація',
                submit: 'Надіслати заявку'
            }
        },
        
        // Footer
        footer: {
            description: 'Професійні курси по оформленню брів в Москві',
            navigation: 'Навігація'
        },
        
        // Загальні
        common: {
            loading: 'Завантаження...',
            error: 'Помилка',
            success: 'Успішно',
            close: 'Закрити',
            more: 'Детальніше',
            back: 'Назад',
            next: 'Далі'
        }
    },
    
    pl: {
        // Nawigacja
        nav: {
            home: 'Główna',
            about: 'O mistrzu',
            program: 'Program kursu',
            pricing: 'Cennik',
            portfolio: 'Portfolio',
            faq: 'FAQ',
            contact: 'Kontakt'
        },
        
        // Sekcja Hero
        hero: {
            title: 'Kurs "BRWIARZ OD ZERA"',
            subtitle: 'Zostań profesjonalnym mistrzem brwi! Szkolenie od podstaw, zajęcia praktyczne, indywidualne podejście. Otrzymaj certyfikat i zacznij zarabiać.',
            stats: {
                experience: 'lat doświadczenia',
                students: 'uczniów',
                satisfied: 'zadowolonych'
            },
            actions: {
                chooseTariff: 'Wybierz taryfę',
                viewProgram: 'Program kursu'
            }
        },
        
        // O mistrzu
        about: {
            title: 'O mistrzu',
            description: '5+ lat doświadczenia w branży beauty. Przeszkoliła ponad 100 mistrzów, którzy z powodzeniem pracują w salonach Moskwy i otworzyli własne studia.',
            achievements: {
                students: 'Przeszkoliła >100 uczniów na całym świecie',
                course: 'Autorka kursu "BRWIARZ OD ZERA"',
                brands: 'Współpraca z markami Bronsun, FreiAVIVER',
                certified: 'Certyfikowany mistrz-instruktor'
            },
            action: 'Przejdź do programu'
        },
        
        // Program kursu
        program: {
            title: 'Program kursu',
            subtitle: 'Kurs obejmuje zajęcia teoretyczne i praktyczne zadania z informacją zwrotną',
            lessons: {
                lesson1: {
                    title: 'Fundamenty',
                    what: 'Czego się uczymy:',
                    topics: [
                        'Anatomia brwi i twarzy',
                        'Analiza kształtu twarzy',
                        'Narzędzia i materiały',
                        'Technika bezpieczeństwa'
                    ],
                    result: 'Rezultat:',
                    resultText: 'Zrozumienie podstaw zawodu, umiejętność analizy twarzy klienta'
                },
                lesson2: {
                    title: 'Korekta',
                    what: 'Czego się uczymy:',
                    topics: [
                        'Techniki korekty pęsetą',
                        'Korekta nitką',
                        'Tworzenie kształtu brwi',
                        'Praca z problematycznymi brwiami'
                    ],
                    result: 'Rezultat:',
                    resultText: 'Pewne posługiwanie się technikami korekty, tworzenie idealnego kształtu'
                },
                lesson3: {
                    title: 'Koloryzacja',
                    what: 'Czego się uczymy:',
                    topics: [
                        'Koloryzacja farbą',
                        'Koloryzacja henną',
                        'Dobór koloru',
                        'Utrwalenie rezultatu'
                    ],
                    result: 'Rezultat:',
                    resultText: 'Profesjonalna koloryzacja brwi z długotrwałym efektem'
                },
                lesson4: {
                    title: 'Laminacja',
                    what: 'Czego się uczymy:',
                    topics: [
                        'Technika laminacji',
                        'Wybór preparatów',
                        'Utrwalenie kształtu',
                        'Pielęgnacja po zabiegu'
                    ],
                    result: 'Rezultat:',
                    resultText: 'Tworzenie objętościowych, zadbanych brwi z długotrwałym efektem'
                },
                lesson5: {
                    title: 'Praktyka',
                    what: 'Czego się uczymy:',
                    topics: [
                        'Praca z modelami',
                        'Analiza błędów',
                        'Konsultacje z klientami',
                        'Planowanie biznesowe'
                    ],
                    result: 'Rezultat:',
                    resultText: 'Gotowość do pracy z klientami, zrozumienie procesów biznesowych'
                }
            }
        },
        
        // Cennik
        pricing: {
            title: 'Cennik kursu',
            subtitle: 'Wybierz odpowiednią taryfę i rozpocznij swoją drogę w zawodzie',
            plans: {
                basic: {
                    title: 'Podstawowy',
                    price: '25 000₽',
                    oldPrice: '30 000₽',
                    features: [
                        '3 dni szkolenia (24 godziny)',
                        'Materiały teoretyczne',
                        'Praktyka na modelach',
                        'Certyfikat po ukończeniu',
                        'Podstawowy zestaw narzędzi'
                    ],
                    action: 'Zapisz się'
                },
                advanced: {
                    title: 'Zaawansowany',
                    badge: 'Popularne',
                    price: '35 000₽',
                    oldPrice: '40 000₽',
                    features: [
                        '5 dni szkolenia (40 godzin)',
                        'Wszystko z kursu podstawowego',
                        'Laminacja brwi',
                        'Praca z problematycznymi brwiami',
                        'Planowanie biznesowe',
                        'Pełny zestaw narzędzi',
                        'Wsparcie po szkoleniu'
                    ],
                    action: 'Zapisz się'
                },
                individual: {
                    title: 'Indywidualny',
                    badge: 'VIP',
                    price: '50 000₽',
                    oldPrice: '60 000₽',
                    features: [
                        'Wszystko z kursu zaawansowanego',
                        'Indywidualny plan szkolenia',
                        'Elastyczny harmonogram zajęć',
                        'Nieograniczona praktyka',
                        'Osobisty mentor',
                        'Pomoc w zatrudnieniu',
                        'Dożywotnie wsparcie'
                    ],
                    action: 'Zapisz się'
                }
            }
        },
        
        // Portfolio
        portfolio: {
            title: 'Portfolio prac',
            subtitle: 'Przykłady prac mistrza i uczniów',
            works: {
                work1: {
                    title: 'Klasyczny kształt brwi',
                    description: 'Korekta kształtu, koloryzacja henną, tworzenie naturalnego łuku'
                },
                work2: {
                    title: 'Laminacja brwi',
                    description: 'Prostowanie włosków, utrwalenie kształtu, długotrwały rezultat'
                },
                work3: {
                    title: 'Brwi architektoniczne',
                    description: 'Tworzenie wyraźnego kształtu, rysowanie ogonka, objętościowa koloryzacja'
                },
                work4: {
                    title: 'Naturalne brwi',
                    description: 'Lekka korekta, podkreślenie naturalnego kształtu, delikatna koloryzacja'
                }
            }
        },
        
        // FAQ
        faq: {
            title: 'Często zadawane pytania',
            subtitle: 'Odpowiedzi na popularne pytania o kursy',
            questions: {
                q1: {
                    question: 'Czy potrzebna jest podstawowa wiedza do rozpoczęcia szkolenia?',
                    answer: 'Nie, nasze kursy są przeznaczone dla osób zaczynających od zera. Zaczynamy od podstaw i stopniowo przechodzimy do zaawansowanych technik.'
                },
                q2: {
                    question: 'Ile osób w grupie?',
                    answer: 'Maksymalnie 4 osoby w grupie, co zapewnia indywidualne podejście do każdego ucznia.'
                },
                q3: {
                    question: 'Czy zapewniacie materiały do praktyki?',
                    answer: 'Tak, wszystkie niezbędne materiały i narzędzia są zapewnione podczas szkolenia. Po kursie otrzymujesz podstawowy zestaw w prezencie.'
                },
                q4: {
                    question: 'Czy można zapłacić za kurs w ratach?',
                    answer: 'Tak, oferujemy wygodne raty bez dodatkowych kosztów. Pierwsza wpłata 50%, resztę można zapłacić w ciągu miesiąca.'
                },
                q5: {
                    question: 'Czy wydajecie certyfikat?',
                    answer: 'Tak, po ukończeniu kursu otrzymujesz certyfikat, który jest uznawany w salonach piękności w Moskwie.'
                },
                q6: {
                    question: 'Czy pomagacie w zatrudnieniu?',
                    answer: 'Tak, pomagamy w przygotowaniu CV, dajemy rekomendacje i utrzymujemy kontakt z salonami, które szukają mistrzów.'
                }
            }
        },
        
        // Kontakt
        contact: {
            title: 'Gotowy zostać mistrzem brwi?',
            description: 'Zapisz się na kurs i otrzymaj 15% zniżki przy płatności miesiąc przed rozpoczęciem szkolenia',
            info: {
                phone: 'Telefon',
                email: 'Email',
                address: 'Adres',
                workingHours: 'Godziny pracy'
            },
            actions: {
                call: 'Zadzwoń, aby się zapisać',
                whatsapp: 'Napisz na WhatsApp'
            },
            form: {
                title: 'Zostaw zgłoszenie',
                name: 'Twoje imię',
                phone: 'Telefon',
                course: 'Wybierz kurs',
                courseOptions: {
                    basic: 'Kurs podstawowy',
                    advanced: 'Kurs zaawansowany',
                    individual: 'Kurs indywidualny'
                },
                message: 'Dodatkowe informacje',
                submit: 'Wyślij zgłoszenie'
            }
        },
        
        // Footer
        footer: {
            description: 'Profesjonalne kursy kształtowania brwi w Moskwie',
            navigation: 'Nawigacja'
        },
        
        // Ogólne
        common: {
            loading: 'Ładowanie...',
            error: 'Błąd',
            success: 'Sukces',
            close: 'Zamknij',
            more: 'Więcej',
            back: 'Wstecz',
            next: 'Dalej'
        }
    }
};

// Функция для получения текущего языка
export function getCurrentLanguage() {
    return localStorage.getItem('language') || 'ru';
}

// Функция для установки языка
export function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
}

// Функция для получения перевода
export function t(key) {
    const lang = getCurrentLanguage();
    const keys = key.split('.');
    let value = locales[lang];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key} for language: ${lang}`);
            return key;
        }
    }
    
    return value;
}
