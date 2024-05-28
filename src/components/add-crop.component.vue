<template>
  <div class="add-product">

    <div class="form-and-calendar">

      <div class="form-section">
        <h2>Añadir Nuevo Cultivo</h2>
        <br>
        <form @submit.prevent="submitForm" class="form-grid">
          <!-- Columna izquierda -->
          <div class="left-column">
            <div class="form-group">
              <label for="estado">Estado:</label>
              <select id="estado" v-model="newProduct.estado" required>
                <option value="Regular">Regular</option>
                <option value="Bueno">Bueno</option>
                <option value="Excelente">Excelente</option>
              </select>
            </div>
            <div class="form-group">
              <label for="area">Área:</label>
              <input type="number" id="area" v-model.number="newProduct.area" required>
            </div>
            <div class="form-group">
              <label for="costo">Costo:</label>
              <input type="number" id="costo" v-model.number="newProduct.costo" required>
            </div>
          </div>
          <!-- Columna derecha -->
          <div class="right-column">
            <div class="form-group">
              <label for="producto">Producto:</label>
              <input type="text" id="producto" v-model="newProduct.producto" required>
            </div>
            <div class="form-group">
              <label for="retorno">Retorno:</label>
              <input type="number" id="retorno" v-model.number="newProduct.retorno" required>
            </div>
            <div class="form-group">
              <label for="localizacion">Localización:</label>
              <input type="text" id="localizacion" v-model="newProduct.localizacion" required>
            </div>
          </div>
          <div class="form-group">
            <label for="notificaciones">Notificaciones:</label>
            <select id="notificaciones" v-model="newProduct.notificaciones" required>
              <option value="Ninguna">Ninguna</option>
              <option value="Todas">Todas</option>
              <option value="Urgentes">Urgentes</option>
            </select>
          </div>
          <div class="form-group">
            <label for="image_url">URL de la Imagen:</label>
            <input type="url" id="image_url" v-model="newProduct.image_Url" required>
          </div>
          <div class="form-group">
            <label for="asesor">Asesor:</label>
            <select id="asesor" v-model="newProduct.asesorId" required>
              <option v-for="asesor in asesores" :key="asesor.id" :value="asesor.id">
                {{ asesor.nombre }}
              </option>
            </select>
          </div>
          <button type="submit" class="submit-button">Guardar Producto</button>
        </form>
      </div>

      <!-- Sección del calendario -->
      <div class="calendar-section">
        <h3>Añadir Calendario</h3>
        <div class="form-group" v-for="(dia, index) in newProduct.calendario.dias" :key="index">
          <label :for="'fecha-' + index">Fecha:</label>
          <input type="date" :id="'fecha-' + index" v-model="dia.fecha">
          <label :for="'actividad-' + index">Actividad:</label>
          <input type="text" :id="'actividad-' + index" v-model="dia.actividad">
          <label :for="'estado-' + index">Estado:</label>
          <input type="text" :id="'estado-' + index" v-model="dia.estado">
          <button type="button" @click="removeDia(index)">Eliminar Día</button>
        </div>
        <button type="button" @click="addDia">Añadir Día</button>
      </div>
    </div>
  </div>
</template>

<script>
import {CropsApiService} from "@/services/crop-api.service.js";

export default {
  name: 'AddProduct',
  data() {
    return {
      newProduct: {
        estado: '',
        area: 0,
        costo: 0,
        producto: '',
        retorno: 0,
        localizacion: '',
        notificaciones: '',
        image_Url: '',
        asesorId: '',
        calendario: {
          dias: []
        }
      },
      asesores: [],
      nuevoDia: {
        fecha: '',
        actividad: '',
        estado: ''
      }
    };
  },
  async created() {
    try {
      const service = new CropsApiService();
      this.asesores = (await service.getAllAsesores()).data;
    } catch (error) {
      console.error('Error al obtener los asesores:', error);
    }
  },
  methods: {
    addDia() {
      this.newProduct.calendario.dias.push({...this.nuevoDia});
      this.nuevoDia = { fecha: '', actividad: '', estado: '' };
    },
    removeDia(index) {
      this.newProduct.calendario.dias.splice(index, 1);
    },
    async submitForm() {
      try {
        const service = new CropsApiService();
        const calendarioResponse = await service.createCalendario(this.newProduct.calendario);
        if (calendarioResponse.status === 201) {
          this.newProduct.calendarioId = calendarioResponse.data.id;
          delete this.newProduct.calendario;
          const cultivoResponse = await service.createCultivo(this.newProduct);
          if (cultivoResponse.status === 201) {
            alert('Producto y calendario guardados con éxito');
            this.resetForm();
          }
        }
      } catch (error) {
        console.error('Error al guardar el producto y el calendario:', error);
      }
    },
    resetForm() {
      this.newProduct = {
        estado: '',
        area: 0,
        costo: 0,
        producto: '',
        retorno: 0,
        localizacion: '',
        notificaciones: '',
        image_Url: '',
        asesorId: '',
        calendario: {
          dias: []
        }
      };
      this.nuevoDia = { fecha: '', actividad: '', estado: '' };
    }
  }
};
</script>

<style scoped>
.add-product {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-section h2{
  color: #000
}
.form-and-calendar {
  display: flex;
  justify-content: space-between;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 70%;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #5cb85c;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #4cae4c;
}

.calendar-section {
  width: 30%;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
}

.calendar-section h3 {
  margin-bottom: 15px;
  color: #333;
}

.calendar-section .form-group {
  margin-bottom: 10px;
}

.calendar-section button {
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.calendar-section button:hover {
  background-color: #c9302c;
}
</style>
