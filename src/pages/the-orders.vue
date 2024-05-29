<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
      <the-order></the-order>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/the-header-session.component.vue";
import TheOrder from "@/components/orders.vue";

export default {
  name: 'the-orders',
  components: {TheOrder, TheHeaderSession}
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