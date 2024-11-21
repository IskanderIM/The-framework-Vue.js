<template>
  <div>
    <div class="container">
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
    <b-row>
      <div class="container">
          <div class="project-page">
          <!-- <div>
            <b-nav pills align="center">
              <b-nav-item @click="$router.go(-1)">Ванная комната</b-nav-item>
              <b-nav-item active>Спальня</b-nav-item>
              <b-nav-item>Кухня</b-nav-item>
              <b-nav-item>Гостиная</b-nav-item>
            </b-nav>
          </div> -->
          <div>
            <ProjectBlock />
          </div>
          <div class="project-page__pagination">
            <div class="project-page__pagination-page">
              01
            </div>
            <div class="project-page__pagination-page">
              02
            </div>
            <div class="project-page__pagination-page">
              03
            </div>
            <div class="project-page__pagination-page">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
              >
                <circle
                  cx="26.5"
                  cy="26"
                  r="25.5"
                  stroke="none"
                />
                <path
                  d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </b-row>
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
