<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
      <create-orders></create-orders>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";
import ViewCrop from "@/components/crop/view-crop.component.vue";
import CreateOrders from "@/components/order/create-order.vue";

export default {
  name: 'the-create-orders',
  components: {CreateOrders, TheHeaderSession}
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