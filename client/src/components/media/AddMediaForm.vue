<template>
  <div class="add-media">
    <form @submit.prevent="handleSubmit($event)" enctype="multipart/form-data">

      <!-- <p>https://static.pexels.com/photos/748920/pexels-photo-748920.jpeg</p> -->

      <v-text-field
        v-model="metaData.name"
        label="Name">
      </v-text-field>

      <label>File<br>
        <div class="preview">
          <img :src="imagePreview" />
        </div>

        <!-- TODO: -->
        <input @change="onFileChange($event)" type="file" name="file" accept="image/jpeg, image/png, image/gif, image/svg+xml">
      </label>

      <button @click.prevent="removeImage">Remove image</button>

      <v-text-field
        v-model="metaData.description"
        label="Description"
        multi-line>
      </v-text-field>

      <v-btn type="submit" :disabled="file !== null">Upload</v-btn>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

import placeholderImage from "./placeholder-file-upload";

// Models
// import { File } from "../../models/File";

// Services
import MediaService from "../../services/MediaService";

@Component({})
export default class AddMediaForm extends Vue {
  imagePreview: string = placeholderImage;
  file: null;
  metaData = {
    name: "",
    description: ""
  };

  @Action addNotification: any;

  onFileChange(event: any) {
    const files = event.target.files;
    if (!files.length) return;

    // Create the image preview with a data url
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagePreview = event.target.result;
    };
    reader.readAsDataURL(files[0]);

    // Add the file to state
    this.file = files[0];
  }

  removeImage(e: Event) {
    this.imagePreview = placeholderImage;
    this.file = null;
  }

  async handleSubmit(event: Event) {
    if (this.file) {
      try {
        const newFile = await MediaService.addMedia(this.file, this.metaData);
        this.$emit("upload", newFile);
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
