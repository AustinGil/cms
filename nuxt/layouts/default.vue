<template>
  <v-app>
    <!-- <v-navigation-drawer permanent fixed :mini-variant.sync="hideMenu" app> -->
    <!-- <v-navigation-drawer fixed v-model="drawer" :mini-variant.sync="hideMenu" app> -->
    <v-navigation-drawer fixed v-model="drawer" app width="200" temporary>
      <v-list dense>
        <!-- <v-list-tile>
          <v-list-tile-action>
            <v-icon @click="toggleMenu">menu</v-icon>
          </v-list-tile-action>
        </v-list-tile> -->

        <!-- <router-link to="/" tag="v-list-tile"> -->
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        <!-- </router-link> -->

        <!-- <router-link to="/content" tag="v-list-tile"> -->
          <v-list-tile-action>
            <v-icon>folder</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Content</v-list-tile-title>
          </v-list-tile-content>
        <!-- </router-link> -->

        <!-- <router-link to="/media" tag="v-list-tile"> -->
          <v-list-tile-action>
            <v-icon>perm_media</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Media</v-list-tile-title>
          </v-list-tile-content>
        <!-- </router-link> -->
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-flex xs12>

          <nuxt/>
          <!-- <router-view pageTitle=""></router-view> -->
        </v-flex>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ (new Date()).getFullYear() }}</span>
    </v-footer>

    <!-- <notifications></notifications> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      hideMenu: true,
      drawer: false
    }
  }
}
</script>


<style>

</style>
