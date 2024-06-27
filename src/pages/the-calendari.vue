<template>
  <div class="container" aria-label="Contenedor principal">
    <header aria-label="Encabezado principal">
      <the-header-session aria-label="Sesión de encabezado" />
    </header>
    <main aria-label="Contenido principal">
      <div class="calendario" aria-label="Sección del calendario">
        <h2 class="titulo" aria-label="Título del calendario">{{ $t('calendar.title') }}</h2>
        <br>
        <div class="card-container" v-if="calendario && calendario.calendars" aria-label="Contenedor de tarjetas del calendario">
          <div v-for="cal in calendario.calendars" :key="cal.id" class="card" :aria-label="'Tarjeta del día ' + cal.fecha">
            <div class="card-header" aria-label="Encabezado de la tarjeta del día">
              <h3 aria-label="Fecha del día">{{ cal.fecha }}</h3>
            </div>
            <div class="card-body" aria-label="Cuerpo de la tarjeta del día">
              <p><strong aria-label="Actividad del día">{{ $t('calendar.activity') }}</strong> <span class="actividad" aria-label="Descripción de la actividad">{{ cal.actividad }}</span></p>
              <p><strong aria-label="Estado del día">{{ $t('calendar.state') }}</strong> <span class="estado" aria-label="Descripción del estado">{{ cal.estado }}</span></p>
            </div>
          </div>
        </div>
        <p v-else aria-label="Mensaje de no hay actividades">{{ $t('calendar.noActivities') }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";
import {CropsApiService} from "@/shared/services/crop-api.service.js";

export default {
  name: 'TheCalendari',
  components: {TheHeaderSession},

  data() {
    return {
      calendario: null
    };
  },
  async created() {
    const cropId = this.$route.params.id;
    if (cropId) {
      try {
        const service = new CropsApiService();
        const response = await service.getCultivoById(cropId);
        this.calendario = response.data;
      } catch (error) {
        console.error('Error al obtener los datos del cultivo:', error);
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
