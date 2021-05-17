/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 21:53:54
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-18 01:17:58
 * @FilePath: /orange/src/pages/login/registerForm/style.js
 */
import styled from 'styled-components'

export const InputWrapper = styled.div`
	width: 40rem;
	height: 52rem;
	background-color: #fff;
	border-radius: 4px;
	position: absolute;
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
		top: 21rem;
		color: #a0a0a0;
		font-size: 2.4rem;
		font-weight: bold;
	}
	> .icon-yanzhengma {
		position: absolute;
		left: 12.4%;
		top: 26.3rem;
		color: #a0a0a0;
		font-size: 1.6rem;
		font-weight: bold;
	}
	> .icon-mima {
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
		top: 11rem;
		height: 3.4rem;
		line-height: 3.4rem;
		background-color: #42c041;
		border: 1px solid #42c041;
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
export const NickInput = styled.input.attrs({
	type: 'text',
	placeholder: '你的昵称',
})`
	border-bottom: none !important;
`
export const PhoneInput = styled.input.attrs({
	type: 'text',
	placeholder: '手机号',
})`
	border-bottom: none !important;
	top: 5rem;
`
export const CheckInput = styled.input.attrs({
	type: 'text',
	placeholder: '短信验证码',
})`
	border-bottom: none !important;
	top: 10rem;
`
export const PasswordInput = styled.input.attrs({
	type: 'password',
	placeholder: '设置密码',
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
	background-color: #42c039;
	font-size: 1.8rem;
	text-align: center;
	color: #fff;
	letter-spacing: 2px;
	text-indent: 2px;
	&:hover {
		background-color: #3db92f;
		cursor: pointer;
	}
	&::before {
		content: '点击 “注册” 即表示您同意并愿意遵守橘子新闻';
		position: absolute;
		font-size: 1rem;
		color: #bbbbbb;
		left: 3rem;
		top: 4rem;
		text-align: center;
		letter-spacing: normal;
	}
	&::after {
		content: '用户协议和隐私政策';
		position: absolute;
		font-size: 1rem;
		color: #bbbbbb;
		left: 50%;
		transform: translateX(-50%);
		top: 6.5rem;
		letter-spacing: normal;
	}
`
