import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000/'
})
export class PendingTasksApiServiceApi {
    async getAllTask() {
        return await http.get('/tasks')
    }
    async getById(Tasksid) {
        return await http.get('tasks/'+id)
    }
    async createTask(body) {
        return await http.post('tasks',body)
    }
    async updateTask(body,id) {
        return await http.put('tasks/'+id,body)
    }
    async deleteTask(id) {
        return await http.delete('tasks/'+id)
    }
    async getPayments_pendingById(id) {
        return await http.get('users/payments_pending'+id)
    }
}

