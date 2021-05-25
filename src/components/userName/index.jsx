import React, { useState } from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
import { UserNameWrapper, User, Info } from './style'
import { useSelector, shallowEqual } from 'react-redux'

const UserName = props => {
	const [userHover, setUserHover] = useState(false)
	const [infoHover, setInfoHover] = useState(false)
	const { ownInformation } = useSelector(
		state => ({
			ownInformation: state.getIn(['user', 'ownInformation'])?.toJS(),
		}),
		shallowEqual
	)
	return (
		<UserNameWrapper {...props}>
			<User
				onMouseEnter={() => setUserHover(true)}
				onMouseLeave={() => setUserHover(false)}
			>
				<img
					src={`${process.env.REACT_APP_URLP}/file/get/picture/${ownInformation?.info?.head}`}
					alt=''
					width='100%'
					height='100%'
				/>
			</User>
			<Info
				className={classnames({ userhover: userHover || infoHover })}
				onMouseEnter={() => setInfoHover(true)}
				onMouseLeave={() => setInfoHover(false)}
			>
				<div
					onClick={() => {
						props.history.push({
							pathname: `/user/${ownInformation?.info?.id}`,
							state: {
								userId: ownInformation?.info?.id,
							},
						})
					}}
				>
					个人中心
				</div>
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
