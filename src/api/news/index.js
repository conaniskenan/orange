/*
 * @Author: hypocrisy
 * @Date: 2021-05-16 23:47:02
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-20 22:16:32
 * @FilePath: /orange/src/api/news/index.js
 */
import { get, getp } from '@/api'

/**
 * @description:
 * @param {*}
 * @return {*}
 */
export const getNewsPlate = () => {
	return get('select/model')
}
export const getRandNews = () => {
	return get('rand')
}
export const getModelNews = index => {
	return get(`select/news/${index}`, { begin: 0, count: 10 })
}
export const getNewsContent = index => {
	return getp(`file/get/html/${index}`)
}
