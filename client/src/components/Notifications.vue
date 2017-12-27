<template>
  <div>
    <button @click="i">Click</button>
    <div v-if="notifications" class="notifications">
      <notification v-for="(notification, index) in notifications" :key="index" :type="notification.type" :content="notification.content"></notification>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";
import { mapState } from "vuex";
// import { Watch } from "vue-property-decorator";

// Components
import Notification from "./Notification.vue";

@Component({
  components: {
    Notification
  }
})
export default class Notifications extends Vue {
  @State notifications: any[];

  components = {
    Notification
  };
}
</script>

<style scoped>
.notifications {
  position: fixed;
  z-index: 50;
  bottom: 0;
  width: 100%;
}
</style>
