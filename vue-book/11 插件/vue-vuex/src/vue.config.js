module.exports = {
  // 配置本地服务的反向代理
  devServer: {
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',
        changeOrigin: true
      }
    }
  }
}
