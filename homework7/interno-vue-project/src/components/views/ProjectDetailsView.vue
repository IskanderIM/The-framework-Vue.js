<template>
  <div>
    <div class="container">
      <div class="blog-details__banner" />
    </div>
    <ProjectDetails />
  </div>
</template>

<script>
import ProjectDetails from '../blocks/ProjectDetails.vue'
export default {
  name: 'ProjectDetailsView',
  components: {
    ProjectDetails
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
