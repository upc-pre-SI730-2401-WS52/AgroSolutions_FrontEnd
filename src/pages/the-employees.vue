<template>
  <div>
    <header>
      <the-header-session />
    </header>

    <main style="padding-top: 80px; padding-bottom: 150px;">
      <div class="employees-container">
        <h1>{{ $t('employeesPage.title') }}</h1>
        <div class="button-container">
          <button class="green-button" @click="showAddEmployeeForm = true">{{ $t('employeesPage.addEmployee') }}</button>
          <button class="green-button" @click="viewTeams">{{ $t('employeesPage.viewTeams') }}</button>
        </div>

        <AddEmployee v-if="showAddEmployeeForm" @add-employee="addEmployee" @close="showAddEmployeeForm = false" />

        <div class="employees-grid">
          <EmployeeCard
              v-for="employee in employees"
              :key="employee.dni"
              :employee="employee"
              @view-info="showEmployeeInfo"
              @view-team="viewTeam"
              @employee-deleted="removeEmployeeFromList"
          />
        </div>

        <EmployeeInformation v-if="selectedEmployee" :employee="selectedEmployee" @close="closeEmployeeInfo" />
      </div>
    </main>
  </div>
  <footer>
    <TheFooter/>
  </footer>
</template>

<script>
import EmployeeCard from '../components/employee/the-employee-card.vue';
import EmployeeInformation from '../components/employee/the-employee-information.vue';
import AddEmployee from '../components/employee/the-add-employee.vue';
import { addEmployee as addEmployeeService, getEmployees, deleteEmployee } from '@/shared/services/employee-api.service.js';
import TheHeaderSession from "@/components/elements/the-header-session.component.vue";
import TheFooter from "@/components/elements/the-footer.component.vue";

export default {
  name: 'TheEmployeesComponent',
  components: {
    TheFooter,
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
      this.$router.push({name: 'equipment'});
    },
    showEmployeeInfo(employee) {
      this.selectedEmployee = employee;
    },
    closeEmployeeInfo() {
      this.selectedEmployee = null;
    },
    removeEmployeeFromList(employeeId) {
      this.employees = this.employees.filter(emp => emp.dni !== employeeId);
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
  margin-bottom: 10px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-top: 10px;
}

main {
  padding-top: 80px;
  padding-bottom: 150px;
}

footer {
  background-color: #4f4d4d;
  padding: 10px 0 10px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>