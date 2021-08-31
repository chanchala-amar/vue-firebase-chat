<template>
  <div>
    <form @submit.prevent="addNewMessage">
      <label for="message"> Enter your message </label>
      <input type="text" name="message" id="message" v-model="newMsg" />
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>
<script>
import db from "@/firebase/init";
import { collection, addDoc } from "firebase/firestore";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMsg: null,
      feedback: null,
    };
  },
  methods: {
    async addNewMessage() {
      if (this.newMsg) {
        try {
          const docRef = await addDoc(collection(db, "messages"), {
            content: this.newMsg,
            name: this.name,
            timestamp: Date.now(),
          });

          console.log("Document written with ID: ", docRef.id);
          this.newMsg = null;
          this.feedback = null;
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      } else {
        this.feedback = "Enter a message to send in the chat box";
      }
    },
  },
};
</script>
