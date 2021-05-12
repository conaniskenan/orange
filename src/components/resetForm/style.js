/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 21:53:54
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-08 19:47:30
 * @FilePath: /orange/src/components/resetForm/style.js
 */
import styled from 'styled-components'

export const InputWrapper = styled.div`
	width: 40rem;
	height: 52rem;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 8px rgb(0 0 0 / 10%);
	> .icon-ren {
		position: absolute;
		left: 12.6%;
		top: 16.3rem;
		color: #a0a0a0;
	}
	> .icon-webicon205 {
		position: absolute;
		left: 11.6%;
		top: 16rem;
		color: #a0a0a0;
		font-size: 2.4rem;
		font-weight: bold;
	}
	> .icon-yanzhengma {
		position: absolute;
		left: 12.4%;
		top: 21.4rem;
		color: #a0a0a0;
		font-size: 1.6rem;
		font-weight: bold;
	}
	> .mima1 {
		position: absolute;
		left: 12.6%;
		top: 26.3rem;
		color: #a0a0a0;
	}
	> .mima2 {
		position: absolute;
		left: 12.6%;
		top: 31.3rem;
		color: #a0a0a0;
	}
`
export const Top = styled.div`
	width: 30rem;
	height: 5rem;
	position: absolute;
	top: 3rem;
	left: 50%;
	transform: translateX(-50%);
	font-size: 2.2rem;
	font-weight: bold;
	> div {
		color: #000;
		text-align: center;
		line-height: 5rem;
	}
`
export const Center = styled.div`
	width: 40rem;
	height: 20rem;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	top: 28%;
	.check {
		color: #fbfbfb;
		position: absolute;
		right: 4.5rem;
		top: 5.8rem;
		height: 3.4rem;
		line-height: 3.4rem;
		background-color: #3992ce;
		border: 1px solid #3992ce;
		border-radius: 1.5rem;
		opacity: 1;
		cursor: pointer;
	}
	> input {
		font-size: 1.6rem;
		width: 80%;
		height: 5rem;
		padding-left: 3.2rem;
		margin: 0;
		z-index: -1;
		box-sizing: border-box;
		background-color: #f7f7f7;
		border: 1px solid #c8c8c8;
		border-radius: 2px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		outline: none;
		&::placeholder {
			color: #a0a0a0;
			font-size: 1.4rem;
		}
	}
`
export const PhoneInput = styled.input.attrs({
	type: 'text',
	placeholder: '手机号',
})`
	border-bottom: none !important;
`
export const CheckInput = styled.input.attrs({
	type: 'text',
	placeholder: '短信验证码',
})`
	border-bottom: none !important;
	top: 5rem;
`
export const PasswordInput = styled.input.attrs({
	type: 'text',
	placeholder: '请输入新密码',
})`
	border-bottom: none !important;
	top: 10rem;
`
export const PasswordInputAgain = styled.input.attrs({
	type: 'password',
	placeholder: '请再输入一遍新密码',
})`
	top: 15rem;
`
export const RegisterButton = styled.div`
	width: 30rem;
	height: 4.5rem;
	line-height: 4.5rem;
	border-radius: 2rem;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: 71%;
	background-color: #3593cf;
	font-size: 1.8rem;
	text-align: center;
	color: #fff;
	letter-spacing: 2px;
	text-indent: 2px;
	&:hover {
		background-color: #1f7bb6;
		cursor: pointer;
	}
`
export const Bottom = styled.div`
	width: 20rem;
	height: 5rem;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 4rem;
	color: #969696;
	line-height: 5rem;
	text-align: center;
	font-size: 1.4rem;
	&:hover {
		cursor: pointer;
		color: #ccc;
	}
`
