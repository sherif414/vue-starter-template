<template>
  <div class="container mx-auto">
    <div v-for="anime in animes" :key="anime.id">
      {{ anime.title }}
    </div>
    <hr />
    <div>
      {{ single_anime }}
    </div>
  </div>
</template>
<script setup>
import { useAnimeStore } from "../stores/animeStore";
import { onMounted, ref } from "vue";

const $fetch = useAnimeStore();
const animes = ref();
const single_anime = ref();

onMounted(async () => {
  animes.value = await $fetch.animeList();
  single_anime.value = await $fetch.animeDetial(1);
});
</script>
