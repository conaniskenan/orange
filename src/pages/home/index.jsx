/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 19:54:10
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 21:33:14
 * @FilePath: /orange/src/pages/home/index.jsx
 */
import React, { useEffect } from 'react'
import Header from './header'
import Main from './main'
import './style.css'

const Home = () => {
	useEffect(() => {
		document.title = '橘子新闻'
	}, [])
	return (
		<>
			<Header />
			<Main className='main' />
		</>
	)
}

export default Home
