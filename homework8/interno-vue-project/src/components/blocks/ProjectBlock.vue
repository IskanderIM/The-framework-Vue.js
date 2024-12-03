<template>
  <div class="container">
    <div class="project-page__box">
      <ProjectSidebar
        :uniqueTags="uniqueTags"
        :activeTag="buttonName"
        @filter="handleButtonClick"
      />
      <ProjectCards :articles="paginatedProjects" :isLoading="isLoading"/>
      <ProjectPagination :totalPages="totalPages" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProjectSidebar from './ProjectSidebar.vue'
import ProjectCards from './ProjectCards.vue'
import ProjectPagination from './ProjectPagination.vue'

export default {
  name: 'ProjectBlock',
  components: {
    ProjectSidebar,
    ProjectCards,
    ProjectPagination
  },
  data () {
    return {
      buttonName: '',
      perPage: 8,
      isLoading: true
    }
  },
  computed: {
    filterByTag () {
      if (this.buttonName === '') {
        return this.articles
      } else {
        return this.articles.filter((x) => x.tag === this.buttonName)
      }
    },
    uniqueTags () {
      return this.articles.reduce((accumulator, current) => {
        if (accumulator.findIndex((object) => object.tag === current.tag) === -1) {
          accumulator.push(current)
        }
        return accumulator
      }, [])
    },
    ...mapGetters(['articles']),
    currentPage () {
      const page = this.$route.params.page
      return page || 1
    },
    totalPages () {
      return Math.ceil(this.filterByTag.length / this.perPage)
    },
    paginatedProjects () {
      const { currentPage, perPage } = this
      const startIndex = (currentPage - 1) * perPage
      const endIndex = startIndex + perPage

      return this.filterByTag.slice(startIndex, endIndex)
    }
  },
  methods: {
    ...mapActions(['fetchData']),
    handleButtonClick (tag) {
      this.buttonName = tag

      if (
        this.$route.path !== '/project-page' ||
        this.$route.query.tag !== tag
      ) {
        this.$router.push({
          path: '/project-page',
          query: { tag }
        }).catch((error) => {
          if (error.name !== 'NavigationDuplicated') {
            console.error('Ошибка при навигации:', error)
          }
        })
      }
    }
  },
  async mounted () {
    try {
      this.isLoading = true // Включаем индикатор загрузки
      await this.fetchData() // Вызываем действие из Vuex
    } catch (error) {
      console.error('Ошибка загрузки данных:', error)
    } finally {
      this.isLoading = false // Отключаем индикатор загрузки
    }
  }
}
</script>
