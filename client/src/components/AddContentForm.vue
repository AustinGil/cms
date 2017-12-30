<template>
  <form class="add-content" @submit.prevent="handleSubmit">
    <h3>Add content</h3>
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
      v-model="newContent.image"
      label="Image URL">
    </v-text-field>

    <v-text-field
      v-model="newContent.body"
      label="Body"
      required
      multi-line>
    </v-text-field>

    <v-btn type="submit">Submit</v-btn>

    <!-- <v-btn @click="clear">clear</v-btn> -->
  </form>
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
export default class AddContentForm extends Vue {
  newContent: Content = {
    title: "",
    author: 1,
    image: "",
    body: ""
  };

  @Action addNotification: any;

  openMediaLibrary() {
    // TODO
    console.log("Open library");
  }

  async handleSubmit() {
    try {
      await ContentService.addContent(this.newContent);
      this.addNotification({
        content: `"${this.newContent.title}" successfully created!`,
        type: "success"
      });
      this.$router.push("/");
    } catch (error) {
      console.log(error);
      this.addNotification({
        content: "There was an error adding that content",
        type: "error"
      });
    }
  }
}
</script>

<style>

</style>
