import axios from "axios";

const http = axios.create({
  baseURL:'http://localhost:3000'
})
export class CropsApiService {
  async getAllCultivos() {
    return await http.get('/crops');
  }

  async getCultivoById(id) {
    return await http.get(`/crops/${id}`);
  }

  async createCultivo(cultivo) {
    return await http.post('/crops', cultivo);
  }

  async updateCultivo(id, cultivo) {
    return await http.put(`/crops/${id}`, cultivo);
  }

  async deleteCultivo(id) {
    return await http.delete(`/crops/${id}`);
  }

  async getAllAsesores() {
    return await http.get('/asesores');
  }

  async getAsesorById(id) {
    return await http.get(`/asesores/${id}`);
  }
}