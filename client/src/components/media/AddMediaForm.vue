<template>
  <form class="add-media" @submit.prevent="handleSubmit" enctype="multipart/form-data">

    <p>https://static.pexels.com/photos/748920/pexels-photo-748920.jpeg</p>

    <v-text-field
      v-model="newMedia.name"
      label="Name">
    </v-text-field>

    <label>File<br>
      <!-- TODO: -->
      <input type="file" accept="image/jpeg, image/png, image/gif, image/svg+xml">
    </label>

    <v-text-field
      v-model="newMedia.description"
      label="Description"
      multi-line>
    </v-text-field>

    <button type="submit">Upload</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

// Services
import MediaService from "../../services/MediaService";

@Component({})
export default class AddMediaForm extends Vue {
  newMedia = {
    name: "test",
    file: null,
    description: ""
  };

  @Action addNotification: any;

  async handleSubmit() {
    try {
      await MediaService.addMedia(this.newMedia);
    } catch (error) {
      console.log(error);
      this.addNotification({
        media: "There was an error adding that media",
        type: "error"
      });
    }
  }
}
</script>

<style>

</style>
