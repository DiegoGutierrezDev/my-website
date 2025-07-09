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
          component: () => import('../views/MainView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: '/certificates',
          name: 'certificates',
          component: () => import('../views/CertificatesView.vue'),
        },
      ],
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

export default router
