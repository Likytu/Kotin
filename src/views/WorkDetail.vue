<template>
    <div class="work_page" :class="`lang-${lang}`">
        <NavBar />

        <div class="work_section" v-if="project">
            
            <div class="block_content">
                <!-- Кнопка назад -->
                <button class="work_back" @click="$router.push('/')">{{ backLabel }}</button>
                
                <!-- Главное изображение -->
                <div class="work_image" @click="openGallery(0)">
                    <img :src="project.mainImage" :alt="projectTitle" style="cursor: pointer;" />
                </div>
                <div class="work_thumbs_container" v-if="allGalleryImages.length > 1">
                    <button class="work_flip_btn " @click="rotatePhotosLeft" title="Предыдущие фотографии">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 0C38.8071 4.12325e-06 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 4.12352e-06 38.8071 0 25C0 11.1929 11.1929 0 25 0ZM27.4141 11.9189C26.6331 11.1381 25.367 11.1383 24.5859 11.9189L12.9199 23.585C12.1389 24.366 12.139 25.632 12.9199 26.4131L24.5859 38.0801C25.3669 38.8611 26.633 38.861 27.4141 38.0801C28.1948 37.299 28.195 36.0329 27.4141 35.252L19.1621 26.999H37.667C38.7715 26.9989 39.667 26.1035 39.667 24.999C39.6666 23.8949 38.7712 22.9991 37.667 22.999H19.1621L27.4141 14.7471C28.1948 13.966 28.195 12.6999 27.4141 11.9189Z" fill="#0F0F14"/>
                        </svg>
                    </button>
                    <!-- Миниатюры -->
                    <div class="work_thumbs" v-if="project.thumbnails.length">
                        <div
                            v-for="(thumb, i) in project.thumbnails"
                            :key="i"
                            class="work_thumb"
                            :style="{ left: (73 + i * 158) + 'px' }"
                        >
                            <img :src="thumb" :alt="(project.title || t(project.titleKey)) + ' ' + (i+1)" style="cursor: pointer;" />
                            <button class="work_thumb__btn" @click="openGallery(i + 1)" :title="`Смотреть фотографию ${i+1}`">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="#EAF0F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button class="work_flip_btn" @click="rotatePhotosRight" title="Следующие фотографии">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 0C11.1929 4.12325e-06 0 11.1929 0 25C3.8147e-06 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0ZM23.5859 11.9189C24.3669 11.1381 25.633 11.1383 26.4141 11.9189L38.0801 23.585C38.8611 24.366 38.861 25.632 38.0801 26.4131L26.4141 38.0801C25.6331 38.8611 24.367 38.861 23.5859 38.0801C22.8052 37.299 22.805 36.0329 23.5859 35.252L31.8379 26.999H13.333C12.2285 26.9989 11.333 26.1035 11.333 24.999C11.3334 23.8949 12.2288 22.9991 13.333 22.999H31.8379L23.5859 14.7471C22.8052 13.966 22.805 12.6999 23.5859 11.9189Z" fill="#0F0F14"/>
                        </svg>
                    </button>
                </div>
                
                

                <!-- Модальное окно галереи -->
                <div v-if="showGalleryModal" class="gallery_modal" @click.self="closeGallery">
                    <div class="gallery_modal__content">
                        <!-- Кнопка закрытия -->
                        <button class="gallery_modal__close" @click="closeGallery">✕</button>

                        <!-- Большое изображение -->
                        <div
                            class="gallery_modal__main"
                            :style="{
                                transform: `translate(${galleryPanX}px, ${galleryPanY}px) scale(${galleryZoom})`,
                                cursor: galleryZoom > 1 ? 'grab' : 'default'
                            }"
                            @mousedown="startGalleryDrag"
                            @mousemove="moveGalleryDrag"
                            @mouseup="endGalleryDrag"
                            @mouseleave="endGalleryDrag"
                            @wheel.prevent="zoomWithWheel"
                        >
                            <img :src="allGalleryImages[currentGalleryIndex]" :alt="project.title" draggable="false" />
                        </div>

                        <!-- Кнопки перелистывания фотографий -->
                        <button v-if="allGalleryImages.length > 1" class="gallery_modal__flip gallery_modal__flip--prev" @click="flipToPrev">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M25 10L15 20L25 30" stroke="#EAF0F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>

                        <button v-if="allGalleryImages.length > 1" class="gallery_modal__flip gallery_modal__flip--next" @click="flipToNext">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M15 10L25 20L15 30" stroke="#EAF0F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>

                        <!-- Контролы масштабирования -->
                        <div class="gallery_modal__controls">
                            <button @click="zoomOut" class="gallery_modal__zoom" :disabled="galleryZoom <= 1">−</button>
                            <span class="gallery_modal__zoom-level">{{ Math.round(galleryZoom * 100) }}%</span>
                            <button @click="zoomIn" class="gallery_modal__zoom" :disabled="galleryZoom >= 3">+</button>
                        </div>

                        <!-- Индикатор текущего изображения -->
                        <div class="gallery_modal__counter">
                            {{ currentGalleryIndex + 1 }} / {{ allGalleryImages.length }}
                        </div>
                    </div>
                </div>

                
            </div>

            <div class="block_content">
                <!-- Правая колонка: текст -->
                <div class="work_info">
                    <h1 class="work_title">{{ projectTitle }}</h1>
                    <p class="work_subtitle">{{ projectSubtitle }}</p>
                    <p class="work_desc">{{ projectDescription }}</p>
                    <div class="work_divider"></div>
                    <div class="work_cta">
                        <span class="work_cta__label">{{ ctaLabel }}</span>
                        <button class="work_cta__btn" @click="goToForm">
                            {{ submitLabel }}
                        </button>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- Проект не найден -->
        <div v-else class="work_notfound">
            <p>404</p>
            <button @click="$router.push('/')">← на главную</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useI18nStore } from '../stores/i18n'
