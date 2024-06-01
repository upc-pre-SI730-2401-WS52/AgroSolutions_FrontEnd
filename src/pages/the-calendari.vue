<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
      <div class="calendario">
        <h2 class="titulo">Actividades del Calendario</h2>
        <br>
        <div class="card-container" v-if="calendario && calendario.dias">
          <div v-for="dia in calendario.dias" :key="dia.fecha" class="card">
            <div class="card-header">
              <h3>{{ dia.fecha }}</h3>
            </div>
            <div class="card-body">
              <p><strong>Actividad:</strong> <span class="actividad">{{ dia.actividad }}</span></p>
              <p><strong>Estado:</strong> <span class="estado">{{ dia.estado }}</span></p>
            </div>
          </div>
        </div>
        <p v-else>No se encontraron actividades para este calendario.</p>
      </div>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/the-header-session.component.vue";
import {CropsApiService} from "@/services/crop-api.service.js";

export default {
  name: 'TheCalendari',
  components: {TheHeaderSession},

  data() {
    return {
      calendario: null
    };
  },
  async created() {
    const calendarioId = this.$route.params.id;
    if (calendarioId) {
      try {
        const service = new CropsApiService();
        const response = await service.getCalendarioById(calendarioId);
        this.calendario = response.data;
      } catch (error) {
        console.error('Error al obtener los datos del calendario:', error);
      }
    }
  }
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.calendario {
  margin-top: 80px;
  padding: 20px;
}

.titulo {
  margin-top: 0;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: calc(50% - 10px);
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #bd2130;
  color: #fff;
}

.card-header h3 {
  margin: 0;
  font-size: 1.4rem;
}

.card-body {
  padding: 20px;
}

.actividad {
  color: #4CAF50;
}

.estado {
  color: #FF9800;
}

.card-body strong {
  color: #000;
}
</style>
