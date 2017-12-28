<template>
  <v-flex xs12 class="contents-list">
    <p><a href="http://localhost:3001/api/v1/contents" target="_blank">View rest endpoint</a></p>
    <router-link to="contents/add" tag="v-btn">Add new content</router-link>

    <p v-if="isLoading">Loading...</p>

    <div v-else>
      <v-data-table
        v-if="contents"
        :headers="headers"
        :items="contents"
      class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>
            <router-link :to="`contents/${props.item.id}`">{{ props.item.title }}</router-link>
            <button @click="deleteContent(props.item.id)">X</button>
          </td>
          <td>{{ new Date(props.item.createdAt).toDateString() }}</td>
          <td>{{ new Date(props.item.updatedAt).toDateString() }}</td>
        </template>
      </v-data-table>

      <p v-else>No contents</p>
    </div>
  </v-flex>
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
export default class ContentsList extends Vue {
  headers: any[] = [
    { text: "Title", align: "left", value: "title" },
    { text: "Created", align: "left", value: "createdAt" },
    { text: "Last Updated", align: "left", value: "updatedAt" }
  ];
  contents: Content[] = [];
  isLoading: boolean = false;

  @Action addNotification: any;

  async created() {
    this.isLoading = true;
    try {
      this.contents = await ContentService.getContents({});
    } catch (error) {
      console.log(error);
    }
    this.isLoading = false;
  }

  async deleteContent(contentId: number) {
    if (confirm(`Are you sure you want to do that?`) == true) {
      try {
        const res = await ContentService.deleteContent(contentId);
        // TODO: Change this to just updating state
        window.history.go();
      } catch (error) {
        this.addNotification({ content: "Failed." });
      }
    } else {
      // TODO
    }
  }
}
</script>

<style>

</style>
