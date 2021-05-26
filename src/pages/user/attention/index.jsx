/*
 * @Author: hypocrisy
 * @Date: 2021-05-25 15:06:08
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 19:48:49
 * @FilePath: /orange/src/pages/user/attention/index.jsx
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { AttentionWrapper, User } from './style'
import { userIdol } from '@/api/users'

const Attention = props => {
	const [list, setList] = useState([])
	useEffect(() => {
		userIdol().then(res => {
			setList(res.list)
		})
	}, [])
	return (
		<AttentionWrapper>
			{list.map(item => {
				return (
					<User>
						<div
							className='head'
							onClick={() => {
								props.history.push(`/user/${item.id}`)
								props.history.go(0)
							}}
						>
							<img
								src={`${process.env.REACT_APP_URLP}/file/get/picture/${item?.head}`}
								alt=''
							/>
						</div>
						<div className='name'>{item?.name}</div>
					</User>
				)
			})}
		</AttentionWrapper>
	)
}

export default Attention
