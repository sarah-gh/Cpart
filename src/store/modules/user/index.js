import { getBookmark , getProfileUser, postBookmark , getSetting} from '@/services/user.js';

const user = {
  namespaced: true,
  state: () => ({
    user: {},
    bookmark: [],
    profileUser: {},
    setting: {}
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
    },
    async requestsettingUser({ commit }) {
      const setting = await getSetting();
      commit('setSettingUser', setting);
    },
    async requestPostBookmark({ commit }, data) {
      console.log('requesting article...', data);
      console.log(data)
      const bookmarkData = await postBookmark(data);
      console.log(bookmarkData, commit);
    },
  },
  mutations: {
    setBookmark(state, bookmarkData) {
      state.bookmark = bookmarkData;
    },
    setProfileUser(state, profile) {
      state.profileUser = profile;
    },
    setSettingUser(state, setting) {
      state.setting = setting;
    }
  },
  getters: {},
};

export default user;
