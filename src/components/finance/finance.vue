<template>
  <div style="margin-top: 50px; margin-bottom: 180px;">
    <div class="flex align-items-center mb-3">
      <Button :label="$t('addFinance')" class="p-button-success" @click="showAddFinanceDialog = true" aria-label="Show Add Finance Dialog"></Button>
    </div>

    <div v-for="finanza in finanzas" :key="finanza.id" class="fieldset">
      <pv-fieldSet style="background-color: rgba(119, 221, 119, 0.1);">
        <template #legend>
          <div class="flex align-items-center pl-2">
            <span class="font-bold" style="background-color: rgba(119, 221, 119, 1); border-radius: 8px;">{{ $t('monthFinance') }} {{ finanza.mes }}</span>
          </div>
        </template>
        <div class="cards-container">
          <pv-card class="finance-card" aria-label="Income Card">
            <template #content>
              <p class="card-content">{{ $t('income') }}: {{ finanza.ingresos }}</p>
            </template>
          </pv-card>
          <pv-card class="finance-card" aria-label="Bills Card">
            <template #content>
              <p class="card-content">{{ $t('bills') }}: {{ finanza.gastos }}</p>
            </template>
          </pv-card>
          <pv-card class="finance-card" aria-label="Profits Card">
            <template #content>
              <p class="card-content">{{ $t('profits') }}: {{ finanza.ganancias }}</p>
            </template>
          </pv-card>
        </div>
      </pv-fieldSet>
    </div>

    <!-- Dialog for adding new Finance -->
    <Dialog header="Agregar Finanzas" v-model:visible="showAddFinanceDialog" :closable="true" :modal="true" aria-label="Add Finance Dialog">
      <div>
        <InputText v-model="newFinance.mes" :placeholder="$t('month')" aria-label="Month Input"></InputText>
        <InputNumber v-model="newFinance.ingresos" placeholder="$t('income')" :min="0" aria-label="Income Input"></InputNumber>
        <InputNumber v-model="newFinance.gastos" placeholder="$t('bills')" :min="0" aria-label="Bills Input"></InputNumber>
        <Button label="$t('add')" @click="addFinance" class="p-button-success mt-2" aria-label="Add Finance Button"></Button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import { FinanzasApiService } from "@/shared/services/finanzas-api.service.js";
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';

export default {
  name: 'TheFinance',
  components: {
    Button,
    Dialog,
    InputText,
    InputNumber
  },
  data() {
    return {
      finanzas: [],
      showAddFinanceDialog: false,
      newFinance: {
        mes: '',
        ingresos: 0,
        gastos: 0
      },
      finanzasApiService: new FinanzasApiService()
    };
  },
  async created() {
    const response = await this.finanzasApiService.getAll();
    this.finanzas = response.data;
  },
  methods: {
    async addFinance() {
      this.newFinance.ganancias = this.newFinance.ingresos - this.newFinance.gastos;
      await this.finanzasApiService.create(this.newFinance);
      this.newFinance = {
        mes: '',
        ingresos: 0,
        gastos: 0
      };
      this.showAddFinanceDialog = false;
      const response = await this.finanzasApiService.getAll();
      this.finanzas = response.data;
    }
  }
}
</script>

<style scoped>
.fieldset {
  margin-top: 50px;
  margin-bottom: 50px;
}

.cards-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.finance-card {
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: rgba(119, 221, 119, 0.5);
  text-align: center;
}

.card-content {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
</style>
