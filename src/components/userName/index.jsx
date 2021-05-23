import React, { useState } from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
import { UserNameWrapper, User, Info } from './style'

const UserName = props => {
	const [userHover, setUserHover] = useState(false)
	const [infoHover, setInfoHover] = useState(false)
	return (
		<UserNameWrapper {...props}>
			<User
				onMouseEnter={() => setUserHover(true)}
				onMouseLeave={() => setUserHover(false)}
			>
				欢迎
			</User>
			<Info
				className={classnames({ userhover: userHover || infoHover })}
				onMouseEnter={() => setInfoHover(true)}
				onMouseLeave={() => setInfoHover(false)}
			>
				<div>个人中心</div>
				<div
					onClick={() => {
						localStorage.removeItem('token')
						props.history.push('/')
					}}
				>
					退出
				</div>
			</Info>
		</UserNameWrapper>
	)
}

export default withRouter(UserName)
