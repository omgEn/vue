import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		list: [1,5,8,19,30,40],
		list2:[]//周杰伦的音乐列表
	},
	getters: {
		filteredList: state=>{
			return state.list.filter(item=>item<30);
		},
		listCount:(state,getters)=>{
			return getters.filteredList.length
		}
	},
// 在组件内,来自store的数据只能读取,改变的唯一方式是通过mutatioins
// mutatioin不应该异步操作,因为若如此,组件在commit后,数据不能立即改变,而且不知道什么时候会改变
// 同步,改变state
	mutations: {
		increment(state,n=2){
			state.count+=n;
		},
		decrease(state,n=1){
			//n = n || 1;//设置默认值,无就用
			state.count-=n;
		}
	},
// actions与mutations类型,但它里面提交的是mutation,并且可以异步操作业务逻辑
// actions是用于异步操作,尤其是调接口,若是想state,必须通过中间层mutation
// 同步放在mutation,用于改变state
	actions: {
	// action在组件内通过$store.dispatch触发
		increment(context){
			context.commit('increment');
		},
		asyncIncrement(context){
			return new Promise(resolve=>{
				setTimeout(()=>{
					context.commit('increment');
					resolve();
				},1000)
			})
		}
		// getMusic(){
		// 	var url ="http//locaclhost:8083/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=60894712103914499&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=713689258&loginUin=1127263614&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0";
		// 	axios.get(url).then(res=>{
		// 		console.log('周杰伦的音乐',res);
		// 	})
		// }
	}
});
/* 
mutations:设计改变数据用
actions:存在业务逻辑用
至于将业务逻辑放在action里还是Vue组件里完成,就需要根据诗句场景分
 */

// 提交mutation的另一种方式是直接使用type属性的对象,不用
//vuex 的选项有:state,mutation,getters,actions,modules

/* 
modules:将store分割到不同模块.
每个modules都有自己的state,getters,mutations,actions
且可多层嵌套

const moduleA = {
	state: {},
	mutations: {},
	actions: {},
	getters: {}
}
const moduleB ={
	state: {},
	mutations: {},
	actions: {}
}
const store = new Vuex.store({
	modules: {
		a:moduleA,
		b:moduleB
	}
});
store.state.a;//moduleA的状态
store.state.b;//moduleB的状态
 */

/* 
module的mutation和getter接收的第一个参数state是当前模块的状态.
在actions和getters中,还可接收一个参数rootState,来访问根节点的状态

const moduleA = {
	state: {
		count: 0
	},
	getters: {
		sumCount(state, getters, rootState){
			return state.count + rootState.count
		}
	}
}
 */

export default store;
