/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 20:26:57
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 15:06:14
 * @FilePath: /orange/src/pages/Login/index.jsx
 */
import React, { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { LoginImg, LoginWrapper, Center } from './style'
//import { withRouter } from 'react-router-dom'
import Logo from 'components/logo'
const Login = props => {
	useEffect(() => {
		// if (props.match.path === '/sign_in') {
		// 	document.title = '登录 - 橘子新闻'
		// }
		// if (props.match.path === '/sign_up') {
		// 	document.title = '注册 - 橘子新闻'
		// }
		// if (props.match.path === '/reset') {
		// 	document.title = '重置密码 - 橘子新闻'
		// }
		console.log(props)
	}, [])
	return (
		<LoginWrapper>
			<Logo
				className='logo'
				onClick={() => props.history.push('/')}
			/>
			<Center>
				<LoginImg />
				<div className='form'>{renderRoutes(props.route.routes)}</div>
			</Center>
		</LoginWrapper>
	)
}

export default Login
