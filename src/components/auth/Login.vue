<template>
  <div>
    <Navbar />
    <div class="row">
      <div class="col-sm-4">
        <div class="alert alert-danger" v-show="error">{{error}}</div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" class="form-control" placeholder="enter your email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="enter your password"
          />
        </div>
        <button type="button" @click="loginUser" class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "login",
  components: {
    Navbar
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "users/GET_USER",
      loading: "users/GET_LOADING",
      error: "users/GET_ERROR",
      token: "users/GET_TOKEN"
    })
  },
  methods: {
    ...mapActions({ loginUserAction: "users/LOGIN_USER" }),
    loginUser() {
      console.log("issworking");

      this.loginUserAction({ email: this.email, password: this.password });
    }
  },
  watch: {
    error(oldValue, newValue) {
      if (oldValue !== newValue) {
        setTimeout(() => {
          this.$store.commit("users/SET_ERROR", "");
        }, 3000);
      }
    }
  }
};
</script>

<style scoped>
input {
  display: block;
}
</style>