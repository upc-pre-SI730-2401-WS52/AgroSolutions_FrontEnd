<template>

  <header>
    <the-header-session />
  </header>

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
import TheHeaderSession from "@/components/the-header-session.component.vue";

export default {
  name: 'the-chat',
  components: {TheHeaderSession},
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
      this.$router.push('/create_order');
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


header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
