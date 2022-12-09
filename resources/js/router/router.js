import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'

const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register }
]

const router = createRouter({
    routes,
    history: createWebHistory('/')
})

export default router