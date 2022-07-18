<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: String,
  alt: String
});

const computedPath = computed(() => {
  return `/src/assets/icons/${props.src}.svg`;
});

</script>

<template>
  <img class="icon" :src="computedPath" :alt="alt" />
</template>


<style lang="scss" scoped>
img {
  width: 1.25rem;
  height: 1.25rem;
  object-fit: cover;
}
</style>
