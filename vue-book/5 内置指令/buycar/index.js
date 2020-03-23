var app = new Vue({
	el:'#app',
	data:{
		// totalPrice: 0,
		list:[
			{
				id: 1,
				name: 'iPhone7',
				price: 6188,
				count: 1,
				storage: 8,
				value: false
			},
			{
				id: 2,
				name: 'iPad Pro',
				price: 5888,
				count: 1,
				value: false
			},
			{
				id: 3,
				name: 'MacBook Pro',
				price: 21488,
				count: 1,
				value: false
			}
		]
	},
	computed:{
		//总价
		// totalPrice:function(){
		// 	var total = 0;
		// 	for(var i=0;i<this.list.length;i++){
		// 		var item = this.list[i];
		// 		total += item.price*item.count;
		// 	}
		// 	return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		// },
		// 选中的总价
		totalPrice:function(){
			var total = 0;
			for(var i=0;i<this.list.length;i++){
				var item = this.list[i];
				if(item.value==true){
					total += item.price*item.count
				}
			}
			return total.toString().replace(/B(?=(\d{3})+$)/g,',');
		}
	},
	methods:{
		//加入购物车
		add:function(index){
			this.list[index].value = !this.list[index].value;
		},
		//反选
		addReverse:function(){
			this.list.map(function(item,index){
				return item.value = !item.value;
			});
		},
		//全选
		addAll:function(){
			//some任一项是true,返回true
			//every全部是true,返回true
			var flag = this.list.every(function(item,index){
				return item.value;
			});//需要全部是true,返回true
			if(flag){
				this.list.map(function(item,index){
					return item.value = false;
				});
			} else {
				this.list.map(function(item,index){
					return item.value = true;
				});//第二次失效
			};
		},
		handleReduce: function(index){
			if(this.list[index].count===1) return;
			this.list[index].count--;
		},
		handleAdd:function(index){
			if(this.list[index].count===this.list[index].storage) return;
			this.list[index].count++;
		},
		handleRemove:function(index){
			this.list.splice(index,1);
		}
	}
})