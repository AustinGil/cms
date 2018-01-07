<template>
  <div class="add-media">
    <v-progress-circular v-if="isLoading" indeterminate v-bind:size="70" color="primary"></v-progress-circular>
    <form v-else @submit.prevent="handleSubmit($event)" enctype="multipart/form-data">

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

      <button type="submit">Upload</button>
    </form>
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

const placeholderImage: string =
  "data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8' standalone='no'?%3e%3c!-- Generator: Gravit.io --%3e%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='0 0 150 200' width='150' height='200'%3e%3cdefs%3e%3cclipPath id='_clipPath_C5OU7KpFHzEr7BHPHkURAcIaXD91dnFi'%3e%3crect width='150' height='200'/%3e%3c/clipPath%3e%3c/defs%3e%3cg clip-path='url(%23_clipPath_C5OU7KpFHzEr7BHPHkURAcIaXD91dnFi)'%3e%3cclipPath id='_clipPath_5aMDsOMmDF9wcHl4jPTKig3LFQz42npl'%3e%3cpath d=' M 0 0 L 150 0 L 150 200 L 0 200 L 0 0 Z ' fill='rgb(255,255,255)'/%3e%3c/clipPath%3e%3cg clip-path='url(%23_clipPath_5aMDsOMmDF9wcHl4jPTKig3LFQz42npl)'%3e%3cg id='Group'%3e%3cpath d=' M 82.106 83.982 C 81.85 80.281 78.752 77.409 75.017 77.409 C 71.281 77.409 68.183 80.281 67.927 83.982 L 67.927 102.634 L 49.11 102.634 C 46.461 102.453 43.932 103.754 42.552 106.007 C 41.172 108.257 41.172 111.091 42.552 113.34 C 43.932 115.593 46.461 116.894 49.11 116.714 L 67.894 116.714 L 67.894 135.365 C 68.15 139.066 71.248 141.938 74.983 141.938 C 78.719 141.938 81.817 139.066 82.073 135.365 L 82.073 116.581 L 100.856 116.581 C 103.505 116.762 106.035 115.461 107.414 113.208 C 108.794 110.958 108.794 108.124 107.414 105.874 C 106.035 103.622 103.505 102.32 100.856 102.501 L 82.106 102.501 L 82.106 83.982 L 82.106 83.982 Z ' fill-rule='evenodd' fill='rgb(0,0,0)'/%3e%3cpath d=' M 149.833 49.462 C 149.709 48.864 149.507 48.284 149.233 47.739 L 148.999 47.341 C 148.7 46.798 148.33 46.296 147.898 45.85 L 103.859 2.12 C 103.409 1.691 102.904 1.323 102.358 1.027 L 101.957 0.629 C 101.407 0.356 100.824 0.155 100.222 0.033 C 99.767 -0.011 99.309 -0.011 98.854 0.033 L 7.106 0.033 C 3.182 0.033 0 3.192 0 7.09 L 0 192.944 C 0 196.841 3.182 200 7.106 200 L 142.894 200 C 146.818 200 150 196.841 150 192.944 L 150 50.82 C 149.989 50.363 149.933 49.908 149.833 49.462 L 149.833 49.462 Z M 105.961 24.085 L 125.778 43.697 L 105.961 43.697 L 105.961 24.085 Z M 135.821 185.887 L 14.213 185.887 L 14.213 14.146 L 91.682 14.146 L 91.682 50.82 C 91.683 52.694 92.432 54.49 93.763 55.81 C 95.1 57.135 96.906 57.877 98.788 57.876 L 135.787 57.876 L 135.821 185.887 Z ' fill-rule='evenodd' fill='rgb(0,0,0)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

@Component({})
export default class AddMediaForm extends Vue {
  imagePreview: string = placeholderImage;
  file: null;
  metaData = {
    name: "",
    description: ""
  };
  isLoading: boolean = false;

  @Action addNotification: any;

  created() {
    const editId = this.$route.query && this.$route.query.id;
    if (editId) {
      // TODO
      console.log("Need to load media...");
    }
  }

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

</style>
