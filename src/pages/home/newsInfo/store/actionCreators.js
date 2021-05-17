/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 22:38:28
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 23:08:22
 * @FilePath: /orange/src/pages/home/newsInfo/store/actionCreators.js
 */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:36:25
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 22:41:49
 * @FilePath: /orange/src/pages/home/newsInfo/store/actionCreators.js
 */
import { constants } from './index'
import { fromJS } from 'immutable'
import { getRandNews } from '@/api/news'

const getListAction = data => ({
	type: constants.GET_LIST,
	value: fromJS(data),
})
export const getList = () => {
	return async dispatch => {
		const res = await getRandNews()
		dispatch(getListAction(res.list))
	}
}
