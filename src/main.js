import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueClipBoard from 'vue-clipboard2'

Vue.use(VueClipBoard)
//use：将第三方模块 注入到Vue实例对象中的方法
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
