/*
 * @Author: hypocrisy
 * @Date: 2021-05-23 22:56:11
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-24 21:14:42
 * @FilePath: /orange/src/components/userName/style.js
 */
import styled from 'styled-components'

export const UserNameWrapper = styled.div`
	/* height: 7.8rem;
	line-height: 7.8rem; */
	position: absolute;
	font-size: 1.8rem;
	color: #333333;
	letter-spacing: 2px;
`
export const User = styled.div`
	height: 3.5rem;
	width: 3.5rem;
	border: 1px solid transparent;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
	border-radius: 50% !important;
	transition: all 0.5s ease;
	&:hover {
		text-shadow: 0px 0px 1px #a8a8a8;
		cursor: pointer;
	}
`
export const Info = styled.div`
	z-index: 999;
	position: absolute;
	top: 4rem;
	margin-left: -2rem;
	width: 7rem;
	height: 10rem;
	line-height: 5rem;
	display: none;
	flex-direction: column;
	border: 2px solid #f3f3f3;
	box-shadow: 1px 1px 2px #f3f3f3;
	background-color: #fff;
	&.userhover {
		display: flex;
	}
	div {
		flex: 1;
		text-align: center;
		font-size: 1.5rem;
		letter-spacing: 0;
		color: #a8a8a8;
		padding: 0 3px;
		&:hover {
			box-shadow: 0 0 1px #eee;
			cursor: pointer;
			background-color: #ece9e6;
		}
	}
`
