<template>
  <div class="media-library">
    <div v-if="media.length" class="media-list">
      <div v-for="file in media" :key="file.id" class="media">
        <img src="" alt="">
        {{ file.url }}
      </div>
    </div>
    <p v-else>No media yet. Why don't you <router-link to="/media/add">add some?</router-link></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action } from "vuex-class";

// Services
import MediaService from "../../services/MediaService";

@Component({})
export default class MediaList extends Vue {
  isLoading: boolean = false;

  @State media: any[];

  @Action addMedia: any;

  async created() {
    this.isLoading = true;
    try {
      const media = await MediaService.getMedia();
      console.log(media);
      this.addMedia(media);
    } catch (error) {
      // TODO
      console.log(error);
    }
    this.isLoading = false;
  }
}
</script>

<style>

</style>
