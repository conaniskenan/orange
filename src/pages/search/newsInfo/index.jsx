/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 21:29:03
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 23:19:03
 * @FilePath: /orange/src/pages/search/newsInfo/index.jsx
 */
import React, { memo, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { InfoWrapper, Title, Summary, Footer, Img } from './style'
import { getTime } from '@/utils'
import { newsSearch } from '@/api/news'

const NewsInfo = memo(props => {
	const [renderList, setRenderList] = useState([])
	useEffect(() => {
		let searchMsg = props.location.search.replace('?search=', '')
		newsSearch({ begin: 0, count: 10, msg: searchMsg }).then(res => {
			setRenderList(res.list)
		})
	})
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
