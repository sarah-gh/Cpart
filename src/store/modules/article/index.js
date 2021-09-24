import { getArticles, getSingleArticle, postArticle } from '@/services/article.js';

const article = {
  namespaced: true,
  state: () => ({
    article: {},
    singleArticle: [],
  }),
  actions: {
    async requestArticle({ commit }) {
      console.log('requesting article...');
      const articleData = await getArticles();
      commit('setArticles', articleData);
    },
    async requestSingleArticle({ commit }, data) {
      console.log('requesting article...', data);
      const singleArticleData = await getSingleArticle(data);
      commit('setSingleArticles', singleArticleData);
    },
    async requestPostArticle({ commit }, data) {
      console.log('requesting article...', data);
      console.log(data)
      const postData = await postArticle(data);
      console.log(postData, commit);
      // commit('setSingleArticles', postData);
    },
  },
  mutations: {
    setArticles(state, articleData) {
      state.article = articleData;
    },
    setSingleArticles(state, singleArticleData) {
      state.singleArticle = singleArticleData;
    },
  },
  getters: {},
};

export default article;
