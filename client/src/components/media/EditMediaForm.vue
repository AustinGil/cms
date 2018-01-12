<template>
  <div class="edit-media">
    <h4>Edit File</h4>
    <v-progress-circular v-if="isLoading" indeterminate v-bind:size="70" color="primary"></v-progress-circular>
    <div v-else>
      <img :src="`http://localhost:3001/${file.url}`" alt="file.description">

      <input class="url-field" onClick="this.select();" :value="`http://localhost:3001/${file.url}`">

      <!-- TODO -->
      <!-- <v-btn type="submit" color="primary">Replace</v-btn> -->

      <form @submit.prevent="handleSubmit($event)" enctype="multipart/form-data">

        <v-text-field
          label="Name"
          v-model="file.name">
        </v-text-field>

        <v-text-field
          label="Description"
          v-model="file.description"
          multi-line>
        </v-text-field>

        <v-btn type="submit" color="primary">Save</v-btn>
        <v-btn type="button" color="error" @click="deleteFile">Delete</v-btn>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

// Models
import { File } from "../../models/File";

// Services
import MediaService from "../../services/MediaService";

@Component({})
export default class EditMediaForm extends Vue {
  file: File | null = null;
  isLoading: boolean = false;

  @Action addNotification: any;

  async created() {
    const fileId = this.$route.query && this.$route.query.id;
    if (fileId) {
      this.isLoading = true;
      const request = await MediaService.getMedia({ ids: [fileId] });
      this.file = request[0];
      this.isLoading = false;
    }
  }

  highlightUrl(event: any) {
    event.target.focus();
    event.target.select();
  }

  async handleSubmit(event: Event) {
    if (this.file) {
      try {
        // const newFile = await MediaService.addMedia(this.file, this.metaData);
      } catch (error) {
        console.log(error);
        this.addNotification({
          content: "There was an error adding that media",
          type: "error"
        });
      }
    } else {
      alert("Please select a file");
    }
  }

  async deleteFile() {
    const isOk = confirm("Are you sure you want to do that?");
    if (isOk && this.file) {
      try {
        await MediaService.deleteMedia(this.file.id);
        this.addNotification({
          content: "File deleted.",
          type: "success"
        });
        this.$router.push({ name: "MediaLibrary" });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss">
.url-field {
  display: block;
  width: 100%;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(#000, 0.3);
  padding: 0.2rem 0.5rem;
  background-color: rgba(#000, 0.1);
}
</style>
