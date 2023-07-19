import { getBookmark, getProfileUser, postBookmark, getSetting, userOperation, search } from '@/services/user.js'

const user = {
  namespaced: true,
  state: () => ({
    user: {},
    bookmark: [],
    profileUser: {},
    setting: {},
    // csrfToken: '',
    searchItems: {}
  }),
  actions: {
    async requestbookmark ({ commit }, data) {
      const bookmarkData = await getBookmark(data)
      commit('setBookmark', bookmarkData)
    },
    async requestfollow ({ commit }, data) {
      await userOperation(data)
    },
    async requestLikeArticle ({ commit }, data) {
      console.log(data)
      await userOperation(data)
    },
    async requestLikeComment ({ commit }, data) {
      console.log(data)
      await userOperation(data)
    },

    async requestProfileUser ({ commit }) {
      const profile = await getProfileUser()
      commit('setProfileUser', profile)
    },
    async requestSearch ({ commit }, data) {
      const searchitem = await search(data)
      commit('setSearch', searchitem)
    },
    async requestsettingUser ({ commit }) {
      const setting = await getSetting()
      console.log('setting', setting[0])
      commit('setSettingUser', setting[0])
    },
    async requestPostBookmark ({ commit }, data) {
      await postBookmark(data)
    }
  },
  mutations: {
    setBookmark (state, bookmarkData) {
      state.bookmark = bookmarkData
    },
    setProfileUser (state, profile) {
      state.profileUser = profile
    },
    setSettingUser (state, setting) {
      state.setting = setting
      // state.user = setting
    },
    setSearch (state, search) {
      state.searchItems = search
    }
  },
  getters: {}
}

export default user
