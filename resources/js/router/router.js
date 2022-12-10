import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import Step3 from '../components/auth/Step3.vue'
import Step4 from '../components/auth/Step4.vue'
import finish from '../components/auth/finish.vue'

const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/register/step3', name: 'Step3', component: Step3 },
    { path: '/register/step4', name: 'Step4', component: Step4 },
    { path: '/register/finish', name: 'finish', component: finish }
]

const router = createRouter({
    routes,
    history: createWebHistory('/')
})

export default router