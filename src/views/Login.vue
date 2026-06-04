<template>
    <div class="login_page">
        <div class="login_container">
            <img class="login_logo" src="../assets/logo.svg" alt="Котин">
            <h1 class="login_title">Админ-панель</h1>

            <div class="login_tabs">
                <button
                    class="login_tab"
                    :class="{ active: isLoginMode }"
                    @click="isLoginMode = true"
                >
                    Вход
                </button>
                <button
                    class="login_tab"
                    :class="{ active: !isLoginMode }"
                    @click="isLoginMode = false"
                >
                    Регистрация
                </button>
            </div>

            <div class="login_form">
                <div class="login_field">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        placeholder="admin@kotinstudio.ru"
                    />
                </div>

                <div v-if="!isLoginMode" class="login_field">
                    <label for="username">Логин</label>
                    <input
                        id="username"
                        v-model="form.username"
                        type="text"
                        placeholder="ваш логин"
                    />
                </div>

                <div class="login_field">
                    <label for="password">Пароль</label>
                    <input
                        id="password"
                        v-model="form.password"
                        type="password"
                        placeholder="••••••••"
                    />
                </div>

                <div v-if="!isLoginMode" class="login_field">
                    <label for="passwordConfirm">Подтвердить пароль</label>
                    <input
                        id="passwordConfirm"
                        v-model="form.passwordConfirm"
                        type="password"
                        placeholder="••••••••"
                    />
                </div>

                <button
                    type="button"
                    class="login_btn"
                    :disabled="loading"
                    @click="isLoginMode ? handleLogin() : handleRegister()"
                >
                    {{ loading ? 'Загрузка...' : (isLoginMode ? 'Войти' : 'Создать аккаунт') }}
                </button>

                <p v-if="error" class="login_error">{{ error }}</p>
                <p v-if="success" class="login_success">{{ success }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                username: '',
                password: '',
                passwordConfirm: '',
            },
            loading: false,
            error: '',
            success: '',
            isLoginMode: true,
        }
    },
    methods: {
        async handleLogin() {
            console.log('handleLogin вызван')
            this.loading = true
            this.error = ''

            try {
                const response = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: this.form.email,
                        password: this.form.password,
                    }),
                })

                const data = await response.json()

                if (!response.ok) {
                    if (response.status === 403) {
                        this.error = 'Аккаунт не активирован. Ожидайте подтверждения администратора.'
                    } else {
                        this.error = data.error || 'Ошибка входа'
                    }
                    return
                }

                localStorage.setItem('admin_token', data.token)
                localStorage.setItem('admin_username', data.admin.username || this.form.email)
                this.$router.push('/admin')
            } catch (error) {
                this.error = 'Ошибка подключения к серверу'
                console.error(error)
            } finally {
                this.loading = false
            }
        },
        async handleRegister() {
            console.log('handleRegister вызван')
            this.loading = true
            this.error = ''

            if (!this.form.email || !this.form.password || (!this.isLoginMode && !this.form.username)) {
                this.error = 'Заполните все поля'
                this.loading = false
                console.log('Ошибка: не все поля заполнены')
                return
            }

            if (this.form.password !== this.form.passwordConfirm) {
                this.error = 'Пароли не совпадают'
                this.loading = false
                console.log('Ошибка: пароли не совпадают')
                return
            }

            if (this.form.password.length < 6) {
                this.error = 'Пароль должен быть не менее 6 символов'
                this.loading = false
                console.log('Ошибка: пароль короче 6 символов')
                return
            }

            try {
                console.log('Отправляю запрос регистрации:', { email: this.form.email, username: this.form.username })
                const response = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: this.form.email,
                        username: this.form.username,
                        password: this.form.password,
                    }),
                })

                console.log('Статус ответа:', response.status)
                const data = await response.json()
                console.log('Данные ответа:', data)

                if (!response.ok) {
                    this.error = data.error || `Ошибка регистрации (${response.status})`
                    console.error('Ошибка регистрации:', this.error)
                    return
                }

                console.log('Регистрация успешна!')
                this.success = 'Аккаунт создан! Теперь вы можете войти.'
                this.error = ''
                setTimeout(() => {
                    this.isLoginMode = true
                    this.form.email = ''
                    this.form.username = ''
                    this.form.password = ''
                    this.form.passwordConfirm = ''
                    this.success = ''
                }, 1500)
            } catch (error) {
                this.error = `Ошибка подключения: ${error.message}`
                console.error('Ошибка при регистрации:', error)
            } finally {
                this.loading = false
            }
        },
    },
    mounted() {
        console.log('Login компонент загружен. isLoginMode:', this.isLoginMode)
        if (localStorage.getItem('admin_token')) {
            this.$router.push('/admin')
        }
    },
}
</script>

