<!-- src/components/CardEquipment.vue -->
<template>
  <div class="card">
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
  }
}
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
</style>
