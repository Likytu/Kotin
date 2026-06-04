<template>
<div>
    <!-- Десктопный вертикальный навбар -->
    <div class="navbar_container navbar_desktop">
        <img class="logo" src="../assets/logo.svg" alt="Котин">
        <div class="navbar_blur">
            <svg width="151" height="601" viewBox="0 0 151 601" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-9.5" y="-9.5" width="170" height="620"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(5px);clip-path:url(#bgblur_0_1339_8474_clip_path);height:100%;width:100%"></div></foreignObject>
                <path data-figma-bg-blur-radius="10" d="M0.5 20.5C0.5 9.45432 9.45431 0.5 20.5 0.5H130.5C141.546 0.5 150.5 9.45431 150.5 20.5V570.5C150.5 587.069 137.069 600.5 120.5 600.5H30.5C13.9315 600.5 0.5 587.069 0.5 570.5V20.5Z" fill="#272727" fill-opacity="0.5"/>
                <foreignObject x="-10" y="-10" width="171" height="621"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(5px);height:100%;width:100%"></div></foreignObject>
                <path data-figma-bg-blur-radius="10" d="M21 0.5C9.67816 0.5 0.5 9.67818 0.5 21V570.5C0.5 587.069 13.9315 600.5 30.5 600.5H120.5C137.069 600.5 150.5 587.069 150.5 570.5V21C150.5 9.67816 141.322 0.5 130 0.5" stroke="#EAF0F6"/>
                <defs>
                    <clipPath id="bgblur_0_1339_8474_clip_path" transform="translate(9.5 9.5)">
                        <path d="M0.5 20.5C0.5 9.45432 9.45431 0.5 20.5 0.5H130.5C141.546 0.5 150.5 9.45431 150.5 20.5V570.5C150.5 587.069 137.069 600.5 120.5 600.5H30.5C13.9315 600.5 0.5 587.069 0.5 570.5V20.5Z"/>
                    </clipPath>
                </defs>
            </svg>
        </div>

        <div class="navbar_content">
            <button class="btn_navbar" :class="{ 'btn_navbar--active': activeSection === 'section-about' }" @click="nav('section-about')">
                <svg class="btn_navbar_svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M17.5492 16.7996V25.0496M17.5492 33.2996C9.3478 33.2996 2.69922 26.6511 2.69922 18.4496C2.69922 10.2482 9.3478 3.59961 17.5492 3.59961C25.7507 3.59961 32.3992 10.2482 32.3992 18.4496C32.3992 26.6511 25.7507 33.2996 17.5492 33.2996ZM17.6314 11.8496V12.0146L17.467 12.0149V11.8496H17.6314Z" stroke="#EAF0F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="btn_navbar_text">{{ t('nav.about') }}</p>
            </button>
            <button class="btn_navbar" :class="{ 'btn_navbar--active': activeSection === 'section-projects' }" @click="nav('section-projects')">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M20.2117 23.5956L27.2266 16.2902L32.3992 21.3176M9.24121 29.7008L17.4977 21.3045L27.4042 29.7008M14.1977 14.6187C14.1977 16.4649 12.7202 17.9617 10.8977 17.9617C9.07512 17.9617 7.59766 16.4649 7.59766 14.6187C7.59766 12.7725 9.07512 11.2759 10.8977 11.2759C12.7202 11.2759 14.1977 12.7725 14.1977 14.6187ZM17.6527 8.07707L17.4458 7.86734C16.875 7.28918 16.5896 7.00011 16.2566 6.79338C15.9613 6.6101 15.6393 6.47503 15.3027 6.39314C14.9229 6.30078 14.5193 6.30078 13.7122 6.30078H7.97922C6.13105 6.30078 5.20695 6.30078 4.50105 6.66514C3.88011 6.98562 3.37527 7.49701 3.0589 8.12601C2.69922 8.84109 2.69922 9.77717 2.69922 11.6494V24.3522C2.69922 26.2244 2.69922 27.1605 3.0589 27.8756C3.37527 28.5045 3.88011 29.016 4.50105 29.3364C5.20695 29.7008 6.13104 29.7008 7.97922 29.7008H27.1192C28.9674 29.7008 29.8916 29.7008 30.5974 29.3364C31.2183 29.016 31.7232 28.5045 32.0395 27.8756C32.3992 27.1605 32.3992 26.2244 32.3992 24.3522V14.9922C32.3992 13.12 32.3992 12.1839 32.0395 11.4689C31.7232 10.8399 31.2183 10.3285 30.5974 10.008C29.8916 9.64364 28.9674 9.64364 27.1192 9.64364H21.3863C20.5791 9.64364 20.1755 9.64364 19.7957 9.55127C19.4591 9.46939 19.1372 9.33432 18.8418 9.15103C18.5089 8.94431 18.2234 8.65524 17.6527 8.07707Z" stroke="#EAF0F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="btn_navbar_text">{{ t('nav.projects') }}</p>
            </button>
            <button class="btn_navbar" :class="{ 'btn_navbar--active': activeSection === 'section-pricing' }" @click="nav('section-pricing')">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M7.19922 13.8H28.7992M22.6278 27.75V23.1M13.3706 27.75H13.3861M17.9992 27.75H18.0146M17.9992 23.1H18.0146M13.3706 23.1H13.3861M22.6278 18.45H22.6432M17.9992 18.45H18.0146M13.3706 18.45H13.3861M12.1364 32.4H23.8621C25.5902 32.4 26.4544 32.4 27.1144 32.0621C27.695 31.765 28.1671 31.2907 28.4629 30.7074C28.7992 30.0443 28.7992 29.1762 28.7992 27.44V9.46C28.7992 7.72384 28.7992 6.85575 28.4629 6.19263C28.1671 5.60932 27.695 5.13508 27.1144 4.83788C26.4544 4.5 25.5902 4.5 23.8621 4.5H12.1364C10.4082 4.5 9.54411 4.5 8.88405 4.83788C8.30343 5.13508 7.83137 5.60932 7.53555 6.19263C7.19922 6.85575 7.19922 7.72383 7.19922 9.46V27.44C7.19922 29.1762 7.19922 30.0443 7.53555 30.7074C7.83137 31.2907 8.30343 31.765 8.88405 32.0621C9.54411 32.4 10.4082 32.4 12.1364 32.4Z" stroke="#EAF0F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="btn_navbar_text">{{ t('nav.pricing') }}</p>
            </button>
            <button class="btn_navbar" :class="{ 'btn_navbar--active': activeSection === 'section-contacts' }" @click="nav('section-contacts')">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M30.75 8.89583C30.75 21.3798 20.6298 31.5 8.14583 31.5C7.5826 31.5 7.02417 31.4794 6.47126 31.4389C5.83674 31.3924 5.51946 31.3692 5.23067 31.2029C4.99147 31.0653 4.76463 30.8211 4.64474 30.5725C4.5 30.2724 4.5 29.9222 4.5 29.2221V25.1135C4.5 24.5246 4.5 24.2302 4.59691 23.9779C4.68251 23.7549 4.82155 23.5565 5.00181 23.3998C5.20588 23.2225 5.48257 23.1219 6.03593 22.9206L10.7126 21.2201C11.3564 20.986 11.6783 20.8689 11.9837 20.8887C12.253 20.9062 12.5122 20.9983 12.7324 21.1543C12.9821 21.3312 13.1583 21.6249 13.5108 22.2125L14.7083 24.2083C18.5728 22.4582 21.7056 19.3213 23.4583 15.4583L21.4625 14.2608C20.8749 13.9083 20.5812 13.7321 20.4043 13.4824C20.2483 13.2622 20.1562 13.003 20.1387 12.7337C20.1189 12.4283 20.236 12.1064 20.4701 11.4626L22.1706 6.78593C22.3719 6.23257 22.4725 5.95588 22.6498 5.75181C22.8065 5.57155 23.0049 5.43251 23.2279 5.34691C23.4802 5.25 23.7746 5.25 24.3635 5.25H28.4721C29.1722 5.25 29.5224 5.25 29.8225 5.39474C30.0711 5.51463 30.3153 5.74147 30.4529 5.98067C30.6192 6.26948 30.6424 6.58674 30.6889 7.22127C30.7294 7.77417 30.75 8.3326 30.75 8.89583Z" stroke="#EAF0F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="btn_navbar_text">{{ t('nav.contacts') }}</p>
            </button>
        </div>

        <div class="navbar_lang">
            <button class="lang_btn" :class="{ 'lang_btn--active': lang === 'es' }" :style="langPos('es')" @click="setLang('es')">ES</button>
            <button class="lang_btn" :class="{ 'lang_btn--active': lang === 'en' }" :style="langPos('en')" @click="setLang('en')">EN</button>
            <button class="lang_btn" :class="{ 'lang_btn--active': lang === 'ru' }" :style="langPos('ru')" @click="setLang('ru')">RU</button>
        </div>
    </div>

    <!-- Мобильный топбар с бургером -->
    <div class="navbar_mobile">
        <img class="mobile_logo" src="../assets/logo.svg" alt="Котин">
        <button class="burger_btn" @click="menuOpen = !menuOpen" :class="{ 'burger_btn--open': menuOpen }">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    <!-- Мобильное меню-оверлей -->
    <transition name="menu">
        <div v-if="menuOpen" class="mobile_menu" @click.self="menuOpen = false">
            <div class="mobile_menu__panel">
                <div class="mobile_menu__header">
                    <img src="../assets/logo.svg" alt="Котин" class="mobile_menu__logo">
                    <button class="mobile_menu__close" @click="menuOpen = false">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#EAF0F6" stroke-width="2.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>

                <nav class="mobile_menu__nav">
                    <button class="mobile_menu__item" :class="{ 'mobile_menu__item--active': activeSection === 'section-about' }" @click="navAndClose('section-about')">
                        <svg class="mobile_menu__icon" width="28" height="28" viewBox="0 0 36 36" fill="none"><path d="M17.5492 16.7996V25.0496M17.5492 33.2996C9.3478 33.2996 2.69922 26.6511 2.69922 18.4496C2.69922 10.2482 9.3478 3.59961 17.5492 3.59961C25.7507 3.59961 32.3992 10.2482 32.3992 18.4496C32.3992 26.6511 25.7507 33.2996 17.5492 33.2996ZM17.6314 11.8496V12.0146L17.467 12.0149V11.8496H17.6314Z" stroke="#EAF0F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span>{{ t('nav.about') }}</span>
                    </button>
                    <button class="mobile_menu__item" :class="{ 'mobile_menu__item--active': activeSection === 'section-projects' }" @click="navAndClose('section-projects')">
                        <svg class="mobile_menu__icon" width="28" height="28" viewBox="0 0 36 36" fill="none"><path d="M20.2117 23.5956L27.2266 16.2902L32.3992 21.3176M9.24121 29.7008L17.4977 21.3045L27.4042 29.7008M14.1977 14.6187C14.1977 16.4649 12.7202 17.9617 10.8977 17.9617C9.07512 17.9617 7.59766 16.4649 7.59766 14.6187C7.59766 12.7725 9.07512 11.2759 10.8977 11.2759C12.7202 11.2759 14.1977 12.7725 14.1977 14.6187ZM17.6527 8.07707L17.4458 7.86734C16.875 7.28918 16.5896 7.00011 16.2566 6.79338C15.9613 6.6101 15.6393 6.47503 15.3027 6.39314C14.9229 6.30078 14.5193 6.30078 13.7122 6.30078H7.97922C6.13105 6.30078 5.20695 6.30078 4.50105 6.66514C3.88011 6.98562 3.37527 7.49701 3.0589 8.12601C2.69922 8.84109 2.69922 9.77717 2.69922 11.6494V24.3522C2.69922 26.2244 2.69922 27.1605 3.0589 27.8756C3.37527 28.5045 3.88011 29.016 4.50105 29.3364C5.20695 29.7008 6.13104 29.7008 7.97922 29.7008H27.1192C28.9674 29.7008 29.8916 29.7008 30.5974 29.3364C31.2183 29.016 31.7232 28.5045 32.0395 27.8756C32.3992 27.1605 32.3992 26.2244 32.3992 24.3522V14.9922C32.3992 13.12 32.3992 12.1839 32.0395 11.4689C31.7232 10.8399 31.2183 10.3285 30.5974 10.008C29.8916 9.64364 28.9674 9.64364 27.1192 9.64364H21.3863C20.5791 9.64364 20.1755 9.64364 19.7957 9.55127C19.4591 9.46939 19.1372 9.33432 18.8418 9.15103C18.5089 8.94431 18.2234 8.65524 17.6527 8.07707Z" stroke="#EAF0F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span>{{ t('nav.projects') }}</span>
                    </button>
                    <button class="mobile_menu__item" :class="{ 'mobile_menu__item--active': activeSection === 'section-pricing' }" @click="navAndClose('section-pricing')">
                        <svg class="mobile_menu__icon" width="28" height="28" viewBox="0 0 36 36" fill="none"><path d="M7.19922 13.8H28.7992M22.6278 27.75V23.1M13.3706 27.75H13.3861M17.9992 27.75H18.0146M17.9992 23.1H18.0146M13.3706 23.1H13.3861M22.6278 18.45H22.6432M17.9992 18.45H18.0146M13.3706 18.45H13.3861M12.1364 32.4H23.8621C25.5902 32.4 26.4544 32.4 27.1144 32.0621C27.695 31.765 28.1671 31.2907 28.4629 30.7074C28.7992 30.0443 28.7992 29.1762 28.7992 27.44V9.46C28.7992 7.72384 28.7992 6.85575 28.4629 6.19263C28.1671 5.60932 27.695 5.13508 27.1144 4.83788C26.4544 4.5 25.5902 4.5 23.8621 4.5H12.1364C10.4082 4.5 9.54411 4.5 8.88405 4.83788C8.30343 5.13508 7.83137 5.60932 7.53555 6.19263C7.19922 6.85575 7.19922 7.72383 7.19922 9.46V27.44C7.19922 29.1762 7.19922 30.0443 7.53555 30.7074C7.83137 31.2907 8.30343 31.765 8.88405 32.0621C9.54411 32.4 10.4082 32.4 12.1364 32.4Z" stroke="#EAF0F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span>{{ t('nav.pricing') }}</span>
                    </button>
                    <button class="mobile_menu__item" :class="{ 'mobile_menu__item--active': activeSection === 'section-contacts' }" @click="navAndClose('section-contacts')">
                        <svg class="mobile_menu__icon" width="28" height="28" viewBox="0 0 36 36" fill="none"><path d="M30.75 8.89583C30.75 21.3798 20.6298 31.5 8.14583 31.5C7.5826 31.5 7.02417 31.4794 6.47126 31.4389C5.83674 31.3924 5.51946 31.3692 5.23067 31.2029C4.99147 31.0653 4.76463 30.8211 4.64474 30.5725C4.5 30.2724 4.5 29.9222 4.5 29.2221V25.1135C4.5 24.5246 4.5 24.2302 4.59691 23.9779C4.68251 23.7549 4.82155 23.5565 5.00181 23.3998C5.20588 23.2225 5.48257 23.1219 6.03593 22.9206L10.7126 21.2201C11.3564 20.986 11.6783 20.8689 11.9837 20.8887C12.253 20.9062 12.5122 20.9983 12.7324 21.1543C12.9821 21.3312 13.1583 21.6249 13.5108 22.2125L14.7083 24.2083C18.5728 22.4582 21.7056 19.3213 23.4583 15.4583L21.4625 14.2608C20.8749 13.9083 20.5812 13.7321 20.4043 13.4824C20.2483 13.2622 20.1562 13.003 20.1387 12.7337C20.1189 12.4283 20.236 12.1064 20.4701 11.4626L22.1706 6.78593C22.3719 6.23257 22.4725 5.95588 22.6498 5.75181C22.8065 5.57155 23.0049 5.43251 23.2279 5.34691C23.4802 5.25 23.7746 5.25 24.3635 5.25H28.4721C29.1722 5.25 29.5224 5.25 29.8225 5.39474C30.0711 5.51463 30.3153 5.74147 30.4529 5.98067C30.6192 6.26948 30.6424 6.58674 30.6889 7.22127C30.7294 7.77417 30.75 8.3326 30.75 8.89583Z" stroke="#EAF0F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span>{{ t('nav.contacts') }}</span>
                    </button>
                </nav>

                <div class="mobile_menu__langs">
                    <button
                        v-for="l in ['RU', 'EN', 'ES']"
                        :key="l"
                        class="mobile_lang_btn"
                        :class="{ 'mobile_lang_btn--active': lang === l.toLowerCase() }"
                        @click="setLang(l.toLowerCase())"
                    >{{ l }}</button>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useI18nStore } from '../stores/i18n'

