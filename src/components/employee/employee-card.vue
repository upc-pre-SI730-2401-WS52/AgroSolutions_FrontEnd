<!-- src/components/employee-card.vue -->
<template>
  <div class="employee-card">
    <img :src="employee.photoUrl" alt="Foto de empleado">
    <h2>{{ employee.nombre }} {{ employee.apellido }}</h2>
    <p>Cargo: {{ employee.cargo }}</p>
    <p>Salario: {{ employee.salario }}</p>
    <button class="info-button" @click="$emit('view-info', employee)">Ver Información</button>
  </div>
</template>

<script>
export default {
  name: 'EmployeeCard',
  props: {
    employee: Object
  }
}
</script>

<style scoped>
.employee-card {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
}

button.info-button {
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 8px;
  cursor: pointer;
}

button.info-button:hover {
  background-color: darkblue;
}
</style>
