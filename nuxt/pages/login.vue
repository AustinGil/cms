<template>
  <form class="login" @submit.prevent="login">
    <v-card>
      <v-text-field
        label="User name"
        v-model="username"
        required>
      </v-text-field>

      <v-text-field
        label="Password"
        v-model="username"
        required>
      </v-text-field>
    </v-card>

    <v-btn type="submit">Login</v-btn>
  </form>
</template>

<script>
// TODO: Change layout to plain
export default {
  methods: {
    // Login logic
    // login: function() {
    //   const { username, password } = this;
    //   this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
    //     this.$router.push("/");
    //   });
    // }
  }
};
</script>

<style>
.card {
  padding: 16px;
}
</style>
