// import { store } from '../store/store'

// export const authGuard = {
//     router: null,

//     setInstanceRouter: function (router) {
//         this.router = router
//     },

//     registerAuthGuard: function () {
//         this.router.beforeEach((to, from, next) => {
//             next();
//         })
//     }
// }


// export const authGuard = (to, from, next) => {
//     if (store.getters['user/isAuthenticated']) {
//       next()
//     } else {
//       next('/home')
//     }
//   }

  