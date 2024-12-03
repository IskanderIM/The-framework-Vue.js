<template>
  <div class="project-page__pagination">
    <router-link
      class="project-page__pagination-page"
      v-for="page in totalPages"
      :key="page"
      :to="`/project-page/${page}`"
    >
      {{ page }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: Number
  }
}
</script>

<style scoped>
/* Стили для пагинации */
</style>
