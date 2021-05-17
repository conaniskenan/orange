/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 17:35:26
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-16 23:47:14
 * @FilePath: /orange/src/index.jsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from 'assets/css/reset'
import 'assets/iconfont/iconfont.css'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
