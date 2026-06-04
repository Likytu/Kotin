import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { pool } from '../server.js'

const router = express.Router()

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ error: 'Access token required' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' })
        }
        req.admin = admin
        next()
    })
}

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password required' })
        }

        const connection = await pool.getConnection()
        const [rows] = await connection.execute(
            'SELECT id, email, username, password, status FROM admins WHERE email = ?',
            [email]
        )
        connection.release()

        if (rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        const admin = rows[0]

        if (admin.status !== 'active') {
            return res.status(403).json({ error: 'Account is not activated. Please wait for admin approval.' })
        }

        const validPassword = await bcrypt.compare(password, admin.password)

        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        const token = jwt.sign(
            { id: admin.id, email: admin.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.json({ token, admin: { id: admin.id, email: admin.email, username: admin.username } })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body
        console.log('[REGISTER] Запрос регистрации:', { email, username })

        if (!email || !password || !username) {
            console.log('[REGISTER] Ошибка: email, username или password отсутствует')
            return res.status(400).json({ error: 'Email, username and password required' })
        }

        console.log('[REGISTER] Хеширую пароль...')
        const hashedPassword = await bcrypt.hash(password, 10)

        const connection = await pool.getConnection()
        console.log('[REGISTER] Вставляю администратора в БД (статус: inactive)...')
        const [result] = await connection.execute(
            'INSERT INTO admins (email, username, password, status) VALUES (?, ?, ?, ?)',
            [email, username, hashedPassword, 'inactive']
        )
        connection.release()

        console.log('[REGISTER] ✓ Администратор успешно создан:', { id: result.insertId, email })
        res.status(201).json({ message: 'Admin created successfully' })
    } catch (error) {
        console.error('[REGISTER] ✗ Ошибка при регистрации:', error)
        if (error.code === 'ER_DUP_ENTRY') {
            console.log('[REGISTER] Ошибка: email уже существует')
            return res.status(400).json({ error: 'Email already exists' })
        }
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
})

router.get('/admins', authenticateToken, async (req, res) => {
    try {
        const connection = await pool.getConnection()
        const [rows] = await connection.execute(
            'SELECT id, email, status FROM admins ORDER BY created_at DESC'
        )
        connection.release()

        res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

router.patch('/admins/:id/toggle', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params

        const connection = await pool.getConnection()

        const [rows] = await connection.execute(
            'SELECT status FROM admins WHERE id = ?',
            [id]
        )

        if (rows.length === 0) {
            connection.release()
            return res.status(404).json({ error: 'Admin not found' })
        }

        const currentStatus = rows[0].status
        const newStatus = currentStatus === 'active' ? 'inactive' : 'active'

        await connection.execute(
            'UPDATE admins SET status = ? WHERE id = ?',
            [newStatus, id]
        )
        connection.release()

        res.json({ message: 'Admin status updated', status: newStatus })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

export default router
