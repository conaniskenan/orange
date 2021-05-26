/*
 * @Author: hypocrisy
 * @Date: 2021-05-08 13:57:11
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 18:52:37
 * @FilePath: /orange/src/pages/login/resetForm/index.jsx
 */
import React, { useEffect, useState, useRef } from 'react'
import {
	InputWrapper,
	Top,
	Center,
	PasswordInputAgain,
	PhoneInput,
	CheckInput,
	PasswordInput,
	RegisterButton,
	Bottom,
} from './style'
import { useDebounce } from '@/utils'
import { reset, checkNumber } from '@/api/users'

const ResetForm = props => {
	const [phone, setPhone] = useState('')
	const [isphone, setIsPhone] = useState(false)
	const [checkMsg, setCheckMsg] = useState('发送验证码')
	const deboucedPhone = useDebounce(phone, 0)
	const phoneRef = useRef(null)
	const checkRef = useRef(null)
	const pwdRef = useRef(null)
	const pwd2Ref = useRef(null)
	useEffect(() => {
		document.title = '重置密码 - 橘子新闻'
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
	const handleReset = () => {
		let phone = phoneRef.current.value
		let check = parseInt(checkRef.current.value)
		let pwd1 = pwdRef.current.value
		let pwd2 = pwd2Ref.current.value
		if (pwd1 !== pwd2) {
			alert('两次密码不一致')
			return
		}
		reset({ phone, password: pwd1, code: check }).then(res => {
			if (res.code !== 200) {
				alert('重置密码失败,请检查输入信息')
				return
			} else {
				localStorage.removeItem('token')
				props.history.push('/login')
			}
		})
	}
	return (
		<InputWrapper {...props}>
			<Top>
				<div>用手机号重置密码</div>
			</Top>
			<Center>
				<PhoneInput
					value={phone}
					onChange={e => setPhone(e.target.value)}
					ref={phoneRef}
				/>
				<CheckInput ref={checkRef} />
				<PasswordInput ref={pwdRef} />
				<PasswordInputAgain ref={pwd2Ref} />
				{isphone && (
					<button className='check' onClick={getCheckNumber}>
						{checkMsg}
					</button>
				)}
			</Center>
			<RegisterButton onClick={handleReset}>重置密码</RegisterButton>
			<span className='iconfont icon-mima mima1'></span>
			<span className='iconfont icon-mima mima2'></span>
			<span className='iconfont icon-webicon205'></span>
			<span className='iconfont icon-yanzhengma'></span>
			<Bottom onClick={() => props.history.push('/login')}>
				返回登录注册
			</Bottom>
		</InputWrapper>
	)
}

export default ResetForm
