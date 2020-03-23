<template>
	<div v-if="product">
		<div class="product">
			<div class="product-image">
				<img :src="product.image">				
			</div>
			<div class="product-info">
				<h1 class="product-name">{{product.name}}</h1>
				<div class="product-cost">￥{{product.cost}}</div>
				<div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
			</div>
			<div class="product-desc">
				<h2>产品介绍</h2>
				<img v-for="n in 10" :key=n
					:src="'http://ordfm6aah.bkt.clouddn.com/shop'+n+'.jepg'">
			</div>
		</div>
	</div>
</template>

<script>
// 导入本地数据做匹配用，真实场景并不需要
import product_data from '@/product.js'
export default {
	data(){
		return {
			// 获取路由中的参数
			id:parseInt(this.$route.params.id),
			product: null
		}
	},
	methods:{
		getProduct(){
			// 真实环境通过ajax获取，这里通过异步模拟
			setTimeout(()=>{
				this.product = product_data
					.find(item=>item.id===this.id);
			},500);
		},
		// 加入购物车
		handleAddToCart(){
			this.$store.commit('addCart',this.id);
		}
	},
	mounted(){
		// 初始化，请求数据
		this.getProduct();
	}
}
/* 
数组中的find()方法返回数组中满足提供的测试函数的第一个元素的值，
上面是将其余箭头函数使用
*/
</script>

<style scoped lang="scss">
.product {
	margin: 32px;
	padding: 32px;
	background: #fff;
	border: 1px solid #dddee1;
	border-radius: 10px;
	overflow: hidden;
	
	.product-image{
		width: 50%;
		height: 550px;
		float: left;
		text-align: center;
		img {
			height: 100%;
		}
	}
	
	.product-info {
		width: 50%;
		padding: 150px 0 250px;
		height: 150px;
		float: left;
		text-align: center;
	}
	
	.product-cost {
		color: #f2352e;
		margin:8px 0;
	}
	
	.product-add-cart {
		display: inline-block;
		padding: 8px 64px;
		margin: 8px 0;
		color: orange;
		border-radius: 4px;
		cursor: pointer;
	}
	
	.product-desc {
		background: #fff;
		margin: 32px;
		padding: 32px;
		border: 1px solid #dddee1;
		border-radius: 10px;
		text-align: center;
		
		img {
			display: block;
			width: 50%;
			margin: 32px auto;
			padding: 32px;
			border-bottom: 1px solid #dddee1;
		}
	}
}
</style>
