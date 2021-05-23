/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 21:53:43
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-24 00:23:56
 * @FilePath: /orange/src/pages/login/loginForm/index.jsx
 */
import React, { useEffect, useRef } from 'react'
import {
	InputWrapper,
	Top,
	Center,
	PhoneInput,
	PasswordInput,
	ForgetPassword,
	LoginButton,
} from './style'
import { login } from '@/api/users'

const LoginForm = props => {
	const userRef = useRef(null)
	const pwdRef = useRef(null)
	useEffect(() => {
		document.title = '登录 - 橘子新闻'
	}, [])
	const handleLogin = () => {
		login({
			name: userRef.current.value,
			password: pwdRef.current.value,
		}).then(res => {
			if (res.code === 200) {
				localStorage.setItem('token', res.token)
				props.history.push('/')
			} else {
				alert('用户名或密码不正确')
			}
		})
	}
	return (
		<InputWrapper {...props}>
			<Top>
				<div
					className='active'
					onClick={() => props.history.push('/login')}
				>
					登录
				</div>
				<div>·</div>
				<div onClick={() => props.history.push('/login/sign_up')}>
					注册
				</div>
			</Top>
			<Center>
				<PhoneInput ref={userRef} />
				<PasswordInput ref={pwdRef} />
				<ForgetPassword
					onClick={() => props.history.push('/login/reset')}
				>
					忘记密码?
				</ForgetPassword>
			</Center>
			<LoginButton onClick={handleLogin}>登录</LoginButton>
			<span className='iconfont icon-ren'></span>
			<span className='iconfont icon-mima'></span>
		</InputWrapper>
	)
}

export default LoginForm
