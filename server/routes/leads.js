import express from 'express'
import { pool } from '../server.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

// Создать новую заявку (публичный endpoint)
router.post('/', async (req, res) => {
    try {
        const { task, company, name, contact, services, budget } = req.body

        console.log('[LEADS] POST request received:', { task, company, name, contact, services, budget })

        if (!contact || !name) {
            console.log('[LEADS] Missing required fields:', { name, contact })
            return res.status(400).json({ error: 'Name and contact required' })
        }

        const connection = await pool.getConnection()
        const [result] = await connection.execute(
            'INSERT INTO leads (task, company, name, contact, services, budget) VALUES (?, ?, ?, ?, ?, ?)',
            [task || null, company || null, name, contact, services || null, budget || null]
        )
        connection.release()

        console.log('[LEADS] Lead created with ID:', result.insertId)
        res.status(201).json({ id: result.insertId, message: 'Lead created' })
    } catch (error) {
        console.error('[LEADS] Error:', error.message)
        res.status(500).json({ error: 'Server error', details: error.message })
    }
})

// Получить все заявки (только админ)
router.get('/', verifyToken, async (req, res) => {
    try {
        const connection = await pool.getConnection()
        const [rows] = await connection.execute(
            'SELECT id, task, company, name, contact, services, budget, created_at FROM leads ORDER BY created_at DESC'
        )
        connection.release()

        res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

// Получить заявку по ID (только админ)
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const connection = await pool.getConnection()
        const [rows] = await connection.execute(
            'SELECT * FROM leads WHERE id = ?',
            [req.params.id]
        )
        connection.release()

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Lead not found' })
        }

        res.json(rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

// Удалить заявку (только админ)
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const connection = await pool.getConnection()
        await connection.execute('DELETE FROM leads WHERE id = ?', [req.params.id])
        connection.release()

        res.json({ message: 'Lead deleted' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

export default router
