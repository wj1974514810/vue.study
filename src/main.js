import Vue from 'vue'
import router from './router/router'
import './style/bootstrap.css'
import './style/index.css'
import './assets/iconfont/iconfont.css'

// import App from './components/day06/myTabes.vue'
// import App from './components/day06/myrouter/index.vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
