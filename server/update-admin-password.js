import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

async function updateAdminPassword() {
  const email = process.argv[2] || 'admin@kotinstudio.ru'
  const password = process.argv[3] || 'admin123'

  console.log(`\nUpdating admin password...`)
  console.log(`Email: ${email}`)
  console.log(`New password: ${password}\n`)

  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Root',
      database: process.env.DB_NAME
    })

    // Generate new password hash
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(`Generated hash: ${hashedPassword}\n`)

    // Update password in database
    const connection = await pool.getConnection()
    const [result] = await connection.execute(
      'UPDATE admins SET password = ? WHERE email = ?',
      [hashedPassword, email]
    )
    connection.release()

    if (result.affectedRows === 0) {
      console.log(`[ERROR] Admin with email ${email} not found`)
      process.exit(1)
    }

    console.log(`[OK] Password updated successfully for ${email}`)
    console.log(`[OK] You can now login with this new password\n`)

    await pool.end()
    process.exit(0)
  } catch (error) {
    console.error('[ERROR] Failed to update password:', error.message)
    process.exit(1)
  }
}

updateAdminPassword()
