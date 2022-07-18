<script setup>
import IconHolder from "./IconHolder.vue";

const props = defineProps({
  links: Array
});
</script>

<template>
  <nav>
    <ul>
      <template v-for="(link, index) in props.links" :key="index">
        <li class="icon-link">
          <a :href="link.href">
            <IconHolder :src="link.icon" :alt="`${link.icon} icon`" />
          </a>
        </li>
        <li v-if="(index < (props.links.length - 1))" class="small-bold-font separator">.</li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;

  .icon-link {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      height: 1.25rem;
    }
  }

  .separator {
    margin: {
      top: 0.1rem;
      left: 0.5rem;
      right: 0.5rem;
    }
    cursor: default;
    
  }
}
</style>
