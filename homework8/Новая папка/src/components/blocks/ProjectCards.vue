<template>
  <div>
    <div v-if="isLoading" class="loader container">
      <h2>LOAD...</h2>
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-card-group columns v-else class="project-page__blog-box">
      <b-card
        class="project-page__blog"
        v-for="article in articles"
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
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
    isLoading: Boolean
  }
}
</script>

<style scoped>
/* Стили для карточек */
</style>
