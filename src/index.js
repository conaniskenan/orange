/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 17:35:26
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-08 14:39:52
 * @FilePath: /orange/src/index.js
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
