<template>
  <div class="main" role="main" aria-label="Lista de tareas pendientes">
    <h1 style="display: flex; align-items: center;">
      Pending Tasks
      <Button @click="showAddTaskDialog = true" class="p-button-success" style="margin-left: 20px; background-color: #8dc9a6; border-color: #8dc9a6;">Agregar Tarea</Button>
    </h1>
    <DataTable :value="tasks" tableStyle="min-width: 50rem" aria-label="Tabla de tareas pendientes">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="descriptionTask" header="Description"></Column>
      <Column field="dueDate" header="Due Date"></Column>
      <Column field="assignedTo" header="Assigned To"></Column>
      <Column field="priority" header="Priority"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="stateOfTask" header="State of task"></Column>
      <Column header="Actions">
        <template #body="{ rowData }">
          <div class="action-buttons">
            <Button @click="editTask(rowData)" class="edit-button">Edit</Button>
            <Button @click="deleteTask(rowData)" class="delete-button">Eliminar</Button>
          </div>
        </template>
      </Column>
    </DataTable>

    <Dialog v-model:visible="showEditTaskDialog" header="Edit Task" :modal="true" :closable="true">
      <div class="dialog-content">
        <form @submit.prevent="saveEditedTask">
          <div class="p-fluid">
            <div class="p-field">
              <label for="editName">Name</label>
              <InputText id="editName" v-model="editedTask.name" />
            </div>
            <div class="p-field">
              <label for="editDescription">Description</label>
              <InputText id="editDescription" v-model="editedTask.descriptionTask" />
            </div>
            <div class="p-field">
              <label for="editDueDate">Due Date</label>
              <InputText id="editDueDate" v-model="editedTask.dueDate" />
            </div>
            <div class="p-field">
              <label for="editAssignedTo">Assigned To</label>
              <InputText id="editAssignedTo" v-model="editedTask.assignedTo" />
            </div>
            <div class="p-field">
              <label for="editPriority">Priority</label>
              <InputText id="editPriority" v-model="editedTask.priority" />
            </div>
            <div class="p-field">
              <label for="editCategory">Category</label>
              <InputText id="editCategory" v-model="editedTask.category" />
            </div>
            <div class="p-field">
              <label for="editStateOfTask">State Of Task</label>
              <InputText id="editStateOfTask" v-model="editedTask.stateOfTask" />
            </div>
            <div class="p-field">
              <Button type="submit" label="Save" class="p-button-success" style="background-color: #8dc9a6; border-color: #8dc9a6;" />
            </div>
          </div>
        </form>
      </div>
    </Dialog>

    <Dialog v-model:visible="showAddTaskDialog" header="Add Task" :modal="true" :closable="true">
      <div class="dialog-content">
        <form @submit.prevent="addTask">
          <div class="p-fluid">
            <div class="p-field">
              <label for="newName">Name</label>
              <InputText id="newName" v-model="newTask.name" />
            </div>
            <div class="p-field">
              <label for="newDescription">Description</label>
              <InputText id="newDescription" v-model="newTask.descriptionTask" />
            </div>
            <div class="p-field">
              <label for="newDueDate">Due Date</label>
              <InputText id="newDueDate" v-model="newTask.dueDate" />
            </div>
            <div class="p-field">
              <label for="newAssignedTo">Assigned To</label>
              <InputText id="newAssignedTo" v-model="newTask.assignedTo" />
            </div>
            <div class="p-field">
              <label for="newPriority">Priority</label>
              <InputText id="newPriority" v-model="newTask.priority" />
            </div>
            <div class="p-field">
              <label for="newCategory">Category</label>
              <InputText id="newCategory" v-model="newTask.category" />
            </div>
            <div class="p-field">
              <label for="newStateOfTask">State Of Task</label>
              <InputText id="newStateOfTask" v-model="newTask.stateOfTask" />
            </div>
            <div class="p-field">
              <Button type="submit" label="Add" class="p-button-success" style="background-color: #8dc9a6; border-color: #8dc9a6;" />
            </div>
          </div>
        </form>
      </div>
    </Dialog>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { PendingTasksApiServiceApi } from "@/shared/services/pending-tasks.api.service.api.js";

