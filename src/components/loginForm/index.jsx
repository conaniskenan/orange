/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 21:53:43
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 15:08:48
 * @FilePath: /orange/src/components/loginForm/index.jsx
 */
import React from 'react'
import {
	InputWrapper,
	Top,
	Center,
	PhoneInput,
	PasswordInput,
	ForgetPassword,
	LoginButton,
} from './style'
import { withRouter } from 'react-router-dom'
const LoginForm = props => {
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
				<PhoneInput />
				<PasswordInput />
				<ForgetPassword
					onClick={() => props.history.push('/login/reset')}
				>
					忘记密码?
				</ForgetPassword>
			</Center>
			<LoginButton>登录</LoginButton>
			<span className='iconfont icon-ren'></span>
			<span className='iconfont icon-mima'></span>
		</InputWrapper>
	)
}

export default withRouter(LoginForm)
