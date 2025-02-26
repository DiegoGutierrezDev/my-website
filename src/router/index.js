import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/views/layouts/AppLayout.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
        },
        {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
        }
      ]
    },
   
  ]
})

export default router
