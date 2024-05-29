<template>
  <div>
    <pv-fieldSet v-for="finanza in finanzas" :key="finanza.id" style="margin-top: 50px; margin-bottom: 50px;">
      <template #legend>
        <div class="flex align-items-center pl-2">
          <span class="font-bold">Finanzas de {{ finanza.mes }}</span>
        </div>
      </template>
      <div>
        <pv-card>
          <template #content>
            <p>Ingresos: {{ finanza.ingresos }}</p>

          </template>
        </pv-card>
        <pv-card>
          <template #content>
            Gastos: {{ finanza.gastos }}
          </template>
        </pv-card>
        <pv-card>
          <template #content>
            <p>Ganancias: {{ finanza.ganancias }}</p>
          </template>
        </pv-card>
      </div>
    </pv-fieldSet>
  </div>
</template>

<script>
import { FinanzasApiService } from "@/services/finanzas-api.service.js";

export default {
  name: 'TheFinance',
  data() {
    return {
      finanzas: [],
      finanzasApiService: new FinanzasApiService()
    }
  },
  async created() {
    const response = await this.finanzasApiService.getAll();
    this.finanzas = response.data;
  },
}
</script>

<style scoped>
</style>
