import TheLogin from '@/pages/the-login.vue'
import TheRegister from '@/pages/the-register.page.vue'
import thePendingTask from "@/pages/the-pending-task.vue";
import TheMain from '@/pages/the-main.vue'
import TheFinances from '@/pages/the-finances.vue'
import TheOrders from "@/pages/the-orders.vue";
import ThePendingPayments from "@/pages/the-pending-payments.vue";
import theStoreComponent from "@/components/store/the-store.component.vue";
import theGenerateOrderComponent from "@/components/order/the-generate-order.component.vue";
import theHomePage from "@/pages/the-home.page.vue";

import { createRouter, createWebHistory } from 'vue-router'
import viewCropComponent from "@/components/crop/view-crop.component.vue";
import addCrops from "@/pages/the-add-crops.vue";
import TheCalendari from "@/pages/the-calendari.vue";
import Cropsall from "@/pages/the-cropsall.vue";
import TheEmployeesComponent from "@/pages/the-employees.vue";
import TheCreateOrders from "@/pages/the-create-orders.vue";
import TheTeam from "@/pages/the-team.page.vue";
import TheBlog from "@/pages/the-blog.vue"
import thePageNotFoundPage from "@/pages/the-page-not-found.page.vue";
import theAddEmployee from "@/components/employee/the-add-employee.vue";
import TheAddBlog from "@/components/blog/the-add-blog.component.vue";

const routes = [
    { path: '/', component: TheMain },
    { path: '/login', component: TheLogin },
    { path: '/register', component: TheRegister },
    { path: '/home', component: theHomePage },
    { path: '/pending-task', component: thePendingTask },
    { path: '/users', component: TheLogin },
    { path: '/finances', component: TheFinances },
    { path: '/orders', component: TheOrders },
    { path: '/pending_payments', component: ThePendingPayments},
    { path: '/view-crow/:id', component: viewCropComponent, name: 'view-crow' },
    { path: '/add-crops', component: addCrops},
    { path: '/calendari/:id', component: TheCalendari, name: 'calendari' },
    { path: '/list-crops', component: Cropsall},
    { path: '/store', name: 'TheStore', component: theStoreComponent },
    { path: '/generate-order/:productId', name: 'TheGenerateOrder', component: theGenerateOrderComponent },
    { path: '/employees', name: 'employees', component: TheEmployeesComponent },
    { path: '/employees-team', name: 'equipment', component: TheTeam },
    { path: '/create_order', component: TheCreateOrders },
    { path: '/blog', component: TheBlog },
    { path: '/new-post', component: TheAddBlog },
    { path: '/:pathMatch(.*)*', component: thePageNotFoundPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
