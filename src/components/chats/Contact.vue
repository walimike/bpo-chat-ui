<template>
  <div class="row" @mouseover="hover = true" @mouseleave="hover = false">
    <img
      class="rounded-circle m-2"
      :src="`http://placehold.it/40/007bff/fff&text=${user.username[0].toUpperCase()}`"
      @click="openchat"
    />
    <p class="text-white ml-3">{{user.username}}</p>
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
  computed: {
    ...mapGetters({
      getChatInstance: "chats/GET_CHAT_INSTANCE"
    })
  },
  methods: {
    ...mapActions({ getUserChat: "chats/RETRIEVE_USER_CHAT" },
                  { fetchChats: "chats/FETCH_CHART_MESSAGE"}),
    openchat() {
      this.getUserChat({ username: this.user.username });
    }
  },
  watch: {
  getChatInstance(newValue, oldValue){
    this.fetchChats({chatUri: newValue}) 
  },
  }
};
</script>

<style scoped>
  img{
    cursor: pointer;
  }
</style>