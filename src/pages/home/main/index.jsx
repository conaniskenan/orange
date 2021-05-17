import React from 'react'
import Swiper from 'components/swiper'
import { MainWrapper } from './style'
import NewsInfo from '../newsInfo'

const Main = props => {
	return (
		<MainWrapper {...props}>
			<Swiper></Swiper>
			<NewsInfo></NewsInfo>
		</MainWrapper>
	)
}

export default Main
