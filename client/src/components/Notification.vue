<template>
  <v-toolbar color="indigo" dark :class="`notification notification--${type}`">
    <v-toolbar-title>{{ content }}</v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class Notification extends Vue {
  @Prop() type: string;
  @Prop() content: string;
}
</script>

<style>

</style>
