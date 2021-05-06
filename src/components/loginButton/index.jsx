/*
 * @Author: hypocrisy
 * @Date: 2021-05-06 14:59:23
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-06 15:37:30
 * @FilePath: /orange/src/components/loginButton/index.js
 */
import React, { memo } from 'react'
import { Button } from './style'

const LoginButton = memo(({ className }) => {
	return (
		<Button className={className}>
			<span className='content'>登录</span>
		</Button>
	)
})
export default LoginButton
