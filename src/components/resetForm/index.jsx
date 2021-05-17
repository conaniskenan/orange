/*
 * @Author: hypocrisy
 * @Date: 2021-05-08 13:57:11
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 15:09:39
 * @FilePath: /orange/src/components/resetForm/index.jsx
 */
import React, { useEffect, useState } from 'react'
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
import { withRouter } from 'react-router-dom'
import { useDebounce } from '@/utils'

const ResetForm = props => {
	const [phone, setPhone] = useState('')
	const [isphone, setIsPhone] = useState(false)
	const [checkMsg, setCheckMsg] = useState('发送验证码')
	const deboucedPhone = useDebounce(phone, 500)
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
				<div>用手机号重置密码</div>
			</Top>
			<Center>
				<PhoneInput
					value={phone}
					onChange={e => setPhone(e.target.value)}
				/>
				<CheckInput />
				<PasswordInput />
				<PasswordInputAgain />
				{isphone && (
					<button className='check' onClick={getCheckNumber}>
						{checkMsg}
					</button>
				)}
			</Center>
			<RegisterButton>注册</RegisterButton>
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

export default withRouter(ResetForm)
