<template>
  <div class="media-page">
    <h1>Media</h1>
    <ul class="list-inline">
      <li>
        <router-link to="/media">Media List</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'mediaForm' }">Add Media</router-link>
      </li>
    </ul>
    <v-card>
      <router-view @upload="handleUpload($event)"></router-view>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

@Component({})
export default class Media extends Vue {
  @Action addNotification: any;

  handleUpload(upload: any) {
    this.addNotification({
      content: `"${upload.name}" successfully added!`,
      type: "success"
    });
    this.$router.push({ path: "/media" });
  }
}
</script>

<style>
.card {
  padding: 1rem;
}
</style>
