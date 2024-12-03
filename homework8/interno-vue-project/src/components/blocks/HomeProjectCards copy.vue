<template>
    <div class="container home-project-cards">
      <div class="project">
        <div class="project__heading">
          <h2 class="project__heading_title">
            Следите за нашими проектами
          </h2>
          <div class="project__heading_subtitle">
            Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы
          </div>
        </div>
        <div v-if="isLoading" class="container">
          <h2>LOADER.......</h2>
          <b-spinner label="Loading..."></b-spinner>
        </div>
        <div v-else>
          <b-card-group columns class="project-page__blog-box">
            <b-card
              class="project-page__blog"
              v-for="(article, index) in latestArticles"
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
                          :class="getBorderRadiusClass(index)"
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
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeProjectCards',
  data () {
    return {
      isLoading: true // Флаг загрузки
    }
  },
  computed: {
    ...mapGetters(['latestArticles'])
  },
  methods: {
    ...mapActions(['fetchData']),

    // Возвращает класс на основе индекса
    getBorderRadiusClass (index) {
      const classes = [
        'border-radius-1',
        'border-radius-2',
        'border-radius-3',
        'border-radius-4'
      ]
      return classes[index % classes.length]
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

<style lang="scss" scoped>
/* Определяем уникальные стили для классов */
.border-radius-1 {
  border-radius: 0px 80px 0px 0px;
}

.border-radius-2 {
  border-radius: 0px 0px 80px 0px;
}

.border-radius-3 {
  border-radius: 80px 0px 0px 0px;
}

.border-radius-4 {
  border-radius: 0px 0px 0px 80px;
}
.project-page {
  &__blog-box {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
  &__details-img {
    height: 525px;
  }
}
</style>
