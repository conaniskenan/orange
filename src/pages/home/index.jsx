/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 19:54:10
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-23 19:27:00
 * @FilePath: /orange/src/pages/home/index.jsx
 */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from './header'
import Main from './main'
import './style.css'
import { getRandList } from './store/actionCreators'
const Home = () => {
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
			<Main className='main' />
		</div>
	)
}

export default Home
