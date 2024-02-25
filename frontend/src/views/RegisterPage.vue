<template>
  <form>
    <div class="flex justify-center min-h-screen items-center">
      <div class="w-full max-w-xs bg-indigo-600 rounded-lg">
        <div class="w-full bg-purple-800">
          <h1 class="text-2xl text-white text-center mb-2 font-bold p-3">
            Register Form
          </h1>
        </div>  
        <div class="text-center mt-4">
          <Input
            placeholder=" username"
            type="text"
            name="username"
            id="username"
            class="border-solid border border-black mb-4 font-medium h-8 w-3/4"
            :modelValue="inputUsername"
            @update:modelValue="newUsername => inputUsername = newUsername"
          />
        </div>
        <div class="text-center">
          <Input
            placeholder=" name"
            type="name"
            name="name"
            id="name"
            class="border-solid border border-black mb-4 font-medium h-8 w-3/4"
            :modelValue="inputName"
            @update:modelValue="newName => inputName = newName"
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
            class="w-3/6 mt-4 font-bold bg-violet-500 p-2 rounded-full text-white"
          >
            Register
          </button>
        </div>
        <div class="text-center mt-4 mb-4 text-white">
          Already have an <router-link to="/" class="text-black hover:text-white">account?</router-link>
        </div>
      </div>
    </div>
  </form>
  <div>
    {{ message }}
  </div>
</template>

<script>
import axios from "axios";
import Input from "../components/Input.vue";
import router from "../router"

export default {
  props: ['send'],
  components: {
    Input,
  },
  data() {
    return {
      inputUsername: '',
      inputPassword: '',
      inputName: '',
      message: ''
    };
  },
  methods: {
    async sendData() {
      try {
        const response = await axios.post("http://localhost:3000/api/users", {
          username: this.inputUsername,
          password: this.inputPassword,
          name: this.inputName
      });
        console.info(response);
        router.replace('/')
      } catch (error) {
        console.info(error)
        console.info(error.response.data.errors);
      }
    },
  },
};
</script>

<style></style>
