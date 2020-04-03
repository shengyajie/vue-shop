import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式
import './assets/css/global.css'
// 导入字体图标
import './assets/font/iconfont.css'
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL='http://timemeetyou.com:8889/api/private/v1/'
// 请求拦截
axios.interceptors.request.use(config=>{
  console.log(config)
  // 为请求头对象，添加Token验证的Authorization字段
  config.headers.Authorization=window.sessionStorage.getItem("token")
  //在最后必须return config
  return config
})

Vue.prototype.$http=axios
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