import NavBar from '../components/NavBar.vue'

export default {
    name: 'WorkDetail',
    components: { NavBar },
    data() {
        return {
            project: null,
            showGalleryModal: false,
            currentGalleryIndex: 0,
            galleryZoom: 1,
            allGalleryImages: [],
            galleryPanX: 0,
            galleryPanY: 0,
            isGalleryDragging: false,
            galleryDragStart: { x: 0, y: 0 },
            galleryDragOffset: { x: 0, y: 0 },
        }
    },
    computed: {
        ...mapState(useI18nStore, ['lang']),
        backLabel() {
            return { ru: '← Назад', en: '← Back', es: '← Volver' }[this.lang] ?? '←'
        },
        ctaLabel() {
            return { ru: 'Захотели также?', en: 'Want the same?', es: '¿Quieres lo mismo?' }[this.lang]
        },
        submitLabel() {
            return this.t('order.submit')
        },
        projectTitle() {
            if (!this.project) return ''
            const langKey = `title_${this.lang}`
            return this.project[langKey] || this.project.title_ru || ''
        },
        projectSubtitle() {
            if (!this.project) return ''
            const langKey = `subtitle_${this.lang}`
            return this.project[langKey] || this.project.subtitle_ru || ''
        },
        projectSiteUrl() {
            if (!this.project) return ''
            const langKey = `siteUrl_${this.lang}`
            return this.project[langKey] || this.project.siteUrl_ru || ''
        },
        projectDescription() {
            if (!this.project) return ''
            const langKey = `description_${this.lang}`
            return this.project[langKey] || this.project.description_ru || this.project.description || ''
        },
    },
    mounted() {
        this.loadProject()
        window.addEventListener('keydown', this.handleKeydown)
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    },
    methods: {
        ...mapActions(useI18nStore, ['t']),
        async loadProject() {
            try {
                const id = this.$route.params.id
                const response = await fetch(`http://localhost:5000/api/projects/${id}`)
                if (response.ok) {
                    const dbProject = await response.json()
                    const ensureUrl = (path) => {
                        if (!path) return ''
                        if (path.startsWith('http')) return path
                        return `http://localhost:5000${path}`
                    }
                    const galleryImages = dbProject.gallery_images
                        ? dbProject.gallery_images.split(',').filter(img => img.trim()).map(ensureUrl)
                        : []

                    const mainImage = galleryImages.length > 0 ? galleryImages[0] : ensureUrl(dbProject.main_image)
                    const thumbnails = galleryImages.length > 0 ? galleryImages.slice(1) : []

                    this.allGalleryImages = galleryImages
                    this.currentGalleryIndex = 0
                    this.galleryZoom = 1

                    this.project = {
                        titleKey: 'works.' + dbProject.id,
                        title: dbProject.title || dbProject.name,
                        mainImage,
                        thumbnails,
                        title_ru: dbProject.title_ru || '',
                        title_en: dbProject.title_en || '',
                        title_es: dbProject.title_es || '',
                        subtitle_ru: dbProject.subtitle_ru || '',
                        subtitle_en: dbProject.subtitle_en || '',
                        subtitle_es: dbProject.subtitle_es || '',
                        siteUrl_ru: dbProject.siteUrl_ru || '',
                        siteUrl_en: dbProject.siteUrl_en || '',
                        siteUrl_es: dbProject.siteUrl_es || '',
                        description_ru: dbProject.description_ru || '',
                        description_en: dbProject.description_en || '',
                        description_es: dbProject.description_es || '',
                    }
                } else {
                    this.project = null
                }
            } catch (error) {
                console.error('Error loading project:', error)
                this.project = null
            }
        },
        goToForm() {
            this.$router.push('/?scroll=section-contacts')
        },
        openGallery(index) {
            this.currentGalleryIndex = index
            this.showGalleryModal = true
            this.galleryZoom = 1
            document.body.style.overflow = 'hidden'
        },
        closeGallery() {
            this.showGalleryModal = false
            document.body.style.overflow = 'auto'
        },
        flipToNext() {
            this.currentGalleryIndex = (this.currentGalleryIndex + 1) % this.allGalleryImages.length
            this.resetGalleryView()
        },
        flipToPrev() {
            this.currentGalleryIndex = (this.currentGalleryIndex - 1 + this.allGalleryImages.length) % this.allGalleryImages.length
            this.resetGalleryView()
        },
        resetGalleryView() {
            this.galleryZoom = 1
            this.galleryPanX = 0
            this.galleryPanY = 0
        },
        startGalleryDrag(e) {
            if (this.galleryZoom <= 1) return
            this.isGalleryDragging = true
            this.galleryDragStart = { x: e.clientX, y: e.clientY }
            this.galleryDragOffset = { x: this.galleryPanX, y: this.galleryPanY }
            e.preventDefault()
        },
        moveGalleryDrag(e) {
            if (!this.isGalleryDragging || this.galleryZoom <= 1) return

            const deltaX = e.clientX - this.galleryDragStart.x
            const deltaY = e.clientY - this.galleryDragStart.y

            const maxPan = (this.galleryZoom - 1) * 200

            this.galleryPanX = Math.max(-maxPan, Math.min(maxPan, this.galleryDragOffset.x + deltaX))
            this.galleryPanY = Math.max(-maxPan, Math.min(maxPan, this.galleryDragOffset.y + deltaY))
        },
        endGalleryDrag() {
            this.isGalleryDragging = false
        },
        zoomWithWheel(e) {
            const delta = e.deltaY > 0 ? -1 : 1

            if (delta > 0) {
                this.zoomIn()
            } else {
                this.zoomOut()
            }
        },
        zoomIn() {
            if (this.galleryZoom < 3) {
                this.galleryZoom = Math.min(this.galleryZoom + 0.2, 3)
            }
        },
        zoomOut() {
            if (this.galleryZoom > 1) {
                this.galleryZoom = Math.max(this.galleryZoom - 0.2, 1)
            }
        },
        rotatePhotosRight() {
            if (this.allGalleryImages.length <= 1) return

            // Последняя фотография становится первой
            const lastPhoto = this.allGalleryImages[this.allGalleryImages.length - 1]

            // Все остальные сдвигаются на одну позицию вправо
            this.allGalleryImages = [lastPhoto, ...this.allGalleryImages.slice(0, -1)]

            // Обновляем mainImage и thumbnails
            this.project.mainImage = this.allGalleryImages[0]
            this.project.thumbnails = this.allGalleryImages.slice(1)

            this.resetGalleryView()
        },
        rotatePhotosLeft() {
            if (this.allGalleryImages.length <= 1) return

            // Первая фотография становится последней
            const firstPhoto = this.allGalleryImages[0]

            // Все остальные сдвигаются на одну позицию влево
            this.allGalleryImages = [...this.allGalleryImages.slice(1), firstPhoto]

            // Обновляем mainImage и thumbnails
            this.project.mainImage = this.allGalleryImages[0]
            this.project.thumbnails = this.allGalleryImages.slice(1)

            this.resetGalleryView()
        },
        handleKeydown(e) {
            if (!this.showGalleryModal) return

            switch (e.key) {
                case 'Escape':
                    this.closeGallery()
                    break
                case 'ArrowLeft':
                    this.flipToPrev()
                    break
                case 'ArrowRight':
                    this.flipToNext()
                    break
                case '+':
                case '=':
                    this.zoomIn()
                    break
                case '-':
                case '_':
                    this.zoomOut()
                    break
            }
        },
    },
}
</script>

