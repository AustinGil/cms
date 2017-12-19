<template>
  <div class="single-article">
    single
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// Services
import ArticleService from "../services/ArticleService";

// Models
import { Article } from "../models/Article";

@Component({})
export default class SingleArticle extends Vue {
  article: Article;
  isLoading: boolean;

  // constructor() {
  //   super();
  // }

  async created() {
    const articleId = parseInt(this.$route.params.id);
    this.isLoading = true;
    try {
      this.article = await ArticleService.getArticles({
        ids: [articleId]
      });
    } catch (error) {
      console.log(error);
    }
    this.isLoading = false;
  }
}
</script>

<style>

</style>
