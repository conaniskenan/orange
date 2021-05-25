/*
 * @Author: hypocrisy
 * @Date: 2021-05-25 15:06:30
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-25 15:17:09
 * @FilePath: /orange/src/pages/user/collect/style.js
 */

import styled from 'styled-components'

export const InfoWrapper = styled.div`
	width: 50%;
	border-bottom: 1px solid #f0f0f0;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	top: 28rem;
	cursor: pointer;
	box-sizing: border-box;
	overflow: hidden;
	&:hover {
		box-shadow: 1px 1px 1px #a8a8a8;
	}
	transition: all 0.5s ease;
`
export const Title = styled.div`
	color: #333333;
	font-size: 2rem;
	font-weight: bold;
	margin-top: 1rem;
	padding-top: 2rem;
	text-indent: 2rem;
	box-sizing: border-box;
`
export const Summary = styled.div`
	color: #a8a8a8;
	font-size: 1.4rem;
	margin-top: 1rem;
	line-height: 1.8rem;
	padding-left: 2rem;
	width: 60%;
	box-sizing: border-box;
`
export const Img = styled.div`
	width: 14rem;
	height: 10rem;
	border-radius: 5px;
	/* background-color: red; */
	box-sizing: border-box;
	position: absolute;
	right: 10%;
	bottom: 50%;
	transform: translateY(50%);
	@media only screen and (max-width: 70rem) {
		display: none;
	}
`
export const Footer = styled.div`
	color: #a8a8a8;
	font-size: 1.4rem;
	margin-top: 4rem;
	line-height: 1.8rem;
	padding-left: 2rem;
	padding-bottom: 3rem;
	box-sizing: border-box;
	div {
		float: left;
		margin-right: 1rem;
	}
`
