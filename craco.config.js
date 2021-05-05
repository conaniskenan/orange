/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 22:31:57
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-05 22:35:47
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
	},
}
