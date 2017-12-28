<template>
  <div class="single-content">
    single
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// Services
import ContentService from "../services/ContentService";

// Models
import { Content } from "../models/Content";

@Component({})
export default class SingleContent extends Vue {
  content: Content;
  isLoading: boolean;

  async created() {
    const contentId = parseInt(this.$route.params.id);
    this.isLoading = true;
    try {
      this.content = await ContentService.getContents({
        ids: [contentId]
      });
      console.log(this.content);
    } catch (error) {
      console.log(error);
    }
    this.isLoading = false;
  }
}
</script>

<style>

</style>
