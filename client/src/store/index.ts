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
    notifications: []
  },
  mutations: {
    createNotification(state: any, notification: any) {
      state.notifications = [...state.notifications, notification]
    },
    removeNotification(state: any) {
      state.notifications.pop();
    }
  },
  actions: {
    createNotification({ commit }, notification: any) {
      commit('createNotification', notification);

      setTimeout(() => {
        commit('removeNotification', notification);
      }, 5 * 1000);
    },
  }
});
