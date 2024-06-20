<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
      <add-crop></add-crop>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";
import AddCrop from "@/components/crop/add-crop.component.vue";

export default {
  name: 'add-crops',
  components: {AddCrop, TheHeaderSession}
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