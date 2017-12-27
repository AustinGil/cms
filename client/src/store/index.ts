import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

// Models
import { Notification } from "../models/Notification";

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
    createNotification(state: any, notification: Notification) {
      state.notifications = [...state.notifications, notification]
    },
    removeNotification(state: any) {
      state.notifications.pop();
    }
  },
  actions: {
    createNotification({ commit }, notification: Notification) {
      commit('createNotification', notification);

      setTimeout(() => {
        commit('removeNotification', notification);
      }, 5 * 1000);
    },
  }
});
