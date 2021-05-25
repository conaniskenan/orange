/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import {
	MainWrapper,
	Top,
	TopLeft,
	TopRight,
	Button,
	Edit,
} from './style'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getUser } from 'pages/user/store/actionCreators'
import { getTime } from '@/utils'
import { userAttention, userBlack } from '@/api/users'
const Main = props => {
	const [attention, setAttention] = useState('关注')
	const [black, setBlack] = useState('拉黑')
	const { userInformation } = useSelector(
		state => ({
			userInformation: state
				.getIn(['user', 'userInformation'])
				?.toJS(),
		}),
		shallowEqual
	)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getUser(props.match.url.replace(/\/user\//, '')))
	}, [dispatch])
	const handleAttention = () => {
		if (attention === '关注') {
			userAttention({ id: userInformation.info?.id, flag: true })
			setAttention('取消关注')
			userBlack({ id: userInformation.info?.id, flag: false })
			setBlack('拉黑')
		} else {
			userAttention({ id: userInformation.info?.id, flag: false })
			setAttention('关注')
		}
	}
	const handleBlack = () => {
		if (black === '拉黑') {
			userBlack({ id: userInformation.info?.id, flag: true })
			setBlack('取消拉黑')
			userAttention({ id: userInformation.info?.id, flag: false })
			setAttention('关注')
		} else {
			userBlack({ id: userInformation.info?.id, flag: false })
			setBlack('拉黑')
		}
	}
	return (
		<MainWrapper>
			<Top>
				<TopLeft>
					<img
						src={`${process.env.REACT_APP_URLP}/file/get/picture/${userInformation?.info?.head}`}
						alt=''
					/>
				</TopLeft>
				<TopRight>
					<div className='name'>
						{userInformation.info?.name}
						<span>
							(上次登录:{getTime(userInformation.info?.lastLoginTime)}
							)
						</span>
					</div>
					<div className='introduce'>
						个人介绍:
						{userInformation.info?.introduce ?? '写点什么吧...'}
					</div>
					<div>关注:{userInformation.info?.idol ?? 0}</div>
					<div
						onClick={() => {
							props.history.push(
								`/user/${userInformation.info?.id}/collect`
							)
						}}
					>
						收藏:{userInformation.info?.collect ?? 0}
					</div>
					<div>粉丝:{userInformation.info?.fans ?? 0}</div>
					<div>硬币:{userInformation.info?.coin ?? 0}</div>
				</TopRight>
				{userInformation.isMe && (
					<Edit
						onClick={() =>
							props.history.push(
								`/user/${userInformation.info?.id}/edit`
							)
						}
					>
						编辑资料
					</Edit>
				)}
				{!userInformation.isMe && (
					<>
						<Button onClick={handleAttention}>{attention}</Button>
						<Button onClick={handleBlack}>{black}</Button>
					</>
				)}
			</Top>
		</MainWrapper>
	)
}

export default withRouter(Main)