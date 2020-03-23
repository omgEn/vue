var path = require('path');
// 导入插件
var MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// var config
var config = {
	entry: {
		main:'./main'
	},
	output: {
		path: path.join(__dirname,'./dist'),
		publicPath: '/dist',
		filename: 'main.js'
	},
	module: {
	  rules: [
	    {
	      test: /\.css$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
						options: {
							esModule: true,
						},
					},
					'css-loader',
				]
	    },
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: MiniCSSExtractPlugin.loader,
					use: 'css-loader',
					fallback: 'vue-style-loader'
				}
			},
			{
				test: /\.js/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
	  ]
	},
	plugins: [
	  new MiniCSSExtractPlugin('main.css')
	]
}
/* 在rules属性中可以指定一系列的loaders,每一个loader都必须包含test和use两个选项;
 即当weboack编译过程中遇到require()或import语句导入一个后缀名为.css的文件时,
 先将它通过css-loader转换,再通过style-loader转换,然后继续打包.
 use选项的值可以是数组或字符串,如果是数组,它的编译顺序是从后往前
 */
module.exports = config;
// dev:webpack-dev-server --host 127.10.36.170 --port 8888  --config webpack.config.js

