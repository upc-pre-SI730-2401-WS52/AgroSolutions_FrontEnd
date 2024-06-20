<!-- src/components/the-equipment.vue -->
<template>
  <div class="equipment-container">
    <h2>Equipos</h2>
    <div v-for="equipo in equipos" :key="equipo.id">
      <CardEquipment :equipo="equipo" />
    </div>
  </div>
</template>

<script>
import CardEquipment from './CardEquipment.vue';
import {getTeams} from "@/services/employee-api.service.js";

export default {
  name: 'Equipment',
  components: {
    CardEquipment
  },
  data() {
    return {
      equipos: []
    };
  },
  created() {
    this.fetchTeams();
  },
  methods: {
    fetchTeams() {
      getTeams().then(data => {
        this.equipos = data;
      }).catch(error => {
        console.error('Error fetching teams:', error);
      });
    }
  }
}
</script>

<style scoped>
.equipment-container {
  background-color: white;
  color: green;
  padding: 16px;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}
</style>
