import Vue from 'vue'
import Vuex from 'vuex'

import image1 from '@/assets/img/content/Project/Project1.jpg'
import image2 from '@/assets/img/content/Project/Project2.jpg'
import image3 from '@/assets/img/content/Project/Project3.jpg'
import image4 from '@/assets/img/content/Project/Project4.jpg'
import image5 from '@/assets/img/content/Project/Project5.jpg'
import image6 from '@/assets/img/content/Project/Project6.jpg'
import image7 from '@/assets/img/content/Project/Project7.jpg'
import image8 from '@/assets/img/content/Project/Project8.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  getters: {
    articles (state) {
      return state.articles
    },
    // Геттер для последних пяти статей
    latestArticles (state) {
      return [...state.articles].slice(-4).reverse() // Последние 4 статьи в обратном порядке
    }
  },
  mutations: {
    SET_CART (state, articles) {
      state.articles = articles
    },
    ADD_CART (state, article) {
      state.articles.push(article)
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('SET_CART', [
            {
              id: '1',
              tag: 'kitchen',
              tagName: 'Кухня',
              title: 'Минималистичная спальня',
              date: '26 Декабрь,2022',
              link: 'Декор / Планировка',
              firstpargth: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image1,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image2
            },
            {
              id: '2',
              tag: 'kitchen',
              tagName: 'Кухня',
              title: 'Минималистичная спальня',
              date: '26 Декабрь,2022',
              link: 'Декор / Планировка',
              firstpargth: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image2,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image2
            },
            {
              id: '3',
              tag: 'kitchen',
              tagName: 'Кухня',
              title: 'Классическая спальня',
              date: '26 Декабрь,2022',
              link: 'Декор / Планировка',
              firstpargth: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image3,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image2
            },
            {
              id: '4',
              tag: 'kitchen',
              tagName: 'Кухня',
              title: 'Современная спальня',
              date: '26 Декабрь,2022',
              link: 'Декор / Планировка',
              firstpargth: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image4,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image2
            },
            {
              id: '5',
              tag: 'kitchen',
              tagName: 'Кухня',
              title: 'Минималистичный прикроватный столик',
              date: '26 Декабрь,2022',
              link: 'Декор / Планировка',
              firstpargth: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image5,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image2
            },
            {
              id: '6',
              tag: 'kitchen',
              tagName: 'Кухня',
              title: 'Столы и столики',
              date: '26 Декабрь,2022',
              link: 'Декор / Планировка',
              firstpargth: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image6,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image2
            },
            {
              id: '7',
              tag: 'kitchen',
              tagName: 'Кухня',
              title: 'Современная спальня',
              date: '26 Декабрь,2022',
              link: 'Декор / Планировка',
              firstpargth: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image7,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image2
            },
            {
              id: '8',
              tag: 'kitchen',
              tagName: 'Кухня',
              title: 'Современная спальня',
              date: '26 Декабрь,2022',
              link: 'Декор / Планировка',
              firstpargth: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image8,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image2
            },
            {
              id: '9',
              tag: 'kitchen',
              tagName: 'Кухня',
              title: 'Создадим лучший макет перепланировки',
              date: '26 Декабрь,2022',
              link: 'Интерьер / Домой / Декор',
              firstpargth: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image1,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image2
            },
            {
              id: '10',
              tag: 'bedroom',
              tagName: 'Спальня',
              title: 'Недорогие новейшие идеи дизайна интерьера.',
              date: '22 Декабрь,2022',
              link: 'Интерьер / Домой / Декор',
              firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image5,
              alt: 'photo',
              quote: 'Какая-то умная и красивая цитата',
              subtitle: 'Design sprints are great',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image6
            },
            {
              id: '11',
              tag: 'building',
              tagName: 'Здание',
              title: 'Здание, обычно крытое и имеющее стены сооружение, возводимое для постоянного использования.',
              date: '20 Декабрь,2022',
              link: 'Страна / Город / Здание',
              firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image7,
              alt: 'photo',
              quote: 'Хорошие здания строят хорошие люди, а все проблемы решаются хорошим проектированием.',
              subtitle: 'Мы формируем наши здания, а затем они формируют нас.',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image8
            },
            {
              id: '12',
              tag: 'architecture',
              tagName: 'Архитектура',
              title: 'В нашей статье подчеркивается важность планировки кухни для содействия соблюдению потребителями правил гигиены питания.',
              date: '29 Декабрь,2022',
              link: 'Страна / Город / Архитектура',
              firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image8,
              alt: 'photo',
              quote: 'Архитектура — это визуальное искусство, и здания говорят сами за себя.',
              subtitle: 'Архитектура со всего мира от современных архитекторов, включая ультрасовременные дома, небоскребы, культурные здания, отели, аэропорты, квартиры.',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image6
            },
            {
              id: '13',
              tag: 'kitchen-planning',
              tagName: 'Планировка',
              title: 'Планировка кухни: выбор правильной планировки',
              date: '25 Декабрь,2022',
              link: 'Интерьер / Дом / Кухня',
              firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.',
              secondpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              src: image2,
              alt: 'photo',
              quote: 'Кухня — это сердце дома.',
              subtitle: 'Кухни должны быть спроектированы с учетом того, что действительно важно — веселья, еды и жизни.',
              thirdpargth: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
              firstnumber: '1',
              secondnumber: '2',
              thirdnumber: '3',
              fourthpargth: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              secondsrc: image3
            }
          ])
          resolve()
        }, 500)
      })
    }
  },
  modules: {}
})
