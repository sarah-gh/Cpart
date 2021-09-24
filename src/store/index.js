import Vuex from 'vuex';

// modules
import article from '@/store/modules/article';

export default new Vuex.Store({
  state: () => ({
    showheader: true,
    login: false,
  }),
  modules: {
    article,
  },
});
