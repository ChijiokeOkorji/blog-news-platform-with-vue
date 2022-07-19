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
      <div class="content-metadata">
        <span class="small-bold-font" v-html="getPost.categories[0]"></span>
        <span class="small-bold-font separator">.</span>
        <span class="small-font" v-html="getPost.date"></span>
      </div>

      <header class="h4-bold-font" v-html="getPost.title.rendered"></header>

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
      }
  }
</style>
