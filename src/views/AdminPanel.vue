<template>
  <div class="admin_layout">
    <!-- SIDEBAR -->
    <aside class="admin_sidebar">
      <div class="sidebar_logo">
        <img src="../assets/logo.svg" alt="Котин" class="logo_img">
      </div>

      <nav class="sidebar_nav">
        <button
          v-for="item in navItems"
          :key="item.id"
          class="nav_item"
          :class="{ active: activeTab === item.id }"
          @click="activeTab = item.id"
          :title="item.label"
        >
          <svg v-if="item.id === 'projects'" class="nav_icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.20833 4.33398H4.875C3.97754 4.33398 3.25 5.06152 3.25 5.95898V10.2923C3.25 11.1898 3.97754 11.9173 4.875 11.9173H9.20833C10.1058 11.9173 10.8333 11.1898 10.8333 10.2923V5.95898C10.8333 5.06152 10.1058 4.33398 9.20833 4.33398Z" stroke="#EAF0F6" stroke-opacity="0.55" stroke-width="2.16667"/>
            <path d="M21.1263 4.33398H16.793C15.8955 4.33398 15.168 5.06152 15.168 5.95898V10.2923C15.168 11.1898 15.8955 11.9173 16.793 11.9173H21.1263C22.0238 11.9173 22.7513 11.1898 22.7513 10.2923V5.95898C22.7513 5.06152 22.0238 4.33398 21.1263 4.33398Z" stroke="#EAF0F6" stroke-opacity="0.55" stroke-width="2.16667"/>
            <path d="M9.20833 15.166H4.875C3.97754 15.166 3.25 15.8936 3.25 16.791V21.1243C3.25 22.0218 3.97754 22.7493 4.875 22.7493H9.20833C10.1058 22.7493 10.8333 22.0218 10.8333 21.1243V16.791C10.8333 15.8936 10.1058 15.166 9.20833 15.166Z" stroke="#EAF0F6" stroke-opacity="0.55" stroke-width="2.16667"/>
            <path d="M21.1263 15.166H16.793C15.8955 15.166 15.168 15.8936 15.168 16.791V21.1243C15.168 22.0218 15.8955 22.7493 16.793 22.7493H21.1263C22.0238 22.7493 22.7513 22.0218 22.7513 21.1243V16.791C22.7513 15.8936 22.0238 15.166 21.1263 15.166Z" stroke="#EAF0F6" stroke-opacity="0.55" stroke-width="2.16667"/>
          </svg>
          <svg v-else-if="item.id === 'leads'" class="nav_icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.25 7.58398H22.75M3.25 13.0007H22.75M3.25 18.4173H16.25" stroke="#EAF0F6" stroke-opacity="0.55" stroke-width="2.16667"/>
          </svg>
          <svg v-else-if="item.id === 'settings'" class="nav_icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1064_9359)">
              <path d="M13 16.25C14.7949 16.25 16.25 14.7949 16.25 13C16.25 11.2051 14.7949 9.75 13 9.75C11.2051 9.75 9.75 11.2051 9.75 13C9.75 14.7949 11.2051 16.25 13 16.25Z" stroke="#EAF0F6" stroke-opacity="0.55" stroke-width="2.16667"/>
              <path d="M21.0154 16.2507C20.8786 16.573 20.8365 16.9276 20.894 17.273C20.9516 17.6183 21.1064 17.9401 21.3404 18.2007L21.4487 18.309C21.697 18.4952 21.9025 18.7327 22.051 19.0052C22.1996 19.2778 22.2879 19.5791 22.3099 19.8887C22.3319 20.1984 22.2871 20.5091 22.1786 20.7999C22.07 21.0908 21.9003 21.3549 21.6808 21.5744C21.4613 21.7939 21.1972 21.9637 20.9063 22.0722C20.6155 22.1808 20.3047 22.2255 19.9951 22.2035C19.6855 22.1815 19.3842 22.0932 19.1116 21.9447C18.8391 21.7961 18.6016 21.5907 18.4154 21.3423L18.307 21.234C18.0465 21.0001 17.7247 20.8452 17.3793 20.7877C17.034 20.7301 16.6793 20.7722 16.357 20.909C16.0423 21.051 15.7738 21.2787 15.5822 21.5661C15.3907 21.8534 15.2838 22.1888 15.2737 22.534V22.7507C15.2737 23.3253 15.0454 23.8764 14.6391 24.2827C14.2328 24.689 13.6817 24.9173 13.107 24.9173C12.5324 24.9173 11.9813 24.689 11.575 24.2827C11.1686 23.8764 10.9404 23.3253 10.9404 22.7507V22.6423C10.9303 22.2971 10.8234 21.9617 10.6318 21.6744C10.4403 21.3871 10.1718 21.1594 9.85703 21.0173C9.53473 20.8805 9.1801 20.8384 8.83473 20.896C8.48936 20.9536 8.16755 21.1084 7.90703 21.3423L7.7987 21.4507C7.61244 21.699 7.375 21.9044 7.10245 22.053C6.8299 22.2016 6.5286 22.2899 6.21896 22.3119C5.90932 22.3339 5.59856 22.2891 5.30773 22.1805C5.01691 22.072 4.7528 21.9022 4.5333 21.6827C4.3138 21.4632 4.14403 21.1991 4.03548 20.9083C3.92693 20.6175 3.88214 20.3067 3.90415 19.9971C3.92615 19.6874 4.01444 19.3861 4.16302 19.1136C4.31161 18.841 4.51703 18.6036 4.76536 18.4173L4.8737 18.309C5.10763 18.0485 5.26246 17.7267 5.32002 17.3813C5.37758 17.0359 5.3355 16.6813 5.1987 16.359C5.05665 16.0442 4.82896 15.7757 4.54163 15.5842C4.25429 15.3926 3.91889 15.2857 3.5737 15.2757H3.2487C2.67406 15.2757 2.12296 15.0474 1.71663 14.641C1.3103 14.2347 1.08203 13.6836 1.08203 13.109C1.08203 12.5343 1.3103 11.9832 1.71663 11.5769C2.12296 11.1706 2.67406 10.9423 3.2487 10.9423H3.35703C3.70222 10.9323 4.03762 10.8253 4.32496 10.6338C4.61229 10.4422 4.83998 10.1738 4.98203 9.85899C5.11883 9.53668 5.16091 9.18205 5.10335 8.83668C5.04579 8.49131 4.89097 8.1695 4.65703 7.90898L4.5487 7.80065C4.30036 7.6144 4.09494 7.37696 3.94636 7.1044C3.79777 6.83185 3.70949 6.53055 3.68748 6.22091C3.66548 5.91127 3.71026 5.60051 3.81881 5.30969C3.92736 5.01886 4.09713 4.75476 4.31663 4.53525C4.53614 4.31575 4.80024 4.14598 5.09107 4.03743C5.38189 3.92888 5.69265 3.8841 6.00229 3.9061C6.31193 3.92811 6.61323 4.01639 6.88578 4.16498C7.15834 4.31356 7.39578 4.51898 7.58203 4.76732L7.69036 4.87565C7.95088 5.10959 8.27269 5.26441 8.61806 5.32197C8.96343 5.37953 9.31806 5.33745 9.64036 5.20065C9.95513 5.0586 10.2236 4.83091 10.4152 4.54358C10.6067 4.25624 10.7136 3.92084 10.7237 3.57565V3.25065C10.7237 2.67602 10.952 2.12492 11.3583 1.71859C11.7646 1.31226 12.3157 1.08398 12.8904 1.08398C13.465 1.08398 14.0161 1.31226 14.4224 1.71859C14.8288 2.12492 15.057 2.67602 15.057 3.25065V3.35898C15.0671 3.70417 15.174 4.03958 15.3656 4.32691C15.5571 4.61425 15.8256 4.84193 16.1404 4.98398C16.4627 5.12078 16.8173 5.16287 17.1627 5.1053C17.508 5.04774 17.8298 4.89292 18.0904 4.65898L18.1987 4.55065C18.385 4.30231 18.6224 4.0969 18.8949 3.94831C19.1675 3.79973 19.4688 3.71144 19.7784 3.68944C20.0881 3.66743 20.3988 3.71222 20.6897 3.82076C20.9805 3.92931 21.2446 4.09908 21.4641 4.31859C21.6836 4.53809 21.8534 4.80219 21.9619 5.09302C22.0705 5.38385 22.1153 5.6946 22.0932 6.00424C22.0712 6.31389 21.983 6.61518 21.8344 6.88774C21.6858 7.16029 21.4804 7.39773 21.232 7.58398L21.1237 7.69232C20.8898 7.95284 20.7349 8.27464 20.6774 8.62001C20.6198 8.96539 20.6619 9.32001 20.7987 9.64232C20.9407 9.95708 21.1684 10.2256 21.4558 10.4171C21.7431 10.6087 22.0785 10.7156 22.4237 10.7257H22.7487C23.3233 10.7257 23.8744 10.9539 24.2808 11.3603C24.6871 11.7666 24.9154 12.3177 24.9154 12.8923C24.9154 13.467 24.6871 14.0181 24.2808 14.4244C23.8744 14.8307 23.3233 15.059 22.7487 15.059H22.6404C22.2952 15.069 21.9598 15.176 21.6724 15.3675C21.3851 15.5591 21.1574 15.8276 21.0154 16.1423V16.2507Z" stroke="#EAF0F6" stroke-opacity="0.55" stroke-width="2.16667"/>
            </g>
            <defs>
              <clipPath id="clip0_1064_9359">
                <rect width="26" height="26" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span class="nav_label">{{ item.label }}</span>
        </button>
      </nav>

    </aside>

    <!-- MAIN CONTENT -->
    <main class="admin_main">
      <!-- SAVE NOTIFICATION -->
      <transition name="fade">
        <div v-if="saveNotification.show" class="save_notification">
          {{ saveNotification.message }}
        </div>
      </transition>

      <!-- TOPBAR -->
      <div class="admin_topbar">
        <div class="topbar_breadcrumb">
          <span class="breadcrumb_item">главная</span>
          <span class="breadcrumb_sep">/</span>
          <span class="breadcrumb_current">{{ activePage }}</span>
        </div>

        <div class="topbar_actions">
          <div class="topbar_profile">
            <div class="profile_avatar">{{ adminUsername.charAt(0).toUpperCase() }}</div>
            <div class="profile_info">
              <div class="profile_name">{{ adminUsername }}</div>
              <div class="profile_role">администратор</div>
            </div>
            <button class="profile_logout" @click="handleLogout" title="Выход">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L15 12M15 12L12 9M15 12H4M4 7.24802V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2839 4.21799 18.9076C4 18.4798 4 17.9201 4 16.8V16.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- HEADER -->
      <div class="admin_header">
        <div class="header_greeting">
          <h1 class="header_title">Добро пожаловать</h1>
          <p class="header_subtitle">{{ today }} · {{ leadsCount }} новые заявки, {{ projectsCount }} проектов в работе</p>
        </div>

        <div class="header_actions">
          <button class="btn btn_outline" @click="exportLeadsReport">
            <svg viewBox="0 0 16 16"><polygon points="4,2 12,2 14,6 2,6"/></svg>
            Экспорт
          </button>
        </div>
      </div>

      <!-- CONTENT AREA -->
      <div class="admin_content">
        <!-- PROJECTS TAB -->
        <section v-if="activeTab === 'projects'" class="content_section">
          <div class="section_header">
            <div>
              <h2>Портфолио</h2>
              <p class="section_subtitle">{{ projectsCount }} проектов</p>
            </div>
            <button class="btn btn_primary" @click="toggleForm">
              {{ showProjectForm ? 'Скрыть форму' : '+ Новый проект' }}
            </button>
          </div>

          <form v-if="showProjectForm" @submit.prevent="saveProject" class="form_section">
            <h3>{{ editingProjectId ? 'Редактировать проект' : 'Добавить новый проект' }}</h3>

            <!-- Language Tabs -->
            <div class="language_tabs">
              <button
                v-for="lang in ['ru', 'en', 'es']"
                :key="lang"
                type="button"
                class="language_tab"
                :class="{ active: selectedLanguage === lang }"
                @click="selectedLanguage = lang"
                :title="`Заполнить информацию на ${{ ru: 'русском', en: 'английском', es: 'испанском' }[lang]}`"
              >
                <span class="language_flag">{{ { ru: '🇷🇺', en: '🇬🇧', es: '🇪🇸' }[lang] }}</span>
                <span class="language_name">{{ { ru: 'Русский', en: 'English', es: 'Español' }[lang] }}</span>
              </button>
            </div>

            <div class="form_grid">
              <input v-model="projectForm.name" placeholder="Название работы" required class="form_input">

              <!-- Language-specific fields -->
              <input
                v-model="projectForm[`title_${selectedLanguage}`]"
                :placeholder="`Название услуги (${selectedLanguage.toUpperCase()})`"
                required
                class="form_input"
              >
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <textarea
                  v-model="projectForm[`subtitle_${selectedLanguage}`]"
                  :placeholder="`Описание (${selectedLanguage.toUpperCase()})`"
                  class="form_input"
                  style="resize: vertical; min-height: 80px;"
                ></textarea>
                <input
                  v-model="projectForm[`siteUrl_${selectedLanguage}`]"
                  :placeholder="`URL сайта (${selectedLanguage.toUpperCase()})`"
                  type="url"
                  class="form_input"
                >
              </div>

              <div class="form_file_group">
                <label class="form_label">Главное изображение</label>
                <input type="file" @change="onMainImageChange" accept="image/*" class="form_input">
                <p v-if="projectForm.main_image_file" class="form_file_name">{{ projectForm.main_image_file.name }}</p>
                <img v-if="previews.main_image" :src="previews.main_image" class="form_preview">
              </div>

              <div class="form_file_group">
                <label class="form_label">Вторичное изображение (опционально)</label>
                <input type="file" @change="onSecondaryImageChange" accept="image/*" class="form_input">
                <p v-if="projectForm.secondary_image_file" class="form_file_name">{{ projectForm.secondary_image_file.name }}</p>
                <img v-if="previews.secondary_image" :src="previews.secondary_image" class="form_preview">
              </div>

              <div class="form_file_group">
                <label class="form_label">Фотографии для галереи (опционально)</label>
                <input type="file" multiple @change="onGalleryImagesChange" accept="image/*" class="form_input">
                <p v-if="projectForm.gallery_images_files && projectForm.gallery_images_files.length > 0" class="form_file_name">
                  {{ projectForm.gallery_images_files.length }} файл(ов)
                </p>
                <div v-if="previews.gallery_images.length > 0" class="form_gallery_previews">
                  <img v-for="(preview, i) in previews.gallery_images" :key="i" :src="preview" class="form_preview form_preview--small">
                </div>
              </div>

              <textarea
                v-model="projectForm[`description_${selectedLanguage}`]"
                :placeholder="`Описание проекта (${selectedLanguage.toUpperCase()})`"
                class="form_input form_textarea"
              ></textarea>
              <input v-model.number="projectForm.position" type="number" placeholder="Позиция (0, 1, 2, ...)" class="form_input">
              <div style="display: flex; gap: 10px;">
                <button type="submit" class="btn btn_primary">{{ editingProjectId ? 'Сохранить' : 'Добавить проект' }}</button>
                <button v-if="editingProjectId" type="button" @click="cancelEdit" class="btn" style="background: #5C6B7C;">Отмена</button>
              </div>
            </div>
          </form>

          <div class="portfolio_grid">
            <div v-for="(project, index) in projects" :key="project.id" class="portfolio_card" draggable="true" @dragstart="onDragStart($event, index)" @dragover="onDragOver" @drop="onDrop($event, index)" @dragend="onDragEnd" :class="{ 'portfolio_card--dragging': draggedIndex === index }">
              <div class="portfolio_image" v-if="project.main_image">
                <img :src="getImageUrl(project.main_image)" :alt="project.name" loading="lazy">
              </div>
              <div v-else class="portfolio_image portfolio_image--empty">
                <svg viewBox="0 0 60 60">
                  <rect x="5" y="5" width="50" height="50" fill="none" stroke="currentColor" stroke-width="2"/>
                  <circle cx="20" cy="20" r="4" fill="currentColor"/>
                  <polyline points="5,50 20,30 35,45 55,10" fill="none" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>

              <div class="portfolio_content">
                <h3>{{ project.name }}</h3>
                <p class="portfolio_subtitle">{{ project.title_ru }}</p>
                <p v-if="project.description" class="portfolio_description">{{ project.description.substring(0, 100) }}...</p>
                <div class="portfolio_actions">
                  <router-link :to="`/work/${project.id}`" class="btn btn_small btn_primary">Смотреть</router-link>
                  <button @click="deleteProject(project.id)" class="btn btn_small btn_delete">Удалить</button>
                  <button @click="editProject(project)" class="btn btn_small btn_edit">Редактировать</button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="projects.length === 0" class="empty_state">
            <svg viewBox="0 0 80 80">
              <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"/>
            </svg>
            <h3>Нет проектов</h3>
            <p>Добавьте первый проект в портфолио</p>
          </div>
        </section>

        <!-- LEADS TAB -->
        <section v-if="activeTab === 'leads'" class="content_section">
          <div class="section_header">
            <div>
              <h2>Заявки</h2>
              <p class="section_subtitle">{{ leadsCount }} новых заявок</p>
            </div>
            <button class="btn btn_outline" @click="exportLeadsReport">
              <svg viewBox="0 0 16 16"><polygon points="4,2 12,2 14,6 2,6"/></svg>
              Экспорт
            </button>
          </div>

          <div v-if="leads.length > 0" class="leads_container">
            <div v-for="lead in leads" :key="lead.id" class="lead_card_new">
              <div class="lead_card_header">
                <div class="lead_avatar">{{ lead.name.charAt(0).toUpperCase() }}</div>
                <div class="lead_header_info">
                  <h3 class="lead_name">{{ lead.name }}</h3>
                  <p class="lead_date">{{ formatDate(lead.created_at) }}</p>
                </div>
              </div>

              <div class="lead_card_content">
                <div v-if="lead.contact" class="lead_field">
                  <span class="lead_label">Контакт:</span>
                  <span class="lead_value">{{ lead.contact }}</span>
                </div>
                <div v-if="lead.company" class="lead_field">
                  <span class="lead_label">Компания:</span>
                  <span class="lead_value">{{ lead.company }}</span>
                </div>
                <div v-if="lead.services" class="lead_field">
                  <span class="lead_label">Услуги:</span>
                  <span class="lead_value">{{ lead.services }}</span>
                </div>
                <div v-if="lead.task" class="lead_field">
                  <span class="lead_label">Задача:</span>
                  <span class="lead_value">{{ lead.task }}</span>
                </div>
                <div v-if="lead.budget" class="lead_field">
                  <span class="lead_label">Бюджет:</span>
                  <span class="lead_value lead_budget">{{ getBudgetText(lead.budget) }}</span>
                </div>
              </div>

              <div class="lead_card_footer">
                <button @click="deleteLead(lead.id)" class="lead_delete_btn" title="Удалить заявку">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4h12M6.5 7v5M9.5 7v5M3 4l0.5 9c0 0.5 0.5 1 1 1h6c0.5 0 1-0.5 1-1L13 4M5.5 4V3c0-0.5 0.5-1 1-1h3c0.5 0 1 0.5 1 1v1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Удалить
                </button>
              </div>
            </div>
          </div>

          <div v-else class="leads_empty">
            <p>Нет заявок</p>
          </div>
        </section>

        <!-- SETTINGS TAB -->
        <section v-if="activeTab === 'settings'" class="content_section">
          <div class="section_header">
            <div>
              <h2>Настройки</h2>
            </div>
          </div>

          <!-- Администраторы -->
          <div class="admins_section">
            <div class="admins_header">
              <div class="admins_title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" stroke="currentColor" stroke-width="1.5" fill="currentColor"/>
                </svg>
                <div>
                  <h3>Управление администраторами</h3>
                  <p class="admins_subtitle">{{ admins.length }} администратор(ов) в системе</p>
                </div>
              </div>
            </div>

            <div v-if="admins.length > 0" class="admins_grid">
              <div v-for="admin in admins" :key="admin.id" class="admin_card_new">
                <div class="admin_card_header">
                  <div class="admin_avatar">{{ admin.email.charAt(0).toUpperCase() }}</div>
                  <div class="admin_status_indicator" :class="admin.status === 'active' ? 'active' : 'inactive'"></div>
                </div>

                <div class="admin_card_content">
                  <h4 class="admin_email">{{ admin.email }}</h4>
                  <div class="admin_status_badge" :class="`status-${admin.status}`">
                    <span class="status-dot"></span>
                    {{ admin.status === 'active' ? 'Активен' : 'Отключен' }}
                  </div>
                </div>

                <div class="admin_card_actions">
                  <button
                    @click="toggleAdminStatus(admin.id)"
                    class="admin_action_btn"
                    :class="admin.status === 'active' ? 'btn-deactivate' : 'btn-activate'"
                    :title="admin.status === 'active' ? 'Отключить администратора' : 'Активировать администратора'"
                  >
                    <svg v-if="admin.status === 'active'" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 3L6 10L3 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 3L3 13M3 3L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    {{ admin.status === 'active' ? 'Отключить' : 'Включить' }}
                  </button>
                </div>
              </div>
            </div>

            <div v-else class="admins_empty">
              <p>Нет администраторов в системе</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { useI18nStore } from '../stores/i18n'

