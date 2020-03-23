<template>
	<div>Hello {{name}}</div>
</template>

<script>
	export default {
		data(){
			return {
				name: 'Vue.js'
			}
		}
	}
/* 
注data(){}===
 data:function(){}
 */
</script>

<style scoped>
	div {
		color: #f60;
		font-size: 26px;
	}
</style>
