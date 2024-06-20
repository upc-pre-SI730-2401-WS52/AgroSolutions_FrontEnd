<template>
  <div>
    <h1>Generar Pedidos</h1>
    <div>
      <label for="producto">Producto</label>
      <input type="text" id="producto" v-model="producto" placeholder="Nombre del Producto">
    </div>
    <div>
      <label for="cantidad">Cantidad</label>
      <input type="number" id="cantidad" v-model="cantidad" placeholder="Cantidad">
    </div>
    <div>
      <label for="precio">Precio</label>
      <input type="number" id="precio" v-model="precio" placeholder="Precio">
    </div>
    <div>
      <label for="telefono">Teléfono</label>
      <input type="tel" id="telefono" v-model="telefono" placeholder="Número de Teléfono (9 dígitos)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-orders',
  data() {
    return {
      producto: '',
      cantidad: '',
      precio: '',
      telefono: ''
    }
  }
}
</script>

<style scoped>
/* Estilos del componente */
div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 5px;
}
</style>