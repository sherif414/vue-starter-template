<template>
  <div
    class="bg-purple-100 justify-center px-[8vw] items-center flex h-screen text-gray-800"
  >
    <div class="flex rounded overflow-hidden shadow bg-white">
      <div class="w-[50%] items-center flex flex-col">
        <form
          @submit.prevent="login"
          class="h-full w-[50%] flex justify-center items-stretch flex-col"
        >
          <h1 class="text-3xl mb-4">Welcome back</h1>

          <div class="mb-4">
            <label class="block text-sm mb-1" for="username"> Username </label>
            <input
              type="text"
              name="username"
              autocomplete="off"
              id="username"
              required
              placeholder="enter username"
              v-model="login_data.username"
              class="p-3 w-full focus:(outline-purple-200) text-sm border rounded"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm mb-1" for="password"> Password </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="enter passowrd"
              v-model="login_data.password"
              class="p-3 w-full text-sm focus:(outline-purple-200) border rounded"
            />
          </div>
          <div class="mb-4">
            <input
              type="checkbox"
              class="text-purple-400 checked:text-purple-400 focus:(outline-purple-200)"
              name="remember"
              id="remember"
            /><label class="text-sm ml-2" for="remember">remember me?</label>
          </div>
          <button
            type="submut"
            class="py-2 mb-2 bg-purple-400 hover:(bg-purple-600) focus:(bg-purple-600 outline-none) active:bg-purple-800 text-light-50 rounded"
          >
            login
          </button>
          <a href="#" class="text-xs text-purple-400 active:text-purple-600"
            >Forgot password?</a
          >
        </form>
      </div>
      <div class="w-[50%] h-full">
        <img class="h-full" src="src/assets/login.jpg" />
      </div>
    </div>
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
