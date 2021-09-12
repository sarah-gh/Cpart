import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'


export const authGuard = (to, from, next) => {
  next()
}

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})


export default router