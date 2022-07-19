<script setup>
  import CardText from "./CardText.vue";
  import ReadBtnContent from "./ReadBtnContent.vue";

  const props = defineProps({
    post: Object,
    currentPostId: Number
  });
</script>

<template>
  <div class="card-large">
    <img class="card-media" v-if="props.post._embedded['wp:featuredmedia']" :src="props.post._embedded['wp:featuredmedia'][0].source_url" alt="large card media" />

    <div class="inner-content">
      <CardText :post="props.post" />

      <ReadBtnContent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-large {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;

  .card-media {
    max-width: 43.7%;
  }

  .inner-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
  }
}
</style>