export default {
  name: 'AdminPanel',
  setup() {
    const i18nStore = useI18nStore()
    return { i18nStore }
  },
  data() {
    return {
      activeTab: 'projects',
      showProjectForm: false,
      editingProjectId: null,
      projects: [],
      leads: [],
      admins: [],
      projectForm: {
        name: '',
        // Russian (default)
        title_ru: '',
        subtitle_ru: '',
        siteUrl_ru: '',
        // English
        title_en: '',
        subtitle_en: '',
        siteUrl_en: '',
        // Spanish
        title_es: '',
        subtitle_es: '',
        siteUrl_es: '',
        // Descriptions (language-specific)
        description_ru: '',
        description_en: '',
        description_es: '',
        // Images
        main_image: '',
        secondary_image: '',
        gallery_images: '',
        main_image_file: null,
        secondary_image_file: null,
        gallery_images_files: null,
        position: 0,
      },
      selectedLanguage: 'ru',
      previews: {
        main_image: null,
        secondary_image: null,
        gallery_images: [],
      },
      draggedIndex: null,
      dragOverIndex: null,
      token: localStorage.getItem('admin_token'),
      adminUsername: localStorage.getItem('admin_username') || 'Admin',
      navItems: [
        { id: 'projects', label: 'проекты' },
        { id: 'leads', label: 'заявки' },
        { id: 'settings', label: 'настройки' }
      ],
      saveNotification: {
        show: false,
        message: 'Сохранено'
      }
    }
  },
  computed: {
    activePage() {
      const item = this.navItems.find(i => i.id === this.activeTab)
      return item ? item.label : 'обзор'
    },
    today() {
      const date = new Date()
      const day = date.getDate()
      const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
      const year = date.getFullYear()
      return `Сегодня ${day} ${months[date.getMonth()]} ${year}`
    },
    leadsCount() {
      return this.leads.length
    },
    projectsCount() {
      return this.projects.length
    }
  },
  mounted() {
    if (!this.token) {
      this.$router.push('/login')
      return
    }
    this.fetchProjects()
    this.fetchLeads()
    this.fetchAdmins()
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('ru-RU')
    },
    async fetchProjects() {
      try {
        const response = await fetch('http://localhost:5000/api/projects')
        const data = await response.json()
        console.log('Fetched projects:', data)
        this.projects = data
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    },
    async fetchLeads() {
      try {
        const response = await fetch('http://localhost:5000/api/leads', {
          headers: { Authorization: `Bearer ${this.token}` }
        })
        this.leads = await response.json()
      } catch (error) {
        console.error('Error fetching leads:', error)
      }
    },
    toggleForm() {
      if (this.showProjectForm && this.editingProjectId) {
        this.cancelEdit()
      } else {
        this.showProjectForm = !this.showProjectForm
      }
    },
    editProject(project) {
      this.editingProjectId = project.id
      this.projectForm = {
        name: project.name,
        title_ru: project.title_ru || '',
        subtitle_ru: project.subtitle_ru || '',
        siteUrl_ru: project.siteUrl_ru || '',
        description_ru: project.description_ru || '',
        title_en: project.title_en || '',
        subtitle_en: project.subtitle_en || '',
        siteUrl_en: project.siteUrl_en || '',
        description_en: project.description_en || '',
        title_es: project.title_es || '',
        subtitle_es: project.subtitle_es || '',
        siteUrl_es: project.siteUrl_es || '',
        description_es: project.description_es || '',
        main_image: project.main_image,
        secondary_image: project.secondary_image || '',
        gallery_images: project.gallery_images || '',
        main_image_file: null,
        secondary_image_file: null,
        gallery_images_files: null,
        position: project.position || 0
      }
      this.previews = {
        main_image: project.main_image ? (project.main_image.startsWith('http') ? project.main_image : `http://localhost:5000${project.main_image}`) : null,
        secondary_image: project.secondary_image ? (project.secondary_image.startsWith('http') ? project.secondary_image : `http://localhost:5000${project.secondary_image}`) : null,
        gallery_images: [],
      }
      this.showProjectForm = true
      this.selectedLanguage = 'ru'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    cancelEdit() {
      this.editingProjectId = null
      this.projectForm = {
        name: '',
        title_ru: '', subtitle_ru: '', siteUrl_ru: '', description_ru: '',
        title_en: '', subtitle_en: '', siteUrl_en: '', description_en: '',
        title_es: '', subtitle_es: '', siteUrl_es: '', description_es: '',
        main_image: '', secondary_image: '', gallery_images: '',
        main_image_file: null, secondary_image_file: null,
        gallery_images_files: null, position: 0
      }
      this.previews = {
        main_image: null,
        secondary_image: null,
        gallery_images: [],
      }
      this.showProjectForm = false
      this.selectedLanguage = 'ru'
    },
    async saveProject() {
      if (this.editingProjectId) {
        await this.updateProject()
      } else {
        await this.addProject()
      }
    },
    async addProject() {
      try {
        const formData = new FormData()
        formData.append('name', this.projectForm.name)
        formData.append('position', this.projectForm.position || 0)

        // Language-specific fields
        formData.append('title_ru', this.projectForm.title_ru)
        formData.append('subtitle_ru', this.projectForm.subtitle_ru)
        formData.append('siteUrl_ru', this.projectForm.siteUrl_ru)
        formData.append('description_ru', this.projectForm.description_ru)

        formData.append('title_en', this.projectForm.title_en)
        formData.append('subtitle_en', this.projectForm.subtitle_en)
        formData.append('siteUrl_en', this.projectForm.siteUrl_en)
        formData.append('description_en', this.projectForm.description_en)

        formData.append('title_es', this.projectForm.title_es)
        formData.append('subtitle_es', this.projectForm.subtitle_es)
        formData.append('siteUrl_es', this.projectForm.siteUrl_es)
        formData.append('description_es', this.projectForm.description_es)

        if (this.projectForm.main_image_file) {
          formData.append('main_image', this.projectForm.main_image_file)
        }
        if (this.projectForm.secondary_image_file) {
          formData.append('secondary_image', this.projectForm.secondary_image_file)
        }
        if (this.projectForm.gallery_images_files && this.projectForm.gallery_images_files.length > 0) {
          for (let i = 0; i < this.projectForm.gallery_images_files.length; i++) {
            formData.append('gallery_images', this.projectForm.gallery_images_files[i])
          }
        }

        const response = await fetch('http://localhost:5000/api/projects', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.token}`
          },
          body: formData
        })
        if (response.ok) {
          const result = await response.json()
          console.log('Project created:', result)
          this.showSaveNotification('Проект добавлен')
          this.projectForm = {
            name: '',
            title_ru: '', subtitle_ru: '', siteUrl_ru: '', description_ru: '',
            title_en: '', subtitle_en: '', siteUrl_en: '', description_en: '',
            title_es: '', subtitle_es: '', siteUrl_es: '', description_es: '',
            main_image: '', secondary_image: '', gallery_images: '',
            main_image_file: null, secondary_image_file: null,
            gallery_images_files: null, position: 0
          }
          this.previews = {
            main_image: null,
            secondary_image: null,
            gallery_images: [],
          }
          this.showProjectForm = false
          this.selectedLanguage = 'ru'
          setTimeout(() => this.fetchProjects(), 500)
        } else {
          alert('Ошибка при добавлении проекта')
        }
      } catch (error) {
        console.error('Error adding project:', error)
        alert('Ошибка при загрузке файлов')
      }
    },
    async updateProject() {
      try {
        const formData = new FormData()
        formData.append('name', this.projectForm.name)
        formData.append('position', this.projectForm.position || 0)

        // Language-specific fields
        formData.append('title_ru', this.projectForm.title_ru)
        formData.append('subtitle_ru', this.projectForm.subtitle_ru)
        formData.append('siteUrl_ru', this.projectForm.siteUrl_ru)
        formData.append('description_ru', this.projectForm.description_ru)

        formData.append('title_en', this.projectForm.title_en)
        formData.append('subtitle_en', this.projectForm.subtitle_en)
        formData.append('siteUrl_en', this.projectForm.siteUrl_en)
        formData.append('description_en', this.projectForm.description_en)

        formData.append('title_es', this.projectForm.title_es)
        formData.append('subtitle_es', this.projectForm.subtitle_es)
        formData.append('siteUrl_es', this.projectForm.siteUrl_es)
        formData.append('description_es', this.projectForm.description_es)

        if (this.projectForm.main_image_file) {
          formData.append('main_image', this.projectForm.main_image_file)
        } else if (this.projectForm.main_image) {
          formData.append('main_image_url', this.projectForm.main_image)
        }

        if (this.projectForm.secondary_image_file) {
          formData.append('secondary_image', this.projectForm.secondary_image_file)
        } else if (this.projectForm.secondary_image) {
          formData.append('secondary_image_url', this.projectForm.secondary_image)
        }

        if (this.projectForm.gallery_images_files && this.projectForm.gallery_images_files.length > 0) {
          for (let i = 0; i < this.projectForm.gallery_images_files.length; i++) {
            formData.append('gallery_images', this.projectForm.gallery_images_files[i])
          }
        } else if (this.projectForm.gallery_images) {
          formData.append('gallery_images_urls', this.projectForm.gallery_images)
        }

        const response = await fetch(`http://localhost:5000/api/projects/${this.editingProjectId}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${this.token}`
          },
          body: formData
        })

        if (response.ok) {
          console.log('Project updated')
          this.showSaveNotification('Проект обновлен')
          this.cancelEdit()
          setTimeout(() => this.fetchProjects(), 500)
        } else {
          this.showSaveNotification('Ошибка при обновлении проекта')
        }
      } catch (error) {
        console.error('Error updating project:', error)
        alert('Ошибка при загрузке файлов')
      }
    },
    async deleteProject(id) {
      if (!confirm('Удалить проект?')) return
      try {
        await fetch(`http://localhost:5000/api/projects/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${this.token}` }
        })
        this.fetchProjects()
      } catch (error) {
        console.error('Error deleting project:', error)
      }
    },
    async deleteLead(id) {
      if (!confirm('Удалить заявку?')) return
      try {
        await fetch(`http://localhost:5000/api/leads/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${this.token}` }
        })
        this.fetchLeads()
      } catch (error) {
        console.error('Error deleting lead:', error)
      }
    },
    handleLogout() {
      localStorage.removeItem('admin_token')
      localStorage.removeItem('admin_username')
      this.$router.push('/login')
    },
    getImageUrl(imagePath) {
      if (!imagePath) return ''
      if (imagePath.startsWith('http')) return imagePath
      return `http://localhost:5000${imagePath}`
    },
    getBudgetText(budgetId) {
      const budgetMap = {
        'b1': 'до 100 тыс. ₽',
        'b2': '100 тыс. ₽ - 200 тыс. ₽',
        'b3': '200 тыс. ₽ - 500 тыс. ₽',
        'b4': '500 тыс. ₽ - 1 млн. ₽',
        'b5': 'Не знаю свой бюджет'
      }
      return budgetMap[budgetId] || budgetId
    },
    onMainImageChange(e) {
      const file = e.target.files[0]
      if (file) {
        this.projectForm.main_image_file = file
        const reader = new FileReader()
        reader.onload = (event) => {
          this.previews.main_image = event.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    onSecondaryImageChange(e) {
      const file = e.target.files[0]
      if (file) {
        this.projectForm.secondary_image_file = file
        const reader = new FileReader()
        reader.onload = (event) => {
          this.previews.secondary_image = event.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    onGalleryImagesChange(e) {
      const files = e.target.files
      if (files && files.length > 0) {
        this.projectForm.gallery_images_files = files
        this.previews.gallery_images = []
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader()
          reader.onload = (event) => {
            this.previews.gallery_images.push(event.target.result)
          }
          reader.readAsDataURL(files[i])
        }
      }
    },
    onDragStart(e, index) {
      this.draggedIndex = index
      e.dataTransfer.effectAllowed = 'move'
    },
    onDragOver(e) {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'
    },
    onDrop(e, index) {
      e.preventDefault()
      if (this.draggedIndex !== null && this.draggedIndex !== index) {
        const draggedProject = this.projects[this.draggedIndex]
        this.projects.splice(this.draggedIndex, 1)
        this.projects.splice(index, 0, draggedProject)

        // Обновить позиции
        this.updateProjectPositions()
      }
    },
    onDragEnd() {
      this.draggedIndex = null
      this.dragOverIndex = null
    },
    async updateProjectPositions() {
      try {
        const positions = this.projects.map((p, i) => ({
          id: p.id,
          position: i
        }))

        const response = await fetch('http://localhost:5000/api/projects/reorder/positions', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.token}`
          },
          body: JSON.stringify({ positions })
        })

        if (!response.ok) {
          console.error('Error updating positions')
          this.fetchProjects()
        }
      } catch (error) {
        console.error('Error:', error)
        this.fetchProjects()
      }
    },
    async exportLeadsReport() {
      // Фильтруем заявки за последний месяц
      const now = new Date()
      const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

      const leadsThisMonth = this.leads.filter(lead => {
        const leadDate = new Date(lead.created_at)
        return leadDate >= oneMonthAgo && leadDate <= now
      })

      // Создаем HTML контент (белый фон, как Word)
      const htmlElement = document.createElement('div')
      htmlElement.style.padding = '25mm'
      htmlElement.style.backgroundColor = '#FFFFFF'
      htmlElement.style.color = '#000000'
      htmlElement.style.fontFamily = 'Arial, sans-serif'
      htmlElement.style.lineHeight = '1.5'
      htmlElement.style.fontSize = '11px'

      let htmlContent = `
        <div style="font-family: Arial, sans-serif; color: #000000;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 18px; margin: 0; border-bottom: 1px solid #000000; padding-bottom: 10px;">
              ОТЧЕТ ПО ЗАЯВКАМ
            </h1>
          </div>

          <div style="margin-bottom: 15px; color: #333333;">
            <p style="margin: 5px 0;"><strong>Период:</strong> ${oneMonthAgo.toLocaleDateString('ru-RU')} - ${now.toLocaleDateString('ru-RU')}</p>
            <p style="margin: 5px 0;"><strong>Всего заявок:</strong> ${leadsThisMonth.length}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #CCCCCC; margin: 15px 0;">
      `

      // Добавляем информацию по каждой заявке
      leadsThisMonth.forEach((lead, index) => {
        htmlContent += `
          <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #EEEEEE;">
            <p style="margin: 0 0 10px 0; font-weight: bold; font-size: 12px;">Заявка №${index + 1}</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 10px;">
              <tr>
                <td style="padding: 3px 0; font-weight: bold; width: 120px;">Имя:</td>
                <td style="padding: 3px 0;">${lead.name}</td>
              </tr>
              <tr>
                <td style="padding: 3px 0; font-weight: bold;">Контакт:</td>
                <td style="padding: 3px 0;">${lead.contact}</td>
              </tr>
              ${lead.company ? `
                <tr>
                  <td style="padding: 3px 0; font-weight: bold;">Компания:</td>
                  <td style="padding: 3px 0;">${lead.company}</td>
                </tr>
              ` : ''}
              ${lead.services ? `
                <tr>
                  <td style="padding: 3px 0; font-weight: bold;">Услуги:</td>
                  <td style="padding: 3px 0;">${lead.services}</td>
                </tr>
              ` : ''}
              ${lead.task ? `
                <tr>
                  <td style="padding: 3px 0; font-weight: bold;">Задача:</td>
                  <td style="padding: 3px 0;">${lead.task}</td>
                </tr>
              ` : ''}
              ${lead.budget ? `
                <tr>
                  <td style="padding: 3px 0; font-weight: bold;">Бюджет:</td>
                  <td style="padding: 3px 0;">${this.getBudgetText(lead.budget)}</td>
                </tr>
              ` : ''}
              <tr>
                <td style="padding: 3px 0; font-weight: bold;">Дата:</td>
                <td style="padding: 3px 0;">${new Date(lead.created_at).toLocaleDateString('ru-RU')} ${new Date(lead.created_at).toLocaleTimeString('ru-RU')}</td>
              </tr>
            </table>
          </div>
        `
      })

      htmlContent += `
          <hr style="border: none; border-top: 1px solid #CCCCCC; margin: 20px 0;">
          <p style="font-size: 9px; color: #666666; margin: 0; text-align: right;">
            Отчет сформирован: ${now.toLocaleDateString('ru-RU')} ${now.toLocaleTimeString('ru-RU')}
          </p>
        </div>
      `

      htmlElement.innerHTML = htmlContent
      document.body.appendChild(htmlElement)

      try {
        // Конвертируем в canvas с белым фоном
        const canvas = await html2canvas(htmlElement, {
          backgroundColor: '#FFFFFF',
          scale: 2,
          logging: false,
          useCORS: true
        })

        // Создаем PDF
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        })

        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()
        const imgWidth = pdfWidth
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        let yPosition = 0
        let remainingHeight = imgHeight

        // Добавляем изображение, разбивая на страницы если нужно
        while (remainingHeight > 0) {
          const pageHeight = pdfHeight
          const heightToDraw = Math.min(remainingHeight, pageHeight)
          const cropHeight = (heightToDraw * canvas.height) / imgHeight

          const croppedCanvas = document.createElement('canvas')
          croppedCanvas.width = canvas.width
          croppedCanvas.height = cropHeight

          const ctx = croppedCanvas.getContext('2d')
          ctx.drawImage(
            canvas,
            0,
            (imgHeight - remainingHeight) * (canvas.height / imgHeight),
            canvas.width,
            cropHeight,
            0,
            0,
            canvas.width,
            cropHeight
          )

          const croppedImgData = croppedCanvas.toDataURL('image/png')
          pdf.addImage(croppedImgData, 'PNG', 0, yPosition, imgWidth, heightToDraw)

          remainingHeight -= heightToDraw
          if (remainingHeight > 0) {
            pdf.addPage()
            yPosition = 0
          }
        }

        // Скачиваем PDF
        const fileName = `leads_report_${new Date().toISOString().split('T')[0]}.pdf`
        pdf.save(fileName)
      } catch (error) {
        console.error('Error generating PDF:', error)
      } finally {
        // Удаляем временный элемент
        document.body.removeChild(htmlElement)
      }
    },
    async fetchAdmins() {
      try {
        const response = await fetch('http://localhost:5000/api/auth/admins', {
          headers: { Authorization: `Bearer ${this.token}` }
        })
        this.admins = await response.json()
      } catch (error) {
        console.error('Error fetching admins:', error)
      }
    },
    async toggleAdminStatus(adminId) {
      try {
        const response = await fetch(`http://localhost:5000/api/auth/admins/${adminId}/toggle`, {
          method: 'PATCH',
          headers: { Authorization: `Bearer ${this.token}` }
        })

        if (response.ok) {
          this.fetchAdmins()
        } else {
          alert('Ошибка при изменении статуса')
        }
      } catch (error) {
        console.error('Error toggling admin status:', error)
      }
    },
    showSaveNotification(message = 'Сохранено') {
      this.saveNotification.message = message
      this.saveNotification.show = true
      setTimeout(() => {
        this.saveNotification.show = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.admin_layout {
  display: flex;
  min-height: 100vh;
  background: #EAF0F6;
  font-family: 'Manrope', sans-serif;
}

/* SIDEBAR */
.admin_sidebar {
  width: 150px;
  background: rgba(39, 39, 39, 0.92);
  border: 1px solid #EAF0F6;
  backdrop-filter: blur(2.5px);
  border-radius: 30px;
  padding: 30px 0;
  margin: 40px 0 40px 40px;
  height: fit-content;
  position: fixed;
  left: 40px;
  top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.sidebar_logo {
  width: 90px;
  height: 84px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo_img {
  width: 74px;
  height: 74px;
  object-fit: contain;
}

.sidebar_nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  flex: 1;
}

.nav_item {
  width: 120px;
  height: 79px;
  border-radius: 18px;
  background: transparent;
  border: none;
  color: rgba(234, 240, 246, 0.55);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 14px 0 12px;
  position: relative;
}

.nav_item:hover {
  background: rgba(0, 102, 255, 0.1);
}

.nav_item.active {
  background: rgba(0, 102, 255, 0.18);
  color: #EAF0F6;
}

.nav_item.active::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.002);
  border: 1px solid rgba(0, 102, 255, 0.5);
  border-radius: 18px;
  pointer-events: none;
}

.nav_item.active svg path {
  stroke-opacity: 1;
}

.nav_icon {
  width: 26px;
  height: 26px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

.nav_label {
  font-size: 14px;
  font-weight: 600;
  text-transform: lowercase;
  text-align: center;
}

.sidebar_footer {
  margin-top: auto;
  padding: 0 0 24px;
}

.lang_switcher {
  display: flex;
  gap: 8px;
}

.lang_btn {
  width: 40px;
  height: 25px;
  border: 1px solid #EAF0F6;
  border-radius: 10px;
  background: rgba(39, 39, 39, 0.5);
  color: #EAF0F6;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.6;
}

.lang_btn.active {
  background: rgba(0, 102, 255, 0.4);
  border-color: #0066FF;
  opacity: 1;
}

/* MAIN CONTENT */
.admin_main {
  flex: 1;
  margin-left: 230px;
  padding: 40px;
}

/* TOPBAR */
.admin_topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  height: 80px;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(15, 15, 20, 0.04), 0px 8px 24px rgba(15, 15, 20, 0.06);
  border-radius: 20px;
  margin-bottom: 24px;
}

.topbar_breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #5C6B7C;
}

.breadcrumb_current {
  color: #0F0F14;
  font-weight: 800;
}

.topbar_actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  justify-content: flex-end;
}

.search_box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #EAF0F6;
  padding: 0 16px;
  border-radius: 14px;
  flex: 1;
  max-width: 380px;
  height: 44px;
}

.search_icon {
  width: 18px;
  height: 18px;
  color: #5C6B7C;
  flex-shrink: 0;
}

.search_input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 15px;
  color: #5C6B7C;
}

.search_input::placeholder {
  color: #5C6B7C;
}

.topbar_btn {
  width: 44px;
  height: 44px;
  background: #EAF0F6;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0F0F14;
  transition: all 0.2s;
}

.topbar_btn:hover {
  background: #DCE5F0;
}

.topbar_btn svg {
  width: 20px;
  height: 20px;
}

.topbar_profile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 12px;
  border-left: 1px solid #E0E0E0;
}

