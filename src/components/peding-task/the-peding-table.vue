<template>
  <div class="main" role="main" aria-label="Lista de tareas pendientes">




    <br><br>
    <h1>Pending Tasks</h1> <br>
    <DataTable :value="tasks" tableStyle="min-width: 50rem" aria-label="Tabla de tareas pendientes">
      <Column field="Id" header="ID"></Column>
      <Column field="Name" header="Name"></Column>
      <Column field="DescriptionTask" header="Description"></Column>
      <Column field="DueDate" header="Due Date"></Column>
      <Column field="AssignedTo" header="Assigned To"></Column>
      <Column field="Priority" header="Priority"></Column>
      <Column field="Category" header="Category"></Column>
      <Column field="StateOfTask" header="State of task"></Column>
      <Column header="Actions">
        <template #body="rowData">
          <div class="action-buttons">
            <pv-button @click="editTask(rowData)">Edit</pv-button>
            <pv-button  @click="deleteTask(rowData)">Delete</pv-button>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>

</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {UserApiService} from "@/services/user-api.service.api.js";

export default {
  name: 'the-home-table',
  components: {
    DataTable,
    Column
  },
  data() {
    return {
      tasks: [],
      userApiService: new UserApiService()
    };
  },
  async created() {
    await this.refresh();
  },
  methods: {

    async refresh() {
      try {
        const response = await this.userApiService.getAllTasks();
        this.tasks = response.data;
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    },
    editTask(rowData) {
      console.log('Editar tarea:', rowData);
    },
    deleteTask(rowData) {
      console.log('Eliminar tarea:', rowData);
    },
    addTask() {
      // Asumiendo que tasks es un array, podrías agregar la nueva tarea al array
      this.tasks.push({
        Id: this.tasks.length + 1, // Generar ID de manera adecuada según tus datos
        Name: this.newTask.name,
        DescriptionTask: this.newTask.description,
        DueDate: this.newTask.dueDate,
        AssignedTo: this.newTask.assignedTo,
        Priority: this.newTask.priority,
        Category: this.newTask.category,
        StateOfTask:  this.newTask.category,
      })
    }
  }
}
</script>

<style scoped>
.main {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.p-datatable-tbody .p-datatable-row {
  transition: background-color 0.3s ease;
}

.p-datatable-tbody .p-datatable-row:hover {
  background-color: #f0f0f0;
}
h1 {
  font-size: 36px;
  color: #75aa9c;
}

.action-buttons {
  display: flex;
  justify-content: space-around;
}
.action-buttons button {
  padding: 5px 10px;
  margin: 5px;
}



</style>
