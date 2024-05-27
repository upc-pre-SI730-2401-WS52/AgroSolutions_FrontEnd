import TheLogin from '@/pages/the-login.vue'
import TheRegister from '@/pages/the-register.vue'
import TheHome from '@/pages/the-home.vue'
import TheMain from '@/pages/the-main.vue'

import TheFooter from '@/components/the-footer.component.vue'

import { createRouter, createWebHistory } from 'vue-router'

import TheEmployeesComponent from '@/components/TheEmployeesComponent.vue';
import Equipment from '@/components/equipment.vue';


const routes = [
    { path: '/', component: TheMain },
    { path: '/login', component: TheLogin },
    { path: '/register', component: TheRegister },
    { path: '/home', component: TheHome },
    { path: '/users', component: TheLogin },
     { path: '/employees', name: 'employees', component: TheEmployeesComponent },
    { path: '/equipment', name: 'equipment', component: Equipment }
    //{ path: '/:pathMatch(.*)*', component: NotFoundComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
