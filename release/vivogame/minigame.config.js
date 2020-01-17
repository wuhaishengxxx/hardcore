
/**
 * 此配置用于替换之前的config/webpack.config.js。使用此配置文件时，请将原来的config/webpack.config.js里的externals配置同步到此处。
 * 原来 webpack.config.js中拷贝的资源，放到src目录下即可，打包时会自动拷贝到build
 * @param {Object} options 提供一些参数
 * @param {String} options.context   小游戏工程目录
 * @param {String} options.src 小游戏工程src目录
 * @param {String} options.build 小游戏工程的编译目录
 */
module.exports = function (options) {

	// 使用 externals方式引入模块，请参考webpack externals的用法 https://webpack.js.org/configuration/externals/
	/**
	 * 外部依赖配置
	 * module_name [String] 表示模块名  在 game.js的中对这个模块的引用可以使用 require(module_name)
	 * module_path [String] 表示模块路径，是相对于 build 文件夹的路径，使用 module_name引入被打包后转为成为的路径
	 * module_from [String] 表示这个模块相对于当前工程中根目录的路径，在构建时会从这个路径拷贝文件到 build 目录 的modue_path下，然后被引用
	 * 
	 * 例如： 如下有一条配置
	 * const externals = [{
	 *    module_name:'qgame-adapter',
	 *    module_path:'src/qgame-adapter.js',
	 *    module_from:'engine/src/qgame-adapter.js'
	 * }]
	 * 
	 * 表示，在当前工程目录中存在 'engine/src/qgame-adapter.js'这个文件，在打包时会被拷贝到 build目录下的 'src/qgame-adapter.js'。
	 * 而在game.js中 使用 require('qgame-adapter') 引用时，能加载 build目录下的 'src/qgame-adapter.js' 这个模块
	 */
	const externals = [
		// {
		// 	module_name: './code.js',
		// 	module_path: './code.js',
		// 	module_from: 'engine/code.js'
		// },
		{
			module_name: './libs/laya.ani.js',
			module_path: './libs/laya.ani.js',
			module_from: 'engine/libs/laya.ani.js'
		},
		{
			module_name: './libs/laya.core.js',
			module_path: './libs/laya.core.js',
			module_from: 'engine/libs/laya.core.js'
		},
		{
			module_name: './libs/laya.filter.js',
			module_path: './libs/laya.filter.js',
			module_from: 'engine/libs/laya.filter.js'
		},
		{
			module_name: './libs/laya.html.js',
			module_path: './libs/laya.html.js',
			module_from: 'engine/libs/laya.html.js'
		},
		{
			module_name: './libs/laya.ui.js',
			module_path: './libs/laya.ui.js',
			module_from: 'engine/libs/laya.ui.js'
		},
		{
			module_name: './libs/laya.vvmini.js',
			module_path: './libs/laya.vvmini.js',
			module_from: 'engine/libs/laya.vvmini.js'
		},
		{
			module_name: './libs/laya.webgl.js',
			module_path: './libs/laya.webgl.js',
			module_from: 'engine/libs/laya.webgl.js'
		},
		{
			module_name: './qgame-adapter.js',
			module_path: './qgame-adapter.js',
			module_from: 'engine/qgame-adapter.js'
		},
		, {
			module_name: './libs/pool.min.js',
			module_path: './libs/pool.min.js',
			module_from: 'engine/libs/pool.min.js'
		},
		{
			module_name: './libs/utils.min.js',
			module_path: './libs/utils.min.js',
			module_from: 'engine/libs/utils.min.js'
		},
		{
			module_name: './libs/sproto.min.js',
			module_path: './libs/sproto.min.js',
			module_from: 'engine/libs/sproto.min.js'
		},
		{
			module_name: './libs/require.max.js',
			module_path: './libs/require.max.js',
			module_from: 'engine/libs/require.max.js'
		},

		{
			module_name: './js/sdk/index_cs.js',
			module_path: './js/sdk/index_cs.js',
			module_from: 'js/sdk/index_cs.js'
		},

		{
			module_name: './js/sdk/shouyoudao.js',
			module_path: './js/sdk/shouyoudao.js',
			module_from: 'js/sdk/shouyoudao.js'
		},
		{
			module_name: './js/config.js',
			module_path: './js/config.js',
			module_from: 'js/config.js'
		},
		{
			module_name: './js/audio.js',
			module_path: './js/audio.js',
			module_from: 'js/audio.js'
		},
		{
			module_name: './js/hardcore.js',
			module_path: './js/hardcore.js',
			module_from: 'js/hardcore.js'
		},
		{
			module_name: './js/game.js',
			module_path: './js/game.js',
			module_from: 'js/game.js'
		},
		{
			module_name: './js/core.js',
			module_path: './js/core.js',
			module_from: 'js/core.js'
		},

	]

	return {
		externals
	}
}