<style scoped>
.work_page {
    width: 1920px;
    height: 1080px;
    background: #0F0F14;
    position: relative;
    overflow: hidden;
}

.work_section {
    position: absolute;
    background-image: url(../assets/work_bg.svg);
    width: 1631px;
    height: 719px;
    z-index: 0;
    top: 172px;
    left: 155px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 60px;
}

.block_content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    height: 576px;
}

/* Кнопка назад */
.work_back {
    padding: 6px 20px;
    width: 121px;
    background: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 20px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #EAF0F6;
    cursor: pointer;
    transition: opacity 0.2s ease;
    z-index: 10;
}

.work_back:hover { opacity: 0.8; }

/* Главное изображение */
.work_image {
    width: 600px;
    height: 374px;
    border-radius: 20px;
    overflow: hidden;
}

.work_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.work_thumbs_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.work_thumbs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

/* Контейнер миниатюр */
.work_thumbs_container {
    position: relative;
    height: 100px;
}

/* Кнопки ротации фотографий */
.work_flip_btn {
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    padding: 0;
    z-index: 5;
}

/* Миниатюры */
.work_thumbs {
    width: 100%;
    height: 86px;
}

.work_thumb {
    width: 138px;
    height: 86px;
    border-radius: 10px;
    overflow: hidden;
    background: #B4F000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.work_thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.work_thumb__btn {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 26px;
    height: 26px;
    background: rgba(15, 15, 20, 0.8);
    border: 1px solid #5A8FFF;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 0;
    opacity: 0;
}

