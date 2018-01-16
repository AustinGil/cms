<template>

  <div class="dashboard">
    <h1>Welcome</h1>
    <v-card>
      <ul>
        <li><router-link to="/content">Content</router-link></li>
        <li><router-link to="/media">Media</router-link></li>
      </ul>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style>
v-card {
  padding: 1rem;
}
</style>
