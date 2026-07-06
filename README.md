# Собачники — промо-сайт

Статический промо-лендинг для мобильного приложения [Собачники](https://sobachniki.app) (Flutter, iOS + Android).

## Стек

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- Деплой: **Vercel**

## Страницы

| Путь | Описание |
|------|----------|
| `/` | Главная: hero, возможности, FAQ, CTA |
| `/privacy` | Политика конфиденциальности |
| `/delete-account` | Инструкция по удалению аккаунта |

## Быстрый старт

```bash
cd website
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm start
```

## Деплой

### GitHub Pages (основной)

Сайт автоматически публикуется при push в `main` через GitHub Actions.

- **URL:** https://surgezxc.github.io/sobachniki/
- Workflow: `.github/workflows/deploy-website.yml`

Локальная проверка сборки для GitHub Pages:

```bash
cd website
NEXT_PUBLIC_BASE_PATH=/sobachniki NEXT_PUBLIC_SITE_URL=https://surgezxc.github.io/sobachniki npm run build
npx serve out
```

### Vercel (альтернатива)

```bash
cd website
vercel
```

Root directory: `website`. Для Vercel не задавайте `NEXT_PUBLIC_BASE_PATH`.

## Скриншоты

Все скриншоты в `public/screenshots/` обрезаны сверху (~4.5%) — убран системный статус-бар (время, зарядка).

Добавить новый скрин:

```bash
# положить файл в public/screenshots/
python3 scripts/crop-screenshots.py public/screenshots/новый-скрин.png
# добавить запись в src/lib/constants.ts → SCREENSHOTS
```

На сайте скрины показываются в тёмной iPhone-рамке с Dynamic Island.

- [ ] Заменить `SITE.url` и `SITE.contactEmail` в `src/lib/constants.ts`
- [ ] Добавить реальные ссылки App Store / Google Play в `STORE_LINKS` (`src/lib/constants.ts`)
- [ ] Заменить placeholder-скриншоты на реальные изображения в `public/`
- [ ] Обновить `public/favicon.svg` и `public/og-image.svg`

## Структура

```
website/
├── public/              # favicon, OG-image
├── src/
│   ├── app/             # страницы, layout, SEO (sitemap, robots)
│   ├── components/      # UI-компоненты
│   └── lib/constants.ts # тексты, ссылки, данные
├── package.json
└── README.md
```

## Версия приложения

0.2.0 · Bundle ID: `ru.sobachniki.app`
