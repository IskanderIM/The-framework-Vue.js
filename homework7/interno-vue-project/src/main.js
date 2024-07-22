import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Импорт CSS-файлов Bootstrap и BootstrapVue (порядок важен)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Сделайте BootstrapVue доступным во всем проекте
Vue.use(BootstrapVue)
// При необходимости установите плагин компонентов значков BootstrapVue
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  BootstrapVue,
  IconsPlugin,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