export default {
    name: 'NavBar',
    data() {
        return {
            activeSection: '',
            menuOpen: false,
        }
    },
    computed: {
        ...mapState(useI18nStore, ['lang']),
    },
    mounted() {
        if (this.$route.name === 'landing') {
            const ids = ['section-about', 'section-projects', 'section-pricing', 'section-contacts']
            this._onScroll = () => {
                const mid = window.scrollY + window.innerHeight / 2
                let closest = ids[0]
                let minDist = Infinity
                ids.forEach(id => {
                    const el = document.getElementById(id)
                    if (!el) return
                    const dist = Math.abs(el.offsetTop + el.offsetHeight / 2 - mid)
                    if (dist < minDist) { minDist = dist; closest = id }
                })
                this.activeSection = closest
            }
            window.addEventListener('scroll', this._onScroll, { passive: true })
            this._onScroll()
        }
    },
    beforeUnmount() {
        if (this._onScroll) window.removeEventListener('scroll', this._onScroll)
    },
    methods: {
        ...mapActions(useI18nStore, ['t', 'setLang']),
        nav(sectionId) {
            if (this.$route.name === 'landing') {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
            } else {
                this.$router.push(`/?scroll=${sectionId}`)
            }
        },
        navAndClose(sectionId) {
            this.menuOpen = false
            setTimeout(() => this.nav(sectionId), 300)
        },
        langPos(lang) {
            const slots = {
                bottomCenter: { left: '55px', top: '15px' },
                topLeft:      { left: '30px', top: '0px'  },
                topRight:     { left: '80px', top: '0px'  },
            }
            const maps = {
                ru: { ru: 'bottomCenter', es: 'topLeft', en: 'topRight' },
                en: { en: 'bottomCenter', ru: 'topLeft', es: 'topRight' },
                es: { es: 'bottomCenter', en: 'topLeft', ru: 'topRight' },
            }
            return slots[maps[this.lang][lang]]
        },
    },
}
</script>

