<template>
  <div class="container">
    <div class="blog-details__box">
      <div
        class="blog-details__blog"
        v-for="article in sortedArray"
        :key="article.id"
      >
        <div class="blog-details__detais">
          <div class="blog-details__details-content">
            <div class="blog-details__details-subcontent">
              <div class="blog-details__details-subSubcontent">
                <div class="blog-details__details-title">
                  {{ article.title }}
                </div>
                <div>
                  <img
                    :src="article.src"
                    :alt="article.alt"
                    class="blog-details__details-img"
                  >
                </div>
              </div>
              <div class="blog-details__details-subcontentDate">
                <div class="blog-details__details-date">
                  {{ article.date }}
                </div>
                <div class="blog-details__details-bradcrumbs">
                  {{ article.link }}
                </div>
              </div>
            </div>
            <div class="blog-details__details-text">
              {{ article.firstpargth }}<br><br>
              {{ article.secondpargth }}
            </div>
          </div>
        </div>
        <div class="blog-details__details-quotes">
          <div class="blog-details__details-quotesContent">
            <div class="blog-details__details-quotesContentSymbol">
              <svg
                width="74"
                height="56"
                viewBox="0 0 74 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.7516 0.600003C63.1516 0.600003 66.7516 2.06667 69.5516 5C72.2182 7.93334 73.5516 11.8667 73.5516 16.8C73.5516 25.4667 70.6849 33 64.9516 39.4C59.0849 45.8 52.0849 51.0667 43.9516 55.2L41.9516 51.8C45.2849 49.6667 48.4182 46.9333 51.3516 43.6C54.1516 40.2667 56.3516 36.6667 57.9516 32.8L52.3516 28.6C50.0849 27.1333 48.2182 25.1333 46.7516 22.6C45.2849 20.2 44.5516 17.8667 44.5516 15.6C44.5516 11.3333 45.8849 7.73334 48.5516 4.8C51.0849 2 54.4849 0.600003 58.7516 0.600003ZM17.5516 0.599999C21.9516 0.6 25.5516 2.06667 28.3516 5C31.0182 7.93333 32.3516 11.8667 32.3516 16.8C32.3516 25.4667 29.4849 33 23.7516 39.4C17.8849 45.8 10.8849 51.0667 2.75156 55.2L0.751558 51.8C4.08489 49.6667 7.21823 46.9333 10.1516 43.6C12.9516 40.2667 15.1516 36.6667 16.7516 32.8L11.1516 28.6C8.88489 27.1333 7.01823 25.1333 5.55156 22.6C4.08489 20.2 3.35156 17.8667 3.35156 15.6C3.35156 11.3333 4.6849 7.73333 7.35156 4.8C9.8849 2 13.2849 0.599999 17.5516 0.599999Z"
                  fill="#CDA274"
                />
              </svg>
            </div>
            <div class="blog-details__details-quotesContentText">
              {{ article.quote }}
            </div>
          </div>
        </div>
        <div class="blog-details__details-content">
          <div class="blog-details__details-subcontent">
            <div class="blog-details__details-subcontentPart2">
              <div class="blog-details__details-title">
                {{ article.subtitle }}
              </div>
            </div>
            <div class="blog-details__details-text">
              {{ article.thirdpargth }}
            </div>
            <div
              class="blog-details__details-points"
              v-for="numberandtext in numbersandtexts"
              :key="numberandtext.id"
            >
              <div class="blog-details__details-point">
                <div class="blog-details__details-pointNumber">
                  {{ numberandtext.number }}
                </div>
                <div class="blog-details__details-text">
                  {{ numberandtext.text }}
                </div>
              </div>
            </div>
          </div>
          <div class="blog-details__details-subcontent">
            <div class="blog-details__details-subSubcontent">
              <div>
                <img
                  class="blog-details__details-subSubcontentImg"
                  :src="article.secondsrc"
                  :alt="article.alt"
                >
              </div>
              <div class="blog-details__details-text">
                {{ article.thirdpargth }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blog-details__sidebar">
        <div class="blog-details__sidebar-tags">
          <div class="blog-details__sidebar-title">
            {{ title }}
          </div>
          <div class="blog-details__sidebar-content">
            <div
              v-for="button in buttons"
              :key="button.id"
              class="blog-details__sidebar-contentBlock"
            >
              <div class="blog-details__sidebar-button">
                <label
                  data-id="button.id"
                >
                  <input
                    :data-id="button.id"
                    @click="filters"
                    class="blog-details__input"
                    type="radio"
                    name="radio"
                  >
                  {{ button.text }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '@/assets/img/content/Photo-blog.jpg'
import image2 from '@/assets/img/content/PhotoBlog2.png'
import image3 from '@/assets/img/content/PhotoBlog1.png'
import image5 from '@/assets/img/content/Photo2Block2.jpg'
import image6 from '@/assets/img/content/Photo3Block2.jpg'
import image7 from '@/assets/img/content/Photo4Block2.jpg'
import image8 from '@/assets/img/content/Photo1Block2.jpg'

export default {
  name: 'BlogDetails',
  data () {
    return {
      sortedArray: [
        {
          id: 'kitchen',
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
        }
      ],
      articles: [
        {
          id: 'kitchen',
          title: 'Создадим лучший макет перепланировки',
          date: '26 Декабрь,2022',
          link: 'Интерьер / Домой / Декор',
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
          id: 'bedroom',
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
          id: 'building',
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
          id: 'architecture',
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
          id: 'kitchen-planning',
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
      ],
      numbersandtexts: [
        {
          number: '1',
          text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
        },
        {
          number: '2',
          text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
        },
        {
          number: '3',
          text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
        }
      ],
      buttons: [
        {
          id: 'kitchen',
          text: 'Кухня'
        },
        {
          id: 'bedroom',
          text: 'Спальня'
        },
        {
          id: 'building',
          text: 'Здание'
        },
        {
          id: 'architecture',
          text: 'Архитектура'
        },
        {
          id: 'kitchen-planning',
          text: 'Планировка'
        }
      ],
      title: 'Тэги'
    }
  },

  mounted () {
  },

  methods: {
    // sortArticles (e) {
    //   console.log(e.target)
    //   if (document.querySelector('.blog-details__sidebar-button:active') !== null) {
    //     document.querySelector('.blog-details__sidebar-button:active').classList.remove('blog-details__sidebar-button')
    //   }
    //   const divButton = e.target.closest('.blog-details__sidebar-button:active')
    //   divButton.classList.add('blog-details__sidebar-button')
    // },
    filters (e) {
      this.sortedArray = this.articles.filter(article => article.id === e.target.dataset.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
