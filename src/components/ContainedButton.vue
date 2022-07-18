<template>
  <button>JOIN US</button>
</template>

<style lang="scss" scoped>
@use '@/global-styles/abstracts' as a;

button {
  @include a.fontSets(#{'SF Pro Display', sans-serif}, 1.125rem, 500, 1.3425rem);
  margin: 0.75rem 0;
  padding: 0.72rem 3.4375rem;
  background-color: #000000;
  color: #ffffff;
  border: none;
  text-align: center;
}
</style>