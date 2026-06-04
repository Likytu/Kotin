import mysql from 'mysql2/promise'
import 'dotenv/config'

async function migrate() {
  console.log('\n[INFO] Adding siteUrl column to projects table...\n')

  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Root',
      database: process.env.DB_NAME
    })

    const connection = await pool.getConnection()

    try {
      await connection.execute(`
        ALTER TABLE projects
        ADD COLUMN siteUrl VARCHAR(255)
      `)
      console.log('[OK] Added siteUrl column')
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('[OK] siteUrl column already exists')
      } else {
        throw e
      }
    }

    connection.release()
    await pool.end()

    console.log('\n[OK] Migration completed!\n')
    process.exit(0)
  } catch (error) {
    console.error('[ERROR] Migration failed:', error.message)
    process.exit(1)
  }
}

migrate()
