import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

async function checkAdmin() {
  console.log('\n[INFO] Checking admins in database...\n')

  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Root',
      database: process.env.DB_NAME
    })

    // Get all admins
    const connection = await pool.getConnection()
    const [admins] = await connection.execute('SELECT id, email, password FROM admins')
    connection.release()

    if (admins.length === 0) {
      console.log('[ERROR] No admins found in database')
      console.log('[INFO] Run: npm run init-db\n')
      process.exit(1)
    }

    console.log(`Found ${admins.length} admin(s):\n`)

    for (const admin of admins) {
      console.log(`ID: ${admin.id}`)
      console.log(`Email: ${admin.email}`)
      console.log(`Password Hash: ${admin.password}`)

      // Test if password "admin123" matches
      try {
        const isValid = await bcrypt.compare('admin123', admin.password)
        console.log(`Password "admin123" matches: ${isValid ? 'YES' : 'NO'}`)
      } catch (e) {
        console.log(`Password verification error: ${e.message}`)
      }

      console.log('')
    }

    console.log('[INFO] To update admin password, run:')
    console.log('npm run update-admin-password admin@kotinstudio.ru newpassword\n')

    await pool.end()
    process.exit(0)
  } catch (error) {
    console.error('[ERROR] Database check failed:', error.message)
    process.exit(1)
  }
}

checkAdmin()
