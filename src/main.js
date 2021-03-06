import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ThreeView from './components/ThreeView.vue'
Vue.component(ThreeView.name,ThreeView)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
