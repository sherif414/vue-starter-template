import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const tokens = ref({
    access: "",
    refresh: "",
  });

  if (localStorage.getItem("tokens")) {
    tokens.value = JSON.parse(localStorage.getItem("tokens"));
  }

  watch(
    tokens,
    () => {
      localStorage.setItem("tokens", JSON.stringify(tokens.value));
    },
    { deep: true }
  );
  return { tokens };
});
