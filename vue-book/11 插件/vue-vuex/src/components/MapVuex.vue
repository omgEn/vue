<template>
<div>
	<p>{{count}}</p>
	<p>{{countAlias}}</p>
	<!-- <p>filteredList:{{filteredList}}</p>
	<p>listCount:{{listCount}}</p> -->
	<!-- <p>doneCount:{{doneCount}}</p> -->
	<button @click="countPlusLocalState">cout</button>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
	data: function(){
		return {
			localCount: 6
		}
	},
	computed: mapState({
			count: state => state.count,
			// 等同于
			countAlias: 'count',
			// 为了能够使用this获取局部状态，必须使用常规函数
			countPlusLocalState(state){
				return state.count + this.localCount;
			}
		})
	
	// computed: {
	// 	// 与局部计算属性混合
	// 	localCompted(){},
	// 	mapState({
	// 		count: state => state.count,
	// 		// 等同于
	// 		countAlias: 'count',
	// 		// 为了能够使用this获取局部状态，必须使用常规函数
	// 		countPlusLocalState(state){
	// 			return state.count + this.localCount;
	// 		}
	// 	}),
	// }
		
		// ...mapGetters(['filteredList','listCount']),
		// mapGetters({
		// 	//把this.doneCount映射为this.$store.getters.done
		// 	doneCount: 'listCount'
		// })	
	
}
</script>

<style>
</style>
