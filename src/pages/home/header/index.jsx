/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 18:12:08
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-23 19:24:12
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
import { getList, getModelList } from '../store/actionCreators'

const Header = memo(props => {
	const [currentIndex, setCurrentIndex] = useState(-1)
	const [isFocus, setIsFocus] = useState(false)
	const { newsPlate } = useSelector(
		state => ({
			newsPlate: state.getIn(['home', 'newsPlate']),
		}),
		shallowEqual
	)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getList())
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
						className={classnames({ focus: isFocus })}
					/>
					<span
						className={classnames('iconfont', 'icon-sousuo', {
							focus: isFocus,
						})}
					></span>
				</NavRightSearchWrapper>
				<LoginButton className='loginBtn' onClick={toLogin}>
					登录
				</LoginButton>
			</NavRight>
		</NavWrapper>
	)
})

export default withRouter(Header)
