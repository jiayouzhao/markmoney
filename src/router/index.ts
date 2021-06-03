import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
//import Home from '../views/Home.vue'
import Tag from '@/views/Tag.vue'
import Writer from '@/views/Writer.vue'
import Statistics from '@/views/Statistics.vue'
import Warn from '@/views/Warn.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path:'/',
        redirect:'/tag'    
    },
  {
    path: '/tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/writer',
    name: 'Writer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Writer
  },
  {
      path:'/statistics',
      name:'Statistics',
      component: Statistics
  },
  {
      path:'*',
      name:'Warn',
      component: Warn
  }
]

const router = new VueRouter({
  routes
})

export default router
