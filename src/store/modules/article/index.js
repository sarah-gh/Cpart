import { getArticles, getSingleArticle, getSingleArticleUser, postArticle, getArticlesUser, getArticlesUserfollow } from '@/services/article.js'
import { userOperation } from '@/services/user.js'

const article = {
  namespaced: true,
  state: () => ({
    article: {},
    articleUser: {},
    singleArticle: [],
    comment: [],
    post: {},
    otherPosts: []
  }),
  actions: {
    async requestArticle ({ commit }) {
      const articleData = await getArticles()
      commit('setArticles', articleData)
    },
    async requestArticleUser ({ commit }, query) {
      const articleData = await getArticlesUser(query)
      commit('setArticles', articleData)
    },
    async requestArticleUserfollow ({ commit }) {
      const articleData = await getArticlesUserfollow()
      commit('setArticles', articleData)
    },
    async requestSingleArticle ({ commit }, data) {
      const singleArticleData = await getSingleArticle(data)
      commit('setSingleArticles', singleArticleData)
    },
    async requestPostComment ({ commit }, data) {
      await userOperation(data)
    },
    async requestSingleArticleUser ({ commit }, data) {
      const singleArticleData = await getSingleArticleUser(data)
      commit('setSingleArticles', singleArticleData)
    },
    async requestPostArticle ({ commit }, data) {
      await postArticle(data)
    }
  },
  mutations: {
    setArticles (state, articleData) {
      state.article = []
      setTimeout(() => {
        state.article = articleData
      }, 100)
    },
    setArticlesuser (state, articleData) {
      state.articleUser = articleData
    },
    setSingleArticles (state, singleArticleData) {
      state.post = Object.assign(singleArticleData['0'])
      state.comment = singleArticleData[2]
      state.otherPosts = singleArticleData[1]
      state.singleArticle = singleArticleData
    }

  },
  getters: {}
}

export default article
