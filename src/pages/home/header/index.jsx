/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 18:12:08
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 22:58:54
 * @FilePath: /orange/src/pages/home/header/index.jsx
 */
import classnames from 'classnames'
import qs from 'qs'
import React, { memo, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import LoginButton from 'components/loginButton'
import {
	NavWrapper,
	NavLeft,
	NavCenter,
	NavRight,
	NavCenterItem,
	NavRightSearch,
	NavRightSearchWrapper,
} from './style'
import Logo from 'components/logo'
import UserName from 'components/userName'
import {
	getList,
	getModelList,
} from 'pages/home/store/actionCreators'
import { getOwn } from 'pages/user/store/actionCreators'
const Header = memo(props => {
	const [currentIndex, setCurrentIndex] = useState(-1)
	const [isFocus, setIsFocus] = useState(false)
	const { newsPlate, ownInformation } = useSelector(
		state => ({
			newsPlate: state.getIn(['home', 'newsPlate']),
			ownInformation: state.getIn(['user', 'ownInformation'])?.toJS(),
		}),
		shallowEqual
	)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getList())
		dispatch(getOwn(0))
	}, [dispatch])
	useEffect(() => {
		let search = props.location.search
		search &&
			dispatch(
				getModelList(qs.parse(search.slice(1, search.length)).model)
			)
	}, [currentIndex])
	const handleItemClick = index => {
		setCurrentIndex(index)
		props.history.push(`/news?model=${index + 1}`)
	}
	const handleFocus = flag => {
		setIsFocus(flag)
	}
	const toLogin = () => {
		props.history.push('/login')
	}
	const handleEnter = e => {
		if (e.nativeEvent.keyCode === 13) {
			props.history.push(`/news/search?search=${e.target.value}`)
		}
	}
	return (
		<NavWrapper>
			<NavLeft>
				<Logo onClick={() => props.history.push('/')} />
			</NavLeft>
			<NavCenter>
				{newsPlate.map((item, index) => {
					return (
						<NavCenterItem
							key={item}
							onClick={() => {
								handleItemClick(index)
							}}
							className={classnames({
								active: currentIndex === index,
							})}
						>
							{item}
						</NavCenterItem>
					)
				})}
			</NavCenter>
			<NavRight>
				<NavRightSearchWrapper>
					<NavRightSearch
						onFocus={() => handleFocus(true)}
						onBlur={() => handleFocus(false)}
						onKeyDown={e => handleEnter(e)}
						className={classnames({ focus: isFocus })}
					/>
					<span
						className={classnames('iconfont', 'icon-sousuo', {
							focus: isFocus,
						})}
					></span>
				</NavRightSearchWrapper>
				{ownInformation.code === 200 ? (
					<UserName className='user' />
				) : (
					<LoginButton className='loginBtn' onClick={toLogin}>
						登录
					</LoginButton>
				)}
			</NavRight>
		</NavWrapper>
	)
})

export default withRouter(Header)
