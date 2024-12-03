<template>
  <div>
    <div class="container container__banner">
      <div class="project-page__banner">
        <div class="project-page__banner-into">
          <h1 class="project-page__banner-intoHead">
            Наш проект
          </h1>
          <div class="project-page__banner-breadcrumbs">
            Домой / Проект
          </div>
        </div>
      </div>
    </div>
    <b-container>
      <div class="project-page">
        <ProjectBlock />
      </div>
    </b-container>
  </div>
</template>

<script>
import ProjectBlock from '../blocks/ProjectBlock.vue'

export default {
  name: 'ProjectView',
  components: {
    ProjectBlock
  },
  data () {
    return {
    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
