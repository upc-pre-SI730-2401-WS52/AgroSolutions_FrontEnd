<template>
  <div class="equipment-container">
    <h2><b>Equipos</b></h2>
    <div class="equipment-grid">
      <div class="card-wrapper" v-for="equipo in equipos" :key="equipo.id">
        <CardEquipment :equipo="equipo" />
      </div>
    </div>
  </div>
</template>


<script>
import CardEquipment from './the-card-team.vue';
import { getTeams } from "@/shared/services/employee-api.service.js";

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
  padding: 10px;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.card-wrapper {
  width: 100%;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

</style>
