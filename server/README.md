# Kotin Studio Backend

Node.js + Express + MySQL backend для Kotin Studio

## Быстрый старт

```bash
# Установить зависимости
npm install

# Инициализировать БД (создание таблиц, админа и примеров)
npm run migrate

# Запустить сервер
npm run dev         # Development с hot reload
npm start           # Production
```

Сервер запустится на `http://localhost:5000`

## Установка и конфигурация

### 1. Переменные окружения (.env)

```env
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=Root
DB_NAME=kotin_studio
JWT_SECRET=change_this_in_production
NODE_ENV=development
```

### 2. Инициализация базы данных

```bash
npm run migrate
```

Этот скрипт автоматически:
- Создаёт базу данных
- Создаёт все таблицы (admins, projects, leads)
- Создаёт администратора по умолчанию
- Вставляет примеры проектов

### 3. Проверка БД

```bash
npm run check-admin
```

### 4. Изменение пароля администратора

```bash
npm run update-admin-password admin@kotinstudio.ru newpassword
```

## Учётные данные по умолчанию

- Email: `admin@kotinstudio.ru`
- Password: `admin123`

⚠️ **Измените пароль в production!**

## API Endpoints

### Публичные
- `GET /api/projects` - Все проекты
- `GET /api/projects/:id` - Проект по ID
- `POST /api/leads` - Создать заявку

### Защищённые (требуют JWT токен)
- `POST /api/auth/login` - Вход администратора
- `POST /api/projects` - Создать проект
- `PUT /api/projects/:id` - Обновить проект
- `DELETE /api/projects/:id` - Удалить проект
- `GET /api/leads` - Все заявки
- `DELETE /api/leads/:id` - Удалить заявку
- `PATCH /api/projects/reorder/positions` - Переупорядочить проекты

## Структура

```
server/
├── database/
│   ├── migrations.js      # Единый файл миграций
│   └── README.md          # Документация БД
├── middleware/
│   ├── auth.js            # JWT верификация
│   └── multer.js          # Загрузка файлов
├── routes/
│   ├── auth.js            # Аутентификация
│   ├── projects.js        # Управление проектами
│   └── leads.js           # Управление заявками
├── uploads/               # Загруженные файлы (изображения)
├── server.js              # Express приложение
├── .env                   # Конфигурация
└── package.json
```

## Загруженные файлы

Изображения хранятся в `server/uploads/` и доступны по URL:
```
http://localhost:5000/uploads/filename.jpg
```

## Production развёртывание

1. PM2 для управления процессом:
```bash
npm install -g pm2
pm2 start server.js --name "kotin-api"
pm2 startup
pm2 save
```

2. HTTPS + Nginx реверс-прокси
3. Измените все переменные окружения
4. Обновите JWT_SECRET

## Подробная документация

[database/README.md](./database/README.md) - схема БД и миграции
