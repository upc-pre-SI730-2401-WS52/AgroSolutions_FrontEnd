<script>
import ListCrops from "@/components/crop/list-crops.vue";
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";
import TheFooter from "@/components/elements/the-footer.component.vue";

export default {
  name: "cropsall",
  components: {TheFooter, ListCrops, TheHeaderSession },
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
  <footer>
    <TheFooter/>
  </footer>
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