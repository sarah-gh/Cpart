export const routes = [
  
  {
    path: '/',
    name: 'posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/posts/posts.vue')
  }, 
  {
    path: '/bookmark',
    name: 'bookmark',
    component: () => import(/* webpackChunkName: "bookmark" */ '../views/bookmark/bookmark.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/profile-setting/profile-setting.vue')
  }, 
  {
    path: '/new-post',
    name: 'new-post',
    component: () => import(/* webpackChunkName: "new-post" */ '../views/new-post/new-post.vue')
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/profile.vue')
  },
  {
    path: '/single-post/:id',
    name: 'single-post',
    component: () => import(/* webpackChunkName: "single-post" */ '../views/single-post/single-post.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "not-found" */ '../views/not-found/not-found.vue')
  },
 
]