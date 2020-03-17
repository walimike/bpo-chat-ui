<template>
  <div class="row" @mouseover="hover = true" @mouseleave="hover = false">
    <img
      class="rounded-circle m-2"
      :src="`http://placehold.it/40/007bff/fff&text=${user.username[0].toUpperCase()}`"
      v-on:click="openchat"
    />
    <p class="text-white ml-3">{{user.username}}</p>
    <p v-if="hover" class="text-white ml-3">{{user.email}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "contact",
  props: ["user"],
  data() {
    return {
      hover: false
    };
  },
  methods: {
    ...mapActions({ getUserChat: "chats/RETRIEVE_USER_CHAT" }),
    openchat() {
      this.getUserChat({ username: this.user.username });
    }
  }
};
</script>

<style scoped>

</style>