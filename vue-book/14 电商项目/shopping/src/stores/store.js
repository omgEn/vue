import Vue from 'vue'
import Vuex from 'vuex'
import product_data from '@/product.js'

//注册
Vue.use(Vuex);

//数组重排
function getFilterArray(array){
	const res = [];
	const json = {};
	for (let i=0;i<array.length;i++){
		const _self = array[i];
		if(!json[_self]){
			res.push(_self);
			json[_self] = 1;
		}
	}
	return res;
}

const store = new Vuex.Store({
	state: {
		// 商品列表数据
		productList: [],
		// 购物车数据
		cartList: []
	},
	getters: {
		brands:state=>{
			const brands = state.productList.map(item=>item.brand);
			return getFilterArray(brands);
		},
		colors: state=>{
			const colors = state.productList.map(item=>item.color);
			return getFilterArray(colors);
		}
	},
	mutations: {
		// 添加商品列表
		setProductList(state,data){
			state.productList = data;
		},
		// 添加到购物车
		addCart(state,id){
			// 先判断购物车是否有,有就数量+1
			const isAdd = state.cartList.find(item=>item.id===id);
			if(isAdd){
				isAdd.count++;
			} else {
				state.cartList.push({
					id:id,
					count:1,
				// 遵循解耦,其余信息通过id间接获取
				})
			}
		},
		// 修改商品数量
		editCartCount(state,payload){
			const product = state.cartList.find(item=>item.id===payload.id);
			product.count += payload.count;
		},
		// 删除商品
		deleteCart(state,id){
			const index = state.cartList.findIndex(item=>item.id===id);
			state.cartList.splice(index,1);
/* findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引 */
		},
		// 清空购物车
		emptyCart(state){
			state.cartList = [];
		}
	},
	actions: {
		// 请求商品列表
		getProductList(context){
			// 真实环境通过Ajax获取,这里用异步模拟
			setTimeout(()=>{
				context.commit('setProductList',product_data);
			},500)
		},
		// 购买
		buy(context){
			// 真实环境通过Ajax获取,这里用异步模拟
			return new Promise(resolve=>{
				setTimeout(()=>{
					context.commit('emptyCart');
					resolve();
				},500)
			});
		}
	}
});
// 数据从product.js中获取,先通过action获取数据,在通过通过mutations设置state,

export default store
/*
Vuex的getter和组件内的computed很相似.把示例中的brands和colors写在
list.vue的computed中也是可以的,那把数据是写在Vuex中恰当还是在组件内比较好.
如下几点综合考虑
	如果数据还有其他组件复用,建议放在Vuex
	如果需要跨多级组件传递数据,放在Vuex
	需要持久化的数据(如登录后用户的信息),建议放在Vuex
	跟当前业务组件强相关的数据(如filterBrand,filterColor,它们只在当前组件有用),可以放在组件内
	*/
