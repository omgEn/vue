import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from '@/stores/store.js'

Vue.config.productionTip = false

new Vue({
	store:store,
	router:router,
  render: h => h(App),
}).$mount('#app')
