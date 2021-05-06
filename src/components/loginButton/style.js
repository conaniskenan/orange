/*
 * @Author: hypocrisy
 * @Date: 2021-05-06 14:59:33
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-06 15:42:12
 * @FilePath: /orange/src/components/loginButton/style.js
 */
import styled from 'styled-components'

export const Button = styled.button`
	width: 7.8rem;
	height: 3rem;
	background: radial-gradient(
		circle,
		rgba(247, 150, 192, 1) 0%,
		rgba(118, 174, 241, 1) 100%
	);
	border: none;
	color: #fff;
	font-weight: 500;
	font-size: 2rem;
	border-radius: 5px;
	cursor: pointer;
	position: relative;
	line-height: 3rem;
	text-align: center;
	&:hover {
		background: transparent;
		color: #76aef1;
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 1px;
		height: 1px;
		box-shadow: 0px 0px 10px 0px rgba(216, 215, 205, 1),
			0px 0px 5px 0px rgba(216, 215, 205, 1),
			0px 0px 10px 0px rgba(216, 215, 205, 1),
			0px 0px 5px 0px rgba(216, 215, 205, 1);
		transition: all 0.8s ease;
		padding: 0;
	}
	&::before {
		top: 0;
		right: 0;
	}
	&::after {
		bottom: 0;
		left: 0;
	}
	&:hover::before,
	&:hover::after {
		height: 100%;
	}
	.content {
		width: 100%;
		height: 100%;
		position: relative;
		display: block;
		text-align: center;
	}
	.content::before,
	.content::after {
		position: absolute;
		content: '';
		height: 1px;
		width: 0px;
		box-shadow: 0px 0px 10px 0px rgba(216, 215, 205, 1),
			0px 0px 5px 0px rgba(216, 215, 205, 1),
			0px 0px 10px 0px rgba(216, 215, 205, 1),
			0px 0px 5px 0px rgba(216, 215, 205, 1);
		transition: all 0.8s ease;
	}
	.content::before {
		top: 0;
		left: 0;
	}
	.content::after {
		bottom: 0;
		right: 0;
	}
	.content:hover::before,
	.content:hover::after {
		width: 100%;
	}
`
