<script setup>
  const props = defineProps({
    post: Object
  });
</script>

<template>
  <div class="content-details">
    <div class="content-metadata">
      <span class="small-bold-font" v-html="props.post.categories[0]"></span>
      <span class="small-bold-font separator">.</span>
      <span class="small-font" v-html="props.post.date"></span>
    </div>

    <div class="title-and-body">
      <header class="h4-bold-font" v-html="props.post.title.rendered"></header>

      <pre class="body-regular-font" v-html="props.post.excerpt.rendered"></pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content-details {
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .content-metadata {
      display: flex;
      align-items: center;

      .separator {
        margin: {
          top: -0.4rem;
          left: 0.25rem;
          right: 0.25rem;
        }
        cursor: default;
        }
      }

    .title-and-body {
      display: contents;
    }
  }
</style>