<template lang="html">
	<div>
		<!-- 声明式路由跳转 -->
		<!-- 这个组件相当于a链接 -->
		<!-- to属性指定要跳转到目标url -->
		<!-- tag属性指定在页面用什么标签来渲染，默认是a标签 -->
		<router-link to="/todo" tag='span'>TodoList</router-link>
		<br>
		<router-link to='/sass' tag='span'>TestSass</router-link>
		<hr>
		<button type="button" @click='click'></button>
		<hr>
		
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type='primary'>主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
		
		<el-switch v-model="value" 
			active-color="#13ce55" 
			inactive-color="#ff4949">
		</el-switch>
	</div>
</template>

<script>
export default {
	data: function(){
		return {
			value: true
		}
	},
	methods: {
		click(){
			this.$router.push({name:'todo'})
		}
	}
}
</script>

<style lang="css" scoped>
</style>
