<template>
  <v-app id="app">
    <!-- <v-navigation-drawer permanent fixed :mini-variant.sync="hideMenu" app> -->
    <!-- <v-navigation-drawer fixed v-model="drawer" :mini-variant.sync="hideMenu" app> -->
    <v-navigation-drawer fixed v-model="drawer" app width="200" temporary>
      <v-list dense>
        <!-- <v-list-tile>
          <v-list-tile-action>
            <v-icon @click="toggleMenu">menu</v-icon>
          </v-list-tile-action>
        </v-list-tile> -->

        <router-link to="/" tag="v-list-tile">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </router-link>

        <router-link to="/contents/add" tag="v-list-tile">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Add Content</v-list-tile-title>
          </v-list-tile-content>
        </router-link>

        <router-link to="/media" tag="v-list-tile">
          <v-list-tile-action>
            <v-icon>perm_media</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Media</v-list-tile-title>
          </v-list-tile-content>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <router-view pageTitle=""></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ (new Date()).getFullYear() }}</span>
    </v-footer>

    <notifications></notifications>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Notifications from "./components/Notifications.vue";

@Component({
  components: {
    Notifications
  }
})
export default class App extends Vue {
  hideMenu: boolean = true;
  drawer: boolean = false;

  toggleMenu() {
    // TODO: Why doesn't this work...?
    this.hideMenu = !this.hideMenu;
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

form {
  width: 100%;
}

.list-inline {
  list-style-type: none;

  li {
    display: inline-block;
  }
}
</style>
