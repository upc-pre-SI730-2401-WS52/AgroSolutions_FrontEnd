<template>
  <header class="header">
    <div class="container">
      <div class="left-section">

        <div class="logo-container">
          <img src="../../assets/images/logo.png" alt="Logo" class="logo">
<<<<<<< HEAD
          <!--<router-link to="/" class="link">-->
=======
          <router-link to="/home" class="link">
>>>>>>> e9b11272f487488723967fb87c7c8ceae94929e5
          <h1 class="company-name">{{ companyName }}</h1>
          <!--</router-link>-->
          <language-switcher aria-label="Language switcher"/>
        </div>
      </div>
      <div class="right-section">
        <router-link to="/home" class="link">Pending Tasks</router-link>
        <router-link to="/list-crops" class="link">Crops</router-link>
        <router-link to="/employees" class="link">Employees</router-link>
        <router-link to="/store" class="link">Store</router-link>
        <router-link to="/finances" class="link">Finances</router-link>
        <router-link to="/orders" class="link">Orders</router-link>
        <router-link to="/pending_payments" class="link">Pending Payments</router-link>
        <button @click="logout" class="button-logout">Log out</button>

      </div>
    </div>
  </header>
</template>

<script>


import LanguageSwitcher from "@/components/elements/the-language-switcher.vue";

export default {
  name: 'TheHeaderSession',
  components: {LanguageSwitcher},
  data() {
    return {
      companyName: 'AgroSolution'
    };
  },
  methods: {
    async logout() {
      try {
        await this.$router.push('/'); // Cambia '/' por la ruta a la que deseas redirigir al usuario
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #ffffff; /* Color de fondo */
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  margin-right: 10px;
}

.company-name {
  margin: 0;
  font-size: 18px;
  color: #333;
  padding-right: 30px;
}

.link {
  text-decoration: none;
  color: #333;
  margin-right: 20px;
  transition: color 0.3s;
}

.link:hover {
  color: #007bff; /* Color del texto al pasar el ratón */
}

.button-logout {
  background-color: #dc3545; /* Color de fondo */
  color: #ffffff; /* Color del texto */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Padding */
  border-radius: 20px; /* Bordes redondeados */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Transición suave */
}

.button-logout:hover {
  background-color: #bd2130; /* Color de fondo al pasar el ratón */
}
</style>
