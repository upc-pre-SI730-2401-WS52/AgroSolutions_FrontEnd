<template>
  <header class="header">
    <div class="container">
      <div class="left-section">
        <div class="logo-container">
          <img src="../../assets/images/logo.png" alt="Logo" class="logo">
          <h1 class="company-name">{{ companyName }}</h1>
          <language-switcher aria-label="Language switcher"></language-switcher>
        </div>
      </div>
      <div class="right-section">
        <router-link to="/home" class="link" aria-label="Home">Home</router-link>
        <router-link v-if="isAgricultor" to="/pending-task" class="link" aria-label="Pending Tasks">Pending Tasks</router-link>
        <router-link v-if="isAgricultor" to="/finances" class="link" aria-label="Finances">Finances</router-link>
        <router-link v-if="isAgricultor" to="/pending_payments" class="link" aria-label="Pending Payments">Pending Payments</router-link>
        <router-link v-if="isAgricultor" to="/employees" class="link" aria-label="Employees">Employees</router-link>
        <router-link v-if="isAgricultor" to="/orders" class="link" aria-label="Orders">Orders</router-link>
        <router-link v-if="isAgricultor" to="/list-crops" class="link" aria-label="Crops">Crops</router-link>
        <router-link to="/blog" class="link" aria-label="Blog">Blog</router-link>
        <router-link v-if="isVendedor"to="/store" class="link" aria-label="Store">Store</router-link>
        <button @click="logout" class="button-logout" aria-label="Log out">Log out</button>
      </div>
    </div>
  </header>
</template>


<script>
import LanguageSwitcher from "@/components/elements/the-language-switcher.vue";

export default {
  name: 'TheHeaderSession',
  components: { LanguageSwitcher },
  data() {
    return {
      companyName: 'AgroSolution'
    };
  },
  computed: {
    isVendedor() {
      return localStorage.getItem('userType') === 'vendedor';
    },
    isAgricultor() {
      return localStorage.getItem('userType') === 'agricultor';
    }
  },
  methods: {
    async logout() {
      try {
        localStorage.removeItem('userType');
        await this.$router.push('/');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #ffffff;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  padding-bottom: 8px;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s;
}

.link:hover {
  color: #1a493f;
  border-bottom-color: #1a4a3f;
}

.button-logout {
  background-color: #dc3545;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: 16px;
  margin-left: 10px;
}

.button-logout:hover {
  background-color: #bd2130;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .right-section {
    margin-top: 10px;
  }

  .link {
    margin-right: 0;
    margin-bottom: 10px;
    display: block;
  }

  .button-logout {
    margin-left: 0;
    display: block;
  }
}
</style>
