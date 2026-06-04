# Database

Папка для работы с базой данных приложения Kotin Studio.

## Структура

- `migrations.js` - единый файл миграций для инициализации и обновления БД

## Использование

### Запуск миграций (инициализация БД)

```bash
npm run migrate
```

Этот скрипт:
- Создаёт базу данных если её нет
- Создаёт все необходимые таблицы (admins, projects, leads)
- Добавляет необходимые колонки
- Удаляет устаревшие колонки
- Создаёт администратора по умолчанию:
  - Email: `admin@kotinstudio.ru`
  - Password: `admin123`
- Создаёт примеры проектов

## Схема базы данных

### Таблица `admins`
```sql
- id (INT, PRIMARY KEY)
- email (VARCHAR 255, UNIQUE)
- password (VARCHAR 255) - bcrypt hash
- created_at (TIMESTAMP)
```

### Таблица `projects`
```sql
- id (INT, PRIMARY KEY)
- name (VARCHAR 255)
- subtitle (TEXT)
- description (LONGTEXT)
- main_image (VARCHAR 255) - путь к изображению
- secondary_image (VARCHAR 255) - опционально
- gallery_images (LONGTEXT) - CSV строка путей
- position (INT) - порядок сортировки
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Таблица `leads`
```sql
- id (INT, PRIMARY KEY)
- task (TEXT)
- company (VARCHAR 255)
- name (VARCHAR 255)
- contact (VARCHAR 255) - email или телефон
- services (TEXT) - список выбранных услуг
- budget (VARCHAR 100) - ID выбранного бюджета (b1, b2, ...)
- created_at (TIMESTAMP)
```

## Безопасность

- Пароли хранятся как bcrypt hashes
- Не храни реальные пароли в коде!
- Измени пароль администратора после первого входа: `npm run update-admin-password`
