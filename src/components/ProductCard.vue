<template>
  <Card>
    <template #title>
      {{ product.name }}
    </template>
    <template #content>
      <p>Antigüedad: {{ product.age }} años</p>
      <p>Cantidad mínima: {{ product.minQuantity }} costales</p>
      <p>Cantidad máxima: {{ product.maxQuantity }} costales</p>
      <p>Número de ventas: {{ product.sales }}</p>
    </template>
    <template #footer>
      <Button label="Generar pedido" icon="pi pi-shopping-cart" @click="generateOrder" />
      <Button label="Agregar a favoritos" icon="pi pi-star" @click="addToFavorites" />
      <Button label="No recomendar" icon="pi pi-ban" @click="doNotRecommend" />
    </template>
  </Card>
</template>

<script>
import { Card } from 'primevue/card';
import { Button } from 'primevue/button';

export default {
  name: 'ProductCard',
  components: {
    Card,
    Button
  },
  props: {
    product: Object
  },
  methods: {
    generateOrder() {
      this.$router.push({ name: 'TheGenerateOrder', params: { productId: this.product.id } });
    },
    addToFavorites() {
      alert(`${this.product.name} agregado a favoritos`);
    },
    doNotRecommend() {
      alert(`No recomendar ${this.product.name}`);
    }
  }
}
</script>

<style scoped>
.p-card {
  margin: 20px;
}
</style>
