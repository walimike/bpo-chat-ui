<template>
  <div>
    <div class="selected-user">
      <span>
        To:
        <span class="name">Name here</span>
      </span>
    </div>
    <div class="chat-container">
      <Message />
      <div class="form-group mt-3 mb-0 message-box">
        <textarea class="form-control" rows="3" placeholder="Type your message here..."></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Message from "./Message";

export default {
  name: "chatwindow",
  components: {
    Message
  },
  props: ["chartInstance"],
  computed: {
    ...mapGetters({
      getChatInstance: "chats/GET_CHAT_INSTANCE"
    })
  },
  methods: {
    get() {
      return this.getChatInstance;
    }
  }
};
</script>

<style scoped>
.selected-user {
  width: 100%;
  padding: 0 15px;
  min-height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #e6ecf3;
  -webkit-border-radius: 0 3px 0 0;
  -moz-border-radius: 0 3px 0 0;
  border-radius: 0 3px 0 0;
}

.selected-user span {
  line-height: 100%;
}

.selected-user span.name {
  font-weight: 700;
}

.chat-container {
  position: relative;
  padding: 1rem;
}

.message-box {
  bottom: 10px;
}
</style>