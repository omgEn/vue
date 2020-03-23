<template lang="html">
<div>
	<h1>vuex</h1>
	<h3 v-text="count"></h3>
	<button type="button" @click="addClick">加</button>
	<button type="button" @click="subClick">减</button>
	<hr>
	<h3 v-text="msg"></h3>
	<button type="button" @click="getMsg">获取后端数据</button>
	<hr>
	
</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'

export default {
	computed: {
		...mapState(['count', 'msg', 'list'])
	},
	mounted(){
		//调接口
		this.getMusic()
	},
	methods: {
		...mapMutations(['add','sub']),
    ...mapActions(['getMsgOfAjax', 'getMusic']),
		addClick(){
			this.sub(50)
		},
		getMsg(){
			this.getMsgOfAjax()
		}
	}
}
</script>

<style>
</style>
