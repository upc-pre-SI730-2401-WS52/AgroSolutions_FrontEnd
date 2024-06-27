import axios from "axios";

const baseURL = 'http://localhost:3000';

const http = axios.create({
    baseURL: baseURL
});

export async function deleteTask(id) {
    return fetch(`${baseURL}/tasks/${id}`, {
    }).then(response => response.json());
}
export class PendingTasksApiServiceApi {
    async getAllTask() {
        return await http.get('/tasks')
    }
        async createTask(body) {
        return await http.post('tasks',body)
    }
    async updateTask(body,id) {
        return await http.put('tasks/'+id,body)
    }
    async deleteTask(id) {
        return await http.delete('tasks/',id)
    }

    async getPayments_pendingById(id) {
        return await http.get('users/payments_pending'+id)
    }
}

