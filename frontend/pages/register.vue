<template>
  <v-layout justify-center align-center>
    <v-card style="flex: 0 1 400px">
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-alert v-if="alert" :type="alert.type" value="true">{{alert.message}}</v-alert>
          <v-text-field label="Email" v-model="email" />
          <v-text-field label="Password" v-model="password" type="password" />
          <v-btn type="submit" :loading="loading" :disabled="loading">Register</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import api from "~/api";

export default {
  layout: "fullscreen",
  data() {
    return {
      email: "",
      password: "",
      alert: null,
      loading: false
    };
  },
  methods: {
    submit() {
      this.alert = null;
      this.loading = true;

      api.auth
        .register({
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.alert = { type: "success", message: result.data.message };
          this.loading = false;
          this.$router.push("/admin");
        })
        .catch(error => {
          this.loading = false;
          if (error.response && error.response.data) {
            this.alert = {
              type: "error",
              message: error.response.data.message || error.reponse.status
            };
          }
        });
    }
  }
};
</script>