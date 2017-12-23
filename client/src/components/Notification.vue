<template>
    <div v-if="notifications" class="notifications">
      <v-toolbar v-for="(notification, index) in notifications" :key="index" color="indigo" dark :class="`notification notification--${notification.type}`">
        <v-toolbar-title>{{ notification.content }}</v-toolbar-title>
      </v-toolbar>
    </div>
</template>

<script>
export default {
  data() {
    return {
      type: null,
      notifications: []
    };
  },

  methods: {
    addNotification(notification) {
      this.notifications = [...this.notifications, notification];
    }
  },

  watch: {
    notifications(notifications) {
      setTimeout(() => {
        notifications.pop();
      }, 5 * 1000);
    }
  },

  created() {
    setTimeout(() => {
      this.addNotification({ content: "First notification", type: "success" });
    }, 5 * 1000);
  }
};

// <script lang="ts">
// import Vue from "vue";
// import Component from "vue-class-component";

// @Component({})
// export default class Notification extends Vue {
//   type: any;
//   notifications: any[] = [];

//   watch: {
//     notifications: function =() => {

//     };
//   };

//   created() {
//     setTimeout(() => {
//       this.addNotification({ content: "First notification", type: "success" });
//     }, 5 * 1000);
//   }

//   addNotification(notification: any) {
//     this.notifications = [...this.notifications, notification];
//   }
// }
</script>

<style scoped>
.notifications {
  position: fixed;
  z-index: 50;
  bottom: 0;
  width: 100%;
}
</style>
