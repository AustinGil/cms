import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

// Models
import { Content } from "../models/Content";
import { Notification } from "../models/Notification";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [
    // createPersistedState()
  ],
  state: {
    contents: [],
    notifications: []
  },
  mutations: {
    addContents(state: any, contents: Content[]) {
      state.contents = contents;
    },

    removeContent(state: any, contentId: number) {
      const content = state.contents
        .filter((item: Content) => item.id === contentId);

      // TODO
      console.log(content);
    },

    addNotification(state: any, notification: Notification) {
      state.notifications = [...state.notifications, notification]
    },

    removeNotification(state: any) {
      state.notifications.pop();
    }
  },
  actions: {
    addContents({ commit }, contents: Content[]) {
      commit('addContents', contents);
    },

    removeContent({ commit }, contentId: number) {
      console.log(contentId);
    },

    addNotification({ commit }, notification: Notification) {
      commit('addNotification', notification);

      setTimeout(() => {
        commit('removeNotification', notification);
      }, 5 * 1000);
    },
  }
});
