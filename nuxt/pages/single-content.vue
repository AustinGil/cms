<template>
  <div class="single-content">
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <h1>{{ content.title }}</h1>
      <div>{{ content.body }}</div>
    </div>
  </div>
</template>

<script>
// Services
import ContentService from '../services/ContentService'

export default {
  async asyncData () {
    const options = { ids: [1] }
    const contents = await ContentService.getContents(options)

    return {
      content: contents[0]
    }
  },

  data () {
    return {
      isLoading: false,
      content: null
    }
  },

  async created () {
    const options = { ids: [1] }
    const contents = await ContentService.getContents(options)
    this.isLoading = false

    console.log(contents)
  }
}
</script>

<style>

</style>
