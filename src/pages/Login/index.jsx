/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 20:26:57
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-18 01:17:18
 * @FilePath: /orange/src/pages/login/index.jsx
 */
import React from 'react'
import { renderRoutes } from 'react-router-config'
import { LoginImg, LoginWrapper, Center } from './style'
//import { withRouter } from 'react-router-dom'
import Logo from 'components/logo'
const Login = props => {
	return (
		<LoginWrapper>
			<Logo
				className='logo'
				onClick={() => props.history.push('/')}
			/>
			<Center>
				<LoginImg />
				<div className='form'>{renderRoutes(props.route.routes)}</div>
			</Center>
		</LoginWrapper>
	)
}

export default Login
