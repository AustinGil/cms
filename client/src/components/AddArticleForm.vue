<template>
  <form class="add-article" @submit="handleSubmit">
    <h3>Add an article</h3>
    <v-text-field
      v-model="newArticle.title"
      label="Title"
      required>
    </v-text-field>

    <v-select
      v-model="newArticle.author"
      label="Author"
      required>
    </v-select>

    <v-text-field
      v-model="newArticle.body"
      label="Body"
      required
      multi-line>
    </v-text-field>

    <v-btn
      type="submit">
      Submit
    </v-btn>
    <p class="error-text">Error text here</p>
    <!-- <v-btn @click="clear">clear</v-btn> -->
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// Services
import ArticleService from "../services/ArticleService";

// Models
import { Article } from "../models/Article";

@Component({})
export default class AddArticleForm extends Vue {
  newArticle: Article;
  constructor() {
    super();
    this.newArticle = {
      title: "",
      author: 1,
      body: ""
    };
  }

  async handleSubmit() {
    try {
      const newArticle: Article = {
        title: this.newArticle.title,
        author: 1,
        body: this.newArticle.body
      };
      await ArticleService.addArticle(newArticle);
      this.$router.push("/");
    } catch (error) {
      console.log(error);
      // this.error = error.message;
    }
  }
}
</script>

<style>

</style>
