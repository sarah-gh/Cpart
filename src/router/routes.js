export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home/Home.vue'),
    redirect: { name : 'posts'},
    children: [
      {
        path: '/posts',
        name: 'posts',
        component: () => import(/* webpackChunkName: "posts" */ '../views/posts/posts.vue')
      }, 
      {
        path: '/bookmark',
        name: 'bookmark',
        component: () => import(/* webpackChunkName: "bookmark" */ '../views/bookmark/bookmark.vue')
      }, 
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '../views/profile/profile.vue')
      },
      {
        path: '/single-post',
        name: 'single-post',
        component: () => import(/* webpackChunkName: "single-post" */ '../views/single-post/single-post.vue')
      },
      {
        path: "/:catchAll(.*)",
        component: () => import(/* webpackChunkName: "not-found" */ '../views/not-found/not-found.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'public-home',
    component: () => import(/* webpackChunkName: "public Home" */ '../views/public-home/public-home.vue'),
    redirect: { name: 'public-posts' },
    children: [
      {
        path: '/public/posts',
        name: 'public-posts',
        component: () => import(/* webpackChunkName: "public posts" */ '../views/posts/posts.vue')
      }, 
      {
        path: "/:catchAll(.*)",
        component: () => import(/* webpackChunkName: "not-found" */ '../views/not-found/not-found.vue')
      },
    ]
  },
  {
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "not-found" */ '../views/not-found/not-found.vue')
  },
  //not found?
  //* path
]