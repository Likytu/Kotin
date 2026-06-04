import express from 'express'
import { pool } from '../server.js'
import { upload } from '../middleware/multer.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

// Получить все проекты (публичный endpoint)
router.get('/', async (req, res) => {
    try {
        const connection = await pool.getConnection()
        const [rows] = await connection.execute(
            `SELECT id, name,
                    title_ru, subtitle_ru, siteUrl_ru, description_ru,
                    title_en, subtitle_en, siteUrl_en, description_en,
                    title_es, subtitle_es, siteUrl_es, description_es,
                    main_image, secondary_image, gallery_images, position, created_at
             FROM projects ORDER BY position ASC`
        )
        connection.release()

        res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

// Получить проект по ID
router.get('/:id', async (req, res) => {
    try {
        const connection = await pool.getConnection()
        const [rows] = await connection.execute(
            'SELECT * FROM projects WHERE id = ?',
            [req.params.id]
        )
        connection.release()

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' })
        }

        res.json(rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

// Создать проект (только админ)
router.post('/', verifyToken, upload.fields([
    { name: 'main_image', maxCount: 1 },
    { name: 'secondary_image', maxCount: 1 },
    { name: 'gallery_images', maxCount: 20 }
]), async (req, res) => {
    try {
        const {
            name, position,
            title_ru, subtitle_ru, siteUrl_ru, description_ru,
            title_en, subtitle_en, siteUrl_en, description_en,
            title_es, subtitle_es, siteUrl_es, description_es
        } = req.body

        let mainImage = req.body.main_image_url || ''
        let secondaryImage = req.body.secondary_image_url || ''
        let galleryImages = req.body.gallery_images_urls || ''

        if (req.files?.main_image?.[0]) {
            mainImage = `/uploads/${req.files.main_image[0].filename}`
        }
        if (req.files?.secondary_image?.[0]) {
            secondaryImage = `/uploads/${req.files.secondary_image[0].filename}`
        }
        if (req.files?.gallery_images) {
            galleryImages = req.files.gallery_images
                .map(f => `/uploads/${f.filename}`)
                .join(',')
        }

        const connection = await pool.getConnection()
        const [result] = await connection.execute(
            `INSERT INTO projects (name, main_image, secondary_image, gallery_images, position,
                                   title_ru, subtitle_ru, siteUrl_ru, description_ru,
                                   title_en, subtitle_en, siteUrl_en, description_en,
                                   title_es, subtitle_es, siteUrl_es, description_es)
             VALUES (?, ?, ?, ?, ?,
                     ?, ?, ?, ?,
                     ?, ?, ?, ?,
                     ?, ?, ?, ?)`,
            [name, mainImage, secondaryImage, galleryImages, position || 0,
             title_ru, subtitle_ru, siteUrl_ru, description_ru,
             title_en, subtitle_en, siteUrl_en, description_en,
             title_es, subtitle_es, siteUrl_es, description_es]
        )
        connection.release()

        res.status(201).json({ id: result.insertId, message: 'Project created' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

// Обновить проект (только админ)
router.put('/:id', verifyToken, upload.fields([
    { name: 'main_image', maxCount: 1 },
    { name: 'secondary_image', maxCount: 1 },
    { name: 'gallery_images', maxCount: 20 }
]), async (req, res) => {
    try {
        const {
            name, position,
            title_ru, subtitle_ru, siteUrl_ru, description_ru,
            title_en, subtitle_en, siteUrl_en, description_en,
            title_es, subtitle_es, siteUrl_es, description_es
        } = req.body

        let mainImage = req.body.main_image_url || req.body.main_image || ''
        let secondaryImage = req.body.secondary_image_url || req.body.secondary_image || ''
        let galleryImages = req.body.gallery_images_urls || req.body.gallery_images || ''

        if (req.files?.main_image?.[0]) {
            mainImage = `/uploads/${req.files.main_image[0].filename}`
        }
        if (req.files?.secondary_image?.[0]) {
            secondaryImage = `/uploads/${req.files.secondary_image[0].filename}`
        }
        if (req.files?.gallery_images) {
            galleryImages = req.files.gallery_images
                .map(f => `/uploads/${f.filename}`)
                .join(',')
        }

        const connection = await pool.getConnection()
        await connection.execute(
            `UPDATE projects SET
                name = ?, main_image = ?, secondary_image = ?, gallery_images = ?, position = ?,
                title_ru = ?, subtitle_ru = ?, siteUrl_ru = ?, description_ru = ?,
                title_en = ?, subtitle_en = ?, siteUrl_en = ?, description_en = ?,
                title_es = ?, subtitle_es = ?, siteUrl_es = ?, description_es = ?
             WHERE id = ?`,
            [name, mainImage, secondaryImage, galleryImages, position || 0,
             title_ru, subtitle_ru, siteUrl_ru, description_ru,
             title_en, subtitle_en, siteUrl_en, description_en,
             title_es, subtitle_es, siteUrl_es, description_es,
             req.params.id]
        )
        connection.release()

        res.json({ message: 'Project updated' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

// Обновить позиции проектов (только админ)
router.patch('/reorder/positions', verifyToken, async (req, res) => {
    try {
        const { positions } = req.body

        if (!Array.isArray(positions)) {
            return res.status(400).json({ error: 'positions must be an array' })
        }

        const connection = await pool.getConnection()

        for (const item of positions) {
            await connection.execute(
                'UPDATE projects SET position = ? WHERE id = ?',
                [item.position, item.id]
            )
        }

        connection.release()

        res.json({ message: 'Positions updated' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

// Удалить проект (только админ)
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const connection = await pool.getConnection()
        await connection.execute('DELETE FROM projects WHERE id = ?', [req.params.id])
        connection.release()

        res.json({ message: 'Project deleted' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

export default router
