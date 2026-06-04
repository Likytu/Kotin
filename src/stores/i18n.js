import { defineStore } from 'pinia'

const TRANSLATIONS = {
    ru: {
        nav: { about: 'О нас', projects: 'Проекты', pricing: 'Стоимость', contacts: 'Контакты' },
        hero: {
            pre: 'Создадим ', span1: 'дизайн', mid: ' и ', span2: 'сайт', post: ' вашей мечты',
            desc: 'Создадим сайт, который отражает ваш уровень, а не просто «лишь бы работало», без тяп-ляп, «и так сойдет», а также без сюрпризов и странных компромиссов',
            btn: 'оставить заявку',
        },
        adv: {
            left: 'реализуем желания', right: 'воплощаем мечты',
            c1t: 'Результат для бизнеса', c1d: 'Создаём сайты, которые не просто хорошо выглядят, а помогают формировать доверие к вашему бренду и удерживать внимание пользователей',
            c2t: 'Чистая разработка',    c2d: 'Быстрый и адаптивный сайт с чистой разработкой, продуманной структурой, без хаоса и проблем которые обычно всплывают после запуска',
            c3t: 'Продуманный дизайн',   c3d: 'Создаём интерфейсы, где каждая деталь находится на своём месте, выглядит современно, понятно и вызывает доверие с первых секунд',
        },
        works: { title: 'Наши работы', case: 'Кейс', woomee: 'Разработка Mini App', agenda: 'Разработка дизайна и создание лендинга', tiger: 'Разработка дизайна', bot: 'Разработка дизайна Mini App' },
        calc: { title: 'Калькулятор', desc: 'Посчитаем минимальную стоимость вашего проекта для вашего удобства', sum: 'от', currency: '₽', servicesQ: 'Какие услуги вас интересуют?', servicesHint: 'Можно выбрать несколько вариантов', realizationQ: 'Какая степень реализации?', selectVariantQ: 'Какие варианты вас интересуют?' },
        option: {
            brand: { letter: 'Буквенный логотип', assoc: 'Ассоциационный логотип', combo: 'Комбинированный логотип' },
            logo: { letter: 'Буквенный логотип', assoc: 'Ассоциационный логотип', combo: 'Комбинированный логотип' },
            web_design: { full: 'Полный редизайн', ui: 'UI обновление', ux: 'UX улучшение' },
            app_design: { full: 'Полный редизайн', ui: 'UI обновление', ux: 'UX улучшение' },
            landing: { landing: 'Разработка лендинга' },
            website: { corporate: 'Корпоративный сайт', magazine: 'Интернет-магазин', portal: 'Портал' },
            shop: { shop: 'Интернет-магазин' },
            consult: { identity: 'Консультация по айдентике', design: 'Консультация по дизайну', audit_site: 'Аудит сайта', audit_app: 'Аудит приложения' }
        },
        service: { brand: 'Фирменный стиль', logo: 'Создание логотипа', web_design: 'Дизайн сайта', app_design: 'Дизайн мобильного приложения', landing: 'Разработка лендинга', website: 'Разработка сайта', shop: 'Разработка магазина', consult: 'Консультация', other: 'Другое' },
        real: { new: 'Создание', update: 'Доработка', rebrand: 'Ребрендинг' },
        meth: { letter: 'Буквенный логотип', assoc: 'Ассоциационный логотип', combo: 'Комбинированый логотип' },
        order: {
            title: 'Расскажите нам\nо вашем проекте', servicesQ: 'Какие услуги вас интересуют?', servicesHint: 'Можно выбрать несколько вариантов',
            budgetQ: 'Ваш бюджет?', budgetHint: 'Выберите один вариант',
            taskPh: 'Кратко опишите вашу задачу', opt: 'Необязательно',
            companyPh: 'Название компании', namePh: 'Ваше имя', contactPh: 'Telegram или другой контакт',
            submit: 'Отправить заявку',
            p1: 'Нажимая на кнопку, вы даёте ', pl1: 'согласие на обработку персональных данных', p2: ' и соглашаетесь с ', pl2: 'политикой конфиденциальности',
            success: 'Спасибо! Мы вскоре свяжемся с вами',
            error: 'Ошибка при отправке заявки. Попробуйте ещё раз',
        },
        budget: { b1: 'до 100 тыс. ₽', b2: '100 тыс. ₽ - 200 тыс. ₽', b3: '200 тыс. ₽ - 500 тыс. ₽', b4: '500 тыс. ₽ - 1 млн. ₽', b5: 'Я не знаю свой бюджет' },
        footer: { legal: 'Правовая информация', company: 'Индивидуальный предприниматель Толкачев Артём Алексеевич', contactsQ: 'Есть вопрос или коммерческое предложение?', phoneDesc: 'Номер для коммерческих предложений ВКонтакте/MAX', emailDesc: 'Вопросы по трудоустройству', socials: 'в социальных сетях', copyright: '© 2026. Копирование материалов запрещено' },
    },
    en: {
        nav: { about: 'About', projects: 'Projects', pricing: 'Pricing', contacts: 'Contacts' },
        hero: {
            pre: "We'll create the ", span1: 'design', mid: ' and ', span2: 'website', post: ' of your dreams',
            desc: "We'll create a website that reflects your level — not just «whatever works», without cutting corners or strange compromises",
            btn: 'leave a request',
        },
        adv: {
            left: 'we fulfill wishes', right: 'we make dreams come true',
            c1t: 'Business results',    c1d: 'We create websites that not only look great but also help build trust in your brand and retain user attention',
            c2t: 'Clean development',   c2d: 'A fast, responsive website with clean code, thoughtful structure, free from chaos and issues that typically surface after launch',
            c3t: 'Thoughtful design',   c3d: 'We create interfaces where every detail is in its place, looks modern, clear, and inspires trust from the very first seconds',
        },
        works: { title: 'Our works', case: 'Case', woomee: 'Mini App Development', agenda: 'Design & landing creation', tiger: 'Design development', bot: 'Mini App design development' },
        calc: { title: 'Calculator', desc: "We'll calculate the minimum cost of your project for your convenience", sum: 'of', currency: '$', servicesQ: 'What services interest you?', servicesHint: 'You can choose several options', realizationQ: 'What is the degree of implementation?', selectVariantQ: 'What variants interest you?' },
        option: {
            brand: { letter: 'Lettermark', assoc: 'Pictorial logo', combo: 'Combined logo' },
            logo: { letter: 'Lettermark', assoc: 'Pictorial logo', combo: 'Combined logo' },
            web_design: { full: 'Full redesign', ui: 'UI update', ux: 'UX improvement' },
            app_design: { full: 'Full redesign', ui: 'UI update', ux: 'UX improvement' },
            landing: { landing: 'Landing development' },
            website: { corporate: 'Corporate website', magazine: 'E-commerce', portal: 'Portal' },
            shop: { shop: 'E-commerce' },
            consult: { identity: 'Identity consulting', design: 'Design consulting', audit_site: 'Website audit', audit_app: 'App audit' }
        },
        service: { brand: 'Brand identity', logo: 'Logo creation', web_design: 'Website design', app_design: 'Mobile app design', landing: 'Landing page', website: 'Website development', shop: 'E-commerce development', consult: 'Consultation', other: 'Other' },
        real: { new: 'Create', update: 'Refinement', rebrand: 'Redesign' },
        meth: { letter: 'Lettermark', assoc: 'Pictorial logo', combo: 'Combined logo' },
        order: {
            title: 'Tell us\nabout your project', servicesQ: 'What services interest you?', servicesHint: 'You can choose several options',
            budgetQ: 'Your budget?', budgetHint: 'Choose one option',
            taskPh: 'Briefly describe your task', opt: 'Optional',
            companyPh: 'Company name', namePh: 'Your name', contactPh: 'Telegram or other contact',
            submit: 'Send request',
            p1: 'By clicking the button you give your ', pl1: 'consent to personal data processing', p2: ' and agree to the ', pl2: 'privacy policy',
            success: 'Thank you! We will contact you shortly',
            error: 'Error sending request. Please try again',
        },
        budget: { b1: 'up to 100k ₽', b2: '100k – 200k ₽', b3: '200k – 500k ₽', b4: '500k – 1M ₽', b5: "I don't know my budget" },
        footer: { legal: 'Legal information', company: 'Individual entrepreneur Tolkachev Artyom Alekseevich', contactsQ: 'Have a question or business proposal?', phoneDesc: 'Number for commercial proposals VKontakte/MAX', emailDesc: 'Employment inquiries', socials: 'on social media', copyright: '© 2026. Copying of materials is prohibited' },
    },
    es: {
        nav: { about: 'Sobre nosotros', projects: 'Proyectos', pricing: 'Precios', contacts: 'Contactos' },
        hero: {
            pre: 'Crearemos el ', span1: 'diseño', mid: ' y el ', span2: 'sitio web', post: ' de tus sueños',
            desc: 'Crearemos un sitio web que refleje tu nivel, no simplemente «lo que sea», sin atajos ni compromisos extraños',
            btn: 'dejar una solicitud',
        },
        adv: {
            left: 'realizamos deseos', right: 'hacemos realidad los sueños',
            c1t: 'Resultados para el negocio', c1d: 'Creamos sitios web que no solo se ven bien, sino que ayudan a generar confianza en su marca y retener la atención de los usuarios',
            c2t: 'Desarrollo limpio',           c2d: 'Un sitio rápido y adaptable con código limpio, estructura bien pensada, sin caos ni problemas que suelen surgir después del lanzamiento',
            c3t: 'Diseño reflexivo',            c3d: 'Creamos interfaces donde cada detalle está en su lugar, se ve moderno, claro e inspira confianza desde los primeros segundos',
        },
        works: { title: 'Nuestros trabajos', case: 'Caso', woomee: 'Desarrollo de Mini App', agenda: 'Diseño y creación de landing', tiger: 'Desarrollo de diseño', bot: 'Diseño de Mini App' },
        calc: { title: 'Calculadora', desc: 'Calcularemos el costo mínimo de su proyecto para su comodidad', sum: 'de', currency: '€', servicesQ: '¿Qué servicios le interesan?', servicesHint: 'Puede elegir varias opciones', realizationQ: '¿Cuál es el grado de implementación?', selectVariantQ: '¿Qué variantes le interesan?' },
        option: {
            brand: { letter: 'Logo de letras', assoc: 'Logo asociativo', combo: 'Logo combinado' },
            logo: { letter: 'Logo de letras', assoc: 'Logo asociativo', combo: 'Logo combinado' },
            web_design: { full: 'Rediseño completo', ui: 'Actualización UI', ux: 'Mejora UX' },
            app_design: { full: 'Rediseño completo', ui: 'Actualización UI', ux: 'Mejora UX' },
            landing: { landing: 'Desarrollo de landing' },
            website: { corporate: 'Sitio corporativo', magazine: 'Tienda online', portal: 'Portal' },
            shop: { shop: 'Tienda online' },
            consult: { identity: 'Consultoría de identidad', design: 'Consultoría de diseño', audit_site: 'Auditoría de sitio', audit_app: 'Auditoría de app' }
        },
        service: { brand: 'Identidad corporativa', logo: 'Creación de logo', web_design: 'Diseño web', app_design: 'Diseño de app móvil', landing: 'Landing page', website: 'Desarrollo web', shop: 'Tienda online', consult: 'Consultoría', other: 'Otro' },
        real: { new: 'Crear', update: 'Mejora', rebrand: 'Rediseño' },
        meth: { letter: 'Logo de letras', assoc: 'Logo asociativo', combo: 'Logo combinado' },
        order: {
            title: 'Cuéntanos\nsobre tu proyecto', servicesQ: '¿Qué servicios le interesan?', servicesHint: 'Puede elegir varias opciones',
            budgetQ: '¿Tu presupuesto?', budgetHint: 'Elija una opción',
            taskPh: 'Describa brevemente su tarea', opt: 'Opcional',
            companyPh: 'Nombre de la empresa', namePh: 'Su nombre', contactPh: 'Telegram u otro contacto',
            submit: 'Enviar solicitud',
            p1: 'Al hacer clic acepta ', pl1: 'el tratamiento de datos personales', p2: ' y nuestra ', pl2: 'política de privacidad',
            success: '¡Gracias! Nos pondremos en contacto pronto',
            error: 'Error al enviar la solicitud. Intenta de nuevo',
        },
        budget: { b1: 'hasta 100k ₽', b2: '100k – 200k ₽', b3: '200k – 500k ₽', b4: '500k – 1M ₽', b5: 'No sé mi presupuesto' },
        footer: { legal: 'Información legal', company: 'Empresario individual Tolkachev Artyom Alekseevich', contactsQ: '¿Tiene alguna pregunta o propuesta comercial?', phoneDesc: 'Número para propuestas VKontakte/MAX', emailDesc: 'Consultas de empleo', socials: 'en redes sociales', copyright: '© 2026. Está prohibida la copia de materiales' },
    },
}

export const SUPPORTED_LANGS = ['ru', 'en', 'es']

export const useI18nStore = defineStore('i18n', {
    state: () => ({
        lang: localStorage.getItem('lang') || 'ru',
    }),

    actions: {
        setLang(lang) {
            if (!SUPPORTED_LANGS.includes(lang)) return
            this.lang = lang
            localStorage.setItem('lang', lang)
        },

        t(path) {
            const keys = path.split('.')
            let v = TRANSLATIONS[this.lang]
            for (const k of keys) v = v?.[k]
            return v ?? path
        },
    },
})
