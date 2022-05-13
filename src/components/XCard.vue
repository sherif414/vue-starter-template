<template>
  <div class="shadow rounded overflow-hidden h-min w-min">
    <img v-if="props.img_src" :src="props.img_src" />
    <div class="text-center p-4">
      <div class="text-lg font-bold truncate">
        <slot name="title"></slot>
      </div>
      <div class="text-gray-500">
        <slot name="subtitle"></slot>
      </div>
      <div class="text-xs mt-2">
        <slot name="text"> </slot>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  img_src: String,
});
</script>
