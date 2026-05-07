import type { Lang, SiteCopy } from './types';

export const SITE_COPY: Record<Lang, SiteCopy> = {
  en: {
    dir: 'ltr',
    nav: { about: 'About', projects: 'Projects', driving: 'Driving exams', resume: 'Resume' },
    hero: {
      eyebrow: 'IliyaBrook · github.com/IliyaBrook',
      name: 'Iliya Brook.',
      tagline: 'Frontend / full-stack developer based in Tel-Aviv. I work in React, Next.js and Node.js.',
      location: 'Tel‑Aviv, Israel',
      role: 'frontend / full-stack',
    },
    sections: { about: 'ABOUT', projects: 'PROJECTS', driving: 'DRIVING EXAMS', resume: 'RESUME' },
    aboutLong: [
      'I build interfaces — mostly with React and Next.js — and I keep a small bench of open-source tools on the side, mostly for Linux because that’s what I work on.',
      'My day-to-day is full-stack: TypeScript on the front, Node or Python on the back, Postgres in the middle, Docker holding the whole thing together. Before web I spent a few years in network engineering at Bezeq.',
    ],
    projectsPage: {
      heading: 'Projects',
      sub: 'A small selection of things I keep maintained.',
      stats: { stars: 'stars', forks: 'forks' },
      list: [
        { repo: 'figma-linux', desc: 'Unofficial Figma desktop client for Linux. Electron repackage with X11 / Wayland support.', tags: ['electron', 'typescript', 'linux'], stats: true, stars: 8240, forks: 412 },
        { repo: 'InstantVoiceTranslate', desc: 'Android real-time voice translator. On-device ASR (Sherpa-ONNX) + offline NLLB-200 translation.', tags: ['kotlin', 'compose', 'onnx'], stats: true, stars: 96, forks: 8 },
        { repo: 'nika_brook', desc: 'Personal site for opera singer Veronika Brook. Live at veronikabrook.com.', tags: ['next.js', 'react', 'typescript'], stats: false, live: 'veronikabrook.com' },
      ],
    },
    driving: {
      heading: 'Driving exams',
      sub: 'Three small practice apps for a heavy-truck driving school in Israel. Replacing 400-question Word documents with something you can study on a phone.',
      list: [
        { name: 'Safe driving', he: 'נהיגה נכונה', desc: 'Theory bank — full question pool with explanations.' },
        { name: 'Loading & unloading', he: 'טעינה פריקה', desc: 'Cargo handling rules drill, with diagrams.' },
        { name: 'Road accidents', he: 'תאונות דרכים', desc: 'Incident scenarios — what to do, who to call.' },
      ],
    },
    resume: {
      heading: 'Resume',
      sub: 'Iliya Brook · Frontend / full-stack developer · Tel-Aviv, Israel',
      contact: { phone: '+972 54 930 3336', email: 'iliyabrook1987@gmail.com', linkedin: 'linkedin.com/in/iliya-brook' },
      sections: { education: 'Education', experience: 'Professional experience', skills: 'Skills' },
      education: [
        { school: 'InterBit', degree: 'Cisco Certified Network Associate (CCNA)' },
        { school: 'Hexlet Online Programming School', degree: 'Full-Stack Development' },
        { school: 'John Bryce College', degree: 'Cyber Security' },
      ],
      experience: [
        {
          company: 'Freelancer Technology', role: 'Full Stack Developer', loc: 'Remote', period: 'Jan 2024 — Present',
          bullets: [
            'Diverse client projects: features and bug fixes on apps built with React, Node.js and MongoDB.',
            'Debugged production issues across the full stack — root-causing and shipping reliable fixes.',
            'Responsive cross-platform UIs with Tailwind and Bootstrap.',
          ],
        },
        {
          company: 'Upwork', role: 'Freelance Full-Stack Developer', loc: 'Tel-Aviv', period: 'Jan 2024 — Present',
          bullets: [
            'Web projects across industries — front-end, back-end, API integrations, database management.',
            'Stack: React, Node.js, TypeScript, MongoDB.',
          ],
        },
        {
          company: 'Progeeks LTD', role: 'Full Stack Developer', loc: 'Tel-Aviv', period: 'Jan 2021 — Dec 2024',
          bullets: [
            'Led full rewrite of legacy Django CRM into React, Node.js, GraphQL and MySQL.',
            'Migrated infrastructure from VPS to GKE; built-in autoscaling improved peak performance 20–45%.',
            'Drove gradual TypeScript migration of a legacy React codebase with zero downtime.',
            'Replaced Twilio with direct WhatsApp Cloud API after completing Meta business verification — reduced cost and latency.',
          ],
        },
        {
          company: 'Bezeq LTD', role: 'Network Support Engineer', loc: 'Tel-Aviv', period: 'Jan 2018 — Dec 2021',
          bullets: [
            'Network support for field technicians; configured BGP, OSPF and routing protocols.',
            'Firewalls, VPNs and security policies on Linux systems.',
            'TCP/IP diagnostics to resolve incidents and minimise downtime.',
          ],
        },
      ],
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'GraphQL', 'REST', 'Redux', 'Svelte', 'Nest.js', 'Express', 'HTML/CSS', 'SCSS', 'MongoDB', 'Postgres', 'MySQL', 'Docker', 'Kubernetes', 'GCP', 'AWS', 'Linux', 'Python', 'Go', 'Git'],
    },
    footer: { copyright: '© 2026 Iliya Brook' },
  },

  ru: {
    dir: 'ltr',
    nav: { about: 'Обо мне', projects: 'Проекты', driving: 'Экзамены по вождению', resume: 'Резюме' },
    hero: {
      eyebrow: 'IliyaBrook · github.com/IliyaBrook',
      name: 'Илья Брук.',
      tagline: 'Фронтенд / фул‑стек разработчик из Тель‑Авива. Работаю с React, Next.js и Node.js.',
      location: 'Тель‑Авив, Израиль',
      role: 'фронтенд / фул‑стек',
    },
    sections: { about: 'О СЕБЕ', projects: 'ПРОЕКТЫ', driving: 'ЭКЗАМЕНЫ ПО ВОЖДЕНИЮ', resume: 'РЕЗЮМЕ' },
    aboutLong: [
      'Я пишу интерфейсы — в основном на React и Next.js — и держу небольшую полку open‑source инструментов, в основном для Linux, потому что сам на нём работаю.',
      'По работе фул‑стек: TypeScript на фронте, Node или Python на бэке, Postgres посередине, Docker держит всё вместе. До веба несколько лет был сетевым инженером в Bezeq.',
    ],
    projectsPage: {
      heading: 'Проекты',
      sub: 'Подборка того, что я поддерживаю.',
      stats: { stars: 'звёзд', forks: 'форков' },
      list: [
        { repo: 'figma-linux', desc: 'Неофициальный Figma desktop‑клиент для Linux. Electron‑репак с поддержкой X11 / Wayland.', tags: ['electron', 'typescript', 'linux'], stats: true, stars: 8240, forks: 412 },
        { repo: 'InstantVoiceTranslate', desc: 'Android‑переводчик голоса в реальном времени. ASR на устройстве (Sherpa‑ONNX) + офлайн NLLB‑200.', tags: ['kotlin', 'compose', 'onnx'], stats: true, stars: 96, forks: 8 },
        { repo: 'nika_brook', desc: 'Сайт оперной певицы Вероники Брук. В продакшене — veronikabrook.com.', tags: ['next.js', 'react', 'typescript'], stats: false, live: 'veronikabrook.com' },
      ],
    },
    driving: {
      heading: 'Экзамены по вождению',
      sub: 'Три небольших тренажёра для израильской автошколы тяжёлых грузовиков. Замена 400‑вопросных Word‑файлов на то, с чем можно готовиться с телефона.',
      list: [
        { name: 'Безопасное вождение', he: 'נהיגה נכונה', desc: 'Теоретический банк — все вопросы с пояснениями.' },
        { name: 'Погрузка / разгрузка', he: 'טעינה פריקה', desc: 'Тренажёр правил перевозки груза с диаграммами.' },
        { name: 'ДТП', he: 'תאונות דרכים', desc: 'Сценарии аварий — что делать и кому звонить.' },
      ],
    },
    resume: {
      heading: 'Резюме',
      sub: 'Илья Брук · фронтенд / фул‑стек разработчик · Тель‑Авив',
      contact: { phone: '+972 54 930 3336', email: 'iliyabrook1987@gmail.com', linkedin: 'linkedin.com/in/iliya-brook' },
      sections: { education: 'Образование', experience: 'Опыт работы', skills: 'Навыки' },
      education: [
        { school: 'InterBit', degree: 'Cisco Certified Network Associate (CCNA)' },
        { school: 'Hexlet', degree: 'Full‑Stack разработка' },
        { school: 'John Bryce College', degree: 'Кибербезопасность' },
      ],
      experience: [
        {
          company: 'Freelancer Technology', role: 'Full Stack Developer', loc: 'удалённо', period: 'янв 2024 — наст. время',
          bullets: [
            'Разные клиентские проекты: фичи и багфиксы в приложениях на React, Node.js и MongoDB.',
            'Дебаг продакшена сквозь весь стек — поиск корневой причины и надёжные исправления.',
            'Адаптивные кросс‑платформенные интерфейсы на Tailwind и Bootstrap.',
          ],
        },
        {
          company: 'Upwork', role: 'Freelance Full‑Stack Developer', loc: 'Тель‑Авив', period: 'янв 2024 — наст. время',
          bullets: [
            'Веб‑проекты в разных индустриях: фронт, бэк, интеграции, базы.',
            'Стек: React, Node.js, TypeScript, MongoDB.',
          ],
        },
        {
          company: 'Progeeks LTD', role: 'Full Stack Developer', loc: 'Тель‑Авив', period: 'янв 2021 — дек 2024',
          bullets: [
            'Полностью переписал legacy Django‑CRM на React, Node.js, GraphQL и MySQL.',
            'Перенёс инфраструктуру с VPS на GKE; автоскейл улучшил пиковую производительность на 20–45%.',
            'Постепенная миграция legacy React‑кодовой базы на TypeScript без даунтайма.',
            'Заменил Twilio на прямой WhatsApp Cloud API после верификации в Meta — снизил расходы и задержки.',
          ],
        },
        {
          company: 'Bezeq LTD', role: 'Сетевой инженер поддержки', loc: 'Тель‑Авив', period: 'янв 2018 — дек 2021',
          bullets: [
            'Сетевая поддержка полевых техников; настройка BGP, OSPF и протоколов маршрутизации.',
            'Firewalls, VPN и security‑политики на Linux.',
            'Диагностика TCP/IP — устранение инцидентов и сокращение даунтайма.',
          ],
        },
      ],
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'GraphQL', 'REST', 'Redux', 'Svelte', 'Nest.js', 'Express', 'HTML/CSS', 'SCSS', 'MongoDB', 'Postgres', 'MySQL', 'Docker', 'Kubernetes', 'GCP', 'AWS', 'Linux', 'Python', 'Go', 'Git'],
    },
    footer: { copyright: '© 2026 Илья Брук' },
  },

  he: {
    dir: 'rtl',
    nav: { about: 'אודות', projects: 'פרויקטים', driving: 'מבחני נהיגה', resume: 'קורות חיים' },
    hero: {
      eyebrow: 'IliyaBrook · github.com/IliyaBrook',
      name: 'איליה ברוק.',
      tagline: 'מפתח פרונטאנד / פול‑סטאק מתל‑אביב. עובד עם React, Next.js ו‑Node.js.',
      location: 'תל‑אביב, ישראל',
      role: 'פרונטאנד / פול‑סטאק',
    },
    sections: { about: 'אודות', projects: 'פרויקטים', driving: 'מבחני נהיגה', resume: 'קורות חיים' },
    aboutLong: [
      'אני בונה ממשקים — בעיקר עם React ו‑Next.js — ושומר בצד מדף קטן של כלי קוד פתוח, רובם ללינוקס.',
      'בעבודה פול‑סטאק: TypeScript בפרונט, Node או Python בבק, Postgres באמצע, Docker מחזיק הכל. לפני הווב הייתי כמה שנים מהנדס רשת בבזק.',
    ],
    projectsPage: {
      heading: 'פרויקטים',
      sub: 'מבחר קטן של דברים שאני מתחזק.',
      stats: { stars: 'כוכבים', forks: 'פורקים' },
      list: [
        { repo: 'figma-linux', desc: 'לקוח דסקטופ של Figma ללינוקס. אריזה מחדש של Electron עם תמיכה ב‑X11 / Wayland.', tags: ['electron', 'typescript', 'linux'], stats: true, stars: 8240, forks: 412 },
        { repo: 'InstantVoiceTranslate', desc: 'מתרגם קול בזמן אמת לאנדרואיד. זיהוי דיבור על המכשיר (Sherpa‑ONNX) + תרגום אופליין NLLB‑200.', tags: ['kotlin', 'compose', 'onnx'], stats: true, stars: 96, forks: 8 },
        { repo: 'nika_brook', desc: 'אתר אישי לזמרת האופרה ורוניקה ברוק. בפרודקשן — veronikabrook.com.', tags: ['next.js', 'react', 'typescript'], stats: false, live: 'veronikabrook.com' },
      ],
    },
    driving: {
      heading: 'מבחני נהיגה',
      sub: 'שלוש אפליקציות תרגול קטנות לבית ספר לנהיגת משאיות כבדות. תחליף לקבצי Word עם 400 שאלות — אפשר ללמוד מהטלפון.',
      list: [
        { name: 'נהיגה נכונה', he: 'נהיגה נכונה', desc: 'בנק תאוריה — מאגר שאלות מלא עם הסברים.' },
        { name: 'טעינה ופריקה', he: 'טעינה ופריקה', desc: 'תרגול נהלי טעינה ופריקה, עם תרשימים.' },
        { name: 'תאונות דרכים', he: 'תאונות דרכים', desc: 'תרחישי תאונות — מה לעשות, למי להתקשר.' },
      ],
    },
    resume: {
      heading: 'קורות חיים',
      sub: 'איליה ברוק · מפתח פרונטאנד / פול‑סטאק · תל‑אביב',
      contact: { phone: '+972 54 930 3336', email: 'iliyabrook1987@gmail.com', linkedin: 'linkedin.com/in/iliya-brook' },
      sections: { education: 'השכלה', experience: 'ניסיון מקצועי', skills: 'כישורים' },
      education: [
        { school: 'InterBit', degree: 'Cisco Certified Network Associate (CCNA)' },
        { school: 'Hexlet', degree: 'פיתוח פול‑סטאק' },
        { school: 'John Bryce College', degree: 'אבטחת סייבר' },
      ],
      experience: [
        {
          company: 'Freelancer Technology', role: 'Full Stack Developer', loc: 'מרחוק', period: 'ינו 2024 — היום',
          bullets: [
            'פרויקטי לקוחות מגוונים: פיצֳרים ובאגים באפליקציות React, Node.js ו‑MongoDB.',
            'דיבוג פרודקשן על כל הסטאק — איתור שורש הבעיה ותיקונים יציבים.',
            'ממשקים רספונסיביים חוצי‑פלטפורמה עם Tailwind ו‑Bootstrap.',
          ],
        },
        {
          company: 'Upwork', role: 'Freelance Full-Stack Developer', loc: 'תל‑אביב', period: 'ינו 2024 — היום',
          bullets: [
            'פרויקטי ווב במגוון תעשייות — פרונט, בק, אינטגרציות, ניהול בסיסי נתונים.',
            'סטאק: React, Node.js, TypeScript, MongoDB.',
          ],
        },
        {
          company: 'Progeeks LTD', role: 'Full Stack Developer', loc: 'תל‑אביב', period: 'ינו 2021 — דצמ 2024',
          bullets: [
            'הובלת שכתוב מלא של Django CRM ל‑React, Node.js, GraphQL ו‑MySQL.',
            'הגירת תשתית מ‑VPS ל‑GKE; אוטו‑סקיילינג שיפר ביצועי שיא ב‑20–45%.',
            'הובלתי מיגרציה הדרגתית של React legacy ל‑TypeScript ללא השבתה.',
            'החלפתי Twilio ב‑WhatsApp Cloud API ישיר אחרי אימות עסקי ב‑Meta — הוזיל עלות והוריד השהייה.',
          ],
        },
        {
          company: 'Bezeq LTD', role: 'מהנדס תמיכת רשת', loc: 'תל‑אביב', period: 'ינו 2018 — דצמ 2021',
          bullets: [
            'תמיכת רשת לטכנאי שטח; קונפיגורציית BGP, OSPF ופרוטוקולי ניתוב.',
            'חומות אש, VPN ומדיניות אבטחה על Linux.',
            'אבחון TCP/IP — פתרון תקלות וצמצום השבתה.',
          ],
        },
      ],
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'GraphQL', 'REST', 'Redux', 'Svelte', 'Nest.js', 'Express', 'HTML/CSS', 'SCSS', 'MongoDB', 'Postgres', 'MySQL', 'Docker', 'Kubernetes', 'GCP', 'AWS', 'Linux', 'Python', 'Go', 'Git'],
    },
    footer: { copyright: '© 2026 איליה ברוק' },
  },
};
