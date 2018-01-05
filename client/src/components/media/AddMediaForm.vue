<template>
  <form class="add-media" @submit.prevent="handleSubmit($event)" enctype="multipart/form-data">

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
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='isolation:isolate' width='375' height='500'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M0 0h375v500H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url%28%23a%29' fill-rule='evenodd'%3E%3Cpath d='M205.266 209.955c-.64-9.252-8.385-16.433-17.724-16.433-9.34 0-17.085 7.181-17.724 16.433v46.629h-47.042c-6.623-.451-12.946 2.801-16.395 8.433a17.532 17.532 0 0 0 0 18.334c3.449 5.632 9.772 8.884 16.395 8.433h46.958v46.629c.64 9.252 8.385 16.433 17.724 16.433 9.34 0 17.085-7.181 17.724-16.433v-46.961h46.959c6.622.452 12.946-2.8 16.395-8.432a17.534 17.534 0 0 0 0-18.335c-3.449-5.631-9.773-8.884-16.395-8.432h-46.875v-46.298z'/%3E%3Cpath d='M374.583 123.654a17.505 17.505 0 0 0-1.501-4.307l-.584-.994a17.463 17.463 0 0 0-2.753-3.727L259.647 5.3a17.559 17.559 0 0 0-3.753-2.733l-1.001-.994a17.683 17.683 0 0 0-4.337-1.491 17.925 17.925 0 0 0-3.42 0H17.766C7.954.082 0 7.981 0 17.724v464.635C0 492.102 7.954 500 17.766 500h339.468c9.812 0 17.766-7.898 17.766-17.641v-355.31a17.404 17.404 0 0 0-.417-3.395zM264.902 60.212l49.544 49.031h-49.544V60.212zm74.65 404.506H35.532V35.365h193.672v91.684a17.58 17.58 0 0 0 5.203 12.475 17.833 17.833 0 0 0 12.563 5.167h92.498l.084 320.027z'/%3E%3C/g%3E%3C/svg%3E";

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
        console.log(newFile);
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
