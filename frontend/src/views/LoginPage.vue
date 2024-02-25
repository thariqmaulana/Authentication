<template>
  <form>
    <div class="flex justify-center min-h-screen items-center">
      <div class="w-full max-w-xs bg-indigo-600 rounded-lg">
        <div class="w-full bg-teal-950">
          <h1 class="text-2xl text-white text-center mb-2 font-bold p-3">
            Login
          </h1>
        </div>
        <div class="text-center mt-4">
          <Input
            placeholder=" username"
            type="text"
            name="username"
          fq  id="username"
            class="border-solid border border-black mb-4 font-medium h-8 w-3/4"
            :modelValue="inputUsername"
            @update:modelValue="newUsername => inputUsername = newUsername"
          />
        </div>
        <div class="text-center">
          <Input
            placeholder=" password"
            type="text"
            name="password"
            id="password"
            class="border-solid border border-black font-medium h-8 w-3/4"
            :modelValue="inputPassword"
            @update:modelValue="newPassword => inputPassword = newPassword"
          />
        </div>
        <div class="text-center">
          <button
            @click.prevent="sendData"
            class="w-3/6 mt-4 font-bold bg-violet-500 p-2 rounded-sm text-white"
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
import Input from "../components/Input.vue";

export default {
  props: [  ],
  components: {
    Input,
  },
  data() {
    return {
      inputUsername: '',
      inputPassword: '',
    };
  },
  methods: {
    
    async sendData() {
      try {
        const response = await axios.post("http://localhost:3000/api/users/login", {
          username: this.inputUsername,
          password: this.inputPassword,
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

<!-- // sendData() {
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
  // } -->