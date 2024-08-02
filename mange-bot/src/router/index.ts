import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/views/CartView.vue'
import BuildView from '@/views/BuildView.vue'
import NotFouldView from '@/views/NotFouldView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/Build',
      name: 'Build',
      component: BuildView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFouldView
    },
  ]
})

export default router
