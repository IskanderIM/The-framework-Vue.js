<template>
  <div>
    <div class="blog__blog">
      <div
        class="blog__blog-window"
        v-for="article in articles"
        :v-bind="article"
        :key="article.key"
        :id="article.id"
      >
        <div class="blog__blog_subcontent blog__blog_subcontent-bgColor">
          <div class="blog__blog_content">
            <div class="blog__blog_content-img blog__blog_content-img2">
              <div class="blog__blog_content-img_tag">
                <div class="blog__blog_content-img_tag-rectangle">
                  <div class="blog__blog_content-img_tag-text">
                    {{ article.tag }}
                  </div>
                </div>
              </div>
            </div>
            <div class="blog__blog_content-subcontent">
              <div
                :html="article.title"
                class="blog__blog_content-title"
              >{{ article.title }}</div>
              <div class="blog__blog_content-date">
                <div class="blog__blog_content-dateText">
                  {{ article.date }}
                </div>
                <router-link
                  to="/blog-details"
                  class="project__contnet_block-link"
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
        <div class="blog__blog_tag" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtAndNews',
  data () {
    return {
      articles: [
        {
          id: 1,
          tag: 'Дизайн кухни',
          title: 'Создадим лучший макет перепланировки',
          date: '26 Декабрь,2022',
          imglink: '#'
        },
        {
          id: 2,
          tag: 'Дизайн для жизни',
          title: 'Лучшие интерьерные идеи по низкой цене',
          date: '22 Декабрь,2022',
          imglink: '#'
        },
        {
          id: 3,
          tag: 'Дизайн Интерьера',
          title: 'Лучшие интерьерные решения для офисов ',
          date: '25 Декабрь,2022',
          imglink: '#'
        },
        {
          id: 4,
          tag: 'Дизайн кухни',
          title: 'Создадим лучший макет перепланировки',
          date: '26 Декабрь,2022',
          imglink: '#'
        },
        {
          id: 5,
          tag: 'Дизайн для жизни',
          title: 'Лучшие интерьерные идеи по низкой цене',
          date: '22 Декабрь,2022',
          imglink: '#'
        },
        {
          id: 6,
          tag: 'Дизайн Интерьера',
          title: 'Лучшие интерьерные решения для офисов ',
          date: '25 Декабрь,2022',
          imglink: '#'
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
