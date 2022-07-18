<script setup>
  import ContainedButton from "./ContainedButton.vue";
</script>

<template>
  <footer>
    <span class="footer-title">Join our Team of Writers</span>
    <pre class="footer-body">On dasdas, writers earn a living doing what they love. 
  Getting started is easy. Just pay a one time <strong>$25 fee</strong> and everything is ready to go.</pre>

    <ContainedButton />
  </footer>
</template>

<style lang="scss" scoped>
@use '@/global-styles/abstracts' as a;

footer {
  @include a.fontSets(#{'SF Pro Text', sans-serif}, 1.375rem, 400, 2rem);
  margin: 6.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: a.$c-black-20;

  .footer-title {
    font: {
      size: 2rem;
      weight: 500
    };
    line-height: 2.5rem;
    color: a.$c-black;

    .footer-body {
      margin: 0.75rem 0;
    }

    strong {
      font-weight: 700;
    }
  }
}
</style>