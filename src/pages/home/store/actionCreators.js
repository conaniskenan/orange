/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:36:25
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-20 20:30:05
 * @FilePath: /orange/src/pages/home/store/actionCreators.js
 */
import { constants } from './index'
import { fromJS } from 'immutable'
import {
	getNewsPlate,
	getRandNews,
	getModelNews,
	getNewsContent,
} from '@/api/news'

/**
 * @description: 获取新闻版块
 * @param * data
 * @return {*}
 */
const getListAction = data => ({
	type: constants.GET_LIST,
	value: fromJS(data),
})
export const getList = () => {
	return async dispatch => {
		const res = await getNewsPlate()
		const list = []
		for (const item of res.list) {
			list.push(item.name)
		}
		dispatch(getListAction(list))
	}
}
/**
 * @description: 随机获取新闻列表
 * @param * data
 * @return {*}
 */
const getRandListAction = data => ({
	type: constants.GET_RANDLIST,
	value: fromJS(data),
})
export const getRandList = () => {
	return async dispatch => {
		const res = await getRandNews()
		dispatch(getRandListAction(res.list))
	}
}

/**
 * @description: 根据版块id获取新闻列表
 * @param * data
 * @return {*}
 */
const getModelListAction = data => ({
	type: constants.GET_MODELLIST,
	value: fromJS(data),
})
export const getModelList = index => {
	return async dispatch => {
		const res = await getModelNews(index)
		dispatch(getModelListAction(res.list))
	}
}

/**
 * @description: 获取新闻详情
 * @param * data
 * @return {*}
 */
const getnewsContentAction = data => ({
	type: constants.GET_NEWS_CONTENT,
	value: fromJS(data),
})
export const getnewsContent = index => {
	return async dispatch => {
		const res = await getNewsContent(index)
		dispatch(getnewsContentAction(res))
	}
}
