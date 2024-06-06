<template>
  <div>
    <Toolbar>
      <template #start>
        <h1 class="p-toolbar-group-left">The Store</h1>
      </template>
    </Toolbar>
    <div class="p-grid">
      <div class="p-col-12 p-md-4" v-for="product in products" :key="product.id">
        <the-product-card-component :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import theProductCardComponent from "@/components/the-product-card.component.vue";
import axios from 'axios';
import { Toolbar } from 'primevue/toolbar';

export default {
  name: 'The-Store',
  components: {
    theProductCardComponent,
    Toolbar
  },
  data() {
    return {
      products: []
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
    }
  }
}
</script>
