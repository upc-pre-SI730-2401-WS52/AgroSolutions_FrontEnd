<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
        <the-finance></the-finance>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/the-header-session.component.vue";
import TheFinance from "@/components/finance.vue";
import TheLoginForm from "@/components/the-login-form.component.vue";

export default {
  name: 'the-finances',
  components: {TheLoginForm, TheFinance, TheHeaderSession}
}
</script>

<style scoped>


header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

</style>