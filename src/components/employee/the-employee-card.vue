<template>
  <div class="employee-card">
    <img :src="employee.photoUrl" alt="Foto de empleado" class="card-image">
    <div class="card-content">
      <h2 class="card-title">{{ employee.nombre }} {{ employee.apellido }}</h2>
      <p class="card-info">{{ $t('employeeCard.position') }}: {{ employee.cargo }}</p>
      <p class="card-info">{{ $t('employeeCard.salary') }}: {{ employee.salario }}</p>
    </div>
    <div class="card-buttons">
      <button class="info-button" @click="$emit('view-info', employee)">{{ $t('employeeCard.viewInfo') }}</button>
      <button class="delete-button" @click="deleteEmployee">{{ $t('employeeCard.delete') }}</button>
    </div>
  </div>
</template>

<script>
import { deleteEmployee } from '@/shared/services/employee-api.service.js';

export default {
  name: 'EmployeeCard',
  props: {
    employee: Object
  },
  methods: {
    deleteEmployee() {
      if (confirm(`${this.$t('employeeCard.deleteConfirm')} ${this.employee.nombre} ${this.employee.apellido}?`)) {
        deleteEmployee(this.employee.id)
            .then(() => {
              this.$emit('employee-deleted', this.employee.id);
              console.log(`Empleado con ID ${this.employee.dni} eliminado exitosamente.`);
            })
            .catch(error => {
              console.error(`Error eliminando empleado con ID ${this.employee.id}:`, error);
            });
      }
    }
  }
}
</script>

<style scoped>
.employee-card {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}

.card-content {
  flex-grow: 1;
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

.card-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.info-button {
  background-color: #75aa9c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.info-button:hover {
  background-color: #146710;
}

.delete-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c0392b;
}
</style>