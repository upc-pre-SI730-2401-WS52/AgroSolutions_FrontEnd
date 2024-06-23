<template>
  <div>
    <div class="flex align-items-center mb-3">
      <Button :label="$t('addOrder')" class="p-button-success" @click="showAddOrderDialog = true" aria-label="Add Order Button"></Button>
    </div>

    <div class="cards-container">
      <div v-for="(item, index) in providers" :key="index" class="card1">
        <div class="p-4 border-round surface-card shadow-2" :aria-label="'Order Card for ' + item.proveedor">
          <div class="flex flex-column align-items-center">
            <Tag :value="item.estadoEnvio" :severity="getSeverity(item)" class="mb-3" :aria-label="'Status: ' + item.estadoEnvio"></Tag>
            <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2">
              <span class="font-medium text-secondary text-sm mb-2" :aria-label="'Provider: ' + item.proveedor">{{$t('provider')}}: {{ item.proveedor }}</span>
            </div>
            <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2">
              <span class="font-medium text-secondary text-sm mb-2" :aria-label="'Deadline: ' + item.fechaEntrega">{{$t('deadline')}}: {{ item.fechaEntrega }}</span>
            </div>
            <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2">
              <span class="text-900 font-medium text-sm" :aria-label="'Location: ' + item.localizacion">{{$t('location')}}: {{ item.localizacion }}</span>
            </div>
            <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2">
              <span class="text-900 font-medium text-sm" :aria-label="'Phone: ' + item.telefono">{{$t('phone')}}: {{ item.telefono }}</span>
            </div>
            <span class="text-xl font-semibold text-900 mb-3" :aria-label="'Cost: $' + item.costo">{{$t('cost')}}: $ {{ item.costo }}</span>
            <div class="flex gap-2">
              <Button :label="$t('delivered')" @click="markAsDelivered(item)" class="p-button-success" aria-label="Mark as Delivered Button"></Button>
              <Button :label="$t('notification')" @click="notify(item)" class="p-button-danger" aria-label="Notify Button"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dialog for adding new Order -->
    <Dialog header="Agregar Orden" v-model:visible="showAddOrderDialog" :closable="true" :modal="true" aria-label="Add Order Dialog">
      <div>
        <InputText v-model="newOrder.proveedor" :placeholder="$t('provider')" aria-label="Provider Input"></InputText>
        <InputText v-model="newOrder.fechaEntrega" :placeholder="$t('deadline')" aria-label="Deadline Input"></InputText>
        <InputText v-model="newOrder.localizacion" :placeholder="$t('location')" aria-label="Location Input"></InputText>
        <InputText v-model="newOrder.telefono" :placeholder="$t('phone')" aria-label="Phone Input"></InputText>
        <InputNumber v-model="newOrder.costo" :placeholder="$t('cost')" aria-label="Cost Input"></InputNumber>
        <InputText v-model="newOrder.estadoEnvio" placeholder="Estado de Envío" aria-label="Shipping Status Input"></InputText>
        <Button :label="$t('add')" @click="addOrder" class="p-button-success mt-2" aria-label="Add Order Button"></Button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import {ProviderApiService} from "@/shared/services/provider-api.service.js";
import { ref, onMounted } from 'vue';
import DataView from 'primevue/dataview';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';

export default {
  name: 'ProvidersDataView',
  components: {
    pvDataView: DataView,
    Tag,
    Button,
    Dialog,
    InputText,
    InputNumber
  },
  setup() {
    const providers = ref([]);
    const providerApiService = new ProviderApiService();
    const showAddOrderDialog = ref(false);
    const newOrder = ref({
      proveedor: '',
      fechaEntrega: '',
      localizacion: '',
      telefono: '',
      costo: 0,
      estadoEnvio: 'En espera'
    });

    const getSeverity = (item) => {
      switch (item.estadoEnvio) {
        case 'En camino':
          return 'success';
        case 'En espera':
          return 'warning';
        case 'Entregado':
          return 'info';
        default:
          return 'danger';
      }
    };

    const markAsDelivered = async (item) => {
      await providerApiService.update({...item, estadoEnvio: 'Entregado'}, item.id);
      const response = await providerApiService.getAll();
      providers.value = response.data;
    };

    const notify = (item) => {
      alert(`Notificado proveedor con ID: ${item.id}`);
    };

    const addOrder = async () => {
      await providerApiService.create(newOrder.value);
      newOrder.value = {
        proveedor: '',
        fechaEntrega: '',
        localizacion: '',
        telefono: '',
        costo: 0,
        estadoEnvio: 'En espera'
      };
      showAddOrderDialog.value = false;
      const response = await providerApiService.getAll();
      providers.value = response.data;
    };

    onMounted(async () => {
      const response = await providerApiService.getAll();
      providers.value = response.data;
    });

    return {
      providers,
      showAddOrderDialog,
      newOrder,
      getSeverity,
      markAsDelivered,
      notify,
      addOrder
    };
  }
};
</script>

<style>
.pv-dataView .p-card {
  margin: 1rem 0;
}

.surface-card {
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  background-color: var(--surface-card);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.shadow-2 {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.ml-auto {
  margin-left: auto;
}

.cards-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.card1 {
  width: 300px;
  margin-right: 10px;
}
</style>