.work_thumb:hover .work_thumb__btn {
    opacity: 1;
}

.work_thumb__btn:hover {
    background: #5A8FFF;
}

.work_thumb__btn:hover svg path {
    stroke: #0F0F14;
}

.mini_img_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

/* Стрелки */
.work_arrow {
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s ease;
    z-index: 10;
}

.work_arrow--prev { left: 280px; }
.work_arrow--next { left: 830px; }
.work_arrow:hover { opacity: 0.8; }

/* Правая колонка */
.work_info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 700px;
    height: 576px;
}

.work_title {
    margin: 0 0 20px;
    font-family: 'Gilroy';
    font-weight: 800;
    font-size: 48px;
    line-height: 120%;
    color: #0F0F14;
}

.work_subtitle {
    margin: 0 0 16px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: #0F0F14;
}

.work_desc {
    margin: 0;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #0F0F14;
    max-height: 312px;
    overflow: hidden;
}

.work_divider {
    width: 100%;
    height: 0;
    border-top: 3px solid #1A2330;
    margin: 24px 0 16px;
}

.work_cta {
    display: flex;
    align-items: center;
    gap: 30px;
}

.work_cta__label {
    font-family: 'Gilroy';
    font-weight: 800;
    font-size: 20px;
    line-height: 120%;
    color: #0F0F14;
}

.work_cta__btn {
    padding: 10px 20px;
    background: #B4F000;
    border: none;
    border-radius: 20px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #0F0F14;
    cursor: pointer;
    transition: opacity 0.2s ease;
}

.work_cta__btn:hover { opacity: 0.85; }

/* 404 */
.work_notfound {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    color: #EAF0F6;
    font-family: 'Gilroy';
}

.work_notfound p { font-size: 120px; font-weight: 800; margin: 0; }
.work_notfound button {
    background: none;
    border: 1px solid #EAF0F6;
    border-radius: 20px;
    padding: 10px 30px;
    font-family: 'Gilroy';
    font-size: 20px;
    color: #EAF0F6;
    cursor: pointer;
}

