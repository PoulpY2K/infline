<template>
  <button type="button" :id="id" @click="$emit(eventName)"
          class="inline-flex justify-center items-center uppercase font-integral font-bold transition-all duration-250 focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center mr-0"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string,
  eventName: string,
}>();
</script>
