<template>
  <div>
    <div class="container">
      <div class="banner">
        <div class="banner__into">
          <div class="banner__subcontent">
            <h1 class="banner__subcontent-head">
              Пусть ваш дом будет уникальным
            </h1>
            <div class="banner__subcontent-text">
              Существует много вариаций Lorem Ipsum, которые можно использовать
            </div>
          </div>
          <div class="button">
            Начать
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <div class="project">
        <div class="project__heading">
          <h2 class="project__heading_title">
            Следите за нашими проектами
          </h2>
          <div class="project__heading_subtitle">
            Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы
          </div>
        </div>
        <div class="project__content">
          <div class="project__content_block">
            <div class="project__content_block-left">
              <div class="project__content_block-img1" />
              <div class="project__content_block-nav">
                <div class="project__content_block-text">
                  <div class="project__content_block-text_title">
                    Современная кухня
                  </div>
                  <div class="project__content_block-text_subtitle">
                    Декор / Планировка
                  </div>
                </div>
                <div class="project__content_block-button">
                  <a
                    href="#"
                    class="project__content_block-link"
                  >
                    <img
                      src="../../assets/img/logos/_toRight.svg"
                      alt="Go"
                      class="project__content_block-imgButton"
                    >
                  </a>
                </div>
              </div>
            </div>
            <div class="project__content_block-right">
              <div class="project__content_block-img2" />
              <div class="project__content_block-nav">
                <div class="project__content_block-text">
                  <div class="project__content_block-text_title">
                    Современная кухня
                  </div>
                  <div class="project__content_block-text_subtitle">
                    Декор / Планировка
                  </div>
                </div>
                <div class="project__content_block-button">
                  <a
                    href="#"
                    class="project__content_block-link"
                  >
                    <img
                      src="../../assets/img/logos/_toRight.svg"
                      alt="Go"
                      class="project__content_block-imgButton"
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="project__content_block">
            <div class="project__content_block-left">
              <div class="project__content_block-img3" />
              <div class="project__content_block-nav">
                <div class="project__content_block-text">
                  <div class="project__content_block-text_title">
                    Современная кухня
                  </div>
                  <div class="project__content_block-text_subtitle">
                    Декор / Планировка
                  </div>
                </div>
                <div class="project__content_block-button">
                  <a
                    href="#"
                    class="project__content_block-link"
                  >
                    <img
                      src="../../assets/img/logos/_toRight.svg"
                      alt="Go"
                      class="project__content_block-imgButton"
                    >
                  </a>
                </div>
              </div>
            </div>
            <div class="project__content_block-right">
              <div class="project__content_block-img4" />
              <div class="project__content_block-nav">
                <div class="project__content_block-text">
                  <div class="project__content_block-text_title">
                    Современная кухня
                  </div>
                  <div class="project__content_block-text_subtitle">
                    Декор / Планировка
                  </div>
                </div>
                <div class="project__content_block-button">
                  <a
                    href="#"
                    class="project__content_block-link"
                  >
                    <img
                      src="../../assets/img/logos/_toRight.svg"
                      alt="Go"
                      class="project__content_block-imgButton"
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="container home-project-cards">
      <div class="project">
        <div class="project__heading">
          <h2 class="project__heading_title">
            Следите за нашими проектами
          </h2>
          <div class="project__heading_subtitle">
            Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы
          </div>
        </div>
        <div v-if="isLoading">
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
    </div> -->
    <HomeProjectCards/>
    <div class="container container__counter">
      <div class="counter">
        <div class="counter__counters">
          <div class="counter__counters_block">
            <div class="counter__counters-cnt">
              12
            </div>
            <div class="counter__counters-label">
              Лет опыта
            </div>
          </div>
          <div>
            <svg
              width="1"
              height="130"
              viewBox="0 0 1 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499994"
                y2="130"
                stroke="#CDA274"
              />
            </svg>
          </div>
          <div class="counter__counters_block">
            <div class="counter__counters-cnt">
              85
            </div>
            <div class="counter__counters-label">
              Успешных проектов
            </div>
          </div>
          <div>
            <svg
              width="1"
              height="130"
              viewBox="0 0 1 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499994"
                y2="130"
                stroke="#CDA274"
              />
            </svg>
          </div>
          <div class="counter__counters_block">
            <div class="counter__counters-cnt">
              15
            </div>
            <div class="counter__counters-label">
              Проектов в работе
            </div>
          </div>
          <div>
            <svg
              width="1"
              height="130"
              viewBox="0 0 1 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499994"
                y2="130"
                stroke="#CDA274"
              />
            </svg>
          </div>
          <div class="counter__counters_block">
            <div class="counter__counters-cnt">
              95
            </div>
            <div class="counter__counters-label">
              Счастливых клиентов
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="blog">
        <div class="blog__heading">
          <div class="blog__heading-title">
            Статьи & Новости
          </div>
          <div class="blog__heading-subtitle">
            Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы
          </div>
        </div>
        <div class="blog__blog">
          <div class="blog__blog-window">
            <div class="blog__blog_subcontent">
              <div class="blog__blog_content">
                <div class="blog__blog_content-img blog__blog_content-img1">
                  <div class="blog__blog_content-img_tag">
                    <div class="blog__blog_content-img_tag-rectangle">
                      <div class="blog__blog_content-img_tag-text">
                        Дизайн кухни
                      </div>
                    </div>
                  </div>
                </div>
                <div class="blog__blog_content-subcontent">
                  <div class="blog__blog_content-title">
                    Создадим лучший макет перепланировки
                  </div>
                  <div class="blog__blog_content-date">
                    <div class="blog__blog_content-dateText">
                      26 Декабря,2022
                    </div>
                    <a
                      href="#"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog__blog_tag" />
          </div>
          <div class="blog__blog-window">
            <div class="blog__blog_subcontent blog__blog_subcontent-bgColor">
              <div class="blog__blog_content">
                <div class="blog__blog_content-img blog__blog_content-img2">
                  <div class="blog__blog_content-img_tag">
                    <div class="blog__blog_content-img_tag-rectangle">
                      <div class="blog__blog_content-img_tag-text">
                        Дизайн для жизни
                      </div>
                    </div>
                  </div>
                </div>
                <div class="blog__blog_content-subcontent">
                  <div class="blog__blog_content-title">
                    Лучшие интерьерные идеи по низкой цене
                  </div>
                  <div class="blog__blog_content-date">
                    <div class="blog__blog_content-dateText">
                      22 Декабря,2022
                    </div>
                    <a
                      href="#"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog__blog_tag" />
          </div>
          <div class="blog__blog-window">
            <div class="blog__blog_subcontent">
              <div class="blog__blog_content">
                <div class="blog__blog_content-img blog__blog_content-img3">
                  <div class="blog__blog_content-img_tag">
                    <div class="blog__blog_content-img_tag-rectangle">
                      <div class="blog__blog_content-img_tag-text">
                        Дизайн Интерьера
                      </div>
                    </div>
                  </div>
                </div>
                <div class="blog__blog_content-subcontent">
                  <div class="blog__blog_content-title">
                    Лучшие интерьерные решения для офисов
                  </div>
                  <div class="blog__blog_content-date">
                    <div class="blog__blog_content-dateText">
                      25 Декабря,2022
                    </div>
                    <a
                      href="#"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog__blog_tag" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeProjectCards from '../blocks/HomeProjectCards.vue'

// import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    HomeProjectCards
  }
  // computed: {
  //   ...mapGetters(['latestArticles'])
  // },
  // methods: {
  //   ...mapActions(['fetchData']),

  //   // Возвращает класс на основе индекса
  //   getBorderRadiusClass (index) {
  //     const classes = [
  //       'border-radius-1',
  //       'border-radius-2',
  //       'border-radius-3',
  //       'border-radius-4'
  //     ]
  //     return classes[index % classes.length]
  //   }
  // },
  // async mounted () {
  //   await this.fetchData()
  // }
}
</script>

<style lang="scss" scoped>
/* Определяем уникальные стили для классов */
// .border-radius-1 {
//   border-radius: 0px 80px 0px 0px;
// }

// .border-radius-2 {
//   border-radius: 0px 0px 80px 0px;
// }

// .border-radius-3 {
//   border-radius: 80px 0px 0px 0px;
// }

// .border-radius-4 {
//   border-radius: 0px 0px 0px 80px;
// }
// .project-page {
//   &__blog-box {
//     display: grid;
//     grid-template-columns: repeat(2, auto);
//   }
//   &__details-img {
//     height: 525px;
//   }
// }
</style>
