/*
 * @Author: hypocrisy
 * @Date: 2021-05-20 20:08:47
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 23:42:42
 * @FilePath: /orange/src/pages/newsDetail/content/style.js
 */
import styled from 'styled-components'

export const ContentWrapper = styled.div`
	width: 50%;
	position: absolute;
	left: 50%;
	top: 8rem;
	transform: translateX(-50%);
`
export const Top = styled.div`
	width: 100%;
	height: 18rem;
	margin-bottom: 4rem;
`
export const Title = styled.div`
	width: 100%;
	font-size: 3rem;
	text-align: center;
	padding-top: 5rem;
`
export const TitleInfo = styled.div`
	width: 60rem;
	color: #333333;
	font-size: 1.8rem;
	font-weight: bold;
	margin-top: 5rem;
	padding-bottom: 3rem;
	box-sizing: border-box;
	text-align: center;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	div {
		float: left;
		margin-right: 1rem;
	}
`
export const Text = styled.div`
	font-size: 1.8rem;
	line-height: 4rem;
	img {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
`
export const Footer = styled.div`
	width: 100%;
	margin-top: 3rem;
	color: #333333;
	.active {
		color: red;
	}
	.iconfont {
		padding-right: 5.5rem;
		font-size: 2.2rem;
		cursor: pointer;
	}
	.icon {
		font-size: 2rem;
		padding-left: 2px;
		vertical-align: center;
	}
`
export const CommentInputWrapper = styled.div`
	margin-bottom: 20rem;
`
export const CommentInput = styled.textarea.attrs({
	type: 'textarea',
	placeholder: '写下你的评论...',
})`
	width: 98%;
	height: 12rem;
	margin-top: 10rem;
	margin-bottom: 4rem;
	outline: none;
	border: 1px solid #eee;
	background-color: #fafafa;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	resize: none;
	font-size: 1.7rem;
	&::placeholder {
		font-size: 1.5rem;
		color: #a3a3a3;
	}
`
export const Button = styled.div`
	width: 8rem;
	height: 3rem;
	background-color: red;
	float: right;
	margin-left: 2rem;
	text-align: center;
	font-size: 1.8rem;
	line-height: 3rem;
	border-radius: 1.5rem;
	cursor: pointer;
	&.commit {
		color: #ffffff;
		background-color: #ef8829;
		opacity: 0.7;
	}
	&.attention {
		background-color: #3e83fd;
		color: #ddd;
		border-radius: 1rem;
		width: 10rem;
	}
	&.cancel {
		color: #999999;
		background-color: #ffffff;
		border: 1px solid #999999;
		opacity: 0.7;
	}
	&:hover {
		opacity: 1;
	}
`
export const Comment = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 7rem;
	.head {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		border: 1px solid #ddd;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
		}
		cursor: pointer;
	}
	.name {
		position: absolute;
		top: 1rem;
		left: 6rem;
		color: #404040;
		font-size: 1.6rem;
		font-weight: bold;
	}
	.time {
		position: absolute;
		top: 3.5rem;
		left: 6rem;
		color: #b0b0b0;
	}
	.content {
		width: 90%;
		position: relative;
		top: 2rem;
		left: 6rem;
		color: #404040;
		font-size: 1.6rem;
		letter-spacing: 2px;
	}
	.reply {
		position: absolute;
		left: 6rem;
		font-size: 1.4rem;
		color: #a0a0a0;
		margin-top: 5rem;
		&:hover {
			cursor: pointer;
			font-weight: bold;
		}
	}
	.replyone {
		width: 50%;
		height: 10rem;
		position: relative;
		bottom: 0;
		left: 6rem;
		textarea {
			height: 10rem;
		}
	}
`
