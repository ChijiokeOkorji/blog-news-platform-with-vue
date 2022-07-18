<script setup>
// TODO
// Add payment gateway
// Implement Pagination
// Complete PostsView
// Extract more reusable components if possible
// Review designs (Responsive nature)
// Cleanup JavaScript and SCSS
  import { onMounted, ref } from "vue";
  import axios from "axios";
  import HeaderArea from "@/components/HeaderArea.vue";

  const postsUrl = ref('https://techcrunch.com/wp-json/wp/v2/posts');
  const currentPage = ref(1);
  const currentPostId = ref(null);
  const queryOptions = ref({
    per_page: 7,
    page: currentPage.value,
    _embed: true
  });
  const posts = ref(null);

  function getRecentPosts() {
    axios
    .get(postsUrl.value, { params: queryOptions.value })
    .then(response => {
      posts.value = response.data;
      currentPostId.value = posts.value[0].id;
      console.log('Posts received');
      // getCategories(response[0].categories);
      // console.log(posts.value[0]);
    })
    .catch(error => {
      console.error(error);
    })
  }

  onMounted(() => {
    getRecentPosts();
  });
</script>

<template>
  <HeaderArea />
  
  <RouterView v-if="posts" :posts="posts" :currentPostId="currentPostId" @changeCurrentId="(data) => {currentPostId = data}"  />
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
