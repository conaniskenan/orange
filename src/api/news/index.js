/*
 * @Author: hypocrisy
 * @Date: 2021-05-16 23:47:02
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-27 16:42:14
 * @FilePath: /orange/src/api/news/index.js
 */
import { get, getp, post } from '@/api'

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
export const getNewsById = index => {
	return get(`/token/news/${index}`)
}
export const getNewsComment = data => {
	return post('/token/comment/list/normal', data)
}

export const addComment = data => {
	return post('/token/comment/insert', data)
}
export const newsSearch = data => {
	return post('/search', data)
}
export const deleteComment = index => {
	return post(`/token/comment/delete/${index}`)
}
export const reportComment = index => {
	return post(`/token/comment/report/${index}`)
}
