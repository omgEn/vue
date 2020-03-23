<template>
	<div>
		<!-- 配置好多语言后，在业务组中就可以直接使用 -->‘
		<p>{{$t('message.hello')}}</p>
		<!-- 内容会根据当前传入的语言自动替换语言包对应message.hello的内容 -->
	</div>
</template>

<script>
</script>

<style>
</style>
<!-- 
npm install vue-i180 --save
//main.js
import VueI189 from 'vue-i180'

Vue.use(vueI180);

const messages = {
	en: {
		message:{'hello world'}
	},
	cn: {
		message:你好，世界
	}
};
const i180 = new VueI180({
	locale: 'en',	//设置当前语言
	message,	//设置语言包
})
new Vue({
	el:'#app',
	i18n: i18n,
	render: h=>h(App)
});
 -->
