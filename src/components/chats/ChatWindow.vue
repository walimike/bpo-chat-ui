<template>
  <div>
    <div class="selected-user">
      <span>
        To:
        <span class="name">{{chatMate.username}}</span>
      </span>
    </div>
    <div class="chat-container">
      <p>{{url}}</p>
      <Message />
      <div class="form-group mt-3 mb-0 message-box">
      <span><textarea 
        type="text"
        class="form-control" rows="3" placeholder="Type your message here..."
        name="message"
        v-model="message"
        ></textarea>
        <button type="button" class="btn btn-primary" @click="sendMessage">Send</button></span>
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
  data() {
      return{
        message:'',
        url: '',
        chatMate:''
      }
  },
  computed: {
    ...mapGetters({
      getChatInstance: "chats/GET_CHAT_INSTANCE",
      getChatMate: "chats/GET_CHAT_MATE"
    })
  },
  methods: {
    ...mapActions({ sendMessageAction: "chats/SEND_CHART_MESSAGE" }),
    sendMessage(){
      this.sendMessageAction({
        message: this.message,
        chatUri: this.url
        })
    }
  },
  watch: {
    getChatInstance(newValue, oldValue){
      this.url = newValue
    },
    getChatMate(newValue, oldValue){
      this.chatMate = newValue
    },
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