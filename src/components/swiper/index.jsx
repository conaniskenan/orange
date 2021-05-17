import React, { useEffect } from 'react'
import swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
import './style.css'

const Swiper = () => {
	useEffect(() => {
		new swiper('.swiper-container', {
			loop: true, // 循环模式选项
			autoplay: {
				delay: 1000,
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
	}, [])
	return (
		<div className='swiper-container'>
			<div className='swiper-wrapper'>
				<div className='swiper-slide swiper-slide1'></div>
				<div className='swiper-slide swiper-slide2'></div>
				<div className='swiper-slide swiper-slide3'></div>
				<div className='swiper-slide swiper-slide4'></div>
				<div className='swiper-slide swiper-slide5'></div>
			</div>
			{/* <!-- 如果需要分页器 --> */}
			<div className='swiper-pagination'></div>
			{/* <!-- 如果需要导航按钮 --> */}
			<div className='swiper-button-prev swiper-button-white'></div>
			<div className='swiper-button-next swiper-button-white'></div>
		</div>
	)
}

export default Swiper
