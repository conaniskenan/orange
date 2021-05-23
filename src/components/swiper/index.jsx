/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import swiper from 'swiper'
import { useSelector, shallowEqual } from 'react-redux'
import { withRouter } from 'react-router-dom'

import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
import './style.css'

const Swiper = props => {
	const { newsRanList } = useSelector(
		state => ({
			newsRanList: state
				.getIn(['home', 'newsRandList'])
				?.toJS()
				?.slice(0, 5),
		}),
		shallowEqual
	)
	useEffect(() => {
		new swiper('.swiper-container', {
			loop: true, // 循环模式选项
			autoplay: {
				delay: 3000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			},
			// 如果需要前进后退按钮
			navigation: {
				nextEl: '.swiper-button-next ',
				prevEl: '.swiper-button-prev',
			},
			// 如果需要滚动条
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// },
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper
		})
	}, [newsRanList])
	return (
		<div className='swiper-container'>
			<div className='swiper-wrapper'>
				{newsRanList?.map((item, index) => {
					return (
						<div
							className={`swiper-slide swiper-slide${index + 1}`}
							key={item.id}
						>
							<img
								onClick={() => {
									props.history.push({
										pathname: `/news/${item.id}`,
										state: item,
									})
								}}
								src={`${process.env.REACT_APP_URLP}/file/get/picture/${item?.photo}`}
								alt={`${item.title}`}
								title={`${item.title}`}
								width='100%'
								height='100%'
							/>
						</div>
					)
				})}
			</div>
			{/* <!-- 如果需要分页器 --> */}
			<div className='swiper-pagination'></div>
			{/* <!-- 如果需要导航按钮 --> */}
			<div className='swiper-button-prev swiper-button-white'></div>
			<div className='swiper-button-next swiper-button-white'></div>
		</div>
	)
}

export default withRouter(Swiper)
