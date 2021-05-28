/*
 * @Author: hypocrisy
 * @Date: 2021-05-08 13:57:11
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-29 00:10:28
 * @FilePath: /orange/src/pages/login/registerForm/index.jsx
 */
import React, { useEffect, useState, useRef } from 'react'
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
import { useDebounce } from '@/utils'
import { register, checkNumber } from '@/api/users'

const RegisterForm = props => {
	const [phone, setPhone] = useState('')
	const [isphone, setIsPhone] = useState(false)
	const [checkMsg, setCheckMsg] = useState('发送验证码')
	const deboucedPhone = useDebounce(phone, 0)
	const userRef = useRef(null)
	const checkRef = useRef(null)
	const pwdRef = useRef(null)
	useEffect(() => {
		document.title = '注册 - 橘子新闻'
	}, [])
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
		checkNumber(phone)
	}
	const handleRegister = () => {
		register({
			name: userRef.current.value,
			password: pwdRef.current.value,
			phone,
			code: parseInt(checkRef.current.value),
		}).then(res => {
			if (res.code === 200) {
				props.history.push('/login')
			} else {
				alert('注册失败')
			}
		})
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
				<NickInput ref={userRef} />
				<PhoneInput
					value={phone}
					onChange={e => setPhone(e.target.value)}
				/>
				<CheckInput ref={checkRef} />
				<PasswordInput ref={pwdRef} />
				{isphone ? (
					<button className='check' onClick={getCheckNumber}>
						{checkMsg}
					</button>
				) : (
					''
				)}
			</Center>
			<RegisterButton onClick={handleRegister}>注册</RegisterButton>
			<span className='iconfont icon-ren'></span>
			<span className='iconfont icon-mima'></span>
			<span className='iconfont icon-webicon205'></span>
			<span className='iconfont icon-yanzhengma'></span>
		</InputWrapper>
	)
}

export default RegisterForm
