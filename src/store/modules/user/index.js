import { getBookmark , getProfileUser, postBookmark , getSetting, userOperation} from '@/services/user.js';

const user = {
  namespaced: true,
  state: () => ({
    user: {},
    bookmark: [],
    profileUser: {},
    setting: {},
    csrfToken:""
  }),
  actions: {
    async requestbookmark({ commit }, data) {
      const bookmarkData = await getBookmark(data);
      commit('setBookmark', bookmarkData);
    },
    async requestfollow({ commit }, data) {
      const followData = await userOperation(data);
    },
    async requestLikeArticle({ commit }, data) {
      console.log(data);
      const likeArticleData = await userOperation(data);
    },
    async requestLikeComment({ commit }, data) {
      console.log(data);
      const likeCommentData = await userOperation(data);
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
      const bookmarkData = await postBookmark(data);
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
    },
    
  },
  getters: {},
};

export default user;
