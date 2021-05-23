/*
 * @Author: hypocrisy
 * @Date: 2021-05-20 20:08:05
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-23 19:34:46
 * @FilePath: /orange/src/pages/newsDetail/content/index.jsx
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import classnames from 'classnames'
import { getnewsContent } from 'pages/home/store/actionCreators'
import {
	ContentWrapper,
	Top,
	Title,
	TitleInfo,
	Text,
	Footer,
	CommentInput,
	Button,
	CommentInputWrapper,
} from './style'
import { getTime } from '@/utils'
const Content = props => {
	const refInput = useRef(null)
	const { state } = props.location
	const { newsContent } = useSelector(
		state => ({
			newsContent: state.getIn(['home', 'newsContent']),
		}),
		shallowEqual
	)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getnewsContent(state.body))
	}, [dispatch])
	return (
		<ContentWrapper>
			<Top>
				<Title>{state.title}</Title>
				<TitleInfo>
					<div>橘子新闻网</div>
					<div>分类:{state.modelName}</div>
					<div>发布时间: {getTime(state.createTime)}</div>
				</TitleInfo>
			</Top>
			<Text
				dangerouslySetInnerHTML={{
					__html: newsContent,
				}}
			></Text>
			<Footer>
				<span className={classnames('iconfont', 'icon-pinglun')}>
					<span className='icon'>{state.comment ?? 0}</span>
				</span>
				<span className={classnames('iconfont', 'icon-dianzan1')}>
					<span className='icon'>{state.star ?? 0}</span>
				</span>
				<span className={classnames('iconfont', 'icon-jinbi')}>
					<span className='icon'>{state.coin ?? 0}</span>
				</span>
			</Footer>
			<CommentInputWrapper>
				<CommentInput ref={refInput}></CommentInput>
				<Button
					className='cancel'
					onClick={() => {
						refInput.current.value = ''
					}}
				>
					取消
				</Button>
				<Button className='commit'>发布</Button>
			</CommentInputWrapper>
		</ContentWrapper>
	)
}

export default withRouter(Content)
