<template>
  <div class="container">
    <div class="project-page__box">
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
              @click="handleButtonClick(button.tag)"
              :class="['project-page__sidebar-button', { 'project-page__sidebar-button_active': button.tag === buttonName }]"
            >
              {{ button.tagName }}
            </button>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
      <b-card-group columns class="project-page__blog-box">
        <b-card
          class="project-page__blog"
          v-for="article in paginatedProjects"
          :key="article.id"
        >
          <div class="project-page__details">
            <div class="project-page__details-content">
              <div class="project-page__details-subcontent">
                <div class="project-page__details-sub-subcontent">
                  <div>
                    <img
                      :src="article.src"
                      :alt="article.alt"
                      class="project-page__details-img"
                    >
                  </div>
                </div>
                <div class="project-page__card-footer">
                  <div class="project-page__details-subcontentDate">
                    <div class="project-page__details-title">
                      {{ article.title }}
                    </div>
                    <div class="project-page__details-breadcrumbs">
                      {{ article.link }}
                    </div>
                  </div>
                  <router-link
                    to="/blog-details"
                    class="project__content_block-link"
                  >
                    <svg
                      width="52"
                      height="53"
                      viewBox="0 0 52 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        class="blog__blog_subcontent"
                        cx="26"
                        cy="26.2671"
                        r="26"
                        fill="#F4F0EC"
                      />
                      <path
                        d="M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </b-card-group>
      <div class="project-page__pagination">
        <router-link class="project-page__pagination-page"
          v-for="page in totalPages"
          :key="page"
          :to="`/project-page/${page}`"
        >
          {{ page }}
        </router-link>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProjectBlock',
  data () {
    return {
      buttonName: '',
      sortedArray: [
      ],
      numbersandtexts: [
        {
          number: '1',
          text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
        },
        {
          number: '2',
          text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
        },
        {
          number: '3',
          text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
        }
      ],
      buttons: [
        {
          tag: 'kitchen',
          tagName: 'Кухня'
        },
        {
          tag: 'bedroom',
          tagName: 'Спальня'
        },
        {
          tag: 'building',
          tagName: 'Здание'
        },
        {
          tag: 'architecture',
          tagName: 'Архитектура'
        },
        {
          tag: 'kitchen-planning',
          tagName: 'Планировка'
        }
      ],
      perPage: 8
    }
  },
  computed: {
    filterByTag () {
      if (!this.buttonName) {
        return this.articles
      }
      return this.articles.filter(article => article.tag === this.buttonName)
    },
    uniqueTags () {
      return this.articles.reduce((accumulator, current) => {
        if (accumulator.findIndex(object => object.tag === current.tag) === -1) {
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

  mounted () {
    this.fetchData()
  },

  methods: {
    ...mapActions(['fetchData']),

    handleButtonClick (tag) {
      this.buttonName = tag

      // Проверяем, если маршрут уже открыт с нужным query
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

  created () {
  }
}
</script>

<style lang="scss" scoped>

</style>
