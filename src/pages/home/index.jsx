/*
 * @Author: hypocrisy
 * @Date: 2021-05-07 19:54:10
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-12 21:30:08
 * @FilePath: /orange/src/pages/home/index.jsx
 */
import React, { useEffect } from 'react'
import Header from 'components/header'

const Home = () => {
	useEffect(() => {
		document.title = '橘子新闻'
	}, [])
	return <Header />
}

export default Home
