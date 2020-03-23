import './style.css';
// 导入Vue框架
import Vue from 'vue';
// 导入app.vue组件
import App from './app.vue';

// 这是入口文件
document.getElementById('app').innerHTML ='hello webpack.';
/*会自动更新,因为webpack-dev-server的热更新功能,
 它通过建立一个WebSocket连接来实时响应代码的修改*/
 
// 创建Vue根实例
new Vue({
	el:'#app',
	render: h=>h(app),
	data: [
		message: 'dd'
	]
});
/* 
render: h=>{return h(app)};
===
render:function(h){return h(app);}
箭头函数里的this指向与普通函数是不同的,
箭头函数体内的this对象是定义时所在的对象,而不是使用时所在的对象
*/
function (h){
	return(h)
}