<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="header__left">
          <div class="header__left_block-logo">
            <router-link to="/">
              <img
                src="../../assets/img/logos/Logo.png"
                alt="Logo"
                class="logo"
              >
            </router-link>
            <router-link class="siteName" to="/">
              Interno
            </router-link>
          </div>
        </div>
        <div class="header__right">
          <div class="header__menu">
            <router-link
              to="/"
              class="header__menu_link"
            >
              Домой
            </router-link>
            <router-link
              to="/blog"
              class="header__menu_link"
            >
              Блог
            </router-link>
            <router-link
              to="/project-page"
              class="header__menu_link"
            >
              Проект
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderBlock',
  components: {

  }
}
</script>

<style lang="sass" module>
</style>
