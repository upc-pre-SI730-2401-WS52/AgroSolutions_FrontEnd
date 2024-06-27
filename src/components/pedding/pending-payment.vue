<template>
  <div style="margin-top: 50px; margin-bottom: 190px; margin-left: calc(100px);">
    <pv-fieldSet style="margin-top: 50px; margin-bottom: 50px;">
      <template #legend>
        <div class="flex align-items-center pl-2">
          <span class="font-bold" aria-label="Pending Payments">{{$t('pendingPayments')}}</span>
        </div>
      </template>
      <Button :label="$t('addPayment')" class="ml-auto p-button-success" @click="showAddPagoDialog = true" aria-label="Add Payment Button"></Button>
      <div class="payment-cards-container">
        <pv-card v-for="pago in pagos" :key="pago.id" class="payment-card" :aria-label="'Payment Card for ' + pago.tipo">
          <template #subtitle>
            <p aria-label="'Type: ' + pago.tipo">{{$t('type')}}: {{ pago.tipo }}</p>
            <p aria-label="'Cost: ' + pago.costo">{{$t('cost')}}: {{ pago.costo }}</p>
          </template>
          <template #content>
            <div class="flex gap-2">
              <Button :label="$t('description')" @click="showDescription(pago)" aria-label="Description Button"></Button>
              <Button v-if="!pago.pagado" :label="$t('paid')" @click="markAsPaid(pago)" class="p-button-success" aria-label="Mark as Paid Button"></Button>
            </div>
          </template>
        </pv-card>
      </div>
    </pv-fieldSet>

    <pv-fieldSet style="margin-top: 50px; margin-bottom: 50px;">
      <template #legend>
        <div class="flex align-items-center pl-2">
          <span class="font-bold" aria-label="Pending Collections">{{$t('pendingCollections')}}</span>
        </div>
      </template>
      <Button :label="$t('addCollection')" class="ml-auto p-button-success" @click="showAddCobranzaDialog = true" aria-label="Add Collection Button"></Button>
      <div class="payment-cards-container">
        <pv-card v-for="cobranza in cobranzas" :key="cobranza.id" class="payment-card" :aria-label="'Collection Card for ' + cobranza.tipo">
          <template #subtitle>
            <p aria-label="'Type: ' + cobranza.tipo">{{$t('type')}}: {{ cobranza.tipo }}</p>
            <p aria-label="'Cost: ' + cobranza.costo">{{$t('cost')}}: {{ cobranza.costo }}</p>
          </template>
          <template #content>
            <div class="flex gap-2">
              <Button :label="$t('description')" @click="showDescription(cobranza)" aria-label="Description Button"></Button>
              <Button v-if="!cobranza.pagado" :label="$t('collected')" @click="markAsCollected(cobranza)"
                      class="p-button-success" aria-label="Mark as Collected Button"></Button>
            </div>
          </template>
        </pv-card>
      </div>
    </pv-fieldSet>

    <!-- Dialog for adding new Pago -->
    <Dialog header="Agregar Pago" v-model:visible="showAddPagoDialog" :closable="true" :modal="true"
            aria-label="Add Payment Dialog">
      <div>
        <InputText v-model="newPago.tipo" placeholder="Tipo" aria-label="Type Input"></InputText>
        <InputNumber v-model="newPago.costo" placeholder="Costo" aria-label="Cost Input"></InputNumber>
        <InputText v-model="newPago.descripcion" placeholder="Descripción" aria-label="Description Input"></InputText>
        <Button label="Agregar" @click="addPago" class="p-button-success mt-2" aria-label="Add Payment Button"></Button>
      </div>
    </Dialog>

    <!-- Dialog for adding new Cobranza -->
    <Dialog header="Agregar Cobranza" v-model:visible="showAddCobranzaDialog" :closable="true" :modal="true"
            aria-label="Add Collection Dialog">
      <div>
        <InputText v-model="newCobranza.tipo" placeholder="Tipo" aria-label="Type Input"></InputText>
        <InputNumber v-model="newCobranza.costo" placeholder="Costo" aria-label="Cost Input"></InputNumber>
        <InputText v-model="newCobranza.descripcion" placeholder="Descripción"
                   aria-label="Description Input"></InputText>
        <Button label="Agregar" @click="addCobranza" class="p-button-success mt-2"
                aria-label="Add Collection Button"></Button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import {PagoPendienteApiService} from '@/shared/services/pago-pendiente-api.service.js';
import {CobranzaPendienteApiService} from "@/shared/services/cobranza-pendiente-api.service.js";
import {ref, onMounted} from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';

export default {
  name: 'ThePendingPayment',
  components: {
    Button,
    Dialog,
    InputText,
    InputNumber
  },
  setup() {
    const pagos = ref([]);
    const cobranzas = ref([]);
    const showAddPagoDialog = ref(false);
    const showAddCobranzaDialog = ref(false);
    const newPago = ref({tipo: '', costo: 0, descripcion: '', pagado: 0});
    const newCobranza = ref({tipo: '', costo: 0, descripcion: '', pagado: 0});
    const pagoPendienteApiService = new PagoPendienteApiService();
    const cobranzaPendienteApiService = new CobranzaPendienteApiService();

    const loadPagos = async () => {
      const response = await pagoPendienteApiService.getAll();
      pagos.value = response.data;
    };

    const loadCobranzas = async () => {
      const response = await cobranzaPendienteApiService.getAll();
      cobranzas.value = response.data;
    };

    const showDescription = (item) => {
      alert(`Descripción: ${item.descripcion}`);
    };

    const markAsPaid = async (pago) => {
      await pagoPendienteApiService.update({...pago, pagado: 1}, pago.id);
      pago.pagado = true;
    };

    const markAsCollected = async (cobranza) => {
      await cobranzaPendienteApiService.update({...cobranza, pagado: 1}, cobranza.id);
      cobranza.pagado = true;
    };

    const addPago = async () => {
      await pagoPendienteApiService.create(newPago.value);
      newPago.value = {tipo: '', costo: 0, descripcion: '', pagado: 0};
      showAddPagoDialog.value = false;
      loadPagos();
    };

    const addCobranza = async () => {
      await cobranzaPendienteApiService.create(newCobranza.value);
      newCobranza.value = {tipo: '', costo: 0, descripcion: '', pagado: 0};
      showAddCobranzaDialog.value = false;
      loadCobranzas();
    };

    onMounted(() => {
      loadPagos();
      loadCobranzas();
    });

    return {
      pagos,
      cobranzas,
      showAddPagoDialog,
      showAddCobranzaDialog,
      newPago,
      newCobranza,
      showDescription,
      markAsPaid,
      markAsCollected,
      addPago,
      addCobranza
    };
  }
};
</script>

<style scoped>
.payment-cards-container {
  display: flex;
  gap: 10px;

}

.payment-card {
  flex: 0 1 calc(100% - 20px);
  background-color: rgba(119, 221, 119, 0.5);
}

.ml-auto {
  margin-left: auto;
}
</style>
