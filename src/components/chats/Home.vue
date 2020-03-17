<template>
  <div>
    <Navbar v-bind:token="token" />
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
        <LeftGrid v-bind:users="users" />
      </div>
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
        <ChartWindow
          v-bind:chartInstance="chartInstance"
          v-on:update:chartInstance="chartInstance"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar";
import LeftGrid from "./LeftGrid";
import ChartWindow from "./ChatWindow";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Navbar,
    LeftGrid,
    ChartWindow
  },
  methods: {
    ...mapActions({ getUsersAction: "users/RETRIEVE_USERS" }),
    fetchUsers() {
      this.getUsersAction();
    }
  },
  mounted() {
    this.fetchUsers();
  },
  computed: {
    ...mapGetters({
      token: "users/GET_TOKEN",
      users: "users/GET_USERS",
      chartInstance: "chats/GET_CHAT_INSTANCE"
    })
  }
};
</script>

<style scoped>

</style>