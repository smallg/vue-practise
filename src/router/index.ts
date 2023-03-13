import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: () => {
        const loginStatus = localStorage.getItem('logined');
        if (loginStatus === 'yes') {
          return true;
        }
        return { name: 'login'};
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
