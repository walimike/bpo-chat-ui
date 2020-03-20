<template>
  <div >
    <div v-bind:key="user.username" v-for="user in userlist">
      <div class="card ">
        <ul class="list-group list-group-flush ">
          <li class="list-group-item bg-dark">
            <Contact :user="user" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "LeftGrid",
  components: {
    Contact
  },
  computed: {
    ...mapGetters({userlist: 'users/GET_USERS'})
  }
};
</script>

<style scoped>

</style>