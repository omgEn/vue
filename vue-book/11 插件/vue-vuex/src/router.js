import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import TestVuex from '@/components/TestVuex'
import MapVuex from '@/components/MapVuex'
import VuexDemo from '@/components/VuexDemo'

Vue.use(VueRouter)
const routes = [
	{path:'/', component: HelloWorld},
	{path:'/testvuex', component: TestVuex},
	{path: '/mapvuex', component: MapVuex},
	{path:'/vuexdemo', component: VuexDemo}
];

const router = new VueRouter({
	mode: 'history',
	routes
	// 相当于routes: routes
})

export default router;