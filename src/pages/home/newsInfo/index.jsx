/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 21:29:03
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 01:08:25
 * @FilePath: /orange/src/pages/home/newsInfo/index.jsx
 */
import React, { memo, useEffect, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { InfoWrapper, Title, Summary, Footer, Img } from './style'
import { getTime } from '@/utils'

const NewsInfo = memo(props => {
	const [renderList, setRenderList] = useState([])
	const { newsRandList, newsModelList } = useSelector(
		state => ({
			newsRandList: state.getIn(['home', 'newsRandList']),
			newsModelList: state.getIn(['home', 'newsModelList']),
		}),
		shallowEqual
	)
	useEffect(() => {
		if (!props.location.search) {
			setRenderList(newsRandList?.toJS())
		} else {
			setRenderList(newsModelList?.toJS())
		}
	}, [newsRandList, newsModelList])
	return renderList?.map(item => {
		return (
			<InfoWrapper
				key={item.id}
				onClick={() => {
					props.history.push({
						pathname: `/news/${item.id}`,
						state: item,
					})
				}}
			>
				<Title>{item.title}</Title>
				<Summary>{item.digest}</Summary>
				<Img>
					<img
						src={`${process.env.REACT_APP_URLP}/file/get/picture/${item?.photo}`}
						alt=''
						width='100%'
						height='100%'
					/>
				</Img>
				<Footer className='footer'>
					<div>橘子新闻网</div>
					<div>分类:{item.modelName}</div>
					<div>{getTime(item.createTime)}</div>
					<div>评论:{item.comment}</div>
					<div>点赞:{item.stars}</div>
					<div>投币:{item.coins}</div>
				</Footer>
			</InfoWrapper>
		)
	})
})

export default withRouter(NewsInfo)
