import { getArticles } from '@/services/article.js';

const article = {
  namespaced: true,
  state: () => ({
    article: {},
  }),
  actions: {
    async requestArticle({ commit }, data) {
      console.log('requesting article...', data);
      const articleData = await getArticles();
      commit('setArticles', articleData);
    },
  },
  mutations: {
    setArticles(state, articleData) {
      state.article = articleData;
    },
  },
  getters: {},
};

export default article;
