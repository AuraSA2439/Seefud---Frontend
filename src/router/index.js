import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import DashboardLayout from '@/views/Layouts/DashboardLayouts.vue'
import AuthLayout from '@/views/Layouts/AuthLayouts.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    meta: { requiresAuth: true, layoutKey: 'dashboard' },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    meta: { layoutKey: 'auth' }, // Tambahkan layoutKey untuk membedakan layout
    redirect: { name: 'Login' },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/LoginView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
