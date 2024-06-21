<script>
import TheHeaderSessionComponent from "@/components/elements/the-header-session.component.vue";
import TheFooter from "@/components/elements/the-footer.component.vue";
import DataTable from "primevue/datatable"; // Change this line
import Column from "primevue/column";
import theEquipment from "@/components/teams/the-teams.vue";

export default {
  name: 'the-team',
  components: {
    theEquipment,
    DataTable, // Change this line
    Column, // Change this line
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
    <the-equipment/>
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
  padding-top: 50px;
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