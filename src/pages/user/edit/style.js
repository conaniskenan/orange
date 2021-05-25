/*
 * @Author: hypocrisy
 * @Date: 2021-05-25 15:58:19
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-25 16:31:39
 * @FilePath: /orange/src/pages/user/edit/style.js
 */
import styled from 'styled-components'

export const EditWrapper = styled.div`
	width: 60rem;
	height: 50rem;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: 30rem;
	div {
		font-size: 1.8rem;
		color: #333333;
		margin-top: 2rem;
	}
`
export const Name = styled.div`
	input {
		width: 20rem;
		height: 3rem;
		outline: none;
		border: 1px solid #ddd;
		margin-left: 1rem;
		font-size: 1.6rem;
		padding-left: 1rem;
		position: relative;
		left: 2rem;
		left: 2rem;
	}
`
export const Head = styled.div`
	input {
		position: relative;
		left: 4.8rem;
	}
`
export const Introduce = styled.div`
	textarea {
		width: 38rem;
		height: 8rem;
		vertical-align: middle;
		outline: none;
		border: 1px solid #ddd;
		position: relative;
		left: 1rem;
	}
`
export const Submit = styled.div`
	cursor: pointer;
	width: 8rem;
	height: 3.5rem;
	line-height: 3.5rem;
	text-align: center;
	font-size: 1.6rem !important;
	color: #ddd !important;
	border-radius: 1rem;
	background-color: #3e83fd;
	position: relative;
	top: 5rem;
	left: 50%;
	transform: translateX(-50%);
`
