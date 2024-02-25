<template lang="">
  <div class="flex justify-center min-h-screen items-center">
    <div class="w-full h-full max-h-full max-w-xs bg-indigo-600 rounded-lg">
      <div class="text-center">
        Logged
      </div>
    </div>
    <div class="w-full h-full max-h-full max-w-xs ml-5 bg-indigo-600 rounded-lg text-center">
        <button class="hover:bg-white w-full rounded-lg" @click="logout">
          Logout
        </button>
    </div>
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  props: ['isSuccess'],
  data()  {
    return {
      message: ''
    }
  },
  methods: {
   async logout() {
      try {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
        localStorage.removeItem('token')
        const response = await axios.delete("http://localhost:3000/api/users/logout", {
        });
        console.info(response);
        router.replace('/')
      } catch (error) {
        this.message = error.response.data.errors
      }
    }
  }
}

</script>