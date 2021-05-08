/*
 * @Author: hypocrisy
 * @Date: 2021-05-06 16:04:22
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-08 00:46:49
 * @FilePath: /orange/src/router/index.js
 */
import Home from 'pages/home'
import Login from 'pages/Login'
const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/sign_in',
		component: Login,
	},
	{
		path: '/sign_up',
		component: Login,
	},
]

export default routes
