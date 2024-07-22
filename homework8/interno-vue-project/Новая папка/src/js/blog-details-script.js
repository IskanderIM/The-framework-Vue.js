Vue.component('change-kitchen', {
  data () {
    return {
      kitchens: [
        {
          titleOne: 'kitchens Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        },
        {
          titleOne: 'kitchens Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        }
      ]
    }
  },
  template: `
    <div>
    <article class="" v-for="(article, index) in kitchens" :key="index">
                    <header class="title">
                        <h2 class="blog-details__articles-title">{{article.titleOne}}</h2>
                    </header>
                    <article>
                        <img class="blog-details__article-img" :src="article.imgSrcOne" alt="">
                        <div class="subtitle blog-details__banner-subtitle">
                            <p>{{article.date}}</p>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a :href="article.breadcrumbOneHref">{{article.breadcrumbOne}}</a></li>
                                <li class="breadcrumb-item"><a :href="article.breadcrumbTwoHref">{{article.breadcrumbTwo}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{article.breadcrumbThree}}</li>
                                </ol>
                            </nav>
                        </div>
                        <p class="text-article">{{article.textArticleOne}}</p>      
                    </article>
                    <article class="quotes">
                        <h2 class="quotes-title">{{article.quotesTitle}}</h2>
                        <p class="quotes-text">{{article.quotesTextOne}}<br>{{article.quotesTextTwo}}</p>
                    </article>
                    <article>
                        <header class="title">
                            <h2 class="blog-details__articles-title">{{article.titleTwo}}</h2>
                        </header>
                        <p class="text-article">{{article.textArticleTwo}}</p>
                        <ol class="text-article list-article">
                            <li v-for="item in article.list" :key="item.listId">{{item.listText}}</li>
                        </ol>
                        <img class="blog-details__article-img" :src="article.imgSrcTwo" alt="">
                        <p class="text-article">{{article.textArticleThree}}</p>
                    </article>
                </article>
                </div>
  `
})
Vue.component('change-bedroom', {
  data () {
    return {
      bedrooms: [
        {
          titleOne: 'bedrooms Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        },
        {
          titleOne: 'bedrooms Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        }
      ]
    }
  },
  template: `
    <div>
    <article class="" v-for="(article, index) in bedrooms" :key="index">
                    <header class="title">
                        <h2 class="blog-details__articles-title">{{article.titleOne}}</h2>
                    </header>
                    <article>
                        <img class="blog-details__article-img" :src="article.imgSrcOne" alt="">
                        <div class="subtitle blog-details__banner-subtitle">
                            <p>{{article.date}}</p>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a :href="article.breadcrumbOneHref">{{article.breadcrumbOne}}</a></li>
                                <li class="breadcrumb-item"><a :href="article.breadcrumbTwoHref">{{article.breadcrumbTwo}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{article.breadcrumbThree}}</li>
                                </ol>
                            </nav>
                        </div>
                        <p class="text-article">{{article.textArticleOne}}</p>      
                    </article>
                    <article class="quotes">
                        <h2 class="quotes-title">{{article.quotesTitle}}</h2>
                        <p class="quotes-text">{{article.quotesTextOne}}<br>{{article.quotesTextTwo}}</p>
                    </article>
                    <article>
                        <header class="title">
                            <h2 class="blog-details__articles-title">{{article.titleTwo}}</h2>
                        </header>
                        <p class="text-article">{{article.textArticleTwo}}</p>
                        <ol class="text-article list-article">
                            <li v-for="item in article.list" :key="item.listId">{{item.listText}}</li>
                        </ol>
                        <img class="blog-details__article-img" :src="article.imgSrcTwo" alt="">
                        <p class="text-article">{{article.textArticleThree}}</p>
                    </article>
                </article>
                </div>
  `
})
Vue.component('change-building', {
  data () {
    return {
      buildings: [
        {
          titleOne: 'building Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        },
        {
          titleOne: 'building Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        }
      ]
    }
  },
  template: `
    <div>
    <article class="" v-for="(article, index) in buildings" :key="index">
                    <header class="title">
                        <h2 class="blog-details__articles-title">{{article.titleOne}}</h2>
                    </header>
                    <article>
                        <img class="blog-details__article-img" :src="article.imgSrcOne" alt="">
                        <div class="subtitle blog-details__banner-subtitle">
                            <p>{{article.date}}</p>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a :href="article.breadcrumbOneHref">{{article.breadcrumbOne}}</a></li>
                                <li class="breadcrumb-item"><a :href="article.breadcrumbTwoHref">{{article.breadcrumbTwo}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{article.breadcrumbThree}}</li>
                                </ol>
                            </nav>
                        </div>
                        <p class="text-article">{{article.textArticleOne}}</p>      
                    </article>
                    <article class="quotes">
                        <h2 class="quotes-title">{{article.quotesTitle}}</h2>
                        <p class="quotes-text">{{article.quotesTextOne}}<br>{{article.quotesTextTwo}}</p>
                    </article>
                    <article>
                        <header class="title">
                            <h2 class="blog-details__articles-title">{{article.titleTwo}}</h2>
                        </header>
                        <p class="text-article">{{article.textArticleTwo}}</p>
                        <ol class="text-article list-article">
                            <li v-for="item in article.list" :key="item.listId">{{item.listText}}</li>
                        </ol>
                        <img class="blog-details__article-img" :src="article.imgSrcTwo" alt="">
                        <p class="text-article">{{article.textArticleThree}}</p>
                    </article>
                </article>
                </div>
  `
})
Vue.component('change-architecture', {
  data () {
    return {
      architectures: [
        {
          titleOne: 'architecture Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        },
        {
          titleOne: 'architecture Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        }
      ]
    }
  },
  template: `
    <div>
    <article class="" v-for="(article, index) in architectures" :key="index">
                    <header class="title">
                        <h2 class="blog-details__articles-title">{{article.titleOne}}</h2>
                    </header>
                    <article>
                        <img class="blog-details__article-img" :src="article.imgSrcOne" alt="">
                        <div class="subtitle blog-details__banner-subtitle">
                            <p>{{article.date}}</p>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a :href="article.breadcrumbOneHref">{{article.breadcrumbOne}}</a></li>
                                <li class="breadcrumb-item"><a :href="article.breadcrumbTwoHref">{{article.breadcrumbTwo}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{article.breadcrumbThree}}</li>
                                </ol>
                            </nav>
                        </div>
                        <p class="text-article">{{article.textArticleOne}}</p>      
                    </article>
                    <article class="quotes">
                        <h2 class="quotes-title">{{article.quotesTitle}}</h2>
                        <p class="quotes-text">{{article.quotesTextOne}}<br>{{article.quotesTextTwo}}</p>
                    </article>
                    <article>
                        <header class="title">
                            <h2 class="blog-details__articles-title">{{article.titleTwo}}</h2>
                        </header>
                        <p class="text-article">{{article.textArticleTwo}}</p>
                        <ol class="text-article list-article">
                            <li v-for="item in article.list" :key="item.listId">{{item.listText}}</li>
                        </ol>
                        <img class="blog-details__article-img" :src="article.imgSrcTwo" alt="">
                        <p class="text-article">{{article.textArticleThree}}</p>
                    </article>
                </article>
                </div>
  `
})
Vue.component('change-layout', {
  data () {
    return {
      layouts: [
        {
          titleOne: 'layout Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        },
        {
          titleOne: 'layout Создадим лучший макет перепланировки',
          imgSrcOne: 'img/Blog-details/blog-details-content-1.jpg',
          date: '26 Декабрь, 2022',
          breadcrumbOne: 'Интерьер',
          breadcrumbOneHref: '#',
          breadcrumbTwo: 'Домой',
          breadcrumbTwoHref: '#',
          breadcrumbThree: 'Декор',
          textArticleOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quotesTitle: '”',
          quotesTextOne: 'Какая-то умная и красивая',
          quotesTextTwo: 'цитата',
          titleTwo: 'Design sprints are great',
          textArticleTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          imgSrcTwo: 'img/Blog-details/blog-details-content-2.jpg',
          textArticleThree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
          list: [
            {
              listId: 1,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 2,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            },
            {
              listId: 3,
              listText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            }
          ]
        }
      ]
    }
  },
  template: `
    <div>
    <article class="" v-for="(article, index) in layouts" :key="index">
                    <header class="title">
                        <h2 class="blog-details__articles-title">{{article.titleOne}}</h2>
                    </header>
                    <article>
                        <img class="blog-details__article-img" :src="article.imgSrcOne" alt="">
                        <div class="subtitle blog-details__banner-subtitle">
                            <p>{{article.date}}</p>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a :href="article.breadcrumbOneHref">{{article.breadcrumbOne}}</a></li>
                                <li class="breadcrumb-item"><a :href="article.breadcrumbTwoHref">{{article.breadcrumbTwo}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{article.breadcrumbThree}}</li>
                                </ol>
                            </nav>
                        </div>
                        <p class="text-article">{{article.textArticleOne}}</p>      
                    </article>
                    <article class="quotes">
                        <h2 class="quotes-title">{{article.quotesTitle}}</h2>
                        <p class="quotes-text">{{article.quotesTextOne}}<br>{{article.quotesTextTwo}}</p>
                    </article>
                    <article>
                        <header class="title">
                            <h2 class="blog-details__articles-title">{{article.titleTwo}}</h2>
                        </header>
                        <p class="text-article">{{article.textArticleTwo}}</p>
                        <ol class="text-article list-article">
                            <li v-for="item in article.list" :key="item.listId">{{item.listText}}</li>
                        </ol>
                        <img class="blog-details__article-img" :src="article.imgSrcTwo" alt="">
                        <p class="text-article">{{article.textArticleThree}}</p>
                    </article>
                </article>
                </div>
  `
})
