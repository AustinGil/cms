import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from 'vuex-persistedstate';

// Models
// import { Content } from "../models/Content";
// import { Notification } from "../models/Notification";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    // export default new Vuex.Store({
    strict: true,
    plugins: [
      // createPersistedState()
    ],
    state: {
      contents: [],
      media: [],
      notifications: [],
      checker: ""
    },
    mutations: {
      // Content
      addContents(state, contents) {
        state.contents = contents;
      },
      removeContent(state, contentId) {
        const content = state.contents.filter(item => item.id === contentId);

        // TODO
        console.log(content);
      },

      // Media
      addMedia(state, media) {
        state.media = media;
      },
      removeMedia(state, mediaId) {
        // TODO
        console.log(mediaId);
      },

      // Notifications
      addNotification(state, notification) {
        state.notifications = [...state.notifications, notification];
      },
      removeNotification(state) {
        state.notifications.pop();
      }
    },
    actions: {
      // Contents
      addContents({ commit }, contents) {
        commit("addContents", contents);
      },
      removeContent({ commit }, contentId) {
        console.log(contentId);
      },

      // Media
      addMedia({ commit }, media) {
        commit("addMedia", media);
      },
      removeMedia({ commit }, mediaId) {
        // TODO
        console.log(mediaId);
      },

      // Notifications
      addNotification({ commit }, notification) {
        commit("addNotification", notification);

        setTimeout(() => {
          commit("removeNotification", notification);
        }, 5 * 1000);
      }
    }
    // });
  });
};

export default createStore;
