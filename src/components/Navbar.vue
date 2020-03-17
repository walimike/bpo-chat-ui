<template>
  <nav class="navbar navbar-dark bg-dark mb-5 p-3">
    <a class="navbar-brand text-white ml-5">BPO Chat app</a>
    <div class="right">
      <div v-if="token">
        <a class=" text-white mr-5" v-on:click="logout" href="/">Logout</a>
      </div>
      <div v-else>
        <router-link class="text-white m-4" to="/">Sign up</router-link>
        <router-link class="text-white m-4" to="/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["token"],
  methods: {
    logout(){
      localStorage.removeItem('authToken')
    }
  }
};
</script>