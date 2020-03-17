<template>
  <div>
    <Navbar />
    <div class="row justify-content-center h-100">
      <div class="col">
          <LeftGrid v-bind:users="users" />
      </div>
      <div class="col-6">2 of 3 (wider)</div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar";
import LeftGrid from "./LeftGrid";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Navbar,
    LeftGrid
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
      users: "users/GET_USERS"
    })
  }
};
</script>

<style scoped>
</style>