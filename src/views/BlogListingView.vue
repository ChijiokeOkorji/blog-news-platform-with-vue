<script setup>
import CardLarge from "@/components/CardLarge.vue";
import FooterArea from "@/components/FooterArea.vue";
import CardMini from "../components/CardMini.vue";

const props = defineProps({
  posts: Array,
  currentPostId: Number
});

const emits = defineEmits(['changeCurrentId']);

const receiveEmits = (data) => {
  console.log(data);
  emits['changeCurrentId', data];
};
</script>

<template>
  <main>
    <CardLarge :post="props.posts[0]" :currentPostId="props.currentPostId" />

    <CardMini v-for="post in props.posts.slice(1)" :key="post.id" :post="post" :currentPostId="props.currentPostId" @changeCurrentId="receiveEmits" />

    <FooterArea />
  </main>
</template>

<style lang="scss" scoped>
  main {
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
  }
</style>
