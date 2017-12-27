<template>
  <form class="add-content" @submit="handleSubmit">
    <h3>Add an content</h3>
    <v-text-field
      v-model="newContent.title"
      label="Title"
      required>
    </v-text-field>

    <v-select
      v-model="newContent.author"
      label="Author"
      required>
    </v-select>

    <v-text-field
      v-model="newContent.body"
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
import ContentService from "../services/ContentService";

// Models
import { Content } from "../models/Content";

@Component({})
export default class AddContentForm extends Vue {
  newContent: Content;
  constructor() {
    super();
    this.newContent = {
      title: "",
      author: 1,
      body: ""
    };
  }

  async handleSubmit() {
    try {
      const newContent: Content = {
        title: this.newContent.title,
        author: 1,
        body: this.newContent.body
      };
      await ContentService.addContent(newContent);
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
