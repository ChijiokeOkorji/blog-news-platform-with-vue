<script setup>
import { computed, onMounted } from 'vue';

  const props = defineProps({
    posts: Array,
    currentPostId: Number
  });

  const getPost = computed(() => {
    return props.posts.filter(item => props.currentPostId === item.id)[0];
  });

  function createDOMElement(element, attributes) {
    let newElement = document.createElement(element);

    for (let key in attributes) {
      newElement.setAttribute(key, attributes[key]);
    }

    return newElement;
  }

  onMounted(() => {
    let parentElement = document.querySelector('pre.body-regular-font');
    let childElements = parentElement.children;
    let midpoint = Math.ceil(childElements.length / 2);

    let image = createDOMElement('img', {src: getPost.value._embedded['wp:featuredmedia'][0].source_url, class: 'card-media'});

    parentElement.insertBefore(image, childElements[midpoint]);
  });
</script>

<template>
  <main>
    <div class="blog-content">
      <div>
        <div>By Ryan Jackson</div>
        <div>2 Month Ago</div>
      </div>

      <header v-html="getPost.title.rendered"></header>

      <pre class="body-regular-font" v-html="getPost.content.rendered"></pre>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;

    .blog-content {
      width: 100%;
      padding: 0 20%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
