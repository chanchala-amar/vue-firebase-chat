<template>
  <div class="container chat">
    <h2 class="teal-text center">Chat Box</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="blue-text">{{ message.name }}:</span>
            <span class="grey-text text-darken-3"> {{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <new-message :name="name" />
      </div>
    </div>
  </div>
</template>
<script>
import NewMessage from "@/components/NewMessage.vue";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import db from "@/firebase/init.js";
import moment from "moment";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage,
  },
  created() {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const chatMessagesUnsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
    console.log(chatMessagesUnsubscribe);
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {},
  destroyed() {
    this.chatMessagesUnsubscribe();
  },
};
</script>
<style lang="scss">
.chat {
}
.chat h2 {
  font-size: 3em;
  margin-bottom: 10px;
}
.chat span {
  margin: 2px;
  font-size: 1.6em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>
