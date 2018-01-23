<template>
  <form @submit.prevent="handleSubmit">
    <p v-if="isLoading">Loading...</p>
    <v-layout v-else row wrap class="single-content">
      <v-flex xs12>
        <v-text-field
          label="Title"
          v-model="content.title">
        </v-text-field>
      </v-flex>
      <v-flex xs12 md12 lg8>
        <v-card>
          <v-text-field
            v-model="content.body"
            label="Main Content"
            multi-line>
          </v-text-field>
        </v-card>

        <v-card v-if="meta" class="meta-fields">
          <meta-fields :fields="meta"></meta-fields>
        </v-card>
      </v-flex>

      <v-flex xs12 md12 lg4>
        <v-btn @click="handleSubmit">Save</v-btn>
      </v-flex>
    </v-layout>
  </form>
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
          options: ["One", "Two", "Three"]
        },
        {
          type: "checkbox",
          label: "Checkbox"
        },
        {
          type: "switch",
          label: "Switch"
        },
        {
          type: "textarea",
          label: "Textarea"
        }
      ]
    };
  },

  methods: {
    handleSubmit() {
      console.log("Saved!");
    }
  },

  components: {
    MetaFields
  }
};
</script>

<style scoped>
.card {
  padding: 16px;
}
</style>