/* Gallery Modal */
.gallery_modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 15, 20, 0.98);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.gallery_modal__content {
    position: relative;
    width: 90vw;
    height: 90vh;
    max-width: 1600px;
    max-height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gallery_modal__main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.gallery_modal__main img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.gallery_modal__close {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    background: #0F0F14;
    border: 2px solid #5A8FFF;
    border-radius: 50%;
    color: #5A8FFF;
    font-size: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 1001;
}

.gallery_modal__close:hover {
    background: #5A8FFF;
    color: #0F0F14;
    transform: scale(1.1);
}

.gallery_modal__flip {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background: #0F0F14;
    border: 2px solid #5A8FFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 999;
    padding: 0;
}

.gallery_modal__flip:hover:not(:disabled) {
    background: #5A8FFF;
}

.gallery_modal__flip:hover:not(:disabled) svg {
    stroke: #0F0F14;
}

.gallery_modal__flip svg {
    width: 30px;
    height: 30px;
    transition: stroke 0.3s ease;
}

.gallery_modal__flip--prev {
    left: 30px;
}

.gallery_modal__flip--next {
    right: 30px;
}

.gallery_modal__flip:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.gallery_modal__controls {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 20px;
    background: #0F0F14;
    padding: 15px 30px;
    border-radius: 15px;
    border: 2px solid #5A8FFF;
    z-index: 999;
}

.gallery_modal__zoom {
    width: 44px;
    height: 44px;
    background: #5A8FFF;
    border: none;
    border-radius: 10px;
    color: #EAF0F6;
    font-size: 22px;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    font-family: 'Gilroy';
}

.gallery_modal__zoom:hover:not(:disabled) {
    background: #7AA3FF;
    transform: scale(1.05);
}

.gallery_modal__zoom:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.gallery_modal__zoom-level {
    color: #EAF0F6;
    font-weight: 600;
    font-family: 'Gilroy';
    min-width: 70px;
    text-align: center;
    font-size: 16px;
}

.gallery_modal__counter {
    position: absolute;
    top: 40px;
    left: 40px;
    color: #EAF0F6;
    font-family: 'Gilroy';
    font-size: 16px;
    font-weight: 600;
    background: #0F0F14;
    padding: 12px 20px;
    border-radius: 12px;
    border: 2px solid #5A8FFF;
    z-index: 999;
}

/* ========================
   Pro Display XDR (1301px–1919px)
   ======================== */
@media (min-width: 1301px) and (max-width: 1919px) {
    .work_page {
        width: 100%;
        height: auto;
        min-height: 100vh;
    }

    .work_section {
        position: static;
        width: auto;
        height: auto;
        padding: 60px 5% 60px 210px; /* 210px — место под боковой навбар */
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 50px;
        background-size: cover;
    }

    .block_content {
        height: auto;
        flex: 0 0 auto;
    }

    .work_image {
        width: clamp(400px, 40vw, 600px);
        height: auto;
        aspect-ratio: 16/10;
    }

    .work_info {
        width: auto;
        flex: 1;
        height: auto;
        min-width: 0;
    }

    .work_title { font-size: clamp(28px, 3vw, 48px); }
    .work_subtitle { font-size: clamp(16px, 1.8vw, 24px); }
    .work_desc { font-size: clamp(14px, 1.4vw, 20px); max-height: none; }
}

/* ========================
   ПЛАНШЕТ (≤ 1300px)
   ======================== */
@media (max-width: 1300px) {
    .work_page {
        width: 100%;
        height: auto;
        min-height: 100vh;
        padding-top: 64px; /* место под горизонтальный навбар */
    }

    .work_section {
        position: static;
        width: 100%;
        height: auto;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
        padding: 40px 5%;
        background-position: center;
        background-size: cover;
    }

    .block_content {
        width: 45%;
        min-width: 280px;
        height: auto;
        flex: 1;
    }

    .work_image {
        width: 100%;
        height: auto;
        aspect-ratio: 16/10;
    }

    .work_info {
        width: 100%;
        height: auto;
    }

    .work_title {
        font-size: clamp(24px, 4vw, 48px);
    }

    .work_subtitle {
        font-size: clamp(16px, 2vw, 24px);
    }

    .work_desc {
        font-size: clamp(14px, 1.5vw, 20px);
        max-height: none;
    }
}

/* ========================
   МОБИЛЬНЫЙ (≤ 768px)
   ======================== */
@media (max-width: 768px) {
    .work_section {
        flex-direction: column;
        gap: 24px;
        padding: 24px 20px;
    }

    .block_content {
        width: 100%;
    }

    .work_image {
        aspect-ratio: 4/3;
    }

    .work_back {
        font-size: 16px;
        width: auto;
    }

    .work_title {
        font-size: 26px;
        margin-bottom: 12px;
    }

    .work_subtitle {
        font-size: 16px;
    }

    .work_desc {
        font-size: 15px;
    }

    .work_cta {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .work_thumbs_container {
        height: auto;
    }

    .work_thumbs {
        flex-wrap: wrap;
        height: auto;
        gap: 10px;
    }

    .work_thumb {
        width: 110px;
        height: 70px;
    }

    .gallery_modal__flip--prev { left: 10px; }
    .gallery_modal__flip--next { right: 10px; }

    .gallery_modal__close {
        top: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        font-size: 22px;
    }

    .gallery_modal__controls {
        bottom: 20px;
        padding: 10px 20px;
    }

    .gallery_modal__counter {
        top: 15px;
        left: 15px;
        font-size: 14px;
        padding: 8px 14px;
    }
}

/* ========================
   МОБИЛЬНЫЙ (≤ 480px)
   ======================== */
@media (max-width: 480px) {
    .work_section {
        padding: 20px 15px;
    }

    .work_title {
        font-size: 22px;
    }

    .work_subtitle {
        font-size: 14px;
    }

    .work_desc {
        font-size: 13px;
    }

    .work_thumb {
        width: 90px;
        height: 60px;
    }
}

</style>