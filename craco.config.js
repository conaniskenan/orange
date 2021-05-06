/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 22:31:57
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-06 18:48:34
 * @FilePath: /orange/craco.config.js
 */
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
	webpack: {
		alias: {
			'@': resolve('src'),
			components: resolve('src/components'),
			assets: resolve('src/assets'),
		},
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		},
	},
}
