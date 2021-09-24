import Vuex from 'vuex';

// modules
import article from '@/store/modules/article';
import user from '@/store/modules/user';


export default new Vuex.Store({
  state: () => ({
    showheader: true,
    login: false,
  }),
  modules: {
    article,
    user
  },
});
