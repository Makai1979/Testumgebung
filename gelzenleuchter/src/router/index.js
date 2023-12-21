import { createRouter, createWebHistory } from 'vue-router'
import startseite from '../views/Startseite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: startseite
    },
    {
      path: '/gelzenritter',
      name: 'gelzenritter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/gelzenritter.vue')
    },
    {
      path: '/inoxan',
      name: 'inoxan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/inoxan.vue')
    },
    {
      path: '/inosan',
      name: 'inosan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/inosan.vue')
    },
    {
      path: '/service',
      name: 'service',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/service.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/kontakt.vue')
    },
  ]
})

export default router
