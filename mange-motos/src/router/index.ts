import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContaView from '@/views/contaView.vue'
import motosView from '@/views/motosView.vue'
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
      component: motosView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: Found
    },
  ]
})

export default router
