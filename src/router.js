import TheLogin from '@/pages/the-login.vue'
import TheRegister from '@/pages/the-register.vue'
import TheHome from '@/pages/the-home.vue'
import TheMain from '@/pages/the-main.vue'
import TheFinances from '@/pages/the-finances.vue'
import TheOrders from "@/pages/the-orders.vue";
import ThePendingPayments from "@/pages/the-pending-payments.vue";
import TheFarmersChat from "@/pages/the-farmers-chat.vue";
import TheStores from "@/pages/the-stores.vue";

import { createRouter, createWebHistory } from 'vue-router'
import viewCropComponent from "@/components/view-crop.component.vue";
import addCrops from "@/pages/add-crops.vue";
import TheCalendari from "@/pages/the-calendari.vue";
import Cropsall from "@/pages/cropsall.vue";
import TheEmployeesComponent from "@/components/TheEmployeesComponent.vue";
import Equipment from "@/components/equipment.vue";
import TheCreateOrders from "@/pages/the-create-orders.vue";
import TheChat from "@/pages/the-chat.vue";

const routes = [
    { path: '/', component: TheMain },
    { path: '/login', component: TheLogin },
    { path: '/register', component: TheRegister },
    { path: '/home', component: TheHome },
    { path: '/users', component: TheLogin },
    { path: '/finances', component: TheFinances },
    { path: '/orders', component: TheOrders },
    {path: '/pending_payments', component: ThePendingPayments},
    {path: '/chat', component: TheChat},
    { path: '/view-crow/:id', component: viewCropComponent, name: 'view-crow' },
    {path:'/add-crops', component: addCrops},
    { path: '/calendari/:id', component: TheCalendari, name: 'calendari' },
    {path: '/list-crops', component: Cropsall},
    {path: '/store', component: TheStores},
    { path: '/employees', name: 'employees', component: TheEmployeesComponent },
    { path: '/equipment', name: 'equipment', component: Equipment },
    { path: '/create_order', component: TheCreateOrders }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
