<script>
import TheHeaderSessionComponent from "@/components/elements/the-header-session.component.vue";
import TheFooter from "@/components/elements/the-footer.component.vue";
import DataTable from "primevue/datatable"; // Change this line
import Column from "primevue/column";
import TheHomeTable from "@/components/peding-task/the-peding-table.vue";

export default {
  name: 'the-pending-tasks',
  components: {
    TheHomeTable,
    DataTable,
    Column,
    TheHeaderSessionComponent,
    TheFooter
  },
}

</script>

<template>
    <header>
  <the-header-session-component/>
  </header>

  <main>
  <the-home-table/>
  </main>
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
}

main {
  padding-top: 0px; /* Ajuste para subir el main */
  padding-bottom: 150px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(248, 249, 250, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
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