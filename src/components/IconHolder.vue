<script setup>
const props = defineProps({
  src: String,
  alt: String
});

</script>

<template>
  <img class="icon" :src="`/${props.src}.svg`" :alt="alt" />
</template>


<style lang="scss" scoped>
img {
  width: 1.25rem;
  height: 1.25rem;
  object-fit: cover;
}
</style>
