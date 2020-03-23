import Vue from 'vue'
import Vuex from 'vuex'

//注册
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{},
	getters:{},
	mutations:{},
	actions:{}
});
/* 
state原始数据
通过mutations操作state,
getters过滤state
actions通过commit操作mutations
 */

export default store