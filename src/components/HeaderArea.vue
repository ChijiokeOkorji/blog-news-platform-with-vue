<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import NavLinks from "./NavLinks.vue";

const myArray = ref([
  {
    icon: 'twitter',
    href: 'https://www.twitter.com'
  },
  {
    icon: 'dribbble',
    href: 'https://www.dribbble.com'
  },
  {
    icon: 'figma',
    href: 'https://www.figma.com'
  },
  {
    icon: 'github',
    href: 'https://www.github.com'
  }
]);
</script>

<template>
  <header>
    <RouterLink to="/">
      <img class="logo margin-10" src="@/assets/logo/logo.png" alt="main logo" />
    </RouterLink>

    <NavLinks class="margin-10" :links="myArray" />
  </header>
</template>

<style lang="scss" scoped>
@use '@/global-styles/abstracts' as a;

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: a.$c-white;
}

.logo {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
}

.margin-10 {
  margin: 0.625rem;
}
</style>
