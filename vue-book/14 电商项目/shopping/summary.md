* 在大中型项目中，尤其是多人协同开发时，最重要的是模块解耦。
* 对于公共组件，要定义好API（props、events、slots），公用数据要在Vuex或bus中统一维护
* 在业务中，要尽可能避免直接操作父链和子链来修改组件的状态，对于跨级通信最好通过Vuex或bus完成。
* 在协同开发时，可通过路由组件的内容拆分为多个组件，由不同的人维护。避免冲突。
* 公共配置还可以使用混合(mixins)
* 当项目中页面较多，在使用Vuex时可讲store分发到不同的文件或文件夹内。
* 练习
	* 将品牌和颜色的筛选拓展为支持多选，比如支持同时选择白色或红色
	 * 购物车数据支持持久化（本地保存，重新打卡页面仍有记录）