<style scoped>
/* ===== ДЕСКТОП (боковой навбар) ===== */
.navbar_desktop {
    position: fixed;
    left: 40px;
    top: calc((100vh - 646px) / 2);
    width: 150px;
    height: 646px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
}

.navbar_blur {
    width: 151px;
    height: 601px;
    overflow: hidden;
    border-radius: 30px;
    flex-shrink: 0;
}

.logo {
    position: relative;
    top: 26px;
    width: 100px;
    height: auto;
}

.navbar_content {
    position: absolute;
    top: 90px;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
}

.btn_navbar {
    padding: 0;
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
}

.btn_navbar:hover { opacity: 1; }
.btn_navbar--active { opacity: 1; }

.btn_navbar_text {
    margin: 0;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    text-transform: lowercase;
    color: rgba(234, 240, 246, 1);
}

.navbar_lang {
    position: absolute;
    bottom: 30px;
    left: 0;
    width: 100%;
    height: 40px;
}

.lang_btn {
    position: absolute;
    width: 40px;
    height: 25px;
    padding: 0;
    background: rgba(39, 39, 39, 0.5);
    border: 1px solid #EAF0F6;
    backdrop-filter: blur(5px);
    border-radius: 10px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 16px;
    color: #EAF0F6;
    cursor: pointer;
    opacity: 0.6;
    transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
}

