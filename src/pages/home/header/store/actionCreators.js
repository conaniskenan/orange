/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:36:25
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 17:41:45
 * @FilePath: /orange/src/pages/home/header/store/actionCreators.js
 */
import { constants } from './index'
import { fromJS } from 'immutable'
import { getNewsPlate } from '@/api/news'

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
