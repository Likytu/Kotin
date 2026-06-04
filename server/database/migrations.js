import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

async function runMigrations() {
  console.log('\n[INFO] Running all migrations...\n')

  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Root',
      database: process.env.DB_NAME
    })

    const connection = await pool.getConnection()

    // 1. Ensure database exists
    console.log('[*] Checking database...')
    try {
      await connection.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`)
      console.log('[OK] Database exists')
    } catch (e) {
      console.log('[OK] Database already exists')
    }

    // 2. Create admins table
    console.log('[*] Creating admins table...')
    try {
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS admins (
          id INT PRIMARY KEY AUTO_INCREMENT,
          email VARCHAR(255) UNIQUE NOT NULL,
          username VARCHAR(255),
          password VARCHAR(255) NOT NULL,
          status VARCHAR(20) DEFAULT 'active',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
      `)
      console.log('[OK] admins table created')
    } catch (e) {
      console.log('[OK] admins table already exists')
    }

    // Add status column to admins if not exists
    try {
      await connection.execute(`
        ALTER TABLE admins
        ADD COLUMN status VARCHAR(20) DEFAULT 'active'
      `)
      console.log('[OK] Added status column to admins')
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('[OK] status column already exists')
      }
    }

    // Add username column to admins if not exists
    try {
      await connection.execute(`
        ALTER TABLE admins
        ADD COLUMN username VARCHAR(255)
      `)
      console.log('[OK] Added username column to admins')
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('[OK] username column already exists')
      }
    }

    // 3. Create projects table
    console.log('[*] Creating projects table...')
    try {
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS projects (
          id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          title VARCHAR(255),
          subtitle TEXT,
          siteUrl VARCHAR(255),
          description LONGTEXT,
          main_image VARCHAR(255),
          secondary_image VARCHAR(255),
          gallery_images LONGTEXT,
          position INT DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
      `)
      console.log('[OK] projects table created')
    } catch (e) {
      console.log('[OK] projects table already exists')
    }

    // 4. Create leads table
    console.log('[*] Creating leads table...')
    try {
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS leads (
          id INT PRIMARY KEY AUTO_INCREMENT,
          task TEXT,
          company VARCHAR(255),
          name VARCHAR(255) NOT NULL,
          contact VARCHAR(255) NOT NULL,
          services TEXT,
          budget VARCHAR(100),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
      `)
      console.log('[OK] leads table created')
    } catch (e) {
      console.log('[OK] leads table already exists')
    }

    // 5. Add secondary_image column to projects if not exists
    console.log('[*] Checking projects table schema...')
    try {
      await connection.execute(`
        ALTER TABLE projects
        ADD COLUMN secondary_image VARCHAR(255)
      `)
      console.log('[OK] Added secondary_image column')
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('[OK] secondary_image column already exists')
      }
    }

    // 6. Add gallery_images column to projects if not exists
    try {
      await connection.execute(`
        ALTER TABLE projects
        ADD COLUMN gallery_images LONGTEXT
      `)
      console.log('[OK] Added gallery_images column')
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('[OK] gallery_images column already exists')
      }
    }

    // 7. Add position column to projects if not exists
    try {
      await connection.execute(`
        ALTER TABLE projects
        ADD COLUMN position INT DEFAULT 0
      `)
      console.log('[OK] Added position column')
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('[OK] position column already exists')
      }
    }

    // 8. Add siteUrl column to projects if not exists
    try {
      await connection.execute(`
        ALTER TABLE projects
        ADD COLUMN siteUrl VARCHAR(255)
      `)
      console.log('[OK] Added siteUrl column')
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('[OK] siteUrl column already exists')
      }
    }

    // 9. Add title column to projects if not exists
    try {
      await connection.execute(`
        ALTER TABLE projects
        ADD COLUMN title VARCHAR(255)
      `)
      console.log('[OK] Added title column')
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('[OK] title column already exists')
      }
    }

    // 10. Drop prev_id and next_id if they exist
    try {
      await connection.execute('ALTER TABLE projects DROP COLUMN prev_id')
      console.log('[OK] Dropped prev_id column')
    } catch (e) {
      if (e.code === 'ER_CANT_DROP_FIELD_OR_KEY') {
        console.log('[OK] prev_id column does not exist')
      }
    }

    try {
      await connection.execute('ALTER TABLE projects DROP COLUMN next_id')
      console.log('[OK] Dropped next_id column')
    } catch (e) {
      if (e.code === 'ER_CANT_DROP_FIELD_OR_KEY') {
        console.log('[OK] next_id column does not exist')
      }
    }

    // 11. Insert default admin if not exists
    console.log('[*] Checking admin user...')
    try {
      const [admins] = await connection.execute('SELECT id FROM admins WHERE email = ?', ['admin@kotinstudio.ru'])
      if (admins.length === 0) {
        const hash = await bcrypt.hash('admin123', 10)
        await connection.execute(
          'INSERT INTO admins (email, password) VALUES (?, ?)',
          ['admin@kotinstudio.ru', hash]
        )
        console.log('[OK] Default admin created (email: admin@kotinstudio.ru, password: admin123)')
      } else {
        console.log('[OK] Admin user already exists')
      }
    } catch (e) {
      console.log('[WARN] Could not insert admin:', e.message)
    }

    // 12. Insert default projects if not exists
    console.log('[*] Checking projects...')
    try {
      const [projects] = await connection.execute('SELECT id FROM projects')
      if (projects.length === 0) {
        const defaultProjects = [
          { name: 'woomee', title: 'Разработка Mini App', subtitle: 'WooMee — Mini App ВКонтакте', description: 'Разработка Mini App для платформы ВКонтакте. Продуманный дизайн, быстрая загрузка, полная адаптация под мобильные устройства.', position: 0 },
          { name: 'agenda', title: 'Разработка дизайна и создание лендинга', subtitle: 'Адженда Events', description: 'Ивент‑агентство в Новосибирске — надёжный партнёр в организации мероприятий любого масштаба.', position: 1 },
          { name: 'tiger', title: 'Разработка дизайна', subtitle: 'Tiger — дизайн бренда', description: 'Разработка фирменного стиля и дизайна сайта для бренда Tiger.', position: 2 },
          { name: 'bot', title: 'Разработка дизайна Mini App', subtitle: 'Bot — дизайн Mini App', description: 'Разработка дизайна Mini App для Telegram и ВКонтакте.', position: 3 }
        ]

        for (const proj of defaultProjects) {
          await connection.execute(
            'INSERT INTO projects (name, title, subtitle, description, position) VALUES (?, ?, ?, ?, ?)',
            [proj.name, proj.title, proj.subtitle, proj.description, proj.position]
          )
        }
        console.log('[OK] Default projects created')
      } else {
        console.log('[OK] Projects already exist')
      }
    } catch (e) {
      console.log('[WARN] Could not insert projects:', e.message)
    }

    // Add multi-language columns to projects
    try {
      const columnsToAdd = [
        'title_ru VARCHAR(255)',
        'title_en VARCHAR(255)',
        'title_es VARCHAR(255)',
        'subtitle_ru LONGTEXT',
        'subtitle_en LONGTEXT',
        'subtitle_es LONGTEXT',
        'description_ru LONGTEXT',
        'description_en LONGTEXT',
        'description_es LONGTEXT',
        'siteUrl_ru VARCHAR(255)',
        'siteUrl_en VARCHAR(255)',
        'siteUrl_es VARCHAR(255)'
      ]

      for (const column of columnsToAdd) {
        const [columnName] = column.split(' ')
        try {
          await connection.execute(`ALTER TABLE projects ADD COLUMN ${column}`)
          console.log(`[OK] Added column ${columnName} to projects`)
        } catch (e) {
          if (e.code === 'ER_DUP_FIELDNAME') {
            console.log(`[OK] Column ${columnName} already exists`)
          } else {
            throw e
          }
        }
      }
    } catch (e) {
      console.log('[WARN] Could not add multi-language columns:', e.message)
    }

    connection.release()
    await pool.end()

    console.log('\n[OK] All migrations completed successfully!\n')
    process.exit(0)
  } catch (error) {
    console.error('[ERROR] Migration failed:', error.message)
    process.exit(1)
  }
}

runMigrations()
