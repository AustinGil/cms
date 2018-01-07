<template>
  <div class="edit-media">
    <v-progress-circular v-if="isLoading" indeterminate v-bind:size="70" color="primary"></v-progress-circular>
    <div v-else>
      <img src="https://static.pexels.com/photos/748920/pexels-photo-748920.jpeg" alt="">
      <form @submit.prevent="handleSubmit($event)" enctype="multipart/form-data">

        <v-text-field
          label="Name">
        </v-text-field>

        <v-text-field
          label="Description"
          multi-line>
        </v-text-field>

        <button type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

// Models
// import { File } from "../../models/File";

// Services
import MediaService from "../../services/MediaService";

@Component({})
export default class EditMediaForm extends Vue {
  file = null;
  isLoading: boolean = false;

  @Action addNotification: any;

  created() {
    const editId = this.$route.query && this.$route.query.id;
    if (editId) {
      // TODO
      console.log("Need to load media...");
    }
  }

  deleteFile(id: number) {}

  async handleSubmit(event: Event) {
    if (this.file) {
      try {
        // const newFile = await MediaService.addMedia(this.file, this.metaData);
      } catch (error) {
        console.log(error);
        this.addNotification({
          media: "There was an error adding that media",
          type: "error"
        });
      }
    } else {
      alert("Please select a file");
    }
  }
}
</script>

<style>
.preview img {
  max-height: 300px;
}
</style>