.lang_btn--active { opacity: 1; z-index: 1; }
.lang_btn:hover   { opacity: 0.85; }

/* ===== МОБИЛЬНЫЙ ТОПБАР (скрыт на десктопе) ===== */
.navbar_mobile {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: rgba(15, 15, 20, 0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(234, 240, 246, 0.1);
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 200;
}

.mobile_logo {
    width: 44px;
    height: auto;
}

/* Бургер */
.burger_btn {
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 4px;
}

.burger_btn span {
    display: block;
    width: 100%;
    height: 2px;
    background: #EAF0F6;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
}

.burger_btn--open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.burger_btn--open span:nth-child(2) { opacity: 0; }
.burger_btn--open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* ===== МОБИЛЬНОЕ МЕНЮ-ОВЕРЛЕЙ ===== */
.mobile_menu {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 300;
    display: flex;
    justify-content: flex-end;
}

.mobile_menu__panel {
    width: min(320px, 85vw);
    height: 100%;
    background: #0F0F14;
    border-left: 1px solid rgba(234, 240, 246, 0.15);
    display: flex;
    flex-direction: column;
    padding: 24px 20px 40px;
    overflow-y: auto;
}

.mobile_menu__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
}

.mobile_menu__logo {
    width: 50px;
    height: auto;
}

