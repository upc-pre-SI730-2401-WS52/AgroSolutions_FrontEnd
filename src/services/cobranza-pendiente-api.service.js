import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000'
})
export class CobranzaPendienteApiService {
    async getAll() {
        return await http.get('cobranzasPendientes')
    }
    async getById(id) {
        return await http.get('cobranzasPendientes/'+id)
    }
    async create(body) {
        return await http.post('cobranzasPendientes',body)
    }
    async update(body,id) {
        return await http.put('cobranzasPendientes/'+id,body)
    }
    async delete(id) {
        return await http.delete('cobranzasPendientes/'+id)
    }
}