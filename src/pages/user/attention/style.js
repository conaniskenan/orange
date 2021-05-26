/*
 * @Author: hypocrisy
 * @Date: 2021-05-25 15:06:16
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 19:47:44
 * @FilePath: /orange/src/pages/user/attention/style.js
 */
import styled from 'styled-components'

export const AttentionWrapper = styled.div`
	width: 50%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: 30rem;
`
export const User = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 2rem;
	.head {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		border: 1px solid #ddd;
		overflow: hidden;
		position: absolute;
		left: 16.8rem;
		img {
			width: 100%;
			height: 100%;
		}
		cursor: pointer;
	}
	.name {
		position: absolute;
		top: 2rem;
		left: 23rem;
		color: #404040;
		font-size: 1.6rem;
		font-weight: bold;
	}
`
