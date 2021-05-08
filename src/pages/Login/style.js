/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 20:53:24
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-08 15:39:12
 * @FilePath: /orange/src/pages/Login/style.js
 */
import styled from 'styled-components'
import Img from 'assets/img/orange.png'

export const LoginWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #f1f1f1;
	position: relative;
	.logo {
		position: absolute;
		top: 4%;
		left: 1%;
		cursor: pointer;
	}
`
export const Center = styled.div`
	width: 100rem;
	height: 70rem;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	.form {
		position: absolute;
		top: 10%;
		left: 50%;
	}
	@media only screen and (max-width: 65rem) {
		.form {
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
		}
	}
`
export const LoginImg = styled.div`
	width: 35rem;
	height: 35rem;
	background-image: url(${Img});
	background-size: contain;
	background-repeat: no-repeat;
	position: absolute;
	top: 15%;
	left: 12%;
	@media only screen and (max-width: 65rem) {
		display: none;
	}
`
