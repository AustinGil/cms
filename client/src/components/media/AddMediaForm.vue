<template>
  <form class="add-media">

    <p>https://static.pexels.com/photos/748920/pexels-photo-748920.jpeg</p>

    <label>Image<br>
      <!-- <input type="text"> -->
      <input type="file" accept="image/jpeg, image/png, image/gif, image/svg+xml">
      <!-- TODO: -->
    </label>

    <button type="submit">Upload Image</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class AddMediaForm extends Vue {}
</script>

<style>

</style>
