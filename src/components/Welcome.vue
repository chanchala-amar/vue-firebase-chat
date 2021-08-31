<template>
  <div class="welcome container">
    <div class="card s 12">
      <div class="card-content">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label> Enter your name </label>
          <input type="text" name="name" v-model="name" />
          <button type="submit" class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      errorMsg: null,
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        console.log(this.name);
        this.$router.push({ name: "chat", params: { name: this.name } });
      } else {
        this.errorMsg = "Name is needed to enter chat";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.welcome {
  max-width: 400px;
}
.welcome h2 {
  font-size: 3rem;
}
.welcome button {
  margin: 30px auto;
}
</style>
