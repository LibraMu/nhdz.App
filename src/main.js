// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vux from 'vux'
import App from './App'
import router from './router'
// import axios from 'axios';
import Vuelazyload from 'vue-lazyload'
import './assets/icon/iconfont.css'
import store from './store'
import './mock'

Vue.use(Vuelazyload,{loading:'../static/bg.jpg'})

Vue.config.productionTip = false

// Vue.prototype.$http = axios;

Vue.prototype.HOST = '/api'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
