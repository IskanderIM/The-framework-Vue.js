<template>
  <div>
    <header class="header">
        <div class="header__body">
            <a href="index.html" class="home-link">
                <img class="home-link-logo" src="img/Logo.svg" alt="Interno">
                <h1 class="home-link-title">Interno</h1>
            </a>
            <nav class="navbar">
                    <ul class="navbar-list">
                        <li><a href="index.html">Домой</a></li>
                        <li><a href="">Проект</a></li>
                        <li><a href="blog.html">Блог</a></li>
                    </ul>
            </nav>
        </div>
    </header>
    <section class="blog__banner__section">
        <div class="blog__banner-card card text-white">
            <img src="img/Blog-details/blog-details-banner.jpg" class="blog__banner-card__img" alt="...">
        </div>
    </section>
    <section class="blog-details__articles-section">
        <div class="blog-details__articles">
            <article class="col-8">
              <component :is="changeTabs"></component>
            </article>
            <aside class="blog-details__sidebar col-4">
                <h2 class="navbar-title">Тэги</h2>
                <nav class="blog-details__navbar">
                    <button class="btn-navigation-tag tabs-btn" v-for="tab in tabs" :key="tab.id" :name="tab.name" @click="currentTab = tab.name" :class="{ 'active': currentTab === tab.name }">
                        {{ tab.title }}
                    </button>
                </nav>
            </aside>
        </div>
    </section>
    <footer class="footer">
        <div class="row">
            <div class="column">
                <a href="/" class="home-link">
                    <img src="img/Logo.svg" alt="Interno">
                    <h1 class="home-link-title">Interno</h1>
                </a>
                <div class="footer__social-networks">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div class="column">
                <nav>
                    <ul class="footer__navbar-list column">
                        <li>
                            <div class="title">
                                <h5 class="footer-column__title">Страницы</h5>
                            </div>
                        </li>
                        <li><a href="index.html">Домой</a></li>
                        <li><a href="">Проект</a></li>
                        <li><a href="blog.html">Блог</a></li>
                    </ul>
                </nav>
            </div>
            <div class="column">
                <div class="title">
                    <h5 class="footer-column__title">Контакты</h5>
                </div>
                <p>55 East Birchwood Ave. Brooklyn, New York 11201 </p>
                <p>contact@interno.com</p>
                <p>(123) 456 - 7890</p>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BlogDetailsComponent',

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

<style scoped>

</style>
