<template>

  <header>
    <the-header-session />
  </header>

  <main style="margin-top: 50px">
  <div class="employees-container">
    <h1>Empleados</h1>
    <div class="button-container">
      <button class="green-button" @click="showAddEmployeeForm = true">Agregar empleado</button>
      <button class="green-button" @click="viewTeams">Ver Equipos</button>
    </div>
    <AddEmployee v-if="showAddEmployeeForm" @add-employee="addEmployee" @close="showAddEmployeeForm = false" />
    <div class="employees-grid">
      <EmployeeCard v-for="employee in employees" :key="employee.dni" :employee="employee" @view-info="showEmployeeInfo" @view-team="viewTeam" />
    </div>
    <EmployeeInformation v-if="selectedEmployee" :employee="selectedEmployee" @close="closeEmployeeInfo" />
  </div>
  </main>
</template>

<script>
import EmployeeCard from '../components/employee/employee-card.vue';
import EmployeeInformation from '../components/employee/employee-information.vue';
import AddEmployee from '../components/employee/add-employee.vue';
import {addEmployee as addEmployeeService, getEmployees} from '@/shared/services/employee-api.service.js';
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";

export default {
  name: 'TheEmployeesComponent',
  components: {
    TheHeaderSession,
    EmployeeCard,
    EmployeeInformation,
    AddEmployee
  },
  data() {
    return {
      employees: [],
      selectedEmployee: null,
      showAddEmployeeForm: false
    };
  },
  created() {
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      getEmployees().then(data => {
        this.employees = data;
      }).catch(error => {
        console.error('Error fetching employees:', error);
      });
    },
    addEmployee(newEmployee) {
      addEmployeeService(newEmployee).then(addedEmployee => {
        this.employees.push(addedEmployee);
        this.showAddEmployeeForm = false;
      }).catch(error => {
        console.error('Error adding employee:', error);
      });
    },
    viewTeams() {
      this.$router.push({ name: 'equipment' });
    },
    showEmployeeInfo(employee) {
      this.selectedEmployee = employee;
    },
    closeEmployeeInfo() {
      this.selectedEmployee = null;
    }
  }
}
</script>

<style scoped>
.employees-container {
  background-color: white;
  padding: 16px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 16px;
  color: green;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

button.green-button {
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

button.green-button:hover {
  background-color: darkgreen;
}

.employees-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Espacio entre EmployeeCards */
}
</style>
