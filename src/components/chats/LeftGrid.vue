<template>
  <div>
    <h2>Registered users</h2>
    <div v-bind:key="user.username" v-for="user in users">
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <Contact v-bind:user="user" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact";

export default {
  name: "LeftGrid",
  components: {
    Contact
  },
  props: ["users"]
};
</script>

<style scoped>
</style>