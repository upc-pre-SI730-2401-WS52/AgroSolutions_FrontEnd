<script>

import { CropsApiService } from '@/shared/services/crop-api.service.js'
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";
import TheFooter from "@/components/elements/the-footer.component.vue";

export default {
  name: "view-crop",
  components: {TheFooter, TheHeaderSession},
  data() {
    return {
      crop: null
    };
  },
  async mounted() {

    const cropId = this.$route.params.id;
    try {
      const cropsApiService = new CropsApiService();
      const response = await cropsApiService.getCultivoById(cropId);

      this.crop = response.data;
    } catch (error) {
      console.error('Error al obtener el cultivo:', error);
    }
  }
}

</script>

<template>
  <header class="header" aria-label="Encabezado principal">
    <the-header-session aria-label="Sesión de encabezado" />
  </header>
  <main aria-label="Contenido principal">
    <div class="view-crop-container" v-if="crop" aria-label="Contenedor de información del cultivo">
      <div class="crop-info" aria-label="Información del cultivo">
        <h1 aria-label="Nombre del producto">{{ crop.producto }}</h1>
        <div class="crop-data" aria-label="Área del cultivo">{{ $t('cropInfo.area') }}: {{ crop.area }}</div>
        <div class="crop-data" aria-label="Código del cultivo">{{ $t('cropInfo.code') }}: {{ crop.id }}</div>
        <div class="crop-data" aria-label="Germinación del cultivo">{{ $t('cropInfo.germination') }}: {{ crop.germinacion }}</div>
        <div class="crop-data" aria-label="Costo del cultivo">{{ $t('cropInfo.cost') }}: $ {{ crop.costo }}</div>
        <div class="crop-data" aria-label="Retorno del cultivo">{{ $t('cropInfo.return') }}: $ {{ crop.retorno }}</div>
        <div class="crop-data" aria-label="Notificaciones del cultivo">{{ $t('cropInfo.notifications') }}: {{ crop.notificaciones }}</div>
        <div class="crop-data" aria-label="Localización del cultivo">{{ $t('cropInfo.location') }}: {{ crop.localizacion }}</div>
        <div class="crop-data" aria-label="Estado del cultivo">{{ $t('cropInfo.state') }}: {{ crop.estado }}</div>
        <router-link :to="{ name: 'calendari', params: { id: crop.id }}" class="action-button" aria-label="Ir al calendario del cultivo">
          Calendario
        </router-link>
      </div>
      <div class="crop-image" aria-label="Imagen del cultivo">
        <img :src="crop.imageUrl" alt="Imagen del cultivo">
      </div>
    </div>
  </main>
  <footer>
    <TheFooter/>
  </footer>
</template>


<style scoped>
body {
  background-color: #f2f2f2;
  font-family: 'Arial', sans-serif;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.view-crop-container {
  max-width: 900px;
  margin: 100px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: box-shadow 0.3s;
}

.view-crop-container:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}


.crop-image img {
  max-height: 350px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.crop-info {
  flex-grow: 1;
}

.crop-info h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #666;
}

.crop-data {
  margin-bottom: 15px;
  font-size: 18px;
  color: #666;
}

.action-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #20d61c;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
  transform: translatex(450px);
}

.action-button:hover {
  background-color: #17b212;
}

.view-crop-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  margin: 100px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.crop-info {
  flex-grow: 1;
  margin-right: 70px;
}

.crop-image img {
  max-height: 350px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
