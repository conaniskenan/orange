import React, { useEffect } from 'react'
import Header from 'components/header'

const Home = () => {
	useEffect(() => {
		document.title = '橘子新闻'
	}, [])
	return <Header />
}

export default Home