export default {
  name: "TheHomeTable",
  components: {
    DataTable,
    Column,
    Dialog,
    InputText,
    Button,
  },
  data() {
    return {
      tasks: [],
      showEditTaskDialog: false,
      showAddTaskDialog: false,
      editedTask: {
        id: null,
        name: "",
        descriptionTask: "",
        dueDate: "",
        assignedTo: "",
        priority: "",
        category: "",
        stateOfTask: "",
      },
      newTask: {
        name: "",
        descriptionTask: "",
        dueDate: "",
        assignedTo: "",
        priority: "",
        category: "",
        stateOfTask: "",
      },
      pendingTasksApiServiceApi: null,
    };
  },
  created() {
    this.pendingTasksApiServiceApi = new PendingTasksApiServiceApi();
    this.refresh();
  },
  methods: {
    deleteTask(taskId) {
      if (confirm(`¿Estás seguro de eliminar la tarea con ID ${taskId}?`)) {
        this.pendingTasksApiServiceApi.deleteTask(taskId)
            .then(response => {
              if (response.status === 200) {
                alert("Tarea eliminada correctamente.");
                this.refresh();
              } else {
                alert("Error al eliminar la tarea.");
              }
            })
            .catch(error => {
              console.error("Error al eliminar la tarea:", error);
              alert("Error al eliminar la tarea.");
            });
      }
    },
    editTask(rowData) {
      this.editedTask.id = rowData.id;
      this.editedTask.name = rowData.name;
      this.editedTask.descriptionTask = rowData.descriptionTask;
      this.editedTask.dueDate = rowData.dueDate;
      this.editedTask.assignedTo = rowData.assignedTo;
      this.editedTask.priority = rowData.priority;
      this.editedTask.category = rowData.category;
      this.editedTask.stateOfTask = rowData.stateOfTask;
      this.showEditTaskDialog = true;
    },
    async saveEditedTask() {
      try {
        const response = await this.pendingTasksApiServiceApi.updateTask(
            this.editedTask.id,
            {
              name: this.editedTask.name,
              descriptionTask: this.editedTask.descriptionTask,
              dueDate: this.editedTask.dueDate,
              assignedTo: this.editedTask.assignedTo,
              priority: this.editedTask.priority,
              category: this.editedTask.category,
              stateOfTask: this.editedTask.stateOfTask,
            }
        );
        if (response.status === 200) {
          alert("Tarea actualizada correctamente.");
          this.showEditTaskDialog = false;
          this.refresh();
        } else {
          alert("Error al actualizar la tarea.");
        }
      } catch (error) {
        console.error("Error al actualizar la tarea:", error);
        alert("Error al actualizar la tarea.");
      }
    },
    async addTask() {
      try {
        const response = await this.pendingTasksApiServiceApi.createTask(this.newTask);
        if (response.status === 201) {
          alert("Tarea agregada correctamente.");
          this.showAddTaskDialog = false;
          this.refresh();
        } else {
          alert("Error al agregar la tarea.");
        }
      } catch (error) {
        console.error("Error al agregar la tarea:", error);
        alert("Error al agregar la tarea.");
      }
    },
    async refresh() {
      try {
        const response = await this.pendingTasksApiServiceApi.getAllTask();
        this.tasks = response.data;
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
        alert("Error al obtener las tareas.");
      }
    },
  },
};
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

.action-buttons .edit-button,
.action-buttons .delete-button {
  padding: 5px 10px;
  margin: 5px;
  min-width: 70px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-buttons .edit-button {
  background-color: #75aa9c;
  color: white;
}

.action-buttons .edit-button:hover {
  background-color: #5c887b;
}

.action-buttons .delete-button {
  background-color: #ff6347;
  color: white;
}

.action-buttons .delete-button:hover {
  background-color: #e6523c;
}

.dialog-content {
  padding: 20px;
}

.dialog-content .p-field {
  margin-bottom: 1.5rem;
}
</style>
