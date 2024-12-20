import { createRouter, createWebHistory } from 'vue-router'
import ContaView from '@/views/contaView.vue'
import HomeView from '../views/HomeView.vue'
import motosView from '@/views/motosView.vue'
import Found from '@/views/found.vue'
import LoginView from '@/views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/conta',
      name: 'conta',
      component: ContaView
    },
    {
      path: '/motos',
      name: 'motos',
      component: motosView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: Found
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
