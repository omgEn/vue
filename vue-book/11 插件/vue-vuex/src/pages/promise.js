const promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		const random = Math.random();
		if(random>0.5){
			resolve(random);
		} else {
			reject(random);
		}
	},1000)
});
promise.then((value)=>{
	console.log('success',value);
}).catch((error)=>{
	console.log('fail',error);
});