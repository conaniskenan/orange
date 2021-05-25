/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:36:25
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-25 16:07:15
 * @FilePath: /orange/src/pages/user/store/reducer.js
 */
import { constants } from './index'
import { fromJS } from 'immutable'

const initalState = fromJS({
	ownInformation: [],
	userInformation: [],
	userCollections: [],
})

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case constants.GET_OwnInfo:
			return state.set('ownInformation', action.value)
		case constants.GET_UserInfo:
			return state.set('userInformation', action.value)
		case constants.GET_UserCollect:
			return state.set('userCollections', action.value)
		default:
			return state
	}
}
export default reducer
