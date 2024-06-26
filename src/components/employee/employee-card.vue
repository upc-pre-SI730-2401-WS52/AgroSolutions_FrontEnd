<template>
  <div class="employee-card">
    <img :src="employee.photoUrl" alt="Foto de empleado" class="card-image">
    <h2 class="card-title">{{ employee.nombre }} {{ employee.apellido }}</h2>
    <p class="card-info">Cargo: {{ employee.cargo }}</p>
    <p class="card-info">Salario: {{ employee.salario }}</p>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-image {
  width: 100%;
  height: auto;
  max-height: 200px; /* Ajusta según tu diseño */
  object-fit: cover;
}

.card-title {
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 5px;
}

.card-info {
  font-size: 1rem;
  margin-bottom: 5px;
}

.info-button {
  background-color: #75aa9c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: auto; /* Hace que el botón esté alineado al fondo */
  cursor: pointer;
}

.info-button:hover {
  background-color: darkblue;
}
</style>
