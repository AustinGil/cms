<template>
  <div class="contents-list">
    <p v-if="error">{{ error }}</p>
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <ul v-if="contents">
        <li v-for="content in contents" :key="content.id">
          <router-link :to="`contents/${content.id}`">{{ content.title }}</router-link>
          <button @click="deleteContent(content.id)">X</button>
        </li>
      </ul>
      <p v-else>No contents</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

// Services
import ContentService from "../services/ContentService";

// Models
import { Content } from "../models/Content";

@Component({})
export default class ContentsList extends Vue {
  contents: Content[] = [];
  error: string = "";
  isLoading: boolean = false;

  @Action createNotification: any;

  async created() {
    this.isLoading = true;
    this.error = "";
    try {
      this.contents = await ContentService.getContents({});
    } catch (error) {
      console.log(error);
      this.error = error.message;
    }
    this.isLoading = false;
  }

  async deleteContent(contentId: number) {
    if (confirm(`Are you sure you want to do that?`) == true) {
      const res = await ContentService.deleteContent(contentId);
      console.log("res", res);
    } else {
      // TODO
    }
  }
}
</script>

<style>

</style>
