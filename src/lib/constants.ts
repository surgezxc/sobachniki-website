const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE = {
  name: "Собачники",
  tagline: "Всё для заботы о собаке — в одном приложении",
  description:
    "Напоминания, питание, вес, медкарта и фотоотчёты прогулок. Помощник для владельцев собак на iOS и Android.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (basePath ? `https://surgezxc.github.io${basePath}` : "http://localhost:3000"),
  version: "0.2.0",
  bundleId: "ru.sobachniki.app",
  contactEmail: "hello@sobachniki.app", // TODO: заменить на реальный email
  year: 2026,
} as const;

// TODO: заменить на реальные ссылки App Store и Google Play
export const STORE_LINKS = {
  appStore: "#",
  googlePlay: "#",
} as const;

export const NAV_LINKS = [
  { href: "/#features", label: "Возможности" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const FOOTER_LINKS = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/delete-account", label: "Удаление данных" },
] as const;

export type FeatureAccent = "tasks" | "nutrition" | "weight" | "medical" | "default";

export interface Feature {
  title: string;
  description: string;
  accent: FeatureAccent;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    title: "Напоминания",
    description:
      "Задачи на сегодня с swipe-действиями. Push за 5 минут до события — не забудете кормление, таблетку или прогулку.",
    accent: "tasks",
    icon: "bell",
  },
  {
    title: "Планировщик",
    description:
      "Календарь с предстоящими событиями и историей. Удобно планировать визиты к ветеринару и груминг.",
    accent: "tasks",
    icon: "calendar",
  },
  {
    title: "Питание",
    description:
      "Режимы корм, натуралка или смешанное. Расчёт ккал, меню на неделю, список покупок и BARF-баланс.",
    accent: "nutrition",
    icon: "bowl",
  },
  {
    title: "Журнал веса",
    description:
      "График динамики веса с возможностью редактировать записи. Следите за здоровым телосложением питомца.",
    accent: "weight",
    icon: "scale",
  },
  {
    title: "Медкарта",
    description:
      "Вакцинации, визиты к ветеринару и процедуры — всё в одном месте, без бумажных карточек.",
    accent: "medical",
    icon: "medical",
  },
  {
    title: "Фотоотчёты прогулок",
    description:
      "От одного до нескольких фото за прогулку. История и галерея — сохраняйте лучшие моменты.",
    accent: "default",
    icon: "camera",
  },
  {
    title: "AI-помощник",
    description:
      "Советы с учётом профиля вашего питомца — породы, возраста и особенностей. Не заменяет ветеринара, но помогает разобраться.",
    accent: "default",
    icon: "sparkle",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Добавьте питомца",
    description: "Укажите имя, породу, вес и дату рождения — приложение подстроится под вашу собаку.",
  },
  {
    step: 2,
    title: "Настройте напоминания и питание",
    description: "Создайте расписание кормлений, прогулок и процедур. Выберите режим питания.",
  },
  {
    step: 3,
    title: "Следите за здоровьем",
    description: "Записывайте вес, визиты к вету и прогулки. Вся история — под рукой.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Бесплатно ли приложение?",
    answer:
      "Да, базовые функции бесплатны: профили питомцев, напоминания, журнал веса, медкарта и фотоотчёты. AI-помощник может быть доступен с ограничениями — подробности внутри приложения.",
  },
  {
    question: "Где хранятся данные?",
    answer:
      "Профили, напоминания, вес и медкарта хранятся в облаке Firebase Firestore и привязаны к вашему аккаунту. Фото прогулок остаются только на вашем устройстве.",
  },
  {
    question: "Переносятся ли фото при смене телефона?",
    answer:
      "Облачные данные (профиль, напоминания, вес, медкарта) синхронизируются при входе в аккаунт на новом устройстве. Фото прогулок хранятся локально и не переносятся автоматически.",
  },
  {
    question: "Сколько питомцев можно добавить?",
    answer:
      "Несколько — удобно, если у вас больше одной собаки или вы временно ухаживаете за чужим питомцем. Переключайтесь между профилями в один тап.",
  },
  {
    question: "Нужен ли интернет?",
    answer:
      "Для синхронизации и входа в аккаунт нужен интернет. Просмотр уже загруженных данных и локальные фото прогулок доступны офлайн.",
  },
  {
    question: "Как удалить аккаунт?",
    answer:
      "Откройте приложение → Профиль → Конфиденциальность → «Удалить аккаунт и все данные». Подробная инструкция — на странице удаления данных.",
  },
] as const;

export const SCREENSHOTS = [
  {
    src: "/screenshots/emergency-vet.png",
    alt: "Скорая ветпомощь: ближайшие клиники, звонок и маршрут",
    caption: "Скорая ветпомощь",
  },
  {
    src: "/screenshots/nutrition-barf.png",
    alt: "Питание: суточная норма, баланс BARF и учёт порций",
    caption: "Питание и BARF",
  },
  {
    src: "/screenshots/nearby-map.png",
    alt: "Карта полезных мест: ветклиники, зоомагазины, площадки",
    caption: "Полезное рядом",
  },
  {
    src: "/screenshots/nearby-place.png",
    alt: "Детали места на карте с построением маршрута",
    caption: "Маршрут до места",
  },
] as const;

/** Высота скриншота после обрезки системного статус-бара (px). */
export const SCREENSHOT_HEIGHT = 978;
export const SCREENSHOT_WIDTH = 449;
