/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 20:26:57
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-12 21:21:04
 * @FilePath: /orange/src/pages/Login/index.jsx
 */
import React, { useEffect } from 'react'
import { LoginImg, LoginWrapper, Center } from './style'
import { withRouter } from 'react-router-dom'
import Logo from 'components/logo'
import LoginForm from 'components/loginForm'
import RegisterForm from 'components/registerForm'
import ResetForm from 'components/resetForm'

const Login = props => {
	useEffect(() => {
		if (props.match.path === '/sign_in') {
			document.title = '登录 - 橘子新闻'
		}
		if (props.match.path === '/sign_up') {
			document.title = '注册 - 橘子新闻'
		}
		if (props.match.path === '/reset') {
			document.title = '重置密码 - 橘子新闻'
		}
	}, [])
	return (
		<LoginWrapper>
			<Logo
				className='logo'
				onClick={() => props.history.push('/')}
			/>
			<Center>
				<LoginImg />
				{props.match.path === '/sign_in' && (
					<LoginForm className='form'></LoginForm>
				)}
				{props.match.path === '/sign_up' && (
					<RegisterForm className='form'></RegisterForm>
				)}
				{props.match.path === '/reset' && (
					<ResetForm className='form'></ResetForm>
				)}
			</Center>
		</LoginWrapper>
	)
}

export default withRouter(Login)
