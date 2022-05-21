<template>
  <div class="container mx-auto flex justify-center items-center min-h-screen">
    <x-card :img_src="imgSrc">
      <template #title>
        Hello there
      </template>
      <template #subtitle>
        elain
      </template>
      <template #text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quas.
      </template>

    </x-card>
  </div>
</template>

<script setup>
import  XCard  from "../components/XCard.vue";
const imgSrc = 'https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?t=st=1653131308~exp=1653131908~hmac=0fdbc8b9cb931afcc09cb5c60ea667603ef4827358bf32105f0d2bfa448d9a52&w=740'
</script>
