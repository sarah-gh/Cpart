import { getBookmark } from '@/services/user.js';

const user = {
  namespaced: true,
  state: () => ({
    user: {},
    bookmark: [],
  }),
  actions: {
    async requestbookmark({ commit }, data) {
      console.log('requesting article...', data);
      const bookmarkData = await getBookmark(data);
      commit('setSingleArticles', bookmarkData);
    },
  },
  mutations: {
    setBookmark(state, bookmarkData) {
      state.bookmark = bookmarkData;
    },
  },
  getters: {},
};

export default user;
