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

<script>
import Vue from "vue";

// Services
import ContentService from "@/services/ContentService";

// Models
// import { Content } from "../models/Content";

export default {
  data() {
    return {
      newContent: {
        title: "",
        author: 1,
        image: "",
        body: ""
      }
    };
  },

  // @Action addNotification: any;

  methods: {
    openMediaLibrary() {
      // TODO
      console.log("Open library");
    },

    async handleSubmit() {
      try {
        await ContentService.addContent(this.newContent);
        // this.addNotification({
        //   content: `"${this.newContent.title}" successfully created!`,
        //   type: "success"
        // });
        this.$router.push("/content");
      } catch (error) {
        console.log(error);
        // this.addNotification({
        //   content: "There was an error adding that content",
        //   type: "error"
        // });
      }
    }
  }
};
</script>

<style>

</style>
