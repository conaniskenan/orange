/*
 * @Author: hypocrisy
 * @Date: 2021-05-20 20:08:47
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-04 03:49:23
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
	width: 90%;
	left: 50%;
	transform: translateX(-50%);
	margin-bottom: 2rem;
	.head {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		border: 1px solid transparent;
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

	.content {
		width: 82%;
		margin-left: 6rem;
		color: #404040;
		font-size: 1.5rem;
		line-height: 1.9rem;
		letter-spacing: 2px;
	}
	.time {
		margin-top: 1.5rem;
		margin-left: 6rem;
		color: #b0b0b0;
	}
	.delete {
		font-size: 1.4rem;
		margin-top: -1.4rem;
		margin-left: 68rem;
		color: #a0a0a0;
		&:hover {
			cursor: pointer;
			font-weight: bold;
		}
	}
	.reply {
		width: 3rem !important;
		font-size: 1.4rem;
		color: #a0a0a0;
		margin-top: 1rem;
		margin-left: 6rem;
		&:hover {
			cursor: pointer;
			font-weight: bold;
		}
	}
	.report {
		width: 3rem !important;
		font-size: 1.4rem;
		color: #a0a0a0;
		margin-top: -1.4rem;
		margin-left: 10rem;
		&:hover {
			cursor: pointer;
			font-weight: bold;
		}
	}
	.replyone {
		width: 50%;
		height: 10rem;
		position: relative;
		bottom: 8rem;
		left: 6rem;
		textarea {
			height: 10rem;
		}
		margin-bottom: 11rem;
	}
`
export const OtherReply = styled.div`
	position: relative;
	width: 80%;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 1rem;
	margin-bottom: 2rem;
	.head {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		border: 1px solid transparent;
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
	.huifu {
		color: #696a6c;
	}
	.content {
		width: 80%;
		margin-left: 6rem;
		color: #404040;
		font-size: 1.5rem;
		line-height: 1.9rem;
		letter-spacing: 2px;
	}
	.time {
		margin-top: 1.5rem;
		margin-left: 6rem;
		color: #b0b0b0;
	}
	.delete {
		font-size: 1.4rem;
		margin-top: -1.4rem;
		margin-left: 59.4rem;
		width: 3rem;
		color: #a0a0a0;
		&:hover {
			cursor: pointer;
			font-weight: bold;
		}
	}
	.reply {
		font-size: 1.4rem;
		color: #a0a0a0;
		margin-top: 1rem;
		margin-left: 6rem;
		&:hover {
			cursor: pointer;
			font-weight: bold;
		}
	}
	.report {
		width: 3rem;
		font-size: 1.4rem;
		color: #a0a0a0;
		margin-top: -1.4rem;
		margin-left: 10rem;
		&:hover {
			cursor: pointer;
			font-weight: bold;
		}
	}
	.replyone {
		width: 50%;
		height: 10rem;
		position: relative;
		bottom: 8rem;
		left: 6rem;
		textarea {
			height: 10rem;
		}
		margin-bottom: 11rem;
	}
`
