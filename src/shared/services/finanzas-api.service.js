import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000'
})
export class FinanzasApiService {
    async getAll() {
        return await http.get('finanzas')
    }
    async getById(id) {
        return await http.get('finanzas/'+id)
    }
    async create(body) {
        return await http.post('finanzas',body)
    }
    async update(body,id) {
        return await http.put('finanzas/'+id,body)
    }
    async delete(id) {
        return await http.delete('finanzas/'+id)
    }
}