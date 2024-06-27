<template>
  <div class="add-employee-form">
    <h2>{{ $t('addEmployeeForm.title') }}</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>{{ $t('addEmployeeForm.name') }}:</label>
        <input v-model="employee.nombre" type="text" class="form-control" required />
      </div>

      <div class="form-group">
        <label>{{ $t('addEmployeeForm.lastName') }}:</label>
        <input v-model="employee.apellido" type="text" class="form-control" required />
      </div>

      <div class="form-group">
        <label>{{ $t('addEmployeeForm.age') }}:</label>
        <input v-model="employee.edad" type="number" class="form-control" required />
      </div>

      <div class="form-group">
        <label>{{ $t('addEmployeeForm.dni') }}:</label>
        <input v-model="employee.dni" type="text" class="form-control" required />
      </div>

      <div class="form-group">
        <label>{{ $t('addEmployeeForm.position') }}:</label>
        <select v-model="employee.cargo" class="form-control" required>
          <option value="operario">{{ $t('addEmployeeForm.operario') }}</option>
          <option value="asesor">{{ $t('addEmployeeForm.asesor') }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>{{ $t('addEmployeeForm.salary') }}:</label>
        <input v-model="employee.salario" type="number" class="form-control" required />
      </div>

      <div class="form-group">
        <label>{{ $t('addEmployeeForm.phone') }}:</label>
        <input v-model="employee.telefono" type="text" class="form-control" required />
      </div>

      <div class="form-group">
        <label>{{ $t('addEmployeeForm.photoUrl') }}:</label>
        <input v-model="employee.photoUrl" type="text" class="form-control" required />
      </div>

      <div class="button-group">
        <button type="submit" class="btn btn-primary">{{ $t('addEmployeeForm.register') }}</button>
        <button type="button" class="btn btn-danger" @click="$emit('close')">{{ $t('addEmployeeForm.cancel') }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddEmployee',
  data() {
    return {
      employee: {
        nombre: '',
        apellido: '',
        edad: '',
        dni: '',
        cargo: '',
        salario: '',
        telefono: '',
        photoUrl: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.$emit('add-employee', this.employee);
    }
  }
};
</script>

<style scoped>
.add-employee-form {
  background: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  color: black;
}

input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button-group {
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}

.btn-primary {
  background-color: #75aa9c;
  color: white;
}

.btn-primary:hover {
  background-color: darkblue;
}

.btn-danger {
  background-color: red;
  color: white;
}

.btn-danger:hover {
  background-color: darkred;
}
</style>
