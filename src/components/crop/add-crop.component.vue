<template>
  <div class="add-product">

    <div class="form-and-calendar">

      <div class="form-section">
        <h2 aria-label="Formulario para agregar un nuevo cultivo">{{ $t('form.addNewCrop') }}</h2>
        <br>
        <form @submit.prevent="submitForm" class="form-grid">
          <!-- Columna izquierda -->
          <div class="left-column">
            <div class="form-group">
              <label for="estado" aria-label="Seleccionar estado del producto">{{ $t('form.state') }}</label>
              <select id="estado" v-model="newProduct.estado" required aria-label="Seleccionar estado del producto: Regular, Bueno, Excelente">
                <option value="Regular" aria-label="Estado Regular">Regular</option>
                <option value="Bueno" aria-label="Estado Bueno">Bueno</option>
                <option value="Excelente" aria-label="Estado Excelente">Excelente</option>
              </select>
            </div>
            <div class="form-group">
              <label for="area" aria-label="Ingresar el área del producto">{{ $t('form.area') }}</label>
              <input type="number" id="area" v-model.number="newProduct.area" required aria-label="Ingresar el área del producto en metros cuadrados">
            </div>
            <div class="form-group">
              <label for="costo" aria-label="Ingresar el costo del producto">{{ $t('form.cost') }}</label>
              <input type="number" id="costo" v-model.number="newProduct.costo" required aria-label="Ingresar el costo del producto en dólares">
            </div>
          </div>
          <!-- Columna derecha -->
          <div class="right-column">
            <div class="form-group">
              <label for="producto" aria-label="Ingresar el nombre del producto">{{ $t('form.product') }}</label>
              <input type="text" id="producto" v-model="newProduct.producto" required aria-label="Ingresar el nombre del producto">
            </div>
            <div class="form-group">
              <label for="retorno" aria-label="Ingresar el retorno esperado del producto">{{ $t('form.return') }}</label>
              <input type="number" id="retorno" v-model.number="newProduct.retorno" required aria-label="Ingresar el retorno esperado del producto en dólares">
            </div>
            <div class="form-group">
              <label for="localizacion" aria-label="Ingresar la localización del producto">{{ $t('form.location') }}</label>
              <input type="text" id="localizacion" v-model="newProduct.localizacion" required aria-label="Ingresar la localización del producto">
            </div>
          </div>
          <div class="form-group">
            <label for="notificaciones" aria-label="Seleccionar las notificaciones deseadas">{{ $t('form.notifications') }}</label>
            <select id="notificaciones" v-model="newProduct.notificaciones" required aria-label="Seleccionar tipo de notificaciones: Ninguna, Todas, Urgentes">
              <option value="Ninguna" aria-label="Sin notificaciones">Ninguna</option>
              <option value="Todas" aria-label="Todas las notificaciones">Todas</option>
              <option value="Urgentes" aria-label="Solo notificaciones urgentes">Urgentes</option>
            </select>
          </div>
          <div class="form-group">
            <label for="image_url" aria-label="Ingresar la URL de la imagen del producto">{{ $t('form.imageUrl') }}</label>
            <input type="url" id="image_url" v-model="newProduct.image_Url" required aria-label="Ingresar la URL de la imagen del producto">
          </div>
          <div class="form-group">
            <label for="asesor" aria-label="Seleccionar el asesor para el producto">{{ $t('form.advisor') }}</label>
            <select id="asesor" v-model="newProduct.asesorId" required aria-label="Seleccionar asesor del producto">
              <option v-for="asesor in asesores" :key="asesor.id" :value="asesor.id" :aria-label="'Asesor: ' + asesor.nombre">
                {{ asesor.nombre }}
              </option>
            </select>
          </div>
          <button type="submit" class="submit-button" aria-label="Guardar los datos del producto">{{ $t('form.saveProduct') }}</button>
        </form>
      </div>

      <!-- Sección del calendario -->
      <div class="calendar-section">
        <h3 aria-label="Formulario para agregar un calendario">{{ $t('form.addCalendar') }}</h3>
        <div class="form-group" v-for="(dia, index) in newProduct.calendars" :key="index">
          <label :for="'fecha-' + index" :aria-label="'Ingresar fecha para el día ' + (index + 1)">{{ $t('form.date') }}</label>
          <input type="date" :id="'fecha-' + index" v-model="dia.fecha" :aria-label="'Ingresar fecha para el día ' + (index + 1)">
          <label :for="'actividad-' + index" :aria-label="'Ingresar actividad para el día ' + (index + 1)">{{ $t('form.activity') }}</label>
          <input type="text" :id="'actividad-' + index" v-model="dia.actividad" :aria-label="'Ingresar actividad para el día ' + (index + 1)">
          <label :for="'estado-' + index" :aria-label="'Ingresar estado para el día ' + (index + 1)">{{ $t('form.state') }}</label>
          <input type="text" :id="'estado-' + index" v-model="dia.estado" :aria-label="'Ingresar estado para el día ' + (index + 1)">
          <button type="button" @click="removeDia(index)" :aria-label="'Eliminar el día ' + (index + 1)">{{ $t('form.removeDay') }}</button>
        </div>
        <button type="button" @click="addDia" aria-label="Agregar un nuevo día al calendario">{{ $t('form.addDay') }}</button>
      </div>
    </div>
  </div>
  <footer>
    <TheFooter/>
  </footer>
</template>
<script>
import {CropsApiService} from "@/shared/services/crop-api.service.js";
import TheFooter from "@/components/elements/the-footer.component.vue";

export default {
  name: 'AddProduct',
  components: {TheFooter},
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
        calendars: []
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
      this.newProduct.calendars.push({...this.nuevoDia});
      this.nuevoDia = { fecha: '', actividad: '', estado: '' };
    },
    removeDia(index) {
      this.newProduct.calendars.splice(index, 1);
    },
    async submitForm() {
      try {
        const service = new CropsApiService();
        const cultivoResponse = await service.createCultivo(this.newProduct);
        if (cultivoResponse.status === 201) {
          alert('Producto y calendario guardados con éxito');
          this.resetForm();
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
