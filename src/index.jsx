/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 17:35:26
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-04 01:43:55
 * @FilePath: /orange/src/index.jsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from 'assets/css/reset'
import 'assets/iconfont/iconfont.css'

ReactDOM.render(
	<>
		<GlobalStyle />
		<App />
	</>,
	document.getElementById('root')
)
