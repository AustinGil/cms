<template>
  <div class="single-content">
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <h1>{{ content.title }}</h1>
      <div>{{ content.body }}</div>

      <v-card v-if="meta" class="meta-fields">
        <meta-fields :fields="meta"></meta-fields>
      </v-card>
    </div>
  </div>
</template>

<script>
// Services
import ContentService from "@/services/ContentService";

// Components
import MetaFields from "@/components/MetaFields";

export default {
  async asyncData({ params }) {
    const options = { ids: [params.id] };
    const contents = await ContentService.getContents(options);

    return {
      content: contents[0]
    };
  },

  data() {
    return {
      isLoading: false,
      meta: [
        {
          type: "text",
          label: "Text",
          required: true
        },
        {
          type: "radio",
          label: "Radio",
          options: [
            {
              label: "One",
              value: "one"
            },
            {
              label: "Two",
              value: "two"
            }
          ]
        },
        {
          type: "select",
          label: "Select",
          options: [
            {
              label: "One",
              value: "one"
            },
            {
              label: "Two",
              value: "two"
            }
          ]
        }
      ]
    };
  },

  components: {
    MetaFields
  }
};
</script>

<style scoped>
.meta-fields {
  padding: 16px;
}
</style>
