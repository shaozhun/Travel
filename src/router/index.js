import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/other/Login'
import About from '@/pages/other/About'
import Recent from '@/pages/other/Recent'
import User from '@/pages/other/User'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Search from '@/pages/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/recent',
      name: 'Recent',
      component: Recent
    }, {
      path: '/user',
      name: 'User',
      component: User
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }],
  scrollBehavior (to, from, savePosition) {
    return {x: 0, y: 0}
  }
})
