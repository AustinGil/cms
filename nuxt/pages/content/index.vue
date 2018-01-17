<template>
  <v-flex xs12 class="contents-list">
    <p><a href="http://localhost:3001/api/v1/contents" target="_blank">View rest endpoint</a></p>
    <router-link to="content/add" tag="v-btn">Add new content</router-link>

    <p v-if="isLoading">Loading...</p>

    <div v-else>
      <v-data-table
        v-if="contents"
        :headers="tableHeaders"
        :items="contents"
        class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>
            <router-link :to="`content/${props.item.id}`">{{ props.item.title }}</router-link>
            <button @click="deleteContent(props.item.id)">X</button>
          </td>
          <td>{{ new Date(props.item.createdAt).toDateString() }}</td>
          <td>{{ new Date(props.item.updatedAt).toDateString() }}</td>
        </template>
      </v-data-table>

      <p v-else>No contents. Why don't you <router-link to="/content/add">add some?</router-link></p>
    </div>
  </v-flex>
</template>

<script>
import { mapState } from "vuex";

// Services
import ContentService from "@/services/ContentService";

// // Models
// import { Content } from '../models/Content'

export default {
  data() {
    return {
      tableHeaders: [
        { text: "Title", align: "left", value: "title" },
        { text: "Created", align: "left", value: "createdAt" },
        { text: "Last Updated", align: "left", value: "updatedAt" }
      ],
      isLoading: false
    };
  },

  async fetch({ store, params }) {
    const options = {};
    const contents = await ContentService.getContents(options);
    await store.dispatch("addContents", contents);
  },
  // @Action addNotification: any;

  computed: mapState(["contents"]),

  methods: {
    async deleteContent(contentId) {
      if (confirm(`Are you sure you want to do that?`) == true) {
        try {
          const res = await ContentService.deleteContent(contentId);
          // TODO: Change this to just updating state
          window.history.go();
        } catch (error) {
          // this.addNotification({ content: "Failed.", type: "error" });
        }
      } else {
        // TODO
      }
    }
  }
};
</script>

<style>

</style>
