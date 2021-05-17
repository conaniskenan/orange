/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 21:29:03
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-18 02:01:00
 * @FilePath: /orange/src/pages/home/newsInfo/index.jsx
 */
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { InfoWrapper, Title, Summary, Footer, Img } from './style'
import { getList } from './store/actionCreators'
import { getTime } from '@/utils'
const NewsInfo = memo(() => {
	const { newsRanList } = useSelector(
		state => ({
			newsRanList: state.getIn(['newsInfo', 'newsRanList']).toJS(),
		}),
		shallowEqual
	)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getList())
	}, [dispatch])
	return newsRanList.map(item => {
		return (
			<InfoWrapper key={item.id}>
				<Title>{item.title}</Title>
				<Summary>{item.digest}</Summary>
				<Img>
					<img
						src={`${process.env.REACT_APP_URLP}/file/get/picture/${item.photo}`}
						alt=''
						width='100%'
						height='100%'
					/>
				</Img>
				<Footer className='footer'>
					<div>橘子新闻网</div>
					<div>{item.modelName}</div>
					<div>{getTime(item.createTime)}</div>
					<div>评论:{item.comment ?? 0}</div>
					<div>点赞:{item.star ?? 0}</div>
					<div>投币:{item.coin ?? 0}</div>
				</Footer>
			</InfoWrapper>
		)
	})
})

export default NewsInfo
