/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 20:26:57
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-08 15:38:49
 * @FilePath: /orange/src/pages/Login/index.jsx
 */
import React, { useEffect } from 'react'
import { LoginImg, LoginWrapper, Center } from './style'
import Logo from 'components/logo'
import LoginForm from 'components/loginForm'
import RegisterForm from 'components/registerForm'

const Login = props => {
	useEffect(() => {
		document.title =
			props.match.path === '/sign_in'
				? '登录 - 橘子新闻'
				: '注册 - 橘子新闻'
	}, [])
	return (
		<LoginWrapper>
			<Logo
				className='logo'
				onClick={() => props.history.push('/')}
			/>
			<Center>
				<LoginImg />
				{props.match.path === '/sign_in' ? (
					<LoginForm className='form'></LoginForm>
				) : (
					<RegisterForm className='form'></RegisterForm>
				)}
			</Center>
		</LoginWrapper>
	)
}

export default Login
