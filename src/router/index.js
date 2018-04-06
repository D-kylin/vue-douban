import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from 'src/page/home'
import Top250 from 'src/page/top250'
import UserInfo from 'src/page/user'
import MyMovie from 'src/page/movie'
import MovieDetial from 'src/page/subject'
import MovieDetialFromList from 'src/page/subjectFromList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/top250',
        name: 'Top250',
        component: Top250
    },
    {
        path: '/userinfo',
        name: 'UserInfo',
        component: UserInfo
    },
    {
        path: '/moive',
        name: 'Moive',
        component: MyMovie
    },
    {
        path: '/moive/:id',
        name: 'MovieDetial',
        component: MovieDetial
    },
    {
        path: '/moive_2/:id',
        name: 'MovieDetialFromList',
        component: MovieDetialFromList
    }
  ]
})
