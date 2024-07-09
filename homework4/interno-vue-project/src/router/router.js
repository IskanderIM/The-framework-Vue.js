import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '../components/HomeComponent.vue'
import BlogComponent from '../components/BlogComponent.vue'
import BlogDetailsComponent from '../components/BlogDetailsComponent.vue'

Vue.use(Router)

const routes = [
  {
    patch: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    patch: '/blog',
    name: 'blog',
    component: BlogComponent
  },
  {
    patch: '/blog-details',
    name: 'blog-details',
    component: BlogDetailsComponent
  }
]

export default new Router({ routes })
