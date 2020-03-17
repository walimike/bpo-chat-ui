<template>
  <div>
    <ul class="chat-box chatContainerScroll">
      <li class="chat-left">
        <div class="chat-avatar">
          <img class="rounded-circle" :src="`http://placehold.it/40/007bff/fff&text=A`" />
          <div class="chat-name">Michael</div>
        </div>
        <div class="chat-text">
          Hello, I'm walimike.
          <br />How can I help you today?
        </div>
        <div class="chat-hour">
          08:55
          <span class="fa fa-check-circle"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.chat-container li.chat-left,
.chat-container li.chat-right {
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-bottom: 40px;
}

.chat-container li .chat-avatar {
  margin-right: 20px;
}

.chat-container li.chat-right {
  justify-content: flex-end;
}

.chat-container li.chat-right > .chat-avatar {
  margin-left: 20px;
  margin-right: 0;
}
.chat-container li .chat-text {
  padding: 0.4rem 1rem;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background: #ffffff;
  font-weight: 300;
  line-height: 150%;
  position: relative;
}

.chat-container li .chat-text:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 10px;
  left: -20px;
  border: 10px solid;
  border-color: transparent #ffffff transparent transparent;
}

.chat-container li.chat-right > .chat-text {
  text-align: right;
}

.chat-container li.chat-right > .chat-text:before {
  right: -20px;
  border-color: transparent transparent transparent #ffffff;
  left: inherit;
}
.chat-container li .chat-hour {
  padding: 0;
  margin-bottom: 10px;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 15px;
}

.chat-container li .chat-hour > span {
  font-size: 16px;
  color: #9ec94a;
}

.chat-container li.chat-right > .chat-hour {
  margin: 0 15px 0 0;
}
</style>