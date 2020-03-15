<template>
  <nav  class="navbar navbar-dark bg-dark mb-5 p-3" >
    <a class="navbar-brand text-white ml-5">BPO Chat app</a>
    <div class="right">
      <router-link class="text-white m-4" to="/">Sign up</router-link>
      <router-link class="text-white m-4" to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>