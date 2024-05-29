<template>
  <div>
    <pv-dataView :value="providers">
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 lg:col-4 p-2">
            <div class="p-4 border-round surface-card shadow-2">
              <div class="flex flex-column align-items-center">
                <Tag :value="item.estadoEnvio" :severity="getSeverity(item)" class="mb-3"></Tag>
                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2">
                  <span class="font-medium text-secondary text-sm mb-2">Proveedor: {{ item.proveedor }}</span>
                </div>
                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2">
                  <span class="font-medium text-secondary text-sm mb-2">Fecha de entrega: {{ item.fechaEntrega }}</span>
                </div>
                  <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2">
                    <span class="text-900 font-medium text-sm">Ubicacion: {{ item.localizacion }}</span>
                  </div>
                  <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2">
                    <span class="text-900 font-medium text-sm">Telefono: {{ item.telefono }}</span>
                  </div>
                <span class="text-xl font-semibold text-900 mb-3">Costo: $ {{ item.costo }}</span>
                <div class="flex gap-2">
                  <Button label="Entregado" @click="markAsDelivered(item)" class="p-button-success"></Button>
                  <Button label="Notificar" @click="notify(item)" class="p-button-danger"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-dataView>
  </div>
</template>

<script>
import {ProviderApiService} from "@/services/provider-api.service.js";
import { ref, onMounted } from 'vue';
import DataView from 'primevue/dataview';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

export default {
  name: 'ProvidersDataView',
  components: {
    pvDataView: DataView,
    Tag,
    Button
  },
  setup() {
    const providers = ref([]);
    const providerApiService = new ProviderApiService();

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
      await providerApiService.update({ ...item, entregado: 1 }, item.id);
      const response = await providerApiService.getAll();
      providers.value = response.data;
    };

    const notify = (item) => {
      alert(`Notificado proveedor con ID: ${item.id}`);
    };

    onMounted(async () => {
      const response = await providerApiService.getAll();
      providers.value = response.data;
    });

    return { providers, getSeverity, markAsDelivered, notify };
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

</style>
