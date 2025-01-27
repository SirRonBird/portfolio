import { createRouter, createWebHistory } from 'vue-router'
import Universe from '../components/Universe_old.vue'
import Universe02 from "@/components/Universe.vue";
import Game from "@/components/Game.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Universe02
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }

  ]
})

export default router
