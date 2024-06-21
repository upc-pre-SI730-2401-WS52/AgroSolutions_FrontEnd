<template>
  <div :class="'card card-' + colorIndex">
    <h3>Equipo {{ equipo.codigo_equipo }}</h3>
    <p>Presupuesto: {{ equipo.presupuesto }}</p>
    <p>Cultivo: {{ equipo.codigo_cultivo }}</p>
    <div>
      <h4>Asesor</h4>
      <p>{{ equipo.asesor.nombre }} {{ equipo.asesor.apellido }} (DNI: {{ equipo.asesor.dni }})</p>
    </div>
    <div>
      <h4>Operarios</h4>
      <ul>
        <li v-for="operario in equipo.operarios" :key="operario.dni">
          {{ operario.nombre }} {{ operario.apellido }} (DNI: {{ operario.dni }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardEquipment',
  props: {
    equipo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      colorIndex: 0
    };
  },
  created() {
    this.colorIndex = Math.floor(Math.random() * 3) + 1;
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
}

.card-1 {
  background-color: #a3eddc;
}

.card-2 {
  background-color: #56b198;
}

.card-3 {
  background-color: #75aa9c;
}

.card-4 {
  background-color: #709c90;
}

.card-6 {
  background-color: #699e8c;
}
.card-7 {
  background-color: #3bc39d;
}

.card-8 {
  background-color: #21e4b0;
}

.card-9 {
  background-color: #76ae9e;
}

</style>

