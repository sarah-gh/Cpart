import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

import { getCookieByName } from '@/resources/utilities.js'

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const token = getCookieByName('token')
  console.log(token)
  console.log('to.fullPath')
  console.log(to.fullPath === ('/'))

  if (to.fullPath.startsWith('/panel') && !token) { return next({ name: 'login' }) }

  if (to.fullPath.startsWith('/panel') && token) { return next() }

  // if (to.fullPath.startsWith('/panel/profile') && token){
  //   location.reload();
  //   return next();
  // }

  // if (to.fullPath.startsWith('/posts') && token)
  //   return next({ name: 'posts-user' });

  // if (to.fullPath.startsWith('/home') && !token)
  //   return next({ name: 'home-public' });

  // if (to.fullPath.startsWith('/home') && token)
  //   return next();

  // if (to.fullPath.startsWith('/home-public') && token)
  //   return next({ name: 'home' });

  if (to.fullPath.startsWith('/authentication') && token) { return next({ name: 'posts' }) }

  // if (from.fullPath.startsWith('/authentication') && token)
  //   return next({ name: 'posts' });

  next()
})

export default router
