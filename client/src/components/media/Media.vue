<template>
  <div>
    <h1>Media</h1>
    <ul class="list-inline">
      <li>
        <router-link to="/media">Media List</router-link>
      </li>
      <li>
        <router-link to="/media/add">Add Media</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Media extends Vue {}
</script>

<style>

</style>
