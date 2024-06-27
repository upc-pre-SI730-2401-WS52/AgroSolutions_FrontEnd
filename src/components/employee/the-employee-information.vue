<template>
  <div class="employee-info-modal">
    <div class="modal-content">
      <img :src="employee.photoUrl" alt="Employee Photo" class="employee-photo">
      <p class="info-text">{{ $t('employeeInformation.name') }}: {{ employee.nombre }} {{ employee.apellido }}</p>
      <p class="info-text">{{ $t('employeeInformation.age') }}: {{ employee.edad }}</p>
      <p class="info-text">{{ $t('employeeInformation.dni') }}: {{ employee.dni }}</p>
      <p class="info-text">{{ $t('employeeInformation.position') }}: {{ employee.cargo }}</p>
      <p class="info-text">{{ $t('employeeInformation.salary') }}: {{ employee.salario }}</p>
      <p class="info-text">{{ $t('employeeInformation.phone') }}: {{ employee.telefono }}</p>
      <button @click="$emit('close')">{{ $t('employeeInformation.close') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeInformation',
  props: {
    employee: Object
  }
}
</script>

<style scoped>
.employee-info-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
}

.employee-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}

.info-text {
  color: black;
  margin: 4px 0;
}

button {
  margin-top: 16px;
  background: green;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: darkgreen;
}
</style>
