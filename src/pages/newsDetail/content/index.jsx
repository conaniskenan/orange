/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-20 20:08:05
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-27 00:12:30
 * @FilePath: /orange/src/pages/newsDetail/content/index.jsx
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
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
	Comment,
} from './style'
import { getTime } from '@/utils'
import { userIsCollect, userIsStar, userIsCoin } from '@/api/users'
import { getNewsById, getNewsComment, addComment } from '@/api/news'
const Content = props => {
	const state = props.location.state
	const [refresh, SetRefresh] = useState(0)
	const [collect, setCollect] = useState('收藏')
	const [star, setStar] = useState(false)
	const [coin, setCoin] = useState(false)
	const [starNum, setStarNum] = useState(0)
	const [coinNum, setCoinNum] = useState(0)
	const [news, setNews] = useState([])
	const [comment, setComment] = useState([])
	const [isReply, setIsReply] = useState(false)
	const refInput = useRef(null)
	const replyInput = useRef(null)
	const newsID = parseInt(props.match.url.replace(/\/news\//, ''))
	const dispatch = useDispatch()
	const { newsContent, ownInformation } = useSelector(
		state => ({
			newsContent: state.getIn(['home', 'newsContent']),
			ownInformation: state.getIn(['user', 'ownInformation'])?.toJS(),
		}),
		shallowEqual
	)
	useEffect(() => {
		dispatch(getnewsContent(state.body))
	}, [dispatch])
	useEffect(() => {
		getNewsById(newsID).then(res => {
			setNews(res.info)
		})
		getNewsComment({
			begin: 0,
			count: 10,
			newsId: newsID,
			parentId: 0,
		}).then(res => {
			setComment(res.list)
		})
	}, [refresh])
	useEffect(() => {
		setCollect(news?.isCollect ? '取消收藏' : '收藏')
		setStar(news?.isStar ? true : false)
		setCoin(news?.isCoin ? true : false)
		setStarNum(news?.stars)
		setCoinNum(news?.coins)
	}, [news])
	useEffect(() => {
		dispatch(getnewsContent(news?.body))
	}, [dispatch, news])

	const handleCollect = () => {
		if (!localStorage.token) {
			return false
		}
		if (collect === '收藏') {
			userIsCollect({
				id: newsID,
				flag: true,
			})
			setCollect('取消收藏')
		} else {
			userIsCollect({
				id: newsID,
				flag: false,
			})
			setCollect('收藏')
		}
	}
	const handleStar = () => {
		if (!localStorage.token) {
			return false
		}
		if (!star) {
			userIsStar({
				id: newsID,
				flag: true,
			}).then(res => {
				if (res.code !== 200) {
					return false
				}
			})
			setStar(true)
			setStarNum(starNum + 1)
		} else {
			userIsStar({
				id: newsID,
				flag: false,
			})
			setStar(false)
			setStarNum(starNum - 1)
		}
	}
	const handleCoin = () => {
		if (!localStorage.token) {
			return
		}
		if (!coin) {
			userIsCoin({
				id: newsID,
				flag: true,
			}).then(res => {
				if (res.msg === '硬币数量不足') {
					alert('硬币用完啦!!!')
					return
				}
				setCoin(true)
				setCoinNum(coinNum + 1)
			})
		}
	}
	const handleReply = id => {
		setIsReply(id)
	}
	const handleSubmit = () => {
		SetRefresh(refresh + 1)
		addComment({ id: newsID, content: refInput.current.value })
		refInput.current.value = ''
	}
	const handleReplySubmit = id => {
		SetRefresh(refresh + 1)
		addComment({
			id: newsID,
			content: replyInput.current.value,
			parentId: id,
		})
		replyInput.current.value = ''
	}
	return (
		<ContentWrapper>
			<Top>
				<Title>{state?.title ?? news.title}</Title>
				<TitleInfo>
					<div>橘子新闻网</div>
					<div>分类:{state?.modelName ?? news.modelName}</div>
					<div>
						发布时间: {getTime(state?.createTime ?? news.createTime)}
					</div>
				</TitleInfo>
			</Top>
			<Text
				dangerouslySetInnerHTML={{
					__html: newsContent,
				}}
			></Text>
			<Footer>
				<span className={classnames('iconfont', 'icon-pinglun')}>
					<span className='icon'>{state?.comment}</span>
				</span>
				<span
					className={classnames('iconfont', 'icon-dianzan1', {
						active: star,
					})}
					onClick={handleStar}
				>
					<span className={classnames('icon')}>
						{starNum ?? state.stars ?? news.stars}
					</span>
				</span>
				<span
					className={classnames('iconfont', 'icon-jinbi', {
						active: coin,
					})}
					onClick={handleCoin}
				>
					<span className='icon'>
						{coinNum ?? state.coins ?? news.coins}
					</span>
				</span>
			</Footer>
			<Button className='attention' onClick={handleCollect}>
				{collect}
			</Button>
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
				<Button className='commit' onClick={handleSubmit}>
					发布
				</Button>
			</CommentInputWrapper>
			{comment?.map(item => {
				return (
					<Comment key={item.id}>
						<div
							className='head'
							onClick={() =>
								props.history.push(`/user/${item.userId}`)
							}
						>
							<img
								src={`${process.env.REACT_APP_URLP}/file/get/picture/${item?.photo}`}
								alt=''
							/>
						</div>
						<div className='name'>
							{item?.name}
							{item.userId === ownInformation?.info?.id
								? ' (我)'
								: ''}
						</div>
						<div className='time'>{getTime(item?.createTime)}</div>
						<div className='content'>{item?.Content}</div>
						{item.userId !== ownInformation?.info?.id && (
							<div
								className='reply'
								onClick={e => handleReply(item.id)}
							>
								回复
							</div>
						)}

						{isReply === item.id && (
							<CommentInputWrapper className='replyone'>
								<CommentInput ref={replyInput}></CommentInput>
								<Button
									className='cancel'
									onClick={() => {
										replyInput.current.value = ''
										setIsReply(false)
									}}
								>
									取消
								</Button>
								<Button
									className='commit'
									onClick={e => handleReplySubmit(item.id)}
								>
									发布
								</Button>
							</CommentInputWrapper>
						)}
					</Comment>
				)
			})}
		</ContentWrapper>
	)
}

export default withRouter(Content)
