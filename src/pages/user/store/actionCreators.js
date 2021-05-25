/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:36:25
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-25 20:39:37
 * @FilePath: /orange/src/pages/user/store/actionCreators.js
 */
import { constants } from './index'
import { fromJS } from 'immutable'
import { getUserInfo, userCollections } from '@/api/users'

const getOwnAction = data => ({
	type: constants.GET_OwnInfo,
	value: fromJS(data),
})
export const getOwn = id => {
	return async dispatch => {
		const res = await getUserInfo(id)
		dispatch(getOwnAction(res))
	}
}
const getUserAction = data => ({
	type: constants.GET_UserInfo,
	value: fromJS(data),
})
export const getUser = id => {
	return async dispatch => {
		const res = await getUserInfo(id)
		dispatch(getUserAction(res))
	}
}
const getUserCollectAction = data => ({
	type: constants.GET_UserCollect,
	value: fromJS(data),
})
export const getUserCollect = () => {
	return async dispatch => {
		const res = await userCollections()
		dispatch(getUserCollectAction(res.list))
	}
}
// const getUserAttentionAction = data => ({
// 	type: constants.GET_Attention,
// 	value: fromJS(data),
// })
// export const getUserAttention = () => {
// 	return async dispatch => {
// 		const res = await userCollections()
// 		dispatch(getUserAttentionAction(res.list))
// 	}
// }
