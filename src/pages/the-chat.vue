<template>
  <div>
    <h1>Chat con Vendedor Mayorista</h1>
    <!-- Aquí va el contenido del chat -->
    <div>
      <textarea v-model="message" placeholder="Escribe tu mensaje..."></textarea>
      <button @click="sendMessage">Enviar</button>
      <button @click="generateOrder">Generar Pedido</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-chat',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      // Lógica para enviar el mensaje
      console.log('Mensaje enviado:', this.message);
    },
    generateOrder() {
      // Lógica para generar el pedido
      console.log('Pedido generado');
      // Redireccionar a la página de generar pedidos
      this.$router.push('/generate-order');
    }
  }
}
</script>

<style scoped>
/* Estilos del componente */
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>
