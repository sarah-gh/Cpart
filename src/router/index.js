import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

import { getCookieByName } from '@/resources/utilities.js'

const router = createRouter({
  history: createWebHistory(),
  // base: process. env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'هلیوم'
  const token = getCookieByName('token')

  if (to.fullPath.startsWith('/panel') && !token) { return next({ name: 'login' }) }

  if (to.fullPath.startsWith('/panel') && token) { return next() }

  if (to.fullPath.startsWith('/authentication') && token) { return next({ name: 'posts' }) }

  next()
})

export default router
