<template>
  <div class="container" aria-label="Contenedor principal">
    <div class="card-container" aria-label="Contenedor de tarjetas de cultivo">
      <div
          class="cultivo-card"
          v-for="cultivo in cultivos"
          :key="cultivo.id"
          @click="viewCultivo(cultivo.id)"
          :aria-label="'Tarjeta de cultivo: ' + cultivo.producto"
      >
        <div class="card" aria-label="Tarjeta de cultivo">
          <div class="card-content" :style="{ backgroundColor: '#2C3E50' }" aria-label="Contenido de la tarjeta de cultivo">
            <div class="media align-items-center" aria-label="Sección de medios">
              <img
                  :src="cultivo.imageUrl"
                  class="cultivo-img"
                  alt="Imagen del cultivo"
                  :aria-label="'Imagen del cultivo ' + cultivo.producto"
              >
              <div class="media-body" aria-label="Cuerpo de la tarjeta de cultivo">
                <h5 class="mt-0 text-light" aria-label="Nombre del producto">{{ cultivo.producto }}</h5>
                <p class="text-light" aria-label="Estado del cultivo">{{ $t('card.status') }}
                  <span
                      :class="{
                      'text-success': cultivo.estado === 'Bueno' || cultivo.estado === 'Excelente',
                      'text-danger': cultivo.estado !== 'Bueno' && cultivo.estado !== 'Excelente'
                    }"
                      :aria-label="'Estado del cultivo: ' + cultivo.estado"
                  >{{ cultivo.estado }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-container" aria-label="Contenedor del botón para agregar cultivos">
      <router-link to="/add-crops" class="button" aria-label="Agregar nuevo cultivo">{{ $t('card.addCrop') }}</router-link>
    </div>
  </div>
</template>


<script>
import { CropsApiService } from "@/shared/services/crop-api.service.js";
import TheFooter from "@/components/elements/the-footer.component.vue";

export default {
  name: "list-crops",
  components: {TheFooter},
  data() {
    return {
      cultivos: []
    };
  },
  async created() {
    const service = new CropsApiService();
    try {
      const response = await service.getAllCultivos();
      this.cultivos = response.data;
    } catch (error) {
      console.error('Hubo un error al obtener los cultivos:', error);
    }
  },
  methods: {
    viewCultivo(cultivoId) {
      this.$router.push({ name: 'view-crow', params: { id: cultivoId } });
    }
  }
};
</script>

<style scoped>

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  padding: 20px;
}

.cultivo-card {
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.card {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
}

.card-content {
  padding: 20px;
  background-color: #2C3E50;
  color: #ffffff;
}

.cultivo-img {
  width: 100px;
  height: auto;
  border-radius: 5px;
  margin-right: 20px;
}

.button-container {
  text-align: center;
  margin-top: 20px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #c82333;
}

.text-light {
  color: #fff;
}

.text-success {
  color: #28a745;
}

.text-danger {
  color: #dc3545;
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