.mobile_menu__close {
    width: 40px;
    height: 40px;
    background: rgba(234, 240, 246, 0.08);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile_menu__nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
}

.mobile_menu__item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 16px;
    background: none;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 18px;
    color: rgba(234, 240, 246, 0.6);
    text-transform: lowercase;
    transition: background 0.2s, color 0.2s;
    text-align: left;
}

.mobile_menu__item:hover,
.mobile_menu__item--active {
    background: rgba(234, 240, 246, 0.08);
    color: #EAF0F6;
}

.mobile_menu__item--active {
    color: #B4F000;
}

.mobile_menu__icon {
    flex-shrink: 0;
    opacity: 0.7;
}

.mobile_menu__item--active .mobile_menu__icon {
    opacity: 1;
}

.mobile_menu__langs {
    display: flex;
    gap: 8px;
    margin-top: 30px;
    padding-top: 24px;
    border-top: 1px solid rgba(234, 240, 246, 0.1);
}

.mobile_lang_btn {
    flex: 1;
    height: 40px;
    background: rgba(234, 240, 246, 0.06);
    border: 1px solid rgba(234, 240, 246, 0.15);
    border-radius: 10px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 14px;
    color: rgba(234, 240, 246, 0.6);
    cursor: pointer;
    transition: all 0.2s;
}

.mobile_lang_btn--active {
    background: #B4F000;
    border-color: #B4F000;
    color: #0F0F14;
}

/* ===== АНИМАЦИЯ МЕНЮ ===== */
.menu-enter-active,
.menu-leave-active {
    transition: opacity 0.3s ease;
}
.menu-enter-active .mobile_menu__panel,
.menu-leave-active .mobile_menu__panel {
    transition: transform 0.3s ease;
}
.menu-enter-from,
.menu-leave-to {
    opacity: 0;
}
.menu-enter-from .mobile_menu__panel,
.menu-leave-to .mobile_menu__panel {
    transform: translateX(100%);
}

/* ===== ПЕРЕКЛЮЧЕНИЕ: скрывать десктоп / показывать мобильный ===== */
@media (max-width: 1300px) {
    .navbar_desktop { display: none; }
    .navbar_mobile  { display: flex; }
}
</style>
