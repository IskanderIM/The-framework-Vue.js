<template>
  <div>
    <div class="error-page">
      <b-container class="error-page__container bv-example-row mb-3">
        <b-row class="error-page__banner" cols="2">
          <b-col class="error-page__banner-left-col" cols="6">
            <h1 class="error-page__title">404</h1>
            <p class="error-page__subtitle">Приносим извинения, но страница, которую вы искали, не найдена</p>
            <router-link to="/" class="error-page__home-link button" >Домой
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
            </router-link>
          </b-col>
          <b-col class="error-page__banner-right-col" cols="5">
            <img class="error-page__right-img" src="../../assets/img/content/Error-page.jpg" alt="">
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorView',

  components: {
  },
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
<style lang="scss">
.error-page {
  margin-top: 45px;
  &__container {
    max-width: 100%;
  }
  &__banner {
    align-items: center;
    gap: 81px;
  }
  &__banner-left-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    width: 395px;
    height: 172px;
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 250px;
    line-height: 125%;
    /* or 312px */
    display: flex;
    align-items: center;
    color: #CDA274;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  &__subtitle {
    width: 569px;
    height: 139px;
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 150%;
    /* or 52px */
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #292F36;
  }
  &__home-link {
    display: flex;
    padding: 26px 49px 26px 48px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    background: #292F36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    color: #FFFFFF;
    text-align: center;
    font-family: 'Jost';
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }
  &__home-link:hover {
    background: #ffffff00;
    color: #292F36;
    box-shadow: 0 0 0 2px #F4F0EC;
  }
  &__right-img {
    max-height: 87vh;
    background: #EBEBEB;
    border-radius: 0px 0px 0px 353px;
  }
}
</style>
