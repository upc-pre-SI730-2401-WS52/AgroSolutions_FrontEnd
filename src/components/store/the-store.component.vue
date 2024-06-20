<template>
  <header>
    <the-header-session />
  </header>
  <body style="margin-top: 50px">
  <div>
    <Toolbar>
      <template #start>
        <h1 class="p-toolbar-group-left">Store</h1>
      </template>
    </Toolbar>

    <!-- Agregar un campo de búsqueda -->
    <div class="p-inputgroup">
      <InputText v-model="searchText" placeholder="Buscar producto" />
      <Button icon="pi pi-search" class="p-button-rounded p-button-success" @click="searchProducts" />
    </div>

    <!-- Contenedor para las tarjetas de productos -->
    <div class="cards-container">
      <div class="p-grid">
        <div class="p-col-12 p-md-4" v-for="product in filteredProducts" :key="product.id">
          <ProductCardComponent :product="product" />
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import ProductCardComponent from "@/components/store/product-card.component.vue";
import axios from 'axios';
import Toolbar from 'primevue/toolbar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";

export default {
  name: 'TheStore',
  components: {
    TheHeaderSession,
    ProductCardComponent,
    Toolbar,
    InputText,
    Button
  },
  data() {
    return {
      products: [],
      searchText: ''
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('http://localhost:3000/products')
          .then(response => {
            this.products = response.data;
          });
    },
    searchProducts() {
      // Filtra los productos que coincidan con el texto de búsqueda
      this.filteredProducts = this.products.filter(product =>
          product.producto.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  },
  computed: {
    // Calcula los productos filtrados según el texto de búsqueda
    filteredProducts() {
      return this.products.filter(product =>
          product.producto.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
</script>

<style scoped>
.cards-container {
  margin: 0 auto;
  max-width: 600px;
}

.p-inputgroup {
  margin-top: 20px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
