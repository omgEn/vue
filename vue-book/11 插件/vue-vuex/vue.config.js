// 是个可选的配置文件
// 根据配置做自定义的选项
module.exports = {
	// 配置本地服务的反向代理
	devServer: {
	    proxy: {
	      '/soso': {
	        target: 'https://c.y.qq.com',
	        ws: true,
	        changeOrigin: true
	      }
	    }
	  }
}