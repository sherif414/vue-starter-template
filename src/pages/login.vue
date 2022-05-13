<template>
  <div
    class="container mx-auto flex flex-col justify-center items-center h-screen"
  >
    <form
      @submit.prevent="login"
      class="py-12 shadow bg-purple-100 flex flex-col justify-center items-center min-h-[80%] min-w-[50%]"
    >
      <h1 class="text-center font-bold mb-4">Login</h1>
      <div class="mb-4">
        <label class="block" for="username"> username </label>
        <input
          type="text"
          name="username"
          autocomplete="off"
          id="username"
          required
          v-model="login_data.username"
          class="px-2 focus:(outline-none) rounded"
        />
      </div>
      <div class="mb-4">
        <label class="block" for="password"> password </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          v-model="login_data.password"
          class="px-2 focus:(outline-none) rounded"
        />
      </div>
      <button type="submut" class="px-4 py-2 bg-purple-300 rounded">
        login
      </button>
    </form>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useAuthStore } from "../stores/useAuth";

const store = useAuthStore();
const login_data = ref({});

const url = "http://127.0.0.1:8000/auth/jwt/create/";
async function login() {
  await axios({
    url: url,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      username: login_data.value.username,
      password: login_data.value.password,
    },
  }).then((response) => {
    store.tokens.access = response.data.access;
    store.tokens.refresh = response.data.refresh;
  });
}
</script>
