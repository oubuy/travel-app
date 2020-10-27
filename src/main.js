 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import store from './store/index.js'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

// import "babel-prolify"  兼容低版本浏览器白屏问题

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
