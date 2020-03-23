import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import store from './store.js'
import store2 from './store2.js'

Vue.config.productionTip = false

new Vue({
	router,
	
	store2,
  render: h => h(App),
}).$mount('#app')
