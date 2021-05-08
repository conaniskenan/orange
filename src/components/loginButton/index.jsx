/*
 * @Author: hypocrisy
 * @Date: 2021-05-06 14:59:23
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-07 20:39:51
 * @FilePath: /orange/src/components/loginButton/index.jsx
 */
import React, { memo } from 'react'
import { Button } from './style'

const LoginButton = memo(props => {
	return (
		<Button {...props}>
			<span className='content'>{props.children}</span>
		</Button>
	)
})
export default LoginButton
