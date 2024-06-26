<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
      <the-order></the-order>
    </main>
  </div>
  <footer>
    <TheFooter/>
  </footer>

</template>

<script>
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";
import TheOrder from "@/components/order/orders.vue";
import TheFooter from "@/components/elements/the-footer.component.vue";

export default {
  name: 'the-orders',
  components: {TheFooter, TheOrder, TheHeaderSession}
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

footer {
  background-color: #4f4d4d;
  padding: 10px 0 10px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>