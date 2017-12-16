<template>
  <div class="articles-list">
    <button @click="handleClick($event)">Click</button>
    <p v-if="error">{{ error }}</p>
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <ul v-if="articles">
        <li v-for="(article, index) in articles" :key="article.id">
          {{ article.title }}
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

@Component({})
export default class ArticlesList extends Vue {
  msg: string;
  articles: any[];
  error: string = "";
  isLoading: boolean = false;

  constructor() {
    super();
    this.articles = [];
  }

  async handleClick() {
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
}
</script>

<style>

</style>
