import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./useAuth";

export const useAnimeStore = defineStore("anime", () => {
  const auth = useAuthStore();
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${auth.tokens.access}`,
    },
  });

  async function animeList() {
    const res = await api.get("anime/");
    console.log(res);
    return res.data.results;
  }

  const animeDetial = async (id) => {
    const res = await api.get(`anime/${id}/`);
    return res.data;
  };
  return {
    animeDetial,
    animeList,
  };
});
