var app = new Vue({
	el:'#app',
	data:{
		list:[
			[
				{type:'电子产品',typeId:1},
				{catalogId: 1,name: 'iPhone7',price: 6188,count: 1,storage: 8,value: false},
				{catalogId: 2,name: 'iPad Pro',price: 5888,count: 1,value: false},
				{catalogId: 3,name: 'MacBook Pro',price: 21488,count: 1,value: false}
			],
			[
				{type:'生活用品',typeId:2},
				{catalogId: 1,name: '毛巾',price: 20,count: 1,value: false},
				{catalogId: 2,name: '牙刷',price: 20,count: 1,value: false},
				{catalogId: 3,name: '牙膏',price: 50,count: 1,value: false}
			],
			[
				{type:'女装',typeId:3},
				{catalogId: 1,name: '短袖',price: 100,count: 1,value: false},
				{catalogId: 2,name: '连衣裙',price: 500,count: 1,value: false},
				{catalogId: 3,name: '长裤',price: 200,count: 1,value: false}
			]
		],
		selected: 1
	},
	filters: {
		// 筛选后的list
		// var list = this.list;
		filterList:function(list){
			var value = this.list.forEach(function(list){
					return list[selecred-1][1]
			});
		}
	},
	computed:{
		fliterList:function(){
			var value = this.list.forEach(function(item){
					
			});
			return value;
		},
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
		select2:function(option){
			console.log(1);
			this.filterList = this.list.filter(function(item){
				if(option[0].value==item[0].typeId)
				return true;
			});
			console.log(this.filterList);
		},
		add:function(index){//加入购物车
			this.list[index].value = !this.list[index].value;
		},
		addReverse:function(){//反选
			this.list.map(function(item,index){
				return item.value = !item.value;
			});
		},
		addAll:function(){//全选
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
		handleReduce: function(index){//增加
			if(this.list[index].count===1) return;
			this.list[index].count--;
		},
		handleAdd:function(index){//减少
			if(this.list[index].count===this.list[index].storage) return;
			this.list[index].count++;
		},
		handleRemove:function(index){//删除
			this.list.splice(index,1);
		}
	}
})