import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
// axios({
//   url:'https://www.bilibili.com/video/BV15741177Eh?p=142',
//   method:'get'

// }).then(res => {
//   console.log(res)

// })

Vue.use(VueAxios, axios)

NutUI.install(Vue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
