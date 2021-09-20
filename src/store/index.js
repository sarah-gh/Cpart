import { createStore } from 'vuex'
import axios from 'axios'
// import zones from './modules/zones'
// import users from './modules/users'
// import navLiInfo from './modules/nav-li-info.js'
// import allprojects from './modules/all-projects'
// import reports from './modules/reports'
// import options from './modules/options'
// import dropdown from './modules/dropdown'
const http = 'http://localhost:8000/api'
// const store
export default createStore({
  state: {
    posts: []
  },
  getters: {
    get_posts(state) {
      return state.posts
    },
    async getPosts(state) {
      const response = await axios.get(
          "http://localhost:8000/api/posts"
      ).then((res) => {
          return res.data;
      });
      return state.posts = response;
  },
  },
  mutations: {
    set_posts: (state, posts) => {
      state.posts = posts;
    },
  },
  actions: {
    actions_posts: async function ({ commit }) {
      const posts = await axios.get(`${http}/posts`)
      commit('set_posts', posts)
    },
  },
  modules: {
    // zones,
    // users,
    // navLiInfo,
    // allprojects,
    // reports,
    // options,
    // dropdown
  }
})
