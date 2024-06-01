<template>
  <div class="container1">
    <div class="card-container">
      <div class="cultivo-card" v-for="cultivo in cultivos" :key="cultivo.id" @click="viewCultivo(cultivo.id)">
        <div class="card">
          <div class="card-content" :style="{ backgroundColor: '#2C3E50' }">
            <div class="media align-items-center">
              <img :src="cultivo.image_Url" class="cultivo-img" alt="Imagen del cultivo">
              <div class="media-body">
                <h5 class="mt-0 text-light">{{ cultivo.producto }}</h5>
                <p class="text-light">Estado:
                  <span :class="{
    'text-success': cultivo.estado === 'Bueno' || cultivo.estado === 'Excelente',
    'text-danger': cultivo.estado !== 'Bueno' && cultivo.estado !== 'Excelente'
  }">{{ cultivo.estado }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-container">
      <router-link to="/add-crops" class="button">Agregar Cultivo</router-link>
    </div>
  </div>
</template>

<script>
import { CropsApiService } from "@/services/crop-api.service.js";

export default {
  name: "list-crops",
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
.container1 {
  width: 80%;
  margin: 0 auto;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cultivo-card {
  width: calc(50% - 10px );
  margin-bottom: 20px;
}

.card {
  border-radius: 10px;
  overflow: hidden;
}

.card-content {
  padding: 20px;
}

.cultivo-img {
  width: 100px;
  height: auto;
  border-radius: 5px;
  margin-right: 20px;
}

.button-container {
  text-align: center;
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
}

.button:hover {
  background-color: #0056b3;
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
</style>
