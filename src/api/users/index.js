/*
 * @Author: hypocrisy
 * @Date: 2021-05-23 20:31:31
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-23 21:19:39
 * @FilePath: /orange/src/api/users/index.js
 */
import { get, post } from '@/api'

export const checkNumber = data => {
	return get(`/phone/${data}`)
}
export const register = data => {
	return post('/register', data)
}
export const login = data => {
	return post('/login/normal', data)
}
export const getUserInfo = () => {
	return get('/token/user/information/0')
}
