<template>
  <transition name="fade">
    <div v-if="notifications" class="notifications">
      <v-toolbar v-for="(notification, index) in notifications" :key="index" color="indigo" dark [class]="`notification notification--${notifications.type}`">
        <v-toolbar-title>{{ notification.content }}</v-toolbar-title>
      </v-toolbar>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Notification extends Vue {
  type: any;
  notifications: any[] = [
    { content: "First notification", type: "success" },
    { content: "Another notification", type: "error" }
  ];

  watch: {
    content: () => {};
  };

  created() {
    // setTimeout(() => {
    //   this.content = "";
    // }, 5 * 1000);
  }
}
</script>

<style scoped>
.notifications {
  position: fixed;
  z-index: 50;
  bottom: 0;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
