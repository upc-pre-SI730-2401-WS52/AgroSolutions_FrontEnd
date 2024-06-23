<script>
import ListCrops from "@/components/crop/list-crops.vue";
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";

export default {
  name: "cropsall",
  components: { ListCrops, TheHeaderSession },
}
</script>

<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
      <list-crops></list-crops>
    </main>
  </div>
</template>

<style scoped>


header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  background: white;
}

main {
  margin-top: 80px;

  justify-content: center;

  padding: 20px;

  box-sizing: border-box;
}
</style>