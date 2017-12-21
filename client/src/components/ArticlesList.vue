<template>
  <div class="articles-list">
    <p v-if="error">{{ error }}</p>
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <ul v-if="articles">
        <li v-for="article in articles" :key="article.id">
          <router-link :to="`articles/${article.id}`">{{ article.title }}</router-link>
          <button @click="deleteArticle(article.id)">X</button>
        </li>
      </ul>
      <p v-else>No articles</p>
    </div>
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
export default class ArticlesList extends Vue {
  msg: string;
  articles: Article[];
  error: string = "";
  isLoading: boolean = false;

  constructor() {
    super();
    this.articles = [];
  }

  async created() {
    this.isLoading = true;
    this.error = "";
    try {
      this.articles = await ArticleService.getArticles({});
    } catch (error) {
      console.log(error);
      this.error = error.message;
    }
    this.isLoading = false;
  }

  async deleteArticle(articleId: number) {
    if (confirm(`Are you sure you want to do that?`) == true) {
      const res = await ArticleService.deleteArticle(articleId);
      console.log("res", res);
    } else {
      // TODO
    }
  }
}
</script>

<style>

</style>
