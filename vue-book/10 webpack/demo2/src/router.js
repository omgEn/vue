import Vue from 'vue';
import VueRouter from 'vue-router'
// 使用Vue.use()注册路由
Vue.use(VueRouter);

import TestSass from '@pages/TestSass.vue'

// 创建一个路由实例
const router = new VueRouter({
	mode: 'hash',
	// 这个routes描述了url和组件之间一一对应的显示
	routes: [
		{
			path: '/',
			components:{
				default: Home,
				add:todoList,
				bbb:TestSass
			}
		},
		{
			path: '/sass',
			component: TestSass,
		}
	]
})
//抛出
export default router