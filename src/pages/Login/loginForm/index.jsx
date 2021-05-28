/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 21:53:43
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-29 00:17:36
 * @FilePath: /orange/src/pages/login/loginForm/index.jsx
 */
import React, { useEffect, useRef, useState } from 'react'
import {
	InputWrapper,
	Top,
	Center,
	PhoneInput,
	PasswordInput,
	ForgetPassword,
	LoginButton,
} from './style'
import { login, checkNumber, loginPhone } from '@/api/users'

const LoginForm = props => {
	const userRef = useRef(null)
	const pwdRef = useRef(null)
	const [phone, setPhone] = useState('')
	const [isphone, setIsPhone] = useState(false)
	const [checkMsg, setCheckMsg] = useState('发送验证码')
	useEffect(() => {
		document.title = '登录 - 橘子新闻'
	}, [])
	useEffect(() => {
		if (/^1[3456789]\d{9}$/.test(phone)) {
			setIsPhone(true)
		} else {
			setIsPhone(false)
		}
	}, [phone])
	const getCheckNumber = () => {
		if (checkMsg.includes('s')) {
			return false
		}
		let time = 60
		let timer = setInterval(() => {
			setCheckMsg(`重新发送(${time}s)`)
			time--
			if (time < -1) {
				clearInterval(timer)
				setCheckMsg(`重新发送`)
			}
		}, 1000)
		checkNumber(phone)
	}
	const handleLogin = () => {
		if (isphone) {
			loginPhone({
				phone,
				code: parseInt(pwdRef.current.value),
			}).then(res => {
				if (res.code === 200) {
					localStorage.setItem('token', res.token)
					props.history.push('/')
				} else {
					alert('验证码不正确')
				}
			})
		} else {
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
				<PhoneInput
					ref={userRef}
					onChange={e => setPhone(e.target.value)}
				/>
				<PasswordInput ref={pwdRef} />
				{isphone ? (
					<button className='check' onClick={getCheckNumber}>
						{checkMsg}
					</button>
				) : (
					''
				)}
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
