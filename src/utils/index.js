/*
 * @Author: hypocrisy
 * @Date: 2021-05-08 17:21:35
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 23:24:41
 * @FilePath: /orange/src/utils/index.js
 */
import { useState, useEffect } from 'react'
export const useDebounce = (value, delay) => {
	const [debouceValue, setDebouceValue] = useState(value)
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouceValue(value)
		}, delay)
		return () => {
			clearTimeout(timer)
		}
	}, [value, delay])
	return debouceValue
}
export const getTime = t => {
	let time = new Date(t)
	return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}