.profile_avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0066FF 0%, #5C6B7C 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-weight: 800;
  font-size: 16px;
  flex-shrink: 0;
}

.profile_info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.profile_name {
  font-size: 14px;
  font-weight: 800;
  color: #0F0F14;
}

.profile_role {
  font-size: 12px;
  font-weight: 600;
  color: #5C6B7C;
}

.profile_logout {
  width: 36px;
  height: 36px;
  background: rgba(232, 78, 34, 0.1);
  border: 1px solid rgba(232, 78, 34, 0.3);
  border-radius: 10px;
  color: #E84E22;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile_logout:hover {
  background: rgba(232, 78, 34, 0.2);
}

.profile_logout svg {
  width: 18px;
  height: 18px;
}

/* HEADER */
.admin_header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  padding: 24px 0;
}

.header_greeting {
  flex: 1;
}

.header_title {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #0F0F14;
  margin-bottom: 10px;
}

.header_subtitle {
  font-size: 16px;
  font-weight: 600;
  color: #5C6B7C;
}

.header_actions {
  display: flex;
  gap: 12px;
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 24px;
  height: 50px;
  border-radius: 25px;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn_outline {
  border: 2px solid #0F0F14;
  color: #0F0F14;
  background: transparent;
}

.btn_outline:hover {
  background: #F5F5F5;
}

.btn_primary {
  background: #B4F000;
  color: #0F0F14;
}

.btn_primary:hover {
  opacity: 0.9;
}

.btn_submit {
  background: #0066FF;
  color: #FFFFFF;
}

.btn_submit:hover {
  opacity: 0.9;
}

.btn_delete {
  padding: 8px 16px;
  height: auto;
  background: rgba(220, 53, 69, 0.2);
  color: #ff6b6b;
  border: 1px solid rgba(220, 53, 69, 0.5);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.btn_delete:hover {
  background: rgba(220, 53, 69, 0.3);
}

/* STATS CARDS */
.stats_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.stat_card {
  position: relative;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0px 1px 2px rgba(15, 15, 20, 0.04), 0px 8px 24px rgba(15, 15, 20, 0.06);
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 173px;
}

.stat_card--light {
  background: #FFFFFF;
}

.stat_card--dark {
  background: #0F0F14;
}

.stat_card--lime {
  background: #B4F000;
}

.stat_label {
  font-size: 14px;
  font-weight: 600;
  text-transform: lowercase;
  color: #5C6B7C;
}

.stat_card--dark .stat_label {
  color: rgba(234, 240, 246, 0.6);
}

.stat_card--lime .stat_label {
  color: #0F0F14;
  opacity: 0.7;
}

.stat_value {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -1px;
  color: #0F0F14;
}

.stat_value--light {
  color: #EAF0F6;
}

.stat_value--dark {
  color: #0F0F14;
}

.stat_trend {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
  width: fit-content;
}

.trend_positive {
  background: rgba(180, 240, 0, 0.18);
  color: #3A6B00;
}

.stat_card--dark .trend_positive {
  background: rgba(180, 240, 0, 0.16);
  color: #B4F000;
}

.trend_negative {
  background: rgba(232, 78, 34, 0.12);
  color: #E84E22;
}

.trend_neutral {
  background: rgba(15, 15, 20, 0.1);
  color: #0F0F14;
}

.stat_trend svg {
  width: 12px;
  height: 12px;
}

.stat_icon {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: #EAF0F6;
  border-radius: 14px;
  padding: 10px;
  color: #0F0F14;
}

.stat_card--dark .stat_icon {
  background: rgba(234, 240, 246, 0.08);
  color: #EAF0F6;
}

/* CONTENT */
.admin_content {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0px 1px 2px rgba(15, 15, 20, 0.04), 0px 8px 24px rgba(15, 15, 20, 0.06);
}

.content_section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section_header h2 {
  font-size: 24px;
  font-weight: 800;
  color: #0F0F14;
  letter-spacing: -0.3px;
}

.section_count {
  font-size: 14px;
  font-weight: 600;
  color: #5C6B7C;
}

.section_subtitle {
  font-size: 14px;
  font-weight: 600;
  color: #5C6B7C;
  margin-top: 4px;
}

.form_section {
  background: rgba(39, 39, 39, 0.05);
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 1px solid rgba(180, 240, 0, 0.2);
}

.form_section h3 {
  font-size: 18px;
  font-weight: 800;
  color: #0F0F14;
  margin-bottom: 20px;
}

.form_grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.form_input {
  padding: 10px 15px;
  background: rgba(234, 240, 246, 0.5);
  border: 1px solid rgba(180, 240, 0, 0.3);
  border-radius: 8px;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  color: #0F0F14;
}

.form_input:focus {
  outline: none;
  border-color: #B4F000;
  background: rgba(234, 240, 246, 0.8);
}

.form_textarea {
  resize: vertical;
  min-height: 100px;
  grid-column: 1 / -1;
}

.form_grid > .btn_primary {
  grid-column: 1 / -1;
}

.portfolio_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.portfolio_card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #E0E0E0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.portfolio_card:hover {
  border-color: #B4F000;
  box-shadow: 0 8px 24px rgba(180, 240, 0, 0.15);
  transform: translateY(-4px);
}

.portfolio_card[draggable="true"] {
  cursor: move;
}

.portfolio_card--dragging {
  opacity: 0.5;
  border-color: #0066FF;
}

.portfolio_image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, #EAF0F6 0%, #DCE5F0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolio_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio_card:hover .portfolio_image img {
  transform: scale(1.05);
}