<style scoped>
.login_page {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #0F0F14 0%, #1a1a20 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.login_container {
    width: 100%;
    max-width: 400px;
    background: rgba(39, 39, 39, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid #EAF0F6;
    border-radius: 20px;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.login_logo {
    width: 80px;
    height: auto;
}

.login_title {
    margin: 0;
    font-family: 'Gilroy';
    font-weight: 800;
    font-size: 32px;
    color: #EAF0F6;
    text-align: center;
}

.login_tabs {
    width: 100%;
    display: flex;
    gap: 10px;
    background: rgba(234, 240, 246, 0.05);
    padding: 4px;
    border-radius: 8px;
}

.login_tab {
    flex: 1;
    padding: 10px 16px;
    background: transparent;
    border: none;
    border-radius: 6px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 14px;
    color: rgba(234, 240, 246, 0.6);
    cursor: pointer;
    transition: all 0.2s ease;
}

.login_tab.active {
    background: #B4F000;
    color: #0F0F14;
}

.login_form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.login_field {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.login_field label {
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 14px;
    color: #EAF0F6;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.login_field input {
    padding: 12px 16px;
    background: rgba(234, 240, 246, 0.05);
    border: 1px solid #EAF0F6;
    border-radius: 10px;
    font-family: 'Gilroy';
    font-size: 16px;
    color: #EAF0F6;
    transition: all 0.2s ease;
}

.login_field input::placeholder {
    color: rgba(234, 240, 246, 0.4);
}

.login_field input:focus {
    outline: none;
    background: rgba(234, 240, 246, 0.1);
    border-color: #B4F000;
    box-shadow: 0 0 0 3px rgba(180, 240, 0, 0.1);
}

.login_btn {
    padding: 12px 24px;
    background: #B4F000;
    border: none;
    border-radius: 10px;
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 16px;
    color: #0F0F14;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 10px;
}

.login_btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(180, 240, 0, 0.3);
}

.login_btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.login_error {
    margin: 0;
    padding: 12px;
    background: rgba(220, 53, 69, 0.1);
    border: 1px solid rgba(220, 53, 69, 0.5);
    border-radius: 8px;
    font-family: 'Gilroy';
    font-size: 14px;
    color: #ff6b6b;
    text-align: center;
}

.login_success {
    margin: 0;
    padding: 12px;
    background: rgba(46, 125, 50, 0.1);
    border: 1px solid rgba(46, 125, 50, 0.5);
    border-radius: 8px;
    font-family: 'Gilroy';
    font-size: 14px;
    color: #4caf50;
    text-align: center;
}

@media (max-width: 768px) {
    .login_container {
        padding: 40px 20px;
        max-width: 90%;
    }

    .login_logo {
        width: 60px;
    }

    .login_title {
        font-size: 24px;
    }

    .login_field input {
        font-size: 14px;
    }

    .login_btn {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .login_page {
        padding: 10px;
    }

    .login_container {
        padding: 30px 15px;
        gap: 20px;
    }

    .login_logo {
        width: 50px;
    }

    .login_title {
        font-size: 20px;
    }

    .login_field label {
        font-size: 12px;
    }

    .login_field input {
        padding: 10px 12px;
        font-size: 13px;
    }

    .login_tab {
        font-size: 12px;
        padding: 8px 12px;
    }
}
</style>
