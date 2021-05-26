/*
 * @Author: hypocrisy
 * @Date: 2021-05-06 16:04:22
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 23:00:53
 * @FilePath: /orange/src/router/index.js
 */
import { lazy } from 'react'
import SuspenseCpn from 'components/suspenseCpn'
import { Redirect } from 'react-router-dom'
import Home from 'pages/home'
const Login = SuspenseCpn(lazy(() => import('pages/login')))
const LoginForm = SuspenseCpn(
	lazy(() => import('pages/login/loginForm'))
)
const RegisterForm = SuspenseCpn(
	lazy(() => import('pages/login/registerForm'))
)
const ResetForm = SuspenseCpn(
	lazy(() => import('pages/login/resetForm'))
)
const NewsDetail = SuspenseCpn(lazy(() => import('pages/newsDetail')))
const User = SuspenseCpn(lazy(() => import('pages/user')))
const Collect = SuspenseCpn(lazy(() => import('pages/user/collect')))
const Attention = SuspenseCpn(
	lazy(() => import('pages/user/attention'))
)
const Edit = SuspenseCpn(lazy(() => import('pages/user/edit')))
const Search = SuspenseCpn(lazy(() => import('pages/search')))
const routes = [
	{
		path: '/',
		exact: true,
		render: () => {
			return <Redirect to={'/news'}></Redirect>
		},
	},
	{
		path: '/news',
		exact: true,
		component: Home,
	},
	{
		path: '/news/search',
		exact: true,
		component: Search,
	},
	{
		path: '/news/:id',
		exact: true,
		component: NewsDetail,
	},
	{
		path: '/user/:id',
		component: User,
		routes: [
			{ path: '/user/:id/attention', component: Attention },
			{ path: '/user/:id/collect', component: Collect },
			{ path: '/user/:id/edit', component: Edit },
		],
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
