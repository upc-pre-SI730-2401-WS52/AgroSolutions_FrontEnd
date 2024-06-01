<template>
  <div>
    <h1>Chat con Vendedor Mayorista</h1>
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
      console.log('Mensaje enviado:', this.message);
    },
    generateOrder() {
      console.log('Pedido generado');
      this.$router.push('/generate-order');
    }
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>