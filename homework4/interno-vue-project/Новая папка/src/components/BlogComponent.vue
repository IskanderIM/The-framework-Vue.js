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
            <img src="img/Blog/Blog-baner-img.jpg" class="blog__banner-card__img" alt="...">
            <div class="blog__card-img-overlay">
                <div class="title">
                    <h3 class="title__blog">Статьи & <br>Новости</h3>
                </div>
                <div class="subtitle">
                    <p class="subtitle__blog">Домой / <br>Блог</p>
                </div>
            </div>
        </div>
    </section>
    <section class="last-post__section">
        <div class="last-post">
            <div class="title">
                <h3 class="title__blog last-post__title">Последний пост</h3>
            </div>
            <div class="card last-post__card row">
                <div class="last-post__card-img-top">
                    <img src="img/Blog/Blog-last-post.jpg" class="last-post__card-img-top__img-blog" alt="...">
                </div>

                <div class="card-body__blog">
                    <div class="title">
                        <h5 class="blog-card-title">Low Cost Latest Invented Interior Designing Ideas</h5>
                    </div>
                    <p>С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице.</p>
                    <div class="subtitle last-post__blog-card__subtitle">
                        <p>2022-12-26</p>
                        <a href="#" class="card__btn_dark-big card__btn_dark-small btn btn-primary">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="blog__section">
        <div class="title blog-script__title">
            <h3 class="title__blog text-start">Статьи & Новости</h3>
        </div>

        <div class="blog blog__articles">
            <div class="card blog__card" v-for="article in articles" :key="article.id">
                <div class="card-img-top__blog">
                    <img :src="article.src" class="img__blog" alt="...">
                    <div class="text-over-image">
                        <p class="card-text">{{ article.textOverImage }}</p>
                    </div>
                </div>

                <div class="card-body__blog">
                    <div class="title">
                        <h5 class="blog-card-title">{{ article.articleTitle }}</h5>
                    </div>
                    <div class="subtitle blog-card__subtitle">
                        <p>{{ article.articleDate }}</p>
                        <a href="#" class="card__btn_dark-big card__btn_dark-small btn btn-primary">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="blog-articles__switch-buttons">
                <a class="blog-articles__switch-button btn btn-primary" v-for="(item, index) in switchButtons" :key="index">
                    {{ item }}
                </a>
            </div>
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

<script src="https://kit.fontawesome.com/552f7a0d6f.js" crossorigin="anonymous"></script>

<script>
export default {
  name: 'BlogComponent',

  data() {
    return {
        articles: [
            {
                src: 'img/Blog/Blog1.jpg',
                textOverImage: 'Дизайн кухни',
                articleTitle: 'Создадим лучший макет перепланировки',
                articleDate: '2022-12-26',
            },
            {
                src: 'img/Blog/Blog2.jpg',
                textOverImage: 'Дизайн для жизни',
                articleTitle: 'Лучшие интерьерные идеи по низкой цене',
                articleDate: '2022-12-22',
            },
            {
                src: 'img/Blog/Blog3.jpg',
                textOverImage: 'Дизайн Интерьера',
                articleTitle: 'Лучшие интерьерные решения для офисов',
                articleDate: '2022-12-25',
            },
            {
                src: 'img/Blog/Blog4.jpg',
                textOverImage: 'Дизайн кухни',
                articleTitle: 'Создадим лучший макет перепланировки',
                articleDate: '2022-12-26',
            },
            {
                src: 'img/Blog/Blog5.jpg',
                textOverImage: 'Дизайн для жизни',
                articleTitle: 'Лучшие интерьерные идеи по низкой цене',
                articleDate: '2022-12-22',
            },
            {
                src: 'img/Blog/Blog6.jpg',
                textOverImage: 'Дизайн Интерьера',
                articleTitle: 'Лучшие интерьерные решения для офисов',
                articleDate: '2022-12-25',
            },
        ],
        switchButtons: ['01', '02', '03', '04']
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
