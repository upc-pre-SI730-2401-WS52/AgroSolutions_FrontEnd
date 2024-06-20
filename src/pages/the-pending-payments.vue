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
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";
<<<<<<< HEAD
import ThePendingPayment from "@/components/peding/pending-payment.vue";
=======
import ThePendingPayment from "@/components/pedding/pending-payment.vue";
>>>>>>> e9b11272f487488723967fb87c7c8ceae94929e5
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