/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 21:53:54
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-29 00:18:04
 * @FilePath: /orange/src/pages/login/loginForm/style.js
 */
import styled from 'styled-components'

export const InputWrapper = styled.div`
	width: 40rem;
	height: 45rem;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 8px rgb(0 0 0 / 10%);
	position: absolute;
	> .icon-ren {
		position: absolute;
		left: 12.6%;
		top: 14.4rem;
		color: #a0a0a0;
	}
	> .icon-mima {
		position: absolute;
		left: 12.6%;
		top: 19.4rem;
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
	display: flex;
	justify-content: center;
	color: #d2d2d2;
	font-size: 2rem;
	font-weight: bold;
	> .active {
		color: #eb7b66;
		border-bottom: 2px solid #eb7b66;
	}
	> div {
		text-align: center;
		line-height: 5rem;
		&:first-of-type {
			cursor: pointer;
			&:hover {
				border-bottom: 2px solid #eb7b66;
			}
		}
		&:last-of-type {
			cursor: pointer;
			&:hover {
				border-bottom: 2px solid #eb7b66;
			}
		}
		&:nth-of-type(2) {
			padding: 0 1.5rem;
		}
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
		top: 5.7rem;
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
	placeholder: '用户名或手机号',
})`
	border-bottom: none !important;
`
export const PasswordInput = styled.input.attrs({
	type: 'password',
	placeholder: '密码或短信验证码',
})`
	top: 5rem;
`
export const ForgetPassword = styled.div`
	position: absolute;
	font-size: 1.5rem;
	right: 4rem;
	top: 11.5rem;
	color: #a4a4a4;
	cursor: pointer;
	&:hover {
		color: rgba(0, 0, 0, 0.5);
	}
`
export const LoginButton = styled.div`
	width: 30rem;
	height: 4.5rem;
	line-height: 4.5rem;
	border-radius: 2rem;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: 70%;
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
