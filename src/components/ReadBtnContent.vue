<script setup>
  import { RouterLink } from "vue-router";
  import IconHolder from "./IconHolder.vue";

  const props = defineProps({
    click: Function
  });
</script>

<template>
  <div @click="props.click" class="read-btn-content">
    <span class="small-font">3 Min Read</span>
    <RouterLink to="/post-details">
      <span class="small-bold-font">Read Full</span>
      <IconHolder src="arrow-right" alt="right arrow" />
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@use '@/global-styles/abstracts' as a;

  .read-btn-content, a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  .read-btn-content {
    padding: 0.5rem;
    background-color: a.$c-white;

    a * {
      color: a.$c-primary;
    }
  }
</style>