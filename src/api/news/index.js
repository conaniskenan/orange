/*
 * @Author: hypocrisy
 * @Date: 2021-05-16 23:47:02
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 00:06:07
 * @FilePath: /orange/src/api/news/index.js
 */
import { get } from '@/api'

export const getNewsPlate = () => {
	return get('select/model')
}
