<template>
  <div v-if="notifications" class="notifications">
    <transition-group name="notification">
      <v-toolbar v-for="(notification, index) in notifications" :key="index" color="indigo" dark :class="`notification notification--${notification.type}`">
        <v-toolbar-title>{{ notification.content }}</v-toolbar-title>
      </v-toolbar>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";

// Models
import { Notification } from "../models/Notification";

@Component({})
export default class Notifications extends Vue {
  @State notifications: Notification[];
}
</script>

<style scoped>
.notifications {
  position: fixed;
  z-index: 50;
  bottom: 0;
  width: 100%;
  max-height: 143px;
  overflow: auto;
}

.notification-enter-active,
.notification-leave-active {
  transition: all 1s;
}

.notification-enter,
.notification-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
