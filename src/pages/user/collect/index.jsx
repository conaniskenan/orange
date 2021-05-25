/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 21:29:03
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-25 22:08:34
 * @FilePath: /orange/src/pages/user/collect/index.jsx
 */
import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { InfoWrapper, Title, Footer, Img } from './style'
import { getUserCollect } from '../store/actionCreators'
const Collect = memo(props => {
	const { userCollections } = useSelector(
		state => ({
			userCollections: state
				.getIn(['user', 'userCollections'])
				?.toJS(),
		}),
		shallowEqual
	)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getUserCollect())
	}, [dispatch])
	return (
		userCollections?.map(item => {
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
					<Title>{item.name}</Title>
					<Img>
						<img
							src={`${process.env.REACT_APP_URLP}/file/get/picture/${item?.head}`}
							alt=''
							width='100%'
							height='100%'
						/>
					</Img>
					<Footer className='footer'>
						<div>橘子新闻网</div>
					</Footer>
				</InfoWrapper>
			)
		}) ?? ''
	)
})

export default withRouter(Collect)
