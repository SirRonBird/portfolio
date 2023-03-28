import { createRouter, createWebHistory } from 'vue-router'
import Universe from '../components/Universe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Universe
    },
  ]
})

export default router
