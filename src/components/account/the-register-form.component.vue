<template>
  <div class="registration-form-container" role="form" :aria-label="$t('registration.formLabel')">
    <div class="registration-form">
      <h2>{{ $t('registration.title') }}</h2>

      <div class="form-group">
        <div class="input-label">
          <label for="fullName">{{ $t('registration.fullName') }}:</label>
        </div>
        <div class="input-field">
          <pv-input-text type="text" id="fullName" v-model="fullName" required :aria-label="$t('registration.enterFullName')"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="id">{{ $t('registration.id') }}:</label>
        </div>
        <div class="input-field">
          <pv-input-text type="text" id="id" v-model.number="id" required :aria-label="$t('registration.enterId')"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="companyName">{{ $t('registration.companyName') }}:</label>
        </div>
        <div class="input-field">
          <pv-input-text type="text" id="companyName" v-model="companyName" required :aria-label="$t('registration.enterCompanyName')"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="emailAddress">{{ $t('registration.emailAddress') }}:</label>
        </div>
        <div class="input-field">
          <pv-input-text type="email" id="emailAddress" v-model="emailAddress" required :aria-label="$t('registration.enterEmailAddress')"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="phoneNumber">{{ $t('registration.phoneNumber') }}:</label>
        </div>
        <div class="input-field">
          <pv-input-text type="tel" id="phoneNumber" v-model="phoneNumber" required :aria-label="$t('registration.enterPhoneNumber')"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="userType">{{ $t('registration.userType') }}:</label>
        </div>
        <div class="input-field">
          <select id="userType" v-model="userType" required :aria-label="$t('registration.selectUserType')">
            <option value="">{{ $t('registration.selectUserType') }}</option>
            <option value="agricultor">{{ $t('registration.agricultor') }}</option>
            <option value="vendedor">{{ $t('registration.vendedor') }}</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="password">{{ $t('registration.password') }}:</label>
        </div>
        <div class="input-field">
          <input type="password" id="password" v-model="password" required :aria-label="$t('registration.enterPassword')">
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="confirmPassword">{{ $t('registration.confirmPassword') }}:</label>
        </div>
        <div class="input-field">
          <input type="password" id="confirmPassword" v-model="confirmPassword" required :aria-label="$t('registration.enterConfirmPassword')">
        </div>
      </div>

      <button @click="register" :aria-label="$t('registration.register')">{{ $t('registration.register') }}</button>
    </div>
  </div>
</template>

<script>
import { UserApiService } from "@/shared/services/user-api.service.js";
import router from "@/router.js";

export default {
  name: 'TheRegisterForm',
  data() {
    return {
      id: '',
      fullName: '',
      companyName: '',
      emailAddress: '',
      phoneNumber: '',
      userType: '',
      password: '',
      confirmPassword: '',
      userApiService: new UserApiService()
    };
  },
  methods: {
    async register() {
      const body = {
        id: this.id,
        full_name: this.fullName,
        company_name: this.companyName,
        email_address: this.emailAddress,
        phone_number: this.phoneNumber,
        user_type: this.userType,
        password: this.password,
        confirmPassword: this.confirmPassword
      };

      try {
        const response = await this.userApiService.create(body);
        if (response.status === 201) {
          alert('User created');
          await this.$router.push('/login');
        } else {
          console.error('Error al registrar el usuario');
        }
      } catch (error) {
        console.error('Error al registrar el usuario:', error.message);
      }
    }
  }
}
</script>

<style scoped>
.registration-form {
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
input[type="email"],
input[type="tel"],
input[type="password"],
input[type="confirmPassword"],
select {
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