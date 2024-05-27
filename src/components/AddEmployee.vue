<template>
  <div class="add-employee-form">
    <h2 style="color: black;">Agregar Empleado</h2>
    <form @submit.prevent="submitForm">
      <label style="color: black;">Nombre : </label>
      <input v-model="employee.nombre" type="text" required />
      <br>

      <label style="color: black;">Apellido : </label>
      <input v-model="employee.apellido" type="text" required />
      <br>

      <label style="color: black;">Edad : </label>
      <input v-model="employee.edad" type="number" required />
      <br>

      <label style="color: black;">DNI : </label>
      <input v-model="employee.dni" type="text" required />
      <br>

      <label style="color: black;">Cargo : </label>
      <select v-model="employee.cargo" style="color: black;">
        <option value="operario">Operario</option>
        <option value="asesor">Asesor</option>
      </select>
      <br>

      <label style="color: black;">Salario : </label>
      <input v-model="employee.salario" type="number" required />
      <br>

      <label style="color: black;">Teléfono : </label>
      <input v-model="employee.telefono" type="text" required />
      <br>

      <label style="color: black;">Foto de Perfil (URL) : </label>
      <input v-model="employee.photoUrl" type="text" required />
      <br>

      <button type="submit" class="btn btn-primary">Registrar</button>
      <button type="button" class="btn btn-danger" @click="$emit('close')">Cancelar</button>
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

.btn {
  margin: 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: blue;
}

.btn-primary:hover {
  background-color: darkblue;
}

.btn-danger {
  background-color: red;
}

.btn-danger:hover {
  background-color: darkred;
}

/* Añadido: Agrega un margen inferior a los elementos del formulario */
input,
select {
  margin-bottom: 10px;
}
</style>
