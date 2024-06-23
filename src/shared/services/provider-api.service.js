import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000'
})
export class ProviderApiService {
    async getAll() {
        return await http.get('providers')
    }
    async getById(id) {
        return await http.get('providers/'+id)
    }
    async create(body) {
        return await http.post('providers',body)
    }
    async update(body,id) {
        return await http.put('providers/'+id,body)
    }
    async delete(id) {
        return await http.delete('providers/'+id)
    }
}