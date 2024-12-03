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
        <b-card-group columns v-else class="project-page__blog-box">
          <b-card
            class="project-page__blog"
            v-for="(article, index) in latestArticles"
            :key="article.id"
          >
            <div class="project-page__details">
              <div class="project-page__details-content">
                <div class="project-page__details-subcontent">
                  <div class="project-page__details-sub-subcontent">
                    <div
                      :style="{ background: 'url(' + article.src + ')' }"
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
                    <div class="project__content_block-button">
                      <router-link
                        to="/blog-details"
                        class="project__content_block-link"
                      >
                        <img
                          src="../../assets/img/logos/_toRight.svg"
                          alt="Go"
                          class="project__content_block-imgButton"
                        >
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-card-group>
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
  // async mounted () {
  //   try {
  //     this.isLoading = true // Включаем индикатор загрузки
  //     await this.fetchData() // Вызываем действие из Vuex
  //   } catch (error) {
  //     console.error('Ошибка загрузки данных:', error)
  //   } finally {
  //     this.isLoading = false // Отключаем индикатор загрузки
  //   }
  // }
  async mounted () {
    console.log('Component is mounting...')
    this.isLoading = true // Устанавливаем флаг загрузки
    try {
      console.log('Fetching data...')
      await this.fetchData() // Данные загружаютс
      console.log('Data fetched:', this.latestArticles)
    } catch (error) {
      console.error('Error while fetching data:', error)
    } finally {
      console.log('Setting isLoading to false')
      this.isLoading = false // Сбрасываем флаг загрузки
    }
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  padding: 0;
}
/* Определяем уникальные стили для классов */
.border-radius-1 {
  border-radius: 0px 80px 0px 0px;
}

.border-radius-2 {
  border-radius: 80px 0px 0px 0px;
}

.border-radius-3 {
  border-radius: 0px 0px 80px 0px;
}

.border-radius-4 {
  border-radius: 0px 0px 0px 80px;
}
.project-page {
  &__blog-box {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 5rem;
    row-gap: 3rem;
  }
  &__details-img {
    height: 525px;
    background-size: cover!important;
    background-position: bottom!important;
  }
}
</style>
