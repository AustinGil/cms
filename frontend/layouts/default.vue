<template>
  <v-app dark>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click="isLeftDrawerVisible = !isLeftDrawerVisible"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="isRightDrawerVisible = !isRightDrawerVisible">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="isLeftDrawerVisible" fixed app :mini-variant="isSidenavNarrow" :clipped="false">
      <v-list dense>
        <v-list-tile router v-for="(item, i) in sidenavItems" :key="i" :to="item.to" exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click.stop="isSidenavNarrow = !isSidenavNarrow">
          <v-list-tile-action>
            <v-icon v-html="isSidenavNarrow ? 'chevron_right' : 'chevron_left'"></v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer temporary :right="true" v-model="isRightDrawerVisible" fixed>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>Right sidebar content</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer :fixed="false" app>
      <span>&copy; {{ (new Date()).getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "Vuetify.js",
      isLeftDrawerVisible: true,
      sidenavItems: [
        { to: "/", title: "Home", icon: "home" },
        { to: "/content", title: "Content", icon: "folder" },
        { to: "/media", title: "Media", icon: "perm_media" }
      ],
      isSidenavNarrow: true,
      isRightDrawerVisible: false
    };
  }
};
</script>
