/*
 * @Author: hypocrisy
 * @Date: 2021-05-24 22:20:39
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-25 15:57:07
 * @FilePath: /orange/src/pages/user/main/style.js
 */
import styled from 'styled-components'

export const MainWrapper = styled.div`
	width: 50%;
	height: 100rem;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 10rem;
`
export const Top = styled.div`
	width: 100%;
	height: 16rem;
	display: flex;
`
export const TopLeft = styled.div`
	flex: 1;
	position: relative;
	img {
		width: 60%;
		height: 60%;
		border-radius: 50%;
		overflow: hidden;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`
export const TopRight = styled.div`
	color: #646464;
	flex: 4;
	.name {
		font-size: 3rem;
		margin-top: 3rem;
		span {
			margin-left: 2rem;
			font-size: 1.4rem;
		}
	}
	.introduce {
		margin-top: 2rem;
		font-size: 1.5rem;
		width: 100%;
	}
	.introduce ~ div {
		cursor: pointer;
		font-size: 2rem;
		float: left;
		margin-top: 2rem;
		margin-right: 5rem;
	}
`
export const Button = styled.div`
	cursor: pointer;
	width: 8rem;
	height: 4rem;
	line-height: 4rem;
	text-align: center;
	font-size: 1.8rem;
	color: #eee;
	border-radius: 3rem;
	background-color: #ee8527;
	position: relative;
	top: 3rem;
	margin-left: 2rem;
`
export const Edit = styled.div`
	cursor: pointer;
	width: 8rem;
	height: 3.5rem;
	line-height: 3.5rem;
	text-align: center;
	font-size: 1.6rem;
	color: #eee;
	border-radius: 1rem;
	background-color: #ee8527;
	position: relative;
	top: 3rem;
	margin-left: 2rem;
`
