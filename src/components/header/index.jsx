/* eslint-disable no-unused-vars */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 18:12:08
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-07 20:49:16
 * @FilePath: /orange/src/components/header/index.jsx
 */
import classnames from 'classnames'
import React, { memo, useState } from 'react'
import LoginButton from 'components/loginButton'
import { withRouter } from 'react-router-dom'
import {
	NavWrapper,
	NavLeft,
	NavCenter,
	NavRight,
	NavLeftLogo,
	NavCenterItem,
	NavRightSearch,
	NavRightSearchWrapper,
} from './style'
import Logo from '../logo'

const Header = memo(props => {
	const [navList, setNavList] = useState([
		'要闻',
		'北京',
		'娱乐',
		'体育',
		'军事',
		'国际',
		'NBA',
		'科技',
		'汽车',
		'财经',
		'时尚',
		'游戏',
		'动漫',
		'政务',
	])
	const [currentIndex, setCurrentIndex] = useState(-1)
	const [isFocus, setIsFocus] = useState(false)
	const handleItemClick = index => {
		setCurrentIndex(index)
	}
	const handleFocus = flag => {
		setIsFocus(flag)
	}
	const toLogin = () => {
		console.log(111)
		props.history.push('/sign_in')
	}
	return (
		<NavWrapper>
			<NavLeft>
				<Logo />
			</NavLeft>
			<NavCenter>
				{navList.map((item, index) => {
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
