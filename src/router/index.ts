import { createRouter, createWebHistory } from 'vue-router'
import CrowdedClocksView from '../views/CrowdedClocks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CrowdedClocksView
    }
  ]
})

export default router
