/*
 * @Author: hypocrisy
 * @Date: 2021-05-06 16:04:22
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 15:14:11
 * @FilePath: /orange/src/router/index.js
 */
import { lazy } from 'react'
import SuspenseCpn from 'components/suspenseCpn'
import Home from 'pages/home'
const Login = SuspenseCpn(lazy(() => import('pages/login')))
const LoginForm = SuspenseCpn(
	lazy(() => import('components/loginForm'))
)
const RegisterForm = SuspenseCpn(
	lazy(() => import('components/registerForm'))
)
const ResetForm = SuspenseCpn(
	lazy(() => import('components/resetForm'))
)

const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/login',
		component: Login,
		routes: [
			// {
			// 	path: '/login',
			// 	exact: true,
			// 	render: () => {
			// 		return <Redirect to={'/login/sign_in'}></Redirect>
			// 	},
			// },
			{
				path: '/login',
				exact: true,
				component: LoginForm,
			},
			{
				path: '/login/sign_up',
				component: RegisterForm,
			},
			{
				path: '/login/reset',
				component: ResetForm,
			},
		],
	},
]

export default routes
