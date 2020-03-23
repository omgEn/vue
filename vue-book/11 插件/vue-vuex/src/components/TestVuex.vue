<template>
	<div class="contain">
		{{$store.state.count}}
		<br>{{count}} <br>
		<button @click="handleIncrement">+1</button>
		<button @click="handleDecrease">-1</button>
		<p>list:{{list}}</p>
		<p>list.length:{{listCount}}</p>
		<button @click='handleActionIncrement'>action +1</button>
		<button @click='handleAsyncIncrement'>async+1</button>
		
		<!-- <button type="button" @click='getMsg'>获取后端的msg</button> -->
		
		<!-- <div v-for="(song,idx) in list" :key='idx' v-text="song.name"></div> -->
	</div>
</template>

<script>
	// import axios from 'axios'
	export default {
		// data: function(){
		// 	return {
		// 		list:[]
		// 	}
		// }
		// store里的数据，要在computed中重新定义
		computed: {
			count() {
				return this.$store.state.count;
			},
			list(){
				return this.$store.getters.filteredList;
			},
			listCount(){
				return this.$store.getters.listCount;
			}
			
		},
		// mounted(){
		// 	var url ="http//locaclhost:8083/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=60894712103914499&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=713689258&loginUin=1127263614&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0";
		// 	axios.get(url).then(res=>{
		// 		console.log('周杰伦的音乐',res);
		// 		this.list = res.data.data.song.list
		// 		console.log(this.list);
		// 	})
			
		// 	// this.$store.dispatch('getMusic');
		// 	// this.getMusic;
		// },
		methods: {
			// ...mapMutations(['add','sub']),
			// ...mapActions(['getMsgOfAjax','getMusic']),
			handleIncrement(){
				this.$store.commit('increment');
			},
			handleDecrease(){
				this.$store.commit('decrease',5);
			},
			handleActionIncrement(){
				this.$store.dispatch('increment');
			},
			handleAsyncIncrement(){
				this.$store.dispatch('asyncIncrement').then(()=>{
					console.log(this.$store.store.count);
				})
			}
			// getMsg(){
			// 	this.$store.
			// }
		}
	}
/*
methods 看起来像js的观察者模式，组件只复制提交一个事件名 ，
Vuex对应的mutations来完成业务逻辑
 */
</script>

<style lang="scss" scoped>
.contain{
	border: 1px solid #C3E6CB;
	width: 600px;
	margin: 0 auto;
	
	button {
		background: orange;
		&:hover{
			cursor: pointer;
		}
	}
}
</style>
