const BlocksInfo = [
    {
        cat: 'start',
        level: 1,
        name: "Начало <br/> бизнеса",
        title: "Начало бизнеса",
        elements: [{
            group: 'Регистрация бизнеса',
            items: [
                {
                    name: "Самозанятость (НПД)",
                    price: 'Бесплатно',
                    active: true,
                    wait: false,
                },
                {
                    name: "Регистрация ИП",
                    price: 'Бесплатно',
                    active: true,
                    wait: false,
                },
                {
                    name: "Регистрация ООО",
                    price: 'Бесплатно',
                    active: true,
                    wait: false,
                },
                {
                    name: "Регистрация АО",
                    price: 'от 10 000 ₽',
                    active: true,
                    wait: true,
                },
                {
                    name: "Регистрация ЗАО",
                    price: 'от 20 000 ₽',
                    active: true,
                    wait: true,
                },
                {
                    name: "Регистрация НАО",
                    price: 'от 25 000 ₽',
                    active: true,
                    wait: true,
                },

            ]
        },
            {
                group: 'Дополнительные услуги',
                items: [
                    {
                        name: "Регистрация товарного знака",
                        price: 'от 120 000 ₽',
                        active: true,
                        wait: true,
                    },


                ]
            }]

    },
    {
        cat: 'bank',
        level: 1,
        name: "Банковские <br/>  услуги",
        title: "Банковские услуги",
        elements: [
            {
                group: 'Расчётный счёт',
                items: [
                    {
                        name: "Расчётный счёт",
                        price: 'Бесплатно',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Спецсчёт для торгов",
                        price: 'Бесплатно',
                        active: true,
                        wait: false,
                    },
                ]
            },
            {
                group: 'Кредиты',
                items: [
                    {
                        name: "Кредит для бизнеса",
                        price: 'от 2% за подбор кредита',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Кредитная карта",
                        price: 'Бесплатно',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Лизинг",
                        price: 'Бесплатно',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Банковская гарантия",
                        price: 'Бесплатно',
                        active: true,
                        wait: false,
                    },


                ]
            },
            {
                group: 'Бизнес карты',
                items: [
                    {
                        name: "Дебетовая карта",
                        price: 'от 2% за подбор кредита',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Кредитная карта",
                        price: 'Бесплатно',
                        active: true,
                        wait: false,
                    }
                ]
            }
        ]

    },
    {
        cat: 'insurance',
        level: 1,
        name: "Услуги <br/> страхования",
        title: "Услуги страхования",
        elements: [
            {
                group: 'Автострахование',
                items: [
                    {
                        name: "Страховой полис ОСАГО",
                        price: 'Индивидуальный расчёт',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Страховой полис КАСКО",
                        price: 'Индивидуальный расчёт',
                        active: true,
                        wait: false,
                    },
                ]
            },
            {
                group: 'Страхование бизнеса',
                items: [
                    {
                        name: "Страхование финансов",
                        price: 'Индивидуальный расчёт',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Страхование имущества",
                        price: 'Индивидуальный расчёт',
                        active: true,
                        wait: true,
                    },
                    {
                        name: "Страхование грузов",
                        price: 'Индивидуальный расчёт',
                        active: true,
                        wait: true,
                    },
                    {
                        name: "Жизнь и здоровье",
                        price: 'Индивидуальный расчёт',
                        active: true,
                        wait: true,
                    },


                ]
            },
        ]

    },
    {
        cat: 'develop',
        level: 1,
        name: "Отдел <br/> разработки",
        title: "Отдел разработки",
        elements: [
            {
                group: 'Интернет-проекты',
                items: [
                    {
                        name: "Лендинг пейдж",
                        price: 'от 42 500 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Корпоративный сайт",
                        price: 'от 87 900 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Новостной блог",
                        price: 'от 99 400 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Интернет магазин",
                        price: 'от 113 990 ₽',
                        active: true,
                        wait: false,
                    },
                ]
            },
            {
                group: 'Програмное обеспечение',
                items: [
                    {
                        name: "Мобильное приложение",
                        price: 'от 360 000 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Декстопные приложения",
                        price: 'от 360 000 ₽',
                        active: true,
                        wait: false,
                    },
                ]
            },
        ]

    },
    {
        cat: 'marketing',
        level: 1,
        name: "Digital -<br/> маркетинг",
        title: "Digital-маркетинг",
        elements: [
            {
                group: 'Интернет-реклама',
                items: [
                    {
                        name: "Контекстная реклама",
                        price: 'от 10 000 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "SMM-маркетинг",
                        price: 'от 15 000 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "SEO-продвижение",
                        price: 'от 18 990 ₽',
                        active: true,
                        wait: false,
                    },
                ]
            },
            {
                group: 'Медийная реклама',
                items: [
                    {
                        name: "Наружная реклама и интерьерная реклама",
                        price: 'от 2 500 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Широкоформантая и интерьерная реклама",
                        price: 'от 2 500 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Брендирование автотранспорта",
                        price: 'от 2 500 ₽',
                        active: true,
                        wait: false,
                    },
                ]
            },
            {
                group: 'Радио реклама',
                items: [
                    {
                        name: "Радио реклама",
                        price: 'от 30 000 ₽',
                        active: true,
                        wait: false,
                    },
                ]
            },
        ]

    },
    {
        cat: 'creative',
        level: 1,
        name: "Креативный<br/>отдел",
        title: "Креативный отдел",
        elements: [
            {
                group: 'Дизайн',
                items: [
                    {
                        name: "Разработка дизайна",
                        price: 'от 1 500 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Наружная реклама",
                        price: 'от 1 000 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Типография",
                        price: 'от 1 000 ₽',
                        active: true,
                        wait: false,
                    },
                ]
            },
        ]

    },
    {
        cat: 'provision',
        level: 1,
        name: "Обеспечение<br/>бизнеса",
        title: "Обеспечение бизнеса",
        elements: [
            {
                group: 'Программное обеспечение',
                items: [
                    {
                        cat: 'portal',
                        level: 2,
                        name: "Корпоративный <br/> портал",
                        title: "Корпоративный портал",
                        price: 'от 1 990 ₽',
                        active: true,
                        wait: false,
                        elements: [{
                            group: 'Корпоративный портал',
                            items: [
                                {
                                    cat: 'bitra',
                                    level: 3,
                                    name: "Битрикс 24",
                                    title: "Битрикс 24",
                                    price: 'от 23 880 ₽',
                                    active: true,
                                    wait: false,
                                    elements: [{
                                        group: 'Битрикс 24',
                                        items: [
                                            {
                                                cat: 'onlaco',
                                                level: 4,
                                                name: "Облачное решение",
                                                title: "Облачное решение",
                                                price: 'от 23 880 ₽',
                                                active: true,
                                                wait: false,
                                                elements: [
                                                    {
                                                        group: 'Облачное решение',
                                                        items: [
                                                            {
                                                                name: "Базовый",
                                                                sub_info: '5 пользователей',
                                                                price: '23 880 ₽',
                                                                active: true,
                                                                wait: false,
                                                            },
                                                            {
                                                                name: "Стандартный",
                                                                sub_info: '50 пользователей',
                                                                price: '67 080 ₽',
                                                                active: true,
                                                                wait: false,
                                                            },
                                                            {
                                                                name: "Корпоративный портал",
                                                                sub_info: '100 пользователей',
                                                                price: '134 280 ₽',
                                                                active: true,
                                                                wait: false,
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        group: 'Энтерпрайз версия',
                                                        items: [
                                                            {
                                                                name: "Энтерпрайз",
                                                                sub_info: '1 000 пользователей',
                                                                price: '326 280 ₽',
                                                                active: true,
                                                                wait: true,
                                                            },
                                                            {
                                                                name: "Энтерпрайз",
                                                                sub_info: '5 000 пользователей',
                                                                price: '326 280 ₽',
                                                                active: true,
                                                                wait: true,
                                                            },
                                                            {
                                                                name: "Энтерпрайз",
                                                                sub_info: '10 000 пользователей',
                                                                price: '526 280 ₽',
                                                                active: true,
                                                                wait: true,
                                                            },
                                                        ]
                                                    },
                                                ]
                                            },
                                            {
                                                cat: 'onlacok',
                                                level: 4,
                                                name: "Коробочное решение",
                                                title: "Коробочное решение",
                                                price: 'от 99 880 ₽',
                                                active: true,
                                                wait: false,
                                                elements: [
                                                    {
                                                        group: 'Коробочное решение',
                                                        items: [
                                                            {
                                                                name: "Интернет-магазин + CRM",
                                                                sub_info: '12 пользователей',
                                                                price: '99 000 ₽',
                                                                active: true,
                                                                wait: false,
                                                            },
                                                            {
                                                                name: "Корпоративный портал",
                                                                sub_info: '50 пользователей',
                                                                price: '139 000 ₽',
                                                                active: true,
                                                                wait: false,
                                                            },
                                                            {
                                                                name: "Корпоративный портал",
                                                                sub_info: '100 пользователей',
                                                                price: '199 000 ₽',
                                                                active: true,
                                                                wait: false,
                                                            },
                                                            {
                                                                name: "Корпоративный портал",
                                                                sub_info: '250 пользователей',
                                                                price: '299 000 ₽',
                                                                active: true,
                                                                wait: false,
                                                            },
                                                            {
                                                                name: "Корпоративный портал",
                                                                sub_info: '500 пользователей',
                                                                price: '499 000 ₽',
                                                                active: true,
                                                                wait: false,
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        group: 'Энтерпрайз версия',
                                                        items: [
                                                            {
                                                                name: "Энтерпрайз",
                                                                sub_info: '1 000 пользователей',
                                                                price: '326 280 ₽',
                                                                active: true,
                                                                wait: true,
                                                            },
                                                            {
                                                                name: "Энтерпрайз",
                                                                sub_info: '5 000 пользователей',
                                                                price: '326 280 ₽',
                                                                active: true,
                                                                wait: true,
                                                            },
                                                            {
                                                                name: "Энтерпрайз",
                                                                sub_info: '10 000 пользователей',
                                                                price: '526 280 ₽',
                                                                active: true,
                                                                wait: true,
                                                            },
                                                        ]
                                                    },
                                                ]
                                            },

                                        ]
                                    },
                                    ]
                                },
                                {
                                    name: "AMO CRM",
                                    price: 'от 5 988 ₽',
                                    active: true,
                                    wait: false,
                                },

                            ]
                        },
                        ]
                    },
                    {
                        name: "Продукты 1С",
                        price: 'от 8 890 ₽',
                        active: true,
                        wait: false,
                    },
                ]
            },
            {
                group: 'Офис',
                items: [
                    {
                        name: "Компьютерная техника",
                        price: 'от 24 990 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Серверное оборудование",
                        price: 'от 20 000 ₽',
                        active: true,
                        wait: false,
                    }
                ]
            },
            {
                group: 'Обслуживание',
                items: [
                    {
                        name: "Ремонт компьютеров",
                        price: 'от 800 ₽',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Обслуживание принтеров",
                        price: 'от 400 ₽',
                        active: true,
                        wait: false,
                    }
                ]
            },
            {
                group: 'Канцелярские товары',
                items: [
                    {
                        name: "Блокноты",
                        price: 'от 580 ₽',
                        active: true,
                        wait: false,
                    }
                ]
            },
        ]

    },
    {
        cat: 'educational',
        level: 1,
        name: "Образовательные<br/>услуги",
        title: "Образовательные услуги",
        elements: [
            {
                group: 'Образовательные услуги',
                items: [
                    {
                        name: "Непрерывное медицинское образование (НМО)",
                        price: '',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Высотные<br>работы",
                        price: '',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Пожарная <br> безопасность ",
                        price: '',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Охрана<br>труда",
                        price: '',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Промышленная<br>безопасность",
                        price: '',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Перевая<br>помощь",
                        price: '',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Гражданская оборона и чрезвычайные ситуации",
                        price: '',
                        active: true,
                        wait: false,
                    },
                    {
                        name: "Робочие<br>специальности",
                        price: '',
                        active: true,
                        wait: false,
                    },
                ]
            },

        ]

    },

];

export default BlocksInfo;