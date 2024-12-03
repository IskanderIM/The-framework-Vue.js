import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/views/HomeView.vue'
import ErrorView from '@/components/views/ErrorView.vue'
// import BlogView from '../views/BlogView.vue'
// import BlogDetailsView from '../views/BlogDetailsView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/views/BlogView.vue')
    // component: BlogView
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: () => import(/* webpackChunkName: "about" */ '../components/views/BlogDetailsView.vue')
    // component: BlogDetailsView
  },
  {
    path: '/project-page/:page?',
    name: 'project-page',
    component: () => import(/* webpackChunkName: "about" */ '../components/views/ProjectView.vue')
    // component: ProjectView
  },
  {
    path: '/404',
    name: 'error',
    component: ErrorView
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
