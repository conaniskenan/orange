/*
 * @Author: hypocrisy
 * @Date: 2021-05-24 21:38:31
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-25 15:13:23
 * @FilePath: /orange/src/pages/user/index.jsx
 */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Header from 'pages/home/header'
import { getRandList } from 'pages/home/store/actionCreators'
import Main from './main'
const Home = props => {
	useEffect(() => {
		document.title = '橘子新闻'
	}, [])
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRandList())
	}, [dispatch])
	return (
		<div>
			<Header />
			<Main />
			{renderRoutes(props.route.routes)}
		</div>
	)
}

export default Home
