<template>
  <div class="single-content">
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <h1>{{ content.title }}</h1>
      <div>{{ content.body }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action } from "vuex-class";

// Services
import ContentService from "../services/ContentService";

// Models
import { Content } from "../models/Content";

@Component({})
export default class SingleContent extends Vue {
  isLoading: boolean = false;

  @State contents: Content[];
  @Action addContents: any;

  async created() {
    if (!this.contents.length) {
      // If we dont have content from the store, we need to get it
      const contentId = parseInt(this.$route.params.id);
      this.isLoading = true;

      try {
        const options = { ids: [contentId] };
        const contents = await ContentService.getContents(options);
        this.addContents(contents);
        this.isLoading = false;
      } catch (error) {
        // TODO: Better error handling.
        console.log(error);
      }
    }
  }

  // Computed
  get content() {
    const contentId = parseInt(this.$route.params.id);
    return this.contents.filter((content: Content) => {
      return content.id === contentId;
    })[0];
  }
}
</script>

<style>

</style>
