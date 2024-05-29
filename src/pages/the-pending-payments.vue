<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
     <the-pending-payment></the-pending-payment>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/the-header-session.component.vue";
import ThePendingPayment from "@/components/pending-payment.vue";
export default {
  name: 'the-orders',
  components: {ThePendingPayment, TheHeaderSession}
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