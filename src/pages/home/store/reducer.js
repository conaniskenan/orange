/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:36:25
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-20 20:21:53
 * @FilePath: /orange/src/pages/home/store/reducer.js
 */
import { constants } from './index'
import { fromJS } from 'immutable'

const initalState = fromJS({
	newsPlate: [],
	newsRandList: [],
	newsModelList: [],
	newsContent: '',
})

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case constants.GET_LIST:
			return state.set('newsPlate', action.value)
		case constants.GET_RANDLIST:
			return state.set('newsRandList', action.value)
		case constants.GET_MODELLIST:
			return state.set('newsModelList', action.value)
		case constants.GET_NEWS_CONTENT:
			return state.set('newsContent', action.value)
		default:
			return state
	}
}
export default reducer
