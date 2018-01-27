<template>
  <v-container fluid fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12 md6>
        <form class="login" @submit.prevent="login">
          <v-card>
            <v-text-field
              label="User name"
              required>
            </v-text-field>

            <v-text-field
              label="Password"
              required>
            </v-text-field>
          </v-card>

          <v-btn color="primary" type="submit">Login</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: "blank",
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
