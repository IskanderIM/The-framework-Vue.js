<template>
  <div class="project-page__sidebar">
    <div class="project-page__sidebar-tags">
      <div class="project-page__sidebar-content">
        <div
          v-for="button in uniqueTags"
          :key="button.id"
          class="project-page__sidebar-contentBlock"
        >
          <button
            :data-id="button.id"
            @click="$emit('filter', button.tag)"
            :class="['project-page__sidebar-button', { 'project-page__sidebar-button_active': button.tag === activeTag }]"
          >
            {{ button.tagName }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    uniqueTags: Array,
    activeTag: String
  }
}
</script>

<style scoped>
/* Стили для сайдбара */
</style>
