Vue.component('my-buycar',{
	template:`
		<div v-if="list.length&&list.length">
			<table>
				<thead>
					<tr>
						<th></th>
						<th>商品名称</th>
						<th>商品单价</th>
						<th>购买数量</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
			<div>总价：￥{{totalPrice}}</div>
		</div>
		<div v-else>购物车为空</div>
		
	`
});