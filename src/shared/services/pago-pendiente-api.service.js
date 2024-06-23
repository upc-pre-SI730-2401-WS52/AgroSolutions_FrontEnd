import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000'
})
export class PagoPendienteApiService {
    async getAll() {
        return await http.get('pagosPendientes')
    }
    async getById(id) {
        return await http.get('pagosPendientes/'+id)
    }
    async create(body) {
        return await http.post('pagosPendientes',body)
    }
    async update(body,id) {
        return await http.put('pagosPendientes/'+id,body)
    }
    async delete(id) {
        return await http.delete('pagosPendientes/'+id)
    }
}