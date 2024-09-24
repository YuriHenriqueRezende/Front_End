import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContaView from '@/views/contaView.vue'
import RoletaView from '@/views/roletaView.vue'
import Found from '@/views/found.vue'

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
      path: '/roleta',
      name: 'roleta',
      component: RoletaView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: Found
    },
  ]
})

export default router
