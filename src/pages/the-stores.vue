<template>
  <div>
    <h1>Tienda</h1>
    <div class="filters">
      <h3>Filtros</h3>
      <div>
        <label for="cantidad">Cantidad</label>
        <input type="number" id="cantidad" v-model="filters.cantidad">
      </div>
      <div>
        <label for="estrellas">Estrellas</label>
        <input type="number" id="estrellas" v-model="filters.estrellas" min="1" max="5">
      </div>
      <div>
        <label for="favoritos">Favoritos</label>
        <input type="checkbox" id="favoritos" v-model="filters.favoritos">
      </div>
      <div>
        <label for="precio">Precio</label>
        <input type="number" id="precio" v-model="filters.precio">
      </div>
      <div>
        <label for="producto">Producto</label>
        <input type="text" id="producto" v-model="filters.producto">
      </div>
      <button @click="applyFilters">Aplicar Filtros</button>
    </div>

    <div class="product-list">
      <div v-for="product in filteredProducts" :key="product.id" class="product-card">
        <img :src="product.image" alt="Imagen del Producto">
        <div class="product-info">
          <h4>{{ product.name }}</h4>
          <p>Estrellas: {{ product.stars }}</p>
          <p>Antigüedad: {{ product.age }}</p>
          <p>Cantidad Mínima: {{ product.minQuantity }}</p>
          <p>Cantidad Máxima: {{ product.maxQuantity }}</p>
          <p>Número de Ventas: {{ product.sales }}</p>
        </div>
        <div class="product-actions">
          <button @click="contact(product)">Contactar</button>
          <button @click="addToFavorites(product)">Agregar a Favoritos</button>
          <button @click="recommend(product)">Recomendar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'the-stores',
  data() {
    return {
      filters: {
        cantidad: null,
        estrellas: null,
        favoritos: false,
        precio: null,
        producto: ''
      },
      products: [],
      filteredProducts: []
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/products');
        this.products = response.data;
        this.filteredProducts = this.products;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    applyFilters() {
      this.filteredProducts = this.products.filter(product => {
        return (
            (this.filters.cantidad === null || product.minQuantity <= this.filters.cantidad) &&
            (this.filters.estrellas === null || product.stars >= this.filters.estrellas) &&
            (this.filters.favoritos === false || product.isFavorite) &&
            (this.filters.precio === null || product.price <= this.filters.precio) &&
            (this.filters.producto === '' || product.name.includes(this.filters.producto))
        );
      });
    },
    contact(product) {
      // Lógica para contactar
      console.log('Contactar', product.name);
      // Redireccionar a la página de chat
      this.$router.push('/chat');
    },


    addToFavorites(product) {
      // Lógica para agregar a favoritos
      console.log('Agregar a Favoritos', product.name);
    },
    recommend(product) {
      // Lógica para recomendar
      console.log('Recomendar', product.name);
    }


  },
  mounted() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
/* Estilos del componente */
.filters {
  margin-bottom: 20px;
}

.filters div {
  margin-bottom: 10px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-info {
  margin-bottom: 10px;
}

.product-actions button {
  margin: 5px;
}
</style>
