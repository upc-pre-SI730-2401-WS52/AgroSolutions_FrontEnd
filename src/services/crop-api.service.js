import axios from "axios";

const http = axios.create({
  baseURL:'http://localhost:3000'
})
export class CropsApiService {
  async getAllCultivos() {
    return await http.get('/cultivos');
  }

  async getCultivoById(id) {
    return await http.get(`/cultivos/${id}`);
  }

  async createCultivo(cultivo) {
    return await http.post('/cultivos', cultivo);
  }

  async updateCultivo(id, cultivo) {
    return await http.put(`/cultivos/${id}`, cultivo);
  }

  async deleteCultivo(id) {
    return await http.delete(`/cultivos/${id}`);
  }

  async getAllAsesores() {
    return await http.get('/asesores');
  }

  async getAsesorById(id) {
    return await http.get(`/asesores/${id}`);
  }

  async getAllCalendarios() {
    return await http.get('/calendarios');
  }

  async getCalendarioById(id) {
    return await http.get(`/calendarios/${id}`);
  }

  async getActividadesByCalendarioId(calendarioId) {
    const { data } = await this.getCalendarioById(calendarioId);
    return data.dias || [];
  }

  async getAsesorForCultivo(cultivoId) {
    const { data: cultivo } = await this.getCultivoById(cultivoId);
    if (cultivo && cultivo.asesorId) {
      return await this.getAsesorById(cultivo.asesorId);
    }
    return null;
  }
  async createCalendario(calendario) {
    return await http.post('/calendarios', calendario);
  }
}