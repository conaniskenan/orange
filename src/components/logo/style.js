/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 20:46:04
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-07 21:04:39
 * @FilePath: /orange/src/components/logo/style.js
 */
import styled from 'styled-components'
import logo from 'assets/img/orange.png'

export const OrangeLogo = styled.div`
	height: 4rem;
	position: absolute;
	width: 20rem;
	top: 50%;
	transform: translateY(-50%);
	left: 10%;
	background-image: url(${logo});
	background-size: 4rem;
	background-repeat: no-repeat;
	transition: all 1s ease;
	&:hover {
		text-shadow: 0px 0px 1px hsl(48, 89%, 50%);
	}
	&::before {
		content: '橘子新闻';
		font-size: 2.7rem;
		font-weight: bold;
		position: absolute;
		right: 25%;
		top: 50%;
		transform: translateY(-50%);
		color: hsl(48, 89%, 70%);
	}
`
