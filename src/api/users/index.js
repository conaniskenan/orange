/*
 * @Author: hypocrisy
 * @Date: 2021-05-23 20:31:31
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-29 00:15:14
 * @FilePath: /orange/src/api/users/index.js
 */
import { get, post, postp } from '@/api'

export const checkNumber = data => {
	return get(`/phone/${data}`)
}
export const register = data => {
	return post('/register', data)
}
export const login = data => {
	return post('/login/normal', data)
}
export const loginPhone = data => {
	return post('/login/phone', data)
}
export const reset = data => {
	return post('/forget', data)
}
export const getUserInfo = id => {
	return get(`/token/user/information/${id}`)
}
export const userAttention = data => {
	return post('/token/user/attention', data)
}
export const userBlack = data => {
	return post('/token/admin/user/set', data)
}
export const userIdol = () => {
	return get('/token/user/idol', { begin: 0, count: 10 })
}
export const userCollections = () => {
	return get('/token/user/news', { begin: 0, count: 10 })
}
export const userUpdate = data => {
	return post('/token/user/update', data)
}
export const userUpdateHead = data => {
	return postp('/token/file/upload/picture', data)
}
export const userIsCollect = data => {
	return post('/token/user/collect', data)
}
export const userIsStar = data => {
	return post('/token/star', data)
}
export const userIsCoin = data => {
	return post('/token/coin', data)
}
