import Vue from 'vue'
import Router from 'vue-router'
import BlogViewComponent from '@/components/BlogViewComponent'
import PostViewComponent from '@/components/PostViewComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/blog/',
      name: 'BlogViewComponent',
      component: BlogViewComponent
    },
    {
      path: '/blog/:slug',
      name: 'PostViewComponent',
      component: PostViewComponent
    }
  ]
})