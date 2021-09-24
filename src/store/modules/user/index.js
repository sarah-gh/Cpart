import { getBookmark , getProfileUser} from '@/services/user.js';

const user = {
  namespaced: true,
  state: () => ({
    user: {},
    bookmark: [],
    profileUser: {},
  }),
  actions: {
    async requestbookmark({ commit }, data) {
      console.log('requesting article...', data);
      const bookmarkData = await getBookmark(data);
      commit('setBookmark', bookmarkData);
    },
    async requestProfileUser({ commit }) {
      const profile = await getProfileUser();
      commit('setProfileUser', profile);
    }
  },
  mutations: {
    setBookmark(state, bookmarkData) {
      state.bookmark = bookmarkData;
    },
    setProfileUser(state, profile) {
      state.profileUser = profile;
    }
  },
  getters: {},
};

export default user;
