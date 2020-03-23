import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册路由
Vue.use(VueRouter);


// 使用异步组件，优化性能
// const Home = ()=>import('@/pages/Home.vue')
// const TodoList = ()=>import('@/pages/TodoList.vue')
// 路由规则
const routes = [
	{
		path: '/list',
		meta: {
			title: '商品列表'
		},
		component: (resolve)=>require(['@/pages/list.vue'],resolve)
	},
	{
		path: '/product/:id',
		meta: {
			title: '商品详情'
		},
		component: (resolve)=>require(['@/pages/product.vue'],resolve)
	},
	{
		path: '/cart',
		meta:{
			title:'购物车',
		},
		component:(resolve)=>require(['@/pages/cart.vue'],resolve)
	},
	{
		path: '*',
		redirect: '/list'
	}
];

//创建一个路由实例
const router = new VueRouter({
	// 使用HTML5的history路由模式
	mode:'history',
	routes
});

router.beforeEach((to,from,next)=>{
	window.document.title = to.meta.title;
	next();
});
router.afterEach((to,from,next)=>{
	window.scrollTo(0,0);
})

export default router