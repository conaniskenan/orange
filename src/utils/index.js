/*
 * @Author: hypocrisy
 * @Date: 2021-05-08 17:21:35
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-08 17:22:20
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
