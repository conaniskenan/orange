/*
 * @Author: hypocrisy
 * @Date: 2021-05-06 16:04:22
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-12 21:26:22
 * @FilePath: /orange/src/router/index.js
 */
import { lazy } from 'react'
import Home from 'pages/home'
import SuspenseCpn from 'components/suspenseCpn'
const Login = SuspenseCpn(lazy(() => import('pages/Login')))
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
	{
		path: '/reset',
		component: Login,
	},
]

export default routes
