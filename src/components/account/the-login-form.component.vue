<template>
  <div class="login-form-container">
    <div class="login-form">
      <h2>{{ $t('login.title') }}</h2>

      <div class="form-group">
        <div class="input-label">
          <label for="email">{{ $t('login.email') }}:</label>
        </div>
        <div class="input-field">
          <input type="text" id="email" v-model="username" required :aria-label="$t('login.enterEmail')">
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="password">{{ $t('login.password') }}:</label>
        </div>
        <div class="input-field">
          <input type="password" id="password" v-model="password" required :aria-label="$t('login.enterPassword')">
        </div>
      </div>

      <button @click="login" :aria-label="$t('login.login')">{{ $t('login.login') }}</button>
      <br/><br/>
      <button @click="register" :aria-label="$t('login.register')">{{ $t('login.register') }}</button>
    </div>
  </div>
</template>

<script>
import { UserApiService } from "@/shared/services/user-api.service.js";
import router from "@/router.js";

export default {
  name: 'TheLoginForm',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const userApiService = new UserApiService();
        const user = await userApiService.login(this.username, this.password);
        if (user) {
          // Aquí asumimos que user.user_type contiene el tipo de usuario (vendedor o agricultor)
          localStorage.setItem('userType', user.user_type);
          await router.push('/home');
        } else {
          console.error('Credenciales incorrectas');
        }
      } catch (error) {
        console.error('Error en el inicio de sesión:', error.message);
      }
    },
    async register() {
      try {
        await router.push('/register');
      } catch (error) {
        console.error('Error al redirigir al registro:', error);
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.input-label {
  flex: 1;
}

.input-field {
  flex: 3;
}

label {
  margin-bottom: 5px;
  display: block;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #75aa9c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #5c8677;
}
</style>