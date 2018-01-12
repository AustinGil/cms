<template>
  <div class="media-library">
    <div v-if="media.length" class="media-list">
      <router-link v-for="file in media" :key="file.id" :to="{ name: 'editMedia', query: { id: file.id }}" class="media">
        <!-- TODO: Fix img url. Currently using Docker's port -->
        <img :src="`http://localhost:3001/${file.url}`" :alt="file.description">
      </router-link>
    </div>
    <p v-else>No media yet. Why don't you <router-link :to="{ name: 'mediaForm' }">add some?</router-link></p>
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
  dialog: boolean = false;
  isLoading: boolean = false;

  @State media: any[];

  @Action addMedia: any;

  async mounted() {
    this.isLoading = true;
    try {
      const media = await MediaService.getMedia();
      this.addMedia(media);
    } catch (error) {
      // TODO
      console.log(error);
    }
    this.isLoading = false;
  }

  toggleMediaForm() {
    this.dialog = !this.dialog;
  }
}
</script>

<style lang="scss">
.media-list {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  // grid-auto-rows: minmax(auto, 150px);
}

.media {
  position: relative;
  border: 1px solid rgba(#000, 0.3);
  border-radius: 3px;
  overflow: hidden;

  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 100%;
  }

  > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
