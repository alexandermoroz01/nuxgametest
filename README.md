# nuxgametest

Автотест для перевірки зміни мови інтерфейсу Wikipedia авторизованим користувачем. Playwright + TypeScript, запуск локально або в Docker.

## Тест-кейс

**TC-01: Успішне перемикання мови інтерфейсу авторизованим користувачем**

Передумови:

- є акаунт на en.wikipedia.org;
- користувач авторизований;
- поточна мова інтерфейсу — English.

| #   | Крок                                      | Очікуваний результат                                         |
| --- | ----------------------------------------- | ------------------------------------------------------------ |
| 1   | Відкрити сторінку Preferences             | Відкрилась сторінка з заголовком «Preferences»               |
| 2   | Перейти на вкладку User profile           | Відображається розділ Internationalisation                   |
| 3   | У полі Language вибрати `uk - українська` | Обрано українську мову                                       |
| 4   | Натиснути Save                            | Налаштування збережено                                       |
| 5   | Перевірити інтерфейс                      | Інтерфейс українською: заголовок «Налаштування», `lang="uk"` |

Постумова: повернути мову інтерфейсу на English.

## Налаштування

```bash
git clone https://github.com/alexandermoroz01/nuxgametest.git
cd nuxgametest
cp environment/.env.example environment/.env
```

У `environment/.env` вписати логін і пароль від Wikipedia:

```
WIKI_USERNAME=your_wikipedia_username
WIKI_PASSWORD=your_wikipedia_password
```

## Запуск у Docker

```bash
docker compose up --build
```

Після виконання HTML-звіт буде в папці `playwright-report/` на вашому комп'ютері. Відкрити: `npx playwright show-report` або просто `playwright-report/index.html` у браузері.

## Локальний запуск

```bash
npm ci
npx playwright install chromium
npx playwright test
```

Звіт там же — `playwright-report/`.