.portfolio_image--empty {
  color: rgba(180, 240, 0, 0.5);
}

.portfolio_image--empty svg {
  width: 60px;
  height: 60px;
}

.portfolio_content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.portfolio_content h3 {
  font-size: 16px;
  font-weight: 800;
  color: #0F0F14;
  margin: 0;
}

.portfolio_subtitle {
  font-size: 13px;
  font-weight: 600;
  color: #5C6B7C;
  margin: 0;
}

.portfolio_description {
  font-size: 13px;
  color: #5C6B7C;
  margin: 0;
  flex: 1;
}

.portfolio_actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 10px;
}

.portfolio_actions .btn_edit {
  grid-column: 1 / -1;
}

.btn_small {
  padding: 6px 10px;
  height: auto;
  font-size: 11px;
  font-weight: 600;
  flex: 1;
  min-width: 0;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.empty_state {
  text-align: center;
  padding: 60px 40px;
  color: #5C6B7C;
}

.empty_state svg {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty_state h3 {
  font-size: 20px;
  font-weight: 800;
  color: #0F0F14;
  margin-bottom: 10px;
}

.empty_state p {
  font-size: 14px;
  color: #5C6B7C;
}

.leads_container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.lead_card_new {
  background: #fff;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.lead_card_new:hover {
  box-shadow: 0 8px 20px rgba(90, 143, 255, 0.12);
  border-color: #5A8FFF;
  transform: translateY(-2px);
}

.lead_card_header {
  padding: 20px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  border-bottom: 1px solid #F0F0F0;
}

.lead_avatar {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(135deg, #5A8FFF 0%, #7BA3FF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  flex-shrink: 0;
}

.lead_header_info {
  flex: 1;
  min-width: 0;
}

.lead_name {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 700;
  color: #0F0F14;
  word-break: break-word;
}

.lead_date {
  margin: 0;
  font-size: 12px;
  color: #999;
}

.lead_card_content {
  padding: 15px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lead_field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.lead_label {
  font-size: 11px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.lead_value {
  font-size: 13px;
  color: #0F0F14;
  word-break: break-word;
}

.lead_budget {
  color: #5A8FFF;
  font-weight: 600;
}

.lead_card_footer {
  padding: 12px 20px;
  border-top: 1px solid #F0F0F0;
}

.lead_delete_btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background: #FFEBEE;
  color: #C62828;
  border: 1px solid #FFCDD2;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lead_delete_btn:hover {
  background: #C62828;
  color: #fff;
  border-color: #C62828;
  box-shadow: 0 4px 12px rgba(198, 40, 40, 0.2);
}

.leads_empty {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.leads_empty p {
  margin: 0;
  font-size: 16px;
}

.form_file_group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form_label {
  font-size: 13px;
  font-weight: 600;
  color: #0F0F14;
}

.form_file_name {
  font-size: 12px;
  color: #5C6B7C;
  margin: 0;
  font-style: italic;
}

.form_preview {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-top: 12px;
  border: 1px solid rgba(180, 240, 0, 0.3);
}

.form_preview--small {
  max-width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 8px;
  margin-bottom: 8px;
}

.form_gallery_previews {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

/* RESPONSIVE */
@media (max-width: 1400px) {
  .stats_grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .portfolio_grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .portfolio_grid {
    grid-template-columns: 1fr;
  }

  .form_grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .admin_layout {
    flex-direction: column;
  }

  .admin_sidebar {
    position: static;
    width: 100%;
    margin: 0;
    border-radius: 0;
    flex-direction: row;
    height: auto;
    padding: 20px;
  }

  .sidebar_nav {
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
  }

  .nav_item {
    width: 80px;
    height: 60px;
  }

  .admin_main {
    margin-left: 0;
    padding: 20px;
  }

  .stats_grid {
    grid-template-columns: 1fr;
  }

  .admin_header {
    flex-direction: column;
    gap: 16px;
  }

  .header_actions {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .btn {
    width: auto;
    justify-content: center;
  }
}

/* Settings */
.admins_section {
  background: #fff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.admins_header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E5E5E5;
}

.admins_title {
  display: flex;
  align-items: center;
  gap: 15px;
}

.admins_title svg {
  color: #5A8FFF;
  flex-shrink: 0;
}

.admins_title h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #0F0F14;
}

.admins_subtitle {
  margin: 4px 0 0 0;
  font-size: 13px;
  color: #999;
}

.admins_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.admin_card_new {
  background: linear-gradient(135deg, #F8F9FF 0%, #F5F8FF 100%);
  border: 1px solid #E8EFFF;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
}

.admin_card_new:hover {
  box-shadow: 0 8px 20px rgba(90, 143, 255, 0.15);
  border-color: #5A8FFF;
  transform: translateY(-2px);
}

.admin_card_header {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
}

.admin_avatar {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #5A8FFF 0%, #7BA3FF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  flex-shrink: 0;
}

.admin_status_indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid #fff;
}

.admin_status_indicator.active {
  background: #4CAF50;
}

.admin_status_indicator.inactive {
  background: #FF6B6B;
}

.admin_card_content {
  flex: 1;
}

.admin_email {
  margin: 0 0 10px 0;
  font-size: 15px;
  font-weight: 600;
  color: #0F0F14;
  word-break: break-all;
}

.admin_status_badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 6px;
}

.admin_status_badge.status-active {
  background: #E8F5E9;
  color: #2E7D32;
}

.admin_status_badge.status-inactive {
  background: #FFEBEE;
  color: #C62828;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
}

.admin_status_badge.status-active .status-dot {
  background: #2E7D32;
}

.admin_status_badge.status-inactive .status-dot {
  background: #C62828;
}

.admin_card_actions {
  display: flex;
  gap: 10px;
}

.admin_action_btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.admin_action_btn.btn-activate {
  background: #E3F2FD;
  color: #1976D2;
  border: 1px solid #90CAF9;
}

.admin_action_btn.btn-activate:hover {
  background: #1976D2;
  color: #fff;
  border-color: #1976D2;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

.admin_action_btn.btn-deactivate {
  background: #FFF3E0;
  color: #F57C00;
  border: 1px solid #FFB74D;
}

.admin_action_btn.btn-deactivate:hover {
  background: #F57C00;
  color: #fff;
  border-color: #F57C00;
  box-shadow: 0 4px 12px rgba(245, 124, 0, 0.3);
}

.admins_empty {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.admins_empty p {
  margin: 0;
  font-size: 16px;
}

/* Language Tabs */
.language_tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #E5E5E5;
}

.language_tab {
  padding: 12px 16px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 13px;
  font-weight: 600;
  color: #999;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.language_tab:hover {
  color: #0F0F14;
}

.language_tab.active {
  color: #5A8FFF;
  border-bottom-color: #5A8FFF;
  background: rgba(90, 143, 255, 0.08);
  border-radius: 6px 6px 0 0;
}

.language_flag {
  font-size: 16px;
}

.language_name {
  font-weight: 600;
}

/* Save Notification */
.save_notification {
  position: fixed;
  top: 30px;
  right: 30px;
  background: #0066FF;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
  z-index: 1000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* ========================
   ПЛАНШЕТ (≤ 1024px)
   ======================== */
@media (max-width: 1024px) {
  .admin_layout {
    flex-direction: column;
  }

  .admin_sidebar {
    position: static;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 12px 16px;
    flex-direction: row;
    border-radius: 0;
    gap: 8px;
    min-height: 64px;
  }

  .sidebar_logo {
    width: 40px;
    height: 40px;
    margin: 0;
    flex-shrink: 0;
  }

  .logo_img {
    width: 34px;
    height: 34px;
  }

  .sidebar_nav {
    flex-direction: row;
    gap: 4px;
    flex: 1;
    justify-content: flex-start;
  }

  .nav_item {
    width: auto;
    height: 40px;
    padding: 8px 14px;
    border-radius: 12px;
    flex-direction: row;
    gap: 6px;
  }

  .nav_icon {
    width: 20px;
    height: 20px;
  }

  .nav_label {
    font-size: 13px;
  }

  .sidebar_footer {
    margin-top: 0;
    padding: 0;
  }

  .admin_main {
    margin-left: 0;
    padding: 20px;
  }
}

/* ========================
   МОБИЛЬНЫЙ (≤ 640px)
   ======================== */
@media (max-width: 640px) {
  .admin_sidebar {
    padding: 10px 12px;
    gap: 4px;
  }

  .sidebar_logo {
    display: none;
  }

  .nav_item {
    padding: 8px 10px;
    height: 38px;
  }

  .nav_label {
    font-size: 12px;
  }

  .admin_main {
    padding: 15px;
  }

  .admin_topbar {
    padding: 12px 16px;
    flex-direction: column;
    height: auto;
    gap: 10px;
    border-radius: 14px;
    margin-bottom: 16px;
  }

  .topbar_breadcrumb {
    font-size: 13px;
  }

  .topbar_actions {
    width: 100%;
    justify-content: flex-end;
  }

  .topbar_profile {
    gap: 8px;
    padding-left: 8px;
  }

  .profile_avatar {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }

  .profile_name {
    font-size: 13px;
  }

  .profile_role {
    font-size: 11px;
  }

  .search_box {
    max-width: 100%;
  }
}

/* ========================
   МОБИЛЬНЫЙ (≤ 480px)
   ======================== */
@media (max-width: 480px) {
  .nav_label {
    display: none;
  }

  .nav_item {
    width: 42px;
    padding: 8px;
    justify-content: center;
  }

  .admin_main {
    padding: 10px;
  }

  .admin_topbar {
    padding: 10px 12px;
    border-radius: 12px;
    margin-bottom: 12px;
  }
}

</style>