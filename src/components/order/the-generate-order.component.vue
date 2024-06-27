<template>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-field p-col-12 p-md-4">
      <label for="product">Producto</label>
      <Dropdown id="product" v-model="order.product" :options="products" optionLabel="producto" placeholder="Selecciona un producto"/>
    </div>
    <div class="p-field p-col-12 p-md-4">
      <label for="quantity">Cantidad</label>
      <InputNumber id="quantity" v-model="order.quantity" :min="1" :max="500"/>
    </div>
    <div class="p-field p-col-12 p-md-4">
      <label for="price">Precio (Soles)</label>
      <InputNumber id="price" v-model="order.price" :min="100" :max="10000" mode="currency" currency="PEN" locale="es-PE"/>
    </div>
    <div class="p-field p-col-12 p-md-4">
      <label for="phone">Teléfono</label>
      <InputText id="phone" v-model="order.phone" type="tel" maxlength="9"/>
    </div>
    <div class="p-col-12">
      <Button label="Generar Pedido" @click="generateOrder"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios';

export default {
  components: {
    Dropdown,
    InputNumber,
    InputText,
    Button
  },
  setup() {
    const order = ref({
      product: null,
      quantity: null,
      price: null,
      phone: ''
    });

    const products = ref([]);

    const generateOrder = async () => {
      if (validateOrder(order.value)) {
        await axios.post('http://localhost:3000/orders', order.value);
        alert('Pedido generado exitosamente');
      } else {
        alert('Por favor, complete todos los campos correctamente');
      }
    };

    const validateOrder = (order) => {
      return order.product && order.quantity >= 1 && order.quantity <= 500 && order.price >= 100 && order.price <= 10000 && /^[0-9]{9}$/.test(order.phone);
    };

    return {
      order,
      products,
      generateOrder
    };
  }
};
</script>

<style scoped>
.p-fluid {
  margin: 0 auto;
  padding: 2rem;
}
</style>
