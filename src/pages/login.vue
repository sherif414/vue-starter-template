<template>
  <div
    class="bg-purple-100 justify-center px-[8vw] items-center flex h-screen text-gray-800"
  >
    <div class="flex rounded overflow-hidden shadow bg-white">
      <div class="w-[50%] flex flex-col">
        <form
          @submit.prevent="login"
          class="h-full w-[50%] m-auto flex justify-center items-stretch flex-col"
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
              :class="errorClasses"
              class="p-3 w-full text-sm border rounded"
            />
            <p v-show="errors" class="text-red-600 text-xs m-1 truncate">
              {{ errors }}
            </p>
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
              :class="errorClasses"
              class="p-3 w-full text-sm border rounded"
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
            type="submit"
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
import { computed, ref } from "vue";
import { useAuthStore } from "../stores/useAuth";

const store = useAuthStore();
const login_data = ref({});
const errors = ref();

const errorClasses = computed(() => {
  if (errors.value) {
    return "border-red-500 focus:outline-red-500";
  }
  return "border-purple-200 focus:outline-purple-400";
});
async function login() {
  errors.value = null;
  await axios({
    url: "http://127.0.0.1:8000/auth/jwt/create/",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      username: login_data.value.username,
      password: login_data.value.password,
    },
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        errors.value = false;
      }
      store.tokens.access = response.data.access;
      store.tokens.refresh = response.data.refresh;
    })
    .catch((err) => {
      console.log(err.response);

      errors.value = err.response.data.detail;
    });
}
</script>
