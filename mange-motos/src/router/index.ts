import { createRouter, createWebHistory } from 'vue-router'
import ContaView from '@/views/contaView.vue'
import HomeView from '../views/HomeView.vue'
import motosView from '@/views/motosView.vue'
import Found from '@/views/found.vue'
import SummaryTable from '@/components/SummaryTable.vue'

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
      component: SummaryTable
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
  ]
})

export default router
