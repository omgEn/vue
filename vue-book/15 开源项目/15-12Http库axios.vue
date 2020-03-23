<template>
	<div></div>
</template>

<script>
// axios是一个基于Promise，同时支持浏览器和Node.js的HTTP库，常用于Ajax请求
// 在业务中，经常讲其封装为实例的形式调用，便于做通用配置
import Ajax from './util.js'
export default {
	mounted(){
		Ajax({
			method:'post',
			url'/user',
			data: {
			
			}
		}).then(res=>{
			console.log(res);
		})
	}
}


</script>

<style>
</style>

<!-- 
util.js文件
var baseURL = '';
const instance = axios.create({
	baseURL: baseURL,
	timeout: 1000,
	header: {'Content-Type':'application/x-www-form-urlencoded;'}
});

export default instace

 -->