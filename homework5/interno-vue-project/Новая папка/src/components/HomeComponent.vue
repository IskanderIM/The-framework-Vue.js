<template>
  <div>
    <header class="header">
        <div class="header__body">
            <router-link to="home" href="index.html" class="home-link">
                <img class="home-link-logo" src="../assets/img/Logo.svg" alt="Interno">
                <h1 class="home-link-title">Interno</h1>
            </router-link>
            <nav class="navbar">
                    <ul class="navbar-list">
                        <li><router-link to="home">Домой</router-link></li>
                        <li><router-link href="">Проект</router-link></li>
                        <li><router-link to="blog">Блог</router-link></li>
                    </ul>
            </nav>
        </div>
    </header>
    <section class="banner__section">
        <div class="banner-card card text-white">
            <img src="../assets/img/Banner.jpg" class="banner-card__img" alt="...">
            <div class="card-img-overlay">
                <div class="title">
                    <h2 class="title__banner">Пусть ваш дом <br>будет уникальным</h2>
                </div>
                <div class="subtitle">
                    <p class="subtitle__banner">Существует много вариаций Lorem Ipsum, <br>которые можно использовать</p>
                </div>
                <button class="banner__button">Начать
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43529L14.7232 8.29844M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
    <section class="projects__section">
        <div class="title">
            <h3 class="projects__title">Следите за нашими проектами</h3>
        </div>
        <div class="subtitle">
            <p class="projects__subtitle">Хорошо известно, что читатель будет отвлекаться <br>на читабельный контент страницы </p>
        </div>
        <div class="projects__cards">
            <div class="card">
                <img src="../assets/img/Projects/Project1.jpg" class="card-img-one card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-body__text">
                        <div class="title">
                            <h5 class="card-title">Современная кухня</h5>
                        </div>
                        <div class="subtitle">
                            <p class="card-text">Декор / Планировка</p>
                        </div>
                    </div>
                    <a href="#" class="card__btn_dark-big btn btn-primary">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/Projects/Project2.jpg" class="card-img-two card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-body__text">
                        <div class="title">
                            <h5 class="card-title">Современная кухня</h5>
                        </div>
                        <div class="subtitle">
                            <p class="card-text">Декор / Планировка</p>
                        </div>
                    </div>
                    <a href="#" class="card__btn_dark-big btn btn-primary">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/Projects/Project3.jpg" class="card-img-three card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-body__text">
                        <div class="title">
                            <h5 class="card-title">Современная кухня</h5>
                        </div>
                        <div class="subtitle">
                            <p class="card-text">Декор / Планировка</p>
                        </div>
                    </div>
                    <a href="#" class="card__btn_dark-big btn btn-primary">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/Projects/Project4.jpg" class="card-img-four card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-body__text">
                        <div class="title">
                            <h5 class="card-title">Современная кухня</h5>
                        </div>
                        <div class="subtitle">
                            <p class="card-text">Декор / Планировка</p>
                        </div>
                    </div>
                    <a href="#" class="card__btn_dark-big btn btn-primary">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="counter__section">
        <div class="counter__row">
            <div class="counter__column">
                <div class="item-counter">
                    <h2 class="item-counter__number">12</h2>
                    <p class="item-counter__text">Лет опыта</p>
                </div>
            </div>
            <div class="counter__line"></div>
            <div class="counter__column">
                <div class="item-counter">
                    <h2 class="item-counter__number">85</h2>
                    <p class="item-counter__text">Успешных проектов</p>
                </div>
            </div>
            <div class="counter__line"></div>
            <div class="counter__column">
                <div class="item-counter">
                    <h2 class="item-counter__number">15</h2>
                    <p class="item-counter__text">Проектов в работе</p>
                </div>
            </div>
            <div class="counter__line"></div>
            <div class="counter__column">
                <div class="item-counter">
                    <h2 class="item-counter__number">95</h2>
                    <p class="item-counter__text">Счастливых клиентов</p>
                </div>
            </div>
        </div>
    </section>
    <section class="blog__section">
        <div class="title">
            <h3 class="title__blog">Статьи & <br>Новости</h3>
        </div>
        <div class="subtitle">
            <p class="subtitle__blog">Хорошо известно, что читатель будет отвлекаться <br>на читабельный контент страницы </p>
        </div>
        <div class="blog">
            <div class="card blog__card">
                <div class="card-img-top__blog">
                    <img src="../assets/img/Blog/Blog1.jpg" class="img__blog" alt="...">
                    <div class="text-over-image">
                        <p class="card-text">Дизайн кухни</p>
                    </div>
                </div>

                <div class="card-body__blog">
                    <div class="title">
                        <h5 class="blog-card-title">Создадим лучший макет перепланировки</h5>
                    </div>
                    <div class="subtitle blog-card__subtitle">
                        <p>2022-12-26</p>
                        <a href="#" class="card__btn_dark-big card__btn_dark-small btn btn-primary">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="card blog__card bg-beige">
                <div class="card-img-top__blog">
                    <img src="../assets/img/Blog/Blog2.jpg" class="img__blog" alt="...">
                    <div class="text-over-image">
                        <p class="card-text">Дизайн для жизни</p>
                    </div>
                </div>

                <div class="card-body__blog">
                    <div class="title">
                        <h5 class="blog-card-title">Лучшие интерьерные идеи по низкой цене</h5>
                    </div>

                    <div class="subtitle blog-card__subtitle">
                        <p>2022-12-22</p>
                        <a href="#" class="card__btn_dark-big card__btn_dark-small btn btn-primary bg-white">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="card blog__card">
                <div class="card-img-top__blog">
                    <img src="../assets/img/Blog/Blog3.jpg" class="img__blog" alt="...">
                    <div class="text-over-image">
                        <p class="card-text">Дизайн Интерьера</p>
                    </div>
                </div>

                <div class="card-body__blog">
                    <div class="title">
                        <h5 class="blog-card-title">Лучшие интерьерные решения для офисов</h5>
                    </div>

                    <div class="subtitle blog-card__subtitle">
                        <p>2022-12-25</p>
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
    <footer class="footer">
        <div class="row">
            <div class="column">
                <a href="/" class="home-link">
                    <img src="../assets/img/Logo.svg" alt="Interno">
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
import BlogComponent from './BlogComponent.vue'

export default {
  name: 'HomeComponent',
  components: {
    BlogComponent,
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style src="../assets/css/reset.css"></style>
<style src="../assets/css/style.css"></style>
