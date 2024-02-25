<template>
  <form>
    <div class="flex justify-center min-h-screen items-center">
      <div class="w-full max-w-xs bg-teal-600">
        <div class="w-full bg-teal-950">
          <h1 class="text-2xl text-white text-center mb-2 font-bold p-3">
            Login
          </h1>
        </div>
        <div class="text-center mt-4">
          <input
            placeholder=" username"
            type="text"
            name="username"
            id="username"
            class="border-solid border border-black mb-4 font-medium h-8 w-3/4"
            v-model="username"
          />
        </div>
        <div class="text-center">
          <input
            placeholder=" password"
            type="text"
            name="password"
            id="password"
            class="border-solid border border-black font-medium h-8 w-3/4"
            v-model="password"
          />
        </div>
        <div class="text-center">
          <button
            @click.prevent="sendData"
            @click="login"
            class="w-3/6 mt-4 font-bold bg-teal-400 p-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.info(`${this.username} - ${this.password}`);
    },
    // sendData() {
    //   const request = new Request("http://localhost:3000/api/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify({
    //       username: this.username,
    //       password: this.password,
    //       name: 'Contoh123'
    //     })
    //   })

    //   return fetch(request).then((response) => response.json())
    //     .then((response) => console.info(response.errors))
    // }
    async sendData() {
      try {
        const response = await axios.post("http://localhost:3000/api/users", {
          username: this.username,
          password: this.password,
          name: "Contoh123",
        });
        console.info(response);
      } catch (error) {
        console.info(error.response.data.errors);
      }
    },
  },
};
</script>

<style></style>
