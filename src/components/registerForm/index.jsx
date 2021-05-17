/*
 * @Author: hypocrisy
 * @Date: 2021-05-08 13:57:11
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 15:09:27
 * @FilePath: /orange/src/components/registerForm/index.jsx
 */
import React, { useEffect, useState } from 'react'
import {
	InputWrapper,
	Top,
	Center,
	NickInput,
	PhoneInput,
	CheckInput,
	PasswordInput,
	RegisterButton,
} from './style'
import { withRouter } from 'react-router-dom'
import { useDebounce } from '@/utils'

const RegisterForm = props => {
	const [phone, setPhone] = useState('')
	const [isphone, setIsPhone] = useState(false)
	const [checkMsg, setCheckMsg] = useState('发送验证码')
	const deboucedPhone = useDebounce(phone, 0)
	useEffect(() => {
		if (/^1[3456789]\d{9}$/.test(deboucedPhone)) {
			setIsPhone(true)
		} else {
			setIsPhone(false)
		}
	}, [deboucedPhone])
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
	}
	return (
		<InputWrapper {...props}>
			<Top>
				<div onClick={() => props.history.push('/login')}>登录</div>
				<div>·</div>
				<div
					className='active'
					onClick={() => props.history.push('/login/sign_up')}
				>
					注册
				</div>
			</Top>
			<Center>
				<NickInput />
				<PhoneInput
					value={phone}
					onChange={e => setPhone(e.target.value)}
				/>
				<CheckInput />
				<PasswordInput />
				{isphone ? (
					<button className='check' onClick={getCheckNumber}>
						{checkMsg}
					</button>
				) : (
					''
				)}
			</Center>
			<RegisterButton>注册</RegisterButton>
			<span className='iconfont icon-ren'></span>
			<span className='iconfont icon-mima'></span>
			<span className='iconfont icon-webicon205'></span>
			<span className='iconfont icon-yanzhengma'></span>
		</InputWrapper>
	)
}

export default withRouter(RegisterForm)
