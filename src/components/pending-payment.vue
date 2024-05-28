<template>
  <pv-fieldSet style="margin-top: 50px; margin-bottom: 50px;">
    <template #legend>
      <div class="flex align-items-center pl-2">
        <span class="font-bold">Pagos Pendientes</span>
      </div>
    </template>
    <div class="payment-cards-container">
      <pv-card v-for="pago in pagos" :key="pago.id" class="payment-card">
        <template #subtitle>
          <p>Tipo: {{ pago.tipo }}</p>
          <p>Costo: {{ pago.costo }}</p>
        </template>
        <template #content>
          <div class="flex gap-2">
            <Button label="Descripcion" @click="showDescription(pago)"></Button>
            <Button v-if="!pago.pagado" label="Pagado" @click="markAsPaid(pago)" class="p-button-success"></Button>
          </div>
        </template>
      </pv-card>
    </div>
  </pv-fieldSet>

  <pv-fieldSet>
    <template #legend>
      <div class="flex align-items-center pl-2">
        <span class="font-bold">Cobranzas Pendientes</span>
      </div>
    </template>
    <div class="payment-cards-container">
      <pv-card v-for="cobranza in cobranzas" :key="cobranza.id" class="payment-card">
        <template #subtitle>
          <p>Tipo: {{ cobranza.tipo }}</p>
          <p>Costo: {{ cobranza.costo }}</p>
        </template>
        <template #content>
          <div class="flex gap-2">
            <Button label="Descripcion" @click="showDescription(cobranza)"></Button>
            <Button v-if="!cobranza.pagado" label="Cobrado" @click="markAsPaid(cobranza)" class="p-button-success"></Button>
          </div>
        </template>
      </pv-card>
    </div>
  </pv-fieldSet>
</template>

<script>
import {PagoPendienteApiService} from '@/services/pago-pendiente-api.service.js';
import {ref, onMounted} from 'vue';
import Button from 'primevue/button';
import {CobranzaPendienteApiService} from "@/services/cobranza-pendiente-api.service.js";

export default {
  name: 'ThePendingPayment',
  components: {
    Button
  },
  setup() {
    const pagos = ref([]);
    const pagoPendienteApiService = new PagoPendienteApiService();
    const cobranzas = ref([]);
    const cobranzaPendienteApiService = new CobranzaPendienteApiService();

    const loadPagos = async () => {
      const response = await pagoPendienteApiService.getAll();
      pagos.value = response.data;

      const answer = await cobranzaPendienteApiService.getAll();
      cobranzas.value = answer.data;

    };

    const showDescription = (pago) => {
      alert(`Descripción: ${pago.descripcion}`);
    };

    const markAsPaid = async (pago) => {
      await pagoPendienteApiService.update({...pago, pagado: 1}, pago.id);
      pago.pagado = true;
    };

    onMounted(loadPagos);

    return {pagos, showDescription, markAsPaid};
  }
};
</script>

<style scoped>
.payment-cards-container {

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.payment-card {
  flex: 0 1 calc(50% - 10px);
}
</style>
