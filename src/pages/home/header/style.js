/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 21:02:19
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-23 23:05:29
 * @FilePath: /orange/src/pages/home/header/style.js
 */
import styled from 'styled-components'
import navImg from 'assets/img/header.png'

export const NavWrapper = styled.div`
	width: 100%;
	height: 7.8rem;
	background-color: #fff;
	border-bottom: 1px solid #ebebeb;
	box-shadow: 0 1px 2px hsl(0deg 0% 60% / 5%);
	position: fixed;
	display: flex;
	z-index: 1030;
	&::before {
		content: '';
		background-image: url(${navImg});
		width: 100%;
		height: 0.2rem;
		position: absolute;
		left: 0;
		top: 0;
	}
`
export const NavLeft = styled.div`
	min-width: 19rem;
	position: relative;
`

export const NavCenter = styled.div`
	flex: 6;
	min-width: 10rem;
	overflow: hidden;
`
export const NavCenterItem = styled.div`
	height: 7.8rem;
	width: 7rem;
	float: left;
	line-height: 7.8rem;
	font-size: 1.8rem;
	text-align: center;
	color: #333333;
	cursor: pointer;
	box-sizing: border-box;
	transition: color 0.5s ease;
	&:hover {
		color: hsl(48, 89%, 50%);
	}
	&.active {
		font-weight: bold;
		color: #ccc;
		border-bottom: 4px solid hsl(48, 89%, 50%);
	}
`
export const NavRight = styled.div`
	flex: 3;
	position: relative;
	min-width: 40rem;
	.loginBtn {
		position: absolute;
		right: 10%;
		top: 50%;
		transform: translateY(-50%);
		height: 3rem;
		line-height: 3rem;
		width: 7rem;
		font-size: 1.6rem;
		text-align: center;
		letter-spacing: 5px;
		text-indent: 5px;
	}
	.user {
		position: absolute;
		right: 5%;
		top: 50%;
		transform: translateY(-50%);
	}
`
export const NavRightSearchWrapper = styled.div`
	position: absolute;
	width: 20rem;
	height: 3.4rem;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	.iconfont {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		color: #d9d9d9;
		font-weight: bold;
		float: right;
		margin-left: -2rem;
		&.focus {
			color: #2e92f5;
		}
	}
`
export const NavRightSearch = styled.input.attrs({
	placeholder: '新闻中心',
})`
	height: 3.4rem;
	width: 17rem;
	font-size: 1.4rem;
	box-sizing: border-box;
	padding-left: 1rem;
	background-color: #f4f4f4;
	border: 1px solid #f4f4f4;
	border-radius: 5px;
	outline: none;
	transition: all 0.5s ease;
	&::placeholder {
		color: #d7d7d7;
	}
	&.focus {
		width: 19rem;
	}
`
