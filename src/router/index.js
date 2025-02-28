import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/views/layouts/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
        path: '/',
        name: '',
        component: () => import('../views/MainView.vue')
        },
        {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
        },
      ]
    },
    {
      path: '/certificates',
      name: 'certificates',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CertificatesView.vue')
    }
  ]
})

export default router
