import Vue from 'vue'
import VueRouter from 'vue-router'

// import HomeComponent from '../components/HomeComponent.vue'
// import BlogComponent from '../components/BlogComponent.vue'
// import BlogDetailsComponent from '../components/BlogDetailsComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    patch: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../components/HomeComponent.vue')
    // component: HomeComponent
  },
  {
    patch: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "about" */ '../components/BlogComponent.vue')
    // component: BlogComponent
  },
  {
    patch: '/blog-details',
    name: 'blog-details',
    component: () => import(/* webpackChunkName: "about" */ '../components/BlogDetailsComponent.vue')
    // component: BlogDetailsComponent
  }
]

const router = new VueRouter({
  routes
})

export default router
