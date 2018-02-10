<template>
  <v-container fluid fill-height>
    <v-layout
      justify-center
      align-center
    >
      <form class="login" @submit.prevent="login">
        <v-card>
          <v-text-field
            label="User name"
            v-model="username"
            v-validate="'required'"
            required>
          </v-text-field>

          <v-text-field
            label="Password"
            v-model="password"
            required>
          </v-text-field>
        </v-card>

        <v-btn color="primary" :disabled="true">Login</v-btn>
      </form>
    </v-layout>
    <v-snackbar
      :timeout="3000"
      :bottom="true"
      :multi-line="true"
      v-model="snackbar"
    >
      This is the static snackbar text
      <v-btn flat color="error" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  $validates: true,
  layout: "blank",
  data() {
    return {
      username: "",
      password: "",
      snackbar: true
    };
  },

  methods: {
    // Login logic
    login() {
      const { username, password } = this;
      console.log({ username, password });
      this.$router.push("/");
      // this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
      //   this.$router.push("/");
      // });
    }
  }
};
</script>

<style>
form {
  flex-grow: 1;
  max-width: 500px;
}
.card {
  padding: 16px;
}
</style>
