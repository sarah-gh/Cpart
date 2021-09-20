export const routes = [
  
  {
    path: '/',
    name: 'posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/posts/posts.vue')
  }, 
  {
    path: '/panel/bookmark/',
    name: 'bookmark',
    component: () => import(/* webpackChunkName: "bookmark" */ '../views/bookmark/bookmark.vue')
  },
  {
    path: '/panel/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/profile-setting/profile-setting.vue')
  }, 
  {
    path: '/new-post',
    name: 'new-post',
    component: () => import(/* webpackChunkName: "new-post" */ '../views/new-post/new-post.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "new-post" */ '../views/search/search.vue')
  },
  {
    path: '/panel/profile/:id',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/profile.vue')
  },
  {
    path: '/post/:id',
    name: 'single-post',
    component: () => import(/* webpackChunkName: "single-post" */ '../views/single-post/single-post.vue')
  },
  {
    path: '/authentication/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "bookmark" */ '../views/register/login/login.vue')
  },
  {
    path: '/authentication/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "bookmark" */ '../views/register/signup/signup.vue')
  },
  {
    path: '/authentication/signup-status',
    name: 'signup-status',
    component: () => import(/* webpackChunkName: "bookmark" */ '../views/register/signup-status/signup-status.vue')
  },
  {
    path: '/authentication/verification',
    name: 'verification',
    component: () => import(/* webpackChunkName: "bookmark" */ '../views/register/verification/verification.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "not-found" */ '../views/not-found/not-found.vue')
  },
 
]