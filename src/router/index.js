import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
    //表示每次加载新页面都为0
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})