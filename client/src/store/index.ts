import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [
    // createPersistedState()
  ],
  state: {
    notifications: [
      { type: 'success', content: 'Success content' },
      { type: 'error', content: 'Error content' }
    ]
  },
  mutations: {

  },
  actions: {

  }
